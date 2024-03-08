function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, l = n("188904");
    i = class {
        getCurrentValue() {
            if (null == this.animationDetails) return this.value;
            let e = performance.now() - this.animationDetails.animationStart,
                t = this.value < this.animationDetails.lastValue ? 150 : 500;
            return e > t ? (this.animationDetails = null, this.value) : this.value < this.animationDetails.lastValue ? l.easeOutQuint(e, this.animationDetails.lastValue, this.value, t) : l.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4)
        }
        animateTo(e) {
            this.isReset = !1, this.value !== e && (this.animationDetails = {
                lastValue: this.value,
                animationStart: performance.now()
            }, this.value = e)
        }
        isAnimating() {
            return null != this.animationDetails
        }
        reset() {
            this.animateTo(0), this.isReset = !0
        }
        constructor(e) {
            this.value = e, this.animationDetails = null, this.isReset = !1
        }
    }
}