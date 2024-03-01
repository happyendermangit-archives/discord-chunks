function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        ResizeObserverEntry: function() {
            return ResizeObserverEntry
        }
    });
    var r = n("170601"),
        ResizeObserverEntry = function(t) {
            var e = (0, r.calculateBoxSizes)(t);
            this.target = t, this.contentRect = e.contentRect, this.borderBoxSize = [e.borderBoxSize], this.contentBoxSize = [e.contentBoxSize], this.devicePixelContentBoxSize = [e.devicePixelContentBoxSize]
        }
}