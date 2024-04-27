function(e, t, n) {
    "use strict";
    let i;
    n.r(t);
    var r, s, a, o, l = n("259443"),
        u = n("442837"),
        d = n("570140"),
        _ = n("818083"),
        c = n("353926"),
        E = n("988348"),
        I = n("987338");
    let T = (0, _.createExperiment)({
            id: "2024-03_gateway_zstd",
            label: "Gateway Zstd compression",
            kind: "user",
            defaultConfig: {
                useZstd: !1,
                doVerification: !1
            },
            treatments: [{
                id: I.ExperimentBuckets.CONTROL,
                label: "Control (verification)",
                config: {
                    useZstd: !1,
                    doVerification: !0
                }
            }, {
                id: 1,
                label: "Use Zstd",
                config: {
                    useZstd: !0,
                    doVerification: !1
                }
            }, {
                id: 2,
                label: "No Zstd, no verification",
                config: {
                    useZstd: !1,
                    doVerification: !1
                }
            }, {
                id: 3,
                label: "Use Zstd (2)",
                config: {
                    useZstd: !0,
                    doVerification: !1
                }
            }]
        }),
        f = (0, _.createExperiment)({
            id: "2024-04_gateway_zstd_verification",
            label: "Gateway Zstd Verification",
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
        S = new l.Logger("GatewayZstdStore");
    let h = !1,
        A = 0,
        m = !0;

    function N() {
        return null == i && (i = (0, E.supportsZstd)() && (0, E.getFastConnectZstd)()), i
    }

    function p(e) {
        if (e && !(0, E.supportsZstd)()) {
            S.warn("Attempting to enable zstd but it is not supported");
            return
        }(0, E.setFastConnectZstd)(e), e !== i && S.info("Setting Zstd to ".concat(e)), i = e
    }
    class O extends(o = u.default.Store) {
        initialize() {
            this.waitFor(c.default)
        }
        shouldUseZstd() {
            return N()
        }
        enableFailureTracking() {
            m = !0
        }
        disableFailureTracking() {
            m = !1
        }
    }
    a = "GatewayZstdStore", (s = "displayName") in(r = O) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new O(d.default, {
        CONNECTION_OPEN: function() {
            if (h) {
                S.info("Ignoring zstd experiment config because we fell back to zlib");
                return
            }
            let e = T.getCurrentConfig({
                    location: "GatewayZstdStore"
                }),
                t = e.useZstd;
            e.doVerification && (t = f.getCurrentConfig({
                location: "GatewayZstdStore"
            }).useZstd), p(t), A = 0
        },
        CONNECTION_INTERRUPTED: function() {
            N() && m && (A += 1) > 3 && (S.error("Disabling zstd due to consecutive errors"), p(!1), h = !0)
        }
    })
}