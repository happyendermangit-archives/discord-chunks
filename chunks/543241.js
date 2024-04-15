function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        allowUnicodeEmojiForIntention: function() {
            return V
        },
        dedupeUnicodeEmojis: function() {
            return z
        },
        getAriaIdForEmojiCategory: function() {
            return B
        },
        getEmojiSubCategory: function() {
            return K
        },
        getSearchPlaceholder: function() {
            return X
        },
        getStringForEmojiCategory: function() {
            return k
        },
        trackEmojiFavorited: function() {
            return w
        },
        trackEmojiFocus: function() {
            return b
        },
        trackEmojiSearchEmpty: function() {
            return U
        },
        trackEmojiSearchResultsViewed: function() {
            return y
        },
        trackEmojiSearchSelect: function() {
            return P
        },
        trackEmojiSearchStart: function() {
            return M
        },
        trackEmojiSelect: function() {
            return G
        },
        trackPremiumSettingsPaneOpened: function() {
            return v
        },
        useCategoryNitroLockedStates: function() {
            return L
        },
        useEmojiCategories: function() {
            return D
        },
        useEmojiInPriorityOrder: function() {
            return j
        },
        useEmojiSearchResults: function() {
            return F
        },
        useFavoriteEmojis: function() {
            return H
        },
        useFrequentlyUsedEmojis: function() {
            return x
        },
        useIsFavoriteEmoji: function() {
            return Y
        },
        useTrackEmojiPickerOpened: function() {
            return W
        }
    }), n("733860"), n("653041"), n("47120"), n("724458"), n("627341"), n("757143");
    var i = n("470079"),
        r = n("392711"),
        s = n("278074"),
        a = n("442837"),
        o = n("367907"),
        l = n("339085"),
        u = n("558217"),
        d = n("675478"),
        _ = n("430824"),
        c = n("771845"),
        E = n("594174"),
        I = n("626135"),
        T = n("70956"),
        f = n("176354"),
        S = n("111361");
    n("709054");
    var A = n("253696"),
        h = n("304852"),
        m = n("199257"),
        N = n("149203"),
        O = n("981631"),
        p = n("185923"),
        R = n("957825"),
        C = n("474936"),
        g = n("689938");
    let L = function(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null == t ? void 0 : t.getGuildId(),
                s = (0, a.useStateFromStores)([l.default], () => l.default.getDisambiguatedEmojiContext(r), [r]).getGroupedCustomEmoji(),
                o = (0, a.useStateFromStores)([E.default], () => E.default.getCurrentUser()),
                u = (0, S.isPremium)(o);
            return i.useMemo(() => n.map(n => {
                if (u) return !1;
                if (n.type === N.EmojiCategoryTypes.GUILD) {
                    let i = null == s ? void 0 : s[n.guild.id];
                    return null != i && 0 !== i.length && f.default.isEmojiCategoryNitroLocked({
                        categoryEmojis: i,
                        channel: t,
                        intention: e
                    })
                }
                if (n.type === N.EmojiCategoryTypes.PREMIUM_UPSELL) return !0;
                return !1
            }), [n, t, s, e, u])
        },
        D = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
            (0, u.maybeFetchTopEmojisByGuild)(n);
            let r = (0, p.isExternalEmojiAllowedForIntention)(e),
                s = x(n),
                o = H(n),
                {
                    topEmojis: d,
                    newlyAddedEmojis: E
                } = (0, m.default)(n, e),
                {
                    allEmojis: I
                } = (0, h.default)({
                    topEmojis: d,
                    newlyAddedEmojis: E
                }),
                T = (0, a.useStateFromStores)([l.default], () => l.default.getDisambiguatedEmojiContext(n), [n]),
                S = (0, a.useStateFromStores)([_.default], () => {
                    var e;
                    return null === (e = _.default.getGuild(n)) || void 0 === e ? void 0 : e.name
                });
            return i.useMemo(() => {
                let i = T.getGroupedCustomEmoji(),
                    a = c.default.getFlattenedGuildIds(),
                    u = [];
                return ((r, s) => {
                    for (let a of r) {
                        let r;
                        if (s === N.EmojiCategoryTypes.GUILD && (r = _.default.getGuild(a)), null == r) continue;
                        let o = null == i ? void 0 : i[r.id];
                        if (null == o || 0 === o.length || null != t && o.every(n => f.default.isEmojiFiltered({
                                emoji: n,
                                channel: t,
                                intention: e
                            }))) continue;
                        let l = null;
                        s === N.EmojiCategoryTypes.GUILD && (l = {
                            type: N.EmojiCategoryTypes.GUILD,
                            guild: r
                        }), null != l && (r.id === n ? u.unshift(l) : u.push(l))
                    }
                })(a, N.EmojiCategoryTypes.GUILD), l.default.categories.reduce((t, i) => {
                    if (i === N.EmojiCategories.TOP_GUILD_EMOJI) {
                        if (0 === I.length) return t;
                        t.push({
                            type: N.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                            id: i,
                            name: g.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                guildName: S
                            })
                        })
                    } else if (i === N.EmojiCategories.RECENT) {
                        if (0 === s.length) return t;
                        t.push({
                            type: N.EmojiCategoryTypes.RECENT,
                            id: i,
                            name: g.default.Messages.EMOJI_CATEGORY_RECENT
                        })
                    } else if (i === N.EmojiCategories.FAVORITES) {
                        if (0 === o.length) return t;
                        t.push({
                            type: N.EmojiCategoryTypes.FAVORITES,
                            id: i,
                            name: g.default.Messages.CATEGORY_FAVORITE
                        })
                    } else if (i === N.EmojiCategories.CUSTOM) {
                        let e = u;
                        !r && (e = u.filter(e => e.type === N.EmojiCategoryTypes.GUILD && e.guild.id === n)), t.push(...e)
                    } else if (V(e)) t.push({
                        type: N.EmojiCategoryTypes.UNICODE,
                        id: i,
                        name: i
                    });
                    return t
                }, [])
            }, [T, t, n, e, I.length, S, s.length, o.length, r])
        },
        v = e => {
            let t = (null == e ? void 0 : e.getGuildId()) != null;
            I.default.track(O.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                location_page: t ? O.AnalyticsPages.GUILD_CHANNEL : O.AnalyticsPages.DM_CHANNEL,
                location_section: null != e ? O.AnalyticsSections.EMOJI_PICKER_POPOUT : O.AnalyticsSections.CUSTOM_STATUS_MODAL
            })
        },
        M = (e, t) => {
            o.default.trackWithMetadata(O.AnalyticEvents.SEARCH_STARTED, {
                search_type: null != t && t === p.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
                location: e
            })
        },
        y = (e, t, n, i, r) => {
            o.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                search_type: null != r && r === p.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
                total_results: e,
                num_results_locked: t,
                query: i,
                location: n
            })
        },
        P = e => {
            var t, n, i;
            let {
                emoji: r,
                emojiSuggestions: a,
                searchQuery: l,
                isLocked: u,
                location: d,
                intention: _,
                index: c
            } = e, E = null !== (i = r.uniqueName) && void 0 !== i ? i : r.name, I = (0, s.match)(_).with(p.EmojiIntention.REACTION, () => O.SearchTypes.EMOJI_REACTION).with(p.EmojiIntention.AUTO_SUGGESTION, () => O.SearchTypes.EMOJI_AUTO_SUGGESTION).otherwise(() => O.SearchTypes.EMOJI);
            o.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                search_type: I,
                location: d,
                expression_guild_id: r.guildId,
                emoji_id: r.id,
                emoji_name: E,
                is_custom: null != r.id,
                is_animated: r.animated,
                is_locked: u,
                query: l,
                index_num: c,
                load_id: null == a ? void 0 : a.loadId,
                total_results: null == a ? void 0 : null === (t = a.results) || void 0 === t ? void 0 : t.length,
                emoji_suggestion_ids: null == a ? void 0 : null === (n = a.results) || void 0 === n ? void 0 : n.map(e => {
                    let {
                        emoji: t
                    } = e;
                    return t.id
                }).filter(e => null != e)
            })
        },
        U = (e, t) => {
            o.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                search_type: O.SearchTypes.EMOJI,
                query: t,
                location: e
            })
        },
        b = e => {
            let {
                emoji: t,
                subCategory: n,
                position: i,
                newlyAddedHighlight: r
            } = e;
            o.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
                expression_section: null == n ? void 0 : n.toString(),
                newly_added_highlight: r,
                emoji_id: t.id,
                emoji_name: t.name,
                emoji_animated: t.animated,
                emoji_position: i
            })
        },
        G = e => {
            var t;
            let n, {
                emoji: i,
                location: r,
                pickerIntention: s,
                category: a,
                subCategory: l = N.EmojiSubCategory.NONE,
                position: u,
                newlyAddedHighlight: d,
                isBurstReaction: _
            } = e;
            switch (s) {
                case p.EmojiIntention.REACTION:
                    n = _ ? C.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : C.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                    break;
                case p.EmojiIntention.STATUS:
                    n = C.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                    break;
                default:
                    n = C.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
            }
            let c = null !== (t = i.uniqueName) && void 0 !== t ? t : i.name;
            o.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                type: n,
                location: r,
                expression_id: i.id,
                expression_name: c,
                expression_guild_id: i.guildId,
                is_custom: null != i.id,
                is_animated: i.animated,
                expression_picker_section: a,
                expression_section: null == l ? void 0 : l.toString(),
                emoji_position: u,
                newly_added_highlight: d,
                is_burst: _
            })
        },
        w = e => {
            var t;
            let {
                emoji: n,
                location: i
            } = e, r = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
            o.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_FAVORITED, {
                location: i,
                expression_type: R.ExpressionPickerViewType.EMOJI,
                expression_id: n.id,
                expression_name: r,
                expression_guild_id: n.guildId,
                is_custom: null != n.id,
                is_animated: n.animated
            })
        };
    (0, r.throttle)(e => {
        let {
            emojiSuggestions: t,
            analyticsLocation: n
        } = e;
        o.default.trackWithMetadata(O.AnalyticEvents.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: O.AutoCompleteResultTypes.EMOJI,
            suggestion_quantity: t.results.length,
            custom_quantity: t.results.filter(e => {
                let {
                    emoji: t
                } = e;
                return null != t.id
            }).length,
            load_id: t.loadId,
            location: n
        })
    }, T.default.Millis.HALF_SECOND, {
        leading: !1,
        trailing: !0
    });
    let B = (e, t) => {
            if (e.type === N.EmojiCategoryTypes.GUILD) return null != t ? t.toString() : "";
            return e.id
        },
        k = (e, t) => {
            switch (e) {
                case N.EmojiCategories.TOP_GUILD_EMOJI:
                    return g.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                        guildName: t
                    });
                case N.EmojiCategories.RECENT:
                    return g.default.Messages.EMOJI_CATEGORY_RECENT;
                case N.EmojiCategories.FAVORITES:
                    return g.default.Messages.CATEGORY_FAVORITE;
                case N.EmojiCategories.ACTIVITY:
                    return g.default.Messages.EMOJI_CATEGORY_ACTIVITY;
                case N.EmojiCategories.FLAGS:
                    return g.default.Messages.EMOJI_CATEGORY_FLAGS;
                case N.EmojiCategories.FOOD:
                    return g.default.Messages.EMOJI_CATEGORY_FOOD;
                case N.EmojiCategories.NATURE:
                    return g.default.Messages.EMOJI_CATEGORY_NATURE;
                case N.EmojiCategories.OBJECTS:
                    return g.default.Messages.EMOJI_CATEGORY_OBJECTS;
                case N.EmojiCategories.PEOPLE:
                    return g.default.Messages.EMOJI_CATEGORY_PEOPLE;
                case N.EmojiCategories.SYMBOLS:
                    return g.default.Messages.EMOJI_CATEGORY_SYMBOLS;
                case N.EmojiCategories.TRAVEL:
                    return g.default.Messages.EMOJI_CATEGORY_TRAVEL;
                case N.EmojiCategories.PREMIUM_UPSELL:
                    return g.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
                default:
                    return null != t ? t : e
            }
        },
        V = e => e !== p.EmojiIntention.COMMUNITY_CONTENT_ONLY;

    function F(e, t, n) {
        i.useEffect(() => {
            d.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []);
        let r = (0, p.isExternalEmojiAllowedForIntention)(n);
        return (0, a.useStateFromStores)([l.default], () => {
            let i = e.replace(/^:/, "").replace(/:$/, "");
            return "" === i ? null : l.default.searchWithoutFetchingLatest({
                channel: t,
                query: i,
                count: 0,
                intention: n,
                includeExternalGuilds: r
            })
        }, [t, n, e, r], a.statesWillNeverBeEqual)
    }

    function x(e) {
        return i.useEffect(() => {
            d.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, a.useStateFromStoresArray)([l.default], () => l.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    }

    function H(e) {
        return i.useEffect(() => {
            d.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, a.useStateFromStoresArray)([l.default], () => l.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    }

    function Y(e, t) {
        return i.useEffect(() => {
            d.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, a.useStateFromStores)([l.default], () => null != t && l.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
    }

    function j(e) {
        return i.useEffect(() => {
            d.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, a.useStateFromStoresArray)([l.default], () => l.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    }

    function W(e) {
        let t = i.useCallback(() => {
            (0, A.default)(e)
        }, [e]);
        return i.useEffect(() => {
            e.intention === p.EmojiIntention.REACTION && t()
        }, []), {
            trackOnPickerOpen: t
        }
    }

    function K(e, t, n) {
        if (null == n) return N.EmojiSubCategory.NONE;
        let i = e.map(e => {
                var t, n;
                return null !== (n = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== n ? n : e.name
            }),
            r = t.map(e => e.id);
        return i.includes(n) ? N.EmojiSubCategory.TOP_GUILD_EMOJI : r.includes(n) ? N.EmojiSubCategory.NEWLY_ADDED_EMOJI : N.EmojiSubCategory.NONE
    }

    function z(e) {
        let t = new Set;
        return e.filter(e => null == e.uniqueName || (t.has(e.optionallyDiverseSequence) ? void 0 : (t.add(e.optionallyDiverseSequence), !0)))
    }

    function X(e, t) {
        return e === p.EmojiIntention.REACTION ? t ? g.default.Messages.SEARCH_FOR_SUPER_REACTION : g.default.Messages.SEARCH_FOR_REACTION : g.default.Messages.SEARCH_FOR_EMOJI
    }
}