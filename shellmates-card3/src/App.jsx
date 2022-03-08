import { useState } from 'react';
import "./app.css"
import Button from './components/button/Button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from './components/modal/Modal';

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
            <div className='main'>
                  <h1 className='title'>delete participant</h1>
                  <p className='name'>Are you sure you want to delete
                <span className='special'> Walid Berrouk</span> from participants list?</p>
                <div className='div grid-container2'>
                <h1 className="Btn1" >Edit</h1>
                 <h1 className="Btn2" >Delete</h1>   
                </div> 
            </div>
            </Modal>
        </div>
    );
}

export default App;
