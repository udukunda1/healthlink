

import ImageHolder from '../../components/imageholder/ImageHolder';
import Button from "../../../shared/components/UI/Button/Button";
import Modal from "../../../shared/components/UI/Modal/modal";
import useOpenModal from "../../../shared/context/useOpenModal";

function Home() {
    const [modalRef, openModal] = useOpenModal();


   return (
      <>
      <ImageHolder />
      <Modal ref={modalRef} addButton={{name:'ok'}}>
        Hello, Welcome to health link ;
        soon we will be able to link students to pharmacies.
      </Modal>
      <Button onClick={openModal}>open</Button>
      </>
    );
}

export default Home;