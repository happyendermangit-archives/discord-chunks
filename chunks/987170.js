function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("47120");
    var i = n("470079"),
        r = n("180205"),
        a = n("314897"),
        s = n("492435"),
        o = n("353926"),
        l = n("987338");

    function u(e, t, n) {
        return "guild" === e ? o.default.getGuildExperimentDescriptor(t, n.guildId) : o.default.getUserExperimentDescriptor(t)
    }

    function d(e, t, n, i) {
        var r, a;
        return (null == i ? void 0 : i.aaMode) ? e.defaultConfig : null !== (a = null === (r = n.get(t)) || void 0 === r ? void 0 : r.config) && void 0 !== a ? a : e.defaultConfig
    }

    function _(e) {
        var t, n;
        let _ = new Map;
        _.set(l.ExperimentBuckets.NOT_ELIGIBLE, {
            description: "Not Eligible",
            config: e.defaultConfig
        }), _.set(l.ExperimentBuckets.CONTROL, {
            description: "Control Bucket",
            config: e.defaultConfig
        }), e.treatments.forEach(e => {
            _.set(e.id, {
                description: "Treatment ".concat(e.id, ": ").concat(e.label),
                config: e.config
            })
        });
        let c = (t = e.kind, n = {
            id: e.id,
            title: e.label,
            description: [..._.values()].map(e => e.description),
            buckets: [..._.keys()]
        }, "guild" === t ? (0, s.registerGuildExperiment)(n) : (0, s.registerUserExperiment)(n));

        function E(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 ? arguments[2] : void 0,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            if (t.exposureType = n ? l.ExposureTypes.AUTO_FALLBACK : l.ExposureTypes.AUTO, t.excluded = !1, null == i) {
                I(e, t);
                return
            }
            T(e, t, i)
        }

        function I(t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    excluded: !1,
                    exposureType: l.ExposureTypes.MANUAL
                },
                i = u(e.kind, c.id, t);
            null != i && T(t, n, i)
        }

        function T(e, t, n) {
            if (null != n) {
                var i, r, o, u, d;
                let _ = l.ExposureTypes.MANUAL;
                (0, s.trackExposureToExperiment)(c.id, n, {
                    location: null !== (i = null == e ? void 0 : e.location) && void 0 !== i ? i : "unknown",
                    analyticsLocations: null !== (r = null == t ? void 0 : t.analyticsLocations) && void 0 !== r ? r : [],
                    fingerprint: null !== (u = null !== (o = null == t ? void 0 : t.fingerprint) && void 0 !== o ? o : a.default.getFingerprint()) && void 0 !== u ? u : void 0,
                    excluded: (null == t ? void 0 : t.excluded) || !1,
                    exposureType: null !== (d = null == t ? void 0 : t.exposureType) && void 0 !== d ? d : _
                })
            }
        }

        function f(t, n) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = null != i.disable && i.disable,
                a = u(e.kind, e.id, t),
                s = null == a || r ? l.ExperimentBuckets.NOT_ELIGIBLE : a.bucket,
                c = null == a ? -1 : a.revision;

            function E() {
                let i = u(e.kind, e.id, t),
                    a = null == i || r ? l.ExperimentBuckets.NOT_ELIGIBLE : i.bucket,
                    o = null == i ? -1 : i.revision;
                (a !== s || c !== o) && (n(d(e, a, _, i), a, o), s = a, c = o)
            }
            return n(d(e, s, _, a), s, c), o.default.addReactChangeListener(E), () => {
                o.default.removeReactChangeListener(E)
            }
        }
        return {
            useExperiment: function(t) {
                var n, a, s;
                let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        autoTrackExposure: !0
                    },
                    c = null !== (n = o.disable) && void 0 !== n && n,
                    I = !1 !== o.autoTrackExposure,
                    T = u(e.kind, e.id, t),
                    S = null == o.trackExposureOptions ? void 0 : (0, r.default)(null !== (a = o.trackExposureOptions) && void 0 !== a ? a : {}),
                    h = null !== (s = null == T ? void 0 : T.triggerDebuggingEnabled) && void 0 !== s && s,
                    [
                        [A, m, N], p
                    ] = (0, i.useState)(() => {
                        let t = null == T || c ? l.ExperimentBuckets.NOT_ELIGIBLE : T.bucket;
                        return [d(e, t, _, T), t, null == T ? -1 : T.revision]
                    }),
                    O = (0, r.default)(t);
                return (0, i.useEffect)(() => {
                    if (!c && (!!I || !!h)) E(O, S, !1 === I)
                }, [c, I, O, S, m, N, h]), (0, i.useEffect)(() => f(O, (e, t, n) => {
                    p(i => i[0] === e && i[1] === t && i[2] === n ? i : [e, t, n])
                }, {
                    disable: c
                }), [c, O]), A
            },
            subscribe: f,
            trackExposure: I,
            getCurrentConfig: function(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        autoTrackExposure: !0
                    },
                    i = u(e.kind, e.id, t);
                if (null == i || n.disable) return d(e, l.ExperimentBuckets.NOT_ELIGIBLE, _, i);
                if (!1 !== n.autoTrackExposure || i.triggerDebuggingEnabled) {
                    let e = !1 === n.autoTrackExposure;
                    E(t, n.trackExposureOptions, e, i)
                }
                return d(e, i.bucket, _, i)
            },
            definition: e,
            isAAMode: function(t) {
                let n = u(e.kind, e.id, t);
                return !!(null == n ? void 0 : n.aaMode)
            }
        }
    }
}