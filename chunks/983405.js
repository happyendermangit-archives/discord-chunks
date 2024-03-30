function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("22287"),
        s = n("898511"),
        l = n("629815"),
        c = n("957808"),
        f = n("306912"),
        d = n("208454"),
        _ = n("933501"),
        E = n("281767");

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e, t) {
        return (y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var I = new Set,
        h = new Map,
        O = new Map,
        T = new Map,
        S = new Map,
        v = null;

    function g(e) {
        var t = d.default.getCurrentUser(),
            n = f.default.getGuild(e);
        if (null == n || null == t) return !1;
        var r = new Set,
            o = new Set,
            i = new Set;
        if (S.set(e, n.isOwner(t)), n.hasFeature(E.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) {
            var a, s = c.default.getMember(e, t.id),
                l = new Set(null !== (a = null == s ? void 0 : s.roles) && void 0 !== a ? a : []),
                p = f.default.getRoles(n.id);
            for (var m in p) {
                var y, I = p[m];
                if ((0, _.isSubscriptionRole)(I) && (r.add(m), (0, _.isSubscriptionRoleAvailableForPurchase)(I) && (o.add(m), l.has(m) && i.add(m))), l.has(m) && (y = I, u.has(y.permissions, E.Permissions.ADMINISTRATOR))) S.set(e, !0)
            }
        }
        return h.set(e, r), T.set(e, i), O.set(e, o), !0
    }

    function A() {
        h.clear(), T.clear(), O.clear(), S.clear(), v = null
    }

    function b(e) {
        var t = e.guild.id;
        if (null == v) return !1;
        var n = f.default.getGuild(t);
        if (null == n) return !1;
        var r = n.hasFeature(E.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
        if (r && !v.has(t)) {
            var o = new Set(v);
            return o.add(t), v = o, !0
        }
        if (!r && v.has(t)) {
            var i = new Set(v);
            return i.delete(t), v = i, !0
        }
        return !1
    }

    function N(e) {
        var t = e.guildId;
        return !!h.has(t) && g(t)
    }
    var R = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
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
            var e, r, o, i = m(t);
            if (n) {
                var a = m(this).constructor;
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
                this.waitFor(f.default)
            }
        }, {
            key: "getGuildIdsWithPurchasableRoles",
            value: function() {
                return null == v ? function() {
                    var e = f.default.getGuilds(),
                        t = new Set;
                    for (var n in e) e[n].hasFeature(E.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n);
                    return v = t, t
                }() : v
            }
        }, {
            key: "buildRoles",
            value: function(e) {
                !h.has(e) && g(e)
            }
        }, {
            key: "getSubscriptionRoles",
            value: function(e) {
                var t;
                return this.buildRoles(e), null !== (t = h.get(e)) && void 0 !== t ? t : I
            }
        }, {
            key: "getPurchasableSubscriptionRoles",
            value: function(e) {
                var t;
                return this.buildRoles(e), null !== (t = O.get(e)) && void 0 !== t ? t : I
            }
        }, {
            key: "getUserSubscriptionRoles",
            value: function(e) {
                var t;
                return this.buildRoles(e), null !== (t = T.get(e)) && void 0 !== t ? t : I
            }
        }, {
            key: "getUserIsAdmin",
            value: function(e) {
                var t;
                return this.buildRoles(e), null !== (t = S.get(e)) && void 0 !== t && t
            }
        }], p(r.prototype, o), i && p(r, i), u
    }(s.default.Store);
    i = "SubscriptionRoleStore", (o = "displayName") in(r = R) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new R(l.default, {
        CONNECTION_OPEN: A,
        LOGOUT: A,
        GUILD_CREATE: b,
        GUILD_DELETE: function(e) {
            var t = e.guild.id;
            if ((null == v ? void 0 : v.has(t)) !== !0) return !1;
            var n = new Set(v);
            n.delete(t), v = n
        },
        GUILD_UPDATE: b,
        GUILD_ROLE_CREATE: N,
        GUILD_ROLE_UPDATE: N,
        GUILD_ROLE_DELETE: N,
        GUILD_MEMBER_UPDATE: function(e) {
            var t = e.guildId,
                n = e.user,
                r = d.default.getCurrentUser();
            return !!(n.id === (null == r ? void 0 : r.id) && h.has(t)) && g(t)
        }
    })
}