import {CHANGE_IMAGE, ADD_BLOCK} from '../constants/index'

export const changeImage = (targetId, imageId=1) => ({
  type: CHANGE_IMAGE,
  imageId,
  targetId
})

export const addBlock = (name, imagesNum) => ({
  type: ADD_BLOCK,
  name,
  imagesNum
})