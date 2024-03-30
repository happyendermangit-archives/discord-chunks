function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        computeThreadIdsSnapshot: function() {
            return Y
        }
    });
    var r, o, i, a, u, s = n("392711"),
        l = n.n(s),
        c = n("983396"),
        f = n("898511"),
        d = n("629815"),
        _ = n("147071"),
        E = n("271408"),
        p = n("217014"),
        m = n("935741"),
        y = n("879547"),
        I = n("894288"),
        h = n("162677"),
        O = n("523018"),
        T = n("727908");

    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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

    function b(e) {
        return function(e) {
            if (Array.isArray(e)) return S(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return S(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var N = [],
        R = null,
        C = null,
        P = new Set,
        D = c.ThreadSortOrder.LATEST_ACTIVITY,
        L = 0,
        M = [],
        U = !1,
        w = [],
        k = l().chain(N),
        G = l().chain(N),
        B = new Set,
        j = new Set;

    function F(e) {
        var t;
        return null !== (t = y.default.lastMessageId(e)) && void 0 !== t ? t : e
    }

    function V(e) {
        return function(t, n) {
            if ((0, T.isForumPostPinned)(t)) return -1;
            if ((0, T.isForumPostPinned)(n)) return 1;
            if (e === c.ThreadSortOrder.LATEST_ACTIVITY) return O.default.compare(F(n), F(t));
            else return O.default.compare(n, t)
        }
    }

    function H() {
        M = [], a = null, C = null, P = new Set, D = c.ThreadSortOrder.LATEST_ACTIVITY, L = 0, w = [], k = l().chain(N), G = l().chain(N), j.clear(), B.clear()
    }

    function x() {
        var e, t = I.default.getChannelId();
        if (null == t || !(null === (e = m.default.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return H(), !1;
        W({
            refreshThreadIds: !0
        })
    }

    function Y(e) {
        var t = m.default.getChannel(e);
        return null == t ? [] : Object.values(_.default.getThreadsForParent(t.guild_id, t.id)).map(function(e) {
            return e.id
        }).sort(V(D))
    }

    function W(e) {
        var t = m.default.getChannel(C);
        if (null != t) {
            (null == e ? void 0 : e.refreshThreadIds) && (w = Object.values(_.default.getThreadsForParent(t.guild_id, t.id)).map(function(e) {
                return e.id
            }), L = 0, U = !0), 0 !== B.size && (w = w.filter(function(e) {
                return !B.has(e)
            }), B.clear()), 0 !== j.size && (w = Array.from(new Set(b(w).concat(b(j)))), j.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (G = l().chain(w).sort(V(c.ThreadSortOrder.LATEST_ACTIVITY)), k = l().chain(w).sort(V(c.ThreadSortOrder.CREATION_DATE)));
            var n, r = (D === c.ThreadSortOrder.LATEST_ACTIVITY ? G : k).value();
            var o = (M = 0 === P.size ? r : r.filter((n = P, function(e) {
                var t, r = null === (t = m.default.getChannel(e)) || void 0 === t ? void 0 : t.appliedTags;
                return null != r && 0 !== r.length && r.some(function(e) {
                    return n.has(e)
                })
            }))).find(function(e) {
                var t, n;
                return t = e, null === (n = E.default.getCount(t)) || 0 === n
            });
            a = null == o ? null : o
        }
    }
    var K = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && A(e, t)
        }(s, e);
        var t, n, r, o, i, u = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = g(t);
            if (n) {
                var a = g(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function s() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), u.apply(this, arguments)
        }
        return r = s, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(m.default, _.default, I.default, y.default)
            }
        }, {
            key: "getNewThreadCount",
            value: function() {
                return L
            }
        }, {
            key: "getCanAckThreads",
            value: function() {
                return U
            }
        }, {
            key: "getThreadIds",
            value: function(e, t, n) {
                var r = e !== C,
                    o = !(0, h.areSetsEqual)(n, P),
                    i = t !== D;
                return C = e, P = n, D = t, r ? W({
                    refreshThreadIds: !0
                }) : i ? W({
                    sortThreadIds: !0
                }) : o && W(), M
            }
        }, {
            key: "getCurrentThreadIds",
            value: function() {
                return M
            }
        }, {
            key: "getAndDeleteMostRecentUserCreatedThreadId",
            value: function() {
                var e = R;
                return R = null, e
            }
        }, {
            key: "getFirstNoReplyThreadId",
            value: function() {
                return a
            }
        }], v(r.prototype, o), i && v(r, i), s
    }(f.default.Store);
    i = "ForumActivePostStore", (o = "displayName") in(r = K) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new K(d.default, {
        CONNECTION_OPEN: x,
        OVERLAY_INITIALIZE: x,
        GUILD_CREATE: x,
        CHANNEL_SELECT: x,
        CHANNEL_DELETE: function(e) {
            var t = e.channel;
            if (null == t.parent_id || t.parent_id !== C) return !1;
            H()
        },
        THREAD_LIST_SYNC: function(e) {
            var t, n = e.guildId;
            if (null == C || n !== (null === (t = m.default.getChannel(C)) || void 0 === t ? void 0 : t.guild_id)) return !1;
            W({
                refreshThreadIds: !0
            })
        },
        THREAD_CREATE: function(e) {
            var t = e.channel,
                n = e.isNewlyCreated;
            if (null == t.parent_id || t.parent_id !== C || !n) return !1;
            t.ownerId !== p.default.getId() ? L++ : R = t.id
        },
        THREAD_UPDATE: function(e) {
            var t = e.channel;
            if (null == t.parent_id || t.parent_id !== C) return !1;
            var n = (0, T.isForumPostPinned)(t.id),
                r = j.has(t.id);
            if (n && !r) j.add(t.id), W({
                sortThreadIds: !0
            });
            else {
                if (n || !r) return !1;
                j.delete(t.id), W({
                    sortThreadIds: !0
                })
            }
        },
        THREAD_DELETE: function(e) {
            var t = e.channel;
            if (null == t.parent_id || t.parent_id !== C) return !1;
            B.add(t.id), W({
                sortThreadIds: !0
            })
        },
        RESORT_THREADS: function(e) {
            var t = e.channelId;
            if (null == t || t !== C) return !1;
            W({
                refreshThreadIds: !0
            })
        },
        CHANNEL_ACK: function(e) {
            var t = e.channelId;
            if (null == t || t !== C) return !1;
            U = !1
        }
    })
}