'use strict'
import IScroll from 'iscroll'

class Scroll extends IScroll {
  domPotision = []
  isCroll = null
  previousPostion = 0

  constructor(node, options) {
    super(node, options)
  }

  setPosition (postion, node) {
    // this._findDom(postion, node)
    this.addPostion(postion, node)
  }

  get nodePosition () {
    return this.domPotision
  }

  get unread () {
    let result = 0
    this.domPotision.forEach(i => {
      const { read } = i
      if (!read) {
        result += 1
      }
    })
    return result
  }

  addPostion (top, node) {
    if (!this.domPotision.find(i => {
      if (i.node === node) return i
    })) {
      this.domPotision.push({ node, read: false, top })
    }
  }

  read () {
    const key = this.findDom()
    let bottom = this.isBottom

    this.domPotision.forEach((i, j) => {
      if (bottom || key > j) {
        i.read = true
      }
    })
  }

  get isBottom () {
    let result = false
    const { y, maxScrollY } = this
    result = Math.abs(y) >= Math.abs(maxScrollY)
    return result
  }

  findDom () {
    const { y } = this
    const currentTop = Math.abs(y)
    let result = -1
    this.domPotision.forEach((i, j) => {
      const { top: t, node } = i
      const size = node.offsetHeight
      if (result < 0 && currentTop < t + size) {
        result = j
        if (currentTop > t) result += 1
      }
    })
    return result
  }

  savePosition () {
    const { y } = this
    this.previousPostion = y
  }
}

export default Scroll
