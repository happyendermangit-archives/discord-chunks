function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        registerExperiment: function() {
            return ed
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("392711"),
        a = n.n(i),
        u = n("505578"),
        s = n.n(u),
        l = n("242880"),
        c = n("884876"),
        f = n("35523"),
        d = n("217014"),
        _ = n("837133"),
        E = n("870331"),
        p = n("854752"),
        m = n("147746"),
        y = n("281767");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function O(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function S(e) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function v(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                T(e, t, n[t])
            })
        }
        return e
    }

    function g(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function A(e, t) {
        return (A = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function b(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return I(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var N = "scientist:triggered",
        R = "exerimentOverrides",
        C = "userExperimentOverrides",
        P = "guildExperimentOverrides",
        D = new f.default("ExperimentStore"),
        L = !1,
        M = {},
        U = {},
        w = [],
        k = [],
        G = {},
        B = {},
        j = {},
        F = {},
        V = {},
        H = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL,
        x = {};

    function Y(e) {
        var t = x[e];
        if (void 0 !== t) return t;
        var n = s().v3(e);
        return x[e] = n, n
    }
    var W = m.TriggerDebuggingAAExperiments.map(function(e) {
            return Y(e)
        }),
        K = {
            title: "Unnamed Experiment",
            description: "No description provided"
        };

    function z(e, t) {
        return e || W.includes(t)
    }

    function X(e) {
        var t;
        return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & y.UserFlags.STAFF) === y.UserFlags.STAFF || null != e.personal_connection_id || !1
    }

    function q(e, t, n, r) {
        var o = "".concat(t.type, "|").concat(e),
            i = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
        if (t.type === m.ExperimentTypes.USER) return i && (o += "|".concat(n), r && (o += "|triggerDebugging")), o;
        if (t.type === m.ExperimentTypes.GUILD) return o += "|".concat(t.guildId), i && (o += "|".concat(n), r && (o += "|triggerDebugging")), o;
        throw Error()
    }

    function Q(e) {
        if (e.type === m.ExperimentTypes.USER) return Y("".concat(e.bucket, "|").concat(e.revision));
        if (e.type === m.ExperimentTypes.GUILD) return Y("".concat(e.bucket, "|").concat(e.revision, "|").concat(e.guildId));
        throw Error()
    }
    var J = Date.now();

    function Z(e, t, n, r) {
        var o = M[q(e, t, n, r)];
        return !(null == o || Date.now() - o.time > 6048e5) && o.hash === Q(t)
    }

    function $(e) {
        var t = e.experimentId,
            n = e.descriptor,
            r = e.location,
            o = e.location_stack,
            i = e.context,
            a = e.fingerprint,
            u = e.excluded,
            s = e.exposureType;
        if (n.override) return !1;
        var l = s === m.ExposureTypes.AUTO_FALLBACK && !!n.triggerDebuggingEnabled;
        if (Z(t, n, r, l)) return !1;
        if (n.type === m.ExperimentTypes.USER) {
            var c = {
                name: t,
                revision: n.revision,
                population: n.population,
                bucket: n.bucket,
                location: r,
                location_stack: o,
                hash_result: n.hashResult,
                excluded: u,
                exposure_type: s
            };
            null != i && (c.context_guild_id = i.guildId);
            var f = l ? y.AnalyticEvents.EXPERIMENT_USER_TRIGGERED_FALLBACK : y.AnalyticEvents.EXPERIMENT_USER_TRIGGERED;
            E.default.track(f, c, {
                flush: !0,
                fingerprint: a
            })
        } else if (n.type === m.ExperimentTypes.GUILD) {
            var d = l ? y.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : y.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED;
            E.default.track(d, {
                name: t,
                revision: n.revision,
                bucket: n.bucket,
                guild_id: n.guildId,
                location: r,
                location_stack: o,
                hash_result: n.hashResult,
                excluded: u,
                exposure_type: s
            }, {
                flush: !0,
                fingerprint: a
            })
        }
        M[q(t, n, r, l)] = {
            time: Date.now(),
            hash: Q(n)
        }, ef(M)
    }

    function ee(e) {
        var t = b(e, 2),
            n = t[0],
            r = t[1];
        return null != p.GUILD_FILTERS[n] ? (0, p.GUILD_FILTERS)[n](r) : null
    }

    function et(e) {
        var t = b(e, 2),
            n = t[0],
            r = t[1];
        return {
            buckets: n.map(function(e) {
                var t = b(e, 2);
                return {
                    bucket: t[0],
                    positions: t[1].map(function(e) {
                        return {
                            start: e.s,
                            end: e.e
                        }
                    })
                }
            }),
            filters: r.map(ee),
            rawFilterData: r
        }
    }

    function en(e) {
        !H && "CONNECTION_OPEN" === e.type && X(e.user) && (H = !0), G = {}, B = {}, j = {};
        var t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
            n = e.experiments,
            r = e.guildExperiments;
        t && er(n, r), L = !0
    }

    function er(e, t) {
        w = e, k = null != t ? t : [], e.forEach(function(e) {
            var t = b(e, 8),
                n = t[0],
                r = t[1],
                o = t[2],
                i = t[3],
                a = t[4],
                u = t[5],
                s = t[6],
                l = t[7];
            G[n] = {
                type: "user",
                revision: r,
                population: a,
                bucket: o,
                override: 0 === i,
                hashResult: null != u ? u : -1,
                aaMode: 1 === s,
                triggerDebuggingEnabled: z(1 === l, n)
            }
        }), null != t && t.forEach(function(e) {
            var t = b(e, 10),
                n = t[0],
                r = t[1],
                o = t[2],
                i = t[3],
                a = t[4],
                u = t[5],
                s = t[6],
                l = t[7],
                c = t[8],
                f = t[9];
            B[n] = {
                hashKey: r,
                revision: o,
                populations: i.map(et),
                overrides: function(e) {
                    var t = {};
                    if (null == e) return t;
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value,
                                s = u.b,
                                l = u.k,
                                c = !0,
                                f = !1,
                                d = void 0;
                            try {
                                for (var _, E = l[Symbol.iterator](); !(c = (_ = E.next()).done); c = !0) t[_.value] = s
                            } catch (e) {
                                f = !0, d = e
                            } finally {
                                try {
                                    !c && null != E.return && E.return()
                                } finally {
                                    if (f) throw d
                                }
                            }
                        }
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && null != a.return && a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return t
                }(a),
                overridesFormatted: (null != u ? u : []).map(function(e) {
                    return e.map(et)
                }),
                holdoutName: null != s ? s : null,
                holdoutBucket: null != l ? l : null,
                aaMode: 1 === c,
                triggerDebuggingEnabled: z(1 === f, n)
            }
        })
    }

    function eo(e, t, n) {
        var r = null,
            o = !0,
            i = !1,
            a = void 0;
        try {
            for (var u, s = t[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                var l = u.value,
                    c = l.buckets,
                    f = l.filters,
                    d = !0;
                if (null != f) {
                    var _ = !0,
                        E = !1,
                        p = void 0;
                    try {
                        for (var y, I = f[Symbol.iterator](); !(_ = (y = I.next()).done); _ = !0) {
                            var h = y.value;
                            if (null != h && !h(e)) {
                                d = !1;
                                break
                            }
                        }
                    } catch (e) {
                        E = !0, p = e
                    } finally {
                        try {
                            !_ && null != I.return && I.return()
                        } finally {
                            if (E) throw p
                        }
                    }
                }
                if (d) {
                    var O = c.find(function(e) {
                        return e.positions.some(function(e) {
                            var t = e.start,
                                r = e.end;
                            return n >= t && n < r
                        })
                    });
                    if ((r = null != O ? O.bucket : m.ExperimentBuckets.CONTROL) === m.ExperimentBuckets.NOT_ELIGIBLE) return null;
                    return r
                }
            }
        } catch (e) {
            i = !0, a = e
        } finally {
            try {
                !o && null != s.return && s.return()
            } finally {
                if (i) throw a
            }
        }
        return null
    }

    function ei(e) {
        var t = {};
        for (var n in e) {
            var r = e[n];
            t[n] = v({}, r);
            var o = !0,
                i = !1,
                a = void 0;
            try {
                for (var u, s = t[n].populations[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                    var l = u.value;
                    l.filters = l.rawFilterData.map(ee)
                }
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    !o && null != s.return && s.return()
                } finally {
                    if (i) throw a
                }
            }
            var c = !0,
                f = !1,
                d = void 0;
            try {
                for (var _, E, p = (null !== (_ = t[n].overridesFormatted) && void 0 !== _ ? _ : [])[Symbol.iterator](); !(c = (E = p.next()).done); c = !0) {
                    var m = E.value,
                        y = !0,
                        I = !1,
                        h = void 0;
                    try {
                        for (var O, T = m[Symbol.iterator](); !(y = (O = T.next()).done); y = !0) {
                            var S = O.value;
                            S.filters = S.rawFilterData.map(ee)
                        }
                    } catch (e) {
                        I = !0, h = e
                    } finally {
                        try {
                            !y && null != T.return && T.return()
                        } finally {
                            if (I) throw h
                        }
                    }
                }
            } catch (e) {
                f = !0, d = e
            } finally {
                try {
                    !c && null != p.return && p.return()
                } finally {
                    if (f) throw d
                }
            }
        }
        return t
    }

    function ea(e) {
        var t = e.serializedExperimentStore,
            n = e.user;
        !H && X(n) && (H = !0), L = t.hasLoadedExperiments, M = t.trackedExposureExperiments, G = t.loadedUserExperiments, F = t.userExperimentOverrides, V = t.guildExperimentOverrides, B = ei(t.loadedGuildExperiments), j = {}
    }

    function eu() {
        L = !0
    }

    function es(e) {
        var t = e.isSwitchingAccount;
        l.Storage.remove(N), !t && (l.Storage.remove(R), l.Storage.remove(C), l.Storage.remove(P), F = {}, V = {}), G = {}, w = [], M = {}, L = !1
    }

    function el() {
        L = !1, M = {}, l.Storage.remove(N)
    }

    function ec() {
        try {
            l.Storage.set(C, F)
        } catch (e) {
            D.error("Error saving user experiment overrides, unsaved data will be lost", e), E.default.track(y.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides"
            })
        }
        try {
            l.Storage.set(P, V)
        } catch (e) {
            D.error("Error saving guild experiment overrides, unsaved data will be lost", e), E.default.track(y.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides"
            })
        }
    }

    function ef(e) {
        try {
            l.Storage.set(N, {
                v: 1,
                e: e
            })
        } catch (e) {
            D.error("Error saving tracked exposure experiments, unsaved data will be lost", e), E.default.track(y.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveTrackedExposureExperiments"
            })
        }
    }

    function ed(e) {
        var t = e.experimentId,
            n = e.experimentType,
            r = e.title,
            o = e.description,
            i = e.buckets;
        U = g(v({}, U), T({}, t, {
            type: n,
            title: r,
            description: o,
            buckets: i
        }))
    }

    function e_(e) {
        var t, n, r = e.store,
            i = e.renderFunctions,
            a = "function" == typeof r.getExperimentId ? r.getExperimentId() : null;
        if (!a) throw Error("Experiment Store must have a static getExperimentId method defined");
        var u = "function" == typeof r.getMetaData ? r.getMetaData() : K;
        Object.keys(i).forEach(function(e) {
            e !== m.ExperimentTypes.NONE_LEGACY && (o()(null != i[e], "Unexpected missing renderFunctions"), t = e, n = Object.keys(i[e]).map(function(e) {
                return parseInt(e)
            }))
        }), ed({
            experimentId: a,
            experimentType: null != t ? t : m.ExperimentTypes.USER,
            title: u.title,
            description: u.description,
            buckets: null != n ? n : []
        })
    }

    function eE(e) {
        var t = e.experimentId,
            n = e.experimentBucket,
            r = U[t];
        if (null == r) return !1;
        null == n ? (F = v({}, F), delete F[t], V = v({}, V), delete V[t]) : "user" === r.type ? F = g(v({}, F), T({}, t, {
            type: r.type,
            revision: 1,
            population: 0,
            bucket: n,
            override: !0
        })) : V = g(v({}, V), T({}, t, {
            type: r.type,
            revision: 1,
            bucket: n,
            override: !0
        }));
        for (var o = 0, i = [F, V]; o < i.length; o++) {
            var a = i[o];
            for (var u in a) null == U[u] && delete F[u]
        }
        ec()
    }

    function ep(e) {
        var t = e.guild;
        for (var n in j) {
            var r = b(n.split(":"), 1)[0];
            t.id === r && delete j[n]
        }
    }
    var em = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && A(e, t)
        }(s, e);
        var t, n, r, o, i, u = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = S(t);
            if (n) {
                var a = S(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : h(e)
        });

        function s() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), T(h(e = u.call(this, {
                LOGOUT: es,
                LOGIN_SUCCESS: el,
                CONNECTION_OPEN: en,
                EXPERIMENTS_FETCH_SUCCESS: en,
                OVERLAY_INITIALIZE: ea,
                CACHE_LOADED: function() {
                    return e.loadCache()
                },
                EXPERIMENTS_FETCH_FAILURE: eu,
                EXPERIMENT_REGISTER_LEGACY: e_,
                EXPERIMENT_OVERRIDE_BUCKET: eE,
                GUILD_CREATE: ep,
                GUILD_UPDATE: ep
            })), "trackExposure", $), e
        }
        return r = s, o = [{
            key: "initialize",
            value: function() {
                M = function() {
                    var e = l.Storage.get(N);
                    if (null == e || 1 !== e.v) return {};
                    var t = e.e,
                        n = Date.now(),
                        r = !1;
                    for (var o in t) n - t[o].time > 6048e5 && (delete t[o], r = !0);
                    return r && ef(t), t
                }(), ! function() {
                    var e = [null !== (i = l.Storage.get(R)) && void 0 !== i ? i : {}, null !== (u = l.Storage.get(C)) && void 0 !== u ? u : {}, null !== (s = l.Storage.get(P)) && void 0 !== s ? s : {}];
                    F = {}, V = {};
                    var t = !a().isEmpty(e[0]),
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, u, s, f, d = e[Symbol.iterator](); !(n = (f = d.next()).done); n = !0) {
                            var _ = f.value;
                            for (var E in _) {
                                var p = _[E];
                                null == p || p.type !== m.ExperimentTypes.USER && p.type !== m.ExperimentTypes.GUILD || null == p.bucket || !0 !== p.override || p.fromCookie ? (delete _[E], t = !0) : p.type === m.ExperimentTypes.USER ? F[E] = p : V[E] = p
                            }
                        }
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && null != d.return && d.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    var y = (0, c.getBuildOverrideExperiments)();
                    for (var I in y) F[I] = {
                        type: m.ExperimentTypes.USER,
                        revision: 1,
                        population: 0,
                        override: !0,
                        fromCookie: !0,
                        bucket: y[I]
                    }, V[I] = {
                        type: m.ExperimentTypes.GUILD,
                        revision: 1,
                        override: !0,
                        fromCookie: !0,
                        bucket: y[I]
                    }, t = !0;
                    t && ec()
                }()
            }
        }, {
            key: "loadCache",
            value: function() {
                var e = this.readSnapshot(s.LATEST_SNAPSHOT_VERSION);
                null != e && ("loadedUserExperiments" in e ? (G = e.loadedUserExperiments, B = ei(e.loadedGuildExperiments)) : er(e.rawUserExperiments, e.rawGuildExperiments))
            }
        }, {
            key: "takeSnapshot",
            value: function() {
                return {
                    version: s.LATEST_SNAPSHOT_VERSION,
                    data: {
                        rawUserExperiments: w,
                        rawGuildExperiments: k
                    }
                }
            }
        }, {
            key: "hasLoadedExperiments",
            get: function() {
                return L
            }
        }, {
            key: "hasRegisteredExperiment",
            value: function(e) {
                return null != U[e]
            }
        }, {
            key: "getUserExperimentDescriptor",
            value: function(e) {
                if (H) {
                    var t = F[e];
                    if (null != t) return t
                }
                var n = Y(e);
                return G["".concat(n)]
            }
        }, {
            key: "getGuildExperimentDescriptor",
            value: function(e, t) {
                var n = null != t ? t : y.EMPTY_STRING_SNOWFLAKE_ID,
                    r = V[e];
                if (H && null != r) return r;
                var o = "".concat(n, ":").concat(e);
                if (o in j) return j[o];
                var i = function e(t, n) {
                    var r = Y(n),
                        o = B["".concat(r)];
                    if (null == o) return null;
                    var i = o.revision,
                        a = o.aaMode,
                        u = o.overrides[t],
                        s = o.triggerDebuggingEnabled;
                    if (null != u) return u === m.ExperimentBuckets.NOT_ELIGIBLE ? null : {
                        type: m.ExperimentTypes.GUILD,
                        guildId: t,
                        revision: i,
                        bucket: u,
                        override: !0,
                        hashResult: -1,
                        triggerDebuggingEnabled: s
                    };
                    var l = Y("".concat(null !== (p = o.hashKey) && void 0 !== p ? p : n, ":").concat(t)) % 1e4,
                        c = null,
                        f = null !== (y = o.overridesFormatted) && void 0 !== y ? y : [],
                        d = !0,
                        _ = !1,
                        E = void 0;
                    try {
                        for (var p, y, I, h = f[Symbol.iterator](); !(d = (I = h.next()).done); d = !0) {
                            var O = I.value;
                            if (c = eo(t, O, l), null !== c) return {
                                type: m.ExperimentTypes.GUILD,
                                guildId: t,
                                revision: o.revision,
                                bucket: c,
                                override: !0,
                                hashResult: l,
                                triggerDebuggingEnabled: s
                            }
                        }
                    } catch (e) {
                        _ = !0, E = e
                    } finally {
                        try {
                            !d && null != h.return && h.return()
                        } finally {
                            if (_) throw E
                        }
                    }
                    if (null == (c = eo(t, o.populations, l))) return null;
                    if (null != o.holdoutName && null != o.holdoutBucket && o.holdoutName !== n) {
                        var T = e(t, o.holdoutName);
                        if ((null == T ? void 0 : T.bucket) != null && (!0 !== T.override && $({
                                experimentId: o.holdoutName,
                                descriptor: T
                            }), (null == T ? void 0 : T.bucket) === o.holdoutBucket)) return null
                    }
                    return {
                        type: m.ExperimentTypes.GUILD,
                        guildId: t,
                        revision: o.revision,
                        bucket: c,
                        hashResult: l,
                        aaMode: a,
                        triggerDebuggingEnabled: s
                    }
                }(n, e);
                return j[o] = i, i
            }
        }, {
            key: "getUserExperimentBucket",
            value: function(e) {
                var t = this.getUserExperimentDescriptor(e);
                return null != t ? t.bucket : m.ExperimentBuckets.NOT_ELIGIBLE
            }
        }, {
            key: "getGuildExperimentBucket",
            value: function(e, t) {
                var n = this.getGuildExperimentDescriptor(e, t);
                return null != n ? n.bucket : m.ExperimentBuckets.NOT_ELIGIBLE
            }
        }, {
            key: "getAllUserExperimentDescriptors",
            value: function() {
                return G
            }
        }, {
            key: "getGuildExperiments",
            value: function() {
                return B
            }
        }, {
            key: "getLoadedUserExperiment",
            value: function(e) {
                return G[Y(e)]
            }
        }, {
            key: "getLoadedGuildExperiment",
            value: function(e) {
                return B[Y(e)]
            }
        }, {
            key: "getRecentExposures",
            value: function(e, t) {
                var n = "".concat(e, "|").concat(t, "|");
                return Object.entries(M).filter(function(e) {
                    return b(e, 1)[0].startsWith(n)
                }).map(function(e) {
                    var t = b(e, 2),
                        r = t[0],
                        o = t[1].time;
                    return [r.replace(n, ""), o]
                })
            }
        }, {
            key: "getRegisteredExperiments",
            value: function() {
                return U
            }
        }, {
            key: "getAllExperimentOverrideDescriptors",
            value: function() {
                return H ? v({}, F, V) : {}
            }
        }, {
            key: "getExperimentOverrideDescriptor",
            value: function(e) {
                var t;
                return H ? null !== (t = F[e]) && void 0 !== t ? t : V[e] : null
            }
        }, {
            key: "getAllExperimentAssignments",
            value: function() {
                var e = {},
                    t = {};
                for (var n in Object.keys(U).forEach(function(e) {
                        t[Y("".concat(e))] = e
                    }), G) {
                    var r = t[n];
                    null != r && (e[r] = G[n].bucket)
                }
                for (var o in j) {
                    var i = j[o];
                    null != i && (e[o] = i.bucket)
                }
                return e
            }
        }, {
            key: "getSerializedState",
            value: function() {
                var e = {};
                for (var t in B) {
                    e[t] = JSON.parse(JSON.stringify(B[t]));
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = e[t].populations[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) i.value.filters = []
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && null != a.return && a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                }
                return {
                    hasLoadedExperiments: L,
                    trackedExposureExperiments: M,
                    loadedUserExperiments: G,
                    loadedGuildExperiments: e,
                    userExperimentOverrides: F,
                    guildExperimentOverrides: V
                }
            }
        }, {
            key: "hasExperimentTrackedExposure",
            value: function(e, t, n, r) {
                return Z(e, t, n, r)
            }
        }], O(r.prototype, o), i && O(r, i), s
    }(_.default);
    T(em, "displayName", "ExperimentStore"), T(em, "LATEST_SNAPSHOT_VERSION", 1), t.default = new em
}