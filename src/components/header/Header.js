import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom'
import * as actions from '@/redux/actions';
import {defaultTitle} from '@/constans';
import {debounce} from '@/core/utils';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options
    })
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300)
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle
    return `
    <input type="text" class="input" value="${title}">
                
    <div>
        <div class="button" title="Delete table">
            <i class="material-icons">delete_forever</i>
        </div>
  
        <div class="button" title="Exit from table">
            <i class="material-icons">exit_to_app</i>
        </div>
    </div>
    `
  }

  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(actions.changeTitle($target.text()))
  }
}