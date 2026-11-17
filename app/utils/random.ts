/**
 * Generador pseudoaleatorio con semilla (mulberry32). Las ilustraciones generativas lo usan
 * para que el SVG sea idéntico en servidor y cliente (sin desajustes de hidratación).
 */
export function seededRandom(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Muestra de una normal estándar (Box–Muller) a partir de un generador uniforme. */
export function gaussian(rand: () => number) {
  const u = Math.max(rand(), 1e-9)
  const v = rand()
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
}

/** Redondea para acortar los atributos del SVG. */
export const r1 = (n: number) => Math.round(n * 10) / 10
