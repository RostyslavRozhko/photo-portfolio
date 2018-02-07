import React, { Component } from 'react'
import {changeImage} from '../../actions/index'
import { ItemType } from '../../constants/index';
import { DropTarget } from 'react-dnd';
import {DRAG_END, DRAG_BEGIN} from '../../constants/events'
import PropTypes from 'prop-types'
import Resizer from '../Resizer'

class DragPlace extends Component {
  subscription = []
  
  state = {
    isDragging: false
  }
  
  componentDidMount() {
    const {emitter} = this.context
    this.subscription = [
      emitter.subscribe(DRAG_BEGIN, () => this.setState(() => {
        return {
          isDragging: true
        }
      })),
      emitter.subscribe(DRAG_END, () => this.setState(() => {
        return {
          isDragging: false
        }
      }))
    ]
  }

  componentWillUnmount() {
    this.subscription.map(sub => sub.unsubscribe())
  }

  render() {
    const {img: {url}, connectDropTarget, size: {height, width}, styling} = this.props
    const {isDragging} = this.state
    return connectDropTarget(
      <div style={styling}>
        <Resizer height={height} width={width} allowDrag={url ? true : false}>
          <div className="drag-image__decorator-container" >
            {isDragging &&
                <div className="drag-image__decorator" style={{backgroundColor: 'yellow'}}></div>}
            {url && <img src={url}  className="drag-image__target" alt="" /> }
          </div>
        </Resizer> 
      </div>    
    );
  }
}

DragPlace.contextTypes = {
  emitter: PropTypes.object
}

const placeTarget = {
  drop(props, monitor) {
    const {imageId} = monitor.getItem()
    const {dispatch, id} = props
    dispatch(changeImage(id, imageId))
  }
}

const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
})

export default DropTarget(ItemType.IMAGE, placeTarget, collect)(DragPlace)