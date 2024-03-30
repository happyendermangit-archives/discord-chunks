function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("784184"),
        i = n("807471"),
        a = n("717744"),
        u = n("217014"),
        s = n("935741"),
        l = n("957808"),
        c = n("63116"),
        f = n("947248"),
        d = n("768703"),
        _ = n("163868"),
        E = n("18975"),
        p = n("416181"),
        m = n("29221"),
        y = n("302213"),
        I = n("844659");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function T(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function S(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    T(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    T(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function A(e, t) {
        return (A = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function b(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function N(e, t) {
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
    var R = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && A(e, t)
        }(T, e);
        var t, i, h = (t = T, i = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, n, r, o = g(t);
            if (i) {
                var a = g(this).constructor;
                r = Reflect.construct(o, arguments, a)
            } else r = o.apply(this, arguments);
            return e = this, (n = r) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(n) || "function" == typeof n) ? n : O(e)
        });

        function T() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, T), R = h.apply(this, arguments), v(O(R), "onboardingCompleteGuilds", new Set), v(O(R), "actions", {
                POST_CONNECTION_OPEN: function() {
                    return R.handlePostConnectionOpen()
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    return R.handleGuildMemberUpdate(e)
                },
                GUILD_DELETE: function(e) {
                    return R.handleGuildDelete(e)
                },
                CHANNEL_SELECT: function(e) {
                    return R.handleChannelSelect(e)
                },
                MESSAGE_CREATE: function(e) {
                    return R.handleMessageSend(e)
                },
                THREAD_CREATE: function(e) {
                    return R.handleThreadCreate(e)
                }
            }), v(O(R), "handlePostConnectionOpen", function() {
                var e = c.default.getGuildId();
                null != e && R._getOrLoadOnboardingMemberActions(e)
            }), v(O(R), "handleGuildMemberUpdate", function(e) {
                var t = e.flags,
                    i = e.user,
                    a = e.guildId;
                if (i.id === u.default.getId()) {
                    if (!R.onboardingCompleteGuilds.has(a) && (0, f.hasFlag)(null != t ? t : 0, I.GuildMemberFlags.COMPLETED_HOME_ACTIONS)) {
                        R.onboardingCompleteGuilds.add(a);
                        var s, l, c = null !== (l = null === (s = _.default.getNewMemberActions(a)) || void 0 === s ? void 0 : s.length) && void 0 !== l ? l : 0;
                        if (0 === c) return;
                        (0, o.openModalLazy)(S(function() {
                            var e;
                            return N(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Promise.all([n.e("99387"), n.e("80189")]).then(n.bind(n, "930528"))];
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
                                                        v(e, t, n[t])
                                                    })
                                                }
                                                return e
                                            }({}, t), o = (o = {
                                                initialPercent: (c - 1) / c,
                                                numActions: c
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
                        }))
                    }
                }
            }), v(O(R), "handleGuildDelete", function(e) {
                var t = e.guild;
                R.onboardingCompleteGuilds.delete(t.id)
            });
            var e, t, i, g, A, R, C = O(R);
            v(O(R), "handleChannelSelect", (e = S(function(e) {
                var t, n, r, o, i, a;
                return N(this, function(u) {
                    switch (u.label) {
                        case 0:
                            if (t = e.guildId, n = e.channelId, null == t || null == n) return [2];
                            return [4, C._getOrLoadOnboardingMemberActions(t)];
                        case 1:
                            return o = (r = u.sent()).memberActions, i = r.completedActions, a = null == o ? void 0 : o.find(function(e) {
                                return e.channelId === n
                            }), (null == i ? void 0 : i[n]) !== !0 && null != a && a.actionType === E.NewMemberActionTypes.VIEW && (0, d.completeNewMemberAction)(t, n), [2]
                    }
                })
            }), function(t) {
                return e.apply(this, arguments)
            })), v(O(R), "handleMessageSend", function(e) {
                var t, n = e.guildId,
                    r = e.channelId,
                    o = e.message;
                if (null != n && null != r) {
                    if ((null === (t = o.author) || void 0 === t ? void 0 : t.id) === u.default.getId()) {
                        var i = s.default.getChannel(r);
                        (null == i ? void 0 : i.isForumPost()) && (null == i ? void 0 : i.parent_id) != null && R._completeChatAction(n, i.parent_id), R._completeChatAction(n, r)
                    }
                }
            }), v(O(R), "handleThreadCreate", function(e) {
                var t, n = e.channel;
                if (!!e.isNewlyCreated && null != n.parent_id && !!(null === (t = s.default.getChannel(n.parent_id)) || void 0 === t ? void 0 : t.isForumLikeChannel())) n.ownerId === u.default.getId() && R._completeChatAction(n.guild_id, n.parent_id)
            });
            var P = O(R);
            v(O(R), "_completeChatAction", (t = S(function(e, t) {
                var n, r, o, i;
                return N(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, P._getOrLoadOnboardingMemberActions(e)];
                        case 1:
                            return r = (n = a.sent()).memberActions, o = n.completedActions, i = null == r ? void 0 : r.find(function(e) {
                                return e.channelId === t
                            }), (null == o ? void 0 : o[t]) !== !0 && null != i && i.actionType === E.NewMemberActionTypes.CHAT && (0, d.completeNewMemberAction)(e, t), [2]
                    }
                })
            }), function(e, n) {
                return t.apply(this, arguments)
            }));
            var D = O(R);
            return v(O(R), "_getOrLoadOnboardingMemberActions", (i = S(function(e) {
                var t, n, r, o, i;
                return N(this, function(u) {
                    switch (u.label) {
                        case 0:
                            if (t = (0, m.canSeeOnboardingHome)(e), n = a.default.isFullServerPreview(e), !t && !n || null == (r = l.default.getSelfMember(e)) || !(0, y.getIsNewMember)(r)) return [2, {}];
                            return [4, Promise.all([D._getOrLoadOnboardingHomeSettings(e, r), D._getOrLoadMemberActions(e, r)])];
                        case 1:
                            return i = (o = b.apply(void 0, [u.sent(), 2]))[0], [2, {
                                memberActions: i,
                                completedActions: o[1]
                            }]
                    }
                })
            }), function(e) {
                return i.apply(this, arguments)
            })), v(O(R), "_getOrLoadOnboardingHomeSettings", (g = S(function(e, t) {
                var n, r, o;
                return N(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if (n = _.default.getNewMemberActions(e), r = _.default.getIsLoading(e), !(null == n && !r && (0, y.getIsNewMember)(t))) return [3, 2];
                            return [4, (0, d.fetchGuildHomeSettings)(e)];
                        case 1:
                            return [2, null == (o = i.sent()) ? void 0 : o.newMemberActions];
                        case 2:
                            return [2, n];
                        case 3:
                            return [2]
                    }
                })
            }), function(e, t) {
                return g.apply(this, arguments)
            })), v(O(R), "_getOrLoadMemberActions", (A = S(function(e, t) {
                var n, r, o, i;
                return N(this, function(a) {
                    switch (a.label) {
                        case 0:
                            if (r = (n = p.default.getState(e)).completedActions, o = n.loading, !(null == r && !o && (0, f.hasFlag)(null !== (i = t.flags) && void 0 !== i ? i : 0, I.GuildMemberFlags.STARTED_HOME_ACTIONS))) return [3, 2];
                            return [4, (0, d.fetchNewMemberActions)(e)];
                        case 1:
                            return [2, a.sent()];
                        case 2:
                            return [2, r];
                        case 3:
                            return [2]
                    }
                })
            }), function(e, t) {
                return A.apply(this, arguments)
            })), R
        }
        return T
    }(i.default);
    t.default = new R
}