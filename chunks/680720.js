function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("217942");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = function() {
        var e, t, n;

        function a(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, a), i(this, "value", void 0), i(this, "animationDetails", void 0), i(this, "isReset", void 0), this.value = e, this.animationDetails = null, this.isReset = !1
        }
        return e = a, t = [{
            key: "getCurrentValue",
            value: function() {
                if (null == this.animationDetails) return this.value;
                var e = performance.now() - this.animationDetails.animationStart,
                    t = this.value < this.animationDetails.lastValue ? 150 : 500;
                return e > t ? (this.animationDetails = null, this.value) : this.value < this.animationDetails.lastValue ? r.easeOutQuint(e, this.animationDetails.lastValue, this.value, t) : r.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4)
            }
        }, {
            key: "animateTo",
            value: function(e) {
                this.isReset = !1, this.value !== e && (this.animationDetails = {
                    lastValue: this.value,
                    animationStart: performance.now()
                }, this.value = e)
            }
        }, {
            key: "isAnimating",
            value: function() {
                return null != this.animationDetails
            }
        }, {
            key: "reset",
            value: function() {
                this.animateTo(0), this.isReset = !0
            }
        }], o(e.prototype, t), n && o(e, n), a
    }()
}