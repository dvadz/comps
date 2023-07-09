import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal onClose={handleClose}>
      <p>Terms of Conditions</p>
    </Modal>
  );

  return (
    <div>
      <Button primary rounded onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
