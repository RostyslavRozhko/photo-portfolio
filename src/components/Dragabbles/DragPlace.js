import React, { Component } from 'react'
import {changeImage} from '../../actions/index'
import { ItemType } from '../../constants/index';
import { DropTarget } from 'react-dnd';

class DragPlace extends Component {
  render() {
    const {img: {url, id}, connectDropTarget, isOver} = this.props
    return connectDropTarget(
        <img src={url}  className="drag-image-target" alt="" />
    );
  }
}

const placeTarget = {
  drop(props, monitor) {
    const {imageId} = monitor.getItem()
    const {dispatch, img: {id}} = props
    dispatch(changeImage(id, imageId))
  }
}

const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
})

export default DropTarget(ItemType.IMAGE, placeTarget, collect)(DragPlace)