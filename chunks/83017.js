function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiGridItemTypes: function() {
            return l
        },
        useEmojiGrid: function() {
            return U
        },
        EmojiUpsellType: function() {
            return a
        },
        useEmojiSelectHandler: function() {
            return D
        },
        useCategorySelectHandler: function() {
            return k
        }
    }), n("222007"), n("424973");
    var l, i, a, s, r, o, u = n("884691"),
        d = n("917351"),
        c = n.n(d),
        f = n("748820"),
        m = n("446674"),
        p = n("150021"),
        h = n("385976"),
        E = n("858619"),
        g = n("867805"),
        C = n("986632"),
        S = n("538282"),
        T = n("817963"),
        v = n("923959"),
        I = n("305961"),
        _ = n("162771"),
        N = n("677099"),
        A = n("697218"),
        x = n("402671"),
        y = n("764364"),
        O = n("248474"),
        R = n("788506"),
        M = n("255214"),
        L = n("352046"),
        P = n("115279"),
        b = n("958706"),
        j = n("782340");
    (s = l || (l = {}))[s.EMOJI = 0] = "EMOJI", s[s.CREATE_EMOJI = 1] = "CREATE_EMOJI", (r = i || (i = {}))[r.SECTION_HEADING = 0] = "SECTION_HEADING", r[r.SECTION_ROW = 1] = "SECTION_ROW";
    let U = e => {
        let {
            channel: t,
            collapsedSections: n,
            includeCreateEmojiButton: l = !0,
            pickerIntention: i,
            emojiSearchResults: a,
            gridWidth: s,
            emojiPaddingHorizontal: r,
            emojiSpriteSize: o
        } = e, d = (0, m.useStateFromStores)([h.default], () => h.default.categories), p = (0, m.useStateFromStores)([I.default], () => I.default.getGuild(null == t ? void 0 : t.getGuildId()), [t]), C = null == t ? null : t.getGuildId(), S = (0, m.useStateFromStores)([h.default], () => h.default.getDisambiguatedEmojiContext(C), [C]), U = (0, R.useFavoriteEmojis)(C), D = (0, R.useFrequentlyUsedEmojis)(C), {
            topEmojis: k,
            newlyAddedEmojis: w
        } = (0, L.default)(C, i), F = (0, m.useStateFromStoresArray)([N.default], () => N.default.getFlattenedGuildIds(), []), {
            canCreateExpressions: G
        } = (0, T.useManageResourcePermissions)(p), B = (0, m.useStateFromStores)([A.default], () => A.default.getCurrentUser()), H = (0, y.isPremium)(B), V = S.getCustomEmoji(), K = e => {
            if (e.type === E.EmojiTypes.GUILD) return e.guildId
        }, W = u.useMemo(() => c.groupBy(V, K), [V]), {
            enabled: Y,
            treatment: z
        } = O.default.useExperiment({
            location: "EmojiPicker"
        }, {
            autoTrackExposure: !0,
            disable: !G
        });
        return u.useMemo(() => {
            let e = [],
                u = [],
                m = [],
                h = [],
                E = 0,
                C = 0;
            if (null != S && null != s) {
                let S = Math.floor(s / (o + 2 * r)),
                    T = (a, s) => {
                        let r = new Map,
                            d = n.has(s.sectionId),
                            [f, p] = c.partition(a, e => {
                                let n = x.default.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: i
                                });
                                return r.set(e, n), !n
                            }),
                            g = f.concat(p),
                            T = s.guild,
                            v = _.default.getGuildId(),
                            I = s.sectionId === P.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                            N = !I && null != T && v === T.id && g.length < T.getMaxEmojiSlots(),
                            A = I && g.length < S && !Y,
                            y = null != T && I && Y && z === O.EmojiPickerUploadTreatment.WITH_TOP_LIST && W[T.id].length < T.getMaxEmojiSlots(),
                            M = l && G && null != T && (N || A || y);
                        M && y && g.length === S && g.shift();
                        let L = Y && M && !d,
                            b = M ? g.length + 1 : g.length,
                            U = Math.ceil(b / S),
                            D = [];
                        for (let e = 0; e < U; e++) {
                            let t = 0 === e,
                                n = e * S - (L && e > 0 ? 1 : 0),
                                l = n + S - (L && t ? 1 : 0),
                                i = g.slice(n, l).map((e, n) => {
                                    var l, i;
                                    return {
                                        type: 0,
                                        emoji: e,
                                        size: o,
                                        isDisabled: r.get(e),
                                        rowIndex: C,
                                        columnIndex: L && t ? n + 1 : n,
                                        visibleRowIndex: E,
                                        category: s.type,
                                        subCategory: s.sectionId === P.EmojiCategoryTypes.TOP_GUILD_EMOJI ? (0, R.getEmojiSubCategory)(k, w, null !== (i = null !== (l = e.id) && void 0 !== l ? l : e.uniqueName) && void 0 !== i ? i : e.name) : P.EmojiSubCategory.NONE
                                    }
                                });
                            if (L && t && !d && (i = [{
                                    type: 1,
                                    guildId: T.id,
                                    name: j.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                    size: o,
                                    rowIndex: C,
                                    columnIndex: 0,
                                    visibleRowIndex: E
                                }, ...i]), D.push(i), !d) {
                                if (!Y && M && e === U - 1) {
                                    let t = D[e];
                                    t.push({
                                        type: 1,
                                        guildId: T.id,
                                        name: j.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                        size: o,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: E
                                    })
                                }
                                h.push(i.length), m.push(i), E++
                            }
                            C++
                        }
                        let F = {
                            ...s,
                            count: a.length
                        };
                        u.push(F), e.push(d ? 0 : U)
                    };
                if (null != a) 0 !== a.unlocked.length && T(a.unlocked, {
                    type: P.EmojiCategoryTypes.SEARCH_RESULTS,
                    sectionId: P.EmojiCategoryTypes.SEARCH_RESULTS,
                    count: a.unlocked.length,
                    isNitroLocked: !1
                }), 0 !== a.locked.length && T(a.locked, {
                    type: P.EmojiCategoryTypes.PREMIUM_UPSELL,
                    categoryId: P.EmojiCategories.PREMIUM_UPSELL,
                    sectionId: P.EmojiCategoryTypes.PREMIUM_UPSELL,
                    count: a.locked.length,
                    isNitroLocked: !H
                });
                else
                    for (let e of d)
                        if (e === P.EmojiCategories.CUSTOM) {
                            let n = n => {
                                let l = W[n];
                                if (null == l) return;
                                let a = l.filter(e => x.default.getEmojiUnavailableReason({
                                    emoji: e,
                                    channel: null != t ? t : v.default.getDefaultChannel(n),
                                    intention: i
                                }) !== b.EmojiDisabledReasons.DISALLOW_EXTERNAL);
                                if (0 === a.length) return;
                                let s = I.default.getGuild(n),
                                    r = !H && x.default.isEmojiCategoryNitroLocked({
                                        categoryEmojis: a,
                                        channel: t,
                                        intention: i
                                    });
                                T(a, {
                                    categoryId: e,
                                    guild: s,
                                    type: P.EmojiCategoryTypes.GUILD,
                                    sectionId: null != s ? s.id : (0, f.v4)(),
                                    count: a.length,
                                    isNitroLocked: r
                                })
                            };
                            if (null != p && n(p.id), (0, b.isExternalEmojiAllowedForIntention)(i))
                                for (let e of F)(null == p || p.id !== e) && n(e)
                        } else if (e === P.EmojiCategories.TOP_GUILD_EMOJI) {
                    if (null != p) {
                        let {
                            allEmojis: t
                        } = (0, M.getEmojiHotrail)({
                            topEmojis: k,
                            newlyAddedEmojis: w
                        });
                        if (t.length > 0) {
                            let n = I.default.getGuild(p.id);
                            T(t, {
                                categoryId: e,
                                guild: n,
                                type: P.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                sectionId: P.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                count: t.length,
                                isNitroLocked: !1
                            })
                        }
                    }
                } else if (e === P.EmojiCategories.RECENT) {
                    let n = (0, R.dedupeUnicodeEmojis)(D).filter(e => !x.default.isEmojiFiltered({
                        emoji: e,
                        channel: t,
                        intention: i
                    }));
                    T(n, {
                        categoryId: e,
                        type: P.EmojiCategoryTypes.RECENT,
                        sectionId: P.EmojiCategoryTypes.RECENT,
                        count: n.length,
                        isNitroLocked: !1
                    })
                } else if (e === P.EmojiCategories.FAVORITES) {
                    let n = (0, R.dedupeUnicodeEmojis)(U).filter(e => !x.default.isEmojiFiltered({
                        emoji: e,
                        channel: t,
                        intention: i
                    }));
                    0 !== n.length && T(n, {
                        categoryId: e,
                        type: P.EmojiCategoryTypes.FAVORITES,
                        sectionId: P.EmojiCategoryTypes.FAVORITES,
                        count: n.length,
                        isNitroLocked: !1
                    })
                } else if ((0, R.allowUnicodeEmojiForIntention)(i)) {
                    let t = g.default.getByCategory(e);
                    null != t && T(t, {
                        categoryId: e,
                        type: P.EmojiCategoryTypes.UNICODE,
                        sectionId: e,
                        count: t.length,
                        isNitroLocked: !1
                    })
                }
            }
            return {
                columnCounts: h,
                emojiGrid: m,
                rowCountBySection: e,
                sectionDescriptors: u
            }
        }, [S, s, o, r, a, n, t, i, d, p, W, F, w, k, D, U, G, l, H, Y, z])
    };
    (o = a || (a = {}))[o.PREMIUM = 0] = "PREMIUM", o[o.ROLE_SUBSCRIPTION = 1] = "ROLE_SUBSCRIPTION";
    let D = e => {
            let {
                pickerIntention: t,
                selectedChannel: n,
                onSelectEmoji: l,
                setUpsellConfigs: i,
                emojiSelectAnalytics: a,
                trackEmojiFavorited: s
            } = e, r = (0, m.useStateFromStores)([h.default], () => h.default.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
            return u.useCallback((e, o) => {
                switch (e.type) {
                    case 1:
                        l(void 0, o.isFinalSelection, o.isBurst);
                        return;
                    case 0: {
                        let {
                            emoji: u
                        } = e;
                        if (null == u) return;
                        let d = x.default.getEmojiUnavailableReason({
                            emoji: u,
                            channel: n,
                            intention: t
                        });
                        if (o.toggleFavorite) {
                            r.isFavoriteEmojiWithoutFetchingLatest(u) || null != d ? (0, p.unfavoriteEmoji)(u) : (null == s || s(e), (0, p.favoriteEmoji)(u));
                            return
                        }
                        if (d === b.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (d === b.EmojiDisabledReasons.PREMIUM_LOCKED) {
                            i({
                                type: 0,
                                emojiDescriptor: e
                            });
                            return
                        }
                        if (d === b.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && u.type === E.EmojiTypes.GUILD) {
                            i({
                                type: 1,
                                guildId: u.guildId,
                                emojiId: u.id
                            });
                            return
                        }
                        if (d === b.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == a || a(e), l(u, o.isFinalSelection, o.isBurst)
                    }
                }
            }, [n, t, l, i, r, a, s])
        },
        k = e => {
            let {
                emojiListRef: t
            } = e, n = (0, S.useExpressionPickerStore)(e => e.searchQuery), l = u.useCallback(e => {
                var n;
                return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e)
            }, [t]);
            return u.useCallback(e => {
                "" !== n ? ((0, S.setSearchQuery)(""), C.EmojiPickerStore.setActiveCategoryIndex(e)) : l(e)
            }, [l, n])
        }
}