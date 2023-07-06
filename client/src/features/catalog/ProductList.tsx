import React from 'react';
import { Product } from '../../app/models/product';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

interface Props{
    products: Product[];
}

function ProductList({products}: Props) {
    return (
        <div>            
            <Grid container spacing={4}>
                {products.map(product => (
                    <Grid item xs={3} key={product.id}>
                        <ProductCard product={product}/>
                    </Grid>              
                ))}                
            </Grid>            
        </div>
    );
}

export default ProductList;