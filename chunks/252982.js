function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("81825");

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class a extends i.default {
        constructor(e) {
            super(), r(this, "id", void 0), r(this, "layoutId", void 0), r(this, "type", void 0), r(this, "anchor", void 0), r(this, "size", void 0), r(this, "pinned", void 0), r(this, "zIndex", void 0), r(this, "meta", void 0), this.id = e.id || "", this.layoutId = e.layoutId || "", this.type = e.type, this.anchor = {
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