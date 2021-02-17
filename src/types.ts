export type CoefName = 'a11' | 'a12' | 'a22' | 'a13' | 'a23' | 'a33'
export type CoefsMap = Record<CoefName, number>
export type Conic = (x: number, y: number) => number
export type AbsoluteDimensions = {
  canvasWidth: number
  canvasHeight: number
  resolution: number
  spanHoriz: number
  spanVert: number
  xOrigin: number
  yOrigin: number
}
export type RelativeDimensions = {
  canvasWidth: number
  canvasHeight: number
  xOriginRatio: number
  yOriginRatio: number
  spanHoriz: number
  spanVert: number
  resolutionRatio: number
  unitsSize: number
}

export function withOwnFields<T>(data: T) {
  return <D>() => data as T & D
}
