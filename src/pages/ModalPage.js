import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
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
