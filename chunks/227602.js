function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        DEFAULT_MUTE_KEYBIND: function() {
            return O
        },
        default: function() {
            return q
        }
    }), n("808653"), n("424973"), n("222007"), n("781738");
    var s = n("800648"),
        r = n.n(s),
        a = n("969230"),
        o = n.n(a),
        l = n("714617"),
        u = n.n(l),
        d = n("917351"),
        c = n.n(d),
        f = n("446674"),
        _ = n("913144"),
        h = n("485328"),
        E = n("605250"),
        g = n("999819"),
        m = n("42887"),
        p = n("599110"),
        S = n("773336"),
        v = n("50885"),
        T = n("13798"),
        I = n("860957"),
        C = n("49111"),
        A = n("80028"),
        y = n("846325"),
        N = n("390493");
    let R = new E.default("KeybindsStore"),
        O = {
            id: "1000",
            action: C.GlobalKeybindActions.TOGGLE_MUTE,
            shortcut: (0, T.toCombo)("mod+shift+m"),
            enabled: !0,
            managed: !0,
            params: {}
        },
        D = {},
        P = {},
        M = 0,
        L = !0,
        b = {},
        U = !1,
        w = [C.GlobalKeybindActions.PUSH_TO_TALK, C.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, C.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];

    function k() {
        let {
            showKeybindIndicators: e
        } = g.default.getCurrentConfig({
            location: "KeybindsStore"
        }), t = c.find(P, e => O.action === e.action && e.enabled && e.shortcut.length > 0);
        null == t && !__OVERLAY__ && !U && L && e && (x(O), U = !0)
    }

    function V() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (U || e) && (F(O.id), U = !1)
    }

    function G(e) {
        let {
            showKeybindIndicators: t
        } = e;
        t ? k() : V(!0)
    }

    function F(e) {
        if (S.isPlatformEmbedded) v.default.inputEventUnregister(parseInt(e, 10));
        else {
            let t = D[e];
            if (t) {
                let t = P[e],
                    n = b[t.action];
                (null == n ? void 0 : n.isPressed) === !0 && N.nextTick(() => n.onTrigger(!1, t)), D[e].reset(), D[e] = null
            }
        }
    }

    function x(e) {
        if (!L || __OVERLAY__) return;
        let {
            shortcut: t,
            action: n,
            enabled: i
        } = e;
        if ("" === t || null == t || n === C.GlobalKeybindActions.UNASSIGNED || !i) return;
        if (null == b[n]) {
            R.error("[kb store] KeybindStore: Looking for callback action ".concat(n, " but it doesn't exist in this version. Skipping"));
            return
        }
        let s = e.id,
            a = b[n].keyEvents;
        e.action === C.GlobalKeybindActions.TOGGLE_MUTE && V(), ! function(e, t, n, i) {
            if (S.isPlatformEmbedded) v.default.inputEventRegister(parseInt(e), t, n, i);
            else {
                F(e);
                let s = o(new r(document));
                i.keyup && s.bindGlobal((0, T.toString)(t), () => n(!1), "keyup"), i.keydown && s.bindGlobal((0, T.toString)(t), () => n(!0), "keydown"), D[e] = s
            }
        }(s, t, e => (function(e, t) {
            let n = e === O.id ? O : P[e];
            null != n && b[n.action].onTrigger(t, n)
        })(s, e), {
            focused: !0,
            blurred: !0,
            keydown: !1,
            keyup: !1,
            ...a
        }), h.default.validateKeybind((0, T.toString)(e.shortcut))
    }

    function B(e) {
        let t = {
            id: M.toString(),
            enabled: !0,
            action: C.GlobalKeybindActions.UNASSIGNED,
            shortcut: [],
            managed: !1,
            params: {},
            ...e
        };
        return P = {
            ...P,
            [t.id]: t
        }, M += 1, t
    }

    function H(e) {
        F(e.id), P = {
            ...P
        }, delete P[e.id], e.action === C.GlobalKeybindActions.TOGGLE_MUTE && k()
    }

    function Y(e) {
        let {
            keybind: t
        } = e;
        P = {
            ...P,
            [t.id]: t
        }, !__OVERLAY__ && (p.default.track(C.AnalyticEvents.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: t.action,
            keybind_is_bound: !0,
            keybind_has_shortcut: t.shortcut.length > 0
        }), t.action === C.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK ? p.default.track(C.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
            hotkey: t.action === C.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK ? (0, T.toString)(t.shortcut) : null
        }) : t.action === C.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && p.default.track(C.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
            text_activation_hotkey: t.action === C.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, T.toString)(t.shortcut) : null
        })), x(t)
    }

    function j(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = c.find(P, t => t.action === e && (!n || t.managed === n));
        return null == i && (x(B({
            action: e,
            enabled: !0,
            shortcut: (0, T.toCombo)(t),
            managed: !0,
            params: {}
        })), !0)
    }
    let W = [function() {
        let e = m.default.getShortcuts();
        return c.each(P, t => {
            t.action === C.GlobalKeybindActions.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && H(t)
        }), c.reduce(m.default.getShortcuts(), (e, t, n) => {
            let i = c.find(P, e => e.action === C.GlobalKeybindActions.PUSH_TO_TALK && !0 === e.managed && e.context === n);
            if (null == i) x(B({
                action: C.GlobalKeybindActions.PUSH_TO_TALK,
                enabled: !0,
                shortcut: t,
                managed: !0,
                params: {},
                context: n
            }));
            else {
                if (null == t) return e || !1;
                Y({
                    keybind: {
                        ...i,
                        shortcut: "string" == typeof t ? (0, T.toCombo)(t) : t,
                        context: n
                    }
                })
            }
            return !0
        }, !1)
    }, function() {
        return !!I.default.enabled && j(C.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, "shift+`")
    }, function() {
        return !!I.default.enabled && j(C.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
    }, function() {
        return j(C.GlobalKeybindActions.SOUNDBOARD_HOLD, y.DEFAULT_KEYBIND, !1)
    }, function() {
        return j(C.GlobalKeybindActions.SAVE_CLIP, A.DEFAULT_KEYBIND)
    }];

    function K() {
        return k(), W.reduce((e, t) => t() || e, !1)
    }
    h.default.setGetKeybindList(() => {
        let e = [];
        for (let t in P) P.hasOwnProperty(t) && e.push((0, T.toString)(P[t].shortcut));
        let {
            showKeybindIndicators: t
        } = g.default.getCurrentConfig({
            location: "KeybindsStore"
        });
        return t && e.push((0, T.toString)(O.shortcut)), e
    });
    class z extends f.default.DeviceSettingsStore {
        initialize(e) {
            !__OVERLAY__ && this.waitFor(m.default, I.default), P = null != e ? e : {}
        }
        getUserAgnosticState() {
            return P
        }
        hasKeybind(e, t, n) {
            for (let i in P)
                for (let s of P[i].shortcut)
                    if (s[0] === e && s[1] === t && (void 0 === n || n === s[2])) return !0;
            return !1
        }
        hasExactKeybind(e) {
            for (let t in P) {
                let n = P[t];
                if (c.isEqual(n.shortcut, e)) return !0
            }
            return !1
        }
        getKeybindForAction(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                {
                    showKeybindIndicators: i
                } = g.default.getCurrentConfig({
                    location: "KeybindsStore"
                }),
                s = c.find(P, i => i.action === e && (!t || i.managed) && (!n || i.shortcut.length > 0 && i.enabled));
            return null != s ? s : i && e === C.GlobalKeybindActions.TOGGLE_MUTE ? O : null
        }
        getOverlayKeybind() {
            return this.getKeybindForAction(C.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, !0)
        }
        getOverlayChatKeybind() {
            return this.getKeybindForAction(C.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0)
        }
    }
    z.displayName = "KeybindsStore", z.persistKey = "keybinds", z.migrations = [function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                v: t,
                keybinds: n = e
            } = e;
        return c.reduce(n, (e, n, i) => {
            let s = parseInt(n.id, 10);
            return isNaN(s) || n.id !== i ? e : ((null == t || t < 2) && ("string" == typeof n.shortcut ? (n.shortcut = n.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down"), n.shortcut = (0, T.toCombo)(n.shortcut)) : n.shortcut = n.shortcut.map(e => e.length < 3 ? [...e, (0, T.getEnv)()] : e)), e[i] = n, e)
        }, {})
    }, e => e, e => {
        let {
            keybinds: t = e
        } = e;
        return c.reduce(t, (e, t, n) => {
            if ((0, S.isLinux)() && t.action === C.GlobalKeybindActions.SOUNDBOARD_HOLD) {
                let n = t.shortcut.map(e => e[1]),
                    i = (0, T.toCombo)("`").map(e => e[1]);
                if (u(n, i)) return e
            }
            return {
                ...e,
                [n]: t
            }
        }, {})
    }, e => {
        let t = {};
        for (let i in e) {
            let s = e[i];
            if (null != s) {
                if (null == s.params || null == s.enabled) {
                    var n;
                    s = {
                        ...s,
                        enabled: !1 !== s.enabled,
                        params: null !== (n = s.params) && void 0 !== n ? n : {}
                    }
                }
                t[i] = s
            }
        }
        return t
    }, e => c.reduce(e, (e, t, n) => t.action === C.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : {
        ...e,
        [n]: t
    }, {})];
    var q = new z(_.default, {
        CONNECTION_OPEN: K,
        AUDIO_SET_MODE: K,
        OVERLAY_SET_ENABLED: K,
        RPC_APP_CONNECTED: K,
        RPC_APP_DISCONNECTED: K,
        KEYBINDS_ADD_KEYBIND: function(e) {
            let {
                keybind: t
            } = e, n = B(t);
            x(n)
        },
        KEYBINDS_DELETE_KEYBIND: function(e) {
            let {
                id: t
            } = e, n = P[t];
            !__OVERLAY__ && p.default.track(C.AnalyticEvents.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: n.action,
                keybind_is_bound: !1,
                keybind_has_shortcut: !1
            }), null != n && H(n)
        },
        KEYBINDS_SET_KEYBIND: Y,
        KEYBINDS_ENABLE_ALL_KEYBINDS: function(e) {
            let {
                enable: t
            } = e;
            L = t, t ? (h.default.enable(), c.forEach(P, x), k()) : (h.default.disable(), c.forEach(P, e => F(e.id)), V())
        },
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function(e) {
            let {
                keybinds: t
            } = e;
            b = t, D = {}, M = 0;
            let n = Object.values(P).filter(e => w.includes(e.action) && e.managed);
            n.length !== w.length && K(), c.forEach(P, e => {
                M = Math.max(parseInt(e.id, 10), M) + 1;
                try {
                    x(e)
                } catch (t) {
                    R.error("Failed to register keybind", e, t)
                }
            }), L = !0, null == i && (i = g.default.subscribe({
                location: "KeybindsStore"
            }, G))
        }
    })
}