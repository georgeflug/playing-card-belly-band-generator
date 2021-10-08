import { BellyBandSpec } from '../belly-band'
import { useBellyBands } from '../redux/belly-band-redux'

export const BellyBandEditor = (props: { band: BellyBandSpec }) => {
  const {addBellyBand, updateBellyBand} = useBellyBands();
  const { band } = props;

  function handleWidthChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    handleChange({
      width: parseInt(event.target.value),
    })
  }

  function handleHeightChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    handleChange({
      height: parseInt(event.target.value),
    })
  }

  function handleDepthChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    handleChange({
      depth: parseInt(event.target.value),
    })
  }

  function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    handleChange({
      text: event.target.value,
    })
  }

  function handleTextSizeChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    handleChange({
      textSize: parseInt(event.target.value),
    })
  }

  function handleRotateChange(event: React.ChangeEvent<HTMLInputElement>) {
    handleChange({
      rotate: event.target.checked,
    })
  }

  function handleChange(patchValues: Partial<BellyBandSpec>) {
    updateBellyBand({
      id:band.id,
      patchValues
    })
  }

  return (
    <div>
      <label>Width</label>
      <input type="text" value={band.width} onChange={e => handleWidthChange(e)}></input>

      <label>Height</label>
      <input type="text" value={band.height} onChange={e => handleHeightChange(e)}></input>

      <label>Depth</label>
      <input type="text" value={band.depth} onChange={e => handleDepthChange(e)}></input>

      <label>Text</label>
      <textarea value={band.text} onChange={e => handleTextChange(e)}></textarea>

      <label>Text Size</label>
      <input type="text" value={band.textSize} onChange={e => handleTextSizeChange(e)}></input>

      <input id="rotate-checkbox" type="checkbox" checked={band.rotate} onChange={e => handleRotateChange(e)}></input>
      <label htmlFor="rotate-checkbox">Rotate Text</label>

      <button onClick={() => addBellyBand()}>Add</button>
    </div>
  )
}
