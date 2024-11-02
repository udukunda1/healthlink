import { useRef } from "react";

import ImageHolder from '../../components/imageholder/ImageHolder';
import Button from "../../../shared/components/UI/Button/Button";
import Modal from "../../../shared/components/UI/Modal/modal";

function Home() {
    const modalRef = useRef();

    function openModal() {
      modalRef.current.open(); // Calls handleOpen in the Modal component
    }

   return (
      <>
      <ImageHolder />
      <Modal ref={modalRef} />
      <Button onClick={openModal}>open</Button>
      </>
    );
}

export default Home;