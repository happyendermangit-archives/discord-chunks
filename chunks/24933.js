function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        a = n("570140");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function o() {
        return {
            usageByApplicationId: {},
            shelfOrder: []
        }
    }
    let l = o();
    class u extends(i = r.default.PersistedStore) {
        initialize(e) {
            l = {
                ...o(),
                ...null != e ? e : {}
            }
        }
        getState() {
            return l
        }
    }
    s(u, "displayName", "ActivityShelfStore"), s(u, "persistKey", "ActivityShelfStore"), t.default = new u(a.default, {
        LOGOUT: function() {
            l = o()
        }
    })
}