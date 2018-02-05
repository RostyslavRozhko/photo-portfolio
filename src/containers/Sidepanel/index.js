import React, { Component } from 'react';
import DragImage from '../../components/Dragabbles/DragImage'
import { connect } from 'react-redux';

class Sidepanel extends Component {
  render() {
    const {images} = this.props
    return (
      <div className="sidepanel">
        {images.ids.map(id => {
          const img = images.entities[id]
          return <DragImage img={img} key={img.id} />
        })}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
    images: state.drags.images
})

export default connect(mapStateToProps)(Sidepanel)