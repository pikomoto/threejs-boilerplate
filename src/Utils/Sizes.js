import EventEmitter from './EventEmitter.js'

export default class Sizes extends EventEmitter {
    constructor() {
        super()
        // Setup
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.devicePixelRatio = Math.min(window.devicePixelRatio, 2)

        // Resize event
        window.addEventListener('resize', ()=>{
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.devicePixelRatio = Math.min(window.devicePixelRatio, 2)

            // EventEmitter Trigger
            this.trigger('resize')
        })
    }
}