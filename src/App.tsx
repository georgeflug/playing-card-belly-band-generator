import { PDFViewer } from '@react-pdf/renderer'
import { Provider } from 'react-redux'
import './App.css';
import { BellyBandSpec } from './belly-band'
import { MyPdf } from './Pdf'
import { useBellyBands } from './redux/belly-band-redux'
import { store } from './redux/store'

const App = () => {
  const {bellyBands, addBellyBand, updateBellyBand} = useBellyBands();
  const index = 0
  const editingBand = bellyBands[index]

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

  function handleChange(patchValues: Partial<BellyBandSpec>) {
    updateBellyBand({
      index,
      patchValues
    })
  }

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <div>
        <label>Width</label>
        <input type="text" value={editingBand.width} onChange={handleWidthChange}></input>

        <label>Height</label>
        <input type="text" value={editingBand.height} onChange={handleHeightChange}></input>

        <label>Depth</label>
        <input type="text" value={editingBand.depth} onChange={handleDepthChange}></input>

        <button>Add</button>
      </div>
      <div>
        <PDFViewer width="100%" height="1024px">
          <Provider store={store}>
            <MyPdf />
          </Provider>
        </PDFViewer>
      </div>
      {/* </header> */}
    </div>
  );
}

export default App;
