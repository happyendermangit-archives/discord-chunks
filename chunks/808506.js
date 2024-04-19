function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        getOverlayURL: function() {
            return el
        }
    }), n("47120"), n("411104"), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817"), n("642549"), n("610138"), n("216116"), n("78328"), n("815648"), n("177593");
    var s, a, o, l, u, d, _ = n("807864"),
        c = n("442837"),
        E = n("570140"),
        I = n("26151"),
        T = n("224706"),
        f = n("765250"),
        S = n("13245"),
        h = n("287734"),
        A = n("579806"),
        m = n("887278"),
        N = n("490029"),
        p = n("710845"),
        O = n("594190"),
        R = n("454991"),
        C = n("633565"),
        g = n("48481"),
        L = n("314897"),
        D = n("77498"),
        v = n("355863"),
        M = n("449224"),
        y = n("626135"),
        P = n("866119"),
        U = n("671999"),
        b = n("998502"),
        G = n("145597"),
        w = n("981631"),
        B = n("987650");
    (o = s || (s = {})).ATTACHING = "ATTACHING", o.CONNECTING = "CONNECTING", o.CONNECTED = "CONNECTED", o.READY = "READY", o.CRASHED = "CRASHED", o.CONNECT_FAILED = "CONNECT_FAILED", o.HOOK_FAILED = "HOOK_FAILED";
    let k = {},
        F = new Map,
        V = !1,
        x = new Set,
        H = !1,
        Y = !1,
        j = !1,
        W = null,
        K = null,
        z = "",
        X = new Set,
        Q = !1,
        q = new Set(["CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "WINDOW_INIT", "WINDOW_FULLSCREEN_CHANGE", "WINDOW_FOCUS", "WINDOW_RESIZED", "WINDOW_HIDDEN", "CHANNEL_SELECT", "DELAYED_CHANNEL_SELECT", "DELAYED_SELECT_FLUSH", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "MESSAGE_START_EDIT", "MESSAGE_UPDATE_EDIT", "MESSAGE_END_EDIT", "APP_VIEW_SET_HOME_LINK", "APPLICATION_STORE_LOCATION_CHANGE", "LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGIN_MFA_STEP", "LOGIN_MFA", "LOGIN_MFA_FAILURE", "LOGIN_MFA_SMS", "LOGIN_MFA_SMS_REQUEST_SUCCESS", "LOGIN_MFA_SMS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_RESET", "FINGERPRINT", "REGISTER", "REGISTER_SUCCESS", "REGISTER_FAILURE", "VERIFY_FAILURE", "VERIFY_SUCCESS", "START_SESSION", "FORGOT_PASSWORD_SENT", "UPDATE_TOKEN", "SET_CONSENT_REQUIRED", "CONTEXT_MENU_OPEN", "CONTEXT_MENU_CLOSE", "MODAL_PUSH", "MODAL_POP", "MODAL_UPDATE", "MODAL_POP_ALL", "GUILD_SETTINGS_OPEN", "USER_SETTINGS_MODAL_OPEN", "CHANNEL_SETTINGS_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "EMAIL_VERIFICATION_MODAL_OPEN", "MENTION_MODAL_OPEN", "QUICKSWITCHER_SHOW", "SEARCH_MODAL_OPEN", "IFE_EXPERIMENT_SEARCH_MODAL_OPEN", "INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "GUILD_SETTINGS_CLOSE", "USER_SETTINGS_MODAL_CLOSE", "CHANNEL_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "MENTION_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "SEARCH_MODAL_CLOSE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "QUICKSWITCHER_SHOW", "QUICKSWITCHER_HIDE", "QUICKSWITCHER_SWITCH_TO", "QUICKSWITCHER_SEARCH", "QUICKSWITCHER_SELECT", "UPDATE_CHANNEL_DIMENSIONS", "UPDATE_CHANNEL_LIST_DIMENSIONS", "UPDATE_GUILD_LIST_DIMENSIONS", "TRACK", "CHANNEL_SETTINGS_OPEN", "CHANNEL_SETTINGS_INIT", "CHANNEL_SETTINGS_CLOSE", "GUILD_SETTINGS_INIT", "GUILD_SETTINGS_OPEN", "GUILD_SETTINGS_CLOSE", "TUTORIAL_INDICATOR_SHOW", "TUTORIAL_INDICATOR_HIDE", "TUTORIAL_INDICATOR_SUPPRESS_ALL", "USER_SETTINGS_ACCOUNT_INIT", "USER_SETTINGS_ACCOUNT_CLOSE", "NOTICE_SHOW", "NOTICE_DISMISS", "NOTICE_DISABLE", "SEARCH_EDITOR_STATE_CHANGE", "SEARCH_EDITOR_STATE_CLEAR", "SEARCH_START", "SEARCH_FINISH", "MOD_VIEW_SEARCH_FINISH", "SEARCH_INDEXING", "SEARCH_CLEAR", "SEARCH_ENSURE_SEARCH_STATE", "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", "SEARCH_CLEAR_HISTORY", "SEARCH_SET_SHOW_BLOCKED_RESULTS", "LAYOUT_CREATE", "EXPERIMENT_REGISTER_LEGACY", "POPOUT_WINDOW_OPEN", "POPOUT_WINDOW_CLOSE", "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", "TYPING_START_LOCAL", "TYPING_STOP_LOCAL", "SPOTIFY_SET_ACTIVE_DEVICE", "LOAD_INVITE_SUGGESTIONS", "INVITE_SUGGESTIONS_SEARCH", "IMPERSONATE_UPDATE", "IMPERSONATE_STOP", "CREATE_PENDING_REPLY", "CREATE_SHALLOW_PENDING_REPLY", "DELETE_PENDING_REPLY", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", "GUILD_FEED_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", "APPLICATION_COMMAND_UPDATE_OPTIONS", "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", "APPLICATION_COMMAND_USED", "DCF_HANDLE_DC_SHOWN", "DCF_HANDLE_DC_DISMISSED"]),
        Z = new Set,
        J = new p.default("OverlayBridgeStore"),
        $ = "none",
        ee = (0, _.createObservableLock)({
            onContention: (e, t) => J.verbose("overlayLock contention: lastMutexCall ".concat($)),
            onContentionResolved: () => J.verbose("overlayLock contention: resolved."),
            onTimeout: (e, t) => {
                let n = "overlayLock: lastMutexCall ".concat($, "}");
                J.error(n), y.default.track(w.AnalyticEvents.OVERLAY_HOOK_RESULT, {
                    success: !1,
                    error_description: n
                })
            },
            timeoutMs: 18e4
        });

    function et(e, t) {
        return function() {
            for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
            ee(() => t(...i), e)
        }
    }

    function en(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = F.get(e);
        if ((null === n || i === n) && i !== t) {
            if (null == t ? F.delete(e) : F.set(e, t), null == t || "CRASHED" === t) {
                var r;
                W = null;
                let e = null === A.default || void 0 === A.default ? void 0 : null === (r = A.default.fileManager) || void 0 === r ? void 0 : r.uploadDiscordHookCrashes;
                null != e && e().then(e => {
                    if (Array.isArray(e) && 0 !== e.length)
                        for (let l of (J.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                            var t, n, i, r, s, a, o;
                            if (null == l) continue;
                            let e = null != l.processName ? D.default.getGameByExecutable(l.processName) : null;
                            y.default.track(w.AnalyticEvents.OVERLAY_HOOK_CRASHED, {
                                process_name: null == l ? void 0 : l.processName,
                                game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
                                game_id: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null,
                                minidump_exception_type: null !== (i = l.exceptionString) && void 0 !== i ? i : null,
                                minidump_exception_module_name: null !== (r = l.exceptionModuleName) && void 0 !== r ? r : null,
                                minidump_relative_crash_address: null !== (s = l.relativeCrashAddress) && void 0 !== s ? s : null,
                                minidump_exception_module_version: null !== (a = l.exceptionModuleVersion) && void 0 !== a ? a : null,
                                minidump_exception_module_code_id: null !== (o = l.exceptionModuleCodeId) && void 0 !== o ? o : null
                            })
                        }
                })
            }
            X.delete(e), J.info("pid=".concat(e, " status transition ").concat(null != i ? i : "DISCONNECTED", " -> ").concat(null != t ? t : "DISCONNECTED"), F), V = Array.from(F.values()).some(e => "READY" === e)
        }
    }
    async function ei(e) {
        if (b.default.supportsFeature(w.NativeFeatures.CREATE_HOST_ON_ATTACH)) {
            if (F.size > 0) {
                $ = "reconcile.getOverlayURL";
                let t = await el();
                $ = "reconcile.createHostProcess", e.createHostProcess(t, eh, ef)
            } else $ = "reconcile.destroyHostProcess", e.destroyHostProcess()
        } else if (H) {
            let t = await el();
            e.createHostProcess(t, eh, ef)
        } else e.destroyHostProcess()
    }
    async function er(e) {
        !ee.isMutexHeld() && J.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
        let t = F.get(e);
        if (null != t) {
            J.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(t));
            return
        }
        $ = "attach.getOverlayModule";
        let n = await eu();
        $ = "attach.transitionOverlayPIDStatus", en(e, "ATTACHING"), $ = "attach.attachToProcess";
        let i = await m.attachToProcess(e);
        null == i ? ($ = "attach.transitionOverlayPIDStatus (CONNECTING)", en(e, "CONNECTING", "ATTACHING"), $ = "attach.reconcileHostProcess", await ei(n), n.connectProcess(e)) : ($ = "attach.transitionOverlayPIDStatus (HOOK_FAILED)", en(e, "HOOK_FAILED", "ATTACHING"), J.warn("Could not hook to pid=".concat(e, ", error=").concat(i)))
    }
    async function es(e) {
        if (!ee.isMutexHeld() && J.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !F.has(e)) {
            J.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
            return
        }
        $ = "detach.getOverlayModule";
        let t = await eu();
        $ = "detach.transitionOverlayPIDStatus", en(e, null), e !== G.DEV_PID && ($ = "detach.cancelAttachToProcess", m.cancelAttachToProcess(e), $ = "detach.disconnectProcess", t.disconnectProcess(e)), $ = "detach.reconcileHostProcess", await ei(t)
    }
    async function ea(e) {
        var t;
        if (J.verbose("updateIntendedOverlayPIDs", {
                isConnectionOpened: j,
                action: e
            }), !ee.isMutexHeld() && J.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e), !j && null != e) {
            J.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
            return
        }
        async function n(t) {
            if (!(t in k)) {
                J.error("Unexpected. ".concat(t, " is not a tracked game?"), k, e);
                return
            }
            let n = k[t];
            delete k[t];
            try {
                await n.deconstructor()
            } catch (e) {
                J.error("Failed to deconstruct tracked game ".concat(t), e)
            }
        }
        if (null == e || !H) {
            for (let t of (J.verbose("updateIntendedOverlayPIDs: Removing all.", k, e), Object.keys(k))) await n(Number(t));
            return
        }
        for (let n of null !== (t = e.added) && void 0 !== t ? t : []) {
            let t = O.default.getGameOverlayStatus(n);
            if (J.verbose("updateIntendedOverlayPIDs: newGame", n, t), null != t && t.enabled) switch (n.pid in k && J.error("Unexpected. ".concat(n.pid, " is being added twice?"), k, e), t.overlayMethod) {
                case B.OverlayMethod.OutOfProcess:
                    let i = await eE();
                    await i.trackGame(n.pid), k[n.pid] = {
                        method: t.overlayMethod,
                        deconstructor: async () => {
                            let e = await eE();
                            await e.untrackGame(n.pid)
                        }
                    };
                    break;
                case B.OverlayMethod.Hook:
                    !F.has(n.pid) && await er(n.pid), k[n.pid] = {
                        method: t.overlayMethod,
                        deconstructor: async () => {
                            await es(n.pid)
                        }
                    };
                    break;
                case B.OverlayMethod.Disabled:
                    J.verbose("updateIntendedOverlayPIDs: disabled", n);
                    break;
                default:
                    J.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(t.overlayMethod))
            }
        }
        for (let t of e.removed) J.verbose("updateIntendedOverlayPIDs: removedGame", t), await n(t.pid)
    }
    let eo = et("updateIntendedOverlayPIDs", e => ea(e));

    function el() {
        return new Promise(e => {
            eM.addConditionalChangeListener(() => {
                if (null != i) return e(i), !1
            })
        })
    }
    let eu = (() => {
        let e = null;
        async function t() {
            if (!B.OVERLAY_SUPPORTED) throw J.error("Attempted to load overlay on an unsupported platform."), Error("Overlay is not supported on this platform.");
            try {
                return await b.default.ensureModule("discord_overlay2"),
                    function(e) {
                        for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"]) null == e[t] && (J.info("polyfilling OverlayModule.".concat(t, "(); Overlay module is probably out of date.")), e[t] = () => void 0);
                        return e
                    }(b.default.requireModule("discord_overlay2"))
            } catch (e) {
                throw J.error("failed ensuring discord_overlay2", e), e
            }
        }
        return () => (null == e && (e = t()), e)
    })();
    async function ed(e) {
        var t, n, i, r, s, a, o;
        try {
            let t = await el() + "&oop=true&pid=".concat(e);
            await (null === A.default || void 0 === A.default ? void 0 : null === (r = A.default.globalOverlay) || void 0 === r ? void 0 : null === (i = r.openWindow) || void 0 === i ? void 0 : i.call(r, t))
        } catch (e) {
            J.log("globalOverlay: Failed to open overlay: ".concat(e), e), null === A.default || void 0 === A.default || null === (a = A.default.window) || void 0 === a || a.close(null === A.default || void 0 === A.default ? void 0 : null === (s = A.default.globalOverlay) || void 0 === s ? void 0 : s.WINDOW_KEY)
        }
        return K = e, null !== (o = await (null === A.default || void 0 === A.default ? void 0 : null === (n = A.default.window) || void 0 === n ? void 0 : n.getNativeHandle(null === A.default || void 0 === A.default ? void 0 : null === (t = A.default.globalOverlay) || void 0 === t ? void 0 : t.WINDOW_KEY))) && void 0 !== o ? o : ""
    }

    function e_() {
        var e, t;
        null === A.default || void 0 === A.default || null === (t = A.default.window) || void 0 === t || t.close(null === A.default || void 0 === A.default ? void 0 : null === (e = A.default.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY), K = null
    }

    function ec(e) {
        let t = M.default.getGameForPID(e);
        S.default.setAssociatedGame(null != K ? K : -1, e, t)
    }
    let eE = (() => {
        let e = null;
        async function t() {
            if (!B.OVERLAY_SUPPORTED || !(0, G.supportsOutOfProcess)()) throw J.error("Attempted to load out of process overlay on an unsupported platform."), Error("Out of Process Overlay is not supported on this platform.");
            try {
                var e, t;
                let {
                    OutOfProcess: n
                } = await eu();
                return null == n || null === (e = n.init) || void 0 === e || e.call(n), n.setClickZoneCallback(eO), n.setHostWindowCallbacks(ed, e_, ec), n.setFocusCallback(ef), null === (t = n.setSuccessfullyShownCallback) || void 0 === t || t.call(n, eS), n
            } catch (e) {
                throw J.error("failed loading out of process overlay", e), e
            }
        }
        return () => (null == e && (e = t()), e)
    })();

    function eI() {
        return eo({
            added: O.default.getRunningGames(),
            removed: []
        })
    }
    let eT = et("setOverlayEnabled", async (e, t) => {
        if (!B.OVERLAY_SUPPORTED || H === e && Y === t) return;
        H = e, Y = t, R.OverlayStoredSettings.update({
            enabled: e,
            legacyEnabled: t
        }), eM.emitChange();
        let n = await eu(),
            {
                OutOfProcess: i
            } = n;
        (0, G.setOutOfProcessSupport)(null != i), await ea(void 0), await ei(n), H && eI()
    });

    function ef(e) {
        if (0 === e) {
            var t, n;
            if ((null !== (n = null === (t = k[null != W ? W : 0]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : B.OverlayMethod.Disabled) === B.OverlayMethod.OutOfProcess) return
        }
        S.default.setFocusedPID(0 === e ? null : e)
    }

    function eS(e) {
        S.default.successfullyShown(e)
    }

    function eh(e, t, n) {
        var i;
        let r = null === (i = O.default.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
            s = D.default.getGameByName(r),
            a = {
                game_name: r,
                game_id: null == s ? null : s.id,
                success: t,
                ...n
            };
        (0, f.createLayout)(G.OVERLAY_LAYOUT_ID, v.default.getDefaultLayout(G.OVERLAY_LAYOUT_ID), {
            width: n.graphics_width,
            height: n.graphics_height
        }), y.default.track(w.AnalyticEvents.OVERLAY_HOOK_RESULT, a), J.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), a), t ? en(e, "CONNECTED", "CONNECTING") : en(e, "CONNECT_FAILED", "CONNECTING")
    }

    function eA() {
        let e = L.default.getToken(),
            t = L.default.getId();
        null != e && N.send({
            type: w.OverlayEventTypes.DISPATCH,
            pid: null,
            token: null,
            payloads: [{
                type: "UPDATE_TOKEN",
                token: e,
                userId: t
            }]
        })
    }
    async function em(e) {
        let t = await eu();
        null != W && W !== G.DEV_PID && t.sendCommand(W, {
            message: "intercept_input",
            intercept: !e
        }), (0, G.supportsOutOfProcess)() && (await eE()).setInteractionEnabled(!e)
    }

    function eN(e) {
        if (e) {
            let t = O.default.getVisibleGame(),
                n = null == t ? null : O.default.getGameOverlayStatus(t);
            (null == n ? void 0 : n.overlayMethod) === B.OverlayMethod.OutOfProcess ? em(e) : setTimeout(() => em(e), 200)
        } else em(e)
    }
    let ep = null;

    function eO(e, t, n) {
        S.default.relayClickZoneClicked(e, t, n)
    }
    async function eR(e) {
        if (!!(0, G.supportsOutOfProcess)())(await eE()).setClickZones(e.map(e => ({
            name: e.name,
            left: e.left,
            top: e.top,
            right: e.right,
            bottom: e.bottom
        })))
    }

    function eC(e) {
        return !(Q || !V || q.has(e.type)) && ("USER_SETTINGS_PROTO_UPDATE" === e.type && (e = {
            ...e,
            settings: {
                type: e.settings.type,
                proto: (0, g.protoToB64WithType)(e.settings.type, e.settings.proto)
            }
        }), x.add(e), null == r && (r = setTimeout(eg, 1)), !1)
    }

    function eg() {
        if (null != r && (clearTimeout(r), r = null), !V) {
            x.clear();
            return
        }
        x.size > 0 && (N.send({
            type: w.OverlayEventTypes.DISPATCH,
            pid: null,
            token: null,
            payloads: Array.from(x)
        }), x.clear())
    }

    function eL(e) {
        return null != e && (0, P.constantTimeCompare)(e, z)
    }

    function eD(e) {
        switch (0, e.type) {
            case w.OverlayEventTypes.CONNECT:
                let t = L.default.getToken();
                if (null == t) break;
                (0, f.createLayout)(G.OVERLAY_LAYOUT_ID, v.default.getDefaultLayout(G.OVERLAY_LAYOUT_ID)), Promise.all([(0, C.default)(t, e.pid), c.default.PersistedStore.getAllStates()]).then(t => {
                    let [n, i] = t, {
                        pid: r,
                        token: s
                    } = e;
                    N.send({
                        type: w.OverlayEventTypes.STORAGE_SYNC,
                        pid: r,
                        token: s,
                        states: i
                    }), N.send({
                        type: w.OverlayEventTypes.DISPATCH,
                        pid: r,
                        token: s,
                        payloads: [n]
                    }), en(r, "READY"), S.default.overlayReady(r)
                });
                break;
            case w.OverlayEventTypes.DISPATCH:
                if (null != e.payloads) {
                    var n;
                    n = e.payloads, Q = !0, n.forEach(e => E.default.dispatch(e)), Q = !1
                }
                break;
            case w.OverlayEventTypes.LOG_MESSAGES:
                J.info("[overlay data received]", e.payload)
        }
    }
    class ev extends(a = c.default.Store) {
        initialize() {
            !(!B.OVERLAY_SUPPORTED || __OVERLAY__) && (this.waitFor(O.default, L.default), N.setReceiveCommandHandler(eD, eL), L.default.addChangeListener(eA), eT(R.OverlayStoredSettings.enabled, R.OverlayStoredSettings.legacyEnabled), E.default.addInterceptor(eC))
        }
        isInputLocked(e) {
            return !X.has(e)
        }
        isSupported() {
            return B.OVERLAY_SUPPORTED
        }
        get enabled() {
            return H
        }
        get legacyEnabled() {
            return Y
        }
        getFocusedPID() {
            return W
        }
        isReady(e) {
            return "READY" === F.get(e)
        }
        isCrashed(e) {
            return "CRASHED" === F.get(e)
        }
    }
    d = "OverlayBridgeStore", (u = "displayName") in(l = ev) ? Object.defineProperty(l, u, {
        value: d,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : l[u] = d;
    let eM = new ev(E.default, __OVERLAY__ ? {
        OVERLAY_RELAY_CLICK_ZONE_CLICKED: function(e) {
            let {
                normalizedMouseX: t,
                normalizedMouseY: n
            } = e;
            setTimeout(() => {
                let e = Math.ceil(t * window.innerWidth),
                    i = Math.ceil(n * window.innerHeight),
                    r = (0, U.createMouseEvent)("click", e, i);
                (0, U.dispatchEventToPoint)(r, e, i)
            }, 50)
        },
        OVERLAY_SET_ASSOCIATED_GAME: function(e) {
            if (!(0, G.isOutOfProcess)()) return;
            (0, G.setPID)(e.associatedGamePID);
            let t = () => new Promise(e => {
                    requestAnimationFrame(() => {
                        let t = new MessageChannel;
                        t.port1.onmessage = () => {
                            e()
                        }, t.port2.postMessage(void 0)
                    })
                }),
                n = 0,
                i = () => {
                    15 === n ? S.default.notifyReadyToShow(e.associatedGamePID) : (n += 1, t().then(i))
                };
            i()
        }
    } : {
        CONNECTION_OPEN: function() {
            j = !0, eI()
        },
        CONNECTION_CLOSED: function() {
            j = !1, W = null, eo(void 0)
        },
        OVERLAY_SET_ENABLED: function(e) {
            let {
                enabled: t,
                legacyEnabled: n
            } = e;
            return eT(t, n), !1
        },
        OVERLAY_FOCUSED: function(e) {
            let {
                pid: t
            } = e;
            W = t
        },
        RUNNING_GAMES_CHANGE: function(e) {
            eo(e)
        },
        OVERLAY_SET_INPUT_LOCKED: function(e) {
            let {
                locked: t,
                pid: n
            } = e, i = F.get(n);
            if (t || "READY" === i || "CRASHED" === i) {
                if (t ? X.delete(n) : X.add(n), Z.clear(), null != ep && (clearTimeout(ep), ep = null, t)) return;
                t ? eN(t) : ep = setTimeout(() => {
                    eN(t), ep = null
                }, 100)
            }
        },
        OVERLAY_ACTIVATE_REGION: function(e) {
            let {
                region: t
            } = e;
            Z.add(t), eN(!1)
        },
        OVERLAY_DEACTIVATE_ALL_REGIONS: function() {
            Z.clear(), eN(!0)
        },
        RPC_SERVER_READY: function(e) {
            let {
                port: t
            } = e;
            z = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
            let n = new URLSearchParams;
            n.append("build_id", "dcf526a2e7e1f1553c439d9b860ff1133219a9d1"), n.append("rpc", String(t)), n.append("rpc_auth_token", z), i = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(n.toString())
        },
        OVERLAY_CALL_PRIVATE_CHANNEL: function(e) {
            let {
                channelId: t,
                ring: n
            } = e;
            setImmediate(() => {
                h.default.selectPrivateChannel(t), I.default.call(t, !1, !!n)
            })
        },
        OVERLAY_JOIN_GAME: function(e) {
            let {
                userId: t,
                sessionId: n,
                applicationId: i,
                channelId: r,
                messageId: s
            } = e;
            setImmediate(() => {
                T.default.join({
                    userId: t,
                    sessionId: n,
                    applicationId: i,
                    channelId: r,
                    messageId: s
                }), null != W && S.default.setLocked(!0, W)
            })
        },
        OVERLAY_CRASHED: function(e) {
            let {
                pid: t
            } = e;
            en(t, "CRASHED")
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
            if (J.verbose("handleGameToggleOverlay", e), !("pid" in e.game)) {
                J.verbose("handleGameToggleOverlay: Game was not a RunningGame.", e);
                return
            }
            let t = [e.game];
            eo({
                added: e.newEnabledValue ? t : [],
                removed: e.newEnabledValue ? [] : t
            })
        },
        OVERLAY_SET_CLICK_ZONES: function(e) {
            let {
                zones: t
            } = e;
            eR(t)
        },
        OVERLAY_SET_ASSOCIATED_GAME: function(e) {
            var t, n;
            if ((null !== (n = null === (t = k[e.previousAssociatedGamePID]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : B.OverlayMethod.Disabled) !== B.OverlayMethod.OutOfProcess) return;
            let i = F.get(e.previousAssociatedGamePID);
            null != i && (F.delete(e.previousAssociatedGamePID), F.set(e.associatedGamePID, i)), X.delete(e.previousAssociatedGamePID), K = e.associatedGamePID
        },
        OVERLAY_NOTIFY_READY_TO_SHOW: function(e) {
            eE().then(t => {
                null == t || t.readyToShow(e.pid)
            })
        }
    });
    t.default = eM
}