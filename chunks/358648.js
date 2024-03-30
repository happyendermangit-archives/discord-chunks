function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return b
        }
    });
    var r = n("470079"),
        o = n("37295"),
        i = n("14782"),
        a = n("784184"),
        u = n("765457"),
        s = n("622780"),
        l = n("510077"),
        c = n("289917"),
        f = n("251384"),
        d = n("991264"),
        _ = n("306912"),
        E = n("53881"),
        p = n("290976"),
        m = n("247164"),
        y = n("923976"),
        I = n("707907"),
        h = n("374550"),
        O = n("469849"),
        T = n("452700"),
        S = n("281767"),
        v = n("941504"),
        g = n("838924");

    function A(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function b(e) {
        var t = e.soundboardSound,
            b = e.closePicker,
            N = (0, f.useExpressionPickerStore)(function(e) {
                return e.searchQuery
            }),
            R = (0, o.useStateFromStores)([T.default], function() {
                return null != t && T.default.isFavoriteSound(t.soundId)
            }),
            C = (0, o.useStateFromStores)([_.default], function() {
                return _.default.getGuild(null == t ? void 0 : t.guildId)
            }),
            P = (0, o.useStateFromStores)([s.default], function() {
                return s.default.useReducedMotion
            }, []),
            D = (0, o.useStateFromStores)([p.default], function() {
                return p.default.isFocused()
            }),
            L = (0, o.useStateFromStores)([E.default], function() {
                return E.default.getKeybindForAction(S.GlobalKeybindActions.SOUNDBOARD_HOLD)
            });
        if (null != t && N.length > 0) return r.createElement(d.default, {
            graphicPrimary: null != t.emojiId || null != t.emojiName ? r.createElement(u.default, {
                emojiId: t.emojiId,
                emojiName: t.emojiName,
                className: g.emoji
            }) : r.createElement(y.default, {
                className: g.emoji
            }),
            graphicSecondary: null != C ? r.createElement(c.default, {
                guild: C,
                shouldAnimate: !P && D
            }) : null,
            titlePrimary: t.name,
            titleSecondary: null == C ? void 0 : C.name,
            isFavorite: R
        });
        var M = function() {
                var e;
                b(), (0, a.openModalLazy)((e = function() {
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
                                return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("91335"), n.e("44786")]).then(n.bind(n, "499934"))];
                            case 1:
                                return e = t.sent().default, [2, function(t) {
                                    return r.createElement(e, t)
                                }]
                        }
                    })
                }, function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            A(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            A(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }))
            },
            U = (0, l.isDismissibleContentDismissed)(i.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
            w = null != L && (0, h.isWindows)() && !U ? v.default.Messages.SOUNDBOARD_KEYBIND_HINT_NO_POPOUT_WHEEL_SUPPORT.format({
                keybind: (0, O.toString)(L.shortcut, !0),
                openSettingsHook: function(e, t) {
                    return r.createElement(a.Anchor, {
                        key: t,
                        onClick: M
                    }, e)
                }
            }) : null;
        return null == w ? null : r.createElement("div", {
            className: g.keybindHint
        }, r.createElement(I.default, {
            className: g.warningIcon
        }), r.createElement(a.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            className: g.keybindHintText
        }, w), r.createElement(a.Clickable, {
            className: g.closeButton,
            onClick: function() {
                return (0, l.markDismissibleContentAsDismissed)(i.DismissibleContent.SOUNDBOARD_KEYBIND_TIP)
            }
        }, r.createElement(m.default, {
            width: 16,
            height: 16
        })))
    }
}