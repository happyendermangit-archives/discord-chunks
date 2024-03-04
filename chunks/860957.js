function(e, t, n) {
    "use strict";
    let a, l;
    n.r(t), n.d(t, {
        getOverlayURL: function() {
            return el
        },
        default: function() {
            return eh
        }
    }), n("222007"), n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("313619"), n("654714"), n("287168"), n("956660"), n("860677");
    var o, i, r = n("992830"),
        d = n("446674"),
        E = n("913144"),
        u = n("561288"),
        s = n("823411"),
        _ = n("640583"),
        c = n("539405"),
        O = n("987317"),
        A = n("49671"),
        T = n("6193"),
        I = n("121338"),
        S = n("605250"),
        f = n("161454"),
        N = n("32128"),
        L = n("127080"),
        C = n("116949"),
        D = n("271938"),
        y = n("546463"),
        p = n("505507"),
        h = n("703370"),
        R = n("599110"),
        v = n("27571"),
        g = n("658530"),
        P = n("50885"),
        G = n("819068"),
        m = n("49111"),
        b = n("6791");
    (i = o || (o = {})).ATTACHING = "ATTACHING", i.CONNECTING = "CONNECTING", i.CONNECTED = "CONNECTED", i.READY = "READY", i.CRASHED = "CRASHED", i.CONNECT_FAILED = "CONNECT_FAILED", i.HOOK_FAILED = "HOOK_FAILED";
    let U = {},
        M = new Map,
        Y = !1,
        H = new Set,
        w = new Set,
        V = !1,
        K = !1,
        W = null,
        k = null,
        F = "",
        x = new Set,
        B = !1,
        X = new Set(["CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "WINDOW_INIT", "WINDOW_FULLSCREEN_CHANGE", "WINDOW_FOCUS", "WINDOW_RESIZED", "WINDOW_HIDDEN", "CHANNEL_SELECT", "DELAYED_CHANNEL_SELECT", "DELAYED_SELECT_FLUSH", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "MESSAGE_START_EDIT", "MESSAGE_UPDATE_EDIT", "MESSAGE_END_EDIT", "APP_VIEW_SET_HOME_LINK", "APPLICATION_STORE_LOCATION_CHANGE", "LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGIN_MFA_STEP", "LOGIN_MFA", "LOGIN_MFA_FAILURE", "LOGIN_MFA_SMS", "LOGIN_MFA_SMS_REQUEST_SUCCESS", "LOGIN_MFA_SMS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_RESET", "FINGERPRINT", "REGISTER", "REGISTER_SUCCESS", "REGISTER_FAILURE", "VERIFY_FAILURE", "VERIFY_SUCCESS", "START_SESSION", "FORGOT_PASSWORD_SENT", "UPDATE_TOKEN", "SET_CONSENT_REQUIRED", "CONTEXT_MENU_OPEN", "CONTEXT_MENU_CLOSE", "MODAL_PUSH", "MODAL_POP", "MODAL_UPDATE", "MODAL_POP_ALL", "GUILD_SETTINGS_OPEN", "USER_SETTINGS_MODAL_OPEN", "CHANNEL_SETTINGS_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "EMAIL_VERIFICATION_MODAL_OPEN", "MENTION_MODAL_OPEN", "QUICKSWITCHER_SHOW", "SEARCH_MODAL_OPEN", "IFE_EXPERIMENT_SEARCH_MODAL_OPEN", "INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "GUILD_SETTINGS_CLOSE", "USER_SETTINGS_MODAL_CLOSE", "CHANNEL_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "MENTION_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "SEARCH_MODAL_CLOSE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "QUICKSWITCHER_SHOW", "QUICKSWITCHER_HIDE", "QUICKSWITCHER_SWITCH_TO", "QUICKSWITCHER_SEARCH", "QUICKSWITCHER_SELECT", "UPDATE_CHANNEL_DIMENSIONS", "UPDATE_CHANNEL_LIST_DIMENSIONS", "UPDATE_GUILD_LIST_DIMENSIONS", "TRACK", "CHANNEL_SETTINGS_OPEN", "CHANNEL_SETTINGS_INIT", "CHANNEL_SETTINGS_CLOSE", "GUILD_SETTINGS_INIT", "GUILD_SETTINGS_OPEN", "GUILD_SETTINGS_CLOSE", "TUTORIAL_INDICATOR_SHOW", "TUTORIAL_INDICATOR_HIDE", "TUTORIAL_INDICATOR_SUPPRESS_ALL", "USER_SETTINGS_ACCOUNT_INIT", "USER_SETTINGS_ACCOUNT_CLOSE", "NOTICE_SHOW", "NOTICE_DISMISS", "NOTICE_DISABLE", "SEARCH_EDITOR_STATE_CHANGE", "SEARCH_EDITOR_STATE_CLEAR", "SEARCH_START", "SEARCH_FINISH", "MOD_VIEW_SEARCH_FINISH", "SEARCH_INDEXING", "SEARCH_CLEAR", "SEARCH_ENSURE_SEARCH_STATE", "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", "SEARCH_CLEAR_HISTORY", "SEARCH_SET_SHOW_BLOCKED_RESULTS", "LAYOUT_CREATE", "EXPERIMENT_REGISTER_LEGACY", "POPOUT_WINDOW_OPEN", "POPOUT_WINDOW_CLOSE", "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", "TYPING_START_LOCAL", "TYPING_STOP_LOCAL", "SPOTIFY_SET_ACTIVE_DEVICE", "LOAD_INVITE_SUGGESTIONS", "INVITE_SUGGESTIONS_SEARCH", "IMPERSONATE_UPDATE", "IMPERSONATE_STOP", "CREATE_PENDING_REPLY", "CREATE_SHALLOW_PENDING_REPLY", "DELETE_PENDING_REPLY", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", "GUILD_FEED_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", "APPLICATION_COMMAND_SEARCH_STORE_QUERY", "APPLICATION_COMMAND_SEARCH_STORE_UPDATE", "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE", "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", "APPLICATION_COMMAND_UPDATE_OPTIONS", "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", "APPLICATION_COMMAND_USED", "DCF_HANDLE_DC_SHOWN", "DCF_HANDLE_DC_DISMISSED"]),
        z = new Set,
        Q = new S.default("OverlayBridgeStore"),
        Z = "none",
        j = (0, r.createObservableLock)({
            onContention: (e, t) => Q.verbose("overlayLock contention: lastMutexCall ".concat(Z)),
            onContentionResolved: () => Q.verbose("overlayLock contention: resolved."),
            onTimeout: (e, t) => {
                let n = "overlayLock: lastMutexCall ".concat(Z, "}");
                Q.error(n), R.default.track(m.AnalyticEvents.OVERLAY_HOOK_RESULT, {
                    success: !1,
                    error_description: n
                })
            },
            timeoutMs: 18e4
        });

    function q(e, t) {
        return function() {
            for (var n = arguments.length, a = Array(n), l = 0; l < n; l++) a[l] = arguments[l];
            j(() => t(...a), e)
        }
    }

    function J(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            a = M.get(e);
        if ((null === n || a === n) && a !== t) {
            if (null == t ? M.delete(e) : M.set(e, t), null == t || "CRASHED" === t) {
                var l;
                W = null;
                let e = null === A.default || void 0 === A.default ? void 0 : null === (l = A.default.fileManager) || void 0 === l ? void 0 : l.uploadDiscordHookCrashes;
                null != e && e().then(e => {
                    if (Array.isArray(e) && 0 !== e.length)
                        for (let d of (Q.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                            var t, n, a, l, o, i, r;
                            if (null == d) continue;
                            let e = null != d.processName ? y.default.getGameByExecutable(d.processName) : null;
                            R.default.track(m.AnalyticEvents.OVERLAY_HOOK_CRASHED, {
                                process_name: null == d ? void 0 : d.processName,
                                game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
                                game_id: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null,
                                minidump_exception_type: null !== (a = d.exceptionString) && void 0 !== a ? a : null,
                                minidump_exception_module_name: null !== (l = d.exceptionModuleName) && void 0 !== l ? l : null,
                                minidump_relative_crash_address: null !== (o = d.relativeCrashAddress) && void 0 !== o ? o : null,
                                minidump_exception_module_version: null !== (i = d.exceptionModuleVersion) && void 0 !== i ? i : null,
                                minidump_exception_module_code_id: null !== (r = d.exceptionModuleCodeId) && void 0 !== r ? r : null
                            })
                        }
                })
            }
            x.delete(e), Q.info("pid=".concat(e, " status transition ").concat(null != a ? a : "DISCONNECTED", " -> ").concat(null != t ? t : "DISCONNECTED"), M), Y = Array.from(M.values()).some(e => "READY" === e)
        }
    }
    async function $(e) {
        if (P.default.supportsFeature(m.NativeFeatures.CREATE_HOST_ON_ATTACH)) {
            if (M.size > 0) {
                Z = "reconcile.getOverlayURL";
                let t = await el();
                Z = "reconcile.createHostProcess", e.createHostProcess(t, ec, e_)
            } else Z = "reconcile.destroyHostProcess", e.destroyHostProcess()
        } else if (V) {
            let t = await el();
            e.createHostProcess(t, ec, e_)
        } else e.destroyHostProcess()
    }
    async function ee(e) {
        !j.isMutexHeld() && Q.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
        let t = M.get(e);
        if (null != t) {
            Q.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(t));
            return
        }
        Z = "attach.getOverlayModule";
        let n = await eo();
        Z = "attach.transitionOverlayPIDStatus", J(e, "ATTACHING"), Z = "attach.attachToProcess";
        let a = await T.attachToProcess(e);
        null == a ? (Z = "attach.transitionOverlayPIDStatus (CONNECTING)", J(e, "CONNECTING", "ATTACHING"), Z = "attach.reconcileHostProcess", await $(n), n.connectProcess(e)) : (Z = "attach.transitionOverlayPIDStatus (HOOK_FAILED)", J(e, "HOOK_FAILED", "ATTACHING"), Q.warn("Could not hook to pid=".concat(e, ", error=").concat(a)))
    }
    async function et(e) {
        if (!j.isMutexHeld() && Q.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !M.has(e)) {
            Q.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
            return
        }
        Z = "detach.getOverlayModule";
        let t = await eo();
        Z = "detach.transitionOverlayPIDStatus", J(e, null), e !== G.DEV_PID && (Z = "detach.cancelAttachToProcess", T.cancelAttachToProcess(e), Z = "detach.disconnectProcess", t.disconnectProcess(e)), Z = "detach.reconcileHostProcess", await $(t)
    }
    async function en(e) {
        var t;
        if (Q.verbose("updateIntendedOverlayPIDs", {
                isConnectionOpened: K,
                action: e
            }), !j.isMutexHeld() && Q.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e), !K && null != e) {
            Q.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
            return
        }
        async function n(t) {
            if (!(t in U)) {
                Q.error("Unexpected. ".concat(t, " is not a tracked game?"), U, e);
                return
            }
            let n = U[t];
            delete U[t];
            try {
                await n.deconstructor()
            } catch (e) {
                Q.error("Failed to deconstruct tracked game ".concat(t), e)
            }
        }
        if (null == e || !V) {
            Q.verbose("updateIntendedOverlayPIDs: Removing all.", U, e);
            let t = Object.keys(U);
            for (let e of t) await n(Number(e));
            return
        }
        for (let n of null !== (t = e.added) && void 0 !== t ? t : []) {
            let t = f.default.getGameOverlayStatus(n);
            if (Q.verbose("updateIntendedOverlayPIDs: newGame", n, t), null != t && t.enabled) switch (n.pid in U && Q.error("Unexpected. ".concat(n.pid, " is being added twice?"), U, e), t.overlayMethod) {
                case b.OverlayMethod.OutOfProcess:
                    let a = await eE();
                    await a.trackGame(n.pid), U[n.pid] = {
                        method: t.overlayMethod,
                        deconstructor: async () => {
                            let e = await eE();
                            await e.untrackGame(n.pid)
                        }
                    };
                    break;
                case b.OverlayMethod.Hook:
                    !M.has(n.pid) && await ee(n.pid), U[n.pid] = {
                        method: t.overlayMethod,
                        deconstructor: async () => {
                            await et(n.pid)
                        }
                    };
                    break;
                case b.OverlayMethod.Disabled:
                    Q.verbose("updateIntendedOverlayPIDs: disabled", n);
                    break;
                default:
                    Q.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(t.overlayMethod))
            }
        }
        for (let t of e.removed) Q.verbose("updateIntendedOverlayPIDs: removedGame", t), await n(t.pid)
    }
    let ea = q("updateIntendedOverlayPIDs", e => en(e));

    function el() {
        return new Promise(e => {
            ep.addConditionalChangeListener(() => {
                if (null != a) return e(a), !1
            })
        })
    }
    let eo = (() => {
        let e = null;
        async function t() {
            if (!b.OVERLAY_SUPPORTED) throw Q.error("Attempted to load overlay on an unsupported platform."), Error("Overlay is not supported on this platform.");
            try {
                return await P.default.ensureModule("discord_overlay2"),
                    function(e) {
                        for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"]) null == e[t] && (Q.info("polyfilling OverlayModule.".concat(t, "(); Overlay module is probably out of date.")), e[t] = () => void 0);
                        return e
                    }(P.default.requireModule("discord_overlay2"))
            } catch (e) {
                throw Q.error("failed ensuring discord_overlay2", e), e
            }
        }
        return () => (null == e && (e = t()), e)
    })();
    async function ei(e) {
        var t, n, a, l, o, i, r;
        try {
            let t = await el() + "&oop=true&pid=".concat(e);
            await (null === A.default || void 0 === A.default ? void 0 : null === (l = A.default.globalOverlay) || void 0 === l ? void 0 : null === (a = l.openWindow) || void 0 === a ? void 0 : a.call(l, t))
        } catch (e) {
            Q.log("globalOverlay: Failed to open overlay: ".concat(e), e), null === A.default || void 0 === A.default || null === (i = A.default.window) || void 0 === i || i.close(null === A.default || void 0 === A.default ? void 0 : null === (o = A.default.globalOverlay) || void 0 === o ? void 0 : o.WINDOW_KEY)
        }
        return k = e, null !== (r = await (null === A.default || void 0 === A.default ? void 0 : null === (n = A.default.window) || void 0 === n ? void 0 : n.getNativeHandle(null === A.default || void 0 === A.default ? void 0 : null === (t = A.default.globalOverlay) || void 0 === t ? void 0 : t.WINDOW_KEY))) && void 0 !== r ? r : ""
    }

    function er() {
        var e, t;
        null === A.default || void 0 === A.default || null === (t = A.default.window) || void 0 === t || t.close(null === A.default || void 0 === A.default ? void 0 : null === (e = A.default.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY)
    }

    function ed(e) {
        let t = h.default.getGameForPID(e);
        c.default.setAssociatedGame(null != k ? k : -1, e, t)
    }
    let eE = (() => {
        let e = null;
        async function t() {
            if (!b.OVERLAY_SUPPORTED || !(0, G.supportsOutOfProcess)()) throw Q.error("Attempted to load out of process overlay on an unsupported platform."), Error("Out of Process Overlay is not supported on this platform.");
            try {
                var e;
                let {
                    OutOfProcess: t
                } = await eo();
                return null == t || null === (e = t.init) || void 0 === e || e.call(t), t.setClickZoneCallback(eS), t.setHostWindowCallbacks(ei, er, ed), t.setFocusCallback(e_), t
            } catch (e) {
                throw Q.error("failed loading out of process overlay", e), e
            }
        }
        return () => (null == e && (e = t()), e)
    })();

    function eu() {
        return ea({
            added: f.default.getRunningGames(),
            removed: []
        })
    }
    let es = q("setOverlayEnabled", async e => {
        if (!b.OVERLAY_SUPPORTED || V === e) return;
        V = e, N.OverlayStoredSettings.update({
            enabled: e
        }), ep.emitChange();
        let t = await eo(),
            {
                OutOfProcess: n
            } = t;
        (0, G.setOutOfProcessSupport)(null != n), V ? (await $(t), eu()) : (await en(void 0), await $(t))
    });

    function e_(e) {
        if (0 === e) {
            var t, n;
            let e = null !== (n = null === (t = U[null != W ? W : 0]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : b.OverlayMethod.Disabled;
            if (e === b.OverlayMethod.OutOfProcess) return
        }
        c.default.setFocusedPID(0 === e ? null : e)
    }

    function ec(e, t, n) {
        var a;
        let l = null === (a = f.default.getGameForPID(e)) || void 0 === a ? void 0 : a.name,
            o = y.default.getGameByName(l),
            i = {
                game_name: l,
                game_id: null == o ? null : o.id,
                success: t,
                ...n
            };
        (0, _.createLayout)(G.OVERLAY_LAYOUT_ID, p.default.getDefaultLayout(G.OVERLAY_LAYOUT_ID), {
            width: n.graphics_width,
            height: n.graphics_height
        }), R.default.track(m.AnalyticEvents.OVERLAY_HOOK_RESULT, i), Q.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), i), t ? J(e, "CONNECTED", "CONNECTING") : J(e, "CONNECT_FAILED", "CONNECTING")
    }

    function eO() {
        let e = D.default.getToken(),
            t = D.default.getId();
        null != e && I.send({
            type: m.OverlayEventTypes.DISPATCH,
            pid: null,
            token: null,
            payloads: [{
                type: "UPDATE_TOKEN",
                token: e,
                userId: t
            }]
        })
    }
    async function eA(e) {
        let t = await eo();
        if (null != W && W !== G.DEV_PID && t.sendCommand(W, {
                message: "intercept_input",
                intercept: !e
            }), (0, G.supportsOutOfProcess)()) {
            let t = await eE();
            t.setInteractionEnabled(!e)
        }
    }

    function eT(e) {
        if (e) {
            let t = f.default.getVisibleGame(),
                n = null == t ? null : f.default.getGameOverlayStatus(t);
            (null == n ? void 0 : n.overlayMethod) === b.OverlayMethod.OutOfProcess ? eA(e) : setTimeout(() => eA(e), 200)
        } else eA(e)
    }
    let eI = null;

    function eS(e, t, n) {
        c.default.relayClickZoneClicked(e, t, n)
    }
    async function ef(e) {
        if (!(0, G.supportsOutOfProcess)()) return;
        let t = await eE();
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

    function eN(e) {
        return !(B || !Y || X.has(e.type)) && ("USER_SETTINGS_PROTO_UPDATE" === e.type && (e = {
            ...e,
            settings: {
                type: e.settings.type,
                proto: (0, C.protoToB64WithType)(e.settings.type, e.settings.proto)
            }
        }), H.add(e), null == l && (l = setTimeout(eL, 1)), !1)
    }

    function eL() {
        if (null != l && (clearTimeout(l), l = null), !Y) {
            H.clear();
            return
        }
        H.size > 0 && (I.send({
            type: m.OverlayEventTypes.DISPATCH,
            pid: null,
            token: null,
            payloads: Array.from(H)
        }), H.clear())
    }

    function eC(e) {
        return null != e && (0, v.constantTimeCompare)(e, F)
    }

    function eD(e) {
        switch (0, e.type) {
            case m.OverlayEventTypes.CONNECT:
                let t = D.default.getToken();
                if (null == t) break;
                (0, _.createLayout)(G.OVERLAY_LAYOUT_ID, p.default.getDefaultLayout(G.OVERLAY_LAYOUT_ID)), Promise.all([(0, L.default)(t, e.pid), d.default.PersistedStore.getAllStates()]).then(t => {
                    let [n, a] = t, {
                        pid: l,
                        token: o
                    } = e;
                    I.send({
                        type: m.OverlayEventTypes.STORAGE_SYNC,
                        pid: l,
                        token: o,
                        states: a
                    }), I.send({
                        type: m.OverlayEventTypes.DISPATCH,
                        pid: l,
                        token: o,
                        payloads: [n]
                    }), J(l, "READY"), c.default.overlayReady(l)
                });
                break;
            case m.OverlayEventTypes.DISPATCH:
                if (null != e.payloads) {
                    var n;
                    n = e.payloads, B = !0, n.forEach(e => E.default.dispatch(e)), B = !1
                }
                break;
            case m.OverlayEventTypes.LOG_MESSAGES:
                Q.info("[overlay data received]", e.payload)
        }
    }
    class ey extends d.default.Store {
        initialize() {
            !(!b.OVERLAY_SUPPORTED || __OVERLAY__) && (w.add(b.OverlayMethod.Hook), this.waitFor(f.default, D.default), I.setReceiveCommandHandler(eD, eC), D.default.addChangeListener(eO), es(N.OverlayStoredSettings.enabled), E.default.addInterceptor(eN))
        }
        isInputLocked(e) {
            return !x.has(e)
        }
        isSupported() {
            return b.OVERLAY_SUPPORTED
        }
        isMethodSupported(e) {
            return b.OVERLAY_SUPPORTED && w.has(e)
        }
        get enabled() {
            return V
        }
        getFocusedPID() {
            return W
        }
        isReady(e) {
            return "READY" === M.get(e)
        }
        isCrashed(e) {
            return "CRASHED" === M.get(e)
        }
    }
    ey.displayName = "OverlayBridgeStore";
    let ep = new ey(E.default, __OVERLAY__ ? {
        OVERLAY_RELAY_CLICK_ZONE_CLICKED: function(e) {
            let {
                normalizedMouseX: t,
                normalizedMouseY: n
            } = e;
            setTimeout(() => {
                let e = Math.ceil(t * window.innerWidth),
                    a = Math.ceil(n * window.innerHeight),
                    l = (0, g.createMouseEvent)("click", e, a);
                (0, g.dispatchEventToPoint)(l, e, a)
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
                a = () => {
                    15 === n ? c.default.notifyReadyToShow(e.associatedGamePID) : (n += 1, t().then(a))
                };
            a()
        }
    } : {
        CONNECTION_OPEN: function() {
            K = !0, eu()
        },
        CONNECTION_CLOSED: function() {
            K = !1, W = null, ea(void 0)
        },
        OVERLAY_SET_ENABLED: function(e) {
            let {
                enabled: t
            } = e;
            return es(t), !1
        },
        OVERLAY_FOCUSED: function(e) {
            let {
                pid: t
            } = e;
            W = t
        },
        RUNNING_GAMES_CHANGE: function(e) {
            ea(e)
        },
        OVERLAY_SET_INPUT_LOCKED: function(e) {
            let {
                locked: t,
                pid: n
            } = e, a = M.get(n);
            if (t || "READY" === a || "CRASHED" === a) {
                if (t ? x.delete(n) : x.add(n), z.clear(), null != eI && (clearTimeout(eI), eI = null, t)) return;
                t ? eT(t) : eI = setTimeout(() => {
                    eT(t), eI = null
                }, 100)
            }
        },
        OVERLAY_ACTIVATE_REGION: function(e) {
            let {
                region: t
            } = e;
            z.add(t), eT(!1)
        },
        OVERLAY_DEACTIVATE_ALL_REGIONS: function() {
            z.clear(), eT(!0)
        },
        RPC_SERVER_READY: function(e) {
            let {
                port: t
            } = e, n = crypto.getRandomValues(new Uint8Array(8));
            F = btoa(String.fromCharCode(...n));
            let l = new URLSearchParams;
            l.append("build_id", "54b733bbd25aab36e705f67be546637f52ae90de"), l.append("rpc", String(t)), l.append("rpc_auth_token", F), a = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(l.toString())
        },
        OVERLAY_CALL_PRIVATE_CHANNEL: function(e) {
            let {
                channelId: t,
                ring: n
            } = e;
            setImmediate(() => {
                O.default.selectPrivateChannel(t), u.default.call(t, !1, !!n)
            })
        },
        OVERLAY_JOIN_GAME: function(e) {
            let {
                userId: t,
                sessionId: n,
                applicationId: a,
                channelId: l,
                messageId: o
            } = e;
            setImmediate(() => {
                s.default.join({
                    userId: t,
                    sessionId: n,
                    applicationId: a,
                    channelId: l,
                    messageId: o
                }), null != W && c.default.setLocked(!0, W)
            })
        },
        OVERLAY_CRASHED: function(e) {
            let {
                pid: t
            } = e;
            J(t, "CRASHED")
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
            if (Q.verbose("handleGameToggleOverlay", e), !("pid" in e.game)) {
                Q.verbose("handleGameToggleOverlay: Game was not a RunningGame.", e);
                return
            }
            let t = [e.game];
            ea({
                added: e.newEnabledValue ? t : [],
                removed: e.newEnabledValue ? [] : t
            })
        },
        OVERLAY_SET_CLICK_ZONES: function(e) {
            let {
                zones: t
            } = e;
            ef(t)
        },
        OVERLAY_SET_ASSOCIATED_GAME: function(e) {
            var t, n;
            let a = null !== (n = null === (t = U[e.previousAssociatedGamePID]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : b.OverlayMethod.Disabled;
            if (a !== b.OverlayMethod.OutOfProcess) return;
            let l = M.get(e.previousAssociatedGamePID);
            null != l && (M.delete(e.previousAssociatedGamePID), M.set(e.associatedGamePID, l)), x.delete(e.previousAssociatedGamePID), k = e.associatedGamePID
        },
        OVERLAY_NOTIFY_READY_TO_SHOW: function(e) {
            eE().then(t => {
                null == t || t.readyToShow(e.pid)
            })
        }
    });
    var eh = ep
}