function(e, t, n) {
    "use strict";
    let i, s;
    n.r(t), n.d(t, {
        getOverlayURL: function() {
            return es
        },
        default: function() {
            return eN
        }
    }), n("222007"), n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("313619"), n("654714"), n("287168"), n("956660"), n("860677");
    var r, a, o = n("992830"),
        l = n("446674"),
        u = n("913144"),
        d = n("561288"),
        c = n("823411"),
        f = n("640583"),
        _ = n("539405"),
        h = n("987317"),
        E = n("49671"),
        g = n("6193"),
        m = n("121338"),
        p = n("605250"),
        S = n("161454"),
        v = n("32128"),
        T = n("127080"),
        I = n("116949"),
        C = n("271938"),
        A = n("546463"),
        y = n("505507"),
        N = n("703370"),
        R = n("599110"),
        O = n("27571"),
        D = n("658530"),
        P = n("50885"),
        L = n("819068"),
        M = n("49111"),
        b = n("6791");
    (a = r || (r = {})).ATTACHING = "ATTACHING", a.CONNECTING = "CONNECTING", a.CONNECTED = "CONNECTED", a.READY = "READY", a.CRASHED = "CRASHED", a.CONNECT_FAILED = "CONNECT_FAILED", a.HOOK_FAILED = "HOOK_FAILED";
    let U = {},
        w = new Map,
        k = !1,
        V = new Set,
        G = new Set,
        F = !1,
        x = !1,
        B = null,
        H = null,
        Y = "",
        j = new Set,
        W = !1,
        K = new Set(["CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "WINDOW_INIT", "WINDOW_FULLSCREEN_CHANGE", "WINDOW_FOCUS", "WINDOW_RESIZED", "WINDOW_HIDDEN", "CHANNEL_SELECT", "DELAYED_CHANNEL_SELECT", "DELAYED_SELECT_FLUSH", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "MESSAGE_START_EDIT", "MESSAGE_UPDATE_EDIT", "MESSAGE_END_EDIT", "APP_VIEW_SET_HOME_LINK", "APPLICATION_STORE_LOCATION_CHANGE", "LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGIN_MFA_STEP", "LOGIN_MFA", "LOGIN_MFA_FAILURE", "LOGIN_MFA_SMS", "LOGIN_MFA_SMS_REQUEST_SUCCESS", "LOGIN_MFA_SMS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_RESET", "FINGERPRINT", "REGISTER", "REGISTER_SUCCESS", "REGISTER_FAILURE", "VERIFY_FAILURE", "VERIFY_SUCCESS", "START_SESSION", "FORGOT_PASSWORD_SENT", "UPDATE_TOKEN", "SET_CONSENT_REQUIRED", "CONTEXT_MENU_OPEN", "CONTEXT_MENU_CLOSE", "MODAL_PUSH", "MODAL_POP", "MODAL_UPDATE", "MODAL_POP_ALL", "GUILD_SETTINGS_OPEN", "USER_SETTINGS_MODAL_OPEN", "CHANNEL_SETTINGS_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "EMAIL_VERIFICATION_MODAL_OPEN", "MENTION_MODAL_OPEN", "QUICKSWITCHER_SHOW", "SEARCH_MODAL_OPEN", "IFE_EXPERIMENT_SEARCH_MODAL_OPEN", "INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "GUILD_SETTINGS_CLOSE", "USER_SETTINGS_MODAL_CLOSE", "CHANNEL_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "MENTION_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "SEARCH_MODAL_CLOSE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "QUICKSWITCHER_SHOW", "QUICKSWITCHER_HIDE", "QUICKSWITCHER_SWITCH_TO", "QUICKSWITCHER_SEARCH", "QUICKSWITCHER_SELECT", "UPDATE_CHANNEL_DIMENSIONS", "UPDATE_CHANNEL_LIST_DIMENSIONS", "UPDATE_GUILD_LIST_DIMENSIONS", "TRACK", "CHANNEL_SETTINGS_OPEN", "CHANNEL_SETTINGS_INIT", "CHANNEL_SETTINGS_CLOSE", "GUILD_SETTINGS_INIT", "GUILD_SETTINGS_OPEN", "GUILD_SETTINGS_CLOSE", "TUTORIAL_INDICATOR_SHOW", "TUTORIAL_INDICATOR_HIDE", "TUTORIAL_INDICATOR_SUPPRESS_ALL", "USER_SETTINGS_ACCOUNT_INIT", "USER_SETTINGS_ACCOUNT_CLOSE", "NOTICE_SHOW", "NOTICE_DISMISS", "NOTICE_DISABLE", "SEARCH_EDITOR_STATE_CHANGE", "SEARCH_EDITOR_STATE_CLEAR", "SEARCH_START", "SEARCH_FINISH", "MOD_VIEW_SEARCH_FINISH", "SEARCH_INDEXING", "SEARCH_CLEAR", "SEARCH_ENSURE_SEARCH_STATE", "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", "SEARCH_CLEAR_HISTORY", "SEARCH_SET_SHOW_BLOCKED_RESULTS", "LAYOUT_CREATE", "EXPERIMENT_REGISTER_LEGACY", "POPOUT_WINDOW_OPEN", "POPOUT_WINDOW_CLOSE", "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", "TYPING_START_LOCAL", "TYPING_STOP_LOCAL", "SPOTIFY_SET_ACTIVE_DEVICE", "LOAD_INVITE_SUGGESTIONS", "INVITE_SUGGESTIONS_SEARCH", "IMPERSONATE_UPDATE", "IMPERSONATE_STOP", "CREATE_PENDING_REPLY", "CREATE_SHALLOW_PENDING_REPLY", "DELETE_PENDING_REPLY", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", "GUILD_FEED_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", "APPLICATION_COMMAND_SEARCH_STORE_QUERY", "APPLICATION_COMMAND_SEARCH_STORE_UPDATE", "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE", "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", "APPLICATION_COMMAND_UPDATE_OPTIONS", "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", "APPLICATION_COMMAND_USED", "DCF_HANDLE_DC_SHOWN", "DCF_HANDLE_DC_DISMISSED"]),
        z = new Set,
        q = new p.default("OverlayBridgeStore"),
        X = "none",
        Q = (0, o.createObservableLock)({
            onContention: (e, t) => q.verbose("overlayLock contention: lastMutexCall ".concat(X)),
            onContentionResolved: () => q.verbose("overlayLock contention: resolved."),
            onTimeout: (e, t) => {
                let n = "overlayLock: lastMutexCall ".concat(X, "}");
                q.error(n), R.default.track(M.AnalyticEvents.OVERLAY_HOOK_RESULT, {
                    success: !1,
                    error_description: n
                })
            },
            timeoutMs: 18e4
        });

    function Z(e, t) {
        return function() {
            for (var n = arguments.length, i = Array(n), s = 0; s < n; s++) i[s] = arguments[s];
            Q(() => t(...i), e)
        }
    }

    function J(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = w.get(e);
        if ((null === n || i === n) && i !== t) {
            if (null == t ? w.delete(e) : w.set(e, t), null == t || "CRASHED" === t) {
                var s;
                B = null;
                let e = null === E.default || void 0 === E.default ? void 0 : null === (s = E.default.fileManager) || void 0 === s ? void 0 : s.uploadDiscordHookCrashes;
                null != e && e().then(e => {
                    if (Array.isArray(e) && 0 !== e.length)
                        for (let l of (q.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                            var t, n, i, s, r, a, o;
                            if (null == l) continue;
                            let e = null != l.processName ? A.default.getGameByExecutable(l.processName) : null;
                            R.default.track(M.AnalyticEvents.OVERLAY_HOOK_CRASHED, {
                                process_name: null == l ? void 0 : l.processName,
                                game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
                                game_id: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null,
                                minidump_exception_type: null !== (i = l.exceptionString) && void 0 !== i ? i : null,
                                minidump_exception_module_name: null !== (s = l.exceptionModuleName) && void 0 !== s ? s : null,
                                minidump_relative_crash_address: null !== (r = l.relativeCrashAddress) && void 0 !== r ? r : null,
                                minidump_exception_module_version: null !== (a = l.exceptionModuleVersion) && void 0 !== a ? a : null,
                                minidump_exception_module_code_id: null !== (o = l.exceptionModuleCodeId) && void 0 !== o ? o : null
                            })
                        }
                })
            }
            j.delete(e), q.info("pid=".concat(e, " status transition ").concat(null != i ? i : "DISCONNECTED", " -> ").concat(null != t ? t : "DISCONNECTED"), w), k = Array.from(w.values()).some(e => "READY" === e)
        }
    }
    async function $(e) {
        if (P.default.supportsFeature(M.NativeFeatures.CREATE_HOST_ON_ATTACH)) {
            if (w.size > 0) {
                X = "reconcile.getOverlayURL";
                let t = await es();
                X = "reconcile.createHostProcess", e.createHostProcess(t, e_, ef)
            } else X = "reconcile.destroyHostProcess", e.destroyHostProcess()
        } else if (F) {
            let t = await es();
            e.createHostProcess(t, e_, ef)
        } else e.destroyHostProcess()
    }
    async function ee(e) {
        !Q.isMutexHeld() && q.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
        let t = w.get(e);
        if (null != t) {
            q.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(t));
            return
        }
        X = "attach.getOverlayModule";
        let n = await er();
        X = "attach.transitionOverlayPIDStatus", J(e, "ATTACHING"), X = "attach.attachToProcess";
        let i = await g.attachToProcess(e);
        null == i ? (X = "attach.transitionOverlayPIDStatus (CONNECTING)", J(e, "CONNECTING", "ATTACHING"), X = "attach.reconcileHostProcess", await $(n), n.connectProcess(e)) : (X = "attach.transitionOverlayPIDStatus (HOOK_FAILED)", J(e, "HOOK_FAILED", "ATTACHING"), q.warn("Could not hook to pid=".concat(e, ", error=").concat(i)))
    }
    async function et(e) {
        if (!Q.isMutexHeld() && q.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !w.has(e)) {
            q.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
            return
        }
        X = "detach.getOverlayModule";
        let t = await er();
        X = "detach.transitionOverlayPIDStatus", J(e, null), e !== L.DEV_PID && (X = "detach.cancelAttachToProcess", g.cancelAttachToProcess(e), X = "detach.disconnectProcess", t.disconnectProcess(e)), X = "detach.reconcileHostProcess", await $(t)
    }
    async function en(e) {
        var t;
        if (q.verbose("updateIntendedOverlayPIDs", {
                isConnectionOpened: x,
                action: e
            }), !Q.isMutexHeld() && q.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e), !x && null != e) {
            q.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
            return
        }
        async function n(t) {
            if (!(t in U)) {
                q.error("Unexpected. ".concat(t, " is not a tracked game?"), U, e);
                return
            }
            let n = U[t];
            delete U[t];
            try {
                await n.deconstructor()
            } catch (e) {
                q.error("Failed to deconstruct tracked game ".concat(t), e)
            }
        }
        if (null == e || !F) {
            q.verbose("updateIntendedOverlayPIDs: Removing all.", U, e);
            let t = Object.keys(U);
            for (let e of t) await n(Number(e));
            return
        }
        for (let n of null !== (t = e.added) && void 0 !== t ? t : []) {
            let t = S.default.getGameOverlayStatus(n);
            if (q.verbose("updateIntendedOverlayPIDs: newGame", n, t), null != t && t.enabled) switch (n.pid in U && q.error("Unexpected. ".concat(n.pid, " is being added twice?"), U, e), t.overlayMethod) {
                case b.OverlayMethod.OutOfProcess:
                    let i = await eu();
                    await i.trackGame(n.pid), U[n.pid] = {
                        method: t.overlayMethod,
                        deconstructor: async () => {
                            let e = await eu();
                            await e.untrackGame(n.pid)
                        }
                    };
                    break;
                case b.OverlayMethod.Hook:
                    !w.has(n.pid) && await ee(n.pid), U[n.pid] = {
                        method: t.overlayMethod,
                        deconstructor: async () => {
                            await et(n.pid)
                        }
                    };
                    break;
                case b.OverlayMethod.Disabled:
                    q.verbose("updateIntendedOverlayPIDs: disabled", n);
                    break;
                default:
                    q.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(t.overlayMethod))
            }
        }
        for (let t of e.removed) q.verbose("updateIntendedOverlayPIDs: removedGame", t), await n(t.pid)
    }
    let ei = Z("updateIntendedOverlayPIDs", e => en(e));

    function es() {
        return new Promise(e => {
            ey.addConditionalChangeListener(() => {
                if (null != i) return e(i), !1
            })
        })
    }
    let er = (() => {
        let e = null;
        async function t() {
            if (!b.OVERLAY_SUPPORTED) throw q.error("Attempted to load overlay on an unsupported platform."), Error("Overlay is not supported on this platform.");
            try {
                return await P.default.ensureModule("discord_overlay2"),
                    function(e) {
                        for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"]) null == e[t] && (q.info("polyfilling OverlayModule.".concat(t, "(); Overlay module is probably out of date.")), e[t] = () => void 0);
                        return e
                    }(P.default.requireModule("discord_overlay2"))
            } catch (e) {
                throw q.error("failed ensuring discord_overlay2", e), e
            }
        }
        return () => (null == e && (e = t()), e)
    })();
    async function ea(e) {
        var t, n, i, s, r, a, o;
        try {
            let t = await es() + "&oop=true&pid=".concat(e);
            await (null === E.default || void 0 === E.default ? void 0 : null === (s = E.default.globalOverlay) || void 0 === s ? void 0 : null === (i = s.openWindow) || void 0 === i ? void 0 : i.call(s, t))
        } catch (e) {
            q.log("globalOverlay: Failed to open overlay: ".concat(e), e), null === E.default || void 0 === E.default || null === (a = E.default.window) || void 0 === a || a.close(null === E.default || void 0 === E.default ? void 0 : null === (r = E.default.globalOverlay) || void 0 === r ? void 0 : r.WINDOW_KEY)
        }
        return H = e, null !== (o = await (null === E.default || void 0 === E.default ? void 0 : null === (n = E.default.window) || void 0 === n ? void 0 : n.getNativeHandle(null === E.default || void 0 === E.default ? void 0 : null === (t = E.default.globalOverlay) || void 0 === t ? void 0 : t.WINDOW_KEY))) && void 0 !== o ? o : ""
    }

    function eo() {
        var e, t;
        null === E.default || void 0 === E.default || null === (t = E.default.window) || void 0 === t || t.close(null === E.default || void 0 === E.default ? void 0 : null === (e = E.default.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY), H = null
    }

    function el(e) {
        let t = N.default.getGameForPID(e);
        _.default.setAssociatedGame(null != H ? H : -1, e, t)
    }
    let eu = (() => {
        let e = null;
        async function t() {
            if (!b.OVERLAY_SUPPORTED || !(0, L.supportsOutOfProcess)()) throw q.error("Attempted to load out of process overlay on an unsupported platform."), Error("Out of Process Overlay is not supported on this platform.");
            try {
                var e;
                let {
                    OutOfProcess: t
                } = await er();
                return null == t || null === (e = t.init) || void 0 === e || e.call(t), t.setClickZoneCallback(ep), t.setHostWindowCallbacks(ea, eo, el), t.setFocusCallback(ef), t
            } catch (e) {
                throw q.error("failed loading out of process overlay", e), e
            }
        }
        return () => (null == e && (e = t()), e)
    })();

    function ed() {
        return ei({
            added: S.default.getRunningGames(),
            removed: []
        })
    }
    let ec = Z("setOverlayEnabled", async e => {
        if (!b.OVERLAY_SUPPORTED || F === e) return;
        F = e, v.OverlayStoredSettings.update({
            enabled: e
        }), ey.emitChange();
        let t = await er(),
            {
                OutOfProcess: n
            } = t;
        (0, L.setOutOfProcessSupport)(null != n), F ? (await $(t), ed()) : (await en(void 0), await $(t))
    });

    function ef(e) {
        if (0 === e) {
            var t, n;
            let e = null !== (n = null === (t = U[null != B ? B : 0]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : b.OverlayMethod.Disabled;
            if (e === b.OverlayMethod.OutOfProcess) return
        }
        _.default.setFocusedPID(0 === e ? null : e)
    }

    function e_(e, t, n) {
        var i;
        let s = null === (i = S.default.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
            r = A.default.getGameByName(s),
            a = {
                game_name: s,
                game_id: null == r ? null : r.id,
                success: t,
                ...n
            };
        (0, f.createLayout)(L.OVERLAY_LAYOUT_ID, y.default.getDefaultLayout(L.OVERLAY_LAYOUT_ID), {
            width: n.graphics_width,
            height: n.graphics_height
        }), R.default.track(M.AnalyticEvents.OVERLAY_HOOK_RESULT, a), q.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), a), t ? J(e, "CONNECTED", "CONNECTING") : J(e, "CONNECT_FAILED", "CONNECTING")
    }

    function eh() {
        let e = C.default.getToken(),
            t = C.default.getId();
        null != e && m.send({
            type: M.OverlayEventTypes.DISPATCH,
            pid: null,
            token: null,
            payloads: [{
                type: "UPDATE_TOKEN",
                token: e,
                userId: t
            }]
        })
    }
    async function eE(e) {
        let t = await er();
        if (null != B && B !== L.DEV_PID && t.sendCommand(B, {
                message: "intercept_input",
                intercept: !e
            }), (0, L.supportsOutOfProcess)()) {
            let t = await eu();
            t.setInteractionEnabled(!e)
        }
    }

    function eg(e) {
        if (e) {
            let t = S.default.getVisibleGame(),
                n = null == t ? null : S.default.getGameOverlayStatus(t);
            (null == n ? void 0 : n.overlayMethod) === b.OverlayMethod.OutOfProcess ? eE(e) : setTimeout(() => eE(e), 200)
        } else eE(e)
    }
    let em = null;

    function ep(e, t, n) {
        _.default.relayClickZoneClicked(e, t, n)
    }
    async function eS(e) {
        if (!(0, L.supportsOutOfProcess)()) return;
        let t = await eu();
        t.setClickZones(e.map(e => {
            let t = {
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom
            };
            return t
        }))
    }

    function ev(e) {
        return !(W || !k || K.has(e.type)) && ("USER_SETTINGS_PROTO_UPDATE" === e.type && (e = {
            ...e,
            settings: {
                type: e.settings.type,
                proto: (0, I.protoToB64WithType)(e.settings.type, e.settings.proto)
            }
        }), V.add(e), null == s && (s = setTimeout(eT, 1)), !1)
    }

    function eT() {
        if (null != s && (clearTimeout(s), s = null), !k) {
            V.clear();
            return
        }
        V.size > 0 && (m.send({
            type: M.OverlayEventTypes.DISPATCH,
            pid: null,
            token: null,
            payloads: Array.from(V)
        }), V.clear())
    }

    function eI(e) {
        return null != e && (0, O.constantTimeCompare)(e, Y)
    }

    function eC(e) {
        switch (0, e.type) {
            case M.OverlayEventTypes.CONNECT:
                let t = C.default.getToken();
                if (null == t) break;
                (0, f.createLayout)(L.OVERLAY_LAYOUT_ID, y.default.getDefaultLayout(L.OVERLAY_LAYOUT_ID)), Promise.all([(0, T.default)(t, e.pid), l.default.PersistedStore.getAllStates()]).then(t => {
                    let [n, i] = t, {
                        pid: s,
                        token: r
                    } = e;
                    m.send({
                        type: M.OverlayEventTypes.STORAGE_SYNC,
                        pid: s,
                        token: r,
                        states: i
                    }), m.send({
                        type: M.OverlayEventTypes.DISPATCH,
                        pid: s,
                        token: r,
                        payloads: [n]
                    }), J(s, "READY"), _.default.overlayReady(s)
                });
                break;
            case M.OverlayEventTypes.DISPATCH:
                if (null != e.payloads) {
                    var n;
                    n = e.payloads, W = !0, n.forEach(e => u.default.dispatch(e)), W = !1
                }
                break;
            case M.OverlayEventTypes.LOG_MESSAGES:
                q.info("[overlay data received]", e.payload)
        }
    }
    class eA extends l.default.Store {
        initialize() {
            !(!b.OVERLAY_SUPPORTED || __OVERLAY__) && (G.add(b.OverlayMethod.Hook), this.waitFor(S.default, C.default), m.setReceiveCommandHandler(eC, eI), C.default.addChangeListener(eh), ec(v.OverlayStoredSettings.enabled), u.default.addInterceptor(ev))
        }
        isInputLocked(e) {
            return !j.has(e)
        }
        isSupported() {
            return b.OVERLAY_SUPPORTED
        }
        isMethodSupported(e) {
            return b.OVERLAY_SUPPORTED && G.has(e)
        }
        get enabled() {
            return F
        }
        getFocusedPID() {
            return B
        }
        isReady(e) {
            return "READY" === w.get(e)
        }
        isCrashed(e) {
            return "CRASHED" === w.get(e)
        }
    }
    eA.displayName = "OverlayBridgeStore";
    let ey = new eA(u.default, __OVERLAY__ ? {
        OVERLAY_RELAY_CLICK_ZONE_CLICKED: function(e) {
            let {
                normalizedMouseX: t,
                normalizedMouseY: n
            } = e;
            setTimeout(() => {
                let e = Math.ceil(t * window.innerWidth),
                    i = Math.ceil(n * window.innerHeight),
                    s = (0, D.createMouseEvent)("click", e, i);
                (0, D.dispatchEventToPoint)(s, e, i)
            }, 50)
        },
        OVERLAY_SET_ASSOCIATED_GAME: function(e) {
            if (!(0, L.isOutOfProcess)()) return;
            (0, L.setPID)(e.associatedGamePID);
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
                    15 === n ? _.default.notifyReadyToShow(e.associatedGamePID) : (n += 1, t().then(i))
                };
            i()
        }
    } : {
        CONNECTION_OPEN: function() {
            x = !0, ed()
        },
        CONNECTION_CLOSED: function() {
            x = !1, B = null, ei(void 0)
        },
        OVERLAY_SET_ENABLED: function(e) {
            let {
                enabled: t
            } = e;
            return ec(t), !1
        },
        OVERLAY_FOCUSED: function(e) {
            let {
                pid: t
            } = e;
            B = t
        },
        RUNNING_GAMES_CHANGE: function(e) {
            ei(e)
        },
        OVERLAY_SET_INPUT_LOCKED: function(e) {
            let {
                locked: t,
                pid: n
            } = e, i = w.get(n);
            if (t || "READY" === i || "CRASHED" === i) {
                if (t ? j.delete(n) : j.add(n), z.clear(), null != em && (clearTimeout(em), em = null, t)) return;
                t ? eg(t) : em = setTimeout(() => {
                    eg(t), em = null
                }, 100)
            }
        },
        OVERLAY_ACTIVATE_REGION: function(e) {
            let {
                region: t
            } = e;
            z.add(t), eg(!1)
        },
        OVERLAY_DEACTIVATE_ALL_REGIONS: function() {
            z.clear(), eg(!0)
        },
        RPC_SERVER_READY: function(e) {
            let {
                port: t
            } = e, n = crypto.getRandomValues(new Uint8Array(8));
            Y = btoa(String.fromCharCode(...n));
            let s = new URLSearchParams;
            s.append("build_id", "19242badfbd88a9a107233b587ca3e54cc46e2d8"), s.append("rpc", String(t)), s.append("rpc_auth_token", Y), i = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(s.toString())
        },
        OVERLAY_CALL_PRIVATE_CHANNEL: function(e) {
            let {
                channelId: t,
                ring: n
            } = e;
            setImmediate(() => {
                h.default.selectPrivateChannel(t), d.default.call(t, !1, !!n)
            })
        },
        OVERLAY_JOIN_GAME: function(e) {
            let {
                userId: t,
                sessionId: n,
                applicationId: i,
                channelId: s,
                messageId: r
            } = e;
            setImmediate(() => {
                c.default.join({
                    userId: t,
                    sessionId: n,
                    applicationId: i,
                    channelId: s,
                    messageId: r
                }), null != B && _.default.setLocked(!0, B)
            })
        },
        OVERLAY_CRASHED: function(e) {
            let {
                pid: t
            } = e;
            J(t, "CRASHED")
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
            if (q.verbose("handleGameToggleOverlay", e), !("pid" in e.game)) {
                q.verbose("handleGameToggleOverlay: Game was not a RunningGame.", e);
                return
            }
            let t = [e.game];
            ei({
                added: e.newEnabledValue ? t : [],
                removed: e.newEnabledValue ? [] : t
            })
        },
        OVERLAY_SET_CLICK_ZONES: function(e) {
            let {
                zones: t
            } = e;
            eS(t)
        },
        OVERLAY_SET_ASSOCIATED_GAME: function(e) {
            var t, n;
            let i = null !== (n = null === (t = U[e.previousAssociatedGamePID]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : b.OverlayMethod.Disabled;
            if (i !== b.OverlayMethod.OutOfProcess) return;
            let s = w.get(e.previousAssociatedGamePID);
            null != s && (w.delete(e.previousAssociatedGamePID), w.set(e.associatedGamePID, s)), j.delete(e.previousAssociatedGamePID), H = e.associatedGamePID
        },
        OVERLAY_NOTIFY_READY_TO_SHOW: function(e) {
            eu().then(t => {
                null == t || t.readyToShow(e.pid)
            })
        }
    });
    var eN = ey
}