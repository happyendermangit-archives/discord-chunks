function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ResizeObserverEntry: function() {
            return a
        }
    });
    var r = n("641862"),
        i = n("721056"),
        a = function(e) {
            var t = (0, r.calculateBoxSizes)(e);
            this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = (0, i.freeze)([t.borderBoxSize]), this.contentBoxSize = (0, i.freeze)([t.contentBoxSize]), this.devicePixelContentBoxSize = (0, i.freeze)([t.devicePixelContentBoxSize])
        }
}