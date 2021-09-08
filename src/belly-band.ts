export type BellyBandSpec = {
  width: number
  height: number
  depth: number
  text: string
  textSize: number
  rotate: boolean
}

export type Rectangle = {
  width: number
  height: number
}

export type BoundingBox = {
  left: number
  top: number
  width: number
  height: number
}

const pointsPerInch = 72;
const mmPerInch = 24.4;
export const pointsPerMm = pointsPerInch / mmPerInch;

export class BellyBand {
  private widthPoints = this.spec.width * pointsPerMm;
  private heightPoints = this.spec.height * pointsPerMm;
  private depthPoints = this.spec.depth * pointsPerMm;

  constructor(private spec: BellyBandSpec) {}

  public getRectangles(): Rectangle[] {
    return [
      {
        width: this.heightPoints,
        height: this.widthPoints * 0.75,
      },
      {
        width: this.heightPoints,
        height: this.depthPoints,
      },
      {
        width: this.heightPoints,
        height: this.widthPoints,
      },
      {
        width: this.heightPoints,
        height: this.depthPoints,
      },
      {
        width: this.heightPoints,
        height: this.widthPoints * 0.75,
      },
    ];
  }

  public getTextBoundingBox(): BoundingBox {
    return {
      left: 40,
      width: this.heightPoints,
      top: this.widthPoints * 0.75 + this.depthPoints + 40,
      height: this.widthPoints,
    }
  } 

  public getText(): string {
    return this.spec.text;
  }
}