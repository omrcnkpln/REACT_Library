import { useState } from 'react';
import AddTodo from "./todo/add";
import TodoList from "./todo/list";
import Header from "./todo/header";
import Modal from "./todo/modal";
import { useSelector } from 'react-redux';

function App() {

  const { open: isModalOpen } = useSelector(state => state.modal);
  const [language, setLanguage] = useState('tr');
  const [dark, setDark] = useState(true);

  return (
    <>
      <main>
        {isModalOpen && <Modal />}
        <Header />
        <AddTodo />
        <TodoList />
      </main>
    </>
  );
}

export default App;
