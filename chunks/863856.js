function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var i = n("811022"),
        s = n("446674"),
        r = n("913144"),
        a = n("862205"),
        o = n("789563"),
        l = n("15511");
    let u = (0, a.createExperiment)({
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
        d = new i.default("GatewayZstdStore"),
        c = !1,
        _ = !1,
        f = 0;

    function E(e) {
        if (e && !(0, l.supportsZstd)()) {
            d.warn("Attempting to enable zstd but it is not supported");
            return
        }(0, l.setFastConnectZstd)(e), e !== c && d.info("Setting Zstd to ".concat(e)), c = e
    }
    class h extends s.default.Store {
        initialize() {
            this.waitFor(o.default), c = (0, l.supportsZstd)() && (0, l.getFastConnectZstd)()
        }
        shouldUseZstd() {
            return c
        }
    }
    h.displayName = "GatewayZstdStore";
    var g = new h(r.default, {
        CONNECTION_OPEN: function() {
            if (_) {
                d.info("Ignoring zstd experiment config because we fell back to zlib");
                return
            }
            let e = u.getCurrentConfig({
                location: "GatewayZstdStore"
            }, {
                autoTrackExposure: (0, l.supportsZstd)()
            });
            E(e.useZstd), f = 0
        },
        CONNECTION_INTERRUPTED: function() {
            c && (f += 1) > 3 && (d.error("Disabling zstd due to consecutive errors"), E(!1), _ = !0)
        }
    })
}