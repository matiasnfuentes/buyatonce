const Item = (item) => {
    console.log(item.item);
    let {title, id, price, imagePath, description} = item;
    console.log(title);
    return ( <div className="itemCard" >
                <h3 className="itemCard__title" >{title}</h3>
                <img src={imagePath} alt="alternative text" className="itemCard__image"/>
                <p className="itemCard__description" >{description}</p>
                <button className="button itemCard__button" type="button">Mas info!</button>
            </div> );
}
 
export default Item;