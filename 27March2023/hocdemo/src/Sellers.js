import HOC from './HOC';
function Sellers(props) {
    return (
        <>
            <h1 onClick={props.updateCounter}>Sellers: {props.counter}</h1>
        </>
    )
}
const SellersHOC = HOC(50, Sellers);
export default SellersHOC;