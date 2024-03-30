function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("180205"),
        i = n("217014"),
        a = n("501826"),
        u = n("963041"),
        s = n("147746");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || d(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function f(e) {
        return function(e) {
            if (Array.isArray(e)) return l(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || d(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(e, t) {
        if (e) {
            if ("string" == typeof e) return l(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
        }
    }

    function _(e, t, n) {
        return "guild" === e ? u.default.getGuildExperimentDescriptor(t, n.guildId) : u.default.getUserExperimentDescriptor(t)
    }

    function E(e, t, n, r) {
        var o, i;
        return (null == r ? void 0 : r.aaMode) ? e.defaultConfig : null !== (i = null === (o = n.get(t)) || void 0 === o ? void 0 : o.config) && void 0 !== i ? i : e.defaultConfig
    }

    function p(e) {
        var t, n, l = new Map;
        l.set(s.ExperimentBuckets.NOT_ELIGIBLE, {
            description: "Not Eligible",
            config: e.defaultConfig
        }), l.set(s.ExperimentBuckets.CONTROL, {
            description: "Control Bucket",
            config: e.defaultConfig
        }), e.treatments.forEach(function(e) {
            l.set(e.id, {
                description: "Treatment ".concat(e.id, ": ").concat(e.label),
                config: e.config
            })
        });
        var d = (t = e.kind, n = {
            id: e.id,
            title: e.label,
            description: f(l.values()).map(function(e) {
                return e.description
            }),
            buckets: f(l.keys())
        }, "guild" === t ? (0, a.registerGuildExperiment)(n) : (0, a.registerUserExperiment)(n));

        function p(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            if (t.exposureType = n ? s.ExposureTypes.AUTO_FALLBACK : s.ExposureTypes.AUTO, t.excluded = !1, null == r) {
                m(e, t);
                return
            }
            y(e, t, r)
        }

        function m(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    excluded: !1,
                    exposureType: s.ExposureTypes.MANUAL
                },
                r = _(e.kind, d.id, t);
            null != r && y(t, n, r)
        }

        function y(e, t, n) {
            if (null != n) {
                var r, o, u, l, c, f = s.ExposureTypes.MANUAL;
                (0, a.trackExposureToExperiment)(d.id, n, {
                    location: null !== (r = null == e ? void 0 : e.location) && void 0 !== r ? r : "unknown",
                    analyticsLocations: null !== (o = null == t ? void 0 : t.analyticsLocations) && void 0 !== o ? o : [],
                    fingerprint: null !== (l = null !== (u = null == t ? void 0 : t.fingerprint) && void 0 !== u ? u : i.default.getFingerprint()) && void 0 !== l ? l : void 0,
                    excluded: (null == t ? void 0 : t.excluded) || !1,
                    exposureType: null !== (c = null == t ? void 0 : t.exposureType) && void 0 !== c ? c : f
                })
            }
        }

        function I(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = null != r.disable && r.disable,
                i = _(e.kind, e.id, t),
                a = null == i || o ? s.ExperimentBuckets.NOT_ELIGIBLE : i.bucket,
                c = null == i ? -1 : i.revision;

            function f() {
                var r = _(e.kind, e.id, t),
                    i = null == r || o ? s.ExperimentBuckets.NOT_ELIGIBLE : r.bucket,
                    u = null == r ? -1 : r.revision;
                (i !== a || c !== u) && (n(E(e, i, l, r), i, u), a = i, c = u)
            }
            return n(E(e, a, l, i), a, c), u.default.addReactChangeListener(f),
                function() {
                    u.default.removeReactChangeListener(f)
                }
        }
        return {
            useExperiment: function(t) {
                var n, i, a, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        autoTrackExposure: !0
                    },
                    f = null !== (n = u.disable) && void 0 !== n && n,
                    d = !1 !== u.autoTrackExposure,
                    m = _(e.kind, e.id, t),
                    y = null == u.trackExposureOptions ? void 0 : (0, o.default)(null !== (i = u.trackExposureOptions) && void 0 !== i ? i : {}),
                    h = null !== (a = null == m ? void 0 : m.triggerDebuggingEnabled) && void 0 !== a && a,
                    O = c((0, r.useState)(function() {
                        var t = null == m || f ? s.ExperimentBuckets.NOT_ELIGIBLE : m.bucket;
                        return [E(e, t, l, m), t, null == m ? -1 : m.revision]
                    }), 2),
                    T = c(O[0], 3),
                    S = T[0],
                    v = T[1],
                    g = T[2],
                    A = O[1],
                    b = (0, o.default)(t);
                return (0, r.useEffect)(function() {
                    !f && (d || h) && p(b, y, !1 === d)
                }, [f, d, b, y, v, g, h]), (0, r.useEffect)(function() {
                    return I(b, function(e, t, n) {
                        A(function(r) {
                            return r[0] === e && r[1] === t && r[2] === n ? r : [e, t, n]
                        })
                    }, {
                        disable: f
                    })
                }, [f, b]), S
            },
            subscribe: I,
            trackExposure: m,
            getCurrentConfig: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        autoTrackExposure: !0
                    },
                    r = _(e.kind, e.id, t);
                if (null == r || n.disable) return E(e, s.ExperimentBuckets.NOT_ELIGIBLE, l, r);
                if (!1 !== n.autoTrackExposure || r.triggerDebuggingEnabled) {
                    var o = !1 === n.autoTrackExposure;
                    p(t, n.trackExposureOptions, o, r)
                }
                return E(e, r.bucket, l, r)
            },
            definition: e,
            isAAMode: function(t) {
                var n = _(e.kind, e.id, t);
                return !!(null == n ? void 0 : n.aaMode)
            }
        }
    }
}