import { useSelector } from "react-redux"

export const Modal = () => {

    const modal = useSelector(state => state.modal)

    const modalClassName = modal.modal ? "open" : "close"

    return (
        <div className={modalClassName}>
            <img src={modal.modalImage} alt="img" />
        </div>
    )
}