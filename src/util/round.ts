export default function round(n: number, precision = 0) {
  return Math.round(n * 10 ** precision) / 10 ** precision
}
