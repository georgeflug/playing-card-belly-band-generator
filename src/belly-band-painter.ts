import { BellyBandSpec } from './belly-band'
import { getRectangles } from './belly-band-layout-calculator'
import { Painter } from './Painter'

export function paintBellyBands(painter: Painter, bellyBands: BellyBandSpec[]): null {
  for (let rect of getRectangles(bellyBands)) {
    painter.rect(rect.left, rect.top, rect.width, rect.height).stroke();
  }
  return null;
}
