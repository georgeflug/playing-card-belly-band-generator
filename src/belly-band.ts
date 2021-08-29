export type BellyBandSpec = {
  width: number
  height: number
  depth: number
}

export type Rectangle = {
  width: number
  height: number
}

const pointsPerInch = 72;
const mmPerInch = 24.4;
const pointsPerMm = pointsPerInch / mmPerInch;

export class BellyBand {
  constructor(private spec: BellyBandSpec) {}

  public getRectangles(): Rectangle[] {
    const widthPoints = this.spec.width * pointsPerMm;
    const heightPoints = this.spec.height * pointsPerMm;
    const depthPoints = this.spec.depth * pointsPerMm;
    
    return [
      {
        width: heightPoints,
        height: widthPoints * 0.75,
      },
      {
        width: heightPoints,
        height: depthPoints,
      },
      {
        width: heightPoints,
        height: widthPoints,
      },
      {
        width: heightPoints,
        height: depthPoints,
      },
      {
        width: heightPoints,
        height: widthPoints * 0.75,
      },
    ];
  }
}