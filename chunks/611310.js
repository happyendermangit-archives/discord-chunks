function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var s, i = n("666038");
    s = class extends i.default {
        constructor(e) {
            super(), this.id = e.id || "", this.layoutId = e.layoutId || "", this.type = e.type, this.anchor = {
                left: 0,
                top: 0,
                ...e.anchor
            }, this.size = {
                width: 0,
                height: 0,
                ...e.size
            }, this.pinned = !!e.pinned, this.zIndex = e.zIndex || 0, this.meta = {
                ...e.meta
            }
        }
    }
}