import { useCallback, useRef } from "react";


function useOpenModal() {
    const modalRef = useRef();

    const openModal = useCallback(()=> {
      modalRef.current.open(); // Calls handleOpen in the Modal component
    },[]);

    return [modalRef, openModal]
}

export default useOpenModal;