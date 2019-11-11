import {connect} from 'react-redux'
import Dashboard from './Dashboard'

const mapStateToProps = (state) => ({
    wallets: state.entities.wallets.wallets
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => 1
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)