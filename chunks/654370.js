function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        gameKey: function() {
            return es
        },
        getOverlayGameStatus: function() {
            return el
        },
        isDetectionEnabled: function() {
            return ec
        },
        transformForGameSettings: function() {
            return e_
        }
    });
    var r, o, i = n("392711"),
        a = n.n(i),
        u = n("913527"),
        s = n.n(u),
        l = n("898511"),
        c = n("242880"),
        f = n("629815"),
        d = n("660939"),
        _ = n("386823"),
        E = n("35523"),
        p = n("698602"),
        m = n("951688"),
        y = n("783655"),
        I = n("950520"),
        h = n("620205"),
        O = n("262283"),
        T = n("870331"),
        S = n("388990"),
        v = n("173862"),
        g = n("162677"),
        A = n("374550"),
        b = n("131900"),
        N = n("359212"),
        R = n("399873"),
        C = n("281767"),
        P = n("336734");

    function D(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function L(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function M(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function U(e) {
        return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function w(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                M(e, t, n[t])
            })
        }
        return e
    }

    function k(e, t) {
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

    function G(e, t) {
        return (G = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function B(e) {
        return function(e) {
            if (Array.isArray(e)) return D(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return D(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var j = new E.default("RunningGameStore"),
        F = "RunningGameStore",
        V = [{
            executables: [{
                os: "win32",
                name: "obs/obs.exe"
            }, {
                os: "win32",
                name: "obs32.exe"
            }, {
                os: "win32",
                name: "obs64.exe"
            }, {
                os: "darwin",
                name: "OBS.app"
            }, {
                os: "linux",
                name: "obs"
            }],
            name: "OBS",
            streamerTool: !0
        }, {
            executables: [{
                os: "win32",
                name: "XSplit.Gamecaster.exe"
            }, {
                os: "win32",
                name: "XSplit.Core.exe"
            }, {
                os: "win32",
                name: "Gamecaster.exe"
            }],
            name: "XSplit",
            streamerTool: !0
        }, {
            executables: [{
                os: "win32",
                name: "bebo.exe"
            }],
            name: "Bebo",
            streamerTool: !0
        }, {
            executables: [{
                os: "win32",
                name: "Streamlabs OBS.exe"
            }, {
                os: "win32",
                name: "Streamlabs Desktop.exe"
            }, {
                os: "darwin",
                name: "Streamlabs Desktop.app"
            }],
            name: "Streamlabs Desktop",
            streamerTool: !0
        }, {
            executables: [{
                os: "win32",
                name: "TwitchStudio.exe"
            }, {
                os: "darwin",
                name: "Twitch Studio.app"
            }],
            name: "Twitch Studio",
            streamerTool: !0
        }, {
            executables: [{
                os: "win32",
                name: "Spotify.exe"
            }, {
                os: "darwin",
                name: "Spotify.app"
            }, {
                os: "linux",
                name: "spotify"
            }],
            name: _.default.get(C.PlatformTypes.SPOTIFY).name
        }],
        H = !0,
        x = new Set,
        Y = [],
        W = [],
        K = [],
        z = null,
        X = [],
        q = {},
        Q = {},
        J = {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableDetection: {}
        },
        Z = function() {},
        $ = {},
        ee = 0,
        et = null,
        en = null,
        er = {};

    function eo(e, t, n) {
        var r = e[t];
        void 0 !== r && (delete e[t], e[n] = r)
    }

    function ei(e, t) {
        null != t.lastLaunched ? e.lastLaunched = t.lastLaunched : null != t.start && (e.lastLaunched = t.start)
    }

    function ea(e) {
        return V.some(function(t) {
            return t.name === e.name && !0 === t.streamerTool
        })
    }

    function eu() {
        if (K.length > 0) {
            var e = z;
            z = K[0], null != e && z.pid === e.pid ? z.start = e.start : z.start = Date.now()
        } else z = null;
        var t = [],
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = K[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value;
                !(u.pid in er) && (er[u.pid] = u, t.push(u))
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
        var s = [],
            l = !0,
            c = !1,
            d = void 0;
        try {
            for (var _, E = Object.values(er)[Symbol.iterator](); !(l = (_ = E.next()).done); l = !0) ! function() {
                var e = _.value;
                !K.some(function(t) {
                    return t.pid === e.pid
                }) && (s.push(e), delete er[e.pid])
            }()
        } catch (e) {
            c = !0, d = e
        } finally {
            try {
                !l && null != E.return && E.return()
            } finally {
                if (c) throw d
            }
        }
        j.info("games", {
            runningGames: K,
            added: t,
            removed: s,
            previousGames: er
        }), f.default.dispatch({
            type: "RUNNING_GAMES_CHANGE",
            games: K,
            added: t,
            removed: s
        })
    }

    function es(e) {
        var t = null != e.name ? e.name : "";
        return "".concat(e.exePath, ":").concat(t)
    }

    function el(e) {
        if (e.isLauncher) return {
            source: R.OverlayGameStatusSource.LAUNCHER,
            enabled: !1,
            overlayMethod: P.OverlayMethod.Disabled
        };
        var t = I.default.getGameByName(e.name);
        if (null != t) {
            var n = h.default.getActiveLibraryApplication(t.id);
            if (null != n) return {
                source: R.OverlayGameStatusSource.LIBRARY_APPLICATION,
                enabled: n.isOverlayEnabled(),
                overlayMethod: P.OverlayMethod.Disabled
            }
        }
        var r = p.isOOPExperimentEnabled() && (0, N.supportsOutOfProcess)() && !y.OverlayStoredSettings.legacyEnabled,
            o = r ? P.OverlayMethod.OutOfProcess : P.OverlayMethod.Hook,
            i = J.enableOverlay[es(e)];
        if (null != i) return {
            source: R.OverlayGameStatusSource.USER_OVERRIDE,
            enabled: i,
            overlayMethod: o
        };
        var a = null == e.id ? null : $[e.id];
        return null != a ? {
            source: R.OverlayGameStatusSource.DATABASE,
            enabled: a.enabled || r,
            overlayMethod: o
        } : {
            source: R.OverlayGameStatusSource.DEFAULT,
            enabled: !1,
            overlayMethod: P.OverlayMethod.Hook
        }
    }

    function ec(e) {
        var t = J.enableDetection[es(e)];
        return null == t || t
    }

    function ef(e) {
        return !e.hidden && ec(e)
    }

    function ed() {
        c.Storage.set(F, J)
    }

    function e_(e) {
        var t, n, r = k(w({}, e), {
            played: null != e.lastFocused && 0 !== e.lastFocused ? s()(new Date(e.lastFocused * S.default.Millis.SECOND)).fromNow() : " ",
            overlay: (t = e, null !== (n = J.enableOverlay[es(t)]) && void 0 !== n ? n : el(t).enabled),
            verified: I.default.isGameInDatabase(e),
            detectable: ec(e)
        });
        if (null != e.id && null != $[e.id]) {
            var o = $[e.id];
            r.overlayWarn = o.warn
        }
        return r
    }

    function eE() {
        var e = !1;
        return Y = a().values(h.default.libraryApplications).reduce(function(t, n) {
            var r = I.default.getDetectableGame(n.id);
            if (null == r) return t;
            var o = O.default.getLaunchOptions(n.id, n.branchId),
                i = !0,
                a = !1,
                u = void 0;
            try {
                for (var s, l = o[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                    var c = s.value,
                        f = "".concat(n.id, ":").concat(n.branchId);
                    !x.has(f) && (e = !0, x.add(f));
                    var d = c.fullExecutablePath.replace(/\\/g, "/").toLowerCase();
                    q[d] = r.id, t.push({
                        id: r.id,
                        name: r.name,
                        exePath: d,
                        cmdLine: "",
                        lastFocused: 0,
                        add: !0
                    })
                }
            } catch (e) {
                a = !0, u = e
            } finally {
                try {
                    !i && null != l.return && l.return()
                } finally {
                    if (a) throw u
                }
            }
            return t
        }, []), e && ep(), e
    }

    function ep() {
        if (!__OVERLAY__ && A.isPlatformEmbedded) {
            var e = B(Y).concat(B(a().values(J.gameOverrides)));
            b.default.setGameCandidateOverrides(e)
        }
    }

    function em(e) {
        null != e && 0 !== e.length && (e.forEach(function(e) {
            if (J.gamesSeen.some(function(t) {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            var n = J.gameOverrides[es(e)];
                            null != n && (n.lastFocused = e.lastFocused)
                        }
                        return ei(t, e), !0
                    }
                    return !1
                }));
            else {
                var t, n;
                if (e.hidden) return;
                J.gamesSeen.unshift((n = {
                    exePath: (t = e).exePath,
                    cmdLine: t.cmdLine,
                    lastFocused: t.lastFocused
                }, null != t.id && (n.id = t.id), null != t.nativeProcessObserverId && (n.nativeProcessObserverId = t.nativeProcessObserverId), null != t.name && (n.name = t.name), t.add && (n.add = !0), t.block && (n.block = !0), ei(n, t), n))
            }
        }), J.gamesSeen.sort(function(e, t) {
            return t.lastFocused - e.lastFocused
        }), ed(), v.default.setRecentGames(ey().map(function(e) {
            return e_(e)
        })))
    }

    function ey() {
        var e = a().values(J.gameOverrides);
        return J.gamesSeen.filter(function(e) {
            return void 0 === J.gameOverrides[es(e)]
        }).concat(e)
    }!__OVERLAY__ && (0, A.isDesktop)() && (Z = function() {
        var e = [],
            t = new Set;
        r = {};
        var n = I.default.games,
            o = !0,
            i = !1,
            a = void 0;
        try {
            for (var u, s = n[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                var l, c, _, E, p = u.value;
                $[p.id] = {
                    compatibilityHook: null !== (l = p.overlayCompatibilityHook) && void 0 !== l ? l : d.DEFAULT_OVERLAY_OPTIONS.compatibilityHook,
                    warn: null !== (c = p.overlayWarn) && void 0 !== c ? c : d.DEFAULT_OVERLAY_OPTIONS.warn,
                    enabled: null !== (_ = p.overlay) && void 0 !== _ ? _ : d.DEFAULT_OVERLAY_OPTIONS.enabled,
                    allowHook: null !== (E = p.hook) && void 0 !== E ? E : d.DEFAULT_OVERLAY_OPTIONS.allowHook,
                    supportsOutOfProcessOverlay: p.supportsOutOfProcessOverlay
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
        B(n).concat(B(V)).forEach(function(n) {
            var r, o = null != n.executables ? null === (r = n.executables) || void 0 === r ? void 0 : r.filter(function(e) {
                    return e.os === (0, A.getPlatformName)()
                }) : [],
                i = {};
            o.forEach(function(e) {
                var n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
                null == i[n] && (i[n] = []), i[n].push(e.name), e.isLauncher && t.add(e.name)
            }), Object.keys(i).forEach(function(t) {
                return e.push({
                    name: n.name,
                    id: n.id,
                    executables: i[t],
                    cmdLine: "null" !== t ? t : null
                })
            })
        }), e = e.filter(function(e) {
            return null != e.executables && e.executables.length > 0
        }), b.default.setObservedGamesCallback(e, function(e) {
            var n = [],
                o = {};
            e = e.filter(function(e) {
                return e.distributor = function(e) {
                    if (null != q[e.exePath]) return C.Distributors.DISCORD;
                    if (/steamapps/.test(e.cmdLine)) return C.Distributors.STEAM;
                    if (/-epicapp/.test(e.cmdLine)) return C.Distributors.EPIC;
                    return e.distributor
                }(e), e.isLauncher = t.has(e.exeName), e.isLauncher && null != e.id && (o[e.id] = e), e.windowHandle = function(e, t) {
                    if (void 0 === t) {
                        var n = b.default.getDiscordUtils();
                        if (null != n && null != n.getWindowHandleFromPid) {
                            var r = n.getWindowHandleFromPid(e);
                            return null != r && "0" !== r ? r : null
                        }
                        return null
                    }
                    return "0" === t ? null : t
                }(e.pid, e.windowHandle), null == V.find(function(t) {
                    return t.name === e.name
                }) || (n.push(e), !1)
            });
            var i = n.filter(ea).length;
            i !== ee && (ee = i, f.default.dispatch({
                type: "RUNNING_STREAMER_TOOLS_CHANGE",
                count: ee
            })), K = e, X = n, r = o, eu()
        }), ep()
    });
    var eI = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && G(e, t)
        }(l, e);
        var t, n, o, i, u, s = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = U(t);
            if (n) {
                var a = U(this).constructor;
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
            }(this, l), s.apply(this, arguments)
        }
        return o = l, i = [{
            key: "initialize",
            value: function() {
                var e = null !== (i = c.Storage.get(F)) && void 0 !== i ? i : {
                    gamesSeen: [],
                    gameOverrides: {},
                    enableOverlay: {},
                    enableDetection: {}
                };
                J.gameOverrides = {};
                var t = !1;
                if (a().values(null !== (u = e.gameOverrides) && void 0 !== u ? u : {}).forEach(function(e) {
                        var t = es(e);
                        J.gameOverrides[t] = e
                    }), J.enableOverlay = null !== (s = e.enableOverlay) && void 0 !== s ? s : {}, J.enableDetection = null !== (l = e.enableDetection) && void 0 !== l ? l : {}, ep(), Array.isArray(e.gamesSeen)) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, u, s, l, f, d = e.gamesSeen[Symbol.iterator](); !(n = (f = d.next()).done); n = !0) {
                            var _ = f.value;
                            "number" == typeof _.id && (_.nativeProcessObserverId = _.id, delete _.id, t = !0)
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
                }
                em(e.gamesSeen), this.waitFor(I.default), this.syncWith([h.default, I.default, O.default], a().throttle(eE, 1e3)), t && ed()
            }
        }, {
            key: "getVisibleGame",
            value: function() {
                return null == z || ef(z) ? z : null
            }
        }, {
            key: "getCurrentGameForAnalytics",
            value: function() {
                return z
            }
        }, {
            key: "getVisibleRunningGames",
            value: function() {
                return K.filter(ef)
            }
        }, {
            key: "getRunningGames",
            value: function() {
                return K
            }
        }, {
            key: "getRunningDiscordApplicationIds",
            value: function() {
                var e = [],
                    t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = K[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a = o.value;
                        null != q[a.exePath] && e.push(q[a.exePath])
                    }
                } catch (e) {
                    n = !0, r = e
                } finally {
                    try {
                        !t && null != i.return && i.return()
                    } finally {
                        if (n) throw r
                    }
                }
                return e
            }
        }, {
            key: "getRunningVerifiedApplicationIds",
            value: function() {
                return this.getRunningGames().map(function(e) {
                    return I.default.getGameByName(e.name)
                }).filter(g.isNotNullish).map(function(e) {
                    return e.id
                })
            }
        }, {
            key: "getGameForPID",
            value: function(e) {
                var t;
                return null !== (t = K.find(function(t) {
                    return t.pid === e
                })) && void 0 !== t ? t : null
            }
        }, {
            key: "getLauncherForPID",
            value: function(e) {
                var t = this.getGameForPID(e);
                return null != t ? null != t.id ? r[t.id] : null : null
            }
        }, {
            key: "getOverlayOptionsForPID",
            value: function(e) {
                var t = this.getGameForPID(e);
                return null == t || t.isLauncher || null == t.id ? null : w({}, $[t.id])
            }
        }, {
            key: "shouldElevateProcessForPID",
            value: function(e) {
                return null != et && et === e
            }
        }, {
            key: "shouldContinueWithoutElevatedProcessForPID",
            value: function(e) {
                return null != en && en === e
            }
        }, {
            key: "getCandidateGames",
            value: function() {
                return W.filter(function(e) {
                    return e.hidden || null == e.id
                }).filter(function(e) {
                    return void 0 === J.gameOverrides[es(e)]
                })
            }
        }, {
            key: "getGamesSeen",
            value: function(e) {
                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = ey();
                if (e) {
                    var r = this.getVisibleGame();
                    if (null != r) {
                        var o = es(r);
                        n = n.filter(function(e) {
                            return es(e) !== o
                        })
                    }
                }
                return t && n.sort(function(e, t) {
                    return t.lastFocused - e.lastFocused
                }), n
            }
        }, {
            key: "getSeenGameByName",
            value: function(e) {
                return J.gamesSeen.find(function(t) {
                    return null != t.name && t.name.toLowerCase() === e.toLowerCase()
                })
            }
        }, {
            key: "isObservedAppRunning",
            value: function(e) {
                return X.some(function(t) {
                    return t.name === e
                })
            }
        }, {
            key: "getOverrides",
            value: function() {
                return Object.values(J.gameOverrides)
            }
        }, {
            key: "getOverrideForGame",
            value: function(e) {
                return J.gameOverrides[es(e)]
            }
        }, {
            key: "getGameOverlayStatus",
            value: function(e) {
                if (e.hidden || e.isLauncher || e.elevated || e.sandboxed) return j.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
                var t = el(e);
                return t.enabled ? t : null
            }
        }, {
            key: "getObservedAppNameForWindow",
            value: function(e) {
                var t, n;
                return null !== (n = null === (t = X.find(function(t) {
                    return (0, m.default)(e, t.windowHandle)
                })) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null
            }
        }, {
            key: "canShowAdminWarning",
            get: function() {
                return H
            }
        }], L(o.prototype, i), u && L(o, u), l
    }(l.default.Store);
    M(eI, "displayName", "RunningGameStore"), t.default = new eI(f.default, {
        RUNNING_GAMES_CHANGE: function(e) {
            em(K)
        },
        CANDIDATE_GAMES_CHANGE: function(e) {
            W = e.games
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function() {
            H = !1
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function(e) {
            et = e.pid, en = null
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function() {
            et = null
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function(e) {
            en = e.pid, et = null
        },
        RUNNING_GAME_ADD_OVERRIDE: function(e) {
            var t, n = e.pid,
                r = K.find(function(e) {
                    return e.pid === n
                });
            if (null == r) {
                var o = W.find(function(e) {
                    return e.pid === n
                });
                if (null == o) return;
                (r = w({}, o)).hidden = !1, K.push(r), t = es(r)
            } else t = es(r), r.hidden && (Q[t] = !0), r.hidden = !1;
            (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)), J.gameOverrides[t] = k(w({}, r), {
                add: !0
            }), em(K), ep(), ed(), eu()
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
            if (J.enableOverlay[es(e.game)] = e.newEnabledValue, ed(), !__OVERLAY__) {
                var t = null != e.game.id ? I.default.getDetectableGame(e.game.id) : null;
                null != t && T.default.track(C.AnalyticEvents.OVERLAY_TOGGLED, {
                    enabled: e.newEnabledValue,
                    setting_type: "overlay toggled - game",
                    application_id: t.id,
                    application_name: t.name
                })
            }
        },
        RUNNING_GAME_TOGGLE_DETECTION: function(e) {
            var t = e.game,
                n = ec(t);
            J.enableDetection[es(t)] = !n, ed(), T.default.track(C.AnalyticEvents.USER_SETTINGS_GAME_DETECTION_TOGGLE, {
                enabled: !n
            })
        },
        RUNNING_GAME_EDIT_NAME: function(e) {
            var t, n = es(e.game),
                r = J.gameOverrides[n];
            if (null == r) {
                ;
                (r = {
                    name: (t = e.game).name,
                    exePath: t.exePath,
                    cmdLine: t.cmdLine,
                    lastFocused: t.lastFocused
                }).add = !0
            }
            r.name = e.newName;
            var o = es(r);
            delete J.gameOverrides[n], J.gameOverrides[o] = r, eo(J.enableOverlay, n, o), eo(J.enableDetection, n, o), eo(Q, n, o), J.gamesSeen.forEach(function(t) {
                es(t) === n && (t.name = e.newName)
            });
            var i = !1;
            K.forEach(function(t) {
                es(t) === n && (t.name = e.newName, i = !0)
            }), ep(), ed(), i && eu()
        },
        RUNNING_GAME_DELETE_ENTRY: function(e) {
            var t = es(e.game);
            delete J.gameOverrides[t], delete J.enableOverlay[t], delete J.enableDetection[t], J.gamesSeen = J.gamesSeen.filter(function(e) {
                return es(e) !== t
            }), Q[t] && (K.forEach(function(e) {
                t === es(e) && (e.hidden = !0)
            }), delete Q[t], eu()), ep(), ed()
        },
        GAMES_DATABASE_UPDATE: Z,
        GAME_LAUNCH_SUCCESS: function(e) {
            if (__OVERLAY__ || !A.isPlatformEmbedded) return;
            var t, n = b.default.getDiscordUtils().notifyGameLaunched;
            if (null != n) {
                var r = I.default.getDetectableGame(e.applicationId);
                null != r && n(r.id, r.name, null !== (t = e.pids) && void 0 !== t ? t : [])
            }
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function() {
            ep()
        }
    })
}