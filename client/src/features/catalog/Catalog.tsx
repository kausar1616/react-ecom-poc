import React, { useCallback, useEffect, useState } from 'react';
import { Product } from '../../app/models/product';
import ProductList from './ProductList';
import agent from '../../app/api/agent';
import LoadingComponent from '../../app/layout/LoadingComponent';


function Catalog() {
    let [products, setProducts] = useState<Product []>([]);
    const [loading, setLoading] = useState(true);


    let loaddata = useCallback(()=>{ 
        
        agent.Catalog.list().then(products => {
            setProducts(products);
        })
        .catch(error=> console.log(error))
        .finally(()=> setLoading(false))
        
        // let response = await fetch('http://localhost:5000/api/products', 
        //     {method:"GET"});
        // let productList = await response.json();    
        // setProducts(productList);

    },[]);
    
    useEffect(()=>{        
        loaddata();
    },[loaddata])

    if (loading) return <LoadingComponent message="Loading products..." />

    return (
        <div>            
            <ProductList products={products}/>
        </div>
    );
}

export default Catalog;