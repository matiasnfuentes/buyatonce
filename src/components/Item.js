import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({item}) => {
    let {title, id, price, imagePath, description, categoria} = item;
    return ( <div className="itemCard" >
                <h3 className="itemCard__title" >{title}</h3>
                <img src={imagePath.cart} alt="alternative text" className="itemCard__image"/>
                <div className="itemCard__itemCount">
                    <ItemCount initial={1} stock={5}/>
                </div>
                <Link to={`/item/${id}`} className="button itemCard__button">Mas info!</Link>
            </div> );
}
 
export default Item;