import { connect } from 'react-redux'
import Footer from './Footer'



const mapStateToProps = (state) => ({
    currentUserId: state.session.id
    
});

const mapDispatchToProps = (dispatch) => ({
    idles: () => (1)
});


export default connect(mapStateToProps, mapDispatchToProps)(Footer)