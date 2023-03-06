import ChangePassword from './ChangePassword';
function User(props) {

    return (
        <div>
            <h1>User Component</h1>
            {props.token}

            <ChangePassword token={props.token}></ChangePassword>
        </div>
    )

}
export default User;