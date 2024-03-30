function(e, t, n) {
    "use strict";
    n.r(t);

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function i(e, t) {
        return Math.max(Math.min((e - t) / 30, 1), -1)
    }
    var a = function() {
        var e, t, n;

        function a() {
            var e = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, a), o(this, "resistance", .98), o(this, "px", 0), o(this, "py", 0), o(this, "x", 0), o(this, "y", 0), o(this, "forceX", 0), o(this, "forceY", 0), o(this, "handleMouseMove", function(t) {
                var n = t.clientX,
                    r = t.clientY;
                e.x = n, e.y = r
            })
        }
        return e = a, t = [{
            key: "initialize",
            value: function() {
                window.addEventListener("mousemove", this.handleMouseMove)
            }
        }, {
            key: "terminate",
            value: function() {
                window.removeEventListener("mousemove", this.handleMouseMove)
            }
        }, {
            key: "update",
            value: function() {
                this.x !== this.px && this.y !== this.py && (this.forceX += i(this.x, this.px), this.forceY += i(this.y, this.py), this.px = this.x, this.py = this.y), 0 !== this.forceX && (this.forceX = this.forceX * this.resistance), 0 !== this.forceY && (this.forceY = this.forceY * this.resistance)
            }
        }, {
            key: "render",
            value: function() {}
        }], r(e.prototype, t), n && r(e, n), a
    }();
    t.default = a
}