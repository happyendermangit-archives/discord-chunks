function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
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
    class s extends i.default {
        static fromServer(e) {
            let {
                sku_id: t,
                ...n
            } = e;
            return new s({
                ...n,
                skuId: t
            })
        }
        constructor(e) {
            super(), r(this, "id", void 0), r(this, "skuId", void 0), this.id = e.id, this.skuId = e.skuId
        }
    }
}