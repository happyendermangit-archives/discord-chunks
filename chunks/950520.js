function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("898511"),
        a = n("242880"),
        u = n("629815"),
        s = n("53867"),
        l = n("338140"),
        c = n("374550");

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = "GameStoreReportedGames",
        m = {},
        y = {},
        I = {},
        h = null !== (r = a.Storage.get(p)) && void 0 !== r ? r : {},
        O = "",
        T = void 0,
        S = null;

    function v(e) {
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

    function g(e) {
        var t = (i = e, null != (a = l.default) && "undefined" != typeof Symbol && a[Symbol.hasInstance] ? !!a[Symbol.hasInstance](i) : i instanceof a) ? v(e) : e;
        m[e.id] = t, y[e.name.toLowerCase()] = t;
        var n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a, u, s = e.aliases[Symbol.iterator](); !(n = (u = s.next()).done); n = !0) y[u.value.toLowerCase()] = t
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != s.return && s.return()
            } finally {
                if (r) throw o
            }
        }
        if ((0, c.isDesktop)()) {
            var f = !0,
                d = !1,
                _ = void 0;
            try {
                for (var E, p = e.executables[Symbol.iterator](); !(f = (E = p.next()).done); f = !0) I[E.value.name] = t
            } catch (e) {
                d = !0, _ = e
            } finally {
                try {
                    !f && null != p.return && p.return()
                } finally {
                    if (d) throw _
                }
            }
        }
    }
    var A = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(l, e);
        var t, n, r, o, i, u = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), u.apply(this, arguments)
        }
        return r = l, o = [{
            key: "initialize",
            value: function(e) {
                var t;
                null != e && (null != e.detectableGamesEtag && (O = e.detectableGamesEtag), null === (t = e.detectableGames) || void 0 === t || t.forEach(function(e) {
                    return g(e)
                }))
            }
        }, {
            key: "getState",
            value: function() {
                return (0, c.isDesktop)() ? {
                    detectableGamesEtag: O,
                    detectableGames: Object.values(m)
                } : {
                    detectableGamesEtag: "",
                    detectableGames: []
                }
            }
        }, {
            key: "games",
            get: function() {
                return Object.values(m)
            }
        }, {
            key: "getDetectableGame",
            value: function(e) {
                return m[e]
            }
        }, {
            key: "getGameByName",
            value: function(e) {
                if (null == e) return null;
                var t = e.toLowerCase();
                return Object.prototype.hasOwnProperty.call(y, t) ? y[t] : null
            }
        }, {
            key: "isGameInDatabase",
            value: function(e) {
                return null != this.getGameByName(e.name) || void 0 !== e.nativeProcessObserverId && (2147483648 & e.nativeProcessObserverId) == 0
            }
        }, {
            key: "fetching",
            get: function() {
                return !0 === T
            }
        }, {
            key: "detectableGamesEtag",
            get: function() {
                return O
            }
        }, {
            key: "lastFetched",
            get: function() {
                return S
            }
        }, {
            key: "getGameByExecutable",
            value: function(e) {
                return I[e]
            }
        }, {
            key: "getGameByGameData",
            value: function(e) {
                if (null == e.exePath) return null;
                var t, n, r, o = e.exePath.split("/").pop(),
                    i = e.exePath.split("/").slice(-2).join("/");
                if (null != e.name) {
                    if (null != (t = this.getGameByName(e.name)) && null != t.executables) {
                        var a = t.executables.map(function(e) {
                            return e.name
                        });
                        if (a.includes(o) || a.includes(i)) return t
                    } else if (null != t) return null
                }
                return null !== (r = null !== (n = this.getGameByExecutable(o)) && void 0 !== n ? n : this.getGameByExecutable(i)) && void 0 !== r ? r : t
            }
        }, {
            key: "getGameById",
            value: function(e) {
                return m[e]
            }
        }, {
            key: "shouldReport",
            value: function(e) {
                var t = null != this.getGameByName(e),
                    n = null != h[e];
                return s.ShowCurrentGame.getSetting() && !T && !(t || n)
            }
        }, {
            key: "markGameReported",
            value: function(e) {
                h[e] = !0, a.Storage.set(p, h)
            }
        }], f(r.prototype, o), i && f(r, i), l
    }(i.default.PersistedStore);
    d(A, "displayName", "GameStore"), d(A, "persistKey", "GameStore"), d(A, "migrations", [function(e) {
        var t, n;
        if (null == e) return {
            detectableGamesEtag: "",
            detectableGames: []
        };
        return {
            detectableGamesEtag: e.detectableGamesEtag,
            detectableGames: null !== (n = null === (t = e.detectableGames) || void 0 === t ? void 0 : t.map(function(e) {
                return v(new l.default(e))
            })) && void 0 !== n ? n : []
        }
    }, function(e) {
        return (0, c.isDesktop)() ? e : {
            detectableGamesEtag: "",
            detectableGames: []
        }
    }]), t.default = new A(u.default, {
        OVERLAY_INITIALIZE: function(e) {
            var t = e.detectableApplications,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    g(u)
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
        },
        GAMES_DATABASE_FETCH: function() {
            T = !0
        },
        GAMES_DATABASE_FETCH_FAIL: function() {
            T = !1
        },
        GAMES_DATABASE_UPDATE: function(e) {
            var t = e.games,
                n = e.etag;
            null != n && O !== n && (O = n);
            var r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var s = a.value;
                    g(function(e) {
                        var t, n, r, o, i, a;
                        return {
                            id: e.id,
                            name: e.name,
                            executables: (null !== (t = e.executables) && void 0 !== t ? t : []).map(l.createExecutable),
                            overlay: null !== (n = e.overlay) && void 0 !== n && n,
                            overlayWarn: null !== (r = e.overlay_warn) && void 0 !== r && r,
                            overlayCompatibilityHook: null !== (o = e.overlay_compatibility_hook) && void 0 !== o && o,
                            hook: null === (i = e.hook) || void 0 === i || i,
                            aliases: null !== (a = e.aliases) && void 0 !== a ? a : [],
                            supportsOutOfProcessOverlay: l.default.supportsOutOfProcessOverlay(e.overlay_methods)
                        }
                    }(s))
                }
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && null != u.return && u.return()
                } finally {
                    if (o) throw i
                }
            }
            T = void 0, S = Date.now()
        }
    })
}