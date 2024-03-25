function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        gameKey: function() {
            return $
        },
        getOverlayGameStatus: function() {
            return ee
        },
        isDetectionEnabled: function() {
            return et
        },
        transformForGameSettings: function() {
            return es
        },
        default: function() {
            return ed
        }
    }), n("222007"), n("424973"), n("808653"), n("781738"), n("843762");
    var s = n("917351"),
        r = n.n(s),
        a = n("866227"),
        o = n.n(a),
        l = n("446674"),
        u = n("95410"),
        d = n("913144"),
        c = n("115718"),
        _ = n("376556"),
        f = n("605250"),
        E = n("630915"),
        h = n("756898"),
        g = n("32128"),
        m = n("546463"),
        p = n("686470"),
        S = n("535974"),
        T = n("599110"),
        v = n("718517"),
        I = n("269180"),
        A = n("449008"),
        C = n("773336"),
        y = n("50885"),
        N = n("819068"),
        R = n("373807"),
        O = n("49111"),
        D = n("6791");
    let P = new f.default("RunningGameStore"),
        L = "RunningGameStore",
        M = [{
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
            name: _.default.get(O.PlatformTypes.SPOTIFY).name
        }],
        b = !0,
        U = new Set,
        w = [],
        k = [],
        V = [],
        G = null,
        F = [],
        x = {},
        B = {},
        H = {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableDetection: {}
        },
        Y = function() {},
        K = {},
        j = 0,
        W = null,
        z = null,
        q = {};

    function X(e, t, n) {
        let i = e[t];
        void 0 !== i && (delete e[t], e[n] = i)
    }

    function Q(e, t) {
        null != t.lastLaunched ? e.lastLaunched = t.lastLaunched : null != t.start && (e.lastLaunched = t.start)
    }

    function Z(e) {
        return M.some(t => t.name === e.name && !0 === t.streamerTool)
    }

    function J() {
        if (V.length > 0) {
            let e = G;
            G = V[0], null != e && G.pid === e.pid ? G.start = e.start : G.start = Date.now()
        } else G = null;
        let e = [];
        for (let t of V) !(t.pid in q) && (q[t.pid] = t, e.push(t));
        let t = [];
        for (let e of Object.values(q)) !V.some(t => t.pid === e.pid) && (t.push(e), delete q[e.pid]);
        P.info("games", {
            runningGames: V,
            added: e,
            removed: t,
            previousGames: q
        }), d.default.dispatch({
            type: "RUNNING_GAMES_CHANGE",
            games: V,
            added: e,
            removed: t
        })
    }

    function $(e) {
        let t = null != e.name ? e.name : "";
        return "".concat(e.exePath, ":").concat(t)
    }

    function ee(e) {
        if (e.isLauncher) return {
            source: R.OverlayGameStatusSource.LAUNCHER,
            enabled: !1,
            overlayMethod: D.OverlayMethod.Disabled
        };
        let t = m.default.getGameByName(e.name);
        if (null != t) {
            let e = p.default.getActiveLibraryApplication(t.id);
            if (null != e) return {
                source: R.OverlayGameStatusSource.LIBRARY_APPLICATION,
                enabled: e.isOverlayEnabled(),
                overlayMethod: D.OverlayMethod.Disabled
            }
        }
        let n = E.isOOPExperimentEnabled() && (0, N.supportsOutOfProcess)() && !g.OverlayStoredSettings.legacyEnabled,
            i = n ? D.OverlayMethod.OutOfProcess : D.OverlayMethod.Hook,
            s = H.enableOverlay[$(e)];
        if (null != s) return {
            source: R.OverlayGameStatusSource.USER_OVERRIDE,
            enabled: s,
            overlayMethod: i
        };
        let r = null == e.id ? null : K[e.id];
        return null != r ? {
            source: R.OverlayGameStatusSource.DATABASE,
            enabled: r.enabled || n,
            overlayMethod: i
        } : {
            source: R.OverlayGameStatusSource.DEFAULT,
            enabled: !1,
            overlayMethod: D.OverlayMethod.Hook
        }
    }

    function et(e) {
        let t = H.enableDetection[$(e)];
        return null == t || t
    }

    function en(e) {
        return !e.hidden && et(e)
    }

    function ei() {
        u.Storage.set(L, H)
    }

    function es(e) {
        var t, n;
        let i = {
            ...e,
            played: null != e.lastFocused && 0 !== e.lastFocused ? o(new Date(e.lastFocused * v.default.Millis.SECOND)).fromNow() : " ",
            overlay: (t = e, null !== (n = H.enableOverlay[$(t)]) && void 0 !== n ? n : ee(t).enabled),
            verified: m.default.isGameInDatabase(e),
            detectable: et(e)
        };
        if (null != e.id && null != K[e.id]) {
            let t = K[e.id];
            i.overlayWarn = t.warn
        }
        return i
    }

    function er() {
        let e = !1;
        return w = r.values(p.default.libraryApplications).reduce((t, n) => {
            let i = m.default.getDetectableGame(n.id);
            if (null == i) return t;
            let s = S.default.getLaunchOptions(n.id, n.branchId);
            for (let r of s) {
                let s = "".concat(n.id, ":").concat(n.branchId);
                !U.has(s) && (e = !0, U.add(s));
                let {
                    fullExecutablePath: a
                } = r, o = a.replace(/\\/g, "/").toLowerCase();
                x[o] = i.id, t.push({
                    id: i.id,
                    name: i.name,
                    exePath: o,
                    cmdLine: "",
                    lastFocused: 0,
                    add: !0
                })
            }
            return t
        }, []), e && ea(), e
    }

    function ea() {
        if (!__OVERLAY__ && C.isPlatformEmbedded) {
            let e = [...w, ...r.values(H.gameOverrides)];
            y.default.setGameCandidateOverrides(e)
        }
    }

    function eo(e) {
        null != e && 0 !== e.length && (e.forEach(e => {
            let t = H.gamesSeen.some(t => {
                if (t.name === e.name) {
                    if (e.lastFocused) {
                        t.lastFocused = e.lastFocused;
                        let n = H.gameOverrides[$(e)];
                        null != n && (n.lastFocused = e.lastFocused)
                    }
                    return Q(t, e), !0
                }
                return !1
            });
            if (t);
            else {
                if (e.hidden) return;
                H.gamesSeen.unshift(function(e) {
                    let t = {
                        exePath: e.exePath,
                        cmdLine: e.cmdLine,
                        lastFocused: e.lastFocused
                    };
                    return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), Q(t, e), t
                }(e))
            }
        }), H.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused), ei(), I.default.setRecentGames(el().map(e => es(e))))
    }

    function el() {
        let e = r.values(H.gameOverrides),
            t = H.gamesSeen.filter(e => void 0 === H.gameOverrides[$(e)]);
        return t.concat(e)
    }!__OVERLAY__ && (0, C.isDesktop)() && (Y = function() {
        let e = [],
            t = new Set;
        i = {};
        let n = m.default.games;
        for (let e of n) {
            var s, r, a, o;
            K[e.id] = {
                compatibilityHook: null !== (s = e.overlayCompatibilityHook) && void 0 !== s ? s : c.DEFAULT_OVERLAY_OPTIONS.compatibilityHook,
                warn: null !== (r = e.overlayWarn) && void 0 !== r ? r : c.DEFAULT_OVERLAY_OPTIONS.warn,
                enabled: null !== (a = e.overlay) && void 0 !== a ? a : c.DEFAULT_OVERLAY_OPTIONS.enabled,
                allowHook: null !== (o = e.hook) && void 0 !== o ? o : c.DEFAULT_OVERLAY_OPTIONS.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            }
        } [...n, ...M].forEach(n => {
            var i;
            let s = null != n.executables ? null === (i = n.executables) || void 0 === i ? void 0 : i.filter(e => {
                    let {
                        os: t
                    } = e;
                    return t === (0, C.getPlatformName)()
                }) : [],
                r = {};
            s.forEach(e => {
                let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
                null == r[n] && (r[n] = []), r[n].push(e.name), e.isLauncher && t.add(e.name)
            }), Object.keys(r).forEach(t => e.push({
                name: n.name,
                id: n.id,
                executables: r[t],
                cmdLine: "null" !== t ? t : null
            }))
        }), e = e.filter(e => null != e.executables && e.executables.length > 0), y.default.setObservedGamesCallback(e, e => {
            let n = [],
                s = {};
            e = e.filter(e => (e.distributor = function(e) {
                if (null != x[e.exePath]) return O.Distributors.DISCORD;
                if (/steamapps/.test(e.cmdLine)) return O.Distributors.STEAM;
                if (/-epicapp/.test(e.cmdLine)) return O.Distributors.EPIC;
                return e.distributor
            }(e), e.isLauncher = t.has(e.exeName), e.isLauncher && null != e.id && (s[e.id] = e), e.windowHandle = function(e, t) {
                if (void 0 === t) {
                    let t = y.default.getDiscordUtils();
                    if (null != t && null != t.getWindowHandleFromPid) {
                        let n = t.getWindowHandleFromPid(e);
                        return null != n && "0" !== n ? n : null
                    }
                    return null
                }
                return "0" === t ? null : t
            }(e.pid, e.windowHandle), null == M.find(t => {
                let {
                    name: n
                } = t;
                return n === e.name
            }) || (n.push(e), !1)));
            let r = n.filter(Z).length;
            r !== j && (j = r, d.default.dispatch({
                type: "RUNNING_STREAMER_TOOLS_CHANGE",
                count: j
            })), V = e, F = n, i = s, J()
        }), ea()
    });
    class eu extends l.default.Store {
        initialize() {
            var e, t, n, i;
            let s = null !== (e = u.Storage.get(L)) && void 0 !== e ? e : {
                gamesSeen: [],
                gameOverrides: {},
                enableOverlay: {},
                enableDetection: {}
            };
            H.gameOverrides = {};
            let a = !1;
            if (r.values(null !== (t = s.gameOverrides) && void 0 !== t ? t : {}).forEach(e => {
                    let t = $(e);
                    H.gameOverrides[t] = e
                }), H.enableOverlay = null !== (n = s.enableOverlay) && void 0 !== n ? n : {}, H.enableDetection = null !== (i = s.enableDetection) && void 0 !== i ? i : {}, ea(), Array.isArray(s.gamesSeen))
                for (let e of s.gamesSeen) "number" == typeof e.id && (e.nativeProcessObserverId = e.id, delete e.id, a = !0);
            eo(s.gamesSeen), this.waitFor(m.default), this.syncWith([p.default, m.default, S.default], r.throttle(er, 1e3)), a && ei()
        }
        getVisibleGame() {
            return null == G || en(G) ? G : null
        }
        getCurrentGameForAnalytics() {
            return G
        }
        getVisibleRunningGames() {
            return V.filter(en)
        }
        getRunningGames() {
            return V
        }
        getRunningDiscordApplicationIds() {
            let e = [];
            for (let t of V) null != x[t.exePath] && e.push(x[t.exePath]);
            return e
        }
        getRunningVerifiedApplicationIds() {
            return this.getRunningGames().map(e => m.default.getGameByName(e.name)).filter(A.isNotNullish).map(e => e.id)
        }
        getGameForPID(e) {
            var t;
            return null !== (t = V.find(t => t.pid === e)) && void 0 !== t ? t : null
        }
        getLauncherForPID(e) {
            let t = this.getGameForPID(e);
            return null != t ? null != t.id ? i[t.id] : null : null
        }
        getOverlayOptionsForPID(e) {
            let t = this.getGameForPID(e);
            return null == t || t.isLauncher || null == t.id ? null : {
                ...K[t.id]
            }
        }
        shouldElevateProcessForPID(e) {
            return null != W && W === e
        }
        shouldContinueWithoutElevatedProcessForPID(e) {
            return null != z && z === e
        }
        getCandidateGames() {
            return k.filter(e => e.hidden || null == e.id).filter(e => void 0 === H.gameOverrides[$(e)])
        }
        getGamesSeen(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = el();
            if (e) {
                let e = this.getVisibleGame();
                if (null != e) {
                    let t = $(e);
                    n = n.filter(e => $(e) !== t)
                }
            }
            return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n
        }
        getSeenGameByName(e) {
            return H.gamesSeen.find(t => null != t.name && t.name.toLowerCase() === e.toLowerCase())
        }
        isObservedAppRunning(e) {
            return F.some(t => t.name === e)
        }
        getOverrides() {
            return Object.values(H.gameOverrides)
        }
        getOverrideForGame(e) {
            return H.gameOverrides[$(e)]
        }
        getGameOverlayStatus(e) {
            if (e.hidden || e.isLauncher || e.elevated || e.sandboxed) return P.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
            let t = ee(e);
            return t.enabled ? t : null
        }
        getObservedAppNameForWindow(e) {
            var t, n;
            return null !== (n = null === (t = F.find(t => (0, h.default)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null
        }
        get canShowAdminWarning() {
            return b
        }
    }
    eu.displayName = "RunningGameStore";
    var ed = new eu(d.default, {
        RUNNING_GAMES_CHANGE: function(e) {
            eo(V)
        },
        CANDIDATE_GAMES_CHANGE: function(e) {
            k = e.games
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function() {
            b = !1
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function(e) {
            let {
                pid: t
            } = e;
            W = t, z = null
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function() {
            W = null
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function(e) {
            let {
                pid: t
            } = e;
            z = t, W = null
        },
        RUNNING_GAME_ADD_OVERRIDE: function(e) {
            let t;
            let n = e.pid,
                i = V.find(e => e.pid === n);
            if (null == i) {
                let e = k.find(e => e.pid === n);
                if (null == e) return;
                (i = {
                    ...e
                }).hidden = !1, V.push(i), t = $(i)
            } else t = $(i), i.hidden && (B[t] = !0), i.hidden = !1;
            (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)), H.gameOverrides[t] = {
                ...i,
                add: !0
            }, eo(V), ea(), ei(), J()
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
            if (H.enableOverlay[$(e.game)] = e.newEnabledValue, ei(), !__OVERLAY__) {
                let t = null != e.game.id ? m.default.getDetectableGame(e.game.id) : null;
                null != t && T.default.track(O.AnalyticEvents.OVERLAY_TOGGLED, {
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
            } = e, n = et(t);
            H.enableDetection[$(t)] = !n, ei(), T.default.track(O.AnalyticEvents.USER_SETTINGS_GAME_DETECTION_TOGGLE, {
                enabled: !n
            })
        },
        RUNNING_GAME_EDIT_NAME: function(e) {
            let t = $(e.game),
                n = H.gameOverrides[t];
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
            let s = $(n);
            delete H.gameOverrides[t], H.gameOverrides[s] = n, X(H.enableOverlay, t, s), X(H.enableDetection, t, s), X(B, t, s), H.gamesSeen.forEach(n => {
                $(n) === t && (n.name = e.newName)
            });
            let r = !1;
            V.forEach(n => {
                $(n) === t && (n.name = e.newName, r = !0)
            }), ea(), ei(), r && J()
        },
        RUNNING_GAME_DELETE_ENTRY: function(e) {
            let t = $(e.game);
            delete H.gameOverrides[t], delete H.enableOverlay[t], delete H.enableDetection[t], H.gamesSeen = H.gamesSeen.filter(e => $(e) !== t), B[t] && (V.forEach(e => {
                t === $(e) && (e.hidden = !0)
            }), delete B[t], J()), ea(), ei()
        },
        GAMES_DATABASE_UPDATE: Y,
        GAME_LAUNCH_SUCCESS: function(e) {
            var t;
            if (__OVERLAY__ || !C.isPlatformEmbedded) return;
            let n = y.default.getDiscordUtils().notifyGameLaunched;
            if (null == n) return;
            let i = m.default.getDetectableGame(e.applicationId);
            null != i && n(i.id, i.name, null !== (t = e.pids) && void 0 !== t ? t : [])
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function() {
            ea()
        }
    })
}