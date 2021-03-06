(function ($) {
  /**
   * Return true if color is dark, false otherwise. (C) 2008
   * Syronex / J.M. Rosengard
   */

  function isdark (color) {
    var colr = parseInt(color.substr(1), 16)
    return (colr >>> 16) + // R
    ((colr >>> 8) & 0x00ff) + // G
    (colr & 0x0000ff) < // B
    500
  }
  $.fn.colorPicker = function ($$options) {
    var $defaults = {
      color: new Array('#FFFFFF', '#EEEEEE', '#FFFF88', '#FF7400', '#CDEB8B', '#6BBA70', '#006E2E', '#C3D9FF', '#4096EE', '#356AA0', '#FF0096', '#B02B2C', '#702D86', '#000000'),
      defaultColor: 0,
      columns: 0,
      click: function ($color, i) {}
    }
    var $settings = $.extend({}, $defaults, $$options)
    // Iterate and reformat each matched element
    return this.each(function () {
      var $this = $(this)
      // build element specific options
      var o = $.meta ? $.extend({}, $settings, $this.data()) : $settings
      var $$oldIndex = typeof (o.defaultColor) === 'number' ? o.defaultColor : -1

      var _html = ''
      for (var i = 0; i < o.color.length; i++) {
        _html += '<div style="background-color:' + o.color[i] + ';"></div>'
        if ($$oldIndex == -1 && o.defaultColor == o.color[i]) $$oldIndex = i
      }

      $this.html('<div class="jColorSelect">' + _html + '</div>')
      var $color = $this.children('.jColorSelect').children('div')
      // Set container width
      var w = ($color.width() + 2 + 2) * (o.columns > 0 ? o.columns : o.color.length)
      $this.children('.jColorSelect').css('width', w)

      // Subscribe to click event of each color box
      $color.each(function (i) {
        $(this).click(function () {
          if ($$oldIndex == i) return
          if ($$oldIndex > -1) {
            var cell = $color.eq($$oldIndex)
            if (cell.hasClass('check')) cell.removeClass('check').removeClass('checkwht').removeClass('checkblk')
          }
          // Keep index
          $$oldIndex = i
          $(this).addClass('check').addClass(isdark(o.color[i]) ? 'checkwht' : 'checkblk')
          // Trigger user event
          o.click(o.color[i], i)
        })
      })
      // Simulate click for defaultColor
      var _tmp = $$oldIndex
      $$oldIndex = -1
      $color.eq(_tmp).trigger('click')
    })
    return this
  }
})(jQuery)
