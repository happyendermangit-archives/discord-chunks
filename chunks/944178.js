function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        checkDefaultChannelThresholdMetAfterChannelPermissionDeny: function() {
            return T
        },
        isDefaultChannelThresholdMetAfterDelete: function() {
            return y
        }
    });
    var r = n("22287"),
        o = n("483587"),
        i = n("878943"),
        a = n("306912"),
        u = n("667571"),
        s = n("120046"),
        l = n("826611"),
        c = n("381370"),
        f = n("281767"),
        d = n("941504");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function p(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    E(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    E(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function m(e, t) {
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

    function y(e, t) {
        return I.apply(this, arguments)
    }

    function I() {
        return (I = p(function(e, t) {
            return m(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (null == e) return [2, !0];
                        return [4, h(e, t, {
                            removingView: !0,
                            removingChat: !0
                        })];
                    case 1:
                        return [2, n.sent()]
                }
            })
        })).apply(this, arguments)
    }

    function h(e, t, n) {
        return O.apply(this, arguments)
    }

    function O() {
        return (O = p(function(e, t, n) {
            var r, o, i, d, E, p, y, I, h;
            return m(this, function(m) {
                switch (m.label) {
                    case 0:
                        if (null == (o = a.default.getGuild(e)) || !(i = null != o && (null === (r = o.features) || void 0 === r ? void 0 : r.has(f.GuildFeatures.GUILD_ONBOARDING)))) return [2, !0];
                        if (!(i && s.default.shouldFetchPrompts(e))) return [3, 2];
                        return [4, (0, u.fetchOnboardingPrompts)(e)];
                    case 1:
                        m.sent(), m.label = 2;
                    case 2:
                        var O, T;
                        if (d = s.default.getDefaultChannelIds(e), O = (0, l.getChattableDefaultChannels)(e, d), T = 2, p = (E = function(e) {
                                if (Array.isArray(e)) return e
                            }(O) || function(e, t) {
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
                            }(O, T) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return _(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                                }
                            }(O, T) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }())[0], y = E[1], !d.includes(t)) return [2, !0];
                        return I = n.removingView && y.length - 1 < c.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING, h = (n.removingChat || n.removingView) && p.length - 1 < c.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN, [2, !I && !h]
                }
            })
        })).apply(this, arguments)
    }

    function T(e, t, n) {
        return S.apply(this, arguments)
    }

    function S() {
        return (S = p(function(e, t, n) {
            var a, u, s, l;
            return m(this, function(c) {
                switch (c.label) {
                    case 0:
                        if (null == (a = e.getGuildId())) return [2, !0];
                        if (null != n && (t = r.filter(t, r.invert(n))), s = null != (u = e.permissionOverwrites[a]) ? r.filter(u.deny, r.invert(u.allow)) : r.deserialize(0), l = {
                                removingView: r.has(t, f.Permissions.VIEW_CHANNEL) && !r.has(s, f.Permissions.VIEW_CHANNEL),
                                removingChat: !1
                            }, e.isForumLikeChannel() ? l.removingChat = r.has(t, f.Permissions.SEND_MESSAGES_IN_THREADS) && !r.has(s, f.Permissions.SEND_MESSAGES_IN_THREADS) : l.removingChat = r.has(t, f.Permissions.SEND_MESSAGES) && !r.has(s, f.Permissions.SEND_MESSAGES), !l.removingChat && !l.removingView) return [2, !0];
                        return [4, h(a, e.id, l)];
                    case 1:
                        if (!c.sent()) return o.default.show({
                            title: d.default.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                            body: d.default.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                                onClick: function() {
                                    o.default.close(), i.default.open(a, f.GuildSettingsSections.ONBOARDING)
                                }
                            })
                        }), [2, !1];
                        return [2, !0]
                }
            })
        })).apply(this, arguments)
    }
}