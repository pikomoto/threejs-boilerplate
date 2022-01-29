import * as THREE from 'three'

import Sizes from "../Utils/Sizes.js"
import Time from '../Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer'

// Instance check for Singleton
let instance = null

export default class Experience {

    constructor(canvas) {

        // Global access
        window.experience = this

        // Convert Experience to a Singleton class
        if(instance) {
            return instance
        }

        instance = this

        // Options
        this.canvas = canvas

        // Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()


        // EventEmitter Resize trigger from Sizes class
        this.sizes.on('resize', ()=>{
            this.resize()
        })

        // EventEmitter Tick trigger from Time class
        this.time.on('tick', ()=>{
            this.update()
        })
    }

    // Util Methods
    resize() {
        this.camera.resize()
        this.renderer.resize()
    }

    // Update on each Tick
    update() {
        this.camera.update()
        this.renderer.update()
    }
}