import { useCallback } from "react"
import { useDispatch } from "react-redux"

export const Card = ({ image, openCloseModal, chooseModalImage}) => {
    const dispatch = useDispatch();
    
    const modal = useCallback(() => {
        dispatch(openCloseModal())
        dispatch(chooseModalImage(image))
    }, [dispatch, image, openCloseModal, chooseModalImage])
    
   return(
       <li
           onClick={modal}
       >
           <img src={image} alt="img"/>
       </li>
   )
}