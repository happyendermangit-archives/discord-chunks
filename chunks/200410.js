function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return a
        }
    });
    var a, n = r("666038");
    a = class e extends n.default {
        static fromServer(t) {
            let {
                sku_id: r,
                ...a
            } = t;
            return new e({
                ...a,
                skuId: r
            })
        }
        constructor(e) {
            super(), this.id = e.id, this.skuId = e.skuId
        }
    }
}