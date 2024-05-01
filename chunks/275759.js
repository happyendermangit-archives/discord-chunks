function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConnectionConfigurationRuleOperator: function() {
            return r
        },
        getCallbackParamsFromURL: function() {
            return S
        },
        getConnectionsCheckText: function() {
            return h
        },
        getCreatedAtDate: function() {
            return N
        },
        getVisibleConnectionsRole: function() {
            return m
        },
        isVerifiedRolesChannelVisible: function() {
            return A
        },
        officialApplicationIds: function() {
            return f
        }
    });
    var i, r, a = n("512722"),
        s = n.n(a),
        o = n("392711"),
        l = n.n(o),
        u = n("729594");
    n("442837");
    var d = n("627420");
    n("524437");
    var _ = n("277800");
    n("605236");
    var c = n("430824");
    n("496675");
    var E = n("856651"),
        I = n("981631"),
        T = n("689938");
    let f = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];

    function S(e) {
        let {
            query: t
        } = u.parse(e, !0), {
            code: n,
            state: i,
            error: r,
            error_description: a
        } = t;
        return s()(!Array.isArray(n), "Received multiple query param values for code"), s()(!Array.isArray(i), "Received multiple query param values for state"), s()(!Array.isArray(r), "Received multiple query param values for error"), s()(!Array.isArray(a), "Received multiple query param values for error_description"), {
            code: n,
            state: i,
            error: r,
            errorDescription: a
        }
    }

    function h(e) {
        let {
            connectionType: t,
            connectionMetadataField: n,
            operator: i,
            operatorText: r,
            value: a
        } = e, s = null, o = Math.round(Number(a));
        switch (i) {
            case E.OperatorTypes.EQUAL:
                s = T.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_BE, t === I.PlatformTypes.PAYPAL && n === E.MetadataFields.PAYPAL_VERIFIED && (s = T.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_A);
                break;
            case E.OperatorTypes.NOT_EQUAL:
                s = T.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_NOT_BE;
                break;
            case E.OperatorTypes.LESS_THAN:
                s = T.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_MOST, o = Math.max(0, o - 1);
                break;
            case E.OperatorTypes.GREATER_THAN:
                s = T.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_LEAST, o = Math.max(0, o + 1);
                break;
            case void 0:
            case null:
                return null
        }
        if (null != r && (s = r), s instanceof d.FormattedMessage && null != i) switch (t) {
            case I.PlatformTypes.REDDIT:
                switch (n) {
                    case E.MetadataFields.CREATED_AT:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case E.MetadataFields.REDDIT_TOTAL_KARMA:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_KARMA.format({
                                karma: o
                            })
                        });
                        break;
                    case E.MetadataFields.REDDIT_GOLD:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_GOLD
                        });
                        break;
                    case E.MetadataFields.REDDIT_MOD:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_MODERATOR
                        });
                        break;
                    default:
                        return null
                }
                break;
            case I.PlatformTypes.STEAM:
                switch (n) {
                    case E.MetadataFields.CREATED_AT:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case E.MetadataFields.STEAM_GAME_COUNT:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_GAMES.format({
                                count: o
                            })
                        });
                        break;
                    case E.MetadataFields.STEAM_ITEM_COUNT_TF2:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_TF2_ITEMS.format({
                                count: o
                            })
                        });
                        break;
                    case E.MetadataFields.STEAM_ITEM_COUNT_DOTA2:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_DOTA2_ITEMS.format({
                                count: o
                            })
                        });
                        break;
                    default:
                        return null
                }
                break;
            case I.PlatformTypes.TWITTER:
                switch (n) {
                    case E.MetadataFields.CREATED_AT:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case E.MetadataFields.TWITTER_VERIFIED:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_VERIFIED
                        });
                        break;
                    case E.MetadataFields.TWITTER_FOLLOWERS_COUNT:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_FOLLOWERS.format({
                                count: o
                            })
                        });
                        break;
                    case E.MetadataFields.TWITTER_STATUSES_COUNT:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_STATUSES.format({
                                count: o
                            })
                        });
                        break;
                    default:
                        return null
                }
                break;
            case I.PlatformTypes.PAYPAL:
                switch (n) {
                    case E.MetadataFields.CREATED_AT:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case E.MetadataFields.PAYPAL_VERIFIED:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_PAYPAL_VERIFIED
                        });
                        break;
                    default:
                        return null
                }
                break;
            case I.PlatformTypes.EBAY:
                switch (n) {
                    case E.MetadataFields.CREATED_AT:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case E.MetadataFields.EBAY_TOP_RATED_SELLER:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                        });
                        break;
                    case E.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE.format({
                                value: o
                            })
                        });
                        break;
                    case E.MetadataFields.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT.format({
                                count: o
                            })
                        });
                        break;
                    case E.MetadataFields.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT.format({
                                count: o
                            })
                        });
                        break;
                    default:
                        return null
                }
                break;
            case I.PlatformTypes.TIKTOK:
                switch (n) {
                    case E.MetadataFields.TIKTOK_VERIFIED:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_VERIFIED
                        });
                        break;
                    case E.MetadataFields.TIKTOK_FOLLOWER_COUNT:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWER_COUNT.format({
                                count: o
                            })
                        });
                        break;
                    case E.MetadataFields.TIKTOK_FOLLOWING_COUNT:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWING_COUNT.format({
                                count: o
                            })
                        });
                        break;
                    case E.MetadataFields.TIKTOK_LIKES_COUNT:
                        s = s.format({
                            platformQuantityHook: () => T.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_LIKES_COUNT.format({
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
        return s
    }

    function A(e, t) {
        return Object.values(t).some(e => {
            var t;
            return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
        })
    }

    function m(e) {
        var t, n;
        let {
            guildMember: i,
            guild: r,
            guildRoles: a,
            channel: o,
            onlyChannelConnectionRoles: u = !1
        } = e;
        if (null == i) return null;
        if (null == r && null != o && (r = c.default.getGuild(o.getGuildId())), null == r) return null;
        let {
            id: d
        } = r;
        null == a && (a = c.default.getRoles(d));
        let E = i.roles.map(e => a[e]).filter(e => {
                var t;
                return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
            }).sort((e, t) => (s()(null != e && null != t, "roleA or roleB is null"), t.position - e.position)),
            I = l().intersection(E, (0, _.default)(o));
        return I.length > 0 ? null !== (t = I[0]) && void 0 !== t ? t : null : u ? null : null !== (n = E[0]) && void 0 !== n ? n : null
    }

    function N(e, t) {
        if (null == e || "" === e) return null;
        let n = new Date(e);
        return !(n instanceof Date) || isNaN(n.getTime()) ? null : n.toLocaleDateString(t, {
            month: "short",
            day: "numeric",
            year: "numeric"
        })
    }(i = r || (r = {}))[i.AND = 0] = "AND", i[i.OR = 1] = "OR"
}