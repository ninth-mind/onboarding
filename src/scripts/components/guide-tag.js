class GuideTag{
  /*
   Status should be a number between 0-2

   0 = new
   1 = In Progress
   2 = Completed
  */

  constructor(element, status, spy){
    let self = this
    this._spy = spy
    this._element       = getNode(element)
    this._status        = status || 0
    this._statusElement = this._element.querySelector('.js-status')

    this.updateStatus()

    this._element.addEventListener('click', ()=>{
      self._spy()
    })
  }

  // status is a number 0-2
  updateStatus(status){
    //set status
    if(status < 0 || status > 2){
      return this._status
    }

    const stati = ['New', 'In Progress', 'Completed']
    const statiClass = ['new', 'in-progress', 'is-completed']
    this._status = status || 0
    switchClass(this._element, statiClass, statiClass[this._status])
    this._statusElement.innerHTML = '<span class="guide-tag__status--'+
                 statiClass[this._status]+'">'+stati[this._status]+'</span>'
  }
}