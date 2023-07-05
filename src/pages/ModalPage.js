import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button primary rounded>
        Open Modal
      </Button>
      <Modal />
    </div>
  );
};

export default ModalPage;
