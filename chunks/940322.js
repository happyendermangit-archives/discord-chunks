function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });

    function i(e, t) {
        return Math.max(Math.min((e - t) / 30, 1), -1)
    }
    var s = class e {
        initialize() {
            window.addEventListener("mousemove", this.handleMouseMove)
        }
        terminate() {
            window.removeEventListener("mousemove", this.handleMouseMove)
        }
        update() {
            this.x !== this.px && this.y !== this.py && (this.forceX += i(this.x, this.px), this.forceY += i(this.y, this.py), this.px = this.x, this.py = this.y), 0 !== this.forceX && (this.forceX = this.forceX * this.resistance), 0 !== this.forceY && (this.forceY = this.forceY * this.resistance)
        }
        render() {}
        constructor() {
            this.resistance = .98, this.px = 0, this.py = 0, this.x = 0, this.y = 0, this.forceX = 0, this.forceY = 0, this.handleMouseMove = e => {
                let {
                    clientX: t,
                    clientY: n
                } = e;
                this.x = t, this.y = n
            }
        }
    }
}