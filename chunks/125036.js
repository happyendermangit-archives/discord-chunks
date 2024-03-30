function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getOverlayURL: function() {
            return eh
        }
    });
    var r, o, i, a, u, s, l = n("478252"),
        c = n("898511"),
        f = n("629815"),
        d = n("200915"),
        _ = n("391737"),
        E = n("33928"),
        p = n("814438"),
        m = n("585949"),
        y = n("517727"),
        I = n("633814"),
        h = n("559264"),
        O = n("35523"),
        T = n("654370"),
        S = n("783655"),
        v = n("805504"),
        g = n("428249"),
        A = n("217014"),
        b = n("950520"),
        N = n("990790"),
        R = n("215927"),
        C = n("870331"),
        P = n("809354"),
        D = n("707346"),
        L = n("131900"),
        M = n("359212"),
        U = n("281767"),
        w = n("336734");

    function k(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function G(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function B(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    G(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    G(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function j(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function F(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function V(e) {
        return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function H(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                F(e, t, n[t])
            })
        }
        return e
    }

    function x(e, t) {
        return (x = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Y(e) {
        return function(e) {
            if (Array.isArray(e)) return k(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || W(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function W(e, t) {
        if (e) {
            if ("string" == typeof e) return k(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return k(e, t)
        }
    }

    function K(e, t) {
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
    }(r = i || (i = {})).ATTACHING = "ATTACHING", r.CONNECTING = "CONNECTING", r.CONNECTED = "CONNECTED", r.READY = "READY", r.CRASHED = "CRASHED", r.CONNECT_FAILED = "CONNECT_FAILED", r.HOOK_FAILED = "HOOK_FAILED";
    var z = {},
        X = new Map,
        q = !1,
        Q = new Set,
        J = !1,
        Z = !1,
        $ = !1,
        ee = null,
        et = null,
        en = "",
        er = new Set,
        eo = !1,
        ei = new Set(["CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "WINDOW_INIT", "WINDOW_FULLSCREEN_CHANGE", "WINDOW_FOCUS", "WINDOW_RESIZED", "WINDOW_HIDDEN", "CHANNEL_SELECT", "DELAYED_CHANNEL_SELECT", "DELAYED_SELECT_FLUSH", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "MESSAGE_START_EDIT", "MESSAGE_UPDATE_EDIT", "MESSAGE_END_EDIT", "APP_VIEW_SET_HOME_LINK", "APPLICATION_STORE_LOCATION_CHANGE", "LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGIN_MFA_STEP", "LOGIN_MFA", "LOGIN_MFA_FAILURE", "LOGIN_MFA_SMS", "LOGIN_MFA_SMS_REQUEST_SUCCESS", "LOGIN_MFA_SMS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_RESET", "FINGERPRINT", "REGISTER", "REGISTER_SUCCESS", "REGISTER_FAILURE", "VERIFY_FAILURE", "VERIFY_SUCCESS", "START_SESSION", "FORGOT_PASSWORD_SENT", "UPDATE_TOKEN", "SET_CONSENT_REQUIRED", "CONTEXT_MENU_OPEN", "CONTEXT_MENU_CLOSE", "MODAL_PUSH", "MODAL_POP", "MODAL_UPDATE", "MODAL_POP_ALL", "GUILD_SETTINGS_OPEN", "USER_SETTINGS_MODAL_OPEN", "CHANNEL_SETTINGS_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "EMAIL_VERIFICATION_MODAL_OPEN", "MENTION_MODAL_OPEN", "QUICKSWITCHER_SHOW", "SEARCH_MODAL_OPEN", "IFE_EXPERIMENT_SEARCH_MODAL_OPEN", "INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "GUILD_SETTINGS_CLOSE", "USER_SETTINGS_MODAL_CLOSE", "CHANNEL_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "MENTION_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "SEARCH_MODAL_CLOSE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "QUICKSWITCHER_SHOW", "QUICKSWITCHER_HIDE", "QUICKSWITCHER_SWITCH_TO", "QUICKSWITCHER_SEARCH", "QUICKSWITCHER_SELECT", "UPDATE_CHANNEL_DIMENSIONS", "UPDATE_CHANNEL_LIST_DIMENSIONS", "UPDATE_GUILD_LIST_DIMENSIONS", "TRACK", "CHANNEL_SETTINGS_OPEN", "CHANNEL_SETTINGS_INIT", "CHANNEL_SETTINGS_CLOSE", "GUILD_SETTINGS_INIT", "GUILD_SETTINGS_OPEN", "GUILD_SETTINGS_CLOSE", "TUTORIAL_INDICATOR_SHOW", "TUTORIAL_INDICATOR_HIDE", "TUTORIAL_INDICATOR_SUPPRESS_ALL", "USER_SETTINGS_ACCOUNT_INIT", "USER_SETTINGS_ACCOUNT_CLOSE", "NOTICE_SHOW", "NOTICE_DISMISS", "NOTICE_DISABLE", "SEARCH_EDITOR_STATE_CHANGE", "SEARCH_EDITOR_STATE_CLEAR", "SEARCH_START", "SEARCH_FINISH", "MOD_VIEW_SEARCH_FINISH", "SEARCH_INDEXING", "SEARCH_CLEAR", "SEARCH_ENSURE_SEARCH_STATE", "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", "SEARCH_CLEAR_HISTORY", "SEARCH_SET_SHOW_BLOCKED_RESULTS", "LAYOUT_CREATE", "EXPERIMENT_REGISTER_LEGACY", "POPOUT_WINDOW_OPEN", "POPOUT_WINDOW_CLOSE", "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", "TYPING_START_LOCAL", "TYPING_STOP_LOCAL", "SPOTIFY_SET_ACTIVE_DEVICE", "LOAD_INVITE_SUGGESTIONS", "INVITE_SUGGESTIONS_SEARCH", "IMPERSONATE_UPDATE", "IMPERSONATE_STOP", "CREATE_PENDING_REPLY", "CREATE_SHALLOW_PENDING_REPLY", "DELETE_PENDING_REPLY", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", "GUILD_FEED_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", "APPLICATION_COMMAND_UPDATE_OPTIONS", "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", "APPLICATION_COMMAND_USED", "DCF_HANDLE_DC_SHOWN", "DCF_HANDLE_DC_DISMISSED"]),
        ea = new Set,
        eu = new O.default("OverlayBridgeStore"),
        es = "none",
        el = (0, l.createObservableLock)({
            onContention: function(e, t) {
                return eu.verbose("overlayLock contention: lastMutexCall ".concat(es))
            },
            onContentionResolved: function() {
                return eu.verbose("overlayLock contention: resolved.")
            },
            onTimeout: function(e, t) {
                var n = "overlayLock: lastMutexCall ".concat(es, "}");
                eu.error(n), C.default.track(U.AnalyticEvents.OVERLAY_HOOK_RESULT, {
                    success: !1,
                    error_description: n
                })
            },
            timeoutMs: 18e4
        });

    function ec(e, t) {
        return function() {
            for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            el(function() {
                return t.apply(void 0, Y(r))
            }, e)
        }
    }

    function ef(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = X.get(e);
        if ((null === n || r === n) && r !== t) {
            if (null == t ? X.delete(e) : X.set(e, t), null == t || "CRASHED" === t) {
                ee = null;
                var o, i = null === y.default || void 0 === y.default ? void 0 : null === (o = y.default.fileManager) || void 0 === o ? void 0 : o.uploadDiscordHookCrashes;
                null != i && i().then(function(e) {
                    if (Array.isArray(e) && 0 !== e.length) {
                        eu.log("transitionOverlayPIDStatus: Uploaded minidumps", e);
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                                var a, u, s, l, c, f, d, _ = o.value;
                                if (null != _) {
                                    var E = null != _.processName ? b.default.getGameByExecutable(_.processName) : null;
                                    C.default.track(U.AnalyticEvents.OVERLAY_HOOK_CRASHED, {
                                        process_name: null == _ ? void 0 : _.processName,
                                        game_name: null !== (a = null == E ? void 0 : E.name) && void 0 !== a ? a : null,
                                        game_id: null !== (u = null == E ? void 0 : E.id) && void 0 !== u ? u : null,
                                        minidump_exception_type: null !== (s = _.exceptionString) && void 0 !== s ? s : null,
                                        minidump_exception_module_name: null !== (l = _.exceptionModuleName) && void 0 !== l ? l : null,
                                        minidump_relative_crash_address: null !== (c = _.relativeCrashAddress) && void 0 !== c ? c : null,
                                        minidump_exception_module_version: null !== (f = _.exceptionModuleVersion) && void 0 !== f ? f : null,
                                        minidump_exception_module_code_id: null !== (d = _.exceptionModuleCodeId) && void 0 !== d ? d : null
                                    })
                                }
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
                    }
                })
            }
            er.delete(e), eu.info("pid=".concat(e, " status transition ").concat(null != r ? r : "DISCONNECTED", " -> ").concat(null != t ? t : "DISCONNECTED"), X), q = Array.from(X.values()).some(function(e) {
                return "READY" === e
            })
        }
    }

    function ed(e) {
        return e_.apply(this, arguments)
    }

    function e_() {
        return (e_ = B(function(e) {
            var t, n;
            return K(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (!L.default.supportsFeature(U.NativeFeatures.CREATE_HOST_ON_ATTACH)) return [3, 4];
                        if (!(X.size > 0)) return [3, 2];
                        return es = "reconcile.getOverlayURL", [4, eh()];
                    case 1:
                        return t = r.sent(), es = "reconcile.createHostProcess", e.createHostProcess(t, eP, eR), [3, 3];
                    case 2:
                        es = "reconcile.destroyHostProcess", e.destroyHostProcess(), r.label = 3;
                    case 3:
                        return [3, 7];
                    case 4:
                        if (!J) return [3, 6];
                        return [4, eh()];
                    case 5:
                        return n = r.sent(), e.createHostProcess(n, eP, eR), [3, 7];
                    case 6:
                        e.destroyHostProcess(), r.label = 7;
                    case 7:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function eE() {
        return (eE = B(function(e) {
            var t, n, r;
            return K(this, function(o) {
                switch (o.label) {
                    case 0:
                        if (!el.isMutexHeld() && eu.error("_attachPIDMustBeLocked: overlayMutex is not held.", e), null != (t = X.get(e))) return eu.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(t)), [2];
                        return es = "attach.getOverlayModule", [4, eO()];
                    case 1:
                        return n = o.sent(), es = "attach.transitionOverlayPIDStatus", ef(e, "ATTACHING"), es = "attach.attachToProcess", [4, I.attachToProcess(e)];
                    case 2:
                        if (null != (r = o.sent())) return [3, 4];
                        return es = "attach.transitionOverlayPIDStatus (CONNECTING)", ef(e, "CONNECTING", "ATTACHING"), es = "attach.reconcileHostProcess", [4, ed(n)];
                    case 3:
                        return o.sent(), n.connectProcess(e), [3, 5];
                    case 4:
                        es = "attach.transitionOverlayPIDStatus (HOOK_FAILED)", ef(e, "HOOK_FAILED", "ATTACHING"), eu.warn("Could not hook to pid=".concat(e, ", error=").concat(r)), o.label = 5;
                    case 5:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function ep() {
        return (ep = B(function(e) {
            var t;
            return K(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!el.isMutexHeld() && eu.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !X.has(e)) return eu.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state")), [2];
                        return es = "detach.getOverlayModule", [4, eO()];
                    case 1:
                        return t = n.sent(), es = "detach.transitionOverlayPIDStatus", ef(e, null), e !== M.DEV_PID && (es = "detach.cancelAttachToProcess", I.cancelAttachToProcess(e), es = "detach.disconnectProcess", t.disconnectProcess(e)), es = "detach.reconcileHostProcess", [4, ed(t)];
                    case 2:
                        return n.sent(), [2]
                }
            })
        })).apply(this, arguments)
    }

    function em(e) {
        return ey.apply(this, arguments)
    }

    function ey() {
        return (ey = B(function(e) {
            var t, n, r, o, i, a, u, s, l, c, f, d, _, E, p, m, y, I, h, O;

            function S(e) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = B(function(t) {
                    var n, r;
                    return K(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (!(t in z)) return eu.error("Unexpected. ".concat(t, " is not a tracked game?"), z, e), [2];
                                n = z[t], delete z[t], o.label = 1;
                            case 1:
                                return o.trys.push([1, 3, , 4]), [4, n.deconstructor()];
                            case 2:
                                return o.sent(), [3, 4];
                            case 3:
                                return r = o.sent(), eu.error("Failed to deconstruct tracked game ".concat(t), r), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
            return K(this, function(v) {
                switch (v.label) {
                    case 0:
                        if (eu.verbose("updateIntendedOverlayPIDs", {
                                isConnectionOpened: $,
                                action: e
                            }), !el.isMutexHeld() && eu.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e), !$ && null != e) return eu.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e), [2];
                        if (!(null == e || !J)) return [3, 9];
                        eu.verbose("updateIntendedOverlayPIDs: Removing all.", z, e), t = Object.keys(z), n = !0, r = !1, o = void 0, v.label = 1;
                    case 1:
                        v.trys.push([1, 6, 7, 8]), i = t[Symbol.iterator](), v.label = 2;
                    case 2:
                        if (n = (a = i.next()).done) return [3, 5];
                        return [4, S(Number(a.value))];
                    case 3:
                        v.sent(), v.label = 4;
                    case 4:
                        return n = !0, [3, 2];
                    case 5:
                        return [3, 8];
                    case 6:
                        return u = v.sent(), r = !0, o = u, [3, 8];
                    case 7:
                        try {
                            !n && null != i.return && i.return()
                        } finally {
                            if (r) throw o
                        }
                        return [7];
                    case 8:
                        return [2];
                    case 9:
                        l = !0, c = !1, f = void 0, v.label = 10;
                    case 10:
                        v.trys.push([10, 15, 16, 17]), d = function() {
                            var t, n;
                            return K(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (t = E.value, n = T.default.getGameOverlayStatus(t), eu.verbose("updateIntendedOverlayPIDs: newGame", t, n), null == n || !n.enabled) return [2, "continue"];
                                        switch (t.pid in z && eu.error("Unexpected. ".concat(t.pid, " is being added twice?"), z, e), n.overlayMethod) {
                                            case w.OverlayMethod.OutOfProcess:
                                                return [3, 1];
                                            case w.OverlayMethod.Hook:
                                                return [3, 4];
                                            case w.OverlayMethod.Disabled:
                                                return [3, 7]
                                        }
                                        return [3, 8];
                                    case 1:
                                        return [4, eA()];
                                    case 2:
                                        return [4, r.sent().trackGame(t.pid)];
                                    case 3:
                                        return r.sent(), z[t.pid] = {
                                            method: n.overlayMethod,
                                            deconstructor: B(function() {
                                                return K(this, function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, eA()];
                                                        case 1:
                                                            return [4, e.sent().untrackGame(t.pid)];
                                                        case 2:
                                                            return e.sent(), [2]
                                                    }
                                                })
                                            })
                                        }, [3, 9];
                                    case 4:
                                        if (X.has(t.pid)) return [3, 6];
                                        return [4, function(e) {
                                            return eE.apply(this, arguments)
                                        }(t.pid)];
                                    case 5:
                                        r.sent(), r.label = 6;
                                    case 6:
                                        return z[t.pid] = {
                                            method: n.overlayMethod,
                                            deconstructor: B(function() {
                                                return K(this, function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, function(e) {
                                                                return ep.apply(this, arguments)
                                                            }(t.pid)];
                                                        case 1:
                                                            return e.sent(), [2]
                                                    }
                                                })
                                            })
                                        }, [3, 9];
                                    case 7:
                                        return eu.verbose("updateIntendedOverlayPIDs: disabled", t), [3, 9];
                                    case 8:
                                        return eu.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(n.overlayMethod)), [3, 9];
                                    case 9:
                                        return [2]
                                }
                            })
                        }, _ = (null !== (s = e.added) && void 0 !== s ? s : [])[Symbol.iterator](), v.label = 11;
                    case 11:
                        if (l = (E = _.next()).done) return [3, 14];
                        return [5, function(e) {
                            var t = "function" == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length) return {
                                next: function() {
                                    return e && r >= e.length && (e = void 0), {
                                        value: e && e[r++],
                                        done: !e
                                    }
                                }
                            };
                            throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        }(d())];
                    case 12:
                        v.sent(), v.label = 13;
                    case 13:
                        return l = !0, [3, 11];
                    case 14:
                        return [3, 17];
                    case 15:
                        return u = v.sent(), c = !0, f = u, [3, 17];
                    case 16:
                        try {
                            !l && null != _.return && _.return()
                        } finally {
                            if (c) throw f
                        }
                        return [7];
                    case 17:
                        p = !0, m = !1, y = void 0, v.label = 18;
                    case 18:
                        v.trys.push([18, 23, 24, 25]), I = e.removed[Symbol.iterator](), v.label = 19;
                    case 19:
                        if (p = (h = I.next()).done) return [3, 22];
                        return O = h.value, eu.verbose("updateIntendedOverlayPIDs: removedGame", O), [4, S(O.pid)];
                    case 20:
                        v.sent(), v.label = 21;
                    case 21:
                        return p = !0, [3, 19];
                    case 22:
                        return [3, 25];
                    case 23:
                        return u = v.sent(), m = !0, y = u, [3, 25];
                    case 24:
                        try {
                            !p && null != I.return && I.return()
                        } finally {
                            if (m) throw y
                        }
                        return [7];
                    case 25:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
    var eI = ec("updateIntendedOverlayPIDs", function(e) {
        return em(e)
    });

    function eh() {
        return new Promise(function(e) {
            ex.addConditionalChangeListener(function() {
                if (null != a) return e(a), !1
            })
        })
    }
    var eO = function() {
        var e = function(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"][Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a = o.value;
                        null == e[a] && (eu.info("polyfilling OverlayModule.".concat(a, "(); Overlay module is probably out of date.")), e[a] = function() {})
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
            },
            t = null;

        function n() {
            return (n = B(function() {
                var t;
                return K(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (!w.OVERLAY_SUPPORTED) throw eu.error("Attempted to load overlay on an unsupported platform."), Error("Overlay is not supported on this platform.");
                            n.label = 1;
                        case 1:
                            return n.trys.push([1, 3, , 4]), [4, L.default.ensureModule("discord_overlay2")];
                        case 2:
                            return n.sent(), [2, e(L.default.requireModule("discord_overlay2"))];
                        case 3:
                            throw t = n.sent(), eu.error("failed ensuring discord_overlay2", t), t;
                        case 4:
                            return [2]
                    }
                })
            })).apply(this, arguments)
        }
        return function() {
            return null == t && (t = function() {
                return n.apply(this, arguments)
            }()), t
        }
    }();

    function eT(e) {
        return eS.apply(this, arguments)
    }

    function eS() {
        return (eS = B(function(e) {
            var t, n, r, o, i, a, u, s, l;
            return K(this, function(c) {
                switch (c.label) {
                    case 0:
                        return c.trys.push([0, 3, , 4]), [4, eh()];
                    case 1:
                        return i = c.sent() + "&oop=true&pid=".concat(e), [4, null === y.default || void 0 === y.default ? void 0 : null === (o = y.default.globalOverlay) || void 0 === o ? void 0 : null === (r = o.openWindow) || void 0 === r ? void 0 : r.call(o, i)];
                    case 2:
                        return c.sent(), [3, 4];
                    case 3:
                        return a = c.sent(), eu.log("globalOverlay: Failed to open overlay: ".concat(a), a), null === y.default || void 0 === y.default || null === (s = y.default.window) || void 0 === s || s.close(null === y.default || void 0 === y.default ? void 0 : null === (u = y.default.globalOverlay) || void 0 === u ? void 0 : u.WINDOW_KEY), [3, 4];
                    case 4:
                        return et = e, [4, null === y.default || void 0 === y.default ? void 0 : null === (n = y.default.window) || void 0 === n ? void 0 : n.getNativeHandle(null === y.default || void 0 === y.default ? void 0 : null === (t = y.default.globalOverlay) || void 0 === t ? void 0 : t.WINDOW_KEY)];
                    case 5:
                        return [2, null !== (l = c.sent()) && void 0 !== l ? l : ""]
                }
            })
        })).apply(this, arguments)
    }

    function ev() {
        var e, t;
        null === y.default || void 0 === y.default || null === (t = y.default.window) || void 0 === t || t.close(null === y.default || void 0 === y.default ? void 0 : null === (e = y.default.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY), et = null
    }

    function eg(e) {
        var t = R.default.getGameForPID(e);
        p.default.setAssociatedGame(null != et ? et : -1, e, t)
    }
    var eA = function() {
        var e = null;

        function t() {
            return (t = B(function() {
                var e, t, n, r;
                return K(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (!w.OVERLAY_SUPPORTED || !(0, M.supportsOutOfProcess)()) throw eu.error("Attempted to load out of process overlay on an unsupported platform."), Error("Out of Process Overlay is not supported on this platform.");
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 3, , 4]), [4, eO()];
                        case 2:
                            return null == (n = o.sent().OutOfProcess) || null === (e = n.init) || void 0 === e || e.call(n), n.setClickZoneCallback(ek), n.setHostWindowCallbacks(eT, ev, eg), n.setFocusCallback(eR), null === (t = n.setSuccessfullyShownCallback) || void 0 === t || t.call(n, eC), [2, n];
                        case 3:
                            throw r = o.sent(), eu.error("failed loading out of process overlay", r), r;
                        case 4:
                            return [2]
                    }
                })
            })).apply(this, arguments)
        }
        return function() {
            return null == e && (e = function() {
                return t.apply(this, arguments)
            }()), e
        }
    }();

    function eb() {
        return eI({
            added: T.default.getRunningGames(),
            removed: []
        })
    }
    var eN = ec("setOverlayEnabled", (o = B(function(e, t) {
        var n, r;
        return K(this, function(o) {
            switch (o.label) {
                case 0:
                    if (!w.OVERLAY_SUPPORTED || J === e && Z === t) return [2];
                    return J = e, Z = t, S.OverlayStoredSettings.update({
                        enabled: e,
                        legacyEnabled: t
                    }), ex.emitChange(), [4, eO()];
                case 1:
                    return r = (n = o.sent()).OutOfProcess, (0, M.setOutOfProcessSupport)(null != r), [4, em(void 0)];
                case 2:
                    return o.sent(), [4, ed(n)];
                case 3:
                    return o.sent(), J && eb(), [2]
            }
        })
    }), function(e, t) {
        return o.apply(this, arguments)
    }));

    function eR(e) {
        if (0 === e) {
            var t, n;
            if ((null !== (n = null === (t = z[null != ee ? ee : 0]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : w.OverlayMethod.Disabled) === w.OverlayMethod.OutOfProcess) return
        }
        p.default.setFocusedPID(0 === e ? null : e)
    }

    function eC(e) {
        p.default.successfullyShown(e)
    }

    function eP(e, t, n) {
        var r, o = null === (r = T.default.getGameForPID(e)) || void 0 === r ? void 0 : r.name,
            i = b.default.getGameByName(o),
            a = H({
                game_name: o,
                game_id: null == i ? null : i.id,
                success: t
            }, n);
        (0, E.createLayout)(M.OVERLAY_LAYOUT_ID, N.default.getDefaultLayout(M.OVERLAY_LAYOUT_ID), {
            width: n.graphics_width,
            height: n.graphics_height
        }), C.default.track(U.AnalyticEvents.OVERLAY_HOOK_RESULT, a), eu.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), a), t ? ef(e, "CONNECTED", "CONNECTING") : ef(e, "CONNECT_FAILED", "CONNECTING")
    }

    function eD() {
        var e = A.default.getToken(),
            t = A.default.getId();
        null != e && h.send({
            type: U.OverlayEventTypes.DISPATCH,
            pid: null,
            token: null,
            payloads: [{
                type: "UPDATE_TOKEN",
                token: e,
                userId: t
            }]
        })
    }

    function eL(e) {
        return eM.apply(this, arguments)
    }

    function eM() {
        return (eM = B(function(e) {
            var t;
            return K(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, eO()];
                    case 1:
                        if (t = n.sent(), null != ee && ee !== M.DEV_PID && t.sendCommand(ee, {
                                message: "intercept_input",
                                intercept: !e
                            }), !(0, M.supportsOutOfProcess)()) return [3, 3];
                        return [4, eA()];
                    case 2:
                        n.sent().setInteractionEnabled(!e), n.label = 3;
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function eU(e) {
        if (e) {
            var t = T.default.getVisibleGame(),
                n = null == t ? null : T.default.getGameOverlayStatus(t);
            (null == n ? void 0 : n.overlayMethod) === w.OverlayMethod.OutOfProcess ? eL(e) : setTimeout(function() {
                return eL(e)
            }, 200)
        } else eL(e)
    }
    var ew = null;

    function ek(e, t, n) {
        p.default.relayClickZoneClicked(e, t, n)
    }

    function eG() {
        return (eG = B(function(e) {
            return K(this, function(t) {
                switch (t.label) {
                    case 0:
                        if (!(0, M.supportsOutOfProcess)()) return [2];
                        return [4, eA()];
                    case 1:
                        return t.sent().setClickZones(e.map(function(e) {
                            return {
                                name: e.name,
                                left: e.left,
                                top: e.top,
                                right: e.right,
                                bottom: e.bottom
                            }
                        })), [2]
                }
            })
        })).apply(this, arguments)
    }

    function eB(e) {
        if (eo || !q || ei.has(e.type)) return !1;
        if ("USER_SETTINGS_PROTO_UPDATE" === e.type) {
            var t, n;
            t = H({}, e), n = (n = {
                settings: {
                    type: e.settings.type,
                    proto: (0, g.protoToB64WithType)(e.settings.type, e.settings.proto)
                }
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), e = t
        }
        return Q.add(e), null == u && (u = setTimeout(ej, 1)), !1
    }

    function ej() {
        if (null != u && (clearTimeout(u), u = null), !q) {
            Q.clear();
            return
        }
        Q.size > 0 && (h.send({
            type: U.OverlayEventTypes.DISPATCH,
            pid: null,
            token: null,
            payloads: Array.from(Q)
        }), Q.clear())
    }

    function eF(e) {
        return null != e && (0, P.constantTimeCompare)(e, en)
    }

    function eV(e) {
        switch (0, e.type) {
            case U.OverlayEventTypes.CONNECT:
                var t, n = A.default.getToken();
                if (null == n) break;
                (0, E.createLayout)(M.OVERLAY_LAYOUT_ID, N.default.getDefaultLayout(M.OVERLAY_LAYOUT_ID)), Promise.all([(0, v.default)(n, e.pid), c.default.PersistedStore.getAllStates()]).then(function(t) {
                    var n, r, o = (r = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(n = t) || function(e, t) {
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
                        }(n, r) || W(n, r) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        i = o[0],
                        a = o[1],
                        u = e.pid,
                        s = e.token;
                    h.send({
                        type: U.OverlayEventTypes.STORAGE_SYNC,
                        pid: u,
                        token: s,
                        states: a
                    }), h.send({
                        type: U.OverlayEventTypes.DISPATCH,
                        pid: u,
                        token: s,
                        payloads: [i]
                    }), ef(u, "READY"), p.default.overlayReady(u)
                });
                break;
            case U.OverlayEventTypes.DISPATCH:
                if (null != e.payloads) {
                    ;
                    t = e.payloads, eo = !0, t.forEach(function(e) {
                        return f.default.dispatch(e)
                    }), eo = !1
                }
                break;
            case U.OverlayEventTypes.LOG_MESSAGES:
                eu.info("[overlay data received]", e.payload)
        }
    }
    var eH = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && x(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = V(t);
            if (n) {
                var a = V(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                !(!w.OVERLAY_SUPPORTED || __OVERLAY__) && (this.waitFor(T.default, A.default), h.setReceiveCommandHandler(eV, eF), A.default.addChangeListener(eD), eN(S.OverlayStoredSettings.enabled, S.OverlayStoredSettings.legacyEnabled), f.default.addInterceptor(eB))
            }
        }, {
            key: "isInputLocked",
            value: function(e) {
                return !er.has(e)
            }
        }, {
            key: "isSupported",
            value: function() {
                return w.OVERLAY_SUPPORTED
            }
        }, {
            key: "enabled",
            get: function() {
                return J
            }
        }, {
            key: "legacyEnabled",
            get: function() {
                return Z
            }
        }, {
            key: "getFocusedPID",
            value: function() {
                return ee
            }
        }, {
            key: "isReady",
            value: function(e) {
                return "READY" === X.get(e)
            }
        }, {
            key: "isCrashed",
            value: function(e) {
                return "CRASHED" === X.get(e)
            }
        }], j(r.prototype, o), i && j(r, i), u
    }(c.default.Store);
    F(eH, "displayName", "OverlayBridgeStore");
    var ex = new eH(f.default, __OVERLAY__ ? {
        OVERLAY_RELAY_CLICK_ZONE_CLICKED: function(e) {
            var t = e.normalizedMouseX,
                n = e.normalizedMouseY;
            setTimeout(function() {
                var e = Math.ceil(t * window.innerWidth),
                    r = Math.ceil(n * window.innerHeight),
                    o = (0, D.createMouseEvent)("click", e, r);
                (0, D.dispatchEventToPoint)(o, e, r)
            }, 50)
        },
        OVERLAY_SET_ASSOCIATED_GAME: function(e) {
            if ((0, M.isOutOfProcess)()) {
                (0, M.setPID)(e.associatedGamePID);
                var t = 0,
                    n = function() {
                        15 === t ? p.default.notifyReadyToShow(e.associatedGamePID) : (t += 1, new Promise(function(e) {
                            requestAnimationFrame(function() {
                                var t = new MessageChannel;
                                t.port1.onmessage = function() {
                                    e()
                                }, t.port2.postMessage(void 0)
                            })
                        }).then(n))
                    };
                n()
            }
        }
    } : {
        CONNECTION_OPEN: function() {
            $ = !0, eb()
        },
        CONNECTION_CLOSED: function() {
            $ = !1, ee = null, eI(void 0)
        },
        OVERLAY_SET_ENABLED: function(e) {
            return eN(e.enabled, e.legacyEnabled), !1
        },
        OVERLAY_FOCUSED: function(e) {
            ee = e.pid
        },
        RUNNING_GAMES_CHANGE: function(e) {
            eI(e)
        },
        OVERLAY_SET_INPUT_LOCKED: function(e) {
            var t = e.locked,
                n = e.pid,
                r = X.get(n);
            if (t || "READY" === r || "CRASHED" === r) {
                if (t ? er.delete(n) : er.add(n), ea.clear(), null != ew && (clearTimeout(ew), ew = null, t)) return;
                t ? eU(t) : ew = setTimeout(function() {
                    eU(t), ew = null
                }, 100)
            }
        },
        OVERLAY_ACTIVATE_REGION: function(e) {
            var t = e.region;
            ea.add(t), eU(!1)
        },
        OVERLAY_DEACTIVATE_ALL_REGIONS: function() {
            ea.clear(), eU(!0)
        },
        RPC_SERVER_READY: function(e) {
            var t, n = e.port,
                r = crypto.getRandomValues(new Uint8Array(8));
            en = btoa((t = String).fromCharCode.apply(t, Y(r)));
            var o = new URLSearchParams;
            o.append("build_id", "75deb52754478645a06720cb5c965a8d4169e246"), o.append("rpc", String(n)), o.append("rpc_auth_token", en), a = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(o.toString())
        },
        OVERLAY_CALL_PRIVATE_CHANNEL: function(e) {
            var t = e.channelId,
                n = e.ring;
            setImmediate(function() {
                m.default.selectPrivateChannel(t), d.default.call(t, !1, !!n)
            })
        },
        OVERLAY_JOIN_GAME: function(e) {
            var t = e.userId,
                n = e.sessionId,
                r = e.applicationId,
                o = e.channelId,
                i = e.messageId;
            setImmediate(function() {
                _.default.join({
                    userId: t,
                    sessionId: n,
                    applicationId: r,
                    channelId: o,
                    messageId: i
                }), null != ee && p.default.setLocked(!0, ee)
            })
        },
        OVERLAY_CRASHED: function(e) {
            ef(e.pid, "CRASHED")
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
            if (eu.verbose("handleGameToggleOverlay", e), !("pid" in e.game)) {
                eu.verbose("handleGameToggleOverlay: Game was not a RunningGame.", e);
                return
            }
            var t = [e.game];
            eI({
                added: e.newEnabledValue ? t : [],
                removed: e.newEnabledValue ? [] : t
            })
        },
        OVERLAY_SET_CLICK_ZONES: function(e) {
            ! function(e) {
                eG.apply(this, arguments)
            }(e.zones)
        },
        OVERLAY_SET_ASSOCIATED_GAME: function(e) {
            var t, n;
            if ((null !== (n = null === (t = z[e.previousAssociatedGamePID]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : w.OverlayMethod.Disabled) === w.OverlayMethod.OutOfProcess) {
                var r = X.get(e.previousAssociatedGamePID);
                null != r && (X.delete(e.previousAssociatedGamePID), X.set(e.associatedGamePID, r)), er.delete(e.previousAssociatedGamePID), et = e.associatedGamePID
            }
        },
        OVERLAY_NOTIFY_READY_TO_SHOW: function(e) {
            eA().then(function(t) {
                null == t || t.readyToShow(e.pid)
            })
        }
    });
    t.default = ex
}