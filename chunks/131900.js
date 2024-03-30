function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NativePermissionRequestType: function() {
            return l
        },
        ThumbarButtonName: function() {
            return c
        }
    });
    var r, o, i, a, u, s, l, c, f = n("512722"),
        d = n.n(f),
        _ = n("746825"),
        E = n("967888"),
        p = n("242880"),
        m = n("660939"),
        y = n("374550"),
        I = n("822853"),
        h = n("281767"),
        O = n("413135").Buffer;

    function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function S(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function v(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    S(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    S(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function g(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function A(e, t) {
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
        }(e, t) || R(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function N(e) {
        return function(e) {
            if (Array.isArray(e)) return T(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || R(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function R(e, t) {
        if (e) {
            if ("string" == typeof e) return T(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(e, t)
        }
    }

    function C(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var P = window.DiscordNative,
        D = ["jpg", "jpeg", "png"],
        L = null,
        M = null,
        U = null,
        w = {};
    null != P && (L = P.remoteApp.getVersion().split(".").map(function(e) {
        return parseInt(e)
    }), U = null === (i = (a = P.remoteApp).getModuleVersions) || void 0 === i ? void 0 : i.call(a), M = null === (u = (s = P.remoteApp).getBuildNumber) || void 0 === u ? void 0 : u.call(s));
    var k = new Set(["discord_erlpack", "discord_game_utils", "discord_rpc", "discord_spellcheck", "discord_utils", "discord_voice"]),
        G = !1;

    function B(e) {
        return j.apply(this, arguments)
    }

    function j() {
        return (j = v(function(e) {
            var t, n, r;
            return C(this, function(o) {
                switch (o.label) {
                    case 0:
                        return t = {
                            method: "GET",
                            mode: "cors"
                        }, [4, fetch(new Request(e, t))];
                    case 1:
                        return n = o.sent(), d()(200 === n.status, "Data fetch unsuccessful"), [4, n.arrayBuffer()];
                    case 2:
                        return r = o.sent(), d()(null != r, "Data is null"), [2, r]
                }
            })
        })).apply(this, arguments)
    }

    function F(e) {
        return B(e)
    }

    function V(e) {
        var t, n, r, o, i, a, u, s;
        return {
            id: w[null !== (t = e.id) && void 0 !== t ? t : ""],
            nativeProcessObserverId: parseInt(null !== (n = e.id) && void 0 !== n ? n : "", 10),
            name: null !== (r = e.gameName) && void 0 !== r ? r : e.name,
            processName: null !== (o = e.name) && void 0 !== o ? o : "",
            hidden: e.hidden,
            elevated: e.elevated,
            sandboxed: null !== (i = e.sandboxed) && void 0 !== i && i,
            lastFocused: e.lastFocused,
            exePath: e.exePath,
            exeName: e.exeName,
            cmdLine: e.cmdLine,
            distributor: e.distributor,
            sku: e.sku,
            pid: e.pid,
            pidPath: null !== (a = e.pidPath) && void 0 !== a ? a : [],
            windowHandle: null !== (u = e.windowHandle) && void 0 !== u ? u : null,
            fullscreenType: null !== (s = e.fullscreenType) && void 0 !== s ? s : m.RunningProcessFullscreenType.UNKNOWN
        }
    }(r = l || (l = {}))[r.Camera = 0] = "Camera", r[r.Microphone = 1] = "Microphone", r[r.Photo = 2] = "Photo", r[r.InputMonitoring = 3] = "InputMonitoring", r[r.ScreenRecording = 4] = "ScreenRecording", (o = c || (c = {})).VIDEO = "VIDEO", o.MUTE = "MUTE", o.DEAFEN = "DEAFEN", o.DISCONNECT = "DISCONNECT", t.default = {
        requireModule: function(e) {
            return P.nativeModules.requireModule(e)
        },
        ensureModule: function(e) {
            return y.isPlatformEmbedded ? __OVERLAY__ && k.has(e) ? Promise.resolve() : P.nativeModules.ensureModule(e) : Promise.reject(Error("not embedded"))
        },
        get canBootstrapNewUpdater() {
            return P.nativeModules.canBootstrapNewUpdater || !1
        },
        getCrashReporterMetadata: function() {
            return P.crashReporter.getMetadata()
        },
        getSetting: function(e, t) {
            return v(function() {
                return C(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, P.settings.get(e, t)];
                        case 1:
                            return [2, n.sent()]
                    }
                })
            })()
        },
        beforeUnload: function() {
            var e, t, n;
            try {
                n = this.requireModule("discord_overlay2")
            } catch (e) {}
            n && n.reset && n.reset(), n && n.disconnectAllProcesses && n.destroyHostProcess && (n.disconnectAllProcesses(), n.destroyHostProcess()), P.remotePowerMonitor.removeAllListeners(), window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN && !0 !== p.Storage.get(_.DOMAIN_MIGRATION_SUCCESS_KEY) && this.supportsFeature(h.NativeFeatures.USER_DATA_CACHE) && P.userDataCache.cacheUserData(p.Storage.stringify()), null == P || null === (t = P.window) || void 0 === t || t.close(null == P ? void 0 : null === (e = P.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY)
        },
        inputEventRegister: function(e, t, n, r) {
            !Array.isArray(t) && (t = t.toJS()), this.getDiscordUtils().inputEventRegister(parseInt(e), t.map(function(e) {
                var t = b(e, 3),
                    n = t[0],
                    r = t[1],
                    o = t[2];
                return "string" == typeof o ? [n, r, o] : [n, r]
            }), n, r)
        },
        inputEventUnregister: function(e) {
            this.getDiscordUtils().inputEventUnregister(parseInt(e))
        },
        setOnInputEventCallback: function(e) {
            y.isPlatformEmbedded && this.getDiscordUtils().inputWatchAll(e)
        },
        setFocused: function(e) {
            this.getDiscordUtils().inputSetFocused(e)
        },
        setObservedGamesCallback: function(e, t) {
            try {
                w = {};
                var n = 0;
                this.getDiscordUtils().setObservedGamesCallback(e.map(function(e) {
                    var t = ++n;
                    return null != e.id && (w[t] = e.id), A(g({}, e), {
                        cmdline: e.cmdLine,
                        id: t
                    })
                }), function(e) {
                    return t(e.map(V))
                })
            } catch (e) {}
        },
        setCandidateGamesCallback: function(e) {
            this.getDiscordUtils().setCandidateGamesCallback(function(t) {
                return e(t.map(V))
            })
        },
        clearCandidateGamesCallback: function() {
            this.getDiscordUtils().clearCandidateGamesCallback()
        },
        setGameCandidateOverrides: function(e) {
            this.getDiscordUtils().setGameCandidateOverrides(e.map(function(e) {
                return A(g({}, e), {
                    gameId: e.id,
                    gameName: e.name
                })
            }))
        },
        shouldDisplayNotifications: function() {
            return this.getDiscordUtils().shouldDisplayNotifications()
        },
        getVoiceEngine: function() {
            if (__OVERLAY__) throw Error("cannot require discord_voice in overlay");
            return G = !0, this.requireModule("discord_voice")
        },
        getDiscordUtils: function() {
            if (!G) try {
                this.getVoiceEngine()
            } catch (e) {}
            return this.requireModule("discord_utils")
        },
        isSystemDarkMode: function() {
            var e, t, n;
            return !!(0, y.isWindows)() && (null === (n = null === (e = (t = this.getDiscordUtils()).isSystemDarkMode) || void 0 === e ? void 0 : e.call(t)) || void 0 === n || n)
        },
        getGameUtils: function() {
            return this.requireModule("discord_game_utils")
        },
        getCloudSync: function() {
            return this.requireModule("discord_cloudsync")
        },
        getDispatch: function() {
            return this.requireModule("discord_dispatch")
        },
        setBadge: function(e) {
            if ("darwin" === (0, y.getPlatformName)()) {
                var t = ""; - 1 === e ? t = "•" : e > 0 && (t = "".concat(e)), P.remoteApp.dock.setBadge(t)
            } else "win32" === (0, y.getPlatformName)() ? this.send("APP_BADGE_SET", e) : "linux" === (0, y.getPlatformName)() && P.remoteApp.setBadgeCount(e >= 0 ? e : 0)
        },
        setSystemTrayIcon: function(e) {
            y.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_ICON", e)
        },
        setThumbarButtons: function(e) {
            var t, n;
            y.isPlatformEmbedded && (null === (n = P.thumbar) || void 0 === n || null === (t = n.setThumbarButtons) || void 0 === t || t.call(n, e, this.isSystemDarkMode()))
        },
        bounceDock: function(e) {
            if (y.isPlatformEmbedded) {
                var t = P.remoteApp;
                if (null != t.dock) {
                    var n = t.dock.bounce(e);
                    return v(function() {
                        var e;
                        return C(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, n];
                                case 1:
                                    return e = r.sent(), t.dock.cancelBounce(e), [2]
                            }
                        })
                    })
                }
            }
        },
        setSystemTrayApplications: function(e) {
            y.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_APPLICATIONS", e)
        },
        get architecture() {
            return y.isPlatformEmbedded ? P.process.arch : ""
        },
        get releaseChannel() {
            if (!y.isPlatformEmbedded) return "";
            var H = P.remoteApp.getReleaseChannel();
            if (null != H) return H;
            return ""
        },
        get version() {
            return L
        },
        get buildNumber() {
            return M
        },
        get moduleVersions() {
            return U
        },
        copy: function(e) {
            y.isPlatformEmbedded && P.clipboard.copy(e)
        },
        copyImage: function(e) {
            return v(function() {
                var t;
                return C(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return d()(y.isPlatformEmbedded, "Copy image method called outside native app"), d()("function" == typeof P.clipboard.copyImage, "Copy image not supported"), [4, B(e)];
                        case 1:
                            return t = n.sent(), P.clipboard.copyImage(O.from(t), e), [2]
                    }
                })
            })()
        },
        saveImage: function(e) {
            return v(function() {
                var t, n, r, o, i;
                return C(this, function(a) {
                    switch (a.label) {
                        case 0:
                            if (d()(y.isPlatformEmbedded, "Save image method called outside native app"), null == (t = I.default.toURLSafe(e))) return [2];
                            return r = null !== (n = t.pathname.split("/").pop()) && void 0 !== n ? n : "unknown", [4, B(e)];
                        case 1:
                            return o = a.sent(), i = O.from(o), P.fileManager.saveWithDialog(i, r), [2]
                    }
                })
            })()
        },
        saveFile: function(e, t) {
            return v(function() {
                var n, r, o, i, a;
                return C(this, function(u) {
                    switch (u.label) {
                        case 0:
                            if (d()(y.isPlatformEmbedded, "Save file method called outside native app"), null == (n = I.default.toURLSafe(e))) return [2];
                            return o = null !== (r = null != t ? t : n.pathname.split("/").pop()) && void 0 !== r ? r : "unknown", [4, B(e)];
                        case 1:
                            return i = u.sent(), a = O.from(i), P.fileManager.saveWithDialog(a, o), [2]
                    }
                })
            })()
        },
        canCopyImage: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (null != e) {
                var t, n, r = null === (t = I.default.toURLSafe(e)) || void 0 === t ? void 0 : t.pathname;
                if (null == r) return !1;
                var o = null === (n = r.split(".").pop()) || void 0 === n ? void 0 : n.toLowerCase();
                if (null != o && !D.includes(o)) return !1
            }
            return "function" == typeof P.clipboard.copyImage
        },
        cut: function() {
            y.isPlatformEmbedded && P.clipboard.cut()
        },
        paste: function() {
            y.isPlatformEmbedded && P.clipboard.paste()
        },
        readClipboard: function() {
            return y.isPlatformEmbedded ? P.clipboard.read() : ""
        },
        on: function(e, t) {
            P.ipc.on(e, t)
        },
        invoke: function(e) {
            for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
            return (t = P.ipc).invoke.apply(t, [e].concat(N(r)))
        },
        send: function(e) {
            for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
            (t = P.ipc).send.apply(t, [e].concat(N(r)))
        },
        flashFrame: function(e) {
            P.window.flashFrame(e)
        },
        webAuthnRegister: function(e) {
            return P.nativeModules.ensureModule("discord_webauthn").then(function() {
                return P.webAuthn.webAuthnRegister(e)
            })
        },
        webAuthnAuthenticate: function(e) {
            return P.nativeModules.ensureModule("discord_webauthn").then(function() {
                return P.webAuthn.webAuthnAuthenticate(e)
            })
        },
        minimize: function(e) {
            P.window.minimize(e)
        },
        restore: function(e) {
            P.window.restore(e)
        },
        maximize: function(e) {
            P.window.maximize(e)
        },
        focus: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t && (0, y.isWindows)() && this.minimize(null), P.window.focus(t, e)
        },
        blur: function() {
            y.isPlatformEmbedded && null != P.window.blur ? P.window.blur() : window.blur()
        },
        fullscreen: function(e) {
            P.window.fullscreen(e)
        },
        close: function(e) {
            P.window.close(e)
        },
        setAlwaysOnTop: function(e, t) {
            "function" == typeof P.window.setAlwaysOnTop && P.window.setAlwaysOnTop(e, t)
        },
        isAlwaysOnTop: function(e) {
            return v(function() {
                var t;
                return C(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (t = !1, "function" != typeof P.window.isAlwaysOnTop) return [3, 2];
                            return [4, P.window.isAlwaysOnTop(e)];
                        case 1:
                            t = n.sent(), n.label = 2;
                        case 2:
                            return [2, t]
                    }
                })
            })()
        },
        purgeMemory: function() {
            y.isPlatformEmbedded && P.processUtils.purgeMemory()
        },
        updateCrashReporter: function(e) {
            P.crashReporter.updateCrashReporter(e)
        },
        triggerJSException: function(e) {
            P.crashReporter.triggerJSException(e)
        },
        flushDNSCache: function() {
            y.isPlatformEmbedded && P.processUtils.flushDNSCache()
        },
        supportsFeature: function(e) {
            return P.features.supports(e)
        },
        getEnableHardwareAcceleration: function() {
            return !y.isPlatformEmbedded || !__OVERLAY__ && P.gpuSettings.getEnableHardwareAcceleration()
        },
        setEnableHardwareAcceleration: function(e) {
            P.gpuSettings.setEnableHardwareAcceleration(e)
        },
        setChromiumSwitches: function(e) {
            P.gpuSettings.setChromiumSwitches(e)
        },
        getGPUDriverVersions: function() {
            return (0, y.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions ? this.getDiscordUtils().getGPUDriverVersions() : Promise.resolve(Object.freeze({}))
        },
        setZoomFactor: function(e) {
            return !!y.isPlatformEmbedded && (P.window.setZoomFactor(e), !0)
        },
        setBackgroundThrottling: function(e) {
            null != P.window.setBackgroundThrottling ? P.window.setBackgroundThrottling(e) : P.window.webContents.setBackgroundThrottling(e)
        },
        getPidFromDesktopSource: function(e) {
            if (!((0, y.isWindows)() || (0, y.isMac)()) || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
            var t = null == e ? void 0 : e.split(":"),
                n = null == t ? void 0 : t[0];
            if ("window" === n) {
                var r, o = null !== (r = null == t ? void 0 : t[1]) && void 0 !== r ? r : "",
                    i = this.getDiscordUtils().getPidFromWindowHandle(o);
                return null == i || 0 === i ? null : i
            }
            if (n.startsWith("screen")) return 1;
            return null
        },
        getDesktopSourceFromPid: function(e) {
            if (!(0, y.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
            var t = this.getDiscordUtils().getWindowHandleFromPid(e);
            return null == t || 0 === t.length ? null : ["window", t, "0"].join(":")
        },
        generateSessionFromPid: function(e) {
            return this.getDiscordUtils().generateSessionFromPid(e)
        },
        getAudioPid: function(e) {
            return null == this.getDiscordUtils().getAudioPid || null == e ? e : this.getDiscordUtils().getAudioPid(e)
        },
        setForegroundProcess: function(e) {
            var t = this.getDiscordUtils().setForegroundProcess;
            return null != t && t(e)
        },
        getDiscordMemoryUsage: function() {
            var e = this.getDiscordUtils().getDiscordMemoryUsage;
            return null != e ? e() : null
        },
        getDiscordMemoryUsageElectronRenderer: function() {
            var e = this.getDiscordUtils().getDiscordMemoryUsageElectronRenderer;
            return null == e ? void 0 : e()
        },
        showOpenDialog: function(e) {
            return P.fileManager.showOpenDialog({
                properties: e
            })
        },
        flushStorageData: function() {
            return y.isPlatformEmbedded ? new Promise(function(e, t) {
                null != P.processUtils.flushStorageData ? P.processUtils.flushStorageData(function(n) {
                    return null != n ? t(Error(n)) : e()
                }) : e()
            }) : Promise.resolve()
        },
        flushCookies: function() {
            return y.isPlatformEmbedded ? new Promise(function(e, t) {
                null != P.processUtils.flushCookies ? P.processUtils.flushCookies(function(n) {
                    return null != n ? t(Error(n)) : e()
                }) : e()
            }) : Promise.resolve()
        },
        setCrashInformation: function(e, t) {
            var n;
            y.isPlatformEmbedded && (null == P ? void 0 : null === (n = P.processUtils) || void 0 === n ? void 0 : n.setCrashInformation) != null && P.processUtils.setCrashInformation(e, t)
        },
        blockDisplaySleep: function() {
            return y.isPlatformEmbedded && null != P.powerSaveBlocker ? P.powerSaveBlocker.blockDisplaySleep() : null
        },
        unblockDisplaySleep: function(e) {
            y.isPlatformEmbedded && null != P.powerSaveBlocker && P.powerSaveBlocker.unblockDisplaySleep(e)
        },
        cleanupDisplaySleep: function() {
            y.isPlatformEmbedded && null != P.powerSaveBlocker && P.powerSaveBlocker.cleanupDisplaySleep()
        },
        relaunch: function() {
            y.isPlatformEmbedded && null != P.remoteApp.relaunch && P.remoteApp.relaunch()
        },
        makeChunkedRequest: function(e, t, n) {
            var r = "".concat((0, E.getAPIBaseURL)()).concat(e);
            if (!y.isPlatformEmbedded) return Promise.reject(Error("Not embedded!"));
            if (null == P.http) return Promise.reject(Error("HTTP module not available"));
            var o = g({
                    maxBps: 8e3,
                    chunkInterval: 50,
                    contentType: "application/json"
                }, n),
                i = o.method,
                a = o.maxBps,
                u = o.token,
                s = o.chunkInterval,
                l = o.contentType,
                c = t;
            "application/json" === l && (c = JSON.stringify(t));
            for (var f = s / 1e3 * a, d = Math.ceil(c.length / f), _ = Array(d), p = 0; p < d; p++) {
                var m = p * f;
                _[p] = c.substring(m, m + f)
            }
            return new Promise(function(e, t) {
                null != P.http && P.http.makeChunkedRequest(r, _, {
                    method: i,
                    chunkInterval: s,
                    contentType: l,
                    token: u
                }, function(n, r) {
                    return null != n ? t(n) : r.status >= 400 ? t(Error(r.body)) : void e(r)
                })
            })
        },
        submitLiveCrashReport: function(e) {
            if (!(0, y.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
            var t = this.getCrashReporterMetadata(),
                n = P.app.getReleaseChannel(),
                r = null == t ? void 0 : t.sentry;
            return this.getDiscordUtils().submitLiveCrashReport(n, g({}, r, e))
        },
        crash: function(e) {
            var t = this.getDiscordUtils().crash;
            return null != t && (t(e), !0)
        },
        setApplicationBackgroundColor: function(e) {
            P.ipc.send("SETTINGS_UPDATE_BACKGROUND_COLOR", e)
        },
        initializeExitHook: function() {
            var e = this.getDiscordUtils().initializeExitHook;
            null != e && e()
        },
        asyncify: function(e) {
            return new Promise(function(t, n) {
                e(t)
            })
        },
        IsGameDisplayModeUpdateSupported: function() {
            return null != this.getDiscordUtils().gameDisplayModeUpdate
        },
        GameDisplayModeUpdate: function(e) {
            var t = this.getDiscordUtils().gameDisplayModeUpdate;
            return null != t && null != e && t(e)
        },
        GameDisplayModeIsGameSupported: function(e) {
            var t = this.getDiscordUtils().gameDisplayModeIsSupported;
            return null != t && null != e && t(e)
        },
        GetWindowFullscreenTypeByPid: function(e, t, n) {
            var r, o = this.getDiscordUtils().getWindowFullscreenTypeByPid,
                i = 0 !== e && null != o && null != t ? o(e, t) : null;
            return -1 === i && (i = null), null !== (r = null != i ? i : n) && void 0 !== r ? r : m.RunningProcessFullscreenType.UNKNOWN
        },
        isModuleVersionAtLeast: function(e, t) {
            var n = N(null != L ? L : [0, 0, 0]);
            n.push(null !== (s = null === (u = this.moduleVersions) || void 0 === u ? void 0 : u[e]) && void 0 !== s ? s : 0);
            var r = null !== (l = t[this.releaseChannel]) && void 0 !== l ? l : t.stable,
                o = !0,
                i = !1,
                a = void 0;
            try {
                for (var u, s, l, c, f = n.entries()[Symbol.iterator](); !(o = (c = f.next()).done); o = !0) {
                    var d = b(c.value, 2),
                        _ = d[0],
                        E = d[1];
                    if (E > r[_]) return !0;
                    if (E < r[_]) return !1
                }
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    !o && null != f.return && f.return()
                } finally {
                    if (i) throw a
                }
            }
            return !0
        }
    }
}