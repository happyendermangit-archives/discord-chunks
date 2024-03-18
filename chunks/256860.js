function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        useFetchStickerPack: function() {
            return g
        },
        useShouldAnimateSticker: function() {
            return C
        },
        useStickersGrid: function() {
            return T
        },
        useHasSendableSticker: function() {
            return R
        },
        useFetchStickerPacks: function() {
            return x
        },
        useFavoriteStickerIds: function() {
            return N
        },
        useFavoriteStickers: function() {
            return L
        },
        useLatestFrecentStickers: function() {
            return P
        },
        useStickerForRenderableSticker: function() {
            return M
        },
        useFilteredStickerPackCategories: function() {
            return j
        }
    }), r("424973"), r("222007"), r("843762");
    var n = r("884691"),
        i = r("446674"),
        s = r("817963"),
        l = r("845579"),
        a = r("42507"),
        u = r("305961"),
        c = r("162771"),
        d = r("677099"),
        o = r("697218"),
        f = r("427459"),
        S = r("991170"),
        k = r("866353"),
        p = r("467094"),
        y = r("865372"),
        m = r("364685"),
        E = r("161585"),
        h = r("24373"),
        I = r("49111"),
        v = r("782340");
    let g = e => {
            x();
            let t = (0, i.useStateFromStores)([m.default], () => m.default.hasLoadedStickerPacks);
            n.useEffect(() => {
                t && null == m.default.getStickerPack(e) && (0, p.fetchStickerPack)(e)
            }, [e, t])
        },
        C = e => {
            let t = l.AnimateStickers.useSetting();
            return (0, h.shouldAnimateSticker)(t, e)
        },
        T = e => {
            let {
                collapsedStickersCategories: t,
                filteredStickers: r,
                listPaddingRight: i = 0,
                listWidth: l = 0,
                stickerNodeMargin: a = 0,
                stickerNodeWidth: d,
                stickersCategories: o
            } = e;
            return n.useMemo(() => {
                let e = Math.floor((l - i + a) / (d + a)),
                    n = Math.floor(Math.max(a, (l - i - d * e) / (e - 1))),
                    S = [],
                    k = [],
                    p = [],
                    y = 0,
                    m = 0,
                    I = 0;
                if (0 !== l) {
                    let n = function(t, r) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = (0, h.isGuildSticker)(t[0]) ? u.default.getGuild(t[0].guild_id) : void 0,
                            {
                                canCreateExpressions: l
                            } = (0, s.getManageResourcePermissions)(i),
                            a = c.default.getGuildId(),
                            d = o.findIndex(e => e.type === E.StickerCategoryTypes.FAVORITE),
                            g = o.findIndex(e => e.type === E.StickerCategoryTypes.RECENT),
                            C = t.length;
                        null != i && a === i.id && l && t.length < (0, f.getTotalStickerCountForTier)(i.premiumTier) && C++;
                        let T = Math.ceil(C / e);
                        k[m] = n ? 0 : T;
                        for (let s = 0; s < T; s++) {
                            let l = s * e,
                                a = l + e,
                                u = t.slice(l, a).map((e, t) => ({
                                    type: E.StickerGridItemTypes.STICKER,
                                    sticker: e,
                                    packId: (0, h.isStandardSticker)(e) ? e.pack_id : "TODO - fix",
                                    gridSectionIndex: m,
                                    rowIndex: y,
                                    columnIndex: t,
                                    visibleRowIndex: I,
                                    category: r
                                }));
                            m > g && m > d && null != i && C > t.length && u.push({
                                type: E.StickerGridItemTypes.CREATE_STICKER,
                                guild_id: i.id,
                                name: v.default.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
                                gridSectionIndex: m,
                                rowIndex: y,
                                columnIndex: u.length,
                                visibleRowIndex: I
                            }), !n && (I++, p.push(u), S.push(u.length)), y++
                        }
                        m++
                    };
                    if (null == r)
                        for (let e of o) e.stickers.length > 0 ? (y++, n(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === E.StickerCategoryTypes.EMPTY_GUILD_UPSELL && (k[m] = 0, m++);
                    else r.sendable.length > 0 && n(r.sendable, E.StickerCategoryTypes.SEARCH_RESULTS), r.sendableWithPremium.length > 0 && n(r.sendableWithPremium, E.StickerCategoryTypes.SEARCH_RESULTS)
                }
                return {
                    rowCount: y,
                    rowCountBySection: k,
                    stickersGrid: p,
                    gutterWidth: n,
                    columnCounts: S
                }
            }, [t, r, i, l, a, d, o])
        },
        R = e => {
            let t = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser());
            return (0, i.useStateFromStores)([m.default], () => {
                let r = m.default.getAllStickersIterator();
                for (let n of r)
                    if ((0, k.isSendableSticker)(n, t, e)) return !0;
                return !1
            }, [t, e])
        },
        x = () => {
            n.useEffect(() => {
                (0, p.fetchStickerPacks)()
            }, [])
        },
        _ = e => {
            let t = (0, i.useStateFromStores)([m.default], () => m.default.getAllGuildStickers()),
                r = (0, i.useStateFromStoresArray)([d.default, u.default], () => {
                    let e = d.default.getFlattenedGuildIds(),
                        t = [];
                    return e.forEach(e => {
                        let r = u.default.getGuild(e);
                        null != r && t.push(r)
                    }), t
                }, []),
                l = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser());
            return n.useMemo(() => {
                let n = [];
                for (let {
                        name: e,
                        id: i
                    }
                    of r) {
                    let r = t.get(i);
                    null != r && 0 !== r.length && n.push({
                        type: E.StickerCategoryTypes.GUILD,
                        id: i,
                        name: e,
                        stickers: r
                    })
                }
                if ((null == e ? void 0 : e.getGuildId()) != null) {
                    let t = u.default.getGuild(e.getGuildId()),
                        {
                            canManageAllExpressions: r
                        } = (0, s.getManageResourcePermissions)(t),
                        i = n.findIndex(t => t.id === e.getGuildId());
                    i >= 1 ? n.unshift(n.splice(i, 1)[0]) : -1 === i && null != t && r && n.unshift({
                        type: E.StickerCategoryTypes.EMPTY_GUILD_UPSELL,
                        id: t.id,
                        name: t.name,
                        stickers: []
                    }), null != l && !S.default.can({
                        permission: I.Permissions.USE_EXTERNAL_EMOJIS,
                        user: l,
                        context: e
                    }) && (n = n.filter(t => t.id === e.getGuildId()))
                }
                return n
            }, [t, r, l, e])
        },
        A = [];

    function N() {
        var e, t;
        let r = (0, a.useFrecencySettings)();
        return null !== (t = null === (e = r.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : A
    }

    function L() {
        let e = N(),
            t = (0, i.useStateFromStoresArray)([m.default], () => e.map(e => m.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
        return t
    }

    function P() {
        let e = function() {
                var e, t;
                let r = (0, a.useFrecencySettings)(),
                    n = A;
                return (null == r ? void 0 : null === (e = r.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (n = Object.keys(null == r ? void 0 : null === (t = r.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), n
            }(),
            t = (0, i.useStateFromStoresArray)([m.default], () => e.map(e => m.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
        return t
    }
    let F = e => {
            let t = L(),
                {
                    packs: r,
                    frequentlyUsedStickers: s
                } = (0, i.useStateFromStoresObject)([m.default, y.default], () => ({
                    packs: m.default.getPremiumPacks(),
                    frequentlyUsedStickers: y.default.stickerFrecencyWithoutFetchingLatest.frequently
                }), []),
                l = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                a = _(e);
            return n.useMemo(() => {
                var n;
                let i = r.map(h.createStickerPackCategory),
                    u = {
                        type: E.StickerCategoryTypes.FAVORITE,
                        id: E.StickerCategoryTypes.FAVORITE,
                        name: v.default.Messages.CATEGORY_FAVORITE,
                        stickers: t
                    },
                    c = {
                        type: E.StickerCategoryTypes.RECENT,
                        id: E.StickerCategoryTypes.RECENT,
                        name: v.default.Messages.STICKER_CATEGORY_RECENT,
                        stickers: null !== (n = null == s ? void 0 : s.filter(t => {
                            if ((0, h.isGuildSticker)(t)) {
                                var n, i;
                                return null !== (i = null === (n = m.default.getStickersByGuildId(t.guild_id)) || void 0 === n ? void 0 : n.some(e => e.id === t.id)) && void 0 !== i && i && (0, k.getStickerSendability)(t, l, e) !== k.StickerSendability.NONSENDABLE
                            }
                            if ((0, h.isStandardSticker)(t)) return r.some(e => e.id === t.pack_id)
                        })) && void 0 !== n ? n : []
                    };
                return [u, c, ...a, ...i]
            }, [r, t, s, a, l, e])
        },
        M = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = (0, i.useStateFromStores)([m.default], () => m.default.getStickerById(e.id)),
                [s, l] = n.useState(!0),
                [a, u] = n.useState(!1),
                c = (0, h.isGuildSticker)(e) || (0, h.isStandardSticker)(e);
            return (n.useEffect(() => {
                let n = async () => {
                    if (t && !c && null == r && s && !a) {
                        l(!1);
                        try {
                            await (0, p.fetchSticker)(e.id)
                        } catch {}
                        u(!0)
                    }
                };
                n()
            }, [t]), c) ? [e, a] : [null != r ? r : null, a]
        },
        j = e => {
            let t = F(e);
            return n.useMemo(() => t.filter(e => e.type === E.StickerCategoryTypes.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t])
        }
}