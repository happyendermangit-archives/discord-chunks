function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("259443"),
        l = n("442837"),
        u = n("570140"),
        d = n("818083"),
        _ = n("353926"),
        c = n("988348");
    let E = (0, d.createExperiment)({
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
        I = new o.Logger("GatewayZstdStore"),
        T = !1,
        f = !1,
        S = 0;

    function h(e) {
        if (e && !(0, c.supportsZstd)()) {
            I.warn("Attempting to enable zstd but it is not supported");
            return
        }(0, c.setFastConnectZstd)(e), e !== T && I.info("Setting Zstd to ".concat(e)), T = e
    }
    class A extends(a = l.default.Store) {
        initialize() {
            this.waitFor(_.default), T = (0, c.supportsZstd)() && (0, c.getFastConnectZstd)()
        }
        shouldUseZstd() {
            return T
        }
    }
    s = "GatewayZstdStore", (r = "displayName") in(i = A) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new A(u.default, {
        CONNECTION_OPEN: function() {
            if (f) {
                I.info("Ignoring zstd experiment config because we fell back to zlib");
                return
            }
            h(E.getCurrentConfig({
                location: "GatewayZstdStore"
            }, {
                autoTrackExposure: (0, c.supportsZstd)()
            }).useZstd), S = 0
        },
        CONNECTION_INTERRUPTED: function() {
            T && (S += 1) > 3 && (I.error("Disabling zstd due to consecutive errors"), h(!1), f = !0)
        }
    })
}