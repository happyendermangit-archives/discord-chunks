function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("47120");
    var r, s, a = n("442837"),
        o = n("433517"),
        l = n("570140"),
        u = n("695346"),
        d = n("973616"),
        _ = n("358085");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let E = "GameStoreReportedGames",
        I = {},
        T = {},
        f = {},
        S = null !== (r = o.Storage.get(E)) && void 0 !== r ? r : {},
        h = "";
    let A = null;

    function m(e) {
        return {
            id: e.id,
            name: e.name,
            executables: e.executables,
            overlayWarn: e.overlayWarn,
            overlayCompatibilityHook: e.overlayCompatibilityHook,
            overlay: e.overlay,
            hook: e.hook,
            aliases: e.aliases,
            supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
        }
    }

    function N(e) {
        let t = e instanceof d.default ? m(e) : e;
        for (let n of (I[e.id] = t, T[e.name.toLowerCase()] = t, e.aliases)) T[n.toLowerCase()] = t;
        if ((0, _.isDesktop)())
            for (let n of e.executables) f[n.name] = t
    }
    class p extends(s = a.default.PersistedStore) {
        initialize(e) {
            var t;
            null != e && (null != e.detectableGamesEtag && (h = e.detectableGamesEtag), null === (t = e.detectableGames) || void 0 === t || t.forEach(e => N(e)))
        }
        getState() {
            return (0, _.isDesktop)() ? {
                detectableGamesEtag: h,
                detectableGames: Object.values(I)
            } : {
                detectableGamesEtag: "",
                detectableGames: []
            }
        }
        get games() {
            return Object.values(I)
        }
        getDetectableGame(e) {
            return I[e]
        }
        getGameByName(e) {
            if (null == e) return null;
            let t = e.toLowerCase();
            return Object.prototype.hasOwnProperty.call(T, t) ? T[t] : null
        }
        isGameInDatabase(e) {
            return null != this.getGameByName(e.name) || void 0 !== e.nativeProcessObserverId && (2147483648 & e.nativeProcessObserverId) == 0
        }
        get fetching() {
            return !0 === i
        }
        get detectableGamesEtag() {
            return h
        }
        get lastFetched() {
            return A
        }
        getGameByExecutable(e) {
            return f[e]
        }
        getGameByGameData(e) {
            var t, n;
            let i;
            if (null == e.exePath) return null;
            let r = e.exePath.split("/").pop(),
                s = e.exePath.split("/").slice(-2).join("/");
            if (null != e.name) {
                if (null != (i = this.getGameByName(e.name)) && null != i.executables) {
                    let e = i.executables.map(e => e.name);
                    if (e.includes(r) || e.includes(s)) return i
                } else if (null != i) return null
            }
            return null !== (n = null !== (t = this.getGameByExecutable(r)) && void 0 !== t ? t : this.getGameByExecutable(s)) && void 0 !== n ? n : i
        }
        getGameById(e) {
            return I[e]
        }
        shouldReport(e) {
            let t = null != this.getGameByName(e),
                n = null != S[e];
            return u.ShowCurrentGame.getSetting() && !i && !(t || n)
        }
        markGameReported(e) {
            S[e] = !0, o.Storage.set(E, S)
        }
    }
    c(p, "displayName", "GameStore"), c(p, "persistKey", "GameStore"), c(p, "migrations", [e => {
        var t, n;
        if (null == e) return {
            detectableGamesEtag: "",
            detectableGames: []
        };
        return {
            detectableGamesEtag: e.detectableGamesEtag,
            detectableGames: null !== (n = null === (t = e.detectableGames) || void 0 === t ? void 0 : t.map(e => m(new d.default(e)))) && void 0 !== n ? n : []
        }
    }, e => (0, _.isDesktop)() ? e : {
        detectableGamesEtag: "",
        detectableGames: []
    }]), t.default = new p(l.default, {
        OVERLAY_INITIALIZE: function(e) {
            let {
                detectableApplications: t
            } = e;
            for (let e of t) N(e)
        },
        GAMES_DATABASE_FETCH: function() {
            i = !0
        },
        GAMES_DATABASE_FETCH_FAIL: function() {
            i = !1
        },
        GAMES_DATABASE_UPDATE: function(e) {
            let {
                games: t,
                etag: n
            } = e;
            for (let e of (null != n && h !== n && (h = n), t)) N(function(e) {
                var t, n, i, r, s, a;
                return {
                    id: e.id,
                    name: e.name,
                    executables: (null !== (t = e.executables) && void 0 !== t ? t : []).map(d.createExecutable),
                    overlay: null !== (n = e.overlay) && void 0 !== n && n,
                    overlayWarn: null !== (i = e.overlay_warn) && void 0 !== i && i,
                    overlayCompatibilityHook: null !== (r = e.overlay_compatibility_hook) && void 0 !== r && r,
                    hook: null === (s = e.hook) || void 0 === s || s,
                    aliases: null !== (a = e.aliases) && void 0 !== a ? a : [],
                    supportsOutOfProcessOverlay: d.default.supportsOutOfProcessOverlay(e.overlay_methods)
                }
            }(e));
            i = void 0, A = Date.now()
        }
    })
}