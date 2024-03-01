function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        useFetchStickerPack: function() {
            return g
        },
        useShouldAnimateSticker: function() {
            return y
        },
        useStickersGrid: function() {
            return _
        },
        useHasSendableSticker: function() {
            return R
        },
        useFetchStickerPacks: function() {
            return T
        },
        useFavoriteStickerIds: function() {
            return A
        },
        useFavoriteStickers: function() {
            return P
        },
        useLatestFrecentStickers: function() {
            return N
        },
        useStickerForRenderableSticker: function() {
            return M
        },
        useFilteredStickerPackCategories: function() {
            return F
        }
    }), i("424973"), i("222007"), i("843762");
    var r = i("884691"),
        n = i("446674"),
        s = i("817963"),
        l = i("845579"),
        a = i("42507"),
        u = i("305961"),
        c = i("162771"),
        d = i("677099"),
        o = i("697218"),
        f = i("427459"),
        S = i("991170"),
        h = i("866353"),
        m = i("467094"),
        E = i("865372"),
        p = i("364685"),
        I = i("161585"),
        k = i("24373"),
        C = i("49111"),
        v = i("782340");
    let g = e => {
            T();
            let t = (0, n.useStateFromStores)([p.default], () => p.default.hasLoadedStickerPacks);
            r.useEffect(() => {
                t && null == p.default.getStickerPack(e) && (0, m.fetchStickerPack)(e)
            }, [e, t])
        },
        y = e => {
            let t = l.AnimateStickers.useSetting();
            return (0, k.shouldAnimateSticker)(t, e)
        },
        _ = e => {
            let {
                collapsedStickersCategories: t,
                filteredStickers: i,
                listPaddingRight: n = 0,
                listWidth: l = 0,
                stickerNodeMargin: a = 0,
                stickerNodeWidth: d,
                stickersCategories: o
            } = e;
            return r.useMemo(() => {
                let e = Math.floor((l - n + a) / (d + a)),
                    r = Math.floor(Math.max(a, (l - n - d * e) / (e - 1))),
                    S = [],
                    h = [],
                    m = [],
                    E = 0,
                    p = 0,
                    C = 0;
                if (0 !== l) {
                    let r = function(t, i) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            n = (0, k.isGuildSticker)(t[0]) ? u.default.getGuild(t[0].guild_id) : void 0,
                            {
                                canCreateExpressions: l
                            } = (0, s.getManageResourcePermissions)(n),
                            a = c.default.getGuildId(),
                            d = o.findIndex(e => e.type === I.StickerCategoryTypes.FAVORITE),
                            g = o.findIndex(e => e.type === I.StickerCategoryTypes.RECENT),
                            y = t.length;
                        null != n && a === n.id && l && t.length < (0, f.getTotalStickerCountForTier)(n.premiumTier) && y++;
                        let _ = Math.ceil(y / e);
                        h[p] = r ? 0 : _;
                        for (let s = 0; s < _; s++) {
                            let l = s * e,
                                a = l + e,
                                u = t.slice(l, a).map((e, t) => ({
                                    type: I.StickerGridItemTypes.STICKER,
                                    sticker: e,
                                    packId: (0, k.isStandardSticker)(e) ? e.pack_id : "TODO - fix",
                                    gridSectionIndex: p,
                                    rowIndex: E,
                                    columnIndex: t,
                                    visibleRowIndex: C,
                                    category: i
                                }));
                            p > g && p > d && null != n && y > t.length && u.push({
                                type: I.StickerGridItemTypes.CREATE_STICKER,
                                guild_id: n.id,
                                name: v.default.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
                                gridSectionIndex: p,
                                rowIndex: E,
                                columnIndex: u.length,
                                visibleRowIndex: C
                            }), !r && (C++, m.push(u), S.push(u.length)), E++
                        }
                        p++
                    };
                    if (null == i)
                        for (let e of o) e.stickers.length > 0 ? (E++, r(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === I.StickerCategoryTypes.EMPTY_GUILD_UPSELL && (h[p] = 0, p++);
                    else i.sendable.length > 0 && r(i.sendable, I.StickerCategoryTypes.SEARCH_RESULTS), i.sendableWithPremium.length > 0 && r(i.sendableWithPremium, I.StickerCategoryTypes.SEARCH_RESULTS)
                }
                return {
                    rowCount: E,
                    rowCountBySection: h,
                    stickersGrid: m,
                    gutterWidth: r,
                    columnCounts: S
                }
            }, [t, i, n, l, a, d, o])
        },
        R = e => {
            let t = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser());
            return (0, n.useStateFromStores)([p.default], () => {
                let i = p.default.getAllStickersIterator();
                for (let r of i)
                    if ((0, h.isSendableSticker)(r, t, e)) return !0;
                return !1
            }, [t, e])
        },
        T = () => {
            r.useEffect(() => {
                (0, m.fetchStickerPacks)()
            }, [])
        },
        L = e => {
            let t = (0, n.useStateFromStores)([p.default], () => p.default.getAllGuildStickers()),
                i = (0, n.useStateFromStoresArray)([d.default, u.default], () => {
                    let e = d.default.getFlattenedGuildIds(),
                        t = [];
                    return e.forEach(e => {
                        let i = u.default.getGuild(e);
                        null != i && t.push(i)
                    }), t
                }, []),
                l = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser());
            return r.useMemo(() => {
                let r = [];
                for (let {
                        name: e,
                        id: n
                    }
                    of i) {
                    let i = t.get(n);
                    null != i && 0 !== i.length && r.push({
                        type: I.StickerCategoryTypes.GUILD,
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
                        type: I.StickerCategoryTypes.EMPTY_GUILD_UPSELL,
                        id: t.id,
                        name: t.name,
                        stickers: []
                    }), null != l && !S.default.can({
                        permission: C.Permissions.USE_EXTERNAL_EMOJIS,
                        user: l,
                        context: e
                    }) && (r = r.filter(t => t.id === e.getGuildId()))
                }
                return r
            }, [t, i, l, e])
        },
        x = [];

    function A() {
        var e, t;
        let i = (0, a.useFrecencySettings)();
        return null !== (t = null === (e = i.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : x
    }

    function P() {
        let e = A(),
            t = (0, n.useStateFromStoresArray)([p.default], () => e.map(e => p.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
        return t
    }

    function N() {
        let e = function() {
                var e, t;
                let i = (0, a.useFrecencySettings)(),
                    r = x;
                return (null == i ? void 0 : null === (e = i.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (r = Object.keys(null == i ? void 0 : null === (t = i.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), r
            }(),
            t = (0, n.useStateFromStoresArray)([p.default], () => e.map(e => p.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
        return t
    }
    let U = e => {
            let t = P(),
                {
                    packs: i,
                    frequentlyUsedStickers: s
                } = (0, n.useStateFromStoresObject)([p.default, E.default], () => ({
                    packs: p.default.getPremiumPacks(),
                    frequentlyUsedStickers: E.default.stickerFrecencyWithoutFetchingLatest.frequently
                }), []),
                l = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                a = L(e);
            return r.useMemo(() => {
                var r;
                let n = i.map(k.createStickerPackCategory),
                    u = {
                        type: I.StickerCategoryTypes.FAVORITE,
                        id: I.StickerCategoryTypes.FAVORITE,
                        name: v.default.Messages.CATEGORY_FAVORITE,
                        stickers: t
                    },
                    c = {
                        type: I.StickerCategoryTypes.RECENT,
                        id: I.StickerCategoryTypes.RECENT,
                        name: v.default.Messages.STICKER_CATEGORY_RECENT,
                        stickers: null !== (r = null == s ? void 0 : s.filter(t => {
                            if ((0, k.isGuildSticker)(t)) {
                                var r, n;
                                return null !== (n = null === (r = p.default.getStickersByGuildId(t.guild_id)) || void 0 === r ? void 0 : r.some(e => e.id === t.id)) && void 0 !== n && n && (0, h.getStickerSendability)(t, l, e) !== h.StickerSendability.NONSENDABLE
                            }
                            if ((0, k.isStandardSticker)(t)) return i.some(e => e.id === t.pack_id)
                        })) && void 0 !== r ? r : []
                    };
                return [u, c, ...a, ...n]
            }, [i, t, s, a, l, e])
        },
        M = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = (0, n.useStateFromStores)([p.default], () => p.default.getStickerById(e.id)),
                [s, l] = r.useState(!0),
                [a, u] = r.useState(!1),
                c = (0, k.isGuildSticker)(e) || (0, k.isStandardSticker)(e);
            return (r.useEffect(() => {
                let r = async () => {
                    if (t && !c && null == i && s && !a) {
                        l(!1);
                        try {
                            await (0, m.fetchSticker)(e.id)
                        } catch {}
                        u(!0)
                    }
                };
                r()
            }, [t]), c) ? [e, a] : [null != i ? i : null, a]
        },
        F = e => {
            let t = U(e);
            return r.useMemo(() => t.filter(e => e.type === I.StickerCategoryTypes.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t])
        }
}