function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("898511"),
        l = n("945816"),
        c = n("784184"),
        f = n("549579"),
        d = n("286601"),
        _ = n("73013"),
        E = n("208454"),
        p = n("72478"),
        m = n("588220"),
        y = n("162677"),
        I = n("62957"),
        h = n("656462"),
        O = n("281767"),
        T = n("941504"),
        S = n("910385");

    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function g(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function b(e, t) {
        switch (e) {
            case h.ParticipantTypes.ACTIVITY:
                return T.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
                    numUsers: t
                });
            case h.ParticipantTypes.STREAM:
                return T.default.Messages.SPECTATORS.format({
                    numViewers: t
                });
            default:
                throw Error("Unknown participant type.")
        }
    }

    function N(e) {
        var t = e.users,
            n = e.disableInteraction,
            o = e.guildId,
            a = e.participantType,
            u = e.channelId,
            s = e.handleUserContextMenu,
            l = b(a, t.length);
        return r.createElement(c.Dialog, {
            "aria-label": l,
            className: S.popoutWrapper
        }, r.createElement(c.Scroller, {
            className: S.scroller
        }, r.createElement(c.Heading, {
            variant: "heading-deprecated-12/semibold",
            className: S.memberListHeader
        }, l), r.createElement("div", null, t.map(function(e) {
            return r.createElement(p.default, {
                guildId: null != o ? o : void 0,
                className: i()(S.memberListItem, A({}, S.popoutDisabled, n)),
                textClassName: S.memberListItemText,
                key: e.id,
                user: e,
                disablePopout: n,
                nick: I.default.getNickname(o, u, e),
                onContextMenu: function(t) {
                    return n ? null : s(t, e)
                }
            })
        }))))
    }

    function R(e) {
        var t = e.users,
            n = e.guildId,
            o = e.channelId,
            a = e.maxVisibleUsers,
            u = e.className,
            s = b(e.participantType, t.length),
            l = t.length < (void 0 === a ? 3 : a) ? t.map(function(e) {
                return r.createElement("div", {
                    className: S.viewersTooltipItem,
                    key: e.id
                }, I.default.getName(n, o, e))
            }) : s;
        return r.createElement(c.TooltipContainer, {
            text: l,
            "aria-label": s
        }, r.createElement("div", {
            className: i()(S.viewers, u)
        }, r.createElement(m.default, {
            className: S.viewersIcon
        }), r.createElement("span", {
            "aria-hidden": "true"
        }, t.length)))
    }
    var C = [];

    function P(e) {
        var t, o, a = e.channelId,
            p = e.guildId,
            m = e.participant,
            I = e.className,
            T = e.compact,
            b = e.disableInteraction,
            P = void 0 !== b && b,
            D = e.maxVisibleUsers,
            L = void 0 === D ? 3 : D;
        var M = (t = r.useState(!1), o = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, o) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }
            }(t, o) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            U = M[0],
            w = M[1],
            k = r.useRef(new l.DelayedCall(150, function() {
                return w(!1)
            })),
            G = (0, s.useStateFromStoresArray)([_.default, E.default], function() {
                if (m.type === h.ParticipantTypes.STREAM) {
                    var e = _.default.getViewerIds(m.id);
                    return e.length > 0 ? e.map(function(e) {
                        return E.default.getUser(e)
                    }).filter(y.isNotNullish) : C
                }
                return m.type === h.ParticipantTypes.ACTIVITY ? m.participants.size > 0 ? Array.from(m.participants).map(function(e) {
                    return E.default.getUser(e)
                }).filter(y.isNotNullish) : C : C
            }, [m]),
            B = r.useCallback(function() {
                k.current.cancel(), w(!0)
            }, []),
            j = r.useCallback(function() {
                k.current.delay()
            }, []),
            F = r.useCallback(function(e, t) {
                var o;
                B(), (0, f.openContextMenuLazy)(e, (o = function() {
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
                    }(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e("99387"), n.e("40874"), n.e("92379"), n.e("51051"), n.e("44186")]).then(n.bind(n, "249511"))];
                            case 1:
                                return e = o.sent().default, [2, function(n) {
                                    var o, i;
                                    return r.createElement(e, (o = function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))), r.forEach(function(t) {
                                                A(e, t, n[t])
                                            })
                                        }
                                        return e
                                    }({}, n), i = (i = {
                                        user: t
                                    }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r)
                                        }
                                        return n
                                    })(Object(i)).forEach(function(e) {
                                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
                                    }), o))
                                }]
                        }
                    })
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(n, r) {
                        var i = o.apply(e, t);

                        function a(e) {
                            g(i, n, r, a, u, "next", e)
                        }

                        function u(e) {
                            g(i, n, r, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }), {
                    onClose: j
                })
            }, [j, B]);
        if (0 === G.length) return null;
        if (void 0 !== T && T) return r.createElement(R, {
            maxVisibleUsers: L,
            users: G,
            guildId: p,
            channelId: a,
            className: I,
            participantType: m.type
        });
        var V = u()(G).take(L).map(function(e) {
            return r.createElement(c.Avatar, {
                key: e.id,
                src: e.getAvatarURL(p, 24),
                "aria-label": e.username,
                size: c.AvatarSizes.SIZE_24,
                className: S.viewer
            })
        }).value();
        return G.length > L && (V[V.length - 1] = r.createElement("div", {
            key: "overflow",
            className: S.overflow
        }, "+", G.length - L + 1)), r.createElement(d.default, {
            section: O.AnalyticsSections.STREAM_VIEWER_POPOUT
        }, r.createElement("div", {
            onMouseEnter: B,
            onMouseLeave: j
        }, r.createElement(c.Popout, {
            renderPopout: function() {
                return r.createElement(N, {
                    participantType: m.type,
                    handleUserContextMenu: F,
                    guildId: p,
                    channelId: a,
                    users: G,
                    disableInteraction: P
                })
            },
            shouldShow: U,
            position: "top"
        }, function() {
            return r.createElement("div", {
                className: i()(S.viewers, I)
            }, V)
        })))
    }
}