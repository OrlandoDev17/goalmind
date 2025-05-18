import { useState, useId } from 'react';
import Button from './ui/Button';
import { PlusIcon } from './Icons';
import Modal from './ui/Modal';

export default function GoalModal() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const modalCheckboxId = useId();
  return (
    <div>
      <form>
        <label
          className="menu-button"
          onClick={handleShowModal}
          htmlFor={modalCheckboxId}
        >
          <Button>
            <PlusIcon />
            Nueva Meta
          </Button>
        </label>

        <input type="checkbox" id={modalCheckboxId} hidden />
      </form>
      {showModal === true && <Modal />}
    </div>
  );
}
