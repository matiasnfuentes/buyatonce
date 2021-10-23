import { Link } from "react-router-dom"  

const Item = ({item}) => {
    let {id, title, image} = item
    
    return ( <div className="itemCard" >
                <h3 className="itemCard__title" >{title}</h3>
                <img src={image} alt="alternative text" className="itemCard__image"/>
                <Link to={`/item/${id}`} className="button itemCard__button">Mas info!</Link>
            </div> )
}
 
export default Item