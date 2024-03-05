function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        ResizeObserverEntry: function() {
            return ResizeObserverEntry
        }
    });
    var n = r("334935"),
        u = r("26098"),
        ResizeObserverEntry = function(e) {
            var t = (0, n.calculateBoxSizes)(e);
            this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = (0, u.freeze)([t.borderBoxSize]), this.contentBoxSize = (0, u.freeze)([t.contentBoxSize]), this.devicePixelContentBoxSize = (0, u.freeze)([t.devicePixelContentBoxSize])
        }
}