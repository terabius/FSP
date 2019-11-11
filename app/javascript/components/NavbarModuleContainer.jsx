import {connect} from 'react-redux'
import {logout} from '../util/session_v1_util'
import NavbarModule from './NavbarModule'



const mapStateToProps = (state) => ({
    currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});



export default connect(mapStateToProps,mapDispatchToProps)(NavbarModule)