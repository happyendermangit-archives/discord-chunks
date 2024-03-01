function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        initialize: function() {
            return r
        }
    }), E("222007"), E("70102"), E("424973");
    var t = E("913144");
    let o = {},
        n = !1;

    function r(e) {
        for (let _ in e) {
            let E = e[_];
            (function(e, _) {
                var E;
                _.actions
            })(_, E),
            function(e) {
                var _;
                let E = null !== (_ = e.actions) && void 0 !== _ ? _ : [];
                for (let _ of ((e.hasStoreChangeListeners || e.loadAfterConnectionOpen) && (!E.includes("POST_CONNECTION_OPEN") && (E = [...E, "POST_CONNECTION_OPEN"]), !E.includes("OVERLAY_INITIALIZE") && (E = [...E, "OVERLAY_INITIALIZE"])), e.loadRightBeforeConnectionOpen && (!E.includes("CONNECTION_OPEN") && (E = [...E, "CONNECTION_OPEN"]), !E.includes("OVERLAY_INITIALIZE") && (E = [...E, "OVERLAY_INITIALIZE"])), E)) !(_ in o) && (o[_] = []), o[_].push(e)
            }(E)
        }
        t.default.addInterceptor(i)
    }

    function i(e) {
        if (("CONNECTION_OPEN" === e.type || "OVERLAY_INITIALIZE" === e.type) && (n = !0), e.type in o) {
            let _ = [];
            for (let E of o[e.type]) !n && E.neverLoadBeforeConnectionOpen ? _.push(E) : E.inlineRequire().initialize();
            _.length > 0 ? o[e.type] = _ : delete o[e.type]
        }
        return !1
    }
}