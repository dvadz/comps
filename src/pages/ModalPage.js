import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Button primary rounded onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
};

export default ModalPage;
