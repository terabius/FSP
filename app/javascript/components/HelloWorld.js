import React from "react"
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

const GET_THINGS_REQUEST  = 'GET_THINGS_REQUEST';

function getThings(){
  console.log('getting things');
  return {
    type: GET_THINGS_REQUEST
  };
};

class HelloWorld extends React.Component {
  render () {
    const {things} = this.props;
    const list  = things.map((things) => <li>{things.name} {things.guid}</li>);

    return (
        <React.Fragment>
        Greeting: {this.props.greeting}  
        <button className='getThingsBtn' onClick={() => this.props.getThings() }>getthings</button>
        <br />
        <ul>{list}</ul>
        </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state=> state.things,
});

const mapDispatchToProps = { getThings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
