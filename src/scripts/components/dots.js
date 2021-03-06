class Dots{
  /*
     element must have a `data-count` attribute of the number of
     dots you would like.
  */
  constructor(element, numSteps){
    this._element = getNode(element)
    this._count = numSteps || this._element.getAttribute('data-count')
    this._current = 0
    this._dots = []

    var list = document.createElement('ul')
        list.setAttribute('class','progress-dots__list')
    for(var i = 0; i < this._count; i++ ){
      var li = document.createElement('li')
      li.setAttribute('class','progress-dots__list__item')
      var dot = document.createElement('div')
      dot.setAttribute('class', 'nav-dot')
      this._dots.push(dot)
      li.appendChild(dot)
      list.appendChild(li)

      if(i != this._count-1) {
        var d = document.createElement('li')
        var divider = document.createElement('div')
        divider.setAttribute('class', 'nav-dot-divider')
        d.appendChild(divider)
        list.appendChild(d)

      }
    }
    this._element.appendChild(list)
  }

  next(){
    if(this._current == this._count) return this._current
    toggleClass(this._dots[this._current],'fill')
    this._current < this._count ? this._current += 1 : 1;
    return this._current
  }

  previous(){
    if(this._current == 0) return this._current
    this._current -= 1;
    toggleClass(this._dots[this._current], 'fill')
    return this._current
  }

  set(num){
    this._current = num
    for(var i = 0; i < this._dots.length; i++){
      if(!hasClass(this._dots[i], 'fill') && i < num){
        toggleClass(this._dots[i], 'fill')
      } else if(hasClass(this._dots[i], 'fill') && i >= num){
        toggleClass(this._dots[i], 'fill')
      }
    }
  }

  current(){
    return this._current
  }
}