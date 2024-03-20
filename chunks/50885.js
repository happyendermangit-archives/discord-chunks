function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        NativePermissionRequestType: function() {
            return a
        },
        ThumbarButtonName: function() {
            return i
        },
        default: function() {
            return y
        }
    }), E("222007"), E("70102"), E("424973");
    var t, o, n, r, a, i, I, s, T = E("627445"),
        S = E.n(T),
        N = E("817792"),
        O = E("872717"),
        A = E("95410"),
        R = E("115718"),
        l = E("773336"),
        u = E("253981"),
        L = E("49111"),
        C = E("446825").Buffer;
    let c = window.DiscordNative,
        D = ["jpg", "jpeg", "png"],
        d = null,
        U = null,
        M = null,
        h = {};
    null != c && (d = c.remoteApp.getVersion().split(".").map(e => parseInt(e)), M = null === (t = (o = c.remoteApp).getModuleVersions) || void 0 === t ? void 0 : t.call(o), U = null === (n = (r = c.remoteApp).getBuildNumber) || void 0 === n ? void 0 : n.call(r));
    let P = new Set(["discord_erlpack", "discord_game_utils", "discord_rpc", "discord_spellcheck", "discord_utils", "discord_voice"]),
        m = !1;
    async function G(e) {
        let _ = await fetch(new Request(e, {
            method: "GET",
            mode: "cors"
        }));
        S(200 === _.status, "Data fetch unsuccessful");
        let E = await _.arrayBuffer();
        return S(null != E, "Data is null"), E
    }

    function p(e) {
        return G(e)
    }

    function g(e) {
        var _, E, t, o, n, r, a, i;
        return {
            id: h[null !== (_ = e.id) && void 0 !== _ ? _ : ""],
            nativeProcessObserverId: parseInt(null !== (E = e.id) && void 0 !== E ? E : "", 10),
            name: null !== (t = e.gameName) && void 0 !== t ? t : e.name,
            processName: null !== (o = e.name) && void 0 !== o ? o : "",
            hidden: e.hidden,
            elevated: e.elevated,
            sandboxed: null !== (n = e.sandboxed) && void 0 !== n && n,
            lastFocused: e.lastFocused,
            exePath: e.exePath,
            exeName: e.exeName,
            cmdLine: e.cmdLine,
            distributor: e.distributor,
            sku: e.sku,
            pid: e.pid,
            pidPath: null !== (r = e.pidPath) && void 0 !== r ? r : [],
            windowHandle: null !== (a = e.windowHandle) && void 0 !== a ? a : null,
            fullscreenType: null !== (i = e.fullscreenType) && void 0 !== i ? i : R.RunningProcessFullscreenType.UNKNOWN
        }
    }(I = a || (a = {}))[I.Camera = 0] = "Camera", I[I.Microphone = 1] = "Microphone", I[I.Photo = 2] = "Photo", I[I.InputMonitoring = 3] = "InputMonitoring", I[I.ScreenRecording = 4] = "ScreenRecording", (s = i || (i = {})).VIDEO = "VIDEO", s.MUTE = "MUTE", s.DEAFEN = "DEAFEN", s.DISCONNECT = "DISCONNECT";
    var y = {
        requireModule: e => c.nativeModules.requireModule(e),
        ensureModule: e => l.isPlatformEmbedded ? __OVERLAY__ && P.has(e) ? Promise.resolve() : c.nativeModules.ensureModule(e) : Promise.reject(Error("not embedded")),
        get canBootstrapNewUpdater() {
            return c.nativeModules.canBootstrapNewUpdater || !1
        },
        getCrashReporterMetadata: () => c.crashReporter.getMetadata(),
        getSetting: async (e, _) => await c.settings.get(e, _),
        beforeUnload() {
            var e, _;
            let E;
            try {
                E = this.requireModule("discord_overlay2")
            } catch (e) {}
            E && E.reset && E.reset(), E && E.disconnectAllProcesses && E.destroyHostProcess && (E.disconnectAllProcesses(), E.destroyHostProcess()), c.remotePowerMonitor.removeAllListeners(), window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN && !0 !== A.default.get(N.DOMAIN_MIGRATION_SUCCESS_KEY) && this.supportsFeature(L.NativeFeatures.USER_DATA_CACHE) && c.userDataCache.cacheUserData(A.default.stringify()), null == c || null === (_ = c.window) || void 0 === _ || _.close(null == c ? void 0 : null === (e = c.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY)
        },
        inputEventRegister(e, _, E, t) {
            !Array.isArray(_) && (_ = _.toJS()), this.getDiscordUtils().inputEventRegister(parseInt(e), _.map(e => {
                let [_, E, t] = e;
                return "string" == typeof t ? [_, E, t] : [_, E]
            }), E, t)
        },
        inputEventUnregister(e) {
            this.getDiscordUtils().inputEventUnregister(parseInt(e))
        },
        setOnInputEventCallback(e) {
            l.isPlatformEmbedded && this.getDiscordUtils().inputWatchAll(e)
        },
        setFocused(e) {
            this.getDiscordUtils().inputSetFocused(e)
        },
        setObservedGamesCallback(e, _) {
            try {
                h = {};
                let E = 0;
                this.getDiscordUtils().setObservedGamesCallback(e.map(e => {
                    let _ = ++E;
                    return null != e.id && (h[_] = e.id), {
                        ...e,
                        cmdline: e.cmdLine,
                        id: _
                    }
                }), e => _(e.map(g)))
            } catch (e) {}
        },
        setCandidateGamesCallback(e) {
            this.getDiscordUtils().setCandidateGamesCallback(_ => e(_.map(g)))
        },
        clearCandidateGamesCallback() {
            this.getDiscordUtils().clearCandidateGamesCallback()
        },
        setGameCandidateOverrides(e) {
            this.getDiscordUtils().setGameCandidateOverrides(e.map(e => ({
                ...e,
                gameId: e.id,
                gameName: e.name
            })))
        },
        shouldDisplayNotifications() {
            return this.getDiscordUtils().shouldDisplayNotifications()
        },
        getVoiceEngine() {
            if (__OVERLAY__) throw Error("cannot require discord_voice in overlay");
            return m = !0, this.requireModule("discord_voice")
        },
        getDiscordUtils() {
            if (!m) try {
                this.getVoiceEngine()
            } catch (e) {}
            return this.requireModule("discord_utils")
        },
        isSystemDarkMode() {
            var e, _, E;
            return !!(0, l.isWindows)() && (null === (E = null === (e = (_ = this.getDiscordUtils()).isSystemDarkMode) || void 0 === e ? void 0 : e.call(_)) || void 0 === E || E)
        },
        getGameUtils() {
            return this.requireModule("discord_game_utils")
        },
        getCloudSync() {
            return this.requireModule("discord_cloudsync")
        },
        getDispatch() {
            return this.requireModule("discord_dispatch")
        },
        setBadge(e) {
            if ("darwin" === (0, l.getPlatformName)()) {
                let _ = ""; - 1 === e ? _ = "•" : e > 0 && (_ = "".concat(e)), c.remoteApp.dock.setBadge(_)
            } else "win32" === (0, l.getPlatformName)() ? this.send("APP_BADGE_SET", e) : "linux" === (0, l.getPlatformName)() && c.remoteApp.setBadgeCount(e >= 0 ? e : 0)
        },
        setSystemTrayIcon(e) {
            l.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_ICON", e)
        },
        setThumbarButtons(e) {
            var _, E;
            l.isPlatformEmbedded && (null === (E = c.thumbar) || void 0 === E || null === (_ = E.setThumbarButtons) || void 0 === _ || _.call(E, e, this.isSystemDarkMode()))
        },
        bounceDock(e) {
            if (l.isPlatformEmbedded) {
                let _ = c.remoteApp;
                if (null != _.dock) {
                    let E = _.dock.bounce(e);
                    return async () => {
                        let e = await E;
                        _.dock.cancelBounce(e)
                    }
                }
            }
        },
        setSystemTrayApplications(e) {
            l.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_APPLICATIONS", e)
        },
        get architecture() {
            return l.isPlatformEmbedded ? c.process.arch : ""
        },
        get releaseChannel() {
            if (!l.isPlatformEmbedded) return "";
            let e = c.remoteApp.getReleaseChannel();
            if (null != e) return e;
            return ""
        },
        get version() {
            return d
        },
        get buildNumber() {
            return U
        },
        get moduleVersions() {
            return M
        },
        copy(e) {
            l.isPlatformEmbedded && c.clipboard.copy(e)
        },
        async copyImage(e) {
            S(l.isPlatformEmbedded, "Copy image method called outside native app"), S("function" == typeof c.clipboard.copyImage, "Copy image not supported");
            let _ = await G(e);
            c.clipboard.copyImage(C.from(_), e)
        },
        async saveImage(e) {
            var _;
            S(l.isPlatformEmbedded, "Save image method called outside native app");
            let E = u.default.toURLSafe(e);
            if (null == E) return;
            let t = null !== (_ = E.pathname.split("/").pop()) && void 0 !== _ ? _ : "unknown",
                o = await G(e),
                n = C.from(o);
            c.fileManager.saveWithDialog(n, t)
        },
        async saveFile(e, _) {
            var E;
            S(l.isPlatformEmbedded, "Save file method called outside native app");
            let t = u.default.toURLSafe(e);
            if (null == t) return;
            let o = null !== (E = null != _ ? _ : t.pathname.split("/").pop()) && void 0 !== E ? E : "unknown",
                n = await G(e),
                r = C.from(n);
            c.fileManager.saveWithDialog(r, o)
        },
        canCopyImage() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (null != e) {
                var _, E;
                let t = null === (_ = u.default.toURLSafe(e)) || void 0 === _ ? void 0 : _.pathname;
                if (null == t) return !1;
                let o = null === (E = t.split(".").pop()) || void 0 === E ? void 0 : E.toLowerCase();
                if (null != o && !D.includes(o)) return !1
            }
            return "function" == typeof c.clipboard.copyImage
        },
        cut() {
            l.isPlatformEmbedded && c.clipboard.cut()
        },
        paste() {
            l.isPlatformEmbedded && c.clipboard.paste()
        },
        readClipboard: () => l.isPlatformEmbedded ? c.clipboard.read() : "",
        on(e, _) {
            c.ipc.on(e, _)
        },
        invoke(e) {
            for (var _ = arguments.length, E = Array(_ > 1 ? _ - 1 : 0), t = 1; t < _; t++) E[t - 1] = arguments[t];
            return c.ipc.invoke(e, ...E)
        },
        send(e) {
            for (var _ = arguments.length, E = Array(_ > 1 ? _ - 1 : 0), t = 1; t < _; t++) E[t - 1] = arguments[t];
            c.ipc.send(e, ...E)
        },
        flashFrame(e) {
            c.window.flashFrame(e)
        },
        webAuthnRegister: e => c.nativeModules.ensureModule("discord_webauthn").then(() => c.webAuthn.webAuthnRegister(e)),
        webAuthnAuthenticate: e => c.nativeModules.ensureModule("discord_webauthn").then(() => c.webAuthn.webAuthnAuthenticate(e)),
        minimize(e) {
            c.window.minimize(e)
        },
        restore(e) {
            c.window.restore(e)
        },
        maximize(e) {
            c.window.maximize(e)
        },
        focus(e) {
            let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            _ && (0, l.isWindows)() && this.minimize(null), c.window.focus(_, e)
        },
        blur() {
            l.isPlatformEmbedded && null != c.window.blur ? c.window.blur() : window.blur()
        },
        fullscreen(e) {
            c.window.fullscreen(e)
        },
        close(e) {
            c.window.close(e)
        },
        setAlwaysOnTop(e, _) {
            "function" == typeof c.window.setAlwaysOnTop && c.window.setAlwaysOnTop(e, _)
        },
        async isAlwaysOnTop(e) {
            let _ = !1;
            return "function" == typeof c.window.isAlwaysOnTop && (_ = await c.window.isAlwaysOnTop(e)), _
        },
        purgeMemory() {
            l.isPlatformEmbedded && c.processUtils.purgeMemory()
        },
        updateCrashReporter(e) {
            c.crashReporter.updateCrashReporter(e)
        },
        triggerJSException(e) {
            c.crashReporter.triggerJSException(e)
        },
        flushDNSCache() {
            l.isPlatformEmbedded && c.processUtils.flushDNSCache()
        },
        supportsFeature: e => c.features.supports(e),
        getEnableHardwareAcceleration: () => !l.isPlatformEmbedded || !__OVERLAY__ && c.gpuSettings.getEnableHardwareAcceleration(),
        setEnableHardwareAcceleration(e) {
            c.gpuSettings.setEnableHardwareAcceleration(e)
        },
        setChromiumSwitches(e) {
            c.gpuSettings.setChromiumSwitches(e)
        },
        getGPUDriverVersions() {
            return (0, l.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions ? this.getDiscordUtils().getGPUDriverVersions() : Promise.resolve(Object.freeze({}))
        },
        setZoomFactor: e => !!l.isPlatformEmbedded && (c.window.setZoomFactor(e), !0),
        setBackgroundThrottling(e) {
            null != c.window.setBackgroundThrottling ? c.window.setBackgroundThrottling(e) : c.window.webContents.setBackgroundThrottling(e)
        },
        getPidFromDesktopSource(e) {
            if (!((0, l.isWindows)() || (0, l.isMac)()) || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
            let _ = null == e ? void 0 : e.split(":"),
                E = null == _ ? void 0 : _[0];
            if ("window" === E) {
                var t;
                let e = null !== (t = null == _ ? void 0 : _[1]) && void 0 !== t ? t : "",
                    E = this.getDiscordUtils().getPidFromWindowHandle(e);
                return null == E || 0 === E ? null : E
            }
            if (E.startsWith("screen")) return 1;
            return null
        },
        getDesktopSourceFromPid(e) {
            if (!(0, l.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
            let _ = this.getDiscordUtils().getWindowHandleFromPid(e);
            return null == _ || 0 === _.length ? null : ["window", _, "0"].join(":")
        },
        generateSessionFromPid(e) {
            return this.getDiscordUtils().generateSessionFromPid(e)
        },
        getAudioPid(e) {
            return null == this.getDiscordUtils().getAudioPid || null == e ? e : this.getDiscordUtils().getAudioPid(e)
        },
        setForegroundProcess(e) {
            let {
                setForegroundProcess: _
            } = this.getDiscordUtils();
            return null != _ && _(e)
        },
        getDiscordMemoryUsage() {
            let {
                getDiscordMemoryUsage: e
            } = this.getDiscordUtils();
            return null != e ? e() : null
        },
        getDiscordMemoryUsageElectronRenderer() {
            let {
                getDiscordMemoryUsageElectronRenderer: e
            } = this.getDiscordUtils();
            return null == e ? void 0 : e()
        },
        showOpenDialog: e => c.fileManager.showOpenDialog({
            properties: e
        }),
        flushStorageData: () => l.isPlatformEmbedded ? new Promise((e, _) => {
            null != c.processUtils.flushStorageData ? c.processUtils.flushStorageData(E => null != E ? _(Error(E)) : e()) : e()
        }) : Promise.resolve(),
        flushCookies: () => l.isPlatformEmbedded ? new Promise((e, _) => {
            null != c.processUtils.flushCookies ? c.processUtils.flushCookies(E => null != E ? _(Error(E)) : e()) : e()
        }) : Promise.resolve(),
        setCrashInformation(e, _) {
            var E;
            l.isPlatformEmbedded && (null == c ? void 0 : null === (E = c.processUtils) || void 0 === E ? void 0 : E.setCrashInformation) != null && c.processUtils.setCrashInformation(e, _)
        },
        blockDisplaySleep: () => l.isPlatformEmbedded && null != c.powerSaveBlocker ? c.powerSaveBlocker.blockDisplaySleep() : null,
        unblockDisplaySleep(e) {
            l.isPlatformEmbedded && null != c.powerSaveBlocker && c.powerSaveBlocker.unblockDisplaySleep(e)
        },
        cleanupDisplaySleep() {
            l.isPlatformEmbedded && null != c.powerSaveBlocker && c.powerSaveBlocker.cleanupDisplaySleep()
        },
        relaunch() {
            l.isPlatformEmbedded && null != c.remoteApp.relaunch && c.remoteApp.relaunch()
        },
        makeChunkedRequest(e, _, E) {
            let t = "".concat(O.default.getAPIBaseURL()).concat(e);
            if (!l.isPlatformEmbedded) return Promise.reject(Error("Not embedded!"));
            if (null == c.http) return Promise.reject(Error("HTTP module not available"));
            let {
                method: o,
                maxBps: n,
                token: r,
                chunkInterval: a,
                contentType: i
            } = {
                maxBps: 8e3,
                chunkInterval: 50,
                contentType: "application/json",
                ...E
            }, I = _;
            "application/json" === i && (I = JSON.stringify(_));
            let s = n * (a / 1e3),
                T = Math.ceil(I.length / s),
                S = Array(T);
            for (let e = 0; e < T; e++) {
                let _ = e * s;
                S[e] = I.substring(_, _ + s)
            }
            return new Promise((e, _) => {
                null != c.http && c.http.makeChunkedRequest(t, S, {
                    method: o,
                    chunkInterval: a,
                    contentType: i,
                    token: r
                }, (E, t) => null != E ? _(E) : t.status >= 400 ? _(Error(t.body)) : void e(t))
            })
        },
        submitLiveCrashReport(e) {
            if (!(0, l.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
            let _ = this.getCrashReporterMetadata(),
                E = c.app.getReleaseChannel(),
                t = null == _ ? void 0 : _.sentry;
            return this.getDiscordUtils().submitLiveCrashReport(E, {
                ...t,
                ...e
            })
        },
        crash(e) {
            let _ = this.getDiscordUtils().crash;
            return null != _ && (_(e), !0)
        },
        setApplicationBackgroundColor(e) {
            c.ipc.send("SETTINGS_UPDATE_BACKGROUND_COLOR", e)
        },
        initializeExitHook() {
            let {
                initializeExitHook: e
            } = this.getDiscordUtils();
            null != e && e()
        },
        asyncify: e => new Promise((_, E) => {
            e(_)
        }),
        IsGameDisplayModeUpdateSupported() {
            let {
                gameDisplayModeUpdate: e
            } = this.getDiscordUtils();
            return null != e
        },
        GameDisplayModeUpdate(e) {
            let {
                gameDisplayModeUpdate: _
            } = this.getDiscordUtils();
            return null != _ && null != e && _(e)
        },
        GameDisplayModeIsGameSupported(e) {
            let {
                gameDisplayModeIsSupported: _
            } = this.getDiscordUtils();
            return null != _ && null != e && _(e)
        },
        GetWindowFullscreenTypeByPid(e, _, E) {
            var t;
            let {
                getWindowFullscreenTypeByPid: o
            } = this.getDiscordUtils(), n = 0 !== e && null != o && null != _ ? o(e, _) : null;
            return -1 === n && (n = null), null !== (t = null != n ? n : E) && void 0 !== t ? t : R.RunningProcessFullscreenType.UNKNOWN
        },
        isModuleVersionAtLeast(e, _) {
            var E, t, o;
            let n = [...null != d ? d : [0, 0, 0]];
            n.push(null !== (t = null === (E = this.moduleVersions) || void 0 === E ? void 0 : E[e]) && void 0 !== t ? t : 0);
            let r = null !== (o = _[this.releaseChannel]) && void 0 !== o ? o : _.stable;
            for (let [e, _] of n.entries()) {
                if (_ > r[e]) break;
                if (_ < r[e]) return !1
            }
            return !0
        }
    }
}