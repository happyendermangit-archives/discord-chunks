function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        officialApplicationIds: function() {
            return v
        },
        ConnectionConfigurationRuleOperator: function() {
            return i
        },
        getCallbackParamsFromURL: function() {
            return E
        },
        getConnectionsCheckText: function() {
            return p
        },
        isVerifiedRolesChannelVisible: function() {
            return y
        },
        getVisibleConnectionsRole: function() {
            return T
        },
        getCreatedAtDate: function() {
            return C
        }
    });
    var s, i, r = n("627445"),
        a = n.n(r),
        o = n("917351"),
        d = n.n(o),
        u = n("746379"),
        l = n.n(u),
        f = n("429030");
    n("151426");
    var _ = n("98309");
    n("10641");
    var c = n("305961");
    n("957255");
    var g = n("214509"),
        m = n("49111"),
        h = n("782340");
    let v = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];

    function E(e) {
        let {
            query: t
        } = l.parse(e, !0), {
            code: n,
            state: s,
            error: i,
            error_description: r
        } = t;
        return a(!Array.isArray(n), "Received multiple query param values for code"), a(!Array.isArray(s), "Received multiple query param values for state"), a(!Array.isArray(i), "Received multiple query param values for error"), a(!Array.isArray(r), "Received multiple query param values for error_description"), {
            code: n,
            state: s,
            error: i,
            errorDescription: r
        }
    }

    function p(e) {
        let {
            connectionType: t,
            connectionMetadataField: n,
            operator: s,
            operatorText: i,
            value: r
        } = e, a = null, o = Math.round(Number(r));
        switch (s) {
            case g.OperatorTypes.EQUAL:
                a = h.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_BE, t === m.PlatformTypes.PAYPAL && n === g.MetadataFields.PAYPAL_VERIFIED && (a = h.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_A);
                break;
            case g.OperatorTypes.NOT_EQUAL:
                a = h.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_NOT_BE;
                break;
            case g.OperatorTypes.LESS_THAN:
                a = h.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_MOST, o = Math.max(0, o - 1);
                break;
            case g.OperatorTypes.GREATER_THAN:
                a = h.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_LEAST, o = Math.max(0, o + 1);
                break;
            case void 0:
            case null:
                return null
        }
        if (null != i && (a = i), a instanceof f.FormattedMessage && null != s) switch (t) {
            case m.PlatformTypes.REDDIT:
                switch (n) {
                    case g.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case g.MetadataFields.REDDIT_TOTAL_KARMA:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_KARMA.format({
                                karma: o
                            })
                        });
                        break;
                    case g.MetadataFields.REDDIT_GOLD:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_GOLD
                        });
                        break;
                    case g.MetadataFields.REDDIT_MOD:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_MODERATOR
                        });
                        break;
                    default:
                        return null
                }
                break;
            case m.PlatformTypes.STEAM:
                switch (n) {
                    case g.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case g.MetadataFields.STEAM_GAME_COUNT:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_GAMES.format({
                                count: o
                            })
                        });
                        break;
                    case g.MetadataFields.STEAM_ITEM_COUNT_TF2:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_TF2_ITEMS.format({
                                count: o
                            })
                        });
                        break;
                    case g.MetadataFields.STEAM_ITEM_COUNT_DOTA2:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_DOTA2_ITEMS.format({
                                count: o
                            })
                        });
                        break;
                    default:
                        return null
                }
                break;
            case m.PlatformTypes.TWITTER:
                switch (n) {
                    case g.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case g.MetadataFields.TWITTER_VERIFIED:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_VERIFIED
                        });
                        break;
                    case g.MetadataFields.TWITTER_FOLLOWERS_COUNT:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_FOLLOWERS.format({
                                count: o
                            })
                        });
                        break;
                    case g.MetadataFields.TWITTER_STATUSES_COUNT:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_STATUSES.format({
                                count: o
                            })
                        });
                        break;
                    default:
                        return null
                }
                break;
            case m.PlatformTypes.PAYPAL:
                switch (n) {
                    case g.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case g.MetadataFields.PAYPAL_VERIFIED:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_PAYPAL_VERIFIED
                        });
                        break;
                    default:
                        return null
                }
                break;
            case m.PlatformTypes.EBAY:
                switch (n) {
                    case g.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case g.MetadataFields.EBAY_TOP_RATED_SELLER:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                        });
                        break;
                    case g.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE.format({
                                value: o
                            })
                        });
                        break;
                    case g.MetadataFields.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT.format({
                                count: o
                            })
                        });
                        break;
                    case g.MetadataFields.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT.format({
                                count: o
                            })
                        });
                        break;
                    default:
                        return null
                }
                break;
            case m.PlatformTypes.TIKTOK:
                switch (n) {
                    case g.MetadataFields.TIKTOK_VERIFIED:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_VERIFIED
                        });
                        break;
                    case g.MetadataFields.TIKTOK_FOLLOWER_COUNT:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWER_COUNT.format({
                                count: o
                            })
                        });
                        break;
                    case g.MetadataFields.TIKTOK_FOLLOWING_COUNT:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWING_COUNT.format({
                                count: o
                            })
                        });
                        break;
                    case g.MetadataFields.TIKTOK_LIKES_COUNT:
                        a = a.format({
                            platformQuantityHook: () => h.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_LIKES_COUNT.format({
                                count: o
                            })
                        });
                        break;
                    default:
                        return null
                }
                break;
            default:
                return null
        }
        return a
    }

    function y(e) {
        return Object.values(e.roles).some(e => {
            var t;
            return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
        })
    }

    function T(e) {
        var t, n;
        let {
            guildMember: s,
            guild: i,
            channel: r,
            onlyChannelConnectionRoles: o = !1
        } = e;
        if (null == s) return null;
        if (null == i && null != r && (i = c.default.getGuild(r.getGuildId())), null == i) return null;
        let u = s.roles.map(e => {
                var t;
                return null == i ? void 0 : null === (t = i.roles) || void 0 === t ? void 0 : t[e]
            }).filter(e => {
                var t;
                return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
            }).sort((e, t) => (a(null != e && null != t, "roleA or roleB is null"), t.position - e.position)),
            l = d.intersection(u, (0, _.default)(r));
        return l.length > 0 ? null !== (t = l[0]) && void 0 !== t ? t : null : o ? null : null !== (n = u[0]) && void 0 !== n ? n : null
    }

    function C(e, t) {
        if (null == e || "" === e) return null;
        let n = new Date(e);
        return !(n instanceof Date) || isNaN(n.getTime()) ? null : n.toLocaleDateString(t, {
            month: "short",
            day: "numeric",
            year: "numeric"
        })
    }(s = i || (i = {}))[s.AND = 0] = "AND", s[s.OR = 1] = "OR"
}