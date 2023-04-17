import { Link } from "react-router-dom";

const ProductItem = (props) => {
    return ( 
        <div key={props.key}>
            <h1>{props.title}</h1>
            <img src={props.img} alt="" />
            <span>{props.price}€</span>
            <Link to={`/products/${props.id}`}>See more</Link>
        </div>
    );
}

export default ProductItem;