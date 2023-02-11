import './App.css';
import Tab from './components/Tab';
import { useState } from 'react';

function Profile() {
  console.log('Profile tab render');
  
  return (
    <>Profile Tab</>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <button onClick={() => setActiveTab(2)}>
        Aktif Tabı Değiştir
      </button>

      {/* setActiveTab={setActiveTab} */}
      <Tab activeTab={activeTab} onChange={tabIndex => setActiveTab(tabIndex)}>
        <Tab.Panel title="Profil"><Profile /></Tab.Panel>
        <Tab.Panel title="Hakkında">2.Tab</Tab.Panel>
        <Tab.Panel title="Ayarlar">3.Tab</Tab.Panel>
      </Tab>

      {activeTab == 2 && (
        <div>
          extra section
        </div>
      )}
    </>
  );
}

export default App;
