import logo from './logo.svg';
import './App.css';
import { WORLDHEXAGONMAP } from './components/WORLDHEXAGONMAP';
import { BubbleChart } from './components/BubbleChart';
import WorldHexagonMap from './components/WorldHexagonMap/WorldHexagonMap';
import OverLay from './components/OverLay/OverLay';

// import HexMapIcon from './components/HexMapIcon/HexMapIcon';
// import InformerInfoWithIcon from './components/InformerInfoWithIcon/InformerInfoWithIcon';


function App() {
  return (
    <div className="App">
      <WorldHexagonMap />
      {/* <WorldHexagonMap /> */}
      <OverLay><WorldHexagonMap /></OverLay>
      {/* <WORLDHEXAGONMAP /> */}
      <BubbleChart />
      {/* <HexMapIcon /> */}
      {/* <InformerInfoWithIcon /> */}
    </div>
  );
}

export default App;
