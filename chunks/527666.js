function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("273829"),
        u = n("935741"),
        s = n("208454"),
        l = n("162677"),
        c = n("523018");

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
        var t, n = u.default.getChannel(null == e ? void 0 : e.channel_id);
        if (null == n || !n.isForumPost()) return !1;
        var r = p[n.id];
        return c.default.compare(null == e ? void 0 : e.id, null == r ? void 0 : null === (t = r.message) || void 0 === t ? void 0 : t.id) > -1
    }

    function y(e, t) {
        var n = null == t ? null : (0, a.createMessageRecord)(t);
        return p[e] = {
            loaded: !0,
            message: n
        }, !0
    }

    function I(e) {
        return p[e]
    }

    function h(e) {
        var t;
        return null === (t = p[e]) || void 0 === t ? void 0 : t.message
    }

    function O(e) {
        var t = e.threads,
            n = e.mostRecentMessages;
        t.forEach(function(e) {
            return y(e.id, null)
        }), null == n || n.filter(l.isNotNullish).forEach(function(e) {
            y(e.channel_id, e)
        })
    }
    var T = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(l, e);
        var t, n, r, o, i, a = (t = l, n = function() {
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

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), a.apply(this, arguments)
        }
        return r = l, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(u.default, s.default)
            }
        }, {
            key: "getMessageState",
            value: function(e) {
                return !(e in p) && (p[e] = {
                    loaded: !1,
                    message: null
                }), p[e]
            }
        }], f(r.prototype, o), i && f(r, i), l
    }(o.default.Store);
    d(T, "displayName", "ForumPostRecentMessageStore"), t.default = new T(i.default, {
        CONNECTION_OPEN: function() {
            p = {}
        },
        MESSAGE_CREATE: function(e) {
            if (e.isPushNotification || !m(e.message)) return !1;
            e.message.channel_id === c.default.castMessageIdAsChannelId(e.message.id) ? y(e.message.channel_id, null) : y(e.message.channel_id, e.message)
        },
        MESSAGE_UPDATE: function(e) {
            if (!m(e.message) || e.message.channel_id === e.message.id) return !1;
            ! function(e, t) {
                var n, r, o = function(e) {
                        return p[e]
                    }(e),
                    i = h(e);
                if (null == o || null == i) return;
                p[e] = (n = function(e) {
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
                }({}, o), r = (r = {
                    message: (0, a.updateMessageRecord)(i, t)
                }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n)
            }(e.message.channel_id, e.message)
        },
        MESSAGE_DELETE: function(e) {
            var t, n, r;
            return t = e.channelId, n = e.id, (null == (r = h(t)) ? void 0 : r.id) === n && (delete p[t], !0)
        },
        LOAD_FORUM_POSTS: function(e) {
            var t = e.threads;
            for (var n in t) y(n, t[n].most_recent_message)
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: O,
        LOAD_THREADS_SUCCESS: O
    })
}