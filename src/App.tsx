import { PDFViewer } from '@react-pdf/renderer'
import { Provider } from 'react-redux'
import './App.css';
import { BellyBandEditor } from './form/BellyBandEditor'
import { MyPdf } from './Pdf'
import { useBellyBands } from './redux/belly-band-redux'
import { store } from './redux/store'

const App = () => {
  const {bellyBands} = useBellyBands();

  return (
    <div className="App">
      { bellyBands.map(band => (
        <BellyBandEditor key={band.id} band={band} />
      )) }
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
