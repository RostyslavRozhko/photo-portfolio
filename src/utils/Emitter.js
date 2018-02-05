import {Subject} from 'rxjs/Subject'

const hasOwnProp = {}.hasOwnProperty;

const createName = (name) => {
	return '$' + name;
}

export default class Emmmiter {
  subjects = {}

  emit = (name, data) => {
    const fnName = createName(name)
    this.subjects[fnName] || (this.subjects[fnName] = new Subject())
    this.subjects[fnName].next(data)
  }

  subscribe = (name, handler) => {
    const fnName = createName(name)
    this.subjects[fnName] || (this.subjects[fnName] = new Subject())
    return this.subjects[fnName].subscribe(handler)
  }

  unsubscribe = (name, handler) => {
    const fnName = createName(name)
    if (this.subjects[fnName]) {
      this.subjects[fnName].dispose()
      delete this.subjects[fnName]
    }
  }

  dispose = function () {
    const subjects = this.subjects
    for (var prop in subjects) {
      if (hasOwnProp.call(subjects, prop)) {
        subjects[prop].dispose()
      }
    }
  
    this.subjects = {}
  }
}