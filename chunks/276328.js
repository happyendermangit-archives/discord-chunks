function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        allowUnicodeEmojiForIntention: function() {
            return F
        },
        dedupeUnicodeEmojis: function() {
            return X
        },
        getAriaIdForEmojiCategory: function() {
            return B
        },
        getEmojiSubCategory: function() {
            return z
        },
        getSearchPlaceholder: function() {
            return q
        },
        getStringForEmojiCategory: function() {
            return j
        },
        trackEmojiFavorited: function() {
            return G
        },
        trackEmojiFocus: function() {
            return w
        },
        trackEmojiSearchEmpty: function() {
            return U
        },
        trackEmojiSearchResultsViewed: function() {
            return L
        },
        trackEmojiSearchSelect: function() {
            return M
        },
        trackEmojiSearchStart: function() {
            return D
        },
        trackEmojiSelect: function() {
            return k
        },
        trackPremiumSettingsPaneOpened: function() {
            return P
        },
        useCategoryNitroLockedStates: function() {
            return R
        },
        useEmojiCategories: function() {
            return C
        },
        useEmojiInPriorityOrder: function() {
            return W
        },
        useEmojiSearchResults: function() {
            return V
        },
        useFavoriteEmojis: function() {
            return x
        },
        useFrequentlyUsedEmojis: function() {
            return H
        },
        useIsFavoriteEmoji: function() {
            return Y
        },
        useTrackEmojiPickerOpened: function() {
            return K
        }
    });
    var r = n("470079"),
        o = n("392711"),
        i = n("278074"),
        a = n("898511"),
        u = n("140817"),
        s = n("300983"),
        l = n("175501"),
        c = n("968574"),
        f = n("306912"),
        d = n("380512"),
        _ = n("208454"),
        E = n("870331"),
        p = n("388990"),
        m = n("739226"),
        y = n("32950");
    n("523018");
    var I = n("91623"),
        h = n("986609"),
        O = n("888136"),
        T = n("644037"),
        S = n("281767"),
        v = n("68735"),
        g = n("980671"),
        A = n("868615"),
        b = n("941504");

    function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var R = function(e, t, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null == t ? void 0 : t.getGuildId(),
                i = (0, a.useStateFromStores)([s.default], function() {
                    return s.default.getDisambiguatedEmojiContext(o)
                }, [o]).getGroupedCustomEmoji(),
                u = (0, a.useStateFromStores)([_.default], function() {
                    return _.default.getCurrentUser()
                }),
                l = (0, y.isPremium)(u);
            return r.useMemo(function() {
                return n.map(function(n) {
                    if (l) return !1;
                    if (n.type === T.EmojiCategoryTypes.GUILD) {
                        var r = null == i ? void 0 : i[n.guild.id];
                        return null != r && 0 !== r.length && m.default.isEmojiCategoryNitroLocked({
                            categoryEmojis: r,
                            channel: t,
                            intention: e
                        })
                    }
                    if (n.type === T.EmojiCategoryTypes.PREMIUM_UPSELL) return !0;
                    return !1
                })
            }, [n, t, i, e, l])
        },
        C = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
            (0, l.maybeFetchTopEmojisByGuild)(n);
            var o = (0, v.isExternalEmojiAllowedForIntention)(e),
                i = H(n),
                u = x(n),
                c = (0, O.default)(n, e),
                _ = c.topEmojis,
                E = c.newlyAddedEmojis,
                p = (0, h.default)({
                    topEmojis: _,
                    newlyAddedEmojis: E
                }).allEmojis,
                y = (0, a.useStateFromStores)([s.default], function() {
                    return s.default.getDisambiguatedEmojiContext(n)
                }, [n]),
                I = (0, a.useStateFromStores)([f.default], function() {
                    var e;
                    return null === (e = f.default.getGuild(n)) || void 0 === e ? void 0 : e.name
                });
            return r.useMemo(function() {
                var r = y.getGroupedCustomEmoji(),
                    a = d.default.getFlattenedGuildIds(),
                    l = [];
                return ! function(o, i) {
                    var a = !0,
                        u = !1,
                        s = void 0;
                    try {
                        for (var c, d = o[Symbol.iterator](); !(a = (c = d.next()).done); a = !0) {
                            var _ = c.value,
                                E = void 0;
                            if (i === T.EmojiCategoryTypes.GUILD && (E = f.default.getGuild(_)), null != E) {
                                var p = null == r ? void 0 : r[E.id];
                                if (!(null == p || 0 === p.length || null != t && p.every(function(n) {
                                        return m.default.isEmojiFiltered({
                                            emoji: n,
                                            channel: t,
                                            intention: e
                                        })
                                    }))) {
                                    var y = null;
                                    i === T.EmojiCategoryTypes.GUILD && (y = {
                                        type: T.EmojiCategoryTypes.GUILD,
                                        guild: E
                                    }), null != y && (E.id === n ? l.unshift(y) : l.push(y))
                                }
                            }
                        }
                    } catch (e) {
                        u = !0, s = e
                    } finally {
                        try {
                            !a && null != d.return && d.return()
                        } finally {
                            if (u) throw s
                        }
                    }
                }(a, T.EmojiCategoryTypes.GUILD), s.default.categories.reduce(function(t, r) {
                    if (r === T.EmojiCategories.TOP_GUILD_EMOJI) {
                        if (0 === p.length) return t;
                        t.push({
                            type: T.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                            id: r,
                            name: b.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                guildName: I
                            })
                        })
                    } else if (r === T.EmojiCategories.RECENT) {
                        if (0 === i.length) return t;
                        t.push({
                            type: T.EmojiCategoryTypes.RECENT,
                            id: r,
                            name: b.default.Messages.EMOJI_CATEGORY_RECENT
                        })
                    } else if (r === T.EmojiCategories.FAVORITES) {
                        if (0 === u.length) return t;
                        t.push({
                            type: T.EmojiCategoryTypes.FAVORITES,
                            id: r,
                            name: b.default.Messages.CATEGORY_FAVORITE
                        })
                    } else if (r === T.EmojiCategories.CUSTOM) {
                        var a, s = l;
                        !o && (s = l.filter(function(e) {
                            return e.type === T.EmojiCategoryTypes.GUILD && e.guild.id === n
                        })), t.push.apply(t, function(e) {
                            if (Array.isArray(e)) return N(e)
                        }(a = s) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(a) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return N(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t)
                            }
                        }(a) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }())
                    } else if (F(e)) t.push({
                        type: T.EmojiCategoryTypes.UNICODE,
                        id: r,
                        name: r
                    });
                    return t
                }, [])
            }, [y, t, n, e, p.length, I, i.length, u.length, o])
        },
        P = function(e) {
            var t = (null == e ? void 0 : e.getGuildId()) != null;
            E.default.track(S.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                location_page: t ? S.AnalyticsPages.GUILD_CHANNEL : S.AnalyticsPages.DM_CHANNEL,
                location_section: null != e ? S.AnalyticsSections.EMOJI_PICKER_POPOUT : S.AnalyticsSections.CUSTOM_STATUS_MODAL
            })
        },
        D = function(e, t) {
            u.default.trackWithMetadata(S.AnalyticEvents.SEARCH_STARTED, {
                search_type: null != t && t === v.EmojiIntention.REACTION ? S.SearchTypes.EMOJI_REACTION : S.SearchTypes.EMOJI,
                location: e
            })
        },
        L = function(e, t, n, r, o) {
            u.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                search_type: null != o && o === v.EmojiIntention.REACTION ? S.SearchTypes.EMOJI_REACTION : S.SearchTypes.EMOJI,
                total_results: e,
                num_results_locked: t,
                query: r,
                location: n
            })
        },
        M = function(e) {
            var t, n, r, o = e.emoji,
                a = e.emojiSuggestions,
                s = e.searchQuery,
                l = e.isLocked,
                c = e.location,
                f = e.intention,
                d = e.index,
                _ = null !== (r = o.uniqueName) && void 0 !== r ? r : o.name,
                E = (0, i.match)(f).with(v.EmojiIntention.REACTION, function() {
                    return S.SearchTypes.EMOJI_REACTION
                }).with(v.EmojiIntention.AUTO_SUGGESTION, function() {
                    return S.SearchTypes.EMOJI_AUTO_SUGGESTION
                }).otherwise(function() {
                    return S.SearchTypes.EMOJI
                });
            u.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                search_type: E,
                location: c,
                expression_guild_id: o.guildId,
                emoji_id: o.id,
                emoji_name: _,
                is_custom: null != o.id,
                is_animated: o.animated,
                is_locked: l,
                query: s,
                index_num: d,
                load_id: null == a ? void 0 : a.loadId,
                total_results: null == a ? void 0 : null === (t = a.results) || void 0 === t ? void 0 : t.length,
                emoji_suggestion_ids: null == a ? void 0 : null === (n = a.results) || void 0 === n ? void 0 : n.map(function(e) {
                    return e.emoji.id
                }).filter(function(e) {
                    return null != e
                })
            })
        },
        U = function(e, t) {
            u.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                search_type: S.SearchTypes.EMOJI,
                query: t,
                location: e
            })
        },
        w = function(e) {
            var t = e.emoji,
                n = e.subCategory,
                r = e.position,
                o = e.newlyAddedHighlight;
            u.default.trackWithMetadata(S.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
                expression_section: null == n ? void 0 : n.toString(),
                newly_added_highlight: o,
                emoji_id: t.id,
                emoji_name: t.name,
                emoji_animated: t.animated,
                emoji_position: r
            })
        },
        k = function(e) {
            var t, n, r = e.emoji,
                o = e.location,
                i = e.pickerIntention,
                a = e.category,
                s = e.subCategory,
                l = void 0 === s ? T.EmojiSubCategory.NONE : s,
                c = e.position,
                f = e.newlyAddedHighlight,
                d = e.isBurstReaction;
            switch (i) {
                case v.EmojiIntention.REACTION:
                    t = d ? A.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : A.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                    break;
                case v.EmojiIntention.STATUS:
                    t = A.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                    break;
                default:
                    t = A.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
            }
            var _ = null !== (n = r.uniqueName) && void 0 !== n ? n : r.name;
            u.default.trackWithMetadata(S.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                type: t,
                location: o,
                expression_id: r.id,
                expression_name: _,
                expression_guild_id: r.guildId,
                is_custom: null != r.id,
                is_animated: r.animated,
                expression_picker_section: a,
                expression_section: null == l ? void 0 : l.toString(),
                emoji_position: c,
                newly_added_highlight: f,
                is_burst: d
            })
        },
        G = function(e) {
            var t, n = e.emoji,
                r = e.location,
                o = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
            u.default.trackWithMetadata(S.AnalyticEvents.EXPRESSION_FAVORITED, {
                location: r,
                expression_type: g.ExpressionPickerViewType.EMOJI,
                expression_id: n.id,
                expression_name: o,
                expression_guild_id: n.guildId,
                is_custom: null != n.id,
                is_animated: n.animated
            })
        };
    (0, o.throttle)(function(e) {
        var t = e.emojiSuggestions,
            n = e.analyticsLocation;
        u.default.trackWithMetadata(S.AnalyticEvents.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: S.AutoCompleteResultTypes.EMOJI,
            suggestion_quantity: t.results.length,
            custom_quantity: t.results.filter(function(e) {
                return null != e.emoji.id
            }).length,
            load_id: t.loadId,
            location: n
        })
    }, p.default.Millis.HALF_SECOND, {
        leading: !1,
        trailing: !0
    });
    var B = function(e, t) {
            if (e.type === T.EmojiCategoryTypes.GUILD) return null != t ? t.toString() : "";
            return e.id
        },
        j = function(e, t) {
            switch (e) {
                case T.EmojiCategories.TOP_GUILD_EMOJI:
                    return b.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                        guildName: t
                    });
                case T.EmojiCategories.RECENT:
                    return b.default.Messages.EMOJI_CATEGORY_RECENT;
                case T.EmojiCategories.FAVORITES:
                    return b.default.Messages.CATEGORY_FAVORITE;
                case T.EmojiCategories.ACTIVITY:
                    return b.default.Messages.EMOJI_CATEGORY_ACTIVITY;
                case T.EmojiCategories.FLAGS:
                    return b.default.Messages.EMOJI_CATEGORY_FLAGS;
                case T.EmojiCategories.FOOD:
                    return b.default.Messages.EMOJI_CATEGORY_FOOD;
                case T.EmojiCategories.NATURE:
                    return b.default.Messages.EMOJI_CATEGORY_NATURE;
                case T.EmojiCategories.OBJECTS:
                    return b.default.Messages.EMOJI_CATEGORY_OBJECTS;
                case T.EmojiCategories.PEOPLE:
                    return b.default.Messages.EMOJI_CATEGORY_PEOPLE;
                case T.EmojiCategories.SYMBOLS:
                    return b.default.Messages.EMOJI_CATEGORY_SYMBOLS;
                case T.EmojiCategories.TRAVEL:
                    return b.default.Messages.EMOJI_CATEGORY_TRAVEL;
                case T.EmojiCategories.PREMIUM_UPSELL:
                    return b.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
                default:
                    return null != t ? t : e
            }
        },
        F = function(e) {
            return e !== v.EmojiIntention.COMMUNITY_CONTENT_ONLY
        };

    function V(e, t, n) {
        r.useEffect(function() {
            c.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []);
        var o = (0, v.isExternalEmojiAllowedForIntention)(n);
        return (0, a.useStateFromStores)([s.default], function() {
            var r = e.replace(/^:/, "").replace(/:$/, "");
            return "" === r ? null : s.default.searchWithoutFetchingLatest({
                channel: t,
                query: r,
                count: 0,
                intention: n,
                includeExternalGuilds: o
            })
        }, [t, n, e, o], a.statesWillNeverBeEqual)
    }

    function H(e) {
        return r.useEffect(function() {
            c.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, a.useStateFromStoresArray)([s.default], function() {
            return s.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest()
        })
    }

    function x(e) {
        return r.useEffect(function() {
            c.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, a.useStateFromStoresArray)([s.default], function() {
            return s.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest
        })
    }

    function Y(e, t) {
        return r.useEffect(function() {
            c.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, a.useStateFromStores)([s.default], function() {
            return null != t && s.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t)
        })
    }

    function W(e) {
        return r.useEffect(function() {
            c.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, a.useStateFromStoresArray)([s.default], function() {
            return s.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest()
        })
    }

    function K(e) {
        var t = r.useCallback(function() {
            (0, I.default)(e)
        }, [e]);
        return r.useEffect(function() {
            e.intention === v.EmojiIntention.REACTION && t()
        }, []), {
            trackOnPickerOpen: t
        }
    }

    function z(e, t, n) {
        if (null == n) return T.EmojiSubCategory.NONE;
        var r = e.map(function(e) {
                var t, n;
                return null !== (n = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== n ? n : e.name
            }),
            o = t.map(function(e) {
                return e.id
            });
        return r.includes(n) ? T.EmojiSubCategory.TOP_GUILD_EMOJI : o.includes(n) ? T.EmojiSubCategory.NEWLY_ADDED_EMOJI : T.EmojiSubCategory.NONE
    }

    function X(e) {
        var t = new Set;
        return e.filter(function(e) {
            return null == e.uniqueName || (t.has(e.optionallyDiverseSequence) ? void 0 : (t.add(e.optionallyDiverseSequence), !0))
        })
    }

    function q(e, t) {
        return e === v.EmojiIntention.REACTION ? t ? b.default.Messages.SEARCH_FOR_SUPER_REACTION : b.default.Messages.SEARCH_FOR_REACTION : b.default.Messages.SEARCH_FOR_EMOJI
    }
}