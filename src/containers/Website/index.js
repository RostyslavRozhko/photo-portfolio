import React, { Component } from 'react'
import Block from '../Block/index'
import { connect } from 'react-redux'
import {blockSettings} from '../../utils/blocks'
import {addBlock} from '../../actions/index'

class Website extends Component {
  render() {
    const {blocks, dispatch} = this.props
    return (
      <div className="website">
        {blocks.ids.map(id => {
          const block = blocks.entities[id]
          return <Block block={block} key={id} />
        })}
        {blockSettings.ids.map(elem => (
          <input type="button" onClick={() => dispatch(addBlock(elem, blockSettings.entities[elem].images.length))} key={elem} value={elem} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  blocks: state.drags.blocks
})

export default connect(mapStateToProps)(Website)
