import { useSelector, useDispatch } from "react-redux";
import { openCloseModal } from "../../redux/features/slices/modalSlice"

import "./modal.scss";
import { useCallback } from "react";

export const Modal = () => {
    const modal = useSelector(state => state.modal)
    const dispatch = useDispatch();

    const modalClassName = modal.modal ? "open" : "close";

    const closeModal = useCallback(() => dispatch(openCloseModal()), [dispatch])

    return (
        <div className={`modal ${modalClassName}`}>
            <div className="modal__content">
                <img src={modal.modalImage} alt="img" />
                <span
                    className="modal__close"
                    onClick={closeModal}
                ></span>
            </div>
        </div>
    )
}