
import HOC from './HOC';
function Products(props) {
    return (
        <>
            <h1 onClick={() => props.updateCounter()}>Products: {props.counter}</h1>
        </>
    )

}
const ProductsHOC = HOC(30, Products);
export default ProductsHOC;