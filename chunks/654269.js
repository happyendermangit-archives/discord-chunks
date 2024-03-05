function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        ResizeObservation: function() {
            return o
        }
    });
    var n = r("252089"),
        u = r("334935"),
        a = r("467980"),
        o = function() {
            function e(e, t) {
                this.target = e, this.observedBox = t || n.ResizeObserverBoxOptions.CONTENT_BOX, this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0
                }
            }
            return e.prototype.isActive = function() {
                var e, t = (0, u.calculateBoxSize)(this.target, this.observedBox, !0);
                if (e = this.target, !(0, a.isSVG)(e) && !(0, a.isReplacedElement)(e) && "inline" === getComputedStyle(e).display) this.lastReportedSize = t;
                return this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize || !1
            }, e
        }()
}