import React, { Component } from 'react'
import Sidepanel from '../Sidepanel/index'
import Website from '../Website/index'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidepanel />
        <Website />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App)
