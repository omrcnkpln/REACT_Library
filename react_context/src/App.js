import './App.css';
import Home from './component/Home';
import { SiteProvider, AuthProvider } from './context';

function App() {
  return (
    <SiteProvider>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </SiteProvider>
  );
}

export default App;
