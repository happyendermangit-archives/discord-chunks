function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a, s, o = n("442837"),
        l = n("570140");
    let u = [];

    function d() {
        u = []
    }
    class _ extends(i = o.default.Store) {
        hasLayers() {
            return u.length > 0
        }
        getLayers() {
            return u
        }
    }
    s = "LayerStore", (a = "displayName") in(r = _) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new _(l.default, {
        LAYER_PUSH: function(e) {
            let {
                component: t
            } = e;
            if (u.indexOf(t) >= 0) return !1;
            u = [...u, t]
        },
        LAYER_POP: function() {
            if (0 === u.length) return !1;
            u = u.slice(0, -1)
        },
        LAYER_POP_ALL: d,
        LOGOUT: d,
        NOTIFICATION_CLICK: d
    })
}