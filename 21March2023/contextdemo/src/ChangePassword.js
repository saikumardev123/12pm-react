import { useContext } from 'react';
import AppContext from './AppContext';

function ChangePassword() {
    const data = useContext(AppContext);

    return (
        <div>
            <h1>I am from Change Password Component!</h1>
            {data}
        </div>
    )
}
export default ChangePassword;