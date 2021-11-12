import {useEffect} from 'react';
import { connect} from 'react-redux';
import { fetchUsers } from './../redux';

function UserContainer({fetchUsers, user}) {
    useEffect(() => {
        fetchUsers()
    }, []);

    return user.loading ? 
        (<h2> Loading</h2>) 
        : 
        user.error ? 
            ( <h2>user.error</h2>) 
            : 
            ( <div>
                <h2>User List : </h2>
                    <ul>
                        { user && user.users && user.users.map( item => {
                            return <li key={item.id}>{item.title}</li>
                        })}
                    </ul>
            </div>);
}

const mapStateToProps = (state) => {
    console.log("======",state)
    return  {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        fetchUsers: () => dispatch(fetchUsers)
    }
}

export default  connect(mapStateToProps, mapDispatchToProps) (UserContainer);
