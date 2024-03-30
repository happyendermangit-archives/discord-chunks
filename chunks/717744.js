function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("306912"),
        u = n("947248"),
        s = n("523018"),
        l = n("269636"),
        c = n("281767"),
        f = n("382021");

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = {},
        y = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t)
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
                var e, r, o, i = E(t);
                if (n) {
                    var a = E(this).constructor;
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
                key: "hasViewingRoles",
                value: function() {
                    return Object.keys(m).length > 0
                }
            }, {
                key: "isViewingRoles",
                value: function(e) {
                    return null != e && null != m[e]
                }
            }, {
                key: "getViewingRoles",
                value: function(e) {
                    var t;
                    return null === (t = m[e]) || void 0 === t ? void 0 : t.roles
                }
            }, {
                key: "getViewingRolesTimestamp",
                value: function(e) {
                    var t;
                    return null != e ? null === (t = m[e]) || void 0 === t ? void 0 : t.timestamp : null
                }
            }, {
                key: "getData",
                value: function(e) {
                    return m[e]
                }
            }, {
                key: "isFullServerPreview",
                value: function(e) {
                    var t;
                    return (null === (t = m[e]) || void 0 === t ? void 0 : t.type) === l.ImpersonateType.NEW_MEMBER
                }
            }, {
                key: "isOptInEnabled",
                value: function(e) {
                    var t = m[e];
                    return null != t && t.type === l.ImpersonateType.NEW_MEMBER && t.optInEnabled
                }
            }, {
                key: "isOnboardingEnabled",
                value: function(e) {
                    var t = m[e];
                    return null != t && t.type === l.ImpersonateType.NEW_MEMBER && t.onboardingEnabled
                }
            }, {
                key: "getViewingChannels",
                value: function(e) {
                    var t = m[e];
                    return null == t || t.type !== l.ImpersonateType.NEW_MEMBER ? null : t.optInChannels
                }
            }, {
                key: "getOnboardingResponses",
                value: function(e) {
                    var t = m[e];
                    return null == t || t.type !== l.ImpersonateType.NEW_MEMBER ? null : t.onboardingResponses
                }
            }, {
                key: "getMemberOptions",
                value: function(e) {
                    var t = m[e];
                    return null == t || t.type !== l.ImpersonateType.NEW_MEMBER ? null : t.memberOptions
                }
            }, {
                key: "isChannelOptedIn",
                value: function(e, t) {
                    var n = this.getViewingChannels(e);
                    return null != n && n.has(t)
                }
            }, {
                key: "isViewingServerShop",
                value: function(e) {
                    var t;
                    return null != e && (null === (t = m[e]) || void 0 === t ? void 0 : t.type) === l.ImpersonateType.SERVER_SHOP
                }
            }, {
                key: "getImpersonateType",
                value: function(e) {
                    if (null == e) return null;
                    var t = m[e];
                    return null == t ? null : t.type
                }
            }, {
                key: "getBackNavigationSection",
                value: function(e) {
                    if (null == e) return c.GuildSettingsSections.ROLES;
                    var t = m[e];
                    if (null == t) return c.GuildSettingsSections.ROLES;
                    switch (t.type) {
                        case l.ImpersonateType.ROLES:
                        case l.ImpersonateType.SERVER_SHOP:
                            return t.returnToSection;
                        case l.ImpersonateType.NEW_MEMBER:
                            return c.GuildSettingsSections.ONBOARDING;
                        default:
                            return c.GuildSettingsSections.ROLES
                    }
                }
            }], d(r.prototype, o), i && d(r, i), u
        }(o.default.Store);
    _(y, "displayName", "ImpersonateStore"), t.default = new y(i.default, {
        IMPERSONATE_UPDATE: function(e) {
            var t, n, r = e.guildId,
                o = e.data;
            delete o.roles[s.default.castGuildIdAsEveryoneGuildRoleId(r)], m[r] = (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        _(e, t, n[t])
                    })
                }
                return e
            }({}, o), n = (n = {
                timestamp: Date.now()
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
        },
        IMPERSONATE_STOP: function(e) {
            var t = e.guildId;
            if (null == m[t]) return !1;
            delete m[t]
        },
        GUILD_ROLE_DELETE: function(e) {
            var t = e.guildId,
                n = e.roleId;
            if (null == m[t]) return !1;
            delete m[t].roles[n]
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function(e) {
            var t, n = e.guildId,
                r = e.overrides;
            if (null == n || null == m[n]) return !1;
            var o = m[n];
            if (null == o || o.type !== l.ImpersonateType.NEW_MEMBER) return !1;
            var i = null !== (t = o.optInChannels) && void 0 !== t ? t : new Set;
            return s.default.keys(r).forEach(function(e) {
                var t, n = r[e];
                u.hasFlag(null !== (t = n.flags) && void 0 !== t ? t : 0, f.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) ? i.add(e) : i.delete(e)
            }), o.optInChannels = i, !0
        },
        GUILD_ONBOARDING_SELECT_OPTION: function(e) {
            var t, n = e.guildId,
                r = e.optionId,
                o = e.selected,
                i = e.removedOptionIds;
            if (null == n || null == m[n]) return !1;
            var a = m[n];
            if (null == a || a.type !== l.ImpersonateType.NEW_MEMBER) return !1;
            var u = null !== (t = a.onboardingResponses) && void 0 !== t ? t : new Set;
            return null != i && i.length > 0 && i.forEach(function(e) {
                return u.delete(e)
            }), o ? u.add(r) : u.delete(r), a.onboardingResponses = u, !0
        },
        GUILD_MEMBER_UPDATE_LOCAL: function(e) {
            var t = e.guildId,
                n = e.roles,
                r = e.flags;
            if (null == t) return !1;
            var o = m[t];
            return null != o && (null != n && (o.roles = n.reduce(function(e, n) {
                var r = a.default.getRole(t, n);
                return null != r && (e[n] = r), e
            }, {})), null != r && o.type === l.ImpersonateType.NEW_MEMBER && (o.memberOptions.flags = r), !0)
        }
    })
}