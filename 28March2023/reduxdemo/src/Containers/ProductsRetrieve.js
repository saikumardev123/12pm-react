import { connect } from 'react-redux';
function ProductsRetrieve(props) {

    return (
        <div>
            Length is, {props.products.length}
        </div>
    )

}

function mapStateToProps(appState) {
    return { products: appState.products };
}

export default connect(mapStateToProps, null)(ProductsRetrieve);

