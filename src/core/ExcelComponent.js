import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = []) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter,
    this.unsubscibers = []

    this.prepare()
  }

  prepare() {

  }

  toHTML() {
    return ''
  }
  // уведомляем слушателей про собыитя
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscibers.push(unsub)
  }

  // инициализация компонента, доб. DOM слушателя
  init() {
    this.initDOMListeners()
  }

  // Удаляем компонент, чистим слушателя
  destroy() {
    this.removeDOMListeners()
    this.unsubscibers.forEach(unsub => unsub())
  }
}