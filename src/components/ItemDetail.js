const ItemDetail = ({item}) => {
    let {title, id, price, imagePath, description, categoria} = item;
    return ( <div className="itemDetail">
                <h2 className="itemDetail__title">{title}</h2>
                <img src={imagePath.detail} alt="alternative text" className="itemDetail__image"/>
                <p className="itemDetail__description" ><strong>Descripción: </strong> {description}</p>
                <p className="itemDetail__price" ><strong>Precio: </strong> {price}</p>
            </div> 
            );
}
 
export default ItemDetail;