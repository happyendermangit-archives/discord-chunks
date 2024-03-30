function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("913527"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("523018");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = {
            lastSeenNewlyAddedEmojiIds: {}
        },
        E = _,
        p = {};

    function m() {
        for (var e in p) E.lastSeenNewlyAddedEmojiIds[e] = p[e]
    }
    var y = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(c, e);
        var t, n, r, o, a, u = (t = c, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function c() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), u.apply(this, arguments)
        }
        return r = c, o = [{
            key: "initialize",
            value: function(e) {
                E = null != e ? e : _
            }
        }, {
            key: "getState",
            value: function() {
                return E
            }
        }, {
            key: "getLastSeenEmojiByGuild",
            value: function(e) {
                return E.lastSeenNewlyAddedEmojiIds[e]
            }
        }, {
            key: "isNewerThanLastSeen",
            value: function(e, t) {
                if (null == e || null == t) return !1;
                var n = this.getLastSeenEmojiByGuild(e);
                if (null == n) return !0;
                if (s.default.compare(t, n.id) > 0) return !0;
                var r = i()(n.lastSeen);
                return i()().isBefore(r.add(2, "weeks")) && !n.acknowledged
            }
        }], l(r.prototype, o), a && l(r, a), c
    }(a.default.PersistedStore);
    c(y, "displayName", "NewlyAddedEmojiStore"), c(y, "persistKey", "NewlyAddedEmojiStore"), c(y, "migrations", [function(e) {
        var t = e.lastSeenNewlyAddedEmojiIds,
            n = {};
        for (var r in t) {
            var o = t[r];
            n[r] = {
                id: o,
                lastSeen: Date.now(),
                acknowledged: !1
            }
        }
        return {
            lastSeenNewlyAddedEmojiIds: n
        }
    }]), t.default = new y(u.default, {
        LOGOUT: function() {
            E = _, p = {}
        },
        NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function(e) {
            var t, n, r, o = e.guildId,
                i = e.emojiId,
                a = null !== (r = p[o]) && void 0 !== r ? r : E.lastSeenNewlyAddedEmojiIds[o];
            if (null == a || 0 > s.default.compare(a.id, i)) p[o] = {
                id: i,
                lastSeen: Date.now(),
                acknowledged: !0
            };
            else {
                ;
                p[o] = (t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            c(e, t, n[t])
                        })
                    }
                    return e
                }({}, a), n = (n = {
                    acknowledged: !0
                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t)
            }
        },
        NEWLY_ADDED_EMOJI_SEEN_PENDING: function(e) {
            var t, n = e.guildId,
                r = e.emojiId,
                o = null !== (t = p[n]) && void 0 !== t ? t : E.lastSeenNewlyAddedEmojiIds[n];
            (null == o || 0 > s.default.compare(o.id, r)) && (p[n] = {
                id: r,
                lastSeen: Date.now(),
                acknowledged: !1
            })
        },
        NEWLY_ADDED_EMOJI_SEEN_UPDATED: m,
        CLEAR_CACHES: function() {
            E = _, m()
        },
        CONNECTION_CLOSED: m
    })
}