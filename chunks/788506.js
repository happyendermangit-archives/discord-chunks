function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        useCategoryNitroLockedStates: function() {
            return M
        },
        useEmojiCategories: function() {
            return R
        },
        trackPremiumSettingsPaneOpened: function() {
            return N
        },
        trackEmojiSearchStart: function() {
            return v
        },
        trackEmojiSearchResultsViewed: function() {
            return F
        },
        trackEmojiSearchSelect: function() {
            return D
        },
        trackEmojiSearchEmpty: function() {
            return P
        },
        trackEmojiFocus: function() {
            return U
        },
        trackEmojiSelect: function() {
            return L
        },
        trackEmojiFavorited: function() {
            return G
        },
        getAriaIdForEmojiCategory: function() {
            return J
        },
        getStringForEmojiCategory: function() {
            return k
        },
        allowUnicodeEmojiForIntention: function() {
            return x
        },
        useEmojiSearchResults: function() {
            return b
        },
        useFrequentlyUsedEmojis: function() {
            return w
        },
        useFavoriteEmojis: function() {
            return Y
        },
        useIsFavoriteEmoji: function() {
            return W
        },
        useEmojiInPriorityOrder: function() {
            return q
        },
        useTrackEmojiPickerOpened: function() {
            return H
        },
        getEmojiSubCategory: function() {
            return K
        },
        dedupeUnicodeEmojis: function() {
            return V
        },
        getSearchPlaceholder: function() {
            return B
        }
    }), i("843762"), i("424973"), i("222007"), i("808653"), i("794252"), i("781738");
    var n = i("884691"),
        r = i("917351"),
        o = i("506838"),
        u = i("446674"),
        a = i("716241"),
        s = i("385976"),
        l = i("630400"),
        E = i("872173"),
        d = i("305961"),
        c = i("677099"),
        m = i("697218"),
        _ = i("599110"),
        f = i("718517"),
        g = i("402671"),
        I = i("764364");
    i("299039");
    var O = i("577426"),
        C = i("255214"),
        p = i("352046"),
        y = i("115279"),
        S = i("49111"),
        T = i("958706"),
        j = i("13030"),
        h = i("646718"),
        A = i("782340");
    let M = function(e, t, i) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null == t ? void 0 : t.getGuildId(),
                o = (0, u.useStateFromStores)([s.default], () => s.default.getDisambiguatedEmojiContext(r), [r]),
                a = o.getGroupedCustomEmoji(),
                l = (0, u.useStateFromStores)([m.default], () => m.default.getCurrentUser()),
                E = (0, I.isPremium)(l),
                d = n.useMemo(() => i.map(i => {
                    if (E) return !1;
                    if (i.type === y.EmojiCategoryTypes.GUILD) {
                        let n = null == a ? void 0 : a[i.guild.id];
                        return null != n && 0 !== n.length && g.default.isEmojiCategoryNitroLocked({
                            categoryEmojis: n,
                            channel: t,
                            intention: e
                        })
                    }
                    if (i.type === y.EmojiCategoryTypes.PREMIUM_UPSELL) return !0;
                    return !1
                }), [i, t, a, e, E]);
            return d
        },
        R = function(e, t) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
            (0, l.maybeFetchTopEmojisByGuild)(i);
            let r = (0, T.isExternalEmojiAllowedForIntention)(e),
                o = w(i),
                a = Y(i),
                {
                    topEmojis: E,
                    newlyAddedEmojis: m
                } = (0, p.default)(i, e),
                {
                    allEmojis: _
                } = (0, C.default)({
                    topEmojis: E,
                    newlyAddedEmojis: m
                }),
                f = (0, u.useStateFromStores)([s.default], () => s.default.getDisambiguatedEmojiContext(i), [i]),
                I = (0, u.useStateFromStores)([d.default], () => {
                    var e;
                    return null === (e = d.default.getGuild(i)) || void 0 === e ? void 0 : e.name
                }),
                O = n.useMemo(() => {
                    let n = f.getGroupedCustomEmoji(),
                        u = c.default.getFlattenedGuildIds(),
                        l = [];
                    return ((r, o) => {
                        for (let u of r) {
                            let r;
                            if (o === y.EmojiCategoryTypes.GUILD && (r = d.default.getGuild(u)), null == r) continue;
                            let a = null == n ? void 0 : n[r.id];
                            if (null == a || 0 === a.length || null != t && a.every(i => g.default.isEmojiFiltered({
                                    emoji: i,
                                    channel: t,
                                    intention: e
                                }))) continue;
                            let s = null;
                            o === y.EmojiCategoryTypes.GUILD && (s = {
                                type: y.EmojiCategoryTypes.GUILD,
                                guild: r
                            }), null != s && (r.id === i ? l.unshift(s) : l.push(s))
                        }
                    })(u, y.EmojiCategoryTypes.GUILD), s.default.categories.reduce((t, n) => {
                        if (n === y.EmojiCategories.TOP_GUILD_EMOJI) {
                            if (0 === _.length) return t;
                            t.push({
                                type: y.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                id: n,
                                name: A.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                    guildName: I
                                })
                            })
                        } else if (n === y.EmojiCategories.RECENT) {
                            if (0 === o.length) return t;
                            t.push({
                                type: y.EmojiCategoryTypes.RECENT,
                                id: n,
                                name: A.default.Messages.EMOJI_CATEGORY_RECENT
                            })
                        } else if (n === y.EmojiCategories.FAVORITES) {
                            if (0 === a.length) return t;
                            t.push({
                                type: y.EmojiCategoryTypes.FAVORITES,
                                id: n,
                                name: A.default.Messages.CATEGORY_FAVORITE
                            })
                        } else if (n === y.EmojiCategories.CUSTOM) {
                            let e = l;
                            !r && (e = l.filter(e => e.type === y.EmojiCategoryTypes.GUILD && e.guild.id === i)), t.push(...e)
                        } else if (x(e)) t.push({
                            type: y.EmojiCategoryTypes.UNICODE,
                            id: n,
                            name: n
                        });
                        return t
                    }, [])
                }, [f, t, i, e, _.length, I, o.length, a.length, r]);
            return O
        },
        N = e => {
            let t = (null == e ? void 0 : e.getGuildId()) != null;
            _.default.track(S.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                location_page: t ? S.AnalyticsPages.GUILD_CHANNEL : S.AnalyticsPages.DM_CHANNEL,
                location_section: null != e ? S.AnalyticsSections.EMOJI_PICKER_POPOUT : S.AnalyticsSections.CUSTOM_STATUS_MODAL
            })
        },
        v = (e, t) => {
            a.default.trackWithMetadata(S.AnalyticEvents.SEARCH_STARTED, {
                search_type: null != t && t === T.EmojiIntention.REACTION ? S.SearchTypes.EMOJI_REACTION : S.SearchTypes.EMOJI,
                location: e
            })
        },
        F = (e, t, i, n, r) => {
            a.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                search_type: null != r && r === T.EmojiIntention.REACTION ? S.SearchTypes.EMOJI_REACTION : S.SearchTypes.EMOJI,
                total_results: e,
                num_results_locked: t,
                query: n,
                location: i
            })
        },
        D = e => {
            var t, i, n;
            let {
                emoji: r,
                emojiSuggestions: u,
                searchQuery: s,
                isLocked: l,
                location: E,
                intention: d,
                index: c
            } = e, m = null !== (n = r.uniqueName) && void 0 !== n ? n : r.name, _ = (0, o.match)(d).with(T.EmojiIntention.REACTION, () => S.SearchTypes.EMOJI_REACTION).with(T.EmojiIntention.AUTO_SUGGESTION, () => S.SearchTypes.EMOJI_AUTO_SUGGESTION).otherwise(() => S.SearchTypes.EMOJI);
            a.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                search_type: _,
                location: E,
                expression_guild_id: r.guildId,
                emoji_id: r.id,
                emoji_name: m,
                is_custom: null != r.id,
                is_animated: r.animated,
                is_locked: l,
                query: s,
                index_num: c,
                load_id: null == u ? void 0 : u.loadId,
                total_results: null == u ? void 0 : null === (t = u.results) || void 0 === t ? void 0 : t.length,
                emoji_suggestion_ids: null == u ? void 0 : null === (i = u.results) || void 0 === i ? void 0 : i.map(e => {
                    let {
                        emoji: t
                    } = e;
                    return t.id
                }).filter(e => null != e)
            })
        },
        P = (e, t) => {
            a.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                search_type: S.SearchTypes.EMOJI,
                query: t,
                location: e
            })
        },
        U = e => {
            let {
                emoji: t,
                subCategory: i,
                position: n,
                newlyAddedHighlight: r
            } = e;
            a.default.trackWithMetadata(S.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
                expression_section: null == i ? void 0 : i.toString(),
                newly_added_highlight: r,
                emoji_id: t.id,
                emoji_name: t.name,
                emoji_animated: t.animated,
                emoji_position: n
            })
        },
        L = e => {
            var t;
            let i, {
                emoji: n,
                location: r,
                pickerIntention: o,
                category: u,
                subCategory: s = y.EmojiSubCategory.NONE,
                position: l,
                newlyAddedHighlight: E,
                isBurstReaction: d
            } = e;
            switch (o) {
                case T.EmojiIntention.REACTION:
                    i = d ? h.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : h.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                    break;
                case T.EmojiIntention.STATUS:
                    i = h.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                    break;
                default:
                    i = h.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
            }
            let c = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
            a.default.trackWithMetadata(S.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                type: i,
                location: r,
                expression_id: n.id,
                expression_name: c,
                expression_guild_id: n.guildId,
                is_custom: null != n.id,
                is_animated: n.animated,
                expression_picker_section: u,
                expression_section: null == s ? void 0 : s.toString(),
                emoji_position: l,
                newly_added_highlight: E,
                is_burst: d
            })
        },
        G = e => {
            var t;
            let {
                emoji: i,
                location: n
            } = e, r = null !== (t = i.uniqueName) && void 0 !== t ? t : i.name;
            a.default.trackWithMetadata(S.AnalyticEvents.EXPRESSION_FAVORITED, {
                location: n,
                expression_type: j.ExpressionPickerViewType.EMOJI,
                expression_id: i.id,
                expression_name: r,
                expression_guild_id: i.guildId,
                is_custom: null != i.id,
                is_animated: i.animated
            })
        };
    (0, r.throttle)(e => {
        let {
            emojiSuggestions: t,
            analyticsLocation: i
        } = e;
        a.default.trackWithMetadata(S.AnalyticEvents.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: S.AutoCompleteResultTypes.EMOJI,
            suggestion_quantity: t.results.length,
            custom_quantity: t.results.filter(e => {
                let {
                    emoji: t
                } = e;
                return null != t.id
            }).length,
            load_id: t.loadId,
            location: i
        })
    }, f.default.Millis.HALF_SECOND, {
        leading: !1,
        trailing: !0
    });
    let J = (e, t) => {
            if (e.type === y.EmojiCategoryTypes.GUILD) return null != t ? t.toString() : "";
            return e.id
        },
        k = (e, t) => {
            switch (e) {
                case y.EmojiCategories.TOP_GUILD_EMOJI:
                    return A.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                        guildName: t
                    });
                case y.EmojiCategories.RECENT:
                    return A.default.Messages.EMOJI_CATEGORY_RECENT;
                case y.EmojiCategories.FAVORITES:
                    return A.default.Messages.CATEGORY_FAVORITE;
                case y.EmojiCategories.ACTIVITY:
                    return A.default.Messages.EMOJI_CATEGORY_ACTIVITY;
                case y.EmojiCategories.FLAGS:
                    return A.default.Messages.EMOJI_CATEGORY_FLAGS;
                case y.EmojiCategories.FOOD:
                    return A.default.Messages.EMOJI_CATEGORY_FOOD;
                case y.EmojiCategories.NATURE:
                    return A.default.Messages.EMOJI_CATEGORY_NATURE;
                case y.EmojiCategories.OBJECTS:
                    return A.default.Messages.EMOJI_CATEGORY_OBJECTS;
                case y.EmojiCategories.PEOPLE:
                    return A.default.Messages.EMOJI_CATEGORY_PEOPLE;
                case y.EmojiCategories.SYMBOLS:
                    return A.default.Messages.EMOJI_CATEGORY_SYMBOLS;
                case y.EmojiCategories.TRAVEL:
                    return A.default.Messages.EMOJI_CATEGORY_TRAVEL;
                case y.EmojiCategories.PREMIUM_UPSELL:
                    return A.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
                default:
                    return null != t ? t : e
            }
        },
        x = e => e !== T.EmojiIntention.COMMUNITY_CONTENT_ONLY;

    function b(e, t, i) {
        n.useEffect(() => {
            E.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []);
        let r = (0, T.isExternalEmojiAllowedForIntention)(i);
        return (0, u.useStateFromStores)([s.default], () => {
            let n = e.replace(/^:/, "").replace(/:$/, "");
            return "" === n ? null : s.default.searchWithoutFetchingLatest({
                channel: t,
                query: n,
                count: 0,
                intention: i,
                includeExternalGuilds: r
            })
        }, [t, i, e, r], u.statesWillNeverBeEqual)
    }

    function w(e) {
        return n.useEffect(() => {
            E.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, u.useStateFromStoresArray)([s.default], () => s.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    }

    function Y(e) {
        return n.useEffect(() => {
            E.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, u.useStateFromStoresArray)([s.default], () => s.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    }

    function W(e, t) {
        return n.useEffect(() => {
            E.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, u.useStateFromStores)([s.default], () => null != t && s.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
    }

    function q(e) {
        return n.useEffect(() => {
            E.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, u.useStateFromStoresArray)([s.default], () => s.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    }

    function H(e) {
        let t = n.useCallback(() => {
            (0, O.default)(e)
        }, [e]);
        return n.useEffect(() => {
            e.intention === T.EmojiIntention.REACTION && t()
        }, []), {
            trackOnPickerOpen: t
        }
    }

    function K(e, t, i) {
        if (null == i) return y.EmojiSubCategory.NONE;
        let n = e.map(e => {
                var t, i;
                return null !== (i = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== i ? i : e.name
            }),
            r = t.map(e => e.id);
        return n.includes(i) ? y.EmojiSubCategory.TOP_GUILD_EMOJI : r.includes(i) ? y.EmojiSubCategory.NEWLY_ADDED_EMOJI : y.EmojiSubCategory.NONE
    }

    function V(e) {
        let t = new Set,
            i = e.filter(e => null == e.uniqueName || (t.has(e.optionallyDiverseSequence) ? void 0 : (t.add(e.optionallyDiverseSequence), !0)));
        return i
    }

    function B(e, t) {
        return e === T.EmojiIntention.REACTION ? t ? A.default.Messages.SEARCH_FOR_SUPER_REACTION : A.default.Messages.SEARCH_FOR_REACTION : A.default.Messages.SEARCH_FOR_EMOJI
    }
}