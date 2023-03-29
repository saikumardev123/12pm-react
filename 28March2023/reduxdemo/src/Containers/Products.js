import getProducts from '../Actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
function Products(props) {

    const fetchProducts = () => {
        console.log("fetchProducts");
        console.log("props", props);
        props.getProducts();
    }
    return (
        <div>
            <h1>Products</h1>
            <button onClick={fetchProducts}>Fetch Products</button>

            {props.allProducts.length}
        </div>
    )
}
function mapDispatchToProps(dispatch) {
    return new bindActionCreators({ getProducts: getProducts }, dispatch)
}

function mapStateToProps(appState) {
    console.log("appState", appState);
    return { allProducts: appState.products };
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);