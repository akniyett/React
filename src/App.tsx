import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import Modal from 'react-modal';
import './App.css';


function App() {

  const [isOpen, setOpen] = useState<boolean>(false);

  const openModal = () => {
    setOpen(!isOpen);
  }

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div className="App">
      <Modal
        isOpen={isOpen}
      >

<div className="rgb">
        <div className="canvas">
            <div className="well">
                <h2>Добро пожаловать!</h2>
            </div>
            <div className="about">
                Вы соглашаетесь на уведомления о наших свежих новостях?
                <br/> Благодаря соглашению вы первыми узнаете новости!
            </div>
            <img src="https://img.icons8.com/ios-filled/2x/lunacy-new.png" alt="" className="img-canvas" />
            <div className="buttons">
                <button className="btn-1" onClick={openModal}>Соглашаюсь</button>
                <button className="btn-2" onClick={openModal}>Нет, спасибо!</button>
            </div>
        </div>
    </div>
      </Modal>
      <button onClick={openModal}>Open</button>
    </div>
  );
}

export default App;
