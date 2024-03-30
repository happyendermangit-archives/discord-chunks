function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("22287"),
        s = n("898511"),
        l = n("629815"),
        c = n("507058"),
        f = n("453724"),
        d = n("746785"),
        _ = n("484789"),
        E = n("933501"),
        p = n("433610"),
        m = n("717744"),
        y = n("935741"),
        I = n("957808"),
        h = n("306912"),
        O = n("208454"),
        T = n("281767");

    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e, t) {
        return (g = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var A = {},
        b = new Set;

    function N(e) {
        var t = e.guildId,
            n = e.role,
            r = e.isPreviewingRoles;
        return !!(0, E.isSubscriptionRole)(n) && (!!(r || (0, E.isSubscriptionRoleAvailableForPurchase)(null != n ? n : void 0) || function(e, t) {
            if (null == e) return !1;
            var n = O.default.getCurrentUser();
            if (null == n) return !1;
            var r = I.default.getMember(t, n.id);
            return null != r && r.roles.includes(e.id)
        }(n, t)) || !1)
    }

    function R(e, t) {
        if (!t.hasFeature(T.GuildFeatures.CREATOR_MONETIZABLE) && !t.hasFeature(T.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) return !1;
        var n = m.default.isViewingServerShop(t.id),
            r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, s = Object.keys(e.permissionOverwrites)[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                var l = a.value,
                    c = h.default.getRole(t.id, l);
                if (N({
                        guildId: t.id,
                        role: c,
                        isPreviewingRoles: n
                    })) {
                    var f = e.permissionOverwrites[l];
                    if ((0, p.isChannelAccessGrantedBy)(e, f)) return !0
                }
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !r && null != s.return && s.return()
            } finally {
                if (o) throw i
            }
        }
        var d = h.default.getRole(t.id, t.getEveryoneRoleId()),
            _ = null != d && !u.has(d.permissions, T.Permissions.VIEW_CHANNEL),
            E = (0, p.isChannelAccessDeniedBy)(e, e.permissionOverwrites[t.id]);
        if (_ && !E) {
            var y = !0,
                I = !1,
                O = void 0;
            try {
                for (var S, v = Object.values(h.default.getRoles(t.id))[Symbol.iterator](); !(y = (S = v.next()).done); y = !0) {
                    var g = S.value;
                    if (N({
                            guildId: t.id,
                            role: g,
                            isPreviewingRoles: n
                        }) && (0, p.isAllChannelsRole)(g)) return !0
                }
            } catch (e) {
                I = !0, O = e
            } finally {
                try {
                    !y && null != v.return && v.return()
                } finally {
                    if (I) throw O
                }
            }
        }
        return !1
    }

    function C(e, t) {
        var n = A[e];
        if (null == n) return !1;
        var r = y.default.getChannel(t);
        if (null == r) return !1;
        var o = h.default.getGuild(r.getGuildId());
        if (null == o) return !1;
        var i = n.has(t),
            a = R(r, o);
        return i !== a && (a ? n.add(t) : n.delete(t), !0)
    }

    function P() {
        A = {}, b.clear()
    }

    function D(e) {
        var t = e.guild;
        delete A[t.id]
    }

    function L(e) {
        var t = e.guildId;
        delete A[t]
    }

    function M(e) {
        var t = e.channel;
        return null != t.guild_id && C(t.guild_id, t.id)
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
            }), t && g(e, t)
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
            var e, r, o, i = v(t);
            if (n) {
                var a = v(this).constructor;
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
                this.waitFor(h.default, y.default, m.default), d.GuildRoleSubscriptionUsersExperiment.subscribe({
                    location: "1"
                }, function() {
                    return P()
                })
            }
        }, {
            key: "isChannelGated",
            value: function(e, t) {
                if (null == e) return !1;
                var n = A[e];
                return null == n && (! function(e) {
                    var t = h.default.getGuild(e);
                    if (null != t) {
                        var n = A[e] = new Set;
                        if (t.hasFeature(T.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && ((0, _.isGuildEligibleForRoleSubscriptions)(e) || (0, c.isExpeditedMonetizationOnboardingGuild)(t))) {
                            var r = y.default.getMutableGuildChannelsForGuild(e);
                            for (var o in r) {
                                var i = r[o];
                                R(i, t) && n.add(i.id)
                            }
                        }
                    }
                }(e), n = A[e]), null != n && n.has(t)
            }
        }, {
            key: "isChannelGatedAndVisible",
            value: function(e, t) {
                return null != e && this.isChannelGated(e, t) && !b.has(e)
            }
        }], S(r.prototype, o), i && S(r, i), u
    }(s.default.Store);
    i = "GatedChannelStore", (o = "displayName") in(r = U) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new U(l.default, {
        CONNECTION_OPEN: P,
        OVERLAY_INITIALIZE: P,
        CACHE_LOADED_LAZY: P,
        GUILD_CREATE: D,
        GUILD_UPDATE: D,
        GUILD_DELETE: D,
        GUILD_ROLE_CREATE: L,
        GUILD_ROLE_UPDATE: L,
        GUILD_ROLE_DELETE: L,
        IMPERSONATE_UPDATE: L,
        IMPERSONATE_STOP: L,
        CHANNEL_CREATE: M,
        CHANNEL_DELETE: M,
        CHANNEL_UPDATES: function(e) {
            var t = e.channels,
                n = !1,
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var s = a.value;
                    null != s.guild_id && C(s.guild_id, s.id) && (n = !0)
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
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.restrictions;
            (0, f.isRestrictedFromShowingGuildPurchaseEntryPoints)(n) ? b.add(t): b.delete(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function(e) {
            var t = e.guildId;
            b.add(t)
        }
    })
}