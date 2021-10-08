import { BellyBandSpec } from '../belly-band'
import { useBellyBands } from '../redux/belly-band-redux'

export const BellyBandEditor = (props: { band: BellyBandSpec, index: number }) => {
  const {addBellyBand, updateBellyBand} = useBellyBands();
  const { band, index } = props;

  function handleWidthChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number) {
    handleChange(index, {
      width: parseInt(event.target.value),
    })
  }

  function handleHeightChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number) {
    handleChange(index, {
      height: parseInt(event.target.value),
    })
  }

  function handleDepthChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number) {
    handleChange(index, {
      depth: parseInt(event.target.value),
    })
  }

  function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number) {
    handleChange(index, {
      text: event.target.value,
    })
  }

  function handleTextSizeChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number) {
    handleChange(index, {
      textSize: parseInt(event.target.value),
    })
  }

  function handleRotateChange(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    handleChange(index, {
      rotate: event.target.checked,
    })
  }

  function handleChange(index: number, patchValues: Partial<BellyBandSpec>) {
    updateBellyBand({
      index,
      patchValues
    })
  }

  return (
    <div key={index}>
      <label>Width</label>
      <input type="text" value={band.width} onChange={e => handleWidthChange(e, index)}></input>

      <label>Height</label>
      <input type="text" value={band.height} onChange={e => handleHeightChange(e, index)}></input>

      <label>Depth</label>
      <input type="text" value={band.depth} onChange={e => handleDepthChange(e, index)}></input>

      <label>Text</label>
      <textarea value={band.text} onChange={e => handleTextChange(e, index)}></textarea>

      <label>Text Size</label>
      <input type="text" value={band.textSize} onChange={e => handleTextSizeChange(e, index)}></input>

      <input id="rotate-checkbox" type="checkbox" checked={band.rotate} onChange={e => handleRotateChange(e, index)}></input>
      <label htmlFor="rotate-checkbox">Rotate Text</label>

      <button onClick={() => addBellyBand()}>Add</button>
    </div>
  )
}
