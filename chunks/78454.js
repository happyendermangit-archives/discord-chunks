function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("549579"),
        a = n("585949"),
        u = n("803321"),
        s = n("42969"),
        l = n("421441"),
        c = n("569492"),
        f = n("935741"),
        d = n("306912"),
        _ = n("266140"),
        E = n("893421"),
        p = n("421960"),
        m = n("467789"),
        y = n("281767");

    function I(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function h(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    I(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    I(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function O(e, t) {
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
    }

    function T() {
        return (T = h(function(e, t, n) {
            var r, o, i;
            return O(this, function(o) {
                switch (o.label) {
                    case 0:
                        if (null == t) return [2];
                        if (u.default.trackDiscordLinkClicked({
                                guildId: e,
                                channelId: t,
                                messageId: n
                            }), !(null != e) || (null == (r = d.default.getGuild(e)) ? void 0 : r.joinedAt) != null) return [3, 4];
                        o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, p.startLurking(e, {}, {
                            channelId: t
                        })];
                    case 2:
                        return o.sent(), [2];
                    case 3:
                        return o.sent(), [3, 4];
                    case 4:
                        if (null != (i = f.default.getChannel(t)) && null == n && (0, c.isGuildVocalChannelType)(i.type) && (0, s.canViewChannel)(i)) return a.default.selectVoiceChannel(i.id), [2];
                        return (0, l.default)(y.Routes.CHANNEL(e, t, n)), [2]
                }
            })
        })).apply(this, arguments)
    }

    function S(e) {
        return {
            react: function(t, a, u) {
                var s = f.default.getChannel(t.channelId),
                    l = u.noStyleAndInteraction ? void 0 : function(n) {
                        e.shouldStopPropagation && (null == n || n.stopPropagation()), ! function(e, t, n) {
                            T.apply(this, arguments)
                        }(t.guildId, t.channelId, t.messageId), e.shouldCloseDefaultModals && (0, o.closeAllModals)()
                    },
                    c = u.noStyleAndInteraction || null == t.channelId || null == s && null == t.originalLink ? y.NOOP : function(e) {
                        (0, i.openContextMenuLazy)(e, h(function() {
                            var e;
                            return O(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, n.e("17318").then(n.bind(n, "739384"))];
                                    case 1:
                                        return e = o.sent().default, [2, function(n) {
                                            var o, i, a;
                                            return r.createElement(e, (i = function(e) {
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
                                            }({}, n), a = (a = {
                                                channel: s,
                                                channelId: null !== (o = null == s ? void 0 : s.id) && void 0 !== o ? o : t.channelId,
                                                originalLink: t.originalLink,
                                                messageId: t.messageId
                                            }, a), Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, r)
                                                }
                                                return n
                                            })(Object(a)).forEach(function(e) {
                                                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
                                            }), i))
                                        }]
                                }
                            })
                        }))
                    };
                return r.createElement(_.default, {
                    role: "link",
                    key: u.key,
                    onClick: l,
                    onContextMenu: c,
                    className: "channelMention"
                }, null != t.inContent ? a(t.inContent, u) : null, null != t.inContent ? r.createElement(E.default, null) : null, (0, m.smartOutput)(t, a, u))
            }
        }
    }
}