import React, {Component} from 'react'
import DragPlace from '../../components/Dragabbles/DragPlace'
import {connect} from 'react-redux'
import {blockSettings} from '../../utils/blocks'

class Block extends Component {
  render() {
    const {block, imagePlaces, dispatch} = this.props
    const blockSet = blockSettings.entities[block.blockName]
    return (
      <div style={blockSet.style}>
        {block.imagePlacesIds.map((imagePlaceId, index) => (
          <DragPlace id={imagePlaceId}
            size={blockSet.images[index].size} 
            styling={blockSet.images[index].style} 
            img={imagePlaces.entities[imagePlaceId]} 
            dispatch={dispatch} 
            key={imagePlaceId} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  imagePlaces: state.drags.imagePlaces
})

export default connect(mapStateToProps)(Block)