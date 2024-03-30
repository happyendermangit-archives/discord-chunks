function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        enable: function() {
            return T
        },
        isNotSupported: function() {
            return h
        },
        trackToggleSelfMute: function() {
            return S
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("629815"),
        a = n("35523"),
        u = n("335911"),
        s = n("53881"),
        l = n("290976"),
        c = n("870331"),
        f = n("287087"),
        d = n("281767"),
        _ = n("203151"),
        E = n("941504");

    function p(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function m(e) {
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
    var y = new a.default("AudioActionCreators");

    function I() {
        var e;
        (0, o.openModalLazy)((e = function() {
            var e;
            return function(e, t) {
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
            }(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, Promise.all([n.e("99387"), n.e("22618")]).then(n.bind(n, "959865"))];
                    case 1:
                        return e = t.sent().default, [2, function(t) {
                            return r.createElement(e, m({
                                source: "Unsupported Browser"
                            }, t))
                        }]
                }
            })
        }, function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    p(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    p(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }))
    }

    function h() {
        return !u.default.isSupported() && ((0, o.openModal)(function(e) {
            return r.createElement(o.ConfirmModal, m({
                header: E.default.Messages.UNSUPPORTED_BROWSER,
                confirmText: E.default.Messages.DOWNLOAD_APP,
                cancelText: E.default.Messages.CANCEL,
                onConfirm: I,
                confirmButtonColor: o.Button.Colors.BRAND
            }, e), r.createElement(o.Text, {
                variant: "text-md/normal"
            }, E.default.Messages.UNSUPPORTED_BROWSER_DETAILS))
        }), !0)
    }

    function O(e) {
        c.default.track(d.AnalyticEvents.PERMISSIONS_ACKED, {
            type: "audio",
            action: e
        })
    }

    function T() {
        var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return h() ? Promise.resolve(!1) : (c.default.track(d.AnalyticEvents.PERMISSIONS_REQUESTED, {
            type: "audio"
        }), u.default.getMediaEngine().enable().then(function() {
            i.default.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: e
            }), O(_.NativePermissionStates.ACCEPTED)
        }, function(e) {
            switch (e) {
                case d.UserMediaErrors.NO_DEVICES_FOUND:
                    O(_.NativePermissionStates.NO_DEVICES);
                    break;
                case d.UserMediaErrors.PERMISSION_DENIED:
                    O(_.NativePermissionStates.DENIED);
                    break;
                case d.UserMediaErrors.PERMISSION_DISMISSED:
                    O(_.NativePermissionStates.DISMISSED);
                    break;
                default:
                    O(_.NativePermissionStates.ERROR), y.warn("unknown getUserMedia error: ".concat(e))
            }
        }).then(function() {
            return !0
        }))
    }

    function S(e) {
        var t = e.usedKeybind,
            n = s.default.getKeybindForAction(d.GlobalKeybindActions.TOGGLE_MUTE, !1, !0);
        c.default.track(d.AnalyticEvents.INPUT_MUTE_TOGGLED, {
            enabled: !u.default.isSelfMute(),
            custom_keybind_assigned: null != n && n.id !== s.DEFAULT_MUTE_KEYBIND.id,
            used_keybind: void 0 !== t && t,
            app_in_focus: l.default.isFocused(),
            overlay_activated: null != (0, f.default)()
        })
    }
}