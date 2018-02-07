import {CHANGE_IMAGE, ADD_BLOCK} from '../constants/index'
import uniqueId from 'lodash.uniqueid'

const drags = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_IMAGE: return changeImage(state, action)
    case ADD_BLOCK: return addBlock(state, action)
    default: return state
  }
}

const addBlock = (state, action) => {
  const blockId = uniqueId('block-')
  const placesIds = []
  let places = {}
  for (let i = 0; i < action.imagesNum; i++) {
    const imagePlaceId = uniqueId('imagePlace-')
    placesIds.push(imagePlaceId)
    places = {
      ...places,
      [imagePlaceId]: {
        url: ''
      }
    }
  }
  console.log(placesIds)

  return {
    ...state,
    blocks: {
      ...state.blocks,
      ids: [
        ...state.blocks.ids,
        blockId
      ],
      entities: {
        ...state.blocks.entities,
        [blockId]: {
          blockName: action.name,
          imagePlacesIds: placesIds
        }
      }
    },
    imagePlaces: {
      ...state.imagePlaces,
      ids: [
        ...state.imagePlaces.ids,
        ...placesIds
      ],
      entities: {
        ...state.imagePlaces.entities,
        ...places        
      }
    }
  }
}

const changeImage = (state, action) => {
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
}

export default drags