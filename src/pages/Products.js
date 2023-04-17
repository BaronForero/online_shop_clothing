import { useState, useEffect } from 'react'
import ProductItem from '../components/ProductItem'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json); //hier wird das updating eingeleitet und das useState mit den daten aus dem fetch befüllt
            })
    }, []);

    console.log(products);

    return (
        <section className='procuctItems_grid'>
            {products.map((elt, i) => {
                return (
                    <ProductItem
                        key={i}
                        title={elt.title}
                        img={elt.image}
                        price={elt.price}
                        description={elt.description}
                        id={elt.id}
                    />
                )
            })}
        </section>
    );
}

export default Products;