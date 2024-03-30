function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("56449"),
        l = n("273829"),
        c = n("569492"),
        f = n("715689"),
        d = n("428009"),
        _ = n("935741"),
        E = n("204394"),
        p = n("523018"),
        m = n("73587"),
        y = n("281767");

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O(e) {
        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                h(e, t, n[t])
            })
        }
        return e
    }

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var v = new Set,
        g = {},
        A = {};

    function b(e, t) {
        c.ALL_CHANNEL_TYPES.has(e.type) && N(function(e) {
            if (!(e.id in g)) {
                var t;
                g[e.id] = {
                    guildId: e.guild_id,
                    parentId: e.parent_id,
                    count: null !== (t = e.messageCount) && void 0 !== t ? t : 0,
                    mostRecentRawMessage: null,
                    mostRecentMessage: null
                }
            }
            return g[e.id]
        }(e), t)
    }

    function N(e, t) {
        var n, r = (null !== (n = A[e.parentId]) && void 0 !== n ? n : 0) + 1;
        A[e.parentId] = r, t(e)
    }

    function R(e) {
        var t;
        null === (t = e.threads) || void 0 === t || t.forEach(C)
    }

    function C(e) {
        b(e, function(t) {
            null != e.messageCount && (t.count = e.messageCount);
            var n, r = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
            null != e.lastMessageId && (null == r ? void 0 : r.id) !== e.lastMessageId && (t.mostRecentRawMessage = null, t.mostRecentMessage = null)
        })
    }

    function P(e) {
        if (null != e && !(e.id in g)) {
            var t = _.default.getChannel(e.id);
            if (null != t) return C(t), !0
        }
        return !1
    }

    function D(e) {
        C(e.channel)
    }

    function L(e) {
        e.threads.forEach(P)
    }

    function M(e) {
        var t = e.messages,
            n = e.threads,
            r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                var s = a.value,
                    l = !0,
                    c = !1,
                    f = void 0;
                try {
                    for (var d, _ = s[Symbol.iterator](); !(l = (d = _.next()).done); l = !0) {
                        var E = d.value;
                        P(E.thread)
                    }
                } catch (e) {
                    c = !0, f = e
                } finally {
                    try {
                        !l && null != _.return && _.return()
                    } finally {
                        if (c) throw f
                    }
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
        n.forEach(P)
    }
    var U = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && S(e, t)
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
            var e, r, o, i = O(t);
            if (n) {
                var a = O(this).constructor;
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
                this.waitFor(_.default, E.default)
            }
        }, {
            key: "getCount",
            value: function(e) {
                var t, n;
                return null !== (n = null === (t = g[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null
            }
        }, {
            key: "getMostRecentMessage",
            value: function(e) {
                var t, n, r = g[e];
                return null == r ? null : (null == r.mostRecentMessage && null != r.mostRecentRawMessage && (r.mostRecentMessage = null !== (t = E.default.getMessage(e, r.mostRecentRawMessage.id)) && void 0 !== t ? t : (0, l.createMessageRecord)(r.mostRecentRawMessage), r.mostRecentRawMessage = null), null !== (n = r.mostRecentMessage) && void 0 !== n ? n : null)
            }
        }, {
            key: "getChannelThreadsVersion",
            value: function(e) {
                return A[e]
            }
        }, {
            key: "getInitialOverlayState",
            value: function() {
                return g
            }
        }], I(r.prototype, o), i && I(r, i), u
    }(a.default.Store);
    h(U, "displayName", "ThreadMessageStore"), t.default = new U(u.default, {
        CONNECTION_OPEN: function(e) {
            A = {}, v.clear(), e.guilds.forEach(R)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t = e.threadMessages;
            for (var n in g = T({}, t)) {
                var r = t[n].mostRecentMessage;
                null != r && (t[n].mostRecentMessage = new f.default(function(e, t) {
                    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }), e
                }(T({}, r), {
                    author: new d.default(r.author)
                })))
            }
        },
        GUILD_CREATE: function(e) {
            R(e.guild)
        },
        GUILD_DELETE: function(e) {
            var t;
            t = e.guild.id, g = i().omitBy(g, function(e) {
                var n = e.guildId === t;
                return n && delete A[e.parentId], n
            })
        },
        THREAD_CREATE: D,
        THREAD_UPDATE: D,
        THREAD_LIST_SYNC: function(e) {
            var t = e.threads,
                n = e.mostRecentMessages;
            t.forEach(C), null == n || n.forEach(function(e) {
                var t = _.default.getChannel(e.channel_id);
                null != t && e.type !== y.MessageTypes.THREAD_STARTER_MESSAGE && b(t, function(t) {
                    t.mostRecentRawMessage = e, t.mostRecentMessage = null
                })
            })
        },
        LOAD_THREADS_SUCCESS: L,
        LOAD_ARCHIVED_THREADS_SUCCESS: L,
        SEARCH_FINISH: M,
        MOD_VIEW_SEARCH_FINISH: M,
        THREAD_DELETE: function(e) {
            var t = e.channel;
            delete g[t.id]
        },
        CHANNEL_DELETE: function(e) {
            var t;
            t = e.channel.id, g = i().omitBy(g, function(e) {
                return e.parentId === t
            }), delete A[t]
        },
        MESSAGE_CREATE: function(e) {
            var t = e.message,
                n = e.optimistic,
                r = e.isPushNotification,
                o = e.sendMessageOptions;
            if (n || r || null != o) return !1;
            var i = _.default.getChannel(t.channel_id);
            if (null == i || !c.THREAD_CHANNEL_TYPES.has(i.type) || ! function(e, t) {
                    return !(t.type === y.MessageTypes.THREAD_STARTER_MESSAGE || e.isForumPost() && t.id === p.default.castChannelIdAsMessageId(e.id)) && !0
                }(i, t)) return !1;
            b(i, function(e) {
                e.count = Math.min(e.count + 1, m.MAX_THREAD_MESSAGE_COUNT), e.mostRecentRawMessage = t, e.mostRecentMessage = null
            })
        },
        MESSAGE_UPDATE: function(e) {
            var t, n = e.message,
                r = g[n.channel_id],
                o = null !== (t = null == r ? void 0 : r.mostRecentRawMessage) && void 0 !== t ? t : null == r ? void 0 : r.mostRecentMessage;
            if (null == r || null == o || o.id !== n.id) return !1;
            N(r, function(e) {
                null != e.mostRecentMessage && (e.mostRecentMessage = (0, l.updateMessageRecord)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, l.updateServerMessage)(e.mostRecentRawMessage, n))
            })
        },
        MESSAGE_DELETE: function(e) {
            var t = e.id,
                n = e.channelId,
                r = g[n];
            if (null == r) return !1;
            var o = p.default.castChannelIdAsMessageId(n) !== t,
                i = !v.has(t);
            N(r, function(e) {
                var n, r = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                null != r && r.id === t && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count = o && i ? Math.max(e.count - 1, 0) : e.count, v.add(t)
            })
        },
        MESSAGE_DELETE_BULK: function(e) {
            var t = e.ids,
                n = e.channelId,
                r = g[n];
            if (null == r) return !1;
            var o = t.filter(function(e) {
                var t = p.default.castChannelIdAsMessageId(n) !== e,
                    r = !v.has(e);
                return t && r
            }).length;
            o > 0 && N(r, function(e) {
                var n, r = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                null != r && t.includes(r.id) && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count -= o, t.forEach(function(e) {
                    return v.add(e)
                })
            })
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            var t = !1,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = e.messages[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    t = P(u.thread) || t
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
            if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
            var s = _.default.getChannel(e.channelId);
            if (null == s || !c.THREAD_CHANNEL_TYPES.has(s.type)) return t;
            b(s, function(t) {
                if (0 === e.messages.length) t.mostRecentRawMessage = null, t.mostRecentMessage = null, t.count = 0;
                else {
                    var n, r = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
                    t.count = e.messages.length >= m.MAX_THREAD_MESSAGE_COUNT ? m.MAX_THREAD_MESSAGE_COUNT : t.count, (null == r ? void 0 : r.type) !== y.MessageTypes.THREAD_STARTER_MESSAGE && (t.mostRecentRawMessage = r, t.mostRecentMessage = null)
                }
            })
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            var t = e.data,
                n = !1,
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = (0, s.getThreadsFromGuildFeedFetch)(t)[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var l = a.value;
                    n = P(l) || n
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
            return n
        }
    })
}