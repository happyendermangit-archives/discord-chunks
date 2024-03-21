function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        useFetchStickerPack: function() {
            return T
        },
        useShouldAnimateSticker: function() {
            return v
        },
        useStickersGrid: function() {
            return y
        },
        useHasSendableSticker: function() {
            return _
        },
        useFetchStickerPacks: function() {
            return R
        },
        useFavoriteStickerIds: function() {
            return A
        },
        useFavoriteStickers: function() {
            return P
        },
        useLatestFrecentStickers: function() {
            return U
        },
        useStickerForRenderableSticker: function() {
            return N
        },
        useFilteredStickerPackCategories: function() {
            return F
        }
    }), i("424973"), i("222007"), i("843762");
    var r = i("884691"),
        n = i("446674"),
        s = i("817963"),
        a = i("845579"),
        l = i("42507"),
        u = i("305961"),
        c = i("162771"),
        o = i("677099"),
        d = i("697218"),
        f = i("427459"),
        S = i("991170"),
        h = i("866353"),
        m = i("467094"),
        E = i("865372"),
        I = i("364685"),
        p = i("161585"),
        k = i("24373"),
        C = i("49111"),
        g = i("782340");
    let T = e => {
            R();
            let t = (0, n.useStateFromStores)([I.default], () => I.default.hasLoadedStickerPacks);
            r.useEffect(() => {
                t && null == I.default.getStickerPack(e) && (0, m.fetchStickerPack)(e)
            }, [e, t])
        },
        v = e => {
            let t = a.AnimateStickers.useSetting();
            return (0, k.shouldAnimateSticker)(t, e)
        },
        y = e => {
            let {
                collapsedStickersCategories: t,
                filteredStickers: i,
                listPaddingRight: n = 0,
                listWidth: a = 0,
                stickerNodeMargin: l = 0,
                stickerNodeWidth: o,
                stickersCategories: d
            } = e;
            return r.useMemo(() => {
                let e = Math.floor((a - n + l) / (o + l)),
                    r = Math.floor(Math.max(l, (a - n - o * e) / (e - 1))),
                    S = [],
                    h = [],
                    m = [],
                    E = 0,
                    I = 0,
                    C = 0;
                if (0 !== a) {
                    let r = function(t, i) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            n = (0, k.isGuildSticker)(t[0]) ? u.default.getGuild(t[0].guild_id) : void 0,
                            {
                                canCreateExpressions: a
                            } = (0, s.getManageResourcePermissions)(n),
                            l = c.default.getGuildId(),
                            o = d.findIndex(e => e.type === p.StickerCategoryTypes.FAVORITE),
                            T = d.findIndex(e => e.type === p.StickerCategoryTypes.RECENT),
                            v = t.length;
                        null != n && l === n.id && a && t.length < (0, f.getTotalStickerCountForTier)(n.premiumTier) && v++;
                        let y = Math.ceil(v / e);
                        h[I] = r ? 0 : y;
                        for (let s = 0; s < y; s++) {
                            let a = s * e,
                                l = a + e,
                                u = t.slice(a, l).map((e, t) => ({
                                    type: p.StickerGridItemTypes.STICKER,
                                    sticker: e,
                                    packId: (0, k.isStandardSticker)(e) ? e.pack_id : "TODO - fix",
                                    gridSectionIndex: I,
                                    rowIndex: E,
                                    columnIndex: t,
                                    visibleRowIndex: C,
                                    category: i
                                }));
                            I > T && I > o && null != n && v > t.length && u.push({
                                type: p.StickerGridItemTypes.CREATE_STICKER,
                                guild_id: n.id,
                                name: g.default.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
                                gridSectionIndex: I,
                                rowIndex: E,
                                columnIndex: u.length,
                                visibleRowIndex: C
                            }), !r && (C++, m.push(u), S.push(u.length)), E++
                        }
                        I++
                    };
                    if (null == i)
                        for (let e of d) e.stickers.length > 0 ? (E++, r(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === p.StickerCategoryTypes.EMPTY_GUILD_UPSELL && (h[I] = 0, I++);
                    else i.sendable.length > 0 && r(i.sendable, p.StickerCategoryTypes.SEARCH_RESULTS), i.sendableWithPremium.length > 0 && r(i.sendableWithPremium, p.StickerCategoryTypes.SEARCH_RESULTS)
                }
                return {
                    rowCount: E,
                    rowCountBySection: h,
                    stickersGrid: m,
                    gutterWidth: r,
                    columnCounts: S
                }
            }, [t, i, n, a, l, o, d])
        },
        _ = e => {
            let t = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser());
            return (0, n.useStateFromStores)([I.default], () => {
                let i = I.default.getAllStickersIterator();
                for (let r of i)
                    if ((0, h.isSendableSticker)(r, t, e)) return !0;
                return !1
            }, [t, e])
        },
        R = () => {
            r.useEffect(() => {
                (0, m.fetchStickerPacks)()
            }, [])
        },
        L = e => {
            let t = (0, n.useStateFromStores)([I.default], () => I.default.getAllGuildStickers()),
                i = (0, n.useStateFromStoresArray)([o.default, u.default], () => {
                    let e = o.default.getFlattenedGuildIds(),
                        t = [];
                    return e.forEach(e => {
                        let i = u.default.getGuild(e);
                        null != i && t.push(i)
                    }), t
                }, []),
                a = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser());
            return r.useMemo(() => {
                let r = [];
                for (let {
                        name: e,
                        id: n
                    }
                    of i) {
                    let i = t.get(n);
                    null != i && 0 !== i.length && r.push({
                        type: p.StickerCategoryTypes.GUILD,
                        id: n,
                        name: e,
                        stickers: i
                    })
                }
                if ((null == e ? void 0 : e.getGuildId()) != null) {
                    let t = u.default.getGuild(e.getGuildId()),
                        {
                            canManageAllExpressions: i
                        } = (0, s.getManageResourcePermissions)(t),
                        n = r.findIndex(t => t.id === e.getGuildId());
                    n >= 1 ? r.unshift(r.splice(n, 1)[0]) : -1 === n && null != t && i && r.unshift({
                        type: p.StickerCategoryTypes.EMPTY_GUILD_UPSELL,
                        id: t.id,
                        name: t.name,
                        stickers: []
                    }), null != a && !S.can({
                        permission: C.Permissions.USE_EXTERNAL_EMOJIS,
                        user: a,
                        context: e
                    }) && (r = r.filter(t => t.id === e.getGuildId()))
                }
                return r
            }, [t, i, a, e])
        },
        x = [];

    function A() {
        var e, t;
        let i = (0, l.useFrecencySettings)();
        return null !== (t = null === (e = i.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : x
    }

    function P() {
        let e = A(),
            t = (0, n.useStateFromStoresArray)([I.default], () => e.map(e => I.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
        return t
    }

    function U() {
        let e = function() {
                var e, t;
                let i = (0, l.useFrecencySettings)(),
                    r = x;
                return (null == i ? void 0 : null === (e = i.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (r = Object.keys(null == i ? void 0 : null === (t = i.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), r
            }(),
            t = (0, n.useStateFromStoresArray)([I.default], () => e.map(e => I.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
        return t
    }
    let M = e => {
            let t = P(),
                {
                    packs: i,
                    frequentlyUsedStickers: s
                } = (0, n.useStateFromStoresObject)([I.default, E.default], () => ({
                    packs: I.default.getPremiumPacks(),
                    frequentlyUsedStickers: E.default.stickerFrecencyWithoutFetchingLatest.frequently
                }), []),
                a = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
                l = L(e);
            return r.useMemo(() => {
                var r;
                let n = i.map(k.createStickerPackCategory),
                    u = {
                        type: p.StickerCategoryTypes.FAVORITE,
                        id: p.StickerCategoryTypes.FAVORITE,
                        name: g.default.Messages.CATEGORY_FAVORITE,
                        stickers: t
                    },
                    c = {
                        type: p.StickerCategoryTypes.RECENT,
                        id: p.StickerCategoryTypes.RECENT,
                        name: g.default.Messages.STICKER_CATEGORY_RECENT,
                        stickers: null !== (r = null == s ? void 0 : s.filter(t => {
                            if ((0, k.isGuildSticker)(t)) {
                                var r, n;
                                return null !== (n = null === (r = I.default.getStickersByGuildId(t.guild_id)) || void 0 === r ? void 0 : r.some(e => e.id === t.id)) && void 0 !== n && n && (0, h.getStickerSendability)(t, a, e) !== h.StickerSendability.NONSENDABLE
                            }
                            if ((0, k.isStandardSticker)(t)) return i.some(e => e.id === t.pack_id)
                        })) && void 0 !== r ? r : []
                    };
                return [u, c, ...l, ...n]
            }, [i, t, s, l, a, e])
        },
        N = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = (0, n.useStateFromStores)([I.default], () => I.default.getStickerById(e.id)),
                [s, a] = r.useState(!0),
                [l, u] = r.useState(!1),
                c = (0, k.isGuildSticker)(e) || (0, k.isStandardSticker)(e);
            return (r.useEffect(() => {
                let r = async () => {
                    if (t && !c && null == i && s && !l) {
                        a(!1);
                        try {
                            await (0, m.fetchSticker)(e.id)
                        } catch {}
                        u(!0)
                    }
                };
                r()
            }, [t]), c) ? [e, l] : [null != i ? i : null, l]
        },
        F = e => {
            let t = M(e);
            return r.useMemo(() => t.filter(e => e.type === p.StickerCategoryTypes.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t])
        }
}