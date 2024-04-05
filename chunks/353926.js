function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        registerExperiment: function() {
            return er
        }
    }), n("789020"), n("411104"), n("47120"), n("757143");
    var i = n("512722"),
        r = n.n(i),
        s = n("392711"),
        a = n.n(s),
        o = n("505578"),
        l = n.n(o),
        u = n("433517"),
        d = n("865427"),
        _ = n("710845"),
        c = n("314897"),
        E = n("412788"),
        I = n("626135"),
        T = n("360359"),
        f = n("987338"),
        S = n("981631");

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let h = "scientist:triggered",
        m = "exerimentOverrides",
        N = "userExperimentOverrides",
        O = "guildExperimentOverrides",
        p = new _.default("ExperimentStore"),
        R = !1,
        C = {},
        g = {},
        L = [],
        D = [],
        v = {},
        M = {},
        y = {},
        P = {},
        U = {},
        b = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL,
        G = {};

    function w(e) {
        let t = G[e];
        if (void 0 !== t) return t;
        {
            let t = l().v3(e);
            return G[e] = t, t
        }
    }
    let B = f.TriggerDebuggingAAExperiments.map(e => w(e)),
        k = {
            title: "Unnamed Experiment",
            description: "No description provided"
        };

    function V(e, t) {
        return e || B.includes(t)
    }

    function F(e) {
        var t;
        return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & S.UserFlags.STAFF) === S.UserFlags.STAFF || null != e.personal_connection_id || !1
    }

    function x(e, t, n, i) {
        let r = "".concat(t.type, "|").concat(e),
            s = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
        if (t.type === f.ExperimentTypes.USER) return s && (r += "|".concat(n), i && (r += "|triggerDebugging")), r;
        if (t.type === f.ExperimentTypes.GUILD) return r += "|".concat(t.guildId), s && (r += "|".concat(n), i && (r += "|triggerDebugging")), r;
        throw Error()
    }

    function H(e) {
        if (e.type === f.ExperimentTypes.USER) return w("".concat(e.bucket, "|").concat(e.revision));
        if (e.type === f.ExperimentTypes.GUILD) return w("".concat(e.bucket, "|").concat(e.revision, "|").concat(e.guildId));
        throw Error()
    }
    let Y = Date.now();

    function j(e, t, n, i) {
        let r = C[x(e, t, n, i)];
        return !(null == r || Date.now() - r.time > 6048e5) && r.hash === H(t)
    }

    function W(e) {
        let {
            experimentId: t,
            descriptor: n,
            location: i,
            location_stack: r,
            context: s,
            fingerprint: a,
            excluded: o,
            exposureType: l
        } = e;
        if (n.override) return !1;
        let u = l === f.ExposureTypes.AUTO_FALLBACK && !!n.triggerDebuggingEnabled;
        if (j(t, n, i, u)) return !1;
        if (n.type === f.ExperimentTypes.USER) {
            let e = {
                name: t,
                revision: n.revision,
                population: n.population,
                bucket: n.bucket,
                location: i,
                location_stack: r,
                hash_result: n.hashResult,
                excluded: o,
                exposure_type: l
            };
            null != s && (e.context_guild_id = s.guildId);
            let d = u ? S.AnalyticEvents.EXPERIMENT_USER_TRIGGERED_FALLBACK : S.AnalyticEvents.EXPERIMENT_USER_TRIGGERED;
            I.default.track(d, e, {
                flush: !0,
                fingerprint: a
            })
        } else if (n.type === f.ExperimentTypes.GUILD) {
            let e = u ? S.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : S.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED;
            I.default.track(e, {
                name: t,
                revision: n.revision,
                bucket: n.bucket,
                guild_id: n.guildId,
                location: i,
                location_stack: r,
                hash_result: n.hashResult,
                excluded: o,
                exposure_type: l
            }, {
                flush: !0,
                fingerprint: a
            })
        }
        C[x(t, n, i, u)] = {
            time: Date.now(),
            hash: H(n)
        }, ei(C)
    }

    function K(e) {
        let [t, n] = e;
        return null != T.GUILD_FILTERS[t] ? (0, T.GUILD_FILTERS)[t](n) : null
    }

    function z(e) {
        let [t, n] = e;
        return {
            buckets: t.map(e => {
                let [t, n] = e;
                return {
                    bucket: t,
                    positions: n.map(e => {
                        let {
                            s: t,
                            e: n
                        } = e;
                        return {
                            start: t,
                            end: n
                        }
                    })
                }
            }),
            filters: n.map(K),
            rawFilterData: n
        }
    }

    function X(e) {
        !b && "CONNECTION_OPEN" === e.type && F(e.user) && (b = !0), v = {}, M = {}, y = {};
        let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === c.default.getFingerprint(),
            {
                experiments: n,
                guildExperiments: i
            } = e;
        t && Q(n, i), R = !0
    }

    function Q(e, t) {
        L = e, D = null != t ? t : [], e.forEach(e => {
            let [t, n, i, r, s, a, o, l] = e;
            v[t] = {
                type: "user",
                revision: n,
                population: s,
                bucket: i,
                override: 0 === r,
                hashResult: null != a ? a : -1,
                aaMode: 1 === o,
                triggerDebuggingEnabled: V(1 === l, t)
            }
        }), null != t && t.forEach(e => {
            let [t, n, i, r, s, a, o, l, u, d] = e;
            M[t] = {
                hashKey: n,
                revision: i,
                populations: r.map(z),
                overrides: function(e) {
                    let t = {};
                    if (null == e) return t;
                    for (let {
                            b: n,
                            k: i
                        }
                        of e)
                        for (let e of i) t[e] = n;
                    return t
                }(s),
                overridesFormatted: (null != a ? a : []).map(e => e.map(z)),
                holdoutName: null != o ? o : null,
                holdoutBucket: null != l ? l : null,
                aaMode: 1 === u,
                triggerDebuggingEnabled: V(1 === d, t)
            }
        })
    }

    function q(e, t, n) {
        let i = null;
        for (let {
                buckets: s,
                filters: a
            }
            of t) {
            var r = !0;
            if (null != a) {
                for (let t of a)
                    if (null != t && !t(e)) {
                        r = !1;
                        break
                    }
            }
            if (!r) continue;
            let t = s.find(e => {
                let {
                    positions: t
                } = e;
                return t.some(e => {
                    let {
                        start: t,
                        end: i
                    } = e;
                    return n >= t && n < i
                })
            });
            if ((i = null != t ? t.bucket : f.ExperimentBuckets.CONTROL) === f.ExperimentBuckets.NOT_ELIGIBLE) break;
            return i
        }
        return null
    }

    function J(e) {
        let t = {};
        for (let i in e) {
            var n;
            let r = e[i];
            for (let e of (t[i] = {
                    ...r
                }, t[i].populations)) e.filters = e.rawFilterData.map(K);
            for (let e of null !== (n = t[i].overridesFormatted) && void 0 !== n ? n : [])
                for (let t of e) t.filters = t.rawFilterData.map(K)
        }
        return t
    }

    function Z(e) {
        let {
            serializedExperimentStore: t,
            user: n
        } = e;
        !b && F(n) && (b = !0), R = t.hasLoadedExperiments, C = t.trackedExposureExperiments, v = t.loadedUserExperiments, P = t.userExperimentOverrides, U = t.guildExperimentOverrides, M = J(t.loadedGuildExperiments), y = {}
    }

    function $() {
        R = !0
    }

    function ee(e) {
        let {
            isSwitchingAccount: t
        } = e;
        u.Storage.remove(h), !t && (u.Storage.remove(m), u.Storage.remove(N), u.Storage.remove(O), P = {}, U = {}), v = {}, L = [], C = {}, R = !1
    }

    function et() {
        R = !1, C = {}, u.Storage.remove(h)
    }

    function en() {
        try {
            u.Storage.set(N, P)
        } catch (e) {
            p.error("Error saving user experiment overrides, unsaved data will be lost", e), I.default.track(S.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides"
            })
        }
        try {
            u.Storage.set(O, U)
        } catch (e) {
            p.error("Error saving guild experiment overrides, unsaved data will be lost", e), I.default.track(S.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides"
            })
        }
    }

    function ei(e) {
        try {
            u.Storage.set(h, {
                v: 1,
                e: e
            })
        } catch (e) {
            p.error("Error saving tracked exposure experiments, unsaved data will be lost", e), I.default.track(S.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveTrackedExposureExperiments"
            })
        }
    }

    function er(e) {
        let {
            experimentId: t,
            experimentType: n,
            title: i,
            description: r,
            buckets: s
        } = e;
        g = {
            ...g,
            [t]: {
                type: n,
                title: i,
                description: r,
                buckets: s
            }
        }
    }

    function es(e) {
        let t, n, {
                store: i,
                renderFunctions: s
            } = e,
            a = "function" == typeof i.getExperimentId ? i.getExperimentId() : null;
        if (!a) throw Error("Experiment Store must have a static getExperimentId method defined");
        let o = "function" == typeof i.getMetaData ? i.getMetaData() : k;
        Object.keys(s).forEach(e => {
            if (e !== f.ExperimentTypes.NONE_LEGACY) r()(null != s[e], "Unexpected missing renderFunctions"), t = e, n = Object.keys(s[e]).map(e => parseInt(e))
        }), er({
            experimentId: a,
            experimentType: null != t ? t : f.ExperimentTypes.USER,
            title: o.title,
            description: o.description,
            buckets: null != n ? n : []
        })
    }

    function ea(e) {
        let {
            experimentId: t,
            experimentBucket: n
        } = e, i = g[t];
        if (null == i) return !1;
        for (let e of (null == n ? (P = {
                ...P
            }, delete P[t], U = {
                ...U
            }, delete U[t]) : "user" === i.type ? P = {
                ...P,
                [t]: {
                    type: i.type,
                    revision: 1,
                    population: 0,
                    bucket: n,
                    override: !0
                }
            } : U = {
                ...U,
                [t]: {
                    type: i.type,
                    revision: 1,
                    bucket: n,
                    override: !0
                }
            }, [P, U]))
            for (let t in e) null == g[t] && delete P[t];
        en()
    }

    function eo(e) {
        let {
            guild: t
        } = e;
        for (let e in y) {
            let [n] = e.split(":");
            t.id === n && delete y[e]
        }
    }
    class el extends E.default {
        initialize() {
            C = function() {
                let e = u.Storage.get(h);
                if (null == e || 1 !== e.v) return {};
                let t = e.e,
                    n = Date.now(),
                    i = !1;
                for (let e in t) n - t[e].time > 6048e5 && (delete t[e], i = !0);
                return i && ei(t), t
            }(), ! function() {
                var e, t, n;
                let i = [null !== (e = u.Storage.get(m)) && void 0 !== e ? e : {}, null !== (t = u.Storage.get(N)) && void 0 !== t ? t : {}, null !== (n = u.Storage.get(O)) && void 0 !== n ? n : {}];
                P = {}, U = {};
                let r = !a().isEmpty(i[0]);
                for (let e of i)
                    for (let t in e) {
                        let n = e[t];
                        null == n || n.type !== f.ExperimentTypes.USER && n.type !== f.ExperimentTypes.GUILD || null == n.bucket || !0 !== n.override || n.fromCookie ? (delete e[t], r = !0) : n.type === f.ExperimentTypes.USER ? P[t] = n : U[t] = n
                    }
                let s = (0, d.getBuildOverrideExperiments)();
                for (let e in s) P[e] = {
                    type: f.ExperimentTypes.USER,
                    revision: 1,
                    population: 0,
                    override: !0,
                    fromCookie: !0,
                    bucket: s[e]
                }, U[e] = {
                    type: f.ExperimentTypes.GUILD,
                    revision: 1,
                    override: !0,
                    fromCookie: !0,
                    bucket: s[e]
                }, r = !0;
                r && en()
            }()
        }
        loadCache() {
            let e = this.readSnapshot(el.LATEST_SNAPSHOT_VERSION);
            null != e && ("loadedUserExperiments" in e ? (v = e.loadedUserExperiments, M = J(e.loadedGuildExperiments)) : Q(e.rawUserExperiments, e.rawGuildExperiments))
        }
        takeSnapshot() {
            return {
                version: el.LATEST_SNAPSHOT_VERSION,
                data: {
                    rawUserExperiments: L,
                    rawGuildExperiments: D
                }
            }
        }
        get hasLoadedExperiments() {
            return R
        }
        hasRegisteredExperiment(e) {
            return null != g[e]
        }
        getUserExperimentDescriptor(e) {
            if (b) {
                let t = P[e];
                if (null != t) return t
            }
            let t = w(e);
            return v["".concat(t)]
        }
        getGuildExperimentDescriptor(e, t) {
            let n = null != t ? t : S.EMPTY_STRING_SNOWFLAKE_ID,
                i = U[e];
            if (b && null != i) return i;
            let r = "".concat(n, ":").concat(e);
            if (r in y) return y[r];
            let s = function e(t, n) {
                var i, r;
                let s = w(n),
                    a = M["".concat(s)];
                if (null == a) return null;
                let {
                    revision: o,
                    aaMode: l
                } = a, u = a.overrides[t], d = a.triggerDebuggingEnabled;
                if (null != u) return u === f.ExperimentBuckets.NOT_ELIGIBLE ? null : {
                    type: f.ExperimentTypes.GUILD,
                    guildId: t,
                    revision: o,
                    bucket: u,
                    override: !0,
                    hashResult: -1,
                    triggerDebuggingEnabled: d
                };
                let _ = w("".concat(null !== (i = a.hashKey) && void 0 !== i ? i : n, ":").concat(t)) % 1e4,
                    c = null;
                for (let e of null !== (r = a.overridesFormatted) && void 0 !== r ? r : [])
                    if (null !== (c = q(t, e, _))) return {
                        type: f.ExperimentTypes.GUILD,
                        guildId: t,
                        revision: a.revision,
                        bucket: c,
                        override: !0,
                        hashResult: _,
                        triggerDebuggingEnabled: d
                    };
                if (null == (c = q(t, a.populations, _))) return null;
                if (null != a.holdoutName && null != a.holdoutBucket && a.holdoutName !== n) {
                    let n = e(t, a.holdoutName);
                    if ((null == n ? void 0 : n.bucket) != null && (!0 !== n.override && W({
                            experimentId: a.holdoutName,
                            descriptor: n
                        }), (null == n ? void 0 : n.bucket) === a.holdoutBucket)) return null
                }
                return {
                    type: f.ExperimentTypes.GUILD,
                    guildId: t,
                    revision: a.revision,
                    bucket: c,
                    hashResult: _,
                    aaMode: l,
                    triggerDebuggingEnabled: d
                }
            }(n, e);
            return y[r] = s, s
        }
        getUserExperimentBucket(e) {
            let t = this.getUserExperimentDescriptor(e);
            return null != t ? t.bucket : f.ExperimentBuckets.NOT_ELIGIBLE
        }
        getGuildExperimentBucket(e, t) {
            let n = this.getGuildExperimentDescriptor(e, t);
            return null != n ? n.bucket : f.ExperimentBuckets.NOT_ELIGIBLE
        }
        getAllUserExperimentDescriptors() {
            return v
        }
        getGuildExperiments() {
            return M
        }
        getLoadedUserExperiment(e) {
            return v[w(e)]
        }
        getLoadedGuildExperiment(e) {
            return M[w(e)]
        }
        getRecentExposures(e, t) {
            let n = "".concat(e, "|").concat(t, "|");
            return Object.entries(C).filter(e => {
                let [t] = e;
                return t.startsWith(n)
            }).map(e => {
                let [t, {
                    time: i
                }] = e;
                return [t.replace(n, ""), i]
            })
        }
        getRegisteredExperiments() {
            return g
        }
        getAllExperimentOverrideDescriptors() {
            return b ? {
                ...P,
                ...U
            } : {}
        }
        getExperimentOverrideDescriptor(e) {
            var t;
            return b ? null !== (t = P[e]) && void 0 !== t ? t : U[e] : null
        }
        getAllExperimentAssignments() {
            let e = {},
                t = {};
            for (let n in Object.keys(g).forEach(e => {
                    t[w("".concat(e))] = e
                }), v) {
                let i = t[n];
                null != i && (e[i] = v[n].bucket)
            }
            for (let t in y) {
                let n = y[t];
                null != n && (e[t] = n.bucket)
            }
            return e
        }
        getSerializedState() {
            let e = {};
            for (let t in M)
                for (let n of (e[t] = JSON.parse(JSON.stringify(M[t])), e[t].populations)) n.filters = [];
            return {
                hasLoadedExperiments: R,
                trackedExposureExperiments: C,
                loadedUserExperiments: v,
                loadedGuildExperiments: e,
                userExperimentOverrides: P,
                guildExperimentOverrides: U
            }
        }
        hasExperimentTrackedExposure(e, t, n, i) {
            return j(e, t, n, i)
        }
        constructor() {
            super({
                LOGOUT: ee,
                LOGIN_SUCCESS: et,
                CONNECTION_OPEN: X,
                EXPERIMENTS_FETCH_SUCCESS: X,
                OVERLAY_INITIALIZE: Z,
                CACHE_LOADED: () => this.loadCache(),
                EXPERIMENTS_FETCH_FAILURE: $,
                EXPERIMENT_REGISTER_LEGACY: es,
                EXPERIMENT_OVERRIDE_BUCKET: ea,
                GUILD_CREATE: eo,
                GUILD_UPDATE: eo
            }), A(this, "trackExposure", W)
        }
    }
    A(el, "displayName", "ExperimentStore"), A(el, "LATEST_SNAPSHOT_VERSION", 1), t.default = new el
}