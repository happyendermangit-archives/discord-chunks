function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("56449"),
        l = n("569492"),
        c = n("935741");

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = {};

    function m(e) {
        var t;
        null === (t = e.threads) || void 0 === t || t.forEach(y)
    }

    function y(e) {
        if (!l.ALL_CHANNEL_TYPES.has(e.type)) return !1;
        var t = function(e) {
            if (!(e.id in p)) {
                var t, n;
                p[e.id] = {
                    guildId: e.guild_id,
                    parentId: e.parent_id,
                    memberCount: null !== (t = e.memberCount) && void 0 !== t ? t : 0,
                    memberIdsPreview: null !== (n = e.memberIdsPreview) && void 0 !== n ? n : []
                }
            }
            return p[e.id]
        }(e);
        null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview)
    }

    function I(e) {
        return y(e.channel)
    }

    function h(e) {
        e.threads.forEach(T)
    }

    function O(e) {
        var t = !1,
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = e.messages[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value,
                    s = !0,
                    l = !1,
                    c = void 0;
                try {
                    for (var f, d = u[Symbol.iterator](); !(s = (f = d.next()).done); s = !0) {
                        var _ = f.value;
                        t = T(_.thread) || t
                    }
                } catch (e) {
                    l = !0, c = e
                } finally {
                    try {
                        !s && null != d.return && d.return()
                    } finally {
                        if (l) throw c
                    }
                }
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
        return e.threads.forEach(function(e) {
            t = T(e) || t
        }), t
    }

    function T(e) {
        if (null != e && !(e.id in p)) {
            var t = c.default.getChannel(e.id);
            if (null != t) return y(t), !0
        }
        return !1
    }
    var S = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
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
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
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
                this.waitFor(c.default)
            }
        }, {
            key: "getMemberCount",
            value: function(e) {
                var t, n;
                return null !== (n = null === (t = p[e]) || void 0 === t ? void 0 : t.memberCount) && void 0 !== n ? n : null
            }
        }, {
            key: "getMemberIdsPreview",
            value: function(e) {
                var t, n;
                return null !== (n = null === (t = p[e]) || void 0 === t ? void 0 : t.memberIdsPreview) && void 0 !== n ? n : null
            }
        }, {
            key: "getInitialOverlayState",
            value: function() {
                return p
            }
        }], f(r.prototype, o), i && f(r, i), u
    }(a.default.Store);
    d(S, "displayName", "ThreadMembersStore"), t.default = new S(u.default, {
        CONNECTION_OPEN: function(e) {
            p = {}, e.guilds.forEach(m)
        },
        OVERLAY_INITIALIZE: function(e) {
            p = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        d(e, t, n[t])
                    })
                }
                return e
            }({}, e.threadMembers)
        },
        GUILD_CREATE: function(e) {
            m(e.guild)
        },
        GUILD_DELETE: function(e) {
            var t;
            t = e.guild.id, p = i().omitBy(p, function(e) {
                return e.guildId === t
            })
        },
        CHANNEL_DELETE: function(e) {
            var t;
            t = e.channel.id, p = i().omitBy(p, function(e) {
                return e.parentId === t
            })
        },
        THREAD_CREATE: I,
        THREAD_UPDATE: I,
        THREAD_LIST_SYNC: function(e) {
            e.threads.forEach(y)
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            var t = p[e.id];
            if (null == t) return !1;
            null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), t.memberCount = e.memberCount
        },
        SEARCH_FINISH: O,
        MOD_VIEW_SEARCH_FINISH: O,
        LOAD_THREADS_SUCCESS: h,
        LOAD_ARCHIVED_THREADS_SUCCESS: h,
        THREAD_DELETE: function(e) {
            var t = e.channel;
            delete p[t.id]
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            var t = !1,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = e.messages[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    t = T(u.thread) || t
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
            return t
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
                    n = T(l) || n
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