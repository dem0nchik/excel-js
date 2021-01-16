import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: [],
      ...options
    })
  }

  toHTML() {
    return `
    <input type="text" class="input" value="Новая таблица">
                
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
}