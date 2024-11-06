import { useRef } from "react";


function useOpenModal() {
    const modalRef = useRef();

    function openModal() {
      modalRef.current.open(); // Calls handleOpen in the Modal component
    }

    return [modalRef, openModal]
}

export default useOpenModal;