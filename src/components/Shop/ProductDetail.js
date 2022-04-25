import { useParams} from 'react-router-dom';
import Card from '../UI/Card';
import ProductItemDetail from './ProductItemDetail';
import { useEffect, useState } from 'react';


import classes from './ProductDetail.module.css';

const ProductDetail = (props) => {
    const params = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(
            'https://react-http-838c9-default-rtdb.firebaseio.com/products.json'
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseData = await response.json();
            const loadedProducts = [];
    
            for (const key in responseData) {
            loadedProducts.push({
                id: key,
                name: responseData[key].name,
                description: responseData[key].description,
                price: responseData[key].price,
            });
            }
    
            setProducts(loadedProducts);
        };
            fetchProducts().catch((error) => {});
    }, []);

    // method
    const product = products.find((prd) => prd.id === params.productId);

    if (!product) {
        return <p style = {{textAlign: 'center'}}>No product found!</p>;
    }

    return (
        <>
            <div className={classes.h1}>
                <h1>Product Detail</h1>
            </div>
            <Card>
                <section>
                    <ul>
                    <ProductItemDetail
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    /> 
                    </ul>
                </section>
            </Card>
        </>
  );
};

export default ProductDetail;