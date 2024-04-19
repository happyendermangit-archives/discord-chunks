function(e, t, n) {
    "use strict";
    let i;
    n.r(t);
    var r, s, a, o, l = n("259443"),
        u = n("442837"),
        d = n("570140"),
        _ = n("818083"),
        c = n("353926"),
        E = n("988348");
    let I = (0, _.createExperiment)({
            id: "2024-03_gateway_zstd",
            label: "Gateway Zstd compression",
            kind: "user",
            defaultConfig: {
                useZstd: !1
            },
            treatments: [{
                id: 1,
                label: "Use Zstd",
                config: {
                    useZstd: !0
                }
            }]
        }),
        T = new l.Logger("GatewayZstdStore");
    let f = !1,
        S = 0,
        h = !0;

    function A() {
        return null == i && (i = (0, E.supportsZstd)() && (0, E.getFastConnectZstd)()), i
    }

    function m(e) {
        if (e && !(0, E.supportsZstd)()) {
            T.warn("Attempting to enable zstd but it is not supported");
            return
        }(0, E.setFastConnectZstd)(e), e !== i && T.info("Setting Zstd to ".concat(e)), i = e
    }
    class N extends(o = u.default.Store) {
        initialize() {
            this.waitFor(c.default)
        }
        shouldUseZstd() {
            return A()
        }
        enableFailureTracking() {
            h = !0
        }
        disableFailureTracking() {
            h = !1
        }
    }
    a = "GatewayZstdStore", (s = "displayName") in(r = N) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new N(d.default, {
        CONNECTION_OPEN: function() {
            if (f) {
                T.info("Ignoring zstd experiment config because we fell back to zlib");
                return
            }
            m(I.getCurrentConfig({
                location: "GatewayZstdStore"
            }, {
                autoTrackExposure: (0, E.supportsZstd)()
            }).useZstd), S = 0
        },
        CONNECTION_INTERRUPTED: function() {
            A() && h && (S += 1) > 3 && (T.error("Disabling zstd due to consecutive errors"), m(!1), f = !0)
        }
    })
}