function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiGridItemTypes: function() {
            return i
        },
        useEmojiGrid: function() {
            return j
        },
        EmojiUpsellType: function() {
            return a
        },
        useEmojiSelectHandler: function() {
            return U
        },
        useCategorySelectHandler: function() {
            return D
        }
    }), n("222007"), n("424973");
    var i, l, a, s, r, o, u = n("884691"),
        d = n("917351"),
        c = n.n(d),
        f = n("748820"),
        p = n("446674"),
        m = n("150021"),
        h = n("385976"),
        x = n("858619"),
        E = n("867805"),
        y = n("986632"),
        g = n("538282"),
        S = n("817963"),
        C = n("923959"),
        I = n("305961"),
        T = n("162771"),
        _ = n("677099"),
        v = n("697218"),
        N = n("402671"),
        A = n("764364"),
        O = n("248474"),
        R = n("788506"),
        M = n("255214"),
        k = n("352046"),
        L = n("115279"),
        b = n("958706"),
        P = n("782340");
    (s = i || (i = {}))[s.EMOJI = 0] = "EMOJI", s[s.CREATE_EMOJI = 1] = "CREATE_EMOJI", (r = l || (l = {}))[r.SECTION_HEADING = 0] = "SECTION_HEADING", r[r.SECTION_ROW = 1] = "SECTION_ROW";
    let j = e => {
        let {
            channel: t,
            collapsedSections: n,
            includeCreateEmojiButton: i = !0,
            pickerIntention: l,
            emojiSearchResults: a,
            gridWidth: s,
            emojiPaddingHorizontal: r,
            emojiSpriteSize: o
        } = e, d = (0, p.useStateFromStores)([h.default], () => h.default.categories), m = (0, p.useStateFromStores)([I.default], () => I.default.getGuild(null == t ? void 0 : t.getGuildId()), [t]), y = null == t ? null : t.getGuildId(), g = (0, p.useStateFromStores)([h.default], () => h.default.getDisambiguatedEmojiContext(y), [y]), j = (0, R.useFavoriteEmojis)(y), U = (0, R.useFrequentlyUsedEmojis)(y), {
            topEmojis: D,
            newlyAddedEmojis: w
        } = (0, k.default)(y, l), F = (0, p.useStateFromStoresArray)([_.default], () => _.default.getFlattenedGuildIds(), []), {
            canCreateExpressions: G
        } = (0, S.useManageResourcePermissions)(m), B = (0, p.useStateFromStores)([v.default], () => v.default.getCurrentUser()), H = (0, A.isPremium)(B), V = g.getCustomEmoji(), K = e => {
            if (e.type === x.EmojiTypes.GUILD) return e.guildId
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
                p = [],
                h = [],
                x = 0,
                y = 0;
            if (null != g && null != s) {
                let g = Math.floor(s / (o + 2 * r)),
                    S = (a, s) => {
                        let r = new Map,
                            d = n.has(s.sectionId),
                            [f, m] = c.partition(a, e => {
                                let n = N.default.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: l
                                });
                                return r.set(e, n), !n
                            }),
                            E = f.concat(m),
                            S = s.guild,
                            C = T.default.getGuildId(),
                            I = s.sectionId === L.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                            _ = !I && null != S && C === S.id && E.length < S.getMaxEmojiSlots(),
                            v = I && E.length < g && !Y,
                            A = null != S && I && Y && z === O.EmojiPickerUploadTreatment.WITH_TOP_LIST && W[S.id].length < S.getMaxEmojiSlots(),
                            M = i && G && null != S && (_ || v || A);
                        M && A && E.length === g && E.shift();
                        let k = Y && M && !d,
                            b = M ? E.length + 1 : E.length,
                            j = Math.ceil(b / g),
                            U = [];
                        for (let e = 0; e < j; e++) {
                            let t = 0 === e,
                                n = e * g - (k && e > 0 ? 1 : 0),
                                i = n + g - (k && t ? 1 : 0),
                                l = E.slice(n, i).map((e, n) => {
                                    var i, l;
                                    return {
                                        type: 0,
                                        emoji: e,
                                        size: o,
                                        isDisabled: r.get(e),
                                        rowIndex: y,
                                        columnIndex: k && t ? n + 1 : n,
                                        visibleRowIndex: x,
                                        category: s.type,
                                        subCategory: s.sectionId === L.EmojiCategoryTypes.TOP_GUILD_EMOJI ? (0, R.getEmojiSubCategory)(D, w, null !== (l = null !== (i = e.id) && void 0 !== i ? i : e.uniqueName) && void 0 !== l ? l : e.name) : L.EmojiSubCategory.NONE
                                    }
                                });
                            if (k && t && !d && (l = [{
                                    type: 1,
                                    guildId: S.id,
                                    name: P.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                    size: o,
                                    rowIndex: y,
                                    columnIndex: 0,
                                    visibleRowIndex: x
                                }, ...l]), U.push(l), !d) {
                                if (!Y && M && e === j - 1) {
                                    let t = U[e];
                                    t.push({
                                        type: 1,
                                        guildId: S.id,
                                        name: P.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                        size: o,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: x
                                    })
                                }
                                h.push(l.length), p.push(l), x++
                            }
                            y++
                        }
                        let F = {
                            ...s,
                            count: a.length
                        };
                        u.push(F), e.push(d ? 0 : j)
                    };
                if (null != a) 0 !== a.unlocked.length && S(a.unlocked, {
                    type: L.EmojiCategoryTypes.SEARCH_RESULTS,
                    sectionId: L.EmojiCategoryTypes.SEARCH_RESULTS,
                    count: a.unlocked.length,
                    isNitroLocked: !1
                }), 0 !== a.locked.length && S(a.locked, {
                    type: L.EmojiCategoryTypes.PREMIUM_UPSELL,
                    categoryId: L.EmojiCategories.PREMIUM_UPSELL,
                    sectionId: L.EmojiCategoryTypes.PREMIUM_UPSELL,
                    count: a.locked.length,
                    isNitroLocked: !H
                });
                else
                    for (let e of d)
                        if (e === L.EmojiCategories.CUSTOM) {
                            let n = n => {
                                let i = W[n];
                                if (null == i) return;
                                let a = i.filter(e => N.default.getEmojiUnavailableReason({
                                    emoji: e,
                                    channel: null != t ? t : C.default.getDefaultChannel(n),
                                    intention: l
                                }) !== b.EmojiDisabledReasons.DISALLOW_EXTERNAL);
                                if (0 === a.length) return;
                                let s = I.default.getGuild(n),
                                    r = !H && N.default.isEmojiCategoryNitroLocked({
                                        categoryEmojis: a,
                                        channel: t,
                                        intention: l
                                    });
                                S(a, {
                                    categoryId: e,
                                    guild: s,
                                    type: L.EmojiCategoryTypes.GUILD,
                                    sectionId: null != s ? s.id : (0, f.v4)(),
                                    count: a.length,
                                    isNitroLocked: r
                                })
                            };
                            if (null != m && n(m.id), (0, b.isExternalEmojiAllowedForIntention)(l))
                                for (let e of F)(null == m || m.id !== e) && n(e)
                        } else if (e === L.EmojiCategories.TOP_GUILD_EMOJI) {
                    if (null != m) {
                        let {
                            allEmojis: t
                        } = (0, M.getEmojiHotrail)({
                            topEmojis: D,
                            newlyAddedEmojis: w
                        });
                        if (t.length > 0) {
                            let n = I.default.getGuild(m.id);
                            S(t, {
                                categoryId: e,
                                guild: n,
                                type: L.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                sectionId: L.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                count: t.length,
                                isNitroLocked: !1
                            })
                        }
                    }
                } else if (e === L.EmojiCategories.RECENT) {
                    let n = (0, R.dedupeUnicodeEmojis)(U).filter(e => !N.default.isEmojiFiltered({
                        emoji: e,
                        channel: t,
                        intention: l
                    }));
                    S(n, {
                        categoryId: e,
                        type: L.EmojiCategoryTypes.RECENT,
                        sectionId: L.EmojiCategoryTypes.RECENT,
                        count: n.length,
                        isNitroLocked: !1
                    })
                } else if (e === L.EmojiCategories.FAVORITES) {
                    let n = (0, R.dedupeUnicodeEmojis)(j).filter(e => !N.default.isEmojiFiltered({
                        emoji: e,
                        channel: t,
                        intention: l
                    }));
                    0 !== n.length && S(n, {
                        categoryId: e,
                        type: L.EmojiCategoryTypes.FAVORITES,
                        sectionId: L.EmojiCategoryTypes.FAVORITES,
                        count: n.length,
                        isNitroLocked: !1
                    })
                } else if ((0, R.allowUnicodeEmojiForIntention)(l)) {
                    let t = E.default.getByCategory(e);
                    null != t && S(t, {
                        categoryId: e,
                        type: L.EmojiCategoryTypes.UNICODE,
                        sectionId: e,
                        count: t.length,
                        isNitroLocked: !1
                    })
                }
            }
            return {
                columnCounts: h,
                emojiGrid: p,
                rowCountBySection: e,
                sectionDescriptors: u
            }
        }, [g, s, o, r, a, n, t, l, d, m, W, F, w, D, U, j, G, i, H, Y, z])
    };
    (o = a || (a = {}))[o.PREMIUM = 0] = "PREMIUM", o[o.ROLE_SUBSCRIPTION = 1] = "ROLE_SUBSCRIPTION";
    let U = e => {
            let {
                pickerIntention: t,
                selectedChannel: n,
                onSelectEmoji: i,
                setUpsellConfigs: l,
                emojiSelectAnalytics: a,
                trackEmojiFavorited: s
            } = e, r = (0, p.useStateFromStores)([h.default], () => h.default.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
            return u.useCallback((e, o) => {
                switch (e.type) {
                    case 1:
                        i(void 0, o.isFinalSelection, o.isBurst);
                        return;
                    case 0: {
                        let {
                            emoji: u
                        } = e;
                        if (null == u) return;
                        let d = N.default.getEmojiUnavailableReason({
                            emoji: u,
                            channel: n,
                            intention: t
                        });
                        if (o.toggleFavorite) {
                            r.isFavoriteEmojiWithoutFetchingLatest(u) || null != d ? (0, m.unfavoriteEmoji)(u) : (null == s || s(e), (0, m.favoriteEmoji)(u));
                            return
                        }
                        if (d === b.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (d === b.EmojiDisabledReasons.PREMIUM_LOCKED) {
                            l({
                                type: 0,
                                emojiDescriptor: e
                            });
                            return
                        }
                        if (d === b.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && u.type === x.EmojiTypes.GUILD) {
                            l({
                                type: 1,
                                guildId: u.guildId,
                                emojiId: u.id
                            });
                            return
                        }
                        if (d === b.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == a || a(e), i(u, o.isFinalSelection, o.isBurst)
                    }
                }
            }, [n, t, i, l, r, a, s])
        },
        D = e => {
            let {
                emojiListRef: t
            } = e, n = (0, g.useExpressionPickerStore)(e => e.searchQuery), i = u.useCallback(e => {
                var n;
                return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e)
            }, [t]);
            return u.useCallback(e => {
                "" !== n ? ((0, g.setSearchQuery)(""), y.EmojiPickerStore.setActiveCategoryIndex(e)) : i(e)
            }, [i, n])
        }
}