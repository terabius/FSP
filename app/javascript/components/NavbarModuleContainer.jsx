import {connect} from 'react-redux'
import {logout} from '../actions/session_actions'
import NavbarModule from './NavbarModule'



const mapStateToProps = (state) => ({
    
    currentUserId: state.session.id,
    userFirstName: state.users.first_name,
    userLastName: state.users.last_name,
    userEmail: state.users.email
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});


export default connect(mapStateToProps,mapDispatchToProps)(NavbarModule)