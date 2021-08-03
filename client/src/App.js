import './App.css';
import { Router } from '@reach/router';
import ProductForm from './components/ProductForm';
import Edit from './views/Edit';
import Main from './views/Main';
import NewFolder from './views/NewFolder';
import KK from './views/KK';
function App() {
  return (
    <div className="App">
      <Router>
      <ProductForm path="/"/>
      <Main path="/hoda"/>
      <NewFolder path="/products/:id"/>
      <Edit path="/products/:id/edit "/>
      <KK path="/edit/:id"/>
      </Router>
   
    
    </div>
  );
}

export default App;
