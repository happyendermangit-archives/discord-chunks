function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        DEFAULT_MUTE_KEYBIND: function() {
            return M
        }
    }), n("724458"), n("653041"), n("47120"), n("757143");
    var r, s = n("879443"),
        a = n.n(s),
        o = n("414861"),
        l = n.n(o),
        u = n("348327"),
        d = n.n(u),
        _ = n("392711"),
        c = n.n(_),
        E = n("442837"),
        I = n("570140"),
        T = n("714338"),
        f = n("710845"),
        S = n("658785"),
        h = n("131951"),
        A = n("626135"),
        m = n("358085"),
        N = n("998502"),
        p = n("13140"),
        O = n("808506"),
        R = n("981631"),
        C = n("356659"),
        g = n("710111"),
        L = n("444675");

    function D(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let v = new f.default("KeybindsStore"),
        M = {
            id: "1000",
            action: R.GlobalKeybindActions.TOGGLE_MUTE,
            shortcut: (0, p.toCombo)("mod+shift+m"),
            enabled: !0,
            managed: !0,
            params: {}
        },
        y = {},
        P = {},
        U = 0,
        b = !0,
        G = {},
        w = !1,
        B = [R.GlobalKeybindActions.PUSH_TO_TALK, R.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, R.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];

    function k() {
        let {
            showKeybindIndicators: e
        } = S.default.getCurrentConfig({
            location: "KeybindsStore"
        });
        null == c().find(P, e => M.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !w && b && e && (H(M), w = !0)
    }

    function F() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (w || e) && (x(M.id), w = !1)
    }

    function V(e) {
        let {
            showKeybindIndicators: t
        } = e;
        t ? k() : F(!0)
    }

    function x(e) {
        if (m.isPlatformEmbedded) N.default.inputEventUnregister(parseInt(e, 10));
        else if (y[e]) {
            let t = P[e],
                n = G[t.action];
            (null == n ? void 0 : n.isPressed) === !0 && L.nextTick(() => n.onTrigger(!1, t)), y[e].reset(), y[e] = null
        }
    }

    function H(e) {
        if (!b || __OVERLAY__) return;
        let {
            shortcut: t,
            action: n,
            enabled: i
        } = e;
        if ("" === t || null == t || n === R.GlobalKeybindActions.UNASSIGNED || !i) return;
        if (null == G[n]) {
            v.error("[kb store] KeybindStore: Looking for callback action ".concat(n, " but it doesn't exist in this version. Skipping"));
            return
        }
        let r = e.id,
            s = G[n].keyEvents;
        e.action === R.GlobalKeybindActions.TOGGLE_MUTE && F(), ! function(e, t, n, i) {
            if (m.isPlatformEmbedded) N.default.inputEventRegister(parseInt(e), t, n, i);
            else {
                x(e);
                let r = l()(new(a())(document));
                i.keyup && r.bindGlobal((0, p.toString)(t), () => n(!1), "keyup"), i.keydown && r.bindGlobal((0, p.toString)(t), () => n(!0), "keydown"), y[e] = r
            }
        }(r, t, e => (function(e, t) {
            let n = e === M.id ? M : P[e];
            null != n && G[n.action].onTrigger(t, n)
        })(r, e), {
            focused: !0,
            blurred: !0,
            keydown: !1,
            keyup: !1,
            ...s
        }), T.default.validateKeybind((0, p.toString)(e.shortcut))
    }

    function Y(e) {
        let t = {
            id: U.toString(),
            enabled: !0,
            action: R.GlobalKeybindActions.UNASSIGNED,
            shortcut: [],
            managed: !1,
            params: {},
            ...e
        };
        return P = {
            ...P,
            [t.id]: t
        }, U += 1, t
    }

    function j(e) {
        x(e.id), P = {
            ...P
        }, delete P[e.id], e.action === R.GlobalKeybindActions.TOGGLE_MUTE && k()
    }

    function W(e) {
        let {
            keybind: t
        } = e;
        P = {
            ...P,
            [t.id]: t
        }, !__OVERLAY__ && (A.default.track(R.AnalyticEvents.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: t.action,
            keybind_is_bound: !0,
            keybind_has_shortcut: t.shortcut.length > 0
        }), t.action === R.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK ? A.default.track(R.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
            hotkey: t.action === R.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK ? (0, p.toString)(t.shortcut) : null
        }) : t.action === R.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && A.default.track(R.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
            text_activation_hotkey: t.action === R.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, p.toString)(t.shortcut) : null
        })), H(t)
    }

    function K(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return null == c().find(P, t => t.action === e && (!n || t.managed === n)) && (H(Y({
            action: e,
            enabled: !0,
            shortcut: (0, p.toCombo)(t),
            managed: !0,
            params: {}
        })), !0)
    }
    let z = [function() {
        let e = h.default.getShortcuts();
        return c().each(P, t => {
            t.action === R.GlobalKeybindActions.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && j(t)
        }), c().reduce(h.default.getShortcuts(), (e, t, n) => {
            let i = c().find(P, e => e.action === R.GlobalKeybindActions.PUSH_TO_TALK && !0 === e.managed && e.context === n);
            if (null == i) H(Y({
                action: R.GlobalKeybindActions.PUSH_TO_TALK,
                enabled: !0,
                shortcut: t,
                managed: !0,
                params: {},
                context: n
            }));
            else {
                if (null == t) return e || !1;
                W({
                    keybind: {
                        ...i,
                        shortcut: "string" == typeof t ? (0, p.toCombo)(t) : t,
                        context: n
                    }
                })
            }
            return !0
        }, !1)
    }, function() {
        return !!O.default.enabled && K(R.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, "shift+`")
    }, function() {
        return !!O.default.enabled && K(R.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
    }, function() {
        return K(R.GlobalKeybindActions.SOUNDBOARD_HOLD, g.DEFAULT_KEYBIND, !1)
    }, function() {
        return K(R.GlobalKeybindActions.SAVE_CLIP, C.DEFAULT_KEYBIND)
    }];

    function X() {
        return k(), z.reduce((e, t) => t() || e, !1)
    }
    T.default.setGetKeybindList(() => {
        let e = [];
        for (let t in P) P.hasOwnProperty(t) && e.push((0, p.toString)(P[t].shortcut));
        let {
            showKeybindIndicators: t
        } = S.default.getCurrentConfig({
            location: "KeybindsStore"
        });
        return t && e.push((0, p.toString)(M.shortcut)), e
    });
    class q extends(r = E.default.DeviceSettingsStore) {
        initialize(e) {
            !__OVERLAY__ && this.waitFor(h.default, O.default), P = null != e ? e : {}
        }
        getUserAgnosticState() {
            return P
        }
        hasKeybind(e, t, n) {
            for (let i in P)
                for (let r of P[i].shortcut)
                    if (r[0] === e && r[1] === t && (void 0 === n || n === r[2])) return !0;
            return !1
        }
        hasExactKeybind(e) {
            for (let t in P) {
                let n = P[t];
                if (c().isEqual(n.shortcut, e)) return !0
            }
            return !1
        }
        getKeybindForAction(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                {
                    showKeybindIndicators: i
                } = S.default.getCurrentConfig({
                    location: "KeybindsStore"
                }),
                r = c().find(P, i => i.action === e && (!t || i.managed) && (!n || i.shortcut.length > 0 && i.enabled));
            return null != r ? r : i && e === R.GlobalKeybindActions.TOGGLE_MUTE ? M : null
        }
        getOverlayKeybind() {
            return this.getKeybindForAction(R.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, !0)
        }
        getOverlayChatKeybind() {
            return this.getKeybindForAction(R.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0)
        }
    }
    D(q, "displayName", "KeybindsStore"), D(q, "persistKey", "keybinds"), D(q, "migrations", [function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                v: t,
                keybinds: n = e
            } = e;
        return c().reduce(n, (e, n, i) => isNaN(parseInt(n.id, 10)) || n.id !== i ? e : ((null == t || t < 2) && ("string" == typeof n.shortcut ? (n.shortcut = n.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down"), n.shortcut = (0, p.toCombo)(n.shortcut)) : n.shortcut = n.shortcut.map(e => e.length < 3 ? [...e, (0, p.getEnv)()] : e)), e[i] = n, e), {})
    }, e => e, e => {
        let {
            keybinds: t = e
        } = e;
        return c().reduce(t, (e, t, n) => {
            if ((0, m.isLinux)() && t.action === R.GlobalKeybindActions.SOUNDBOARD_HOLD) {
                let n = t.shortcut.map(e => e[1]),
                    i = (0, p.toCombo)("`").map(e => e[1]);
                if (d()(n, i)) return e
            }
            return {
                ...e,
                [n]: t
            }
        }, {})
    }, e => {
        let t = {};
        for (let i in e) {
            let r = e[i];
            if (null != r) {
                if (null == r.params || null == r.enabled) {
                    var n;
                    r = {
                        ...r,
                        enabled: !1 !== r.enabled,
                        params: null !== (n = r.params) && void 0 !== n ? n : {}
                    }
                }
                t[i] = r
            }
        }
        return t
    }, e => c().reduce(e, (e, t, n) => t.action === R.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : {
        ...e,
        [n]: t
    }, {})]), t.default = new q(I.default, {
        CONNECTION_OPEN: X,
        AUDIO_SET_MODE: X,
        OVERLAY_SET_ENABLED: X,
        RPC_APP_CONNECTED: X,
        RPC_APP_DISCONNECTED: X,
        KEYBINDS_ADD_KEYBIND: function(e) {
            let {
                keybind: t
            } = e;
            H(Y(t))
        },
        KEYBINDS_DELETE_KEYBIND: function(e) {
            let {
                id: t
            } = e, n = P[t];
            !__OVERLAY__ && A.default.track(R.AnalyticEvents.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: n.action,
                keybind_is_bound: !1,
                keybind_has_shortcut: !1
            }), null != n && j(n)
        },
        KEYBINDS_SET_KEYBIND: W,
        KEYBINDS_ENABLE_ALL_KEYBINDS: function(e) {
            let {
                enable: t
            } = e;
            b = t, t ? (T.default.enable(), c().forEach(P, H), k()) : (T.default.disable(), c().forEach(P, e => x(e.id)), F())
        },
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function(e) {
            let {
                keybinds: t
            } = e;
            G = t, y = {}, U = 0, Object.values(P).filter(e => B.includes(e.action) && e.managed).length !== B.length && X(), c().forEach(P, e => {
                U = Math.max(parseInt(e.id, 10), U) + 1;
                try {
                    H(e)
                } catch (t) {
                    v.error("Failed to register keybind", e, t)
                }
            }), b = !0, null == i && (i = S.default.subscribe({
                location: "KeybindsStore"
            }, V))
        }
    })
}