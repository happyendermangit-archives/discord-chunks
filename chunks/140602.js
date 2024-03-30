function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s = n("392711"),
        l = n.n(s),
        c = n("898511"),
        f = n("629815"),
        d = n("714897"),
        _ = n("366621"),
        E = n("217014"),
        p = n("794820"),
        m = n("248579"),
        y = n("935741"),
        I = n("489763"),
        h = n("957808"),
        O = n("306912"),
        T = n("545072"),
        S = n("776982"),
        v = n("894288"),
        g = n("63116"),
        A = n("281767");

    function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function N(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function R(e) {
        return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function C(e, t) {
        return (C = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var P = new d.default(function(e) {
        for (var t in e) null == O.default.getGuild(t) && !I.default.isUnavailable(t) && delete e[t];
        f.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_FLUSH",
            subscriptions: e
        })
    });

    function D(e, t) {
        var n = {};
        P.forEach(function(r) {
            var o;
            r !== g.default.getGuildId() && r !== T.default.getGuildId() && r !== (null === (o = y.default.getChannel(v.default.getChannelId())) || void 0 === o ? void 0 : o.getGuildId()) && (null == a || a.guildId !== r) && (P.clearWithoutFlushing(r, e), t && (n[r] = P.get(r)))
        }), !l().isEmpty(n) && f.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_FLUSH",
            subscriptions: n
        })
    }

    function L(e, t) {
        return P.subscribeToGuild(e), null != t && m.default.getSection(t) === A.ChannelSections.MEMBERS && M(e, t, d.DEFAULT_RANGES)
    }

    function M(e, t, n) {
        if (t === p.EVERYONE_CHANNEL_ID) return P.subscribeChannel(e, t, n);
        var r = y.default.getChannel(t);
        if (null == r) return !1;
        var o = r.getGuildId();
        return (o !== e && e === A.FAVORITES && P.subscribeToGuild(o), null != r && r.isThread()) ? r.type === A.ChannelTypes.ANNOUNCEMENT_THREAD ? P.subscribeChannel(o, r.parent_id, n) : !!r.isActiveThread() && P.subscribeThreadMemberList(o, t, v.default.getChannelId()) : P.subscribeChannel(o, t, n)
    }

    function U(e) {
        "CONNECTION_OPEN" === e.type && D(!0, !1);
        var t = g.default.getGuildId();
        null != t && L(t, v.default.getChannelId(t));
        var n = {};
        P.forEach(function(e) {
            null == O.default.getGuild(e) ? P.clearWithoutFlushing(e, !0) : n[e] = P.get(e)
        }), !l().isEmpty(n) && f.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_FLUSH",
            subscriptions: n
        })
    }

    function w(e) {
        var t = e.guildId,
            n = e.channelId;
        return !I.default.isUnavailable(t) && L(t, n)
    }

    function k() {
        return L(g.default.getGuildId(), v.default.getChannelId())
    }

    function G() {
        var e = _.default.getSyncingWith();
        if (null == e) null != a && (P.unsubscribeUser(a.guildId, a.userId), a = null);
        else {
            var t, n, r = e.userId;
            if (null != a && a.userId === r || S.default.isFriend(r)) return !1;
            var o = h.default.memberOf(r);
            if (0 === o.length) return !1;
            var i = (n = 1, function(e) {
                if (Array.isArray(e)) return e
            }(t = o) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())[0];
            a = {
                guildId: i,
                userId: r
            }, P.subscribeUser(i, r)
        }
        return !1
    }
    var B = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && C(e, t)
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
            var e, r, o, i = R(t);
            if (n) {
                var a = R(this).constructor;
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
            value: function() {
                this.waitFor(y.default, O.default, g.default, v.default, T.default, E.default, m.default), this.syncWith([_.default], G), this.syncWith([m.default], k)
            }
        }, {
            key: "getSubscribedThreadIds",
            value: function() {
                return P.getSubscribedThreadIds()
            }
        }, {
            key: "isSubscribedToThreads",
            value: function(e) {
                return P.isSubscribedToThreads(e)
            }
        }, {
            key: "isSubscribedToAnyMember",
            value: function(e) {
                return P.isSubscribedToAnyMember(e)
            }
        }, {
            key: "isSubscribedToMemberUpdates",
            value: function(e) {
                return P.isSubscribedToMemberUpdates(e)
            }
        }, {
            key: "isSubscribedToAnyGuildChannel",
            value: function(e) {
                var t = P.get(e).channels;
                return null != t && Object.keys(t).length > 0
            }
        }], N(r.prototype, o), i && N(r, i), u
    }(c.default.Store);
    i = "GuildSubscriptionsStore", (o = "displayName") in(r = B) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new B(f.default, {
        CONNECTION_OPEN: U,
        CONNECTION_RESUMED: U,
        CONNECTION_CLOSED: function() {
            D(!1, !1)
        },
        IDLE: function(e) {
            if (!e.idle) return !1;
            D(!1, !0)
        },
        LOGOUT: function() {
            P.reset()
        },
        VOICE_CHANNEL_SELECT: w,
        CHANNEL_SELECT: w,
        GUILD_CREATE: function(e) {
            e.guild.id === g.default.getGuildId() && k()
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            P.clearWithoutFlushing(t.id, !0)
        },
        GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function(e) {
            var t = e.guildId;
            return e.userIds.forEach(function(e) {
                e !== E.default.getId() && P.subscribeUser(t, e)
            }), !1
        },
        GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function(e) {
            var t = e.guildId;
            return e.userIds.forEach(function(e) {
                P.unsubscribeUser(t, e)
            }), !1
        },
        GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function(e) {
            var t = e.guildId;
            P.subscribeToMemberUpdates(t)
        },
        GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function(e) {
            var t = e.guildId;
            P.unsubscribeFromMemberUpdates(t)
        },
        GUILD_SUBSCRIPTIONS_CHANNEL: function(e) {
            return M(e.guildId, e.channelId, e.ranges)
        },
        GUILD_SUBSCRIPTIONS: function(e) {
            var t = e.guildId;
            return P.subscribeToGuild(t)
        },
        CHANNEL_PRELOAD: function(e) {
            return L(e.guildId, e.channelId)
        },
        INBOX_OPEN: function(e) {
            var t = e.guildIds,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    null != u && P.subscribeToGuild(u)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
            return !1
        },
        THREAD_UPDATE: function(e) {
            var t = e.channel;
            return t.isArchivedThread() ? P.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && v.default.getChannelId() === t.id && void P.subscribeThreadMemberList(t.guild_id, t.id, v.default.getChannelId())
        },
        THREAD_DELETE: function(e) {
            var t = e.channel;
            return P.unsubscribeThreadMemberList(t.guild_id, t.id)
        },
        THREAD_LIST_SYNC: k
    })
}