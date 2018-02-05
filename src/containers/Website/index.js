import React, { Component } from 'react'
import DragPlace from '../../components/Dragabbles/DragPlace'
import { connect } from 'react-redux'

class Website extends Component {
  render() {
    const {imagePlaces, dispatch} = this.props
    return (
      <div className="website">
        {imagePlaces.ids.map(id => {
          const img = imagePlaces.entities[id]
          return <DragPlace img={img} key={img.id} dispatch={dispatch} />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imagePlaces: state.drags.imagePlaces
})

export default connect(mapStateToProps)(Website)
