function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("932980"),
        o = n("450112");

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
    var u = -2.15,
        s = function() {
            var e, t, n;

            function s(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), a(this, "x", -40), a(this, "y", -40), a(this, "targetX", 0), a(this, "targetY", 0), a(this, "oscillate", !0), a(this, "velX", 0), a(this, "velY", 0), a(this, "angle", 0), a(this, "speedUp", 1.5), a(this, "waveRange", 60), a(this, "count", void 0), a(this, "index", void 0), a(this, "spring", {
                    friction: 15,
                    tension: o.POINT_TENSION_DEFAULT
                }), this.index = e, this.spring.tension = o.POINT_TENSION_DEFAULT * Math.max(.1, e / 7) + o.POINT_TENSION_DEFAULT, this.count = u * e
            }
            return e = s, t = [{
                key: "updateStatic",
                value: function() {
                    this.targetX = this.targetX + 30 * Math.cos(this.angle) * Math.sin(this.count), this.targetY = this.targetY + 30 * Math.sin(this.angle) * Math.sin(this.count), this.x = this.targetX, this.y = this.targetY
                }
            }, {
                key: "update",
                value: function(e) {
                    if (this.speedUp > 0 ? (this.speedUp = Math.max(0, this.speedUp - e), this.count += e * (10 * Math.min(this.speedUp, 1) + .4)) : this.count += .4 * e, t = (0, r.applySpringForce)(this.targetX, this.x, this.velX, this.spring), n = (0, r.applySpringForce)(this.targetY, this.y, this.velY, this.spring), this.velX += t * e, this.velY += n * e, this.oscillate) {
                        var t, n, o = this.targetX + this.waveRange * Math.cos(this.angle) * Math.sin(this.count),
                            i = this.targetY + this.waveRange * Math.sin(this.angle) * Math.sin(this.count);
                        t = (0, r.applySpringForce)(o, this.x, this.velX, this.spring), n = (0, r.applySpringForce)(i, this.y, this.velY, this.spring), this.velX += t * e, this.velY += n * e
                    }
                    this.x += this.velX * e, this.y += this.velY * e
                }
            }, {
                key: "render",
                value: function(e) {
                    e.fillStyle = "#fff", e.fillRect(this.x, this.y, 4, 4)
                }
            }], i(e.prototype, t), n && i(e, n), s
        }();
    t.default = s
}