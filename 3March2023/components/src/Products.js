
function Products() {

    var product = {
        pid: 101,
        name: "xyz"
    }

    return (
        <div>
            <h1>Products!</h1>
            <h1>{product.pid} {product.name}</h1>
        </div>
    )
}
export default Products;