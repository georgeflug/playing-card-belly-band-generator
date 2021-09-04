export type Painter = {
  dash: (dashLength: number, optionalProps?: { space?: number, phase?: number }) => Painter
  clip: () => Painter
  save: () => Painter
  path: (svgPath: string) => Painter
  fill: () => Painter // todo
  font: (font: PdfFontName | Buffer | string) => Painter
  text: (text: string) => Painter
  rect: (x: number, y: number, width: number, height: number) => Painter
  scale: (factor: number) => Painter
  moveTo: (x: number, y: number) => Painter
  lineTo: (x: number, y: number) => Painter
  stroke: () => Painter
  rotate: (angle: number, optionalProps?: { origin?: [number, number]}) => Painter
  circle: (centerX: number, centerY: number, radius: number) => Painter
  lineCap: (type: PdfLineCap) => Painter
  opacity: (percent: number) => Painter
  ellipse: (centerX: number, centerY: number, radiusX: number, radiusY?: number) => Painter
  polygon: (...points: [number, number]) => Painter
  restore: () => Painter
  lineJoin: (type: PdfLineJoin) => Painter
  fontSize: (size: number) => Painter
  fillColor: (color: string | [number, number, number] | [number, number, number, number]) => Painter
  lineWidth: (width: number) => Painter
  translate: (x: number, y: number) => Painter
  miterLimit: () => Painter
  strokeColor: (color: string | [number, number, number] | [number, number, number, number]) => Painter
  fillOpacity: (percent: number) => Painter
  roundedRect: (x: number, y: number, width: number, height: number, cornerRadius: number) => Painter
  strokeOpacity: (percent: number) => Painter
  bezierCurveTo: () => Painter // todo
  quadraticCurveTo: () => Painter // todo
  linearGradient: () => Painter // todo
  radialGradient: () => Painter // todo
}

export type PdfFontName = 'Courier'
  | 'Courier-Bold'
  | 'Courier-Oblique'
  | 'Courier-BoldOblique'
  | 'Helvetica'
  | 'Helvetica-Bold'
  | 'Helvetica-Oblique'
  | 'Helvetica-BoldOblique'
  | 'Symbol'
  | 'Times-Roman'
  | 'Times-Bold'
  | 'Times-Italic'
  | 'Times-BoldItalic'
  | 'ZapfDingbats';

export type PdfLineCap = 'butt' | 'round' | 'square'
export type PdfLineJoin = 'miter' | 'round' | 'bevel'
