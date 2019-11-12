import {connect} from 'react-redux'
import Account from './Account'

const mstp = (state) => ({
    wallets: state.entities.wallets
})

export default connect(mstp)(Account)