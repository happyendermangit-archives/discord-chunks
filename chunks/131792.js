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
            super(), r(this, "id", void 0), r(this, "widgets", void 0), this.id = e.id || "", this.widgets = e.widgets || []
        }
    }
}