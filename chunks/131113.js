function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("371887"),
        o = n("810855");

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
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a(this, "particles", []), a(this, "wind", new o.default), a(this, "alpha", 0), a(this, "isFilled", !1), a(this, "loadInTimer", null)
        }
        return e = u, t = [{
            key: "initialize",
            value: function() {
                var e = this;
                this.particles = [], this.wind.initialize(), this.loadInTimer = setTimeout(function() {
                    for (var t = 0; t < 75; t++) e.particles.push(new r.default)
                }, 250)
            }
        }, {
            key: "terminate",
            value: function() {
                this.particles = [], this.wind.terminate(), null != this.loadInTimer && clearTimeout(this.loadInTimer)
            }
        }, {
            key: "update",
            value: function(e) {
                var t = this;
                0 !== this.particles.length && (!this.isFilled && this.alpha < 1 ? this.alpha = Math.min(1, this.alpha + e) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * e)), this.wind.update(), this.particles.forEach(function(n) {
                    return n.update(10 * t.wind.forceX * e, 10 * Math.min(t.wind.forceY, -.001) * e + -.1)
                }))
            }
        }, {
            key: "render",
            value: function(e) {
                var t = this;
                0 !== this.particles.length && (e.save(), e.globalCompositeOperation = "source-atop", this.particles.forEach(function(n) {
                    return n.render(e, t.alpha)
                }), e.restore())
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