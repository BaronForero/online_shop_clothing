import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'

const ProductDetails = () => {

    //useState um json in einem Array einpacken zu können
    const [products, setProducts] = useState([])
    //für die Erstellung einer Id, die von App.js(<Route>) übernommen wird (Zeile 17 in App.js)
    const productId = useParams()
    
    //Erstellung Kontante um FilterOutput zu speichern. Umwandlung num to string. vergleich mit useparams.id
    const filterOutput = products.filter((product) => {
        return product.id.toString() === productId.id
    })
console.log(filterOutput);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json); //hier wird das updating eingeleitet und das useState mit den daten aus dem fetch befüllt
            })
    }, []);

    console.log(products);

    return (
        <div>
            {filterOutput.map((elt, i) => {
                return (
                    <div key={i}>
                        <h2>{elt.title}</h2>
                        <img src={elt.img} alt="" />
                    </div>
                )
            })}
        </div>
    );
}

export default ProductDetails;