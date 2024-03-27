function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        initialize: function() {
            return a
        }
    }), n("47120"), n("411104"), n("653041");
    var i = n("570140");
    let r = {},
        s = !1;

    function a(e) {
        for (let t in e) {
            let n = e[t];
            (function(e, t) {
                var n;
                t.actions
            })(t, n),
            function(e) {
                var t;
                let n = null !== (t = e.actions) && void 0 !== t ? t : [];
                for (let t of ((e.hasStoreChangeListeners || e.loadAfterConnectionOpen) && (!n.includes("POST_CONNECTION_OPEN") && (n = [...n, "POST_CONNECTION_OPEN"]), !n.includes("OVERLAY_INITIALIZE") && (n = [...n, "OVERLAY_INITIALIZE"])), e.loadRightBeforeConnectionOpen && (!n.includes("CONNECTION_OPEN") && (n = [...n, "CONNECTION_OPEN"]), !n.includes("OVERLAY_INITIALIZE") && (n = [...n, "OVERLAY_INITIALIZE"])), n)) !(t in r) && (r[t] = []), r[t].push(e)
            }(n)
        }
        i.default.addInterceptor(o)
    }

    function o(e) {
        if (("CONNECTION_OPEN" === e.type || "OVERLAY_INITIALIZE" === e.type) && (s = !0), e.type in r) {
            let t = [];
            for (let n of r[e.type]) !s && n.neverLoadBeforeConnectionOpen ? t.push(n) : n.inlineRequire().initialize();
            t.length > 0 ? r[e.type] = t : delete r[e.type]
        }
        return !1
    }
}