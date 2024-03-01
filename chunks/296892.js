function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007");
    var i = n("884691"),
        r = n("261810"),
        s = n("271938"),
        a = n("211470"),
        o = n("789563"),
        l = n("565034");

    function u(e, t, n) {
        return "guild" === e ? o.default.getGuildExperimentDescriptor(t, n.guildId) : o.default.getUserExperimentDescriptor(t)
    }

    function c(e, t, n, i) {
        var r, s;
        return (null == i ? void 0 : i.aaMode) ? e.defaultConfig : null !== (s = null === (r = n.get(t)) || void 0 === r ? void 0 : r.config) && void 0 !== s ? s : e.defaultConfig
    }

    function d(e) {
        var t, n;
        let d = new Map;
        d.set(l.ExperimentBuckets.NOT_ELIGIBLE, {
            description: "Not Eligible",
            config: e.defaultConfig
        }), d.set(l.ExperimentBuckets.CONTROL, {
            description: "Control Bucket",
            config: e.defaultConfig
        }), e.treatments.forEach(e => {
            d.set(e.id, {
                description: "Treatment ".concat(e.id, ": ").concat(e.label),
                config: e.config
            })
        });
        let f = (t = e.kind, n = {
            id: e.id,
            title: e.label,
            description: [...d.values()].map(e => e.description),
            buckets: [...d.keys()]
        }, "guild" === t ? (0, a.registerGuildExperiment)(n) : (0, a.registerUserExperiment)(n));

        function E(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 ? arguments[2] : void 0,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            if (t.exposureType = n ? l.ExposureTypes.AUTO_FALLBACK : l.ExposureTypes.AUTO, t.excluded = !1, null == i) {
                p(e, t);
                return
            }
            h(e, t, i)
        }

        function p(t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    excluded: !1,
                    exposureType: l.ExposureTypes.MANUAL
                },
                i = u(e.kind, f.id, t);
            null != i && h(t, n, i)
        }

        function h(e, t, n) {
            if (null != n) {
                var i, r, o, u, c;
                let d = l.ExposureTypes.MANUAL;
                (0, a.trackExposureToExperiment)(f.id, n, {
                    location: null !== (i = null == e ? void 0 : e.location) && void 0 !== i ? i : "unknown",
                    analyticsLocations: null !== (r = null == t ? void 0 : t.analyticsLocations) && void 0 !== r ? r : [],
                    fingerprint: null !== (u = null !== (o = null == t ? void 0 : t.fingerprint) && void 0 !== o ? o : s.default.getFingerprint()) && void 0 !== u ? u : void 0,
                    excluded: (null == t ? void 0 : t.excluded) || !1,
                    exposureType: null !== (c = null == t ? void 0 : t.exposureType) && void 0 !== c ? c : d
                })
            }
        }

        function _(t, n) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = null != i.disable && i.disable,
                s = u(e.kind, e.id, t),
                a = null == s || r ? l.ExperimentBuckets.NOT_ELIGIBLE : s.bucket,
                f = null == s ? -1 : s.revision,
                E = c(e, a, d, s);

            function p() {
                let i = u(e.kind, e.id, t),
                    s = null == i || r ? l.ExperimentBuckets.NOT_ELIGIBLE : i.bucket,
                    o = null == i ? -1 : i.revision;
                (s !== a || f !== o) && (n(c(e, s, d, i), s, o), a = s, f = o)
            }
            return n(E, a, f), o.default.addReactChangeListener(p), () => {
                o.default.removeReactChangeListener(p)
            }
        }
        return {
            useExperiment: function(t) {
                var n, s, a;
                let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        autoTrackExposure: !0
                    },
                    f = null !== (n = o.disable) && void 0 !== n && n,
                    p = !1 !== o.autoTrackExposure,
                    h = u(e.kind, e.id, t),
                    S = null == o.trackExposureOptions ? void 0 : (0, r.default)(null !== (s = o.trackExposureOptions) && void 0 !== s ? s : {}),
                    m = null !== (a = null == h ? void 0 : h.triggerDebuggingEnabled) && void 0 !== a && a,
                    [
                        [T, g, I], C
                    ] = (0, i.useState)(() => {
                        let t = null == h || f ? l.ExperimentBuckets.NOT_ELIGIBLE : h.bucket;
                        return [c(e, t, d, h), t, null == h ? -1 : h.revision]
                    }),
                    v = (0, r.default)(t);
                return (0, i.useEffect)(() => {
                    if (!f && (!!p || !!m)) E(v, S, !1 === p)
                }, [f, p, v, S, g, I, m]), (0, i.useEffect)(() => _(v, (e, t, n) => {
                    C(i => i[0] === e && i[1] === t && i[2] === n ? i : [e, t, n])
                }, {
                    disable: f
                }), [f, v]), T
            },
            subscribe: _,
            trackExposure: p,
            getCurrentConfig: function(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        autoTrackExposure: !0
                    },
                    i = u(e.kind, e.id, t);
                if (null == i || n.disable) return c(e, l.ExperimentBuckets.NOT_ELIGIBLE, d, i);
                if (!1 !== n.autoTrackExposure || i.triggerDebuggingEnabled) {
                    let e = !1 === n.autoTrackExposure;
                    E(t, n.trackExposureOptions, e, i)
                }
                return c(e, i.bucket, d, i)
            },
            definition: e,
            isAAMode: function(t) {
                let n = u(e.kind, e.id, t);
                return !!(null == n ? void 0 : n.aaMode)
            }
        }
    }
}