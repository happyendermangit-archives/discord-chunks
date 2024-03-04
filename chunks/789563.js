function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        registerExperiment: function() {
            return ei
        },
        default: function() {
            return el
        }
    }), n("702976"), n("70102"), n("222007"), n("781738");
    var i = n("627445"),
        s = n.n(i),
        r = n("917351"),
        a = n.n(r),
        o = n("210696"),
        l = n.n(o),
        u = n("95410"),
        d = n("355025"),
        c = n("605250"),
        f = n("271938"),
        _ = n("455079"),
        h = n("599110"),
        E = n("316805"),
        g = n("565034"),
        m = n("49111");
    let p = "scientist:triggered",
        S = "exerimentOverrides",
        v = "userExperimentOverrides",
        T = "guildExperimentOverrides",
        I = new c.default("ExperimentStore"),
        C = !1,
        A = {},
        y = {},
        N = [],
        R = [],
        O = {},
        D = {},
        P = {},
        L = {},
        M = {},
        b = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL,
        U = {};

    function w(e) {
        let t = U[e];
        if (void 0 !== t) return t;
        {
            let t = l.v3(e);
            return U[e] = t, t
        }
    }
    let k = g.TriggerDebuggingAAExperiments.map(e => w(e)),
        V = {
            title: "Unnamed Experiment",
            description: "No description provided"
        };

    function G(e, t) {
        return e || k.includes(t)
    }

    function F(e) {
        var t;
        return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & m.UserFlags.STAFF) === m.UserFlags.STAFF || null != e.personal_connection_id || !1
    }

    function x(e, t, n, i) {
        let s = "".concat(t.type, "|").concat(e),
            r = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
        if (t.type === g.ExperimentTypes.USER) return r && (s += "|".concat(n), i && (s += "|triggerDebugging")), s;
        if (t.type === g.ExperimentTypes.GUILD) return s += "|".concat(t.guildId), r && (s += "|".concat(n), i && (s += "|triggerDebugging")), s;
        throw Error()
    }

    function B(e) {
        if (e.type === g.ExperimentTypes.USER) return w("".concat(e.bucket, "|").concat(e.revision));
        if (e.type === g.ExperimentTypes.GUILD) return w("".concat(e.bucket, "|").concat(e.revision, "|").concat(e.guildId));
        throw Error()
    }
    let H = Date.now();

    function Y(e, t, n, i) {
        let s = A[x(e, t, n, i)];
        if (null == s) return !1;
        let r = Date.now() - s.time > 6048e5;
        return !r && s.hash === B(t)
    }

    function j(e) {
        let {
            experimentId: t,
            descriptor: n,
            location: i,
            location_stack: s,
            context: r,
            fingerprint: a,
            excluded: o,
            exposureType: l
        } = e;
        if (n.override) return !1;
        let u = l === g.ExposureTypes.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
            d = Y(t, n, i, u);
        if (d) return !1;
        if (n.type === g.ExperimentTypes.USER) {
            let e = {
                name: t,
                revision: n.revision,
                population: n.population,
                bucket: n.bucket,
                location: i,
                location_stack: s,
                hash_result: n.hashResult,
                excluded: o,
                exposure_type: l
            };
            null != r && (e.context_guild_id = r.guildId);
            let d = u ? m.AnalyticEvents.EXPERIMENT_USER_TRIGGERED_FALLBACK : m.AnalyticEvents.EXPERIMENT_USER_TRIGGERED;
            h.default.track(d, e, {
                flush: !0,
                fingerprint: a
            })
        } else if (n.type === g.ExperimentTypes.GUILD) {
            let e = u ? m.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : m.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED;
            h.default.track(e, {
                name: t,
                revision: n.revision,
                bucket: n.bucket,
                guild_id: n.guildId,
                location: i,
                location_stack: s,
                hash_result: n.hashResult,
                excluded: o,
                exposure_type: l
            }, {
                flush: !0,
                fingerprint: a
            })
        }
        A[x(t, n, i, u)] = {
            time: Date.now(),
            hash: B(n)
        }, en(A)
    }

    function W(e) {
        let [t, n] = e;
        return null != E.GUILD_FILTERS[t] ? (0, E.GUILD_FILTERS)[t](n) : null
    }

    function K(e) {
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
            filters: n.map(W),
            rawFilterData: n
        }
    }

    function z(e) {
        !b && "CONNECTION_OPEN" === e.type && F(e.user) && (b = !0), O = {}, D = {}, P = {};
        let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === f.default.getFingerprint(),
            {
                experiments: n,
                guildExperiments: i
            } = e;
        t && q(n, i), C = !0
    }

    function q(e, t) {
        N = e, R = null != t ? t : [], e.forEach(e => {
            let [t, n, i, s, r, a, o, l] = e;
            O[t] = {
                type: "user",
                revision: n,
                population: r,
                bucket: i,
                override: 0 === s,
                hashResult: null != a ? a : -1,
                aaMode: 1 === o,
                triggerDebuggingEnabled: G(1 === l, t)
            }
        }), null != t && t.forEach(e => {
            let [t, n, i, s, r, a, o, l, u, d] = e;
            D[t] = {
                hashKey: n,
                revision: i,
                populations: s.map(K),
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
                }(r),
                overridesFormatted: (null != a ? a : []).map(e => e.map(K)),
                holdoutName: null != o ? o : null,
                holdoutBucket: null != l ? l : null,
                aaMode: 1 === u,
                triggerDebuggingEnabled: G(1 === d, t)
            }
        })
    }

    function X(e, t, n) {
        let i = null;
        for (let {
                buckets: r,
                filters: a
            }
            of t) {
            var s = !0;
            if (null != a) {
                for (let t of a)
                    if (null != t && !t(e)) {
                        s = !1;
                        break
                    }
            }
            if (!s) continue;
            let t = r.find(e => {
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
            if ((i = null != t ? t.bucket : g.ExperimentBuckets.CONTROL) === g.ExperimentBuckets.NOT_ELIGIBLE) break;
            return i
        }
        return null
    }

    function Q(e) {
        let t = {};
        for (let i in e) {
            var n;
            let s = e[i];
            for (let e of (t[i] = {
                    ...s
                }, t[i].populations)) e.filters = e.rawFilterData.map(W);
            for (let e of null !== (n = t[i].overridesFormatted) && void 0 !== n ? n : [])
                for (let t of e) t.filters = t.rawFilterData.map(W)
        }
        return t
    }

    function Z(e) {
        let {
            serializedExperimentStore: t,
            user: n
        } = e;
        !b && F(n) && (b = !0), C = t.hasLoadedExperiments, A = t.trackedExposureExperiments, O = t.loadedUserExperiments, L = t.userExperimentOverrides, M = t.guildExperimentOverrides, D = Q(t.loadedGuildExperiments), P = {}
    }

    function J() {
        C = !0
    }

    function $(e) {
        let {
            isSwitchingAccount: t
        } = e;
        u.default.remove(p), !t && (u.default.remove(S), u.default.remove(v), u.default.remove(T), L = {}, M = {}), O = {}, N = [], A = {}, C = !1
    }

    function ee() {
        C = !1, A = {}, u.default.remove(p)
    }

    function et() {
        try {
            u.default.set(v, L)
        } catch (e) {
            I.error("Error saving user experiment overrides, unsaved data will be lost", e), h.default.track(m.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides"
            })
        }
        try {
            u.default.set(T, M)
        } catch (e) {
            I.error("Error saving guild experiment overrides, unsaved data will be lost", e), h.default.track(m.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides"
            })
        }
    }

    function en(e) {
        try {
            u.default.set(p, {
                v: 1,
                e: e
            })
        } catch (e) {
            I.error("Error saving tracked exposure experiments, unsaved data will be lost", e), h.default.track(m.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveTrackedExposureExperiments"
            })
        }
    }

    function ei(e) {
        let {
            experimentId: t,
            experimentType: n,
            title: i,
            description: s,
            buckets: r
        } = e;
        y = {
            ...y,
            [t]: {
                type: n,
                title: i,
                description: s,
                buckets: r
            }
        }
    }

    function es(e) {
        let t, n, {
                store: i,
                renderFunctions: r
            } = e,
            a = "function" == typeof i.getExperimentId ? i.getExperimentId() : null;
        if (!a) throw Error("Experiment Store must have a static getExperimentId method defined");
        let o = "function" == typeof i.getMetaData ? i.getMetaData() : V;
        Object.keys(r).forEach(e => {
            if (e === g.ExperimentTypes.NONE_LEGACY) return;
            s(null != r[e], "Unexpected missing renderFunctions"), t = e;
            let i = Object.keys(r[e]).map(e => parseInt(e));
            n = i
        }), ei({
            experimentId: a,
            experimentType: null != t ? t : g.ExperimentTypes.USER,
            title: o.title,
            description: o.description,
            buckets: null != n ? n : []
        })
    }

    function er(e) {
        let {
            experimentId: t,
            experimentBucket: n
        } = e, i = y[t];
        if (null == i) return !1;
        for (let e of (null == n ? (L = {
                ...L
            }, delete L[t], M = {
                ...M
            }, delete M[t]) : "user" === i.type ? L = {
                ...L,
                [t]: {
                    type: i.type,
                    revision: 1,
                    population: 0,
                    bucket: n,
                    override: !0
                }
            } : M = {
                ...M,
                [t]: {
                    type: i.type,
                    revision: 1,
                    bucket: n,
                    override: !0
                }
            }, [L, M]))
            for (let t in e) null == y[t] && delete L[t];
        et()
    }

    function ea(e) {
        let {
            guild: t
        } = e;
        for (let e in P) {
            let [n] = e.split(":");
            t.id === n && delete P[e]
        }
    }
    class eo extends _.default {
        initialize() {
            A = function() {
                let e = u.default.get(p);
                if (null == e || 1 !== e.v) return {};
                let t = e.e,
                    n = Date.now(),
                    i = !1;
                for (let e in t) n - t[e].time > 6048e5 && (delete t[e], i = !0);
                return i && en(t), t
            }(), ! function() {
                var e, t, n;
                let i = [null !== (e = u.default.get(S)) && void 0 !== e ? e : {}, null !== (t = u.default.get(v)) && void 0 !== t ? t : {}, null !== (n = u.default.get(T)) && void 0 !== n ? n : {}];
                L = {}, M = {};
                let s = !a.isEmpty(i[0]);
                for (let e of i)
                    for (let t in e) {
                        let n = e[t];
                        null == n || n.type !== g.ExperimentTypes.USER && n.type !== g.ExperimentTypes.GUILD || null == n.bucket || !0 !== n.override || n.fromCookie ? (delete e[t], s = !0) : n.type === g.ExperimentTypes.USER ? L[t] = n : M[t] = n
                    }
                let r = (0, d.getBuildOverrideExperiments)();
                for (let e in r) L[e] = {
                    type: g.ExperimentTypes.USER,
                    revision: 1,
                    population: 0,
                    override: !0,
                    fromCookie: !0,
                    bucket: r[e]
                }, M[e] = {
                    type: g.ExperimentTypes.GUILD,
                    revision: 1,
                    override: !0,
                    fromCookie: !0,
                    bucket: r[e]
                }, s = !0;
                s && et()
            }()
        }
        loadCache() {
            let e = this.readSnapshot(eo.LATEST_SNAPSHOT_VERSION);
            null != e && ("loadedUserExperiments" in e ? (O = e.loadedUserExperiments, D = Q(e.loadedGuildExperiments)) : q(e.rawUserExperiments, e.rawGuildExperiments))
        }
        takeSnapshot() {
            return {
                version: eo.LATEST_SNAPSHOT_VERSION,
                data: {
                    rawUserExperiments: N,
                    rawGuildExperiments: R
                }
            }
        }
        get hasLoadedExperiments() {
            return C
        }
        hasRegisteredExperiment(e) {
            return null != y[e]
        }
        getUserExperimentDescriptor(e) {
            if (b) {
                let t = L[e];
                if (null != t) return t
            }
            let t = w(e);
            return O["".concat(t)]
        }
        getGuildExperimentDescriptor(e, t) {
            let n = null != t ? t : m.EMPTY_STRING_SNOWFLAKE_ID,
                i = M[e];
            if (b && null != i) return i;
            let s = "".concat(n, ":").concat(e);
            if (s in P) return P[s];
            let r = function e(t, n) {
                var i, s;
                let r = w(n),
                    a = D["".concat(r)];
                if (null == a) return null;
                let {
                    revision: o,
                    aaMode: l
                } = a, u = a.overrides[t], d = a.triggerDebuggingEnabled;
                if (null != u) return u === g.ExperimentBuckets.NOT_ELIGIBLE ? null : {
                    type: g.ExperimentTypes.GUILD,
                    guildId: t,
                    revision: o,
                    bucket: u,
                    override: !0,
                    hashResult: -1,
                    triggerDebuggingEnabled: d
                };
                let c = "".concat(null !== (i = a.hashKey) && void 0 !== i ? i : n, ":").concat(t),
                    f = w(c),
                    _ = f % 1e4,
                    h = null,
                    E = null !== (s = a.overridesFormatted) && void 0 !== s ? s : [];
                for (let e of E)
                    if (null !== (h = X(t, e, _))) return {
                        type: g.ExperimentTypes.GUILD,
                        guildId: t,
                        revision: a.revision,
                        bucket: h,
                        override: !0,
                        hashResult: _,
                        triggerDebuggingEnabled: d
                    };
                if (null == (h = X(t, a.populations, _))) return null;
                if (null != a.holdoutName && null != a.holdoutBucket && a.holdoutName !== n) {
                    let n = e(t, a.holdoutName);
                    if ((null == n ? void 0 : n.bucket) != null && (!0 !== n.override && j({
                            experimentId: a.holdoutName,
                            descriptor: n
                        }), (null == n ? void 0 : n.bucket) === a.holdoutBucket)) return null
                }
                return {
                    type: g.ExperimentTypes.GUILD,
                    guildId: t,
                    revision: a.revision,
                    bucket: h,
                    hashResult: _,
                    aaMode: l,
                    triggerDebuggingEnabled: d
                }
            }(n, e);
            return P[s] = r, r
        }
        getUserExperimentBucket(e) {
            let t = this.getUserExperimentDescriptor(e);
            return null != t ? t.bucket : g.ExperimentBuckets.NOT_ELIGIBLE
        }
        getGuildExperimentBucket(e, t) {
            let n = this.getGuildExperimentDescriptor(e, t);
            return null != n ? n.bucket : g.ExperimentBuckets.NOT_ELIGIBLE
        }
        getAllUserExperimentDescriptors() {
            return O
        }
        getGuildExperiments() {
            return D
        }
        getLoadedUserExperiment(e) {
            return O[w(e)]
        }
        getLoadedGuildExperiment(e) {
            return D[w(e)]
        }
        getRecentExposures(e, t) {
            let n = "".concat(e, "|").concat(t, "|");
            return Object.entries(A).filter(e => {
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
            return y
        }
        getAllExperimentOverrideDescriptors() {
            return b ? {
                ...L,
                ...M
            } : {}
        }
        getExperimentOverrideDescriptor(e) {
            var t;
            return b ? null !== (t = L[e]) && void 0 !== t ? t : M[e] : null
        }
        getAllExperimentAssignments() {
            let e = {},
                t = {};
            for (let n in Object.keys(y).forEach(e => {
                    t[w("".concat(e))] = e
                }), O) {
                let i = t[n];
                null != i && (e[i] = O[n].bucket)
            }
            for (let t in P) {
                let n = P[t];
                null != n && (e[t] = n.bucket)
            }
            return e
        }
        getSerializedState() {
            let e = {};
            for (let t in D)
                for (let n of (e[t] = JSON.parse(JSON.stringify(D[t])), e[t].populations)) n.filters = [];
            return {
                hasLoadedExperiments: C,
                trackedExposureExperiments: A,
                loadedUserExperiments: O,
                loadedGuildExperiments: e,
                userExperimentOverrides: L,
                guildExperimentOverrides: M
            }
        }
        hasExperimentTrackedExposure(e, t, n, i) {
            return Y(e, t, n, i)
        }
        constructor() {
            super({
                LOGOUT: $,
                LOGIN_SUCCESS: ee,
                CONNECTION_OPEN: z,
                EXPERIMENTS_FETCH_SUCCESS: z,
                OVERLAY_INITIALIZE: Z,
                CACHE_LOADED: () => this.loadCache(),
                EXPERIMENTS_FETCH_FAILURE: J,
                EXPERIMENT_REGISTER_LEGACY: es,
                EXPERIMENT_OVERRIDE_BUCKET: er,
                GUILD_CREATE: ea,
                GUILD_UPDATE: ea
            }), this.trackExposure = j
        }
    }
    eo.displayName = "ExperimentStore", eo.LATEST_SNAPSHOT_VERSION = 1;
    var el = new eo
}