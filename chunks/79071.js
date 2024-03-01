function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        ResizeObservation: function() {
            return a
        }
    });
    var r = n("357663"),
        i = n("170601"),
        o = n("320810"),
        a = function() {
            function t(t, e) {
                this.target = t, this.observedBox = e || r.ResizeObserverBoxOptions.CONTENT_BOX, this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0
                }
            }
            return t.prototype.isActive = function() {
                var t, e = (0, i.calculateBoxSize)(this.target, this.observedBox);
                if (t = this.target, !(0, o.isSVG)(t) && !(0, o.isReplacedElement)(t) && "inline" === getComputedStyle(t).display) this.lastReportedSize = e;
                return this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize || !1
            }, t
        }()
}