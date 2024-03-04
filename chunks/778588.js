function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144");
    let r = [];

    function a() {
        r = []
    }
    class o extends i.default.Store {
        hasLayers() {
            return r.length > 0
        }
        getLayers() {
            return r
        }
    }
    o.displayName = "LayerStore";
    var l = new o(s.default, {
        LAYER_PUSH: function(e) {
            let {
                component: t
            } = e;
            if (r.indexOf(t) >= 0) return !1;
            r = [...r, t]
        },
        LAYER_POP: function() {
            if (0 === r.length) return !1;
            r = r.slice(0, -1)
        },
        LAYER_POP_ALL: a,
        LOGOUT: a,
        NOTIFICATION_CLICK: a
    })
}