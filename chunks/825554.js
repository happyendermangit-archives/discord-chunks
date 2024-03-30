function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return b
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("549579"),
        u = n("465260"),
        s = n("943546"),
        l = n("29884"),
        c = n("879547"),
        f = n("2566"),
        d = n("829104"),
        _ = n("250356"),
        E = n("126969"),
        p = n("523018"),
        m = n("802957"),
        y = n("375038"),
        I = n("722347"),
        h = n("535317"),
        O = n("281767"),
        T = n("312368"),
        S = n("405198");

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

    function A(e) {
        var t, c, h = e.summary,
            A = e.channel,
            b = e.members,
            N = e.guildId,
            R = e.unread,
            C = e.onClick;
        var P = (t = r.useState(!1), c = 2, function(e) {
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
            }(t, c) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }
            }(t, c) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            D = P[0],
            L = P[1],
            M = (0, s.getTimestampString)(p.default.extractTimestamp(h.startId)),
            U = (0, o.useStateFromStores)([m.default], function() {
                return m.default.summaryFeedback(h)
            }),
            w = function(e, t) {
                e.stopPropagation(), (0, y.default)({
                    summary: h,
                    channel: A,
                    rating: t
                })
            },
            k = l.default.can(O.Permissions.MANAGE_MESSAGES, A);
        return r.createElement(i.Clickable, {
            className: S.container,
            onClick: C,
            onContextMenu: function(e) {
                if (k) {
                    var t;
                    (0, a.openContextMenuLazy)(e, (t = function() {
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
                                    return [4, n.e("32627").then(n.bind(n, "317277"))];
                                case 1:
                                    return e = t.sent().default, [2, function(t) {
                                        var n, o;
                                        return r.createElement(e, (n = function(e) {
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
                                        }({}, t), o = (o = {
                                            summary: h
                                        }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r)
                                            }
                                            return n
                                        })(Object(o)).forEach(function(e) {
                                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                                        }), n))
                                    }]
                            }
                        })
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var i = t.apply(e, n);

                            function a(e) {
                                g(i, r, o, a, u, "next", e)
                            }

                            function u(e) {
                                g(i, r, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    }))
                }
            },
            onMouseEnter: function() {
                return L(!0)
            },
            onMouseLeave: function() {
                return L(!1)
            }
        }, r.createElement(E.default, {
            hovered: D,
            unread: R,
            className: S.unreadPill
        }), r.createElement("div", {
            className: S.rowHeader
        }, r.createElement("div", {
            className: S.rowHeaderLeft
        }, r.createElement(i.Text, {
            className: S.timestamp,
            color: "interactive-normal",
            variant: "text-xs/normal"
        }, M), r.createElement(u.default, {
            height: 4,
            width: 4,
            "aria-hidden": "true",
            className: S.dot
        }), r.createElement(f.default, {
            height: 12,
            width: 12,
            className: S.icon
        }), r.createElement(i.Text, {
            className: S.count,
            color: "interactive-normal",
            variant: "text-xs/normal"
        }, h.count), b.length > 0 && r.createElement(r.Fragment, null, r.createElement(u.default, {
            height: 4,
            width: 4,
            "aria-hidden": "true",
            className: S.dot
        }), r.createElement(I.default, {
            partySize: {
                knownSize: b.length,
                totalSize: b.length
            },
            maxAvatarsShown: 3,
            members: b,
            guildId: N
        })))), D && !U && r.createElement("div", {
            className: S.feedbackContainer
        }, r.createElement(i.Clickable, {
            onClick: function(e) {
                return w(e, T.FeedbackRating.GOOD)
            }
        }, r.createElement(_.default, {
            className: S.thumbIcon,
            width: 12,
            height: 12
        })), r.createElement(i.Clickable, {
            onClick: function(e) {
                return w(e, T.FeedbackRating.BAD)
            }
        }, r.createElement(d.default, {
            className: S.thumbIcon,
            width: 12,
            height: 12
        }))), r.createElement(i.Text, {
            color: "header-primary",
            variant: "text-sm/semibold",
            className: S.title
        }, h.topic), r.createElement(i.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            className: S.subtitle
        }, h.summShort))
    }

    function b(e) {
        var t = e.summaries,
            n = e.summariesMembers,
            i = e.channel,
            a = e.selectTopic,
            u = e.setOpen,
            s = (0, o.useStateFromStores)([c.default], function() {
                return c.default.getOldestUnreadMessageId(i.id)
            }),
            l = r.useCallback(function(e) {
                a(e), u(!1)
            }, [a, u]);
        return t.length < 1 ? r.createElement(h.default, null) : r.createElement(r.Fragment, null, t.map(function(e, t) {
            var o, a = null !== (o = n[t]) && void 0 !== o ? o : [];
            return r.createElement(A, {
                key: t,
                summary: e,
                channel: i,
                members: a,
                guildId: i.guild_id,
                unread: null != s && p.default.compare(e.endId, s) > 0,
                onClick: function() {
                    return l(t)
                }
            })
        }))
    }
}