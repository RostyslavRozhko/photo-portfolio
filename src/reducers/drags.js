import {CHANGE_IMAGE} from '../constants/index'

const drags = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_IMAGE:
      console.log(action)
      return {
        ...state,
        imagePlaces: {
          ...state.imagePlaces,
          entities: {
            ...state.imagePlaces.entities,
            [action.targetId]: {
              ...state.imagePlaces.entities[action.targetId],
              url: state.images.entities[action.imageId].url
            }
          }
        }
      }
    default:
      return state
  }
}

export default drags