function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        gameKey: function() {
            return ei
        },
        getOverlayGameStatus: function() {
            return er
        },
        isDetectionEnabled: function() {
            return es
        },
        transformForGameSettings: function() {
            return el
        }
    }), n("47120"), n("653041"), n("724458"), n("757143"), n("733860");
    var r, s, a, o, l = n("392711"),
        u = n.n(l),
        d = n("913527"),
        _ = n.n(d),
        c = n("442837"),
        E = n("433517"),
        I = n("570140"),
        T = n("593472"),
        f = n("726542"),
        S = n("710845"),
        A = n("630699"),
        h = n("855403"),
        m = n("454991"),
        N = n("77498"),
        O = n("283595"),
        p = n("417363"),
        R = n("626135"),
        C = n("70956"),
        g = n("877481"),
        L = n("823379"),
        D = n("358085"),
        v = n("998502"),
        M = n("145597"),
        y = n("370862"),
        P = n("981631"),
        U = n("987650");
    let b = new S.default("RunningGameStore"),
        G = "RunningGameStore",
        w = [{
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
            name: f.default.get(P.PlatformTypes.SPOTIFY).name
        }],
        B = !0,
        k = new Set,
        F = [],
        V = [],
        x = [],
        H = null,
        Y = [],
        j = {},
        W = {},
        K = {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableDetection: {}
        },
        z = function() {},
        X = {},
        Q = 0,
        q = null,
        Z = null,
        J = {};

    function $(e, t, n) {
        let i = e[t];
        void 0 !== i && (delete e[t], e[n] = i)
    }

    function ee(e, t) {
        null != t.lastLaunched ? e.lastLaunched = t.lastLaunched : null != t.start && (e.lastLaunched = t.start)
    }

    function et(e) {
        return w.some(t => t.name === e.name && !0 === t.streamerTool)
    }

    function en() {
        if (x.length > 0) {
            let e = H;
            H = x[0], null != e && H.pid === e.pid ? H.start = e.start : H.start = Date.now()
        } else H = null;
        let e = [];
        for (let t of x) !(t.pid in J) && (J[t.pid] = t, e.push(t));
        let t = [];
        for (let e of Object.values(J)) !x.some(t => t.pid === e.pid) && (t.push(e), delete J[e.pid]);
        b.info("games", {
            runningGames: x,
            added: e,
            removed: t,
            previousGames: J
        }), I.default.dispatch({
            type: "RUNNING_GAMES_CHANGE",
            games: x,
            added: e,
            removed: t
        })
    }

    function ei(e) {
        let t = null != e.name ? e.name : "";
        return "".concat(e.exePath, ":").concat(t)
    }

    function er(e) {
        if (e.isLauncher) return {
            source: y.OverlayGameStatusSource.LAUNCHER,
            enabled: !1,
            overlayMethod: U.OverlayMethod.Disabled
        };
        let t = N.default.getGameByName(e.name);
        if (null != t) {
            let e = O.default.getActiveLibraryApplication(t.id);
            if (null != e) return {
                source: y.OverlayGameStatusSource.LIBRARY_APPLICATION,
                enabled: e.isOverlayEnabled(),
                overlayMethod: U.OverlayMethod.Disabled
            }
        }
        let n = A.isOOPExperimentEnabled() && (0, M.supportsOutOfProcess)() && !m.OverlayStoredSettings.legacyEnabled,
            i = n ? U.OverlayMethod.OutOfProcess : U.OverlayMethod.Hook,
            r = K.enableOverlay[ei(e)];
        if (null != r) return {
            source: y.OverlayGameStatusSource.USER_OVERRIDE,
            enabled: r,
            overlayMethod: i
        };
        let s = null == e.id ? null : X[e.id];
        return null != s ? {
            source: y.OverlayGameStatusSource.DATABASE,
            enabled: s.enabled || n,
            overlayMethod: i
        } : {
            source: y.OverlayGameStatusSource.DEFAULT,
            enabled: !1,
            overlayMethod: U.OverlayMethod.Hook
        }
    }

    function es(e) {
        let t = K.enableDetection[ei(e)];
        return null == t || t
    }

    function ea(e) {
        return !e.hidden && es(e)
    }

    function eo() {
        E.Storage.set(G, K)
    }

    function el(e) {
        var t, n;
        let i = {
            ...e,
            played: null != e.lastFocused && 0 !== e.lastFocused ? _()(new Date(e.lastFocused * C.default.Millis.SECOND)).fromNow() : " ",
            overlay: (t = e, null !== (n = K.enableOverlay[ei(t)]) && void 0 !== n ? n : er(t).enabled),
            verified: N.default.isGameInDatabase(e),
            detectable: es(e)
        };
        if (null != e.id && null != X[e.id]) {
            let t = X[e.id];
            i.overlayWarn = t.warn
        }
        return i
    }

    function eu() {
        let e = !1;
        return F = u().values(O.default.libraryApplications).reduce((t, n) => {
            let i = N.default.getDetectableGame(n.id);
            if (null == i) return t;
            for (let r of p.default.getLaunchOptions(n.id, n.branchId)) {
                let s = "".concat(n.id, ":").concat(n.branchId);
                !k.has(s) && (e = !0, k.add(s));
                let {
                    fullExecutablePath: a
                } = r, o = a.replace(/\\/g, "/").toLowerCase();
                j[o] = i.id, t.push({
                    id: i.id,
                    name: i.name,
                    exePath: o,
                    cmdLine: "",
                    lastFocused: 0,
                    add: !0
                })
            }
            return t
        }, []), e && ed(), e
    }

    function ed() {
        if (!__OVERLAY__ && D.isPlatformEmbedded) {
            let e = [...F, ...u().values(K.gameOverrides)];
            v.default.setGameCandidateOverrides(e)
        }
    }

    function e_(e) {
        null != e && 0 !== e.length && (e.forEach(e => {
            if (K.gamesSeen.some(t => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = K.gameOverrides[ei(e)];
                            null != n && (n.lastFocused = e.lastFocused)
                        }
                        return ee(t, e), !0
                    }
                    return !1
                }));
            else {
                if (e.hidden) return;
                K.gamesSeen.unshift(function(e) {
                    let t = {
                        exePath: e.exePath,
                        cmdLine: e.cmdLine,
                        lastFocused: e.lastFocused
                    };
                    return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), ee(t, e), t
                }(e))
            }
        }), K.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused), eo(), g.default.setRecentGames(ec().map(e => el(e))))
    }

    function ec() {
        let e = u().values(K.gameOverrides);
        return K.gamesSeen.filter(e => void 0 === K.gameOverrides[ei(e)]).concat(e)
    }!__OVERLAY__ && (0, D.isDesktop)() && (z = function() {
        let e = [],
            t = new Set;
        i = {};
        let n = N.default.games;
        for (let e of n) {
            var r, s, a, o;
            X[e.id] = {
                compatibilityHook: null !== (r = e.overlayCompatibilityHook) && void 0 !== r ? r : T.DEFAULT_OVERLAY_OPTIONS.compatibilityHook,
                warn: null !== (s = e.overlayWarn) && void 0 !== s ? s : T.DEFAULT_OVERLAY_OPTIONS.warn,
                enabled: null !== (a = e.overlay) && void 0 !== a ? a : T.DEFAULT_OVERLAY_OPTIONS.enabled,
                allowHook: null !== (o = e.hook) && void 0 !== o ? o : T.DEFAULT_OVERLAY_OPTIONS.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            }
        } [...n, ...w].forEach(n => {
            var i;
            let r = null != n.executables ? null === (i = n.executables) || void 0 === i ? void 0 : i.filter(e => {
                    let {
                        os: t
                    } = e;
                    return t === (0, D.getPlatformName)()
                }) : [],
                s = {};
            r.forEach(e => {
                let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
                null == s[n] && (s[n] = []), s[n].push(e.name), e.isLauncher && t.add(e.name)
            }), Object.keys(s).forEach(t => e.push({
                name: n.name,
                id: n.id,
                executables: s[t],
                cmdLine: "null" !== t ? t : null
            }))
        }), e = e.filter(e => null != e.executables && e.executables.length > 0), v.default.setObservedGamesCallback(e, e => {
            let n = [],
                r = {};
            e = e.filter(e => (e.distributor = function(e) {
                if (null != j[e.exePath]) return P.Distributors.DISCORD;
                if (/steamapps/.test(e.cmdLine)) return P.Distributors.STEAM;
                if (/-epicapp/.test(e.cmdLine)) return P.Distributors.EPIC;
                return e.distributor
            }(e), e.isLauncher = t.has(e.exeName), e.isLauncher && null != e.id && (r[e.id] = e), e.windowHandle = function(e, t) {
                if (void 0 === t) {
                    let t = v.default.getDiscordUtils();
                    if (null != t && null != t.getWindowHandleFromPid) {
                        let n = t.getWindowHandleFromPid(e);
                        return null != n && "0" !== n ? n : null
                    }
                    return null
                }
                return "0" === t ? null : t
            }(e.pid, e.windowHandle), null == w.find(t => {
                let {
                    name: n
                } = t;
                return n === e.name
            }) || (n.push(e), !1)));
            let s = n.filter(et).length;
            s !== Q && (Q = s, I.default.dispatch({
                type: "RUNNING_STREAMER_TOOLS_CHANGE",
                count: Q
            })), x = e, Y = n, i = r, en()
        }), ed()
    });
    class eE extends(r = c.default.Store) {
        initialize() {
            var e, t, n, i;
            let r = null !== (e = E.Storage.get(G)) && void 0 !== e ? e : {
                gamesSeen: [],
                gameOverrides: {},
                enableOverlay: {},
                enableDetection: {}
            };
            K.gameOverrides = {};
            let s = !1;
            if (u().values(null !== (t = r.gameOverrides) && void 0 !== t ? t : {}).forEach(e => {
                    let t = ei(e);
                    K.gameOverrides[t] = e
                }), K.enableOverlay = null !== (n = r.enableOverlay) && void 0 !== n ? n : {}, K.enableDetection = null !== (i = r.enableDetection) && void 0 !== i ? i : {}, ed(), Array.isArray(r.gamesSeen))
                for (let e of r.gamesSeen) "number" == typeof e.id && (e.nativeProcessObserverId = e.id, delete e.id, s = !0);
            e_(r.gamesSeen), this.waitFor(N.default), this.syncWith([O.default, N.default, p.default], u().throttle(eu, 1e3)), s && eo()
        }
        getVisibleGame() {
            return null == H || ea(H) ? H : null
        }
        getCurrentGameForAnalytics() {
            return H
        }
        getVisibleRunningGames() {
            return x.filter(ea)
        }
        getRunningGames() {
            return x
        }
        getRunningDiscordApplicationIds() {
            let e = [];
            for (let t of x) null != j[t.exePath] && e.push(j[t.exePath]);
            return e
        }
        getRunningVerifiedApplicationIds() {
            return this.getRunningGames().map(e => N.default.getGameByName(e.name)).filter(L.isNotNullish).map(e => e.id)
        }
        getGameForPID(e) {
            var t;
            return null !== (t = x.find(t => t.pid === e)) && void 0 !== t ? t : null
        }
        getLauncherForPID(e) {
            let t = this.getGameForPID(e);
            return null != t ? null != t.id ? i[t.id] : null : null
        }
        getOverlayOptionsForPID(e) {
            let t = this.getGameForPID(e);
            return null == t || t.isLauncher || null == t.id ? null : {
                ...X[t.id]
            }
        }
        shouldElevateProcessForPID(e) {
            return null != q && q === e
        }
        shouldContinueWithoutElevatedProcessForPID(e) {
            return null != Z && Z === e
        }
        getCandidateGames() {
            return V.filter(e => e.hidden || null == e.id).filter(e => void 0 === K.gameOverrides[ei(e)])
        }
        getGamesSeen(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = ec();
            if (e) {
                let e = this.getVisibleGame();
                if (null != e) {
                    let t = ei(e);
                    n = n.filter(e => ei(e) !== t)
                }
            }
            return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n
        }
        getSeenGameByName(e) {
            return K.gamesSeen.find(t => null != t.name && t.name.toLowerCase() === e.toLowerCase())
        }
        isObservedAppRunning(e) {
            return Y.some(t => t.name === e)
        }
        getOverrides() {
            return Object.values(K.gameOverrides)
        }
        getOverrideForGame(e) {
            return K.gameOverrides[ei(e)]
        }
        getGameOverlayStatus(e) {
            if (e.hidden || e.isLauncher || e.elevated || e.sandboxed) return b.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
            let t = er(e);
            return t.enabled ? t : null
        }
        getObservedAppNameForWindow(e) {
            var t, n;
            return null !== (n = null === (t = Y.find(t => (0, h.default)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null
        }
        get canShowAdminWarning() {
            return B
        }
    }
    o = "RunningGameStore", (a = "displayName") in(s = eE) ? Object.defineProperty(s, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = o, t.default = new eE(I.default, {
        RUNNING_GAMES_CHANGE: function(e) {
            e_(x)
        },
        CANDIDATE_GAMES_CHANGE: function(e) {
            V = e.games
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function() {
            B = !1
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function(e) {
            let {
                pid: t
            } = e;
            q = t, Z = null
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function() {
            q = null
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function(e) {
            let {
                pid: t
            } = e;
            Z = t, q = null
        },
        RUNNING_GAME_ADD_OVERRIDE: function(e) {
            let t;
            let n = e.pid,
                i = x.find(e => e.pid === n);
            if (null == i) {
                let e = V.find(e => e.pid === n);
                if (null == e) return;
                (i = {
                    ...e
                }).hidden = !1, x.push(i), t = ei(i)
            } else t = ei(i), i.hidden && (W[t] = !0), i.hidden = !1;
            (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)), K.gameOverrides[t] = {
                ...i,
                add: !0
            }, e_(x), ed(), eo(), en()
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
            if (K.enableOverlay[ei(e.game)] = e.newEnabledValue, eo(), !__OVERLAY__) {
                let t = null != e.game.id ? N.default.getDetectableGame(e.game.id) : null;
                null != t && R.default.track(P.AnalyticEvents.OVERLAY_TOGGLED, {
                    enabled: e.newEnabledValue,
                    setting_type: "overlay toggled - game",
                    application_id: t.id,
                    application_name: t.name
                })
            }
        },
        RUNNING_GAME_TOGGLE_DETECTION: function(e) {
            let {
                game: t
            } = e, n = es(t);
            K.enableDetection[ei(t)] = !n, eo(), R.default.track(P.AnalyticEvents.USER_SETTINGS_GAME_DETECTION_TOGGLE, {
                enabled: !n
            })
        },
        RUNNING_GAME_EDIT_NAME: function(e) {
            let t = ei(e.game),
                n = K.gameOverrides[t];
            if (null == n) {
                var i;
                (n = {
                    name: (i = e.game).name,
                    exePath: i.exePath,
                    cmdLine: i.cmdLine,
                    lastFocused: i.lastFocused
                }).add = !0
            }
            n.name = e.newName;
            let r = ei(n);
            delete K.gameOverrides[t], K.gameOverrides[r] = n, $(K.enableOverlay, t, r), $(K.enableDetection, t, r), $(W, t, r), K.gamesSeen.forEach(n => {
                ei(n) === t && (n.name = e.newName)
            });
            let s = !1;
            x.forEach(n => {
                ei(n) === t && (n.name = e.newName, s = !0)
            }), ed(), eo(), s && en()
        },
        RUNNING_GAME_DELETE_ENTRY: function(e) {
            let t = ei(e.game);
            delete K.gameOverrides[t], delete K.enableOverlay[t], delete K.enableDetection[t], K.gamesSeen = K.gamesSeen.filter(e => ei(e) !== t), W[t] && (x.forEach(e => {
                t === ei(e) && (e.hidden = !0)
            }), delete W[t], en()), ed(), eo()
        },
        GAMES_DATABASE_UPDATE: z,
        GAME_LAUNCH_SUCCESS: function(e) {
            var t;
            if (__OVERLAY__ || !D.isPlatformEmbedded) return;
            let n = v.default.getDiscordUtils().notifyGameLaunched;
            if (null == n) return;
            let i = N.default.getDetectableGame(e.applicationId);
            null != i && n(i.id, i.name, null !== (t = e.pids) && void 0 !== t ? t : [])
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function() {
            ed()
        }
    })
}