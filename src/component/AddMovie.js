import React ,{useState}from 'react';
import Modal from 'react-modal';
import {Button} from 'react-bootstrap'
Modal.setAppElement('#root');
const AddMovie = ({
    addMovie,
    setName,
    setImage,
    setDescription,
  }) => {
    const [modalIsOpen, setModal] = useState(false);

    function openModal() {
        setModal(true);
    }
  
    function closeModal() {
        setModal(false);
    }
  
    const handleSubmit = (e) => {
      addMovie(e);
      setModal(false);
    };
    return (
        <div className='Add-movie'>
      <Button variant="primary" onClick={openModal}>
        +
      </Button>
      <Modal
        className='add-modal'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className='addMovie-h1'>Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input
            type='text'
            name='name'
            required
            onChange={(e) => setName(e.target.value)}
          />
          
          
          <label>Movie Image</label>
          <input
            type='url'
            name='image'
            required
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Movie Summary</label>
          <textarea
            type='text'
            name='description'
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <button className='Modal-btn' onClick={handleSubmit}>
          Submit
        </button>
        <button className='Modal-btn' onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie
