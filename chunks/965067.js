function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConnectionConfigurationRuleOperator: function() {
            return o
        },
        getCallbackParamsFromURL: function() {
            return I
        },
        getConnectionsCheckText: function() {
            return h
        },
        getCreatedAtDate: function() {
            return S
        },
        getVisibleConnectionsRole: function() {
            return T
        },
        isVerifiedRolesChannelVisible: function() {
            return O
        },
        officialApplicationIds: function() {
            return y
        }
    });
    var r, o, i = n("512722"),
        a = n.n(i),
        u = n("392711"),
        s = n.n(u),
        l = n("729594");
    n("898511");
    var c = n("812497");
    n("14782");
    var f = n("451088");
    n("510077");
    var d = n("306912");
    n("29884");
    var _ = n("999325"),
        E = n("281767"),
        p = n("941504");

    function m(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }
    var y = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];

    function I(e) {
        var t = l.parse(e, !0).query,
            n = t.code,
            r = t.state,
            o = t.error,
            i = t.error_description;
        return a()(!Array.isArray(n), "Received multiple query param values for code"), a()(!Array.isArray(r), "Received multiple query param values for state"), a()(!Array.isArray(o), "Received multiple query param values for error"), a()(!Array.isArray(i), "Received multiple query param values for error_description"), {
            code: n,
            state: r,
            error: o,
            errorDescription: i
        }
    }

    function h(e) {
        var t = e.connectionType,
            n = e.connectionMetadataField,
            r = e.operator,
            o = e.operatorText,
            i = e.value,
            a = null,
            u = Math.round(Number(i));
        switch (r) {
            case _.OperatorTypes.EQUAL:
                a = p.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_BE, t === E.PlatformTypes.PAYPAL && n === _.MetadataFields.PAYPAL_VERIFIED && (a = p.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_A);
                break;
            case _.OperatorTypes.NOT_EQUAL:
                a = p.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_NOT_BE;
                break;
            case _.OperatorTypes.LESS_THAN:
                a = p.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_MOST, u = Math.max(0, u - 1);
                break;
            case _.OperatorTypes.GREATER_THAN:
                a = p.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_LEAST, u = Math.max(0, u + 1);
                break;
            case void 0:
            case null:
                return null
        }
        if (null != o && (a = o), m(a, c.FormattedMessage) && null != r) switch (t) {
            case E.PlatformTypes.REDDIT:
                switch (n) {
                    case _.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                    days: u
                                })
                            }
                        });
                        break;
                    case _.MetadataFields.REDDIT_TOTAL_KARMA:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_KARMA.format({
                                    karma: u
                                })
                            }
                        });
                        break;
                    case _.MetadataFields.REDDIT_GOLD:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_GOLD
                            }
                        });
                        break;
                    case _.MetadataFields.REDDIT_MOD:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_MODERATOR
                            }
                        });
                        break;
                    default:
                        return null
                }
                break;
            case E.PlatformTypes.STEAM:
                switch (n) {
                    case _.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                    days: u
                                })
                            }
                        });
                        break;
                    case _.MetadataFields.STEAM_GAME_COUNT:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_GAMES.format({
                                    count: u
                                })
                            }
                        });
                        break;
                    case _.MetadataFields.STEAM_ITEM_COUNT_TF2:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_TF2_ITEMS.format({
                                    count: u
                                })
                            }
                        });
                        break;
                    case _.MetadataFields.STEAM_ITEM_COUNT_DOTA2:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_DOTA2_ITEMS.format({
                                    count: u
                                })
                            }
                        });
                        break;
                    default:
                        return null
                }
                break;
            case E.PlatformTypes.TWITTER:
                switch (n) {
                    case _.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                    days: u
                                })
                            }
                        });
                        break;
                    case _.MetadataFields.TWITTER_VERIFIED:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_VERIFIED
                            }
                        });
                        break;
                    case _.MetadataFields.TWITTER_FOLLOWERS_COUNT:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_FOLLOWERS.format({
                                    count: u
                                })
                            }
                        });
                        break;
                    case _.MetadataFields.TWITTER_STATUSES_COUNT:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_STATUSES.format({
                                    count: u
                                })
                            }
                        });
                        break;
                    default:
                        return null
                }
                break;
            case E.PlatformTypes.PAYPAL:
                switch (n) {
                    case _.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                    days: u
                                })
                            }
                        });
                        break;
                    case _.MetadataFields.PAYPAL_VERIFIED:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_PAYPAL_VERIFIED
                            }
                        });
                        break;
                    default:
                        return null
                }
                break;
            case E.PlatformTypes.EBAY:
                switch (n) {
                    case _.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                    days: u
                                })
                            }
                        });
                        break;
                    case _.MetadataFields.EBAY_TOP_RATED_SELLER:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                            }
                        });
                        break;
                    case _.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE.format({
                                    value: u
                                })
                            }
                        });
                        break;
                    case _.MetadataFields.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT.format({
                                    count: u
                                })
                            }
                        });
                        break;
                    case _.MetadataFields.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT.format({
                                    count: u
                                })
                            }
                        });
                        break;
                    default:
                        return null
                }
                break;
            case E.PlatformTypes.TIKTOK:
                switch (n) {
                    case _.MetadataFields.TIKTOK_VERIFIED:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_VERIFIED
                            }
                        });
                        break;
                    case _.MetadataFields.TIKTOK_FOLLOWER_COUNT:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWER_COUNT.format({
                                    count: u
                                })
                            }
                        });
                        break;
                    case _.MetadataFields.TIKTOK_FOLLOWING_COUNT:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWING_COUNT.format({
                                    count: u
                                })
                            }
                        });
                        break;
                    case _.MetadataFields.TIKTOK_LIKES_COUNT:
                        a = a.format({
                            platformQuantityHook: function() {
                                return p.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_LIKES_COUNT.format({
                                    count: u
                                })
                            }
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

    function O(e, t) {
        return Object.values(t).some(function(e) {
            var t;
            return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
        })
    }

    function T(e) {
        var t, n, r = e.guildMember,
            o = e.guild,
            i = e.guildRoles,
            u = e.channel,
            l = e.onlyChannelConnectionRoles;
        if (null == r) return null;
        if (null == o && null != u && (o = d.default.getGuild(u.getGuildId())), null == o) return null;
        var c = o.id;
        null == i && (i = d.default.getRoles(c));
        var _ = r.roles.map(function(e) {
                return i[e]
            }).filter(function(e) {
                var t;
                return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
            }).sort(function(e, t) {
                return a()(null != e && null != t, "roleA or roleB is null"), t.position - e.position
            }),
            E = s().intersection(_, (0, f.default)(u));
        return E.length > 0 ? null !== (t = E[0]) && void 0 !== t ? t : null : void 0 !== l && l ? null : null !== (n = _[0]) && void 0 !== n ? n : null
    }

    function S(e, t) {
        if (null == e || "" === e) return null;
        var n = new Date(e);
        return !m(n, Date) || isNaN(n.getTime()) ? null : n.toLocaleDateString(t, {
            month: "short",
            day: "numeric",
            year: "numeric"
        })
    }(r = o || (o = {}))[r.AND = 0] = "AND", r[r.OR = 1] = "OR"
}