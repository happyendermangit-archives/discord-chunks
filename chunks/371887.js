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
    var u = ["#7d8187", "#18191c", "#8fa2df", "#4f545c"],
        s = function() {
            var e, t, n;

            function s() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), a(this, "size", (0, r.randomNumber)(2, 3)), a(this, "depth", (0, r.randomNumber)(1, 4)), a(this, "positionMultiplier", this.depth / 4), a(this, "color", u[4 - this.depth]), a(this, "offscreenX", o.MAX_RADIUS + this.size), a(this, "offscreenY", o.MAX_RADIUS + this.size), a(this, "x", (0, r.randomNumber)(-this.size, this.offscreenX)), a(this, "y", (0, r.randomNumber)(-this.size, this.offscreenY))
            }
            return e = s, t = [{
                key: "checkBounds",
                value: function() {
                    this.x > this.offscreenX ? this.x = -this.size : this.y > this.offscreenY ? this.y = -this.size : this.x < -this.size ? this.x = this.offscreenX : this.y < -this.size && (this.y = this.offscreenY)
                }
            }, {
                key: "update",
                value: function(e, t) {
                    this.checkBounds(), this.y += t * this.positionMultiplier, this.x += e * this.positionMultiplier
                }
            }, {
                key: "render",
                value: function(e, t) {
                    e.beginPath(), e.globalAlpha = t * this.depth / 4, e.arc(this.x, this.y, this.size, 0, o.TWO_PI, !0), e.fillStyle = this.color, e.fill(), e.globalAlpha = 1
                }
            }], i(e.prototype, t), n && i(e, n), s
        }();
    t.default = s
}