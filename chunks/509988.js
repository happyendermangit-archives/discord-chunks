function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("932980"),
        o = n("482682");

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var u = function() {
        var e, t, n;

        function u() {
            var e = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a(this, "img", null), a(this, "loaded", !1), a(this, "isFilled", !1), a(this, "alpha", 0), a(this, "mx", 0), a(this, "my", 0), a(this, "x", 0), a(this, "y", 0), a(this, "velX", 0), a(this, "velY", 0), a(this, "targetX", 40), a(this, "targetY", 40), a(this, "spring", {
                friction: 60,
                tension: 100
            }), a(this, "handleMouseMove", function(t) {
                var n = t.clientX,
                    r = t.clientY;
                e.targetX = n / window.innerWidth * 20 + 20, e.targetY = r / window.innerWidth * 20 + 20
            })
        }
        return e = u, t = [{
            key: "initialize",
            value: function() {
                var e = this;
                this.img = new Image, this.img.onload = function() {
                    e.loaded = !0
                }, this.img.src = o, this.bind()
            }
        }, {
            key: "bind",
            value: function() {
                window.addEventListener("mousemove", this.handleMouseMove, !1)
            }
        }, {
            key: "unbind",
            value: function() {
                window.removeEventListener("mousemove", this.handleMouseMove, !1)
            }
        }, {
            key: "terminate",
            value: function() {
                this.img = null, this.loaded = !1, this.isFilled = !1, this.alpha = 0, this.unbind()
            }
        }, {
            key: "update",
            value: function(e) {
                this.loaded && (!this.isFilled && this.alpha < 1 ? this.alpha = Math.min(1, this.alpha + e) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * e)), this.velX += (0, r.applySpringForce)(this.targetX, this.x, this.velX, this.spring) * e, this.velY += (0, r.applySpringForce)(this.targetY, this.y, this.velY, this.spring) * e, this.x += this.velX * e, this.y += this.velY * e)
            }
        }, {
            key: "render",
            value: function(e) {
                var t = this.img;
                this.loaded && null != t && (e.save(), e.globalCompositeOperation = "source-atop", e.globalAlpha = this.alpha, e.drawImage(t, this.x + 20, this.y + 20), e.restore())
            }
        }, {
            key: "fill",
            value: function() {
                this.isFilled = !0
            }
        }], i(e.prototype, t), n && i(e, n), u
    }();
    t.default = u
}