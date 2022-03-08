import { useState } from 'react';
import './app.css'
import Button from './components/button/Button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from './components/modal/Modal';

const info = {
    Last_Name: "Berrouk",
    First_Name: "Walid",
    Email: "jw_berrouk@esi.dz",
    Phone_number: "0555328714",
  }

function App() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Button onClick={() => setShowModal(true)}>
                Open modal
            </Button>
            <Modal
                show={showModal}
                setShow={setShowModal}
            // hideCloseButton
            >
              <div className="main">
      <h1 className="title" >Patricipant : walid berrouk</h1>
      <div className='grid-container'>
        <h2 className="name">Last Name</h2>
        <label className='name'>
          <input type="text" className="input"  />
        </label>
        <h2 className="name">First Name</h2>
        <label className='name'>
          <input type="text" className='input' />
        </label>
        <h2 className="name">Email</h2>
        <label className='name'>
          <input type="text" className='input' />
        </label> 
        <h2 className="name">Phone number</h2>
        <label className='name'>
          <input type="text" className='input' />
        </label>
        <div className='grid-container2'>
          <h1 className="Btn1" >Edit</h1>
          <h1 className="Btn2" >Delete</h1>   
        </div> 
      </div>
    </div>
            </Modal>

        </div>
    );
}

export default App;
