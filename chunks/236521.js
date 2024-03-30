function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("163291"),
        i = n("957808"),
        a = n("306912"),
        u = n("63116"),
        s = n("388990"),
        l = n("947248"),
        c = n("667571"),
        f = n("120046"),
        d = n("166603"),
        _ = n("281767"),
        E = n("928204"),
        p = n("844659");

    function m(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function y(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var T = null,
        S = null,
        v = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && O(e, t)
            }(v, e);
            var t, n, r = (t = v, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = h(t);
                if (n) {
                    var a = h(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : m(e)
            });

            function v() {
                var e, t, n;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, v), e = r.apply(this, arguments), I(m(e), "actions", {
                    GUILD_DELETE: function(t) {
                        return e.handleGuildDelete(t)
                    },
                    CHANNEL_SELECT: function(t) {
                        return e.handleChannelSelect(t)
                    },
                    POST_CONNECTION_OPEN: function(t) {
                        return e.handleConnectionOpen(t)
                    }
                }), I(m(e), "handleConnectionOpen", function(t) {
                    var n;
                    null != (T = null !== (n = null != T ? T : u.default.getGuildId()) && void 0 !== n ? n : null) && e._openOnboardingIfIncomplete(T)
                }), I(m(e), "handleChannelSelect", function(t) {
                    var n = t.guildId,
                        r = t.channelId;
                    if (T !== n || S !== r) {
                        if (T = null != n ? n : null, S = null != r ? r : null, null != T && null != S) {
                            var o = a.default.getGuild(n);
                            null != o && o.hasFeature(_.GuildFeatures.COMMUNITY) && f.default.shouldFetchPrompts(T, 8 * s.default.Millis.HOUR) && (0, c.loadOnboardingPrompts)(T), e._openOnboardingIfIncomplete(T, r)
                        }
                    }
                }), I(m(e), "handleGuildDelete", function(e) {
                    var t = e.guild;
                    (0, d.discardOnboardingPromise)(t.id)
                }), I(m(e), "_openOnboardingIfIncomplete", (n = (t = function(e, t) {
                    var n, r, u, s;
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
                    }(this, function(c) {
                        switch (c.label) {
                            case 0:
                                if ((0, d.isOnboardingActiveForGuild)(e)) return (0, o.transitionTo)(_.Routes.CHANNEL(e, E.StaticChannelRoute.GUILD_ONBOARDING)), [2];
                                if (null == (n = a.default.getGuild(e)) || !n.hasFeature(_.GuildFeatures.GUILD_ONBOARDING) || null == (r = i.default.getSelfMember(e)) || (0, l.hasFlag)(null !== (u = r.flags) && void 0 !== u ? u : 0, p.GuildMemberFlags.COMPLETED_ONBOARDING) || !(0, l.hasFlag)(null !== (s = r.flags) && void 0 !== s ? s : 0, p.GuildMemberFlags.STARTED_ONBOARDING)) return [2];
                                return [4, (0, d.default)({
                                    guildId: e
                                })];
                            case 1:
                                return c.sent(), (0, o.transitionTo)(_.Routes.CHANNEL(e, t)), [2]
                        }
                    })
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = t.apply(e, n);

                        function a(e) {
                            y(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            y(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }), function(e, t) {
                    return n.apply(this, arguments)
                })), e
            }
            return v
        }(r.default);
    t.default = new v
}