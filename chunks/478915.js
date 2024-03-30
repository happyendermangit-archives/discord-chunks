function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PAGE_SIZE: function() {
            return g
        }
    });
    var r, o, i, a, u, s = n("392711"),
        l = n.n(s),
        c = n("983396"),
        f = n("898511"),
        d = n("629815"),
        _ = n("727908"),
        E = n("719378"),
        p = n("569492"),
        m = n("935741"),
        y = n("879547"),
        I = n("162677"),
        h = n("523018"),
        O = n("956774");

    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
    var g = 25,
        A = !1,
        b = !0,
        N = !1,
        R = !1,
        C = null,
        P = c.ThreadSortOrder.LATEST_ACTIVITY,
        D = [],
        L = 0;

    function M() {
        A = !1, b = !0, N = !1, R = !1, C = null, P = c.ThreadSortOrder.LATEST_ACTIVITY, a = new Set, L = 0, D = []
    }

    function U(e, t) {
        return t === c.ThreadSortOrder.LATEST_ACTIVITY ? y.default.lastMessageId(e.id) : e.id
    }

    function w() {
        if (null == C) return !1;
        var e = !N,
            t = m.default.getChannel(D[D.length - 1]),
            n = null == t ? null : U(t, P);
        D = l()(m.default.getAllThreadsForParent(C)).filter(function(e) {
            return e.isArchivedThread()
        }).filter(function(t) {
            if (0 !== a.size && (null === (r = t.appliedTags) || void 0 === r ? void 0 : r.some(function(e) {
                    return a.has(e)
                })) !== !0) return !1;
            if (e || null == n) return !0;
            var r, o = null == t ? null : U(t, P);
            return null != o && h.default.compare(o, n) >= 0
        }).sort(function(e, t) {
            return h.default.compare(U(e, P), U(t, P))
        }).map(function(e) {
            return e.id
        }).reverse().value()
    }

    function k(e) {
        if (!(D.indexOf(e) >= 0)) return !1;
        D = D.filter(function(t) {
            return t !== e
        })
    }
    var G = [],
        B = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && v(e, t)
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
                var e, r, o, i = S(t);
                if (n) {
                    var a = S(this).constructor;
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
                    this.waitFor(m.default, O.default, y.default)
                }
            }, {
                key: "canLoadMore",
                get: function() {
                    return N && !A && !R
                }
            }, {
                key: "nextOffset",
                get: function() {
                    return L
                }
            }, {
                key: "isInitialLoad",
                get: function() {
                    return b
                }
            }, {
                key: "isLoading",
                value: function(e, t, n) {
                    return C === e && P === t && (0, I.areSetsEqual)(a, n) ? A : (M(), !1)
                }
            }, {
                key: "getThreads",
                value: function(e, t, n) {
                    return C === e && P === t && (0, I.areSetsEqual)(a, n) ? D : G
                }
            }], T(r.prototype, o), i && T(r, i), s
        }(f.default.Store);
    i = "ArchivedThreadsStore", (o = "displayName") in(r = B) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new B(d.default, {
        CONNECTION_OPEN: M,
        THREAD_DELETE: function(e) {
            return k(e.channel.id)
        },
        THREAD_UPDATE: function(e) {
            var t = e.channel;
            return C === t.parent_id && !!(0, _.isForumPostPinned)(t.id) && void k(t.id)
        },
        CHANNEL_DELETE: function(e) {
            if (e.channel.id !== C) return !1;
            M()
        },
        LOAD_ARCHIVED_THREADS: function(e) {
            var t, n;
            (e.channelId !== C || e.sortOrder !== P || !(0, I.areSetsEqual)(e.tagFilter, a)) && M(), C = e.channelId, P = e.sortOrder, t = e.tagFilter, a = (null != (n = Set) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](t) : t instanceof n) ? e.tagFilter : new Set(e.tagFilter), A = !0, b = !1
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
            if (e.channelId !== C || e.sortOrder !== P || !(0, I.areSetsEqual)(e.tagFilter, a)) return !1;
            var t = e.threads.filter(function(e) {
                return p.ALL_CHANNEL_TYPES.has(e.type)
            }).map(function(e) {
                return e.id
            });
            D = D.concat(t);
            var n = m.default.getChannel(C);
            null != n && n.isForumLikeChannel() && (0, E.trackForumMorePostsLoaded)({
                guildId: n.guild_id,
                channelId: n.id,
                numArchivedThreads: D.length,
                hasMoreThreads: e.hasMore,
                filterTagIds: Array.from(e.tagFilter),
                sortOrder: e.sortOrder
            }), w(), N = e.hasMore, L = e.offset + g, A = !1, b = !1
        },
        LOAD_ARCHIVED_THREADS_FAIL: function(e) {
            if (e.channelId !== C || e.sortOrder !== P || !(0, I.areSetsEqual)(e.tagFilter, a)) return !1;
            A = !1, R = !0, b = !1
        },
        RESORT_THREADS: function(e) {
            return (null == C || null == e.channelId || C === e.channelId) && w()
        }
    })
}