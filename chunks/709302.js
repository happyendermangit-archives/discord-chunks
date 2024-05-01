function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("81825");

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class s extends i.default {
        static fromPath(e) {
            return new s({
                id: e,
                path: e
            })
        }
        constructor(e) {
            super(), r(this, "id", void 0), r(this, "path", void 0), this.id = e.id, this.path = e.path
        }
    }
    t.default = s
}