import React, { Component } from 'react'
import {ItemType} from '../../constants'
import { DragSource } from 'react-dnd'
import PropTypes from 'prop-types'
import {DRAG_BEGIN, DRAG_END} from '../../constants/events'

class DragImage extends Component {
  render() {
    const {img: {url}, connectDragSource, isDragging} = this.props
    return connectDragSource(
      <img src={url}  className="drag-image" alt="" style={{
                                                      opacity: isDragging ? 0.5 : 1,
                                                      cursor: 'move'
                                                    }} />
    )
  }
}

DragImage.contextTypes = {
  emitter: PropTypes.object
}

const imageSource = {
  beginDrag(props, monitor, component) {
    component.context.emitter.emit(DRAG_BEGIN)
    return {imageId: props.img.id}
  },
  endDrag(props, monitorm, component) {
    component.context.emitter.emit(DRAG_END)
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}) 

export default DragSource(ItemType.IMAGE, imageSource, collect)(DragImage)