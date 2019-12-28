import {connect} from 'react-redux'
import {logout} from '../actions/session_actions'
import NavbarModule from './NavbarModule'



const mapStateToProps = (state) => ({
    currentUserId: state.session.id
    
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});


export default connect(mapStateToProps,mapDispatchToProps)(NavbarModule)