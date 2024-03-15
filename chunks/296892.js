function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("884691"),
        s = n("261810"),
        r = n("271938"),
        a = n("211470"),
        o = n("789563"),
        l = n("565034");

    function u(e, t, n) {
        return "guild" === e ? o.default.getGuildExperimentDescriptor(t, n.guildId) : o.default.getUserExperimentDescriptor(t)
    }

    function d(e, t, n, i) {
        var s, r;
        return (null == i ? void 0 : i.aaMode) ? e.defaultConfig : null !== (r = null === (s = n.get(t)) || void 0 === s ? void 0 : s.config) && void 0 !== r ? r : e.defaultConfig
    }

    function c(e) {
        var t, n;
        let c = new Map;
        c.set(l.ExperimentBuckets.NOT_ELIGIBLE, {
            description: "Not Eligible",
            config: e.defaultConfig
        }), c.set(l.ExperimentBuckets.CONTROL, {
            description: "Control Bucket",
            config: e.defaultConfig
        }), e.treatments.forEach(e => {
            c.set(e.id, {
                description: "Treatment ".concat(e.id, ": ").concat(e.label),
                config: e.config
            })
        });
        let f = (t = e.kind, n = {
            id: e.id,
            title: e.label,
            description: [...c.values()].map(e => e.description),
            buckets: [...c.keys()]
        }, "guild" === t ? (0, a.registerGuildExperiment)(n) : (0, a.registerUserExperiment)(n));

        function _(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 ? arguments[2] : void 0,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            if (t.exposureType = n ? l.ExposureTypes.AUTO_FALLBACK : l.ExposureTypes.AUTO, t.excluded = !1, null == i) {
                E(e, t);
                return
            }
            h(e, t, i)
        }

        function E(t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    excluded: !1,
                    exposureType: l.ExposureTypes.MANUAL
                },
                i = u(e.kind, f.id, t);
            null != i && h(t, n, i)
        }

        function h(e, t, n) {
            if (null != n) {
                var i, s, o, u, d;
                let c = l.ExposureTypes.MANUAL;
                (0, a.trackExposureToExperiment)(f.id, n, {
                    location: null !== (i = null == e ? void 0 : e.location) && void 0 !== i ? i : "unknown",
                    analyticsLocations: null !== (s = null == t ? void 0 : t.analyticsLocations) && void 0 !== s ? s : [],
                    fingerprint: null !== (u = null !== (o = null == t ? void 0 : t.fingerprint) && void 0 !== o ? o : r.default.getFingerprint()) && void 0 !== u ? u : void 0,
                    excluded: (null == t ? void 0 : t.excluded) || !1,
                    exposureType: null !== (d = null == t ? void 0 : t.exposureType) && void 0 !== d ? d : c
                })
            }
        }

        function g(t, n) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                s = null != i.disable && i.disable,
                r = u(e.kind, e.id, t),
                a = null == r || s ? l.ExperimentBuckets.NOT_ELIGIBLE : r.bucket,
                f = null == r ? -1 : r.revision,
                _ = d(e, a, c, r);

            function E() {
                let i = u(e.kind, e.id, t),
                    r = null == i || s ? l.ExperimentBuckets.NOT_ELIGIBLE : i.bucket,
                    o = null == i ? -1 : i.revision;
                (r !== a || f !== o) && (n(d(e, r, c, i), r, o), a = r, f = o)
            }
            return n(_, a, f), o.default.addReactChangeListener(E), () => {
                o.default.removeReactChangeListener(E)
            }
        }
        return {
            useExperiment: function(t) {
                var n, r, a;
                let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        autoTrackExposure: !0
                    },
                    f = null !== (n = o.disable) && void 0 !== n && n,
                    E = !1 !== o.autoTrackExposure,
                    h = u(e.kind, e.id, t),
                    m = null == o.trackExposureOptions ? void 0 : (0, s.default)(null !== (r = o.trackExposureOptions) && void 0 !== r ? r : {}),
                    p = null !== (a = null == h ? void 0 : h.triggerDebuggingEnabled) && void 0 !== a && a,
                    [
                        [S, v, T], I
                    ] = (0, i.useState)(() => {
                        let t = null == h || f ? l.ExperimentBuckets.NOT_ELIGIBLE : h.bucket;
                        return [d(e, t, c, h), t, null == h ? -1 : h.revision]
                    }),
                    A = (0, s.default)(t);
                return (0, i.useEffect)(() => {
                    if (!f && (!!E || !!p)) _(A, m, !1 === E)
                }, [f, E, A, m, v, T, p]), (0, i.useEffect)(() => g(A, (e, t, n) => {
                    I(i => i[0] === e && i[1] === t && i[2] === n ? i : [e, t, n])
                }, {
                    disable: f
                }), [f, A]), S
            },
            subscribe: g,
            trackExposure: E,
            getCurrentConfig: function(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        autoTrackExposure: !0
                    },
                    i = u(e.kind, e.id, t);
                if (null == i || n.disable) return d(e, l.ExperimentBuckets.NOT_ELIGIBLE, c, i);
                if (!1 !== n.autoTrackExposure || i.triggerDebuggingEnabled) {
                    let e = !1 === n.autoTrackExposure;
                    _(t, n.trackExposureOptions, e, i)
                }
                return d(e, i.bucket, c, i)
            },
            definition: e,
            isAAMode: function(t) {
                let n = u(e.kind, e.id, t);
                return !!(null == n ? void 0 : n.aaMode)
            }
        }
    }
}