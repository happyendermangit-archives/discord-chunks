function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiGridItemTypes: function() {
            return i
        },
        EmojiUpsellType: function() {
            return s
        },
        useCategorySelectHandler: function() {
            return B
        },
        useEmojiGrid: function() {
            return G
        },
        useEmojiSelectHandler: function() {
            return w
        }
    }), n("47120"), n("653041");
    var i, r, s, a, o, l, u = n("470079"),
        d = n("392711"),
        _ = n.n(d),
        c = n("153832"),
        E = n("442837"),
        I = n("80932"),
        T = n("339085"),
        f = n("906411"),
        S = n("633302"),
        A = n("806966"),
        h = n("28546"),
        m = n("889161"),
        N = n("984933"),
        O = n("430824"),
        p = n("914010"),
        R = n("771845"),
        C = n("594174"),
        g = n("176354"),
        L = n("111361"),
        D = n("392552"),
        v = n("543241"),
        M = n("304852"),
        y = n("199257"),
        P = n("149203"),
        U = n("185923"),
        b = n("689938");
    (a = i || (i = {}))[a.EMOJI = 0] = "EMOJI", a[a.CREATE_EMOJI = 1] = "CREATE_EMOJI", (o = r || (r = {}))[o.SECTION_HEADING = 0] = "SECTION_HEADING", o[o.SECTION_ROW = 1] = "SECTION_ROW";
    let G = e => {
        let {
            channel: t,
            collapsedSections: n,
            includeCreateEmojiButton: i = !0,
            pickerIntention: r,
            emojiSearchResults: s,
            gridWidth: a,
            emojiPaddingHorizontal: o,
            emojiSpriteSize: l
        } = e, d = (0, E.useStateFromStores)([T.default], () => T.default.categories), I = (0, E.useStateFromStores)([O.default], () => O.default.getGuild(null == t ? void 0 : t.getGuildId()), [t]), A = null == t ? null : t.getGuildId(), h = (0, E.useStateFromStores)([T.default], () => T.default.getDisambiguatedEmojiContext(A), [A]), G = (0, v.useFavoriteEmojis)(A), w = (0, v.useFrequentlyUsedEmojis)(A), {
            topEmojis: B,
            newlyAddedEmojis: k
        } = (0, y.default)(A, r), V = (0, E.useStateFromStoresArray)([R.default], () => R.default.getFlattenedGuildIds(), []), {
            canCreateExpressions: F
        } = (0, m.useManageResourcePermissions)(I), x = (0, E.useStateFromStores)([C.default], () => C.default.getCurrentUser()), H = (0, L.isPremium)(x), Y = h.getCustomEmoji(), j = e => {
            if (e.type === f.EmojiTypes.GUILD) return e.guildId
        }, W = u.useMemo(() => _().groupBy(Y, j), [Y]), {
            enabled: K,
            treatment: z
        } = D.default.useExperiment({
            location: "EmojiPicker"
        }, {
            autoTrackExposure: !0,
            disable: !F
        });
        return u.useMemo(() => {
            let e = [],
                u = [],
                E = [],
                T = [],
                f = 0,
                A = 0;
            if (null != h && null != a) {
                let h = Math.floor(a / (l + 2 * o)),
                    m = (s, a) => {
                        let o = new Map,
                            d = n.has(a.sectionId),
                            [c, I] = _().partition(s, e => {
                                let n = g.default.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: r
                                });
                                return o.set(e, n), !n
                            }),
                            S = c.concat(I),
                            m = a.guild,
                            N = p.default.getGuildId(),
                            O = a.sectionId === P.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                            R = !O && null != m && N === m.id && S.length < m.getMaxEmojiSlots(),
                            C = O && S.length < h && !K,
                            L = null != m && O && K && z === D.EmojiPickerUploadTreatment.WITH_TOP_LIST && W[m.id].length < m.getMaxEmojiSlots(),
                            M = i && F && null != m && (R || C || L);
                        M && L && S.length === h && S.shift();
                        let y = K && M && !d,
                            U = Math.ceil((M ? S.length + 1 : S.length) / h),
                            G = [];
                        for (let e = 0; e < U; e++) {
                            let t = 0 === e,
                                n = e * h - (y && e > 0 ? 1 : 0),
                                i = n + h - (y && t ? 1 : 0),
                                r = S.slice(n, i).map((e, n) => {
                                    var i, r;
                                    return {
                                        type: 0,
                                        emoji: e,
                                        size: l,
                                        isDisabled: o.get(e),
                                        rowIndex: A,
                                        columnIndex: y && t ? n + 1 : n,
                                        visibleRowIndex: f,
                                        category: a.type,
                                        subCategory: a.sectionId === P.EmojiCategoryTypes.TOP_GUILD_EMOJI ? (0, v.getEmojiSubCategory)(B, k, null !== (r = null !== (i = e.id) && void 0 !== i ? i : e.uniqueName) && void 0 !== r ? r : e.name) : P.EmojiSubCategory.NONE
                                    }
                                });
                            if (y && t && !d && (r = [{
                                    type: 1,
                                    guildId: m.id,
                                    name: b.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                    size: l,
                                    rowIndex: A,
                                    columnIndex: 0,
                                    visibleRowIndex: f
                                }, ...r]), G.push(r), !d) {
                                if (!K && M && e === U - 1) {
                                    let t = G[e];
                                    t.push({
                                        type: 1,
                                        guildId: m.id,
                                        name: b.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                        size: l,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: f
                                    })
                                }
                                T.push(r.length), E.push(r), f++
                            }
                            A++
                        }
                        let w = {
                            ...a,
                            count: s.length
                        };
                        u.push(w), e.push(d ? 0 : U)
                    };
                if (null != s) 0 !== s.unlocked.length && m(s.unlocked, {
                    type: P.EmojiCategoryTypes.SEARCH_RESULTS,
                    sectionId: P.EmojiCategoryTypes.SEARCH_RESULTS,
                    count: s.unlocked.length,
                    isNitroLocked: !1
                }), 0 !== s.locked.length && m(s.locked, {
                    type: P.EmojiCategoryTypes.PREMIUM_UPSELL,
                    categoryId: P.EmojiCategories.PREMIUM_UPSELL,
                    sectionId: P.EmojiCategoryTypes.PREMIUM_UPSELL,
                    count: s.locked.length,
                    isNitroLocked: !H
                });
                else
                    for (let e of d)
                        if (e === P.EmojiCategories.CUSTOM) {
                            let n = n => {
                                let i = W[n];
                                if (null == i) return;
                                let s = i.filter(e => g.default.getEmojiUnavailableReason({
                                    emoji: e,
                                    channel: null != t ? t : N.default.getDefaultChannel(n),
                                    intention: r
                                }) !== U.EmojiDisabledReasons.DISALLOW_EXTERNAL);
                                if (0 === s.length) return;
                                let a = O.default.getGuild(n),
                                    o = !H && g.default.isEmojiCategoryNitroLocked({
                                        categoryEmojis: s,
                                        channel: t,
                                        intention: r
                                    });
                                m(s, {
                                    categoryId: e,
                                    guild: a,
                                    type: P.EmojiCategoryTypes.GUILD,
                                    sectionId: null != a ? a.id : (0, c.v4)(),
                                    count: s.length,
                                    isNitroLocked: o
                                })
                            };
                            if (null != I && n(I.id), (0, U.isExternalEmojiAllowedForIntention)(r))
                                for (let e of V)(null == I || I.id !== e) && n(e)
                        } else if (e === P.EmojiCategories.TOP_GUILD_EMOJI) {
                    if (null != I) {
                        let {
                            allEmojis: t
                        } = (0, M.getEmojiHotrail)({
                            topEmojis: B,
                            newlyAddedEmojis: k
                        });
                        t.length > 0 && m(t, {
                            categoryId: e,
                            guild: O.default.getGuild(I.id),
                            type: P.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                            sectionId: P.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                            count: t.length,
                            isNitroLocked: !1
                        })
                    }
                } else if (e === P.EmojiCategories.RECENT) {
                    let n = (0, v.dedupeUnicodeEmojis)(w).filter(e => !g.default.isEmojiFiltered({
                        emoji: e,
                        channel: t,
                        intention: r
                    }));
                    m(n, {
                        categoryId: e,
                        type: P.EmojiCategoryTypes.RECENT,
                        sectionId: P.EmojiCategoryTypes.RECENT,
                        count: n.length,
                        isNitroLocked: !1
                    })
                } else if (e === P.EmojiCategories.FAVORITES) {
                    let n = (0, v.dedupeUnicodeEmojis)(G).filter(e => !g.default.isEmojiFiltered({
                        emoji: e,
                        channel: t,
                        intention: r
                    }));
                    0 !== n.length && m(n, {
                        categoryId: e,
                        type: P.EmojiCategoryTypes.FAVORITES,
                        sectionId: P.EmojiCategoryTypes.FAVORITES,
                        count: n.length,
                        isNitroLocked: !1
                    })
                } else if ((0, v.allowUnicodeEmojiForIntention)(r)) {
                    let t = S.default.getByCategory(e);
                    null != t && m(t, {
                        categoryId: e,
                        type: P.EmojiCategoryTypes.UNICODE,
                        sectionId: e,
                        count: t.length,
                        isNitroLocked: !1
                    })
                }
            }
            return {
                columnCounts: T,
                emojiGrid: E,
                rowCountBySection: e,
                sectionDescriptors: u
            }
        }, [h, a, l, o, s, n, t, r, d, I, W, V, k, B, w, G, F, i, H, K, z])
    };
    (l = s || (s = {}))[l.PREMIUM = 0] = "PREMIUM", l[l.ROLE_SUBSCRIPTION = 1] = "ROLE_SUBSCRIPTION";
    let w = e => {
            let {
                pickerIntention: t,
                selectedChannel: n,
                onSelectEmoji: i,
                setUpsellConfigs: r,
                emojiSelectAnalytics: s,
                trackEmojiFavorited: a
            } = e, o = (0, E.useStateFromStores)([T.default], () => T.default.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
            return u.useCallback((e, l) => {
                switch (e.type) {
                    case 1:
                        i(void 0, l.isFinalSelection, l.isBurst);
                        return;
                    case 0: {
                        let {
                            emoji: u
                        } = e;
                        if (null == u) return;
                        let d = g.default.getEmojiUnavailableReason({
                            emoji: u,
                            channel: n,
                            intention: t
                        });
                        if (l.toggleFavorite) {
                            o.isFavoriteEmojiWithoutFetchingLatest(u) || null != d ? (0, I.unfavoriteEmoji)(u) : (null == a || a(e), (0, I.favoriteEmoji)(u));
                            return
                        }
                        if (d === U.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (d === U.EmojiDisabledReasons.PREMIUM_LOCKED) {
                            r({
                                type: 0,
                                emojiDescriptor: e
                            });
                            return
                        }
                        if (d === U.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && u.type === f.EmojiTypes.GUILD) {
                            r({
                                type: 1,
                                guildId: u.guildId,
                                emojiId: u.id
                            });
                            return
                        }
                        if (d === U.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == s || s(e), i(u, l.isFinalSelection, l.isBurst)
                    }
                }
            }, [n, t, i, r, o, s, a])
        },
        B = e => {
            let {
                emojiListRef: t
            } = e, n = (0, h.useExpressionPickerStore)(e => e.searchQuery), i = u.useCallback(e => {
                var n;
                return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e)
            }, [t]);
            return u.useCallback(e => {
                "" !== n ? ((0, h.setSearchQuery)(""), A.EmojiPickerStore.setActiveCategoryIndex(e)) : i(e)
            }, [i, n])
        }
}