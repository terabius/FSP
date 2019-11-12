import {connect} from 'react-redux'
import Price from './Price'
import {add, remove} from '../../actions/wallets_actions'

const mapStateToProps = (state) => ({
    assets: state.entities.assets,
    wallets: state.entities.wallets
});

const mapDispatchToProps = (dispatch) => ({
    idle: () => 1
});


export default connect(mapStateToProps,mapDispatchToProps)(Price)