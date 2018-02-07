import first from './images/1.jpg'
import second from './images/2.jpg'
import third from './images/3.jpg'
import fourth from './images/4.jpg'
import fifth from './images/5.jpg'
import sixth from './images/6.jpg'


export const state = {
  drags: {
    images: {
      ids: [1, 2, 3, 4, 5, 6],
      entities: {
        '1': {
          id: 1,
          url: first        
        },
        '2': {
          id: 2,
          url: second        
        },
        '3': {
          id: 3,
          url: third        
        },
        '4': {
          id: 4,
          url: fourth        
        },
        '5': {
          id: 5,
          url: fifth        
        },
        '6': {
          id: 6,
          url: sixth        
        },
      }
    },
    imagePlaces: {
      ids: [1, 2, 3],
      entities: {
        '1': {
          url: ''        
        },
        '2': {
          url: ''        
        },
        '3': {
          url: ''        
        }
      }
    },
    blocks: {
      ids: [1],
      entities: {
        '1': {
          blockName: 'block1',
          imagePlacesIds: [1, 2, 3]
        }
      }
    }
  }
}