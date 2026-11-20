/**
 * Estado del muro de logos rotatorio: `slots` son las celdas (índices de logo) y `queue` los
 * logos que esperan turno. Las celdas a partir de `visible` están ocultas por CSS en pantallas
 * pequeñas: se rellenan con los primeros de la cola para que, si la ventana crece, aparezcan
 * logos distintos de los ya visibles.
 */
export interface LogoRotation {
  slots: number[]
  queue: number[]
}

/** Estado inicial: las celdas muestran los primeros logos, en orden (igual en servidor y cliente). */
export function createLogoRotation(total: number, cells: number): LogoRotation {
  const slots = Array.from({ length: cells }, (_, i) => i % Math.max(total, 1))
  return syncLogoRotation({ slots, queue: [] }, total, cells)
}

/** Recalcula la cola y las celdas ocultas a partir de las `visible` primeras celdas. */
export function syncLogoRotation(
  state: LogoRotation,
  total: number,
  visible: number,
): LogoRotation {
  const shown = new Set(state.slots.slice(0, visible))
  const queue = state.queue.filter((i) => !shown.has(i))
  for (let i = 0; i < total; i++) if (!shown.has(i) && !queue.includes(i)) queue.push(i)
  const slots = state.slots.map((logo, i) =>
    i < visible || !queue.length ? logo : queue[(i - visible) % queue.length]!,
  )
  return { slots, queue }
}

/**
 * Cambia el logo de la celda `cell` (entre las visibles) por el siguiente de la cola;
 * el que sale pasa al final. Sin logos en espera, no cambia nada.
 */
export function rotateLogo(
  state: LogoRotation,
  total: number,
  visible: number,
  cell: number,
): LogoRotation {
  const [incoming, ...rest] = state.queue
  if (incoming === undefined || cell < 0 || cell >= visible) return state
  const slots = [...state.slots]
  const outgoing = slots[cell]!
  slots[cell] = incoming
  return syncLogoRotation({ slots, queue: [...rest, outgoing] }, total, visible)
}
