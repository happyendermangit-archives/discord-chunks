function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("888618"),
        r = n("482682");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.default = class e {
        initialize() {
            this.img = new Image, this.img.onload = () => {
                this.loaded = !0
            }, this.img.src = r, this.bind()
        }
        bind() {
            window.addEventListener("mousemove", this.handleMouseMove, !1)
        }
        unbind() {
            window.removeEventListener("mousemove", this.handleMouseMove, !1)
        }
        terminate() {
            this.img = null, this.loaded = !1, this.isFilled = !1, this.alpha = 0, this.unbind()
        }
        update(e) {
            this.loaded && (!this.isFilled && this.alpha < 1 ? this.alpha = Math.min(1, this.alpha + e) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * e)), this.velX += (0, i.applySpringForce)(this.targetX, this.x, this.velX, this.spring) * e, this.velY += (0, i.applySpringForce)(this.targetY, this.y, this.velY, this.spring) * e, this.x += this.velX * e, this.y += this.velY * e)
        }
        render(e) {
            let {
                img: t
            } = this;
            this.loaded && null != t && (e.save(), e.globalCompositeOperation = "source-atop", e.globalAlpha = this.alpha, e.drawImage(t, this.x + 20, this.y + 20), e.restore())
        }
        fill() {
            this.isFilled = !0
        }
        constructor() {
            s(this, "img", null), s(this, "loaded", !1), s(this, "isFilled", !1), s(this, "alpha", 0), s(this, "mx", 0), s(this, "my", 0), s(this, "x", 0), s(this, "y", 0), s(this, "velX", 0), s(this, "velY", 0), s(this, "targetX", 40), s(this, "targetY", 40), s(this, "spring", {
                friction: 60,
                tension: 100
            }), s(this, "handleMouseMove", e => {
                let {
                    clientX: t,
                    clientY: n
                } = e;
                this.targetX = t / window.innerWidth * 20 + 20, this.targetY = n / window.innerWidth * 20 + 20
            })
        }
    }
}