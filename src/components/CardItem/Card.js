import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useImageLazyLoading } from "../../hooks/useImageLazyLoading";
import placeholder from "../../App/assets/placeholder.png"

export const Card = ({ image, openCloseModal, chooseModalImage }) => {
    const dispatch = useDispatch();
    const imageLazyLoading = useImageLazyLoading(image)

    const modal = useCallback(() => {
        dispatch(openCloseModal())
        dispatch(chooseModalImage(image))
    }, [dispatch, image, openCloseModal, chooseModalImage])

    return (
        <li
            className="card"
            onClick={modal}
        >
            <div
                className="card__image"
                style={{ backgroundImage: `url(${imageLazyLoading || placeholder})` }}
            >
            </div>
        </li>
    )
}