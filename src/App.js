import Routes from './routes/index';
import { Toaster } from 'react-hot-toast';
import './styles/App.scss';

function App() {
  return (
    <div>
      <Toaster />
      <Routes />
    </div>
  );
}

export default App;
