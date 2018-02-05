import React, { Component } from 'react'
import {ItemType} from '../../constants'
import { DragSource } from 'react-dnd'

class DragImage extends Component {
  render() {
    const {img: {url, id}, connectDragSource, isDragging} = this.props
    return connectDragSource(
      <img src={url}  className="drag-image" alt="" style={{
                                                      opacity: isDragging ? 0.5 : 1,
                                                      cursor: 'move'
                                                    }} />
    )
  }
}

const imageSource = {
  beginDrag(props) {
    return {imageId: props.img.id}
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}) 

export default DragSource(ItemType.IMAGE, imageSource, collect)(DragImage)