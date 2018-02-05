import React, { Component } from 'react'
import PropTypes from 'prop-types';

class EmitterProvider extends Component {
  getChildContext() {
    return {
      emitter: this.props.emitter
    };
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

EmitterProvider.childContextTypes = {
  emitter: PropTypes.object
}

export default EmitterProvider