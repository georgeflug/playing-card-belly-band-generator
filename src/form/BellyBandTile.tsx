import { BellyBandSpec } from '../belly-band'
import { useEditBellyBand } from '../redux/editTileRedux'

export const BellyBandTile = (props: { band: BellyBandSpec }) => {
  const { editBellyBand } = useEditBellyBand()

  return (
    <div style={{display: 'inline-block', border: '1px solid', height: '200px', width: '200px', cursor: 'pointer'}}
      onClick={() => editBellyBand(props.band)}
    >
      Test
    </div>
  )
}