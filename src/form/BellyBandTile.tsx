import { BellyBandSpec } from '../belly-band'
import { useEditBellyBand } from '../redux/editTileRedux'

export const BellyBandTile = (props: { band: BellyBandSpec }) => {
  const { editBellyBand } = useEditBellyBand()
  const { band } = props

  return (
    <div style={{
      display: 'inline-block',
      border: '1px solid',
      height: '200px',
      lineHeight: '200px',
      width: '200px',
      cursor: 'pointer',
      textAlign: 'center',
    }}
      onClick={() => editBellyBand(band)}
    >
        { band.text }
    </div>
  )
}