function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("935741");

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                s(e, t, n[t])
            })
        }
        return e
    }

    function f(e, t) {
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
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = {};

    function E(e) {
        var t = a.default.getChannel(e);
        return !!(null != t && t.isForumLikeChannel()) || !1
    }

    function p(e) {
        var t, n = null !== (t = _[e]) && void 0 !== t ? t : {
            query: null,
            loading: !1,
            results: null
        };
        return _[e] = n, n
    }
    var m = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(s, e);
        var t, n, r, o, i, a = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = l(t);
            if (n) {
                var a = l(this).constructor;
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
            }(this, s), a.apply(this, arguments)
        }
        return r = s, o = [{
            key: "getSearchQuery",
            value: function(e) {
                var t = _[e];
                return null == t ? void 0 : t.query
            }
        }, {
            key: "getSearchLoading",
            value: function(e) {
                var t, n = _[e];
                return null !== (t = null == n ? void 0 : n.loading) && void 0 !== t && t
            }
        }, {
            key: "getSearchResults",
            value: function(e) {
                var t = _[e];
                return null == t ? void 0 : t.results
            }
        }, {
            key: "getHasSearchResults",
            value: function(e) {
                var t = _[e];
                return (null == t ? void 0 : t.results) != null && t.results.length > 0
            }
        }], u(r.prototype, o), i && u(r, i), s
    }(o.default.Store);
    s(m, "displayName", "ForumSearchStore"), t.default = new m(i.default, {
        CONNECTION_OPEN: function() {
            _ = {}
        },
        THREAD_DELETE: function(e) {
            var t, n = e.channel,
                r = n.parent_id;
            if (null == r) return !1;
            var o = _[r];
            if (null == o) return !1;
            _[r] = f(c({}, o), {
                results: null === (t = o.results) || void 0 === t ? void 0 : t.filter(function(e) {
                    return n.id !== e
                })
            })
        },
        CHANNEL_DELETE: function(e) {
            var t = e.channel;
            return delete _[t.id]
        },
        FORUM_SEARCH_QUERY_UPDATED: function(e) {
            var t = e.channelId,
                n = e.query;
            if (!E(t)) return !1;
            var r = p(t);
            _[t] = f(c({}, r), {
                query: n,
                results: null
            })
        },
        FORUM_SEARCH_START: function(e) {
            var t = e.channelId;
            if (!E(t)) return !1;
            var n = p(t);
            _[t] = f(c({}, n), {
                loading: !0
            })
        },
        FORUM_SEARCH_SUCCESS: function(e) {
            var t = e.channelId,
                n = e.threadIds;
            if (!E(t)) return !1;
            var r = p(t);
            _[t] = f(c({}, r), {
                loading: !1,
                results: n
            })
        },
        FORUM_SEARCH_FAILURE: function(e) {
            var t = e.channelId;
            if (!E(t)) return !1;
            var n = p(t);
            _[t] = f(c({}, n), {
                loading: !1,
                results: []
            })
        },
        FORUM_SEARCH_CLEAR: function(e) {
            var t = e.channelId;
            return !!E(t) && delete _[t]
        }
    })
}