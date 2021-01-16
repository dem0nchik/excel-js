import {$} from '@core/dom'

export function resizeHandler($root, event) {
  const $resizer = $(event.target)
  const $parent = $resizer.closest('[data-type="resizable"]')
  const coord = $parent.getCoords()
  const type = $resizer.data.resize
  let value = 0
  const sideProp = type === 'col' ? 'bottom' : 'right'
  const cells = $root
      .findAll(`[data-col="${$parent.data.col}"]`)

  $resizer.css({
    opacity: 1,
    [sideProp]: '-5000px'
  })

  document.onmousemove = e => {
    if (type === 'col') {
      const delta = e.pageX - coord.right
      $resizer.css({right: `${-delta}px`})
      value = coord.width + delta
    }
    if (type === 'row') {
      const delta = e.pageY - coord.bottom
      $resizer.css({bottom: `${-delta}px`})
      value = coord.height + delta
    }
  }
  document.onmouseup = () => {
    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0
    })
    if (type === 'col') {
      cells.forEach(el => el.style.width = value + 'px')
      $parent.css({width: `${value}px`})
    }
    if (type === 'row') {
      $parent.css({height: `${value}px`})
    }

    document.onmousemove = null
    document.onmouseup = null
  }
}