function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l, c, f, d = n("392711"),
        _ = n.n(d),
        E = n("913527"),
        p = n.n(E),
        m = n("898511"),
        y = n("967888"),
        I = n("242880"),
        h = n("629815"),
        O = n("322997"),
        T = n("569492"),
        S = n("393588"),
        v = n("284352"),
        g = n("428009"),
        A = n("306912"),
        b = n("208454"),
        N = n("523018"),
        R = n("475228"),
        C = n("387807"),
        P = n("281767"),
        D = n("904895"),
        L = n("784145");

    function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function U(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function w(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function k(e) {
        return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function G(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                w(e, t, n[t])
            })
        }
        return e
    }

    function B(e, t) {
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

    function j(e, t) {
        return (j = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function F(e) {
        return function(e) {
            if (Array.isArray(e)) return M(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return M(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var V = ["name", "description", "icon", "splash", "banner", "homeHeader", "afkChannelId", "afkTimeout", "systemChannelId", "verificationLevel", "defaultMessageNotifications", "explicitContentFilter", "features", "systemChannelFlags", "preferredLocale", "rulesChannelId", "safetyAlertsChannelId", "discoverySplash", "publicUpdatesChannelId", "premiumProgressBarEnabled"],
        H = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
        x = !1,
        Y = P.FormStates.CLOSED,
        W = {},
        K = !1,
        z = null,
        X = null,
        q = 0,
        Q = P.MFALevels.NONE,
        J = null,
        Z = {
            primaryCategoryId: D.DEFAULT_DISCOVERY_CATEGORY_ID,
            secondaryCategoryIds: [],
            keywords: [],
            emojiDiscoverabilityEnabled: D.DEFAULT_EMOJI_DISCOVERABILITY_SETTING,
            partnerActionedTimestamp: null,
            partnerApplicationTimestamp: null,
            isPublished: !1,
            reasonsToJoin: [],
            socialLinks: [],
            about: ""
        },
        $ = !1,
        ee = Z,
        et = Z,
        en = null,
        er = 0,
        eo = null,
        ei = null,
        ea = null;

    function eu(e) {
        if (null == u || null == a || a.id !== e) return !1;
        var t = A.default.getGuild(e);
        return null != t && (a === u ? u = a = t : a = t, !0)
    }

    function es(e) {
        var t, n = e.guildId,
            o = e.section,
            i = e.subsection,
            l = e.location,
            f = A.default.getGuild(n);
        if (null == f) return el();
        a = u = f, Y = P.FormStates.OPEN, W = {}, s = N.default.castGuildIdAsEveryoneGuildRoleId(n), Q = u.mfaLevel, et = ee, c = null, J = l, ec({
            section: null !== (t = null != o ? o : r) && void 0 !== t ? t : P.GuildSettingsSections.OVERVIEW,
            subsection: null != i ? i : null
        })
    }

    function el() {
        x = !1, Y = P.FormStates.CLOSED, a = u = null, K = !1, z = null, X = null, q = 0, en = null, ei = null, ea = null, r = null, o = null, i = null, Q = P.MFALevels.NONE, l = void 0
    }

    function ec(e) {
        if (null == u) return !1;
        var t = r;
        if (r = e.section, o = e.subsection, r === P.GuildSettingsSections.BANS) !R.GuildSettingsBansNewExperiment.getCurrentConfig({
            guildId: u.id,
            location: "7f0c91_1"
        }).enabled && O.default.fetchGuildBans(u.id);
        else if (r === P.GuildSettingsSections.INSTANT_INVITES) y.HTTP.get({
            url: P.Endpoints.GUILD_INSTANT_INVITES(u.id),
            oldFormErrors: !0
        }).then(function(e) {
            h.default.dispatch({
                type: "GUILD_SETTINGS_LOADED_INVITES",
                invites: e.body
            })
        });
        else if (r === P.GuildSettingsSections.WIDGET) y.HTTP.get({
            url: P.Endpoints.GUILD_WIDGET(u.id),
            oldFormErrors: !0
        }).then(function(e) {
            h.default.dispatch({
                type: "GUILD_SETTINGS_SET_WIDGET",
                enabled: e.body.enabled,
                channelId: e.body.channel_id
            })
        });
        else if (r === P.GuildSettingsSections.INTEGRATIONS || r === P.GuildSettingsSections.ROLES) {
            if (s = null, t !== e.section) return ed(e)
        } else r === P.GuildSettingsSections.MEMBERS ? s = u.getEveryoneRoleId() : r === P.GuildSettingsSections.VANITY_URL ? y.HTTP.get({
            url: P.Endpoints.GUILD_VANITY_URL(u.id),
            oldFormErrors: !0
        }).then(function(e) {
            var t = e.body,
                n = t.code,
                r = t.uses,
                o = t.error;
            h.default.dispatch({
                type: "GUILD_SETTINGS_SET_VANITY_URL",
                code: n,
                uses: r,
                error: o
            })
        }) : r === P.GuildSettingsSections.SAFETY && h.default.dispatch({
            type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
            subsection: null == o ? P.GuildSettingsSubsections.SAFETY_OVERVIEW : o
        })
    }

    function ef(e) {
        var t;
        return new v.default({
            code: e.code,
            temporary: e.temporary,
            revoked: e.revoked,
            inviter: null != e.inviter ? new g.default(e.inviter) : null,
            channel: (0, T.createChannelRecordFromInvite)(e.channel),
            guild: null != e.guild ? new S.default(e.guild) : null,
            uses: e.uses,
            maxUses: e.max_uses,
            maxAge: e.max_age,
            createdAt: p()(null !== (t = e.created_at) && void 0 !== t ? t : void 0)
        })
    }

    function ed(e) {
        if (null == u || Y !== P.FormStates.OPEN || "GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== u.id) return !1;
        (0, C.fetchGuildIntegrationsApplications)(u.id)
    }
    var e_ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && j(e, t)
        }(m, e);
        var t, n, f, d, E, p = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = k(t);
            if (n) {
                var a = k(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function m() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), p.apply(this, arguments)
        }
        return f = m, d = [{
            key: "initialize",
            value: function() {
                this.waitFor(A.default, b.default)
            }
        }, {
            key: "getMetadata",
            value: function() {
                return et
            }
        }, {
            key: "hasChanges",
            value: function() {
                return !_().isEqual(u, a) || !_().isEqual(et, ee)
            }
        }, {
            key: "isOpen",
            value: function() {
                return x
            }
        }, {
            key: "getSavedRouteState",
            value: function() {
                return l
            }
        }, {
            key: "getSection",
            value: function() {
                return r
            }
        }, {
            key: "showNotice",
            value: function() {
                return this.hasChanges()
            }
        }, {
            key: "getGuildId",
            value: function() {
                return null != u ? u.id : null
            }
        }, {
            key: "showPublicSuccessModal",
            value: function() {
                return !I.Storage.get(L.PUBLIC_SUCCESS_MODAL_SEEN_KEY)
            }
        }, {
            key: "getGuild",
            value: function() {
                return u
            }
        }, {
            key: "isSubmitting",
            value: function() {
                return Y === P.FormStates.SUBMITTING
            }
        }, {
            key: "isGuildMetadataLoaded",
            value: function() {
                return $
            }
        }, {
            key: "getErrors",
            value: function() {
                return W
            }
        }, {
            key: "getSelectedRoleId",
            value: function() {
                return s
            }
        }, {
            key: "getSlug",
            value: function() {
                return c
            }
        }, {
            key: "getBans",
            value: function() {
                return [en, er]
            }
        }, {
            key: "getProps",
            value: function() {
                return {
                    submitting: this.isSubmitting(),
                    integrations: ea,
                    section: r,
                    subsection: o,
                    errors: W,
                    guild: u,
                    bans: en,
                    bansVersion: er,
                    invites: ei,
                    selectedRoleId: s,
                    embedEnabled: K,
                    embedChannelId: z,
                    mfaLevel: Q,
                    searchQuery: i,
                    vanityURLCode: X,
                    vanityURLUses: q,
                    originalGuild: a,
                    hasChanges: this.hasChanges(),
                    guildMetadata: et,
                    analyticsLocation: J,
                    isGuildMetadataLoaded: $
                }
            }
        }], U(f.prototype, d), E && U(f, E), m
    }(m.default.Store);
    w(e_, "displayName", "GuildSettingsStore"), t.default = new e_(h.default, __OVERLAY__ ? {} : {
        GUILD_SETTINGS_INIT: es,
        GUILD_SETTINGS_OPEN: function(e) {
            x = !0, es(e)
        },
        GUILD_SETTINGS_CLOSE: el,
        GUILD_SETTINGS_UPDATE: function(e) {
            if (null == u) return !1;
            V.forEach(function(t) {
                null != u && e.hasOwnProperty(t) && (u = u.set(t, e[t]))
            }), ! function() {
                if (null == u) return;
                var e = u.toJS(),
                    t = a.toJS();
                !V.some(function(n) {
                    return e[n] !== t[n]
                }) && (u = a)
            }()
        },
        GUILD_SETTINGS_CANCEL_CHANGES: function(e) {
            var t = e.guildId;
            W = {};
            var n = A.default.getGuild(t);
            null != n && (a = u = n)
        },
        GUILD_SETTINGS_SAVE_ROUTE_STACK: function(e) {
            return l = e.state, !1
        },
        GUILD_SETTINGS_SUBMIT: function() {
            Y = P.FormStates.SUBMITTING, W = {}
        },
        GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
            Y = P.FormStates.OPEN
        },
        GUILD_SETTINGS_SUBMIT_FAILURE: function(e) {
            var t;
            Y = P.FormStates.OPEN, r = null != r ? r : P.GuildSettingsSections.OVERVIEW, o = null, W = null !== (t = e.errors) && void 0 !== t ? t : {}
        },
        GUILD_SETTINGS_SET_SECTION: ec,
        GUILD_SETTINGS_SET_SEARCH_QUERY: function(e) {
            i = e.searchQuery
        },
        GUILD_SETTINGS_LOADED_BANS: function(e) {
            en = e.bans.reduce(function(e, t) {
                return null != t.user && null != t.user.id && e.set(t.user.id, t), e
            }, new Map), er++
        },
        GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
            var t = e.bans,
                n = e.guildId;
            (eo !== n || null == en) && (eo = n, en = new Map), en = t.reduce(function(e, t) {
                return null != t.user && null != t.user.id && e.set(t.user.id, t), e
            }, en), er++
        },
        GUILD_SETTINGS_LOADED_INVITES: function(e) {
            ei = e.invites.reduce(function(e, t) {
                return e[t.code] = ef(t), e
            }, {})
        },
        GUILD_SETTINGS_SET_WIDGET: function(e) {
            K = e.enabled, z = e.channelId
        },
        GUILD_SETTINGS_SET_VANITY_URL: function(e) {
            var t;
            X = null !== (t = e.code) && void 0 !== t ? t : null, q = e.uses
        },
        GUILD_SETTINGS_SET_MFA_SUCCESS: function(e) {
            Q = e.level
        },
        GUILD_SETTINGS_ROLE_SELECT: function(e) {
            var t = e.roleId;
            s = null != t ? t : null
        },
        GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
            ea = e.integrations
        },
        GUILD_BAN_ADD: function(e) {
            var t = e.user,
                n = e.guildId;
            if (null == en || null == u || u.id !== n) return !1;
            en.set(t.id, {
                user: t,
                reason: null
            }), er++
        },
        GUILD_BAN_REMOVE: function(e) {
            var t = e.user,
                n = e.guildId;
            if (null == en || null == u || u.id !== n) return !1;
            en.delete(t.id), er++
        },
        GUILD_ROLE_CREATE: function(e) {
            if (!eu(e.guildId)) return !1
        },
        GUILD_ROLE_UPDATE: function(e) {
            if (!eu(e.guildId)) return !1
        },
        GUILD_ROLE_DELETE: function(e) {
            var t = e.guildId,
                n = e.roleId;
            if (!eu(t)) return !1;
            s === n && (s = null)
        },
        GUILD_UPDATE: function(e) {
            if (null == u || u.id !== e.guild.id) return !1;
            var t = A.default.getGuild(u.id);
            if (null == t) return !1;
            var n = a = t,
                r = u.toJS();
            V.forEach(function(e) {
                if (!H.has(e)) {
                    if ("rulesChannelId" !== e && "publicUpdatesChannelId" !== e || r[e] !== L.CREATE_NEW_CHANNEL_VALUE) {
                        if ("features" === e) {
                            n.set(e, new Set(r[e]));
                            return
                        }
                        n = n.set(e, r[e])
                    }
                }
            }), u = n
        },
        GUILD_DELETE: function(e) {
            if (null == u || u.id !== e.guild.id) return !1;
            el()
        },
        USER_CONNECTIONS_UPDATE: ed,
        GUILD_INTEGRATIONS_UPDATE: ed,
        INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
            ei = G({}, ei), delete ei[e.code]
        },
        INSTANT_INVITE_CREATE_SUCCESS: function(e) {
            ei = B(G({}, ei), w({}, e.invite.code, ef(e.invite)))
        },
        GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function(e) {
            var t, n, r, o, i, a, s, l, c, f, d = e.guildId,
                _ = e.metadata;
            null != u && d === u.id && (!1 === $ && ($ = !0), et = ee = {
                primaryCategoryId: null !== (t = _.primaryCategoryId) && void 0 !== t ? t : D.DEFAULT_DISCOVERY_CATEGORY_ID,
                secondaryCategoryIds: null !== (n = _.secondaryCategoryIds) && void 0 !== n ? n : [],
                keywords: null !== (r = _.keywords) && void 0 !== r ? r : [],
                emojiDiscoverabilityEnabled: null !== (o = _.emojiDiscoverabilityEnabled) && void 0 !== o ? o : D.DEFAULT_EMOJI_DISCOVERABILITY_SETTING,
                partnerActionedTimestamp: null !== (i = _.partnerActionedTimestamp) && void 0 !== i ? i : null,
                partnerApplicationTimestamp: null !== (a = _.partnerApplicationTimestamp) && void 0 !== a ? a : null,
                isPublished: null !== (s = _.isPublished) && void 0 !== s && s,
                reasonsToJoin: null !== (l = _.reasonsToJoin) && void 0 !== l ? l : [],
                socialLinks: null !== (c = _.socialLinks) && void 0 !== c ? c : [],
                about: null !== (f = _.about) && void 0 !== f ? f : ""
            }, W = {})
        },
        GUILD_DISCOVERY_METADATA_FETCH_FAIL: function() {
            ee = et = Z
        },
        GUILD_DISCOVERY_CATEGORY_ADD: function(e) {
            var t = e.guildId,
                n = e.categoryId;
            null != u && t === u.id && (et = B(G({}, et), {
                secondaryCategoryIds: F(et.secondaryCategoryIds).concat([n])
            }), ee = B(G({}, ee), {
                secondaryCategoryIds: F(ee.secondaryCategoryIds).concat([n])
            }))
        },
        GUILD_DISCOVERY_CATEGORY_DELETE: function(e) {
            var t, n = e.guildId,
                r = e.categoryId;
            if (null != u && n === u.id) {
                var o = et.secondaryCategoryIds.indexOf(r); - 1 !== o && ((t = F(et.secondaryCategoryIds)).splice(o, 1), et = B(G({}, et), {
                    secondaryCategoryIds: t
                })), -1 !== (o = ee.secondaryCategoryIds.indexOf(r)) && ((t = F(ee.secondaryCategoryIds)).splice(o, 1), ee = B(G({}, ee), {
                    secondaryCategoryIds: t
                }))
            }
        },
        GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function(e) {
            var t = e.guildId,
                n = e.errors;
            null != u && t === u.id && (W = null != n ? n : {})
        },
        GUILD_UPDATE_DISCOVERY_METADATA: function(e) {
            var t = e.guildId,
                n = e.primaryCategoryId,
                r = e.keywords,
                o = e.emojiDiscoverabilityEnabled,
                i = e.isPublished,
                a = e.reasonsToJoin,
                s = e.socialLinks,
                l = e.about;
            null != u && t === u.id && (et = B(G({}, et), {
                primaryCategoryId: null != n ? n : et.primaryCategoryId,
                keywords: null != r ? r : et.keywords,
                emojiDiscoverabilityEnabled: null != o ? o : et.emojiDiscoverabilityEnabled,
                isPublished: null != i ? i : et.isPublished,
                reasonsToJoin: null != a ? a : et.reasonsToJoin,
                socialLinks: null != s ? s : et.socialLinks,
                about: null != l ? l : et.about
            }))
        },
        GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function(e) {
            var t = e.guildId,
                n = e.errors;
            null != u && t === u.id && (W = null != n ? n : {})
        },
        GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function(e) {
            c = e.slug
        },
        GUILD_DISCOVERY_SLUG_FETCH_FAIL: function(e) {
            ! function(e) {
                if (null == e) throw TypeError("Cannot destructure " + e);
            }(e), c = null
        }
    })
}