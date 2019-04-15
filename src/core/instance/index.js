import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

/**
 * 暴露出Vue类 采用安全模式 若没有使用new关键字 则报错
 * 在Vue类中添加
 *  _init 方法
 *  $data $props 属性 $set $delete $watch 方法
 *  $on $once $off $emit 方法
 *  _update 方法
 *  $nextTick _render 方法
 */

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
