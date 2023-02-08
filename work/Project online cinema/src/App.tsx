import './app.css'
import { Content } from "./components/content/content";
import { Header } from "./components/header/header";
import { Modal } from "./components/login/login";
import { useState } from "react";
import { contextOpenModal } from "./context";



function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      {!openModal && 
      <>
        <Header setOpenModal={setOpenModal}/>
        <contextOpenModal.Provider value={{setOpenModal}}>
          <Content />
        </contextOpenModal.Provider>
      </>}
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  )
}

export default App
