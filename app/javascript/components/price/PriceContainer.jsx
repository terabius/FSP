import {connect} from 'react-redux'
import Price from './Price'

const mapStateToProps = (state) => ({
    assets: state.entities.assets
});

const mapDispatchToProps = (dispatch) => ({
    idle: () => 1
});


export default connect(mapStateToProps,mapDispatchToProps)(Price)