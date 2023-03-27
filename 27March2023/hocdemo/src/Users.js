import HOC from './HOC';
function Users(props) {

    return (
        <>
            <h1 onClick={props.updateCounter}>Users: {props.counter}</h1>
        </>
    )
}
const UsersHOC = HOC(70, Users);
export default UsersHOC;