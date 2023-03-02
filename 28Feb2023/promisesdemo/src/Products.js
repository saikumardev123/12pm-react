import React from 'react';
import axios from 'axios';
class Products extends React.Component {
    // logic
    render() {
        axios.get("https://fakestorepi.com/products").then(
            (response) => {
                console.log(response.data);
            },
            (error) => {
                console.log(error);
            }
        )
        return (
            <div>
                <h1>I am from Products</h1>

            </div>
        )
    }
}
export default Products;