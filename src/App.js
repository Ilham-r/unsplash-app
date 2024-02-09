
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom';
import './App.css';
import Navbar from './containers/navbar';
import Homepage from './containers/homepage';
import ResaultPage from './containers/resaultpage';
import ImageDetails from'./containers/imagedetails'
import Collections from './containers/collections';
import CollectionPhotos from './containers/collectionPhotos';
function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Navigate to="/unsplash-app" replace />} />
      <Route path="/unsplash-app" element={<Homepage />} />
          <Route path="/results/:query" element={<ResaultPage  />} />
          <Route path="/imagedtail/:id" element={<ImageDetails />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/photos/:id" element={<CollectionPhotos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
