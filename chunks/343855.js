function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackMessageNotificationTimestamps: function() {
            return f
        }
    });
    var r = n("898511"),
        o = n("629815"),
        i = n("957808"),
        a = n("848957"),
        u = n("208454");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function f(e, t) {
        var n, r = null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
            s = a.default.isSuppressEveryoneEnabled(t),
            l = a.default.isSuppressRolesEnabled(t),
            c = null != e.mentions && e.mentions.some(function(e) {
                return e.id === r
            }),
            f = null == t || null == r ? null : i.default.getMember(t, r),
            d = null != e.mention_roles && null != f && null != f.roles && e.mention_roles.some(function(e) {
                return f.roles.includes(e)
            });
        o.default.dispatch({
            type: "MESSAGE_NOTIFICATION_SHOWN",
            guildId: t,
            mentioned: c,
            roleMentioned: d && !l,
            everyoneMentioned: !0 === e.mention_everyone && !s
        })
    }
    var d = null,
        _ = null,
        E = null,
        p = null,
        m = {},
        y = {},
        I = {},
        h = {},
        O = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
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

            function u() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), a.apply(this, arguments)
            }
            return r = u, o = [{
                key: "getGlobalStats",
                value: function() {
                    var e = function(e) {
                        return null == e ? null : Math.floor((Date.now() - e) / 1e3)
                    };
                    return {
                        approx_seconds_since_last_notification: e(d),
                        approx_seconds_since_last_mention: e(_),
                        approx_seconds_since_last_role_mention: e(E),
                        approx_seconds_since_last_everyone_mention: e(p)
                    }
                }
            }, {
                key: "getStats",
                value: function(e) {
                    var t = function(e) {
                        return null == e ? null : Math.floor((Date.now() - e) / 1e3)
                    };
                    return {
                        approx_seconds_since_last_notification: t(d),
                        approx_seconds_since_last_mention: t(_),
                        approx_seconds_since_last_role_mention: t(E),
                        approx_seconds_since_last_everyone_mention: t(p),
                        approx_seconds_since_last_guild_notification: null == e ? null : t(m[e]),
                        approx_seconds_since_last_guild_mention: null == e ? null : t(y[e]),
                        approx_seconds_since_last_guild_role_mention: null == e ? null : t(h[e]),
                        approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(I[e])
                    }
                }
            }], s(r.prototype, o), i && s(r, i), u
        }(r.default.Store);
    t.default = new O(o.default, {
        CONNECTION_OPEN: function() {
            var e = function(e) {
                return null != e && Date.now() - e < 6e4
            };
            for (var t in !e(d) && (d = null), !e(_) && (_ = null), !e(E) && (E = null), !e(p) && (p = null), m) !e(m[t]) && delete m[t];
            for (var n in y) !e(y[n]) && delete y[n];
            for (var r in h) !e(h[r]) && delete h[r];
            for (var o in I) !e(I[o]) && delete I[o]
        },
        MESSAGE_NOTIFICATION_SHOWN: function(e) {
            var t = e.guildId,
                n = e.mentioned,
                r = e.roleMentioned,
                o = e.everyoneMentioned,
                i = Date.now();
            d = i, null != t && (m[t] = i), n && (_ = i, null != t && (y[t] = i)), r && (E = i, null != t && (h[t] = i)), o && (p = i, null != t && (I[t] = i))
        }
    })
}