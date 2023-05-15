import { useImageLazyLoading } from "../../hooks/useImageLazyLoading";
import placeholder from "../../App/assets/placeholder.png"

export const Card = ({image, modal, onDelete }) => {
    const imageLazyLoading = useImageLazyLoading(image)

    return (
        <li
            className="card"
        >
            <div
                className="card__image"
                onClick={modal}

                style={{ backgroundImage: `url(${imageLazyLoading || placeholder})` }}
            >
            </div>
            <span
                className="card__delete"
                onClick={onDelete}
            ></span>
        </li>
    )
}