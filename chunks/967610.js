function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SearchContext: function() {
            return R
        }
    });
    var r, o, i = n("392711"),
        a = n.n(i),
        u = n("153832"),
        s = n("807471"),
        l = n("569492"),
        c = n("935741"),
        f = n("957808"),
        d = n("776982"),
        _ = n("208454"),
        E = n("162677"),
        p = n("523018"),
        m = n("830567");

    function y(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function I(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function O(e, t, n) {
        return t && h(e.prototype, t), n && h(e, n), e
    }

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function S(e) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function v(e, t) {
        return (v = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function g(e) {
        if (null == e || d.default.isBlocked(e.id)) return null;
        var t = {
            id: e.id,
            username: "0" !== e.discriminator ? "".concat(e.username, "#").concat(e.discriminator) : e.username
        };
        return null != m.default.getGlobalName(e) && (t.globalName = e.globalName), e.bot && (t.isBot = !0), d.default.isFriend(e.id) && (t.isFriend = !0, t.friendNickname = d.default.getNickname(e.id)), t
    }

    function A(e, t, n) {
        null != e && (e[t] = null != n && "" !== n ? n : null)
    }

    function b(e) {
        var t = [];
        if (null == e || !(0, l.isPrivate)(e.type)) return t;
        var n = e.recipients;
        return (void 0 === n ? [] : n).forEach(function(n) {
            var r = g(_.default.getUser(n));
            null != e && A(r, e.id), t.push(r)
        }), t
    }

    function N(e, t) {
        var n = [];
        return e.forEach(function(e) {
            var r = g(e.user);
            null != r && (A(r, t, e.nick), n.push(r))
        }), n
    }(r = o || (o = {})).UPDATE_USERS = "UPDATE_USERS", r.USER_RESULTS = "USER_RESULTS", r.QUERY_SET = "QUERY_SET", r.QUERY_CLEAR = "QUERY_CLEAR";
    var R = function() {
            function e(t, n) {
                var r = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                I(this, e), T(this, "_worker", void 0), T(this, "_uuid", void 0), T(this, "_callback", void 0), T(this, "_limit", void 0), T(this, "_currentQuery", void 0), T(this, "_nextQuery", void 0), T(this, "_subscribed", void 0), T(this, "handleMessages", function(e) {
                    var t = e.data;
                    null != t && "USER_RESULTS" === t.type && t.uuid === r._uuid && (!1 !== r._currentQuery && r._callback(t.payload), null != r._currentQuery && (r._currentQuery = null), r._setNextQuery())
                }), this._worker = t, this._uuid = (0, u.v4)(), this._callback = n, this._limit = o, this._currentQuery = null, this._nextQuery = null, this._subscribed = !1, this.subscribe()
            }
            return O(e, [{
                key: "setLimit",
                value: function(e) {
                    this._limit = e, null != this._nextQuery && (this._nextQuery.limit = e)
                }
            }, {
                key: "subscribe",
                value: function() {
                    null != this._worker && !this._subscribed && (this._worker.addEventListener("message", this.handleMessages, !1), this._subscribed = !0, this._setNextQuery())
                }
            }, {
                key: "unsubscribe",
                value: function() {
                    null != this._worker && this._subscribed && (this._worker.removeEventListener("message", this.handleMessages, !1), this._subscribed = !1)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.clearQuery(), this.unsubscribe()
                }
            }, {
                key: "clearQuery",
                value: function() {
                    this._currentQuery = !1, this._nextQuery = null, null != this._worker && this._subscribed && this._worker.postMessage({
                        uuid: this._uuid,
                        type: "QUERY_CLEAR"
                    })
                }
            }, {
                key: "setQuery",
                value: function(e, t, n, r) {
                    null != e && (this._nextQuery = {
                        query: e,
                        filters: t,
                        blacklist: n,
                        boosters: null != r ? r : {},
                        limit: this._limit
                    }, this._setNextQuery())
                }
            }, {
                key: "_setNextQuery",
                value: function() {
                    (null == this._currentQuery || !1 === this._currentQuery) && null != this._nextQuery && (null != this._worker && this._subscribed ? (this._currentQuery = this._nextQuery, this._nextQuery = null, this._worker.postMessage({
                        uuid: this._uuid,
                        type: "QUERY_SET",
                        payload: this._currentQuery
                    })) : !this._subscribed && this.subscribe())
                }
            }]), e
        }(),
        C = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && v(e, t)
            }(i, e);
            var t, r, o = (t = i, r = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, n, o, i = S(t);
                if (r) {
                    var a = S(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (n = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(n) || "function" == typeof n) ? n : y(e)
            });

            function i() {
                var e;
                return I(this, i), e = o.apply(this, arguments), T(y(e), "_worker", void 0), T(y(e), "actions", {
                    LOGOUT: function() {
                        return e._handleLogout()
                    },
                    POST_CONNECTION_OPEN: function() {
                        return e._handleConnectionOpen()
                    },
                    CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                        return e._handleConnectionOpenSupplemental(t)
                    },
                    OVERLAY_INITIALIZE: function(t) {
                        return e._handleOverlayInitialize(t)
                    },
                    CURRENT_USER_UPDATE: function(t) {
                        return e._handleCurrentUserUpdate(t)
                    },
                    GUILD_CREATE: function(t) {
                        return e._handleGuildCreate(t)
                    },
                    GUILD_MEMBERS_CHUNK: function(t) {
                        return e._handleGuildMembersChunk(t)
                    },
                    GUILD_MEMBER_ADD: function(t) {
                        return e._handleGuildMemberUpdate(t)
                    },
                    GUILD_MEMBER_UPDATE: function(t) {
                        return e._handleGuildMemberUpdate(t)
                    },
                    RELATIONSHIP_ADD: function(t) {
                        return e._handleRelationshipAdd(t)
                    },
                    RELATIONSHIP_UPDATE: function(t) {
                        return e._handleRelationshipUpdate(t)
                    },
                    RELATIONSHIP_REMOVE: function(t) {
                        return e._handleRelationshipRemove(t)
                    },
                    CHANNEL_CREATE: function(t) {
                        return e._handleDMCreate(t)
                    },
                    CHANNEL_UPDATES: function(t) {
                        return e._handleDMUpdates(t)
                    },
                    CHANNEL_RECIPIENT_ADD: function(t) {
                        return e._handleRecipientChanges(t)
                    },
                    PASSIVE_UPDATE_V1: function(t) {
                        return e._handlePassiveUpdateV1(t)
                    }
                }), T(y(e), "_handleLogout", function() {
                    e.rebootWebworker()
                }), T(y(e), "_handleConnectionOpen", function() {
                    setTimeout(function() {
                        var t = _.default.getCurrentUser();
                        if (null != t) {
                            var n = g(t),
                                r = T({}, n.id, n);
                            Object.values(_.default.getUsers()).forEach(function(e) {
                                r[e.id] = g(e)
                            });
                            var o = f.default.getMutableAllGuildsAndMembers();
                            for (var i in o)
                                for (var a in o[i]) {
                                    var u, s, l = r[a],
                                        c = null !== (s = null === (u = o[i][a]) || void 0 === u ? void 0 : u.nick) && void 0 !== s ? s : m.default.getGlobalName(l);
                                    null != l && (l[i] = null != c && "" !== c ? c : null)
                                }
                            e.updateUsers(Object.values(r))
                        }
                    }, 3e3)
                }), T(y(e), "_handleConnectionOpenSupplemental", function(t) {
                    var n = t.guilds;
                    setTimeout(function() {
                        var t = a().flatMap(n, function(e) {
                            return N(e.members, e.id)
                        });
                        e.updateUsers(t)
                    }, 3e3)
                }), T(y(e), "_handleOverlayInitialize", function(t) {
                    var n = t.users,
                        r = t.guildMembers,
                        o = new Map,
                        i = !0,
                        a = !1,
                        u = void 0;
                    try {
                        for (var s, l = n[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                            var c = s.value;
                            o.set(c.id, g(c))
                        }
                    } catch (e) {
                        a = !0, u = e
                    } finally {
                        try {
                            !i && null != l.return && l.return()
                        } finally {
                            if (a) throw u
                        }
                    }
                    var f = p.default.keys(r),
                        d = !0,
                        _ = !1,
                        E = void 0;
                    try {
                        for (var m, y = f[Symbol.iterator](); !(d = (m = y.next()).done); d = !0) {
                            var I = m.value,
                                h = r[I];
                            if (null != h) {
                                var O = p.default.keys(h),
                                    T = !0,
                                    S = !1,
                                    v = void 0;
                                try {
                                    for (var b, N = O[Symbol.iterator](); !(T = (b = N.next()).done); T = !0) {
                                        var R = b.value,
                                            C = o.get(R),
                                            P = h[R];
                                        null != C && null != P && null != P.nick && (A(C, I, P.nick), o.set(R, C))
                                    }
                                } catch (e) {
                                    S = !0, v = e
                                } finally {
                                    try {
                                        !T && null != N.return && N.return()
                                    } finally {
                                        if (S) throw v
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        _ = !0, E = e
                    } finally {
                        try {
                            !d && null != y.return && y.return()
                        } finally {
                            if (_) throw E
                        }
                    }
                    e.updateUsers(Array.from(o.values())), o.clear()
                }), T(y(e), "_handleCurrentUserUpdate", function(t) {
                    var n = g(t.user);
                    null != n && e.updateUsers([n])
                }), T(y(e), "_handleGuildCreate", function(t) {
                    var n = t.guild,
                        r = n.members;
                    e.updateUsers(N(r, n.id))
                }), T(y(e), "_handleGuildMembersChunk", function(t) {
                    var n = t.members,
                        r = t.guildId;
                    e.updateUsers(N(n, r))
                }), T(y(e), "_handleGuildMemberUpdate", function(t) {
                    var n = t.guildId,
                        r = t.user,
                        o = t.nick,
                        i = g(r);
                    null != i && (A(i, n, o), e.updateUsers([i]))
                }), T(y(e), "_handlePassiveUpdateV1", function(t) {
                    null != t.members && e.updateUsers(N(t.members, t.guildId))
                }), T(y(e), "_handleRelationshipAdd", function(t) {
                    var n = g(t.relationship.user);
                    e.updateUsers([n])
                }), T(y(e), "_handleRelationshipUpdate", function(t) {
                    var n = g(_.default.getUser(t.relationship.id));
                    e.updateUsers([n])
                }), T(y(e), "_handleRelationshipRemove", function(t) {
                    var n = g(_.default.getUser(t.relationship.id));
                    e.updateUsers([n])
                }), T(y(e), "_handleDMCreate", function(t) {
                    var n = t.channel.id,
                        r = b(c.default.getChannel(n));
                    if (0 !== r.length) {
                        var o = g(_.default.getCurrentUser());
                        A(o, n), r.push(o), e.updateUsers(r)
                    }
                }), T(y(e), "_handleDMUpdates", function(t) {
                    var n = t.channels,
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = n[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value,
                                l = b(c.default.getChannel(s.id));
                            if (0 !== l.length) {
                                var f = g(_.default.getCurrentUser());
                                A(f, s.id), l.push(f), e.updateUsers(l)
                            }
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }), T(y(e), "_handleRecipientChanges", function(t) {
                    var n = t.channelId,
                        r = t.user;
                    if (t.isMember) {
                        var o = g(r);
                        A(o, n), e.updateUsers([o])
                    }
                }), e
            }
            return O(i, [{
                key: "_initialize",
                value: function() {
                    this.rebootWebworker()
                }
            }, {
                key: "_terminate",
                value: function() {
                    null != this._worker && (this._worker.terminate(), this._worker = null)
                }
            }, {
                key: "rebootWebworker",
                value: function() {
                    null != this._worker && (this._worker.terminate(), this._worker = null), this._worker = new Worker(new URL(n.p + n.u("29814"), n.b))
                }
            }, {
                key: "updateUsers",
                value: function(e) {
                    var t = this._worker;
                    null != t && (e = e.filter(E.isNotNullish), t.postMessage({
                        type: "UPDATE_USERS",
                        payload: e
                    }))
                }
            }, {
                key: "getSearchContext",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                    this.initialize();
                    var n = this._worker;
                    if (null == n) throw Error("SearchContextManager: No webworker initialized");
                    return new R(n, e, t)
                }
            }]), i
        }(s.default);
    t.default = new C
}