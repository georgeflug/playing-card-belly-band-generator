import { PDFViewer } from '@react-pdf/renderer'
import { useState } from 'react'
import { Provider } from 'react-redux'
import './App.css';
import { BellyBandEditor } from './form/BellyBandEditor'
import { BellyBandTile } from './form/BellyBandTile'
import { MyPdf } from './Pdf'
import { useBellyBands } from './redux/belly-band-redux'
import { useEditBellyBand } from './redux/editTileRedux'
import { store } from './redux/store'

const App = () => {
  const {bellyBands} = useBellyBands();
  const [ generated, setGenerated ] = useState(false)
  const { editingBellyBand } = useEditBellyBand()

  return (
    <div className="App">
      { editingBellyBand && (
        <BellyBandEditor band={editingBellyBand} />
      )}
      { !editingBellyBand && bellyBands.map(band => (
        <BellyBandTile key={band.id} band={band} />
      )) }
      { !editingBellyBand && (
        <div>
          <button onClick={() => setGenerated(true)}>Generate</button>
        </div>
      )}
      { !editingBellyBand && generated && (
        <div>
          <PDFViewer width="100%" height="1024px">
            <Provider store={store}>
              <MyPdf />
            </Provider>
          </PDFViewer>
        </div>
      )}
    </div>
  );
}

export default App;
