import React, {Component} from 'react'
import {DraggableCore} from 'react-draggable';

class Resizer extends Component {
  state = {
    width: this.props.width,
    height: this.props.height,
    isResizing: false,
    slackW: 0, 
    slackH: 0
  }

  static defaultProps =  {
    lockAspectRatio: true,
    axis: 'x',
    minHeight: 20,
    minWidth: 20,
    maxWidth: 1200,
    maxHeight: 1200
  };

  componentWillReceiveProps(nextProps) {
    if (!this.state.resizing &&
        (nextProps.width !== this.props.width || nextProps.height !== this.props.height)) {
      this.setState(() => {
        return {
          width: nextProps.width,
          height: nextProps.height
        }
      })
    }
  }

  handleResize = (handlerName) => {
    return (e, dragData) => {
      const {deltaX, deltaY, node} = dragData

      let width = this.state.width + deltaX
      let height = this.state.height + deltaY

      const widthChanged = width !== this.state.width, heightChanged = height !== this.state.height;
      if (handlerName === 'onResize' && !widthChanged && !heightChanged) return;

      [width, height] = this.check(width, height);

      const newState = {};
      if (handlerName === 'onResizeStart') {
        newState.resizing = true;
      } else if (handlerName === 'onResizeStop') {
        newState.resizing = false;
        newState.slackW = newState.slackH = 0;
      } else {
        if (width === this.state.width && height === this.state.height) return;
        newState.width = width;
        newState.height = height;
      }

      const hasCb = typeof this.props[handlerName] === 'function';
      if (hasCb) {
        if (typeof e.persist === 'function') e.persist();
        this.setState(() => newState, () => this.props[handlerName](e, {node, size: {width, height}}));
      } else {
        this.setState(() => newState);
      }
    }
  }

  check = (width, height) => {
    const {minHeight, minWidth, maxHeight, maxWidth} = this.props

    const ratio = this.state.width / this.state.height;
    height = width / ratio;
    width = height * ratio;

    if(!minHeight && !minWidth && !maxWidth && maxHeight) return [width, height]

    const [oldW, oldH] = [width, height]

    let {slackW, slackH} = this.state;
    width += slackW;
    height += slackH;

    if (minHeight)
      height = Math.max(minHeight, height);

    if(minWidth)
      width = Math.max(minWidth, width)

    if(maxHeight)
      height = Math.min(maxHeight, height)

    if(maxWidth)
      width = Math.min(maxWidth, width)

    slackW += (oldW - width);
    slackH += (oldH - height);
    if (slackW !== this.state.slackW || slackH !== this.state.slackH) {
      this.setState(() => {
        return {
          slackW, 
          slackH
        }
      })
    }

    return [width, height];

  }

  render() {
    const {height, width} = this.state
    return (
      <DraggableCore
        axis={this.props.axis}
        handle=".resize-container"
        onStart={this.handleResize('onResizeStart')}
        onDrag={this.handleResize('onResize')}
        onStop={this.handleResize('onResizeStop')}>
        <div className="resize-container" style={{height, width}} >
          {this.props.children}
          <span className="resizer" ref={ref => this.resizer = ref}></span>
        </div>
      </DraggableCore>
    )
  }
}

export default Resizer