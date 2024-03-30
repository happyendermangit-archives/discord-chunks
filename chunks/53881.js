function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_MUTE_KEYBIND: function() {
            return k
        }
    });
    var r, o, i = n("879443"),
        a = n.n(i),
        u = n("414861"),
        s = n.n(u),
        l = n("348327"),
        c = n.n(l),
        f = n("392711"),
        d = n.n(f),
        _ = n("898511"),
        E = n("629815"),
        p = n("423466"),
        m = n("35523"),
        y = n("283684"),
        I = n("335911"),
        h = n("870331"),
        O = n("374550"),
        T = n("131900"),
        S = n("469849"),
        v = n("125036"),
        g = n("281767"),
        A = n("945986"),
        b = n("571336"),
        N = n("444675");

    function R(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function C(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function P(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function D(e) {
        return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function L(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                P(e, t, n[t])
            })
        }
        return e
    }

    function M(e, t) {
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

    function U(e, t) {
        return (U = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var w = new m.default("KeybindsStore"),
        k = {
            id: "1000",
            action: g.GlobalKeybindActions.TOGGLE_MUTE,
            shortcut: (0, S.toCombo)("mod+shift+m"),
            enabled: !0,
            managed: !0,
            params: {}
        },
        G = {},
        B = {},
        j = 0,
        F = !0,
        V = {},
        H = !1,
        x = [g.GlobalKeybindActions.PUSH_TO_TALK, g.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, g.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];

    function Y() {
        var e = y.default.getCurrentConfig({
            location: "KeybindsStore"
        }).showKeybindIndicators;
        null == d().find(B, function(e) {
            return k.action === e.action && e.enabled && e.shortcut.length > 0
        }) && !__OVERLAY__ && !H && F && e && (X(k), H = !0)
    }

    function W() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (H || e) && (z(k.id), H = !1)
    }

    function K(e) {
        e.showKeybindIndicators ? Y() : W(!0)
    }

    function z(e) {
        if (O.isPlatformEmbedded) T.default.inputEventUnregister(parseInt(e, 10));
        else if (G[e]) {
            var t = B[e],
                n = V[t.action];
            (null == n ? void 0 : n.isPressed) === !0 && N.nextTick(function() {
                return n.onTrigger(!1, t)
            }), G[e].reset(), G[e] = null
        }
    }

    function X(e) {
        if (!(!F || __OVERLAY__)) {
            var t = e.shortcut,
                n = e.action,
                r = e.enabled;
            if ("" !== t && null != t && n !== g.GlobalKeybindActions.UNASSIGNED && r) {
                if (null == V[n]) {
                    w.error("[kb store] KeybindStore: Looking for callback action ".concat(n, " but it doesn't exist in this version. Skipping"));
                    return
                }
                var o = e.id,
                    i = V[n].keyEvents;
                e.action === g.GlobalKeybindActions.TOGGLE_MUTE && W(), ! function(e, t, n, r) {
                    if (O.isPlatformEmbedded) T.default.inputEventRegister(parseInt(e), t, n, r);
                    else {
                        z(e);
                        var o = s()(new(a())(document));
                        r.keyup && o.bindGlobal((0, S.toString)(t), function() {
                            return n(!1)
                        }, "keyup"), r.keydown && o.bindGlobal((0, S.toString)(t), function() {
                            return n(!0)
                        }, "keydown"), G[e] = o
                    }
                }(o, t, function(e) {
                    var t, n, r;
                    return t = o, n = e, void(null != (r = t === k.id ? k : B[t]) && V[r.action].onTrigger(n, r))
                }, L({
                    focused: !0,
                    blurred: !0,
                    keydown: !1,
                    keyup: !1
                }, i)), p.default.validateKeybind((0, S.toString)(e.shortcut))
            }
        }
    }

    function q(e) {
        var t = L({
            id: j.toString(),
            enabled: !0,
            action: g.GlobalKeybindActions.UNASSIGNED,
            shortcut: [],
            managed: !1,
            params: {}
        }, e);
        return B = M(L({}, B), P({}, t.id, t)), j += 1, t
    }

    function Q(e) {
        z(e.id), B = L({}, B), delete B[e.id], e.action === g.GlobalKeybindActions.TOGGLE_MUTE && Y()
    }

    function J(e) {
        var t = e.keybind;
        B = M(L({}, B), P({}, t.id, t)), !__OVERLAY__ && (h.default.track(g.AnalyticEvents.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: t.action,
            keybind_is_bound: !0,
            keybind_has_shortcut: t.shortcut.length > 0
        }), t.action === g.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK ? h.default.track(g.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
            hotkey: t.action === g.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK ? (0, S.toString)(t.shortcut) : null
        }) : t.action === g.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && h.default.track(g.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
            text_activation_hotkey: t.action === g.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, S.toString)(t.shortcut) : null
        })), X(t)
    }

    function Z(e, t) {
        var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return null == d().find(B, function(t) {
            return t.action === e && (!n || t.managed === n)
        }) && (X(q({
            action: e,
            enabled: !0,
            shortcut: (0, S.toCombo)(t),
            managed: !0,
            params: {}
        })), !0)
    }
    var $ = [function() {
        var e = I.default.getShortcuts();
        return d().each(B, function(t) {
            t.action === g.GlobalKeybindActions.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && Q(t)
        }), d().reduce(I.default.getShortcuts(), function(e, t, n) {
            var r = d().find(B, function(e) {
                return e.action === g.GlobalKeybindActions.PUSH_TO_TALK && !0 === e.managed && e.context === n
            });
            if (null == r) X(q({
                action: g.GlobalKeybindActions.PUSH_TO_TALK,
                enabled: !0,
                shortcut: t,
                managed: !0,
                params: {},
                context: n
            }));
            else {
                if (null == t) return e || !1;
                J({
                    keybind: M(L({}, r), {
                        shortcut: "string" == typeof t ? (0, S.toCombo)(t) : t,
                        context: n
                    })
                })
            }
            return !0
        }, !1)
    }, function() {
        return !!v.default.enabled && Z(g.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, "shift+`")
    }, function() {
        return !!v.default.enabled && Z(g.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
    }, function() {
        return Z(g.GlobalKeybindActions.SOUNDBOARD_HOLD, b.DEFAULT_KEYBIND, !1)
    }, function() {
        return Z(g.GlobalKeybindActions.SAVE_CLIP, A.DEFAULT_KEYBIND)
    }];

    function ee() {
        return Y(), $.reduce(function(e, t) {
            return t() || e
        }, !1)
    }
    p.default.setGetKeybindList(function() {
        var e = [];
        for (var t in B) B.hasOwnProperty(t) && e.push((0, S.toString)(B[t].shortcut));
        return y.default.getCurrentConfig({
            location: "KeybindsStore"
        }).showKeybindIndicators && e.push((0, S.toString)(k.shortcut)), e
    });
    var et = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && U(e, t)
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
            var e, r, o, i = D(t);
            if (n) {
                var a = D(this).constructor;
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
            value: function(e) {
                !__OVERLAY__ && this.waitFor(I.default, v.default), B = null != e ? e : {}
            }
        }, {
            key: "getUserAgnosticState",
            value: function() {
                return B
            }
        }, {
            key: "hasKeybind",
            value: function(e, t, n) {
                for (var r in B) {
                    var o = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var u, s = B[r].shortcut[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                            var l = u.value;
                            if (l[0] === e && l[1] === t && (void 0 === n || n === l[2])) return !0
                        }
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !o && null != s.return && s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                }
                return !1
            }
        }, {
            key: "hasExactKeybind",
            value: function(e) {
                for (var t in B) {
                    var n = B[t];
                    if (d().isEqual(n.shortcut, e)) return !0
                }
                return !1
            }
        }, {
            key: "getKeybindForAction",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = y.default.getCurrentConfig({
                        location: "KeybindsStore"
                    }).showKeybindIndicators,
                    o = d().find(B, function(r) {
                        return r.action === e && (!t || r.managed) && (!n || r.shortcut.length > 0 && r.enabled)
                    });
                return null != o ? o : r && e === g.GlobalKeybindActions.TOGGLE_MUTE ? k : null
            }
        }, {
            key: "getOverlayKeybind",
            value: function() {
                return this.getKeybindForAction(g.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, !0)
            }
        }, {
            key: "getOverlayChatKeybind",
            value: function() {
                return this.getKeybindForAction(g.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0)
            }
        }], C(r.prototype, o), i && C(r, i), u
    }(_.default.DeviceSettingsStore);
    P(et, "displayName", "KeybindsStore"), P(et, "persistKey", "keybinds"), P(et, "migrations", [function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.v,
            n = e.keybinds;
        return d().reduce(void 0 === n ? e : n, function(e, n, r) {
            return isNaN(parseInt(n.id, 10)) || n.id !== r ? e : ((null == t || t < 2) && ("string" == typeof n.shortcut ? (n.shortcut = n.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down"), n.shortcut = (0, S.toCombo)(n.shortcut)) : n.shortcut = n.shortcut.map(function(e) {
                var t;
                if (!(e.length < 3)) return e;
                return ((function(e) {
                    if (Array.isArray(e)) return R(e)
                })(t = e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return R(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return R(e, t)
                    }
                }(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()).concat([(0, S.getEnv)()])
            })), e[r] = n, e)
        }, {})
    }, function(e) {
        return e
    }, function(e) {
        var t = e.keybinds;
        return d().reduce(void 0 === t ? e : t, function(e, t, n) {
            if ((0, O.isLinux)() && t.action === g.GlobalKeybindActions.SOUNDBOARD_HOLD) {
                var r = t.shortcut.map(function(e) {
                        return e[1]
                    }),
                    o = (0, S.toCombo)("`").map(function(e) {
                        return e[1]
                    });
                if (c()(r, o)) return e
            }
            return M(L({}, e), P({}, n, t))
        }, {})
    }, function(e) {
        var t = {};
        for (var n in e) {
            var r, o = e[n];
            null != o && ((null == o.params || null == o.enabled) && (o = M(L({}, o), {
                enabled: !1 !== o.enabled,
                params: null !== (r = o.params) && void 0 !== r ? r : {}
            })), t[n] = o)
        }
        return t
    }, function(e) {
        return d().reduce(e, function(e, t, n) {
            return t.action === g.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : M(L({}, e), P({}, n, t))
        }, {})
    }]), t.default = new et(E.default, {
        CONNECTION_OPEN: ee,
        AUDIO_SET_MODE: ee,
        OVERLAY_SET_ENABLED: ee,
        RPC_APP_CONNECTED: ee,
        RPC_APP_DISCONNECTED: ee,
        KEYBINDS_ADD_KEYBIND: function(e) {
            X(q(e.keybind))
        },
        KEYBINDS_DELETE_KEYBIND: function(e) {
            var t = B[e.id];
            !__OVERLAY__ && h.default.track(g.AnalyticEvents.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !1,
                keybind_has_shortcut: !1
            }), null != t && Q(t)
        },
        KEYBINDS_SET_KEYBIND: J,
        KEYBINDS_ENABLE_ALL_KEYBINDS: function(e) {
            var t = e.enable;
            F = t, t ? (p.default.enable(), d().forEach(B, X), Y()) : (p.default.disable(), d().forEach(B, function(e) {
                return z(e.id)
            }), W())
        },
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function(e) {
            V = e.keybinds, G = {}, j = 0, Object.values(B).filter(function(e) {
                return x.includes(e.action) && e.managed
            }).length !== x.length && ee(), d().forEach(B, function(e) {
                j = Math.max(parseInt(e.id, 10), j) + 1;
                try {
                    X(e)
                } catch (t) {
                    w.error("Failed to register keybind", e, t)
                }
            }), F = !0, null == r && (r = y.default.subscribe({
                location: "KeybindsStore"
            }, K))
        }
    })
}