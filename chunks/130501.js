function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ResizeObservation: function() {
            return o
        }
    });
    var r = n("430901"),
        i = n("229579"),
        a = n("222285"),
        o = function() {
            function e(e, t) {
                this.target = e, this.observedBox = t || r.ResizeObserverBoxOptions.CONTENT_BOX, this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0
                }
            }
            return e.prototype.isActive = function() {
                var e, t = (0, i.calculateBoxSize)(this.target, this.observedBox, !0);
                if (e = this.target, !(0, a.isSVG)(e) && !(0, a.isReplacedElement)(e) && "inline" === getComputedStyle(e).display) this.lastReportedSize = t;
                return this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize || !1
            }, e
        }()
}