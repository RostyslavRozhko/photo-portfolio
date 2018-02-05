import {CHANGE_IMAGE} from '../constants/index'

export const changeImage = (targetId, imageId=1) => ({
  type: CHANGE_IMAGE,
  imageId,
  targetId
})