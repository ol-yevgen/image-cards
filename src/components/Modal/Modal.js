import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openCloseModal } from "../../redux/features/slices/modalSlice";

import { useImageLazyLoading } from "../../hooks/useImageLazyLoading";
import placeholder from "../../App/assets/placeholder.png"

export const Modal = () => {
    const modal = useSelector(state => state.modal)
    const dispatch = useDispatch();

    const lazyModalImage = useImageLazyLoading(modal.modalImage)

    const modalClassName = modal.modal ? "open" : "close";

    const closeModal = useCallback(() => dispatch(openCloseModal()), [dispatch])

    return (
        <div className={`modal ${modalClassName}`}>
            <div className="modal__content">
                <img src={lazyModalImage || placeholder} alt="img" />
                <span
                    className="modal__close"
                    onClick={closeModal}
                ></span>
            </div>
        </div>
    )
}