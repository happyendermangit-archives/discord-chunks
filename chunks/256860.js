function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        useFetchStickerPack: function() {
            return C
        },
        useShouldAnimateSticker: function() {
            return v
        },
        useStickersGrid: function() {
            return T
        },
        useHasSendableSticker: function() {
            return R
        },
        useFetchStickerPacks: function() {
            return _
        },
        useFavoriteStickerIds: function() {
            return L
        },
        useFavoriteStickers: function() {
            return N
        },
        useLatestFrecentStickers: function() {
            return M
        },
        useStickerForRenderableSticker: function() {
            return P
        },
        useFilteredStickerPackCategories: function() {
            return w
        }
    }), r("424973"), r("222007"), r("843762");
    var i = r("884691"),
        n = r("446674"),
        s = r("817963"),
        a = r("845579"),
        l = r("42507"),
        c = r("305961"),
        u = r("162771"),
        d = r("677099"),
        o = r("697218"),
        f = r("427459"),
        S = r("991170"),
        k = r("866353"),
        E = r("467094"),
        p = r("865372"),
        I = r("364685"),
        h = r("161585"),
        m = r("24373"),
        y = r("49111"),
        g = r("782340");
    let C = e => {
            _();
            let t = (0, n.useStateFromStores)([I.default], () => I.default.hasLoadedStickerPacks);
            i.useEffect(() => {
                t && null == I.default.getStickerPack(e) && (0, E.fetchStickerPack)(e)
            }, [e, t])
        },
        v = e => {
            let t = a.AnimateStickers.useSetting();
            return (0, m.shouldAnimateSticker)(t, e)
        },
        T = e => {
            let {
                collapsedStickersCategories: t,
                filteredStickers: r,
                listPaddingRight: n = 0,
                listWidth: a = 0,
                stickerNodeMargin: l = 0,
                stickerNodeWidth: d,
                stickersCategories: o
            } = e;
            return i.useMemo(() => {
                let e = Math.floor((a - n + l) / (d + l)),
                    i = Math.floor(Math.max(l, (a - n - d * e) / (e - 1))),
                    S = [],
                    k = [],
                    E = [],
                    p = 0,
                    I = 0,
                    y = 0;
                if (0 !== a) {
                    let i = function(t, r) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            n = (0, m.isGuildSticker)(t[0]) ? c.default.getGuild(t[0].guild_id) : void 0,
                            {
                                canCreateExpressions: a
                            } = (0, s.getManageResourcePermissions)(n),
                            l = u.default.getGuildId(),
                            d = o.findIndex(e => e.type === h.StickerCategoryTypes.FAVORITE),
                            C = o.findIndex(e => e.type === h.StickerCategoryTypes.RECENT),
                            v = t.length;
                        null != n && l === n.id && a && t.length < (0, f.getTotalStickerCountForTier)(n.premiumTier) && v++;
                        let T = Math.ceil(v / e);
                        k[I] = i ? 0 : T;
                        for (let s = 0; s < T; s++) {
                            let a = s * e,
                                l = a + e,
                                c = t.slice(a, l).map((e, t) => ({
                                    type: h.StickerGridItemTypes.STICKER,
                                    sticker: e,
                                    packId: (0, m.isStandardSticker)(e) ? e.pack_id : "TODO - fix",
                                    gridSectionIndex: I,
                                    rowIndex: p,
                                    columnIndex: t,
                                    visibleRowIndex: y,
                                    category: r
                                }));
                            I > C && I > d && null != n && v > t.length && c.push({
                                type: h.StickerGridItemTypes.CREATE_STICKER,
                                guild_id: n.id,
                                name: g.default.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
                                gridSectionIndex: I,
                                rowIndex: p,
                                columnIndex: c.length,
                                visibleRowIndex: y
                            }), !i && (y++, E.push(c), S.push(c.length)), p++
                        }
                        I++
                    };
                    if (null == r)
                        for (let e of o) e.stickers.length > 0 ? (p++, i(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === h.StickerCategoryTypes.EMPTY_GUILD_UPSELL && (k[I] = 0, I++);
                    else r.sendable.length > 0 && i(r.sendable, h.StickerCategoryTypes.SEARCH_RESULTS), r.sendableWithPremium.length > 0 && i(r.sendableWithPremium, h.StickerCategoryTypes.SEARCH_RESULTS)
                }
                return {
                    rowCount: p,
                    rowCountBySection: k,
                    stickersGrid: E,
                    gutterWidth: i,
                    columnCounts: S
                }
            }, [t, r, n, a, l, d, o])
        },
        R = e => {
            let t = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser());
            return (0, n.useStateFromStores)([I.default], () => {
                let r = I.default.getAllStickersIterator();
                for (let i of r)
                    if ((0, k.isSendableSticker)(i, t, e)) return !0;
                return !1
            }, [t, e])
        },
        _ = () => {
            i.useEffect(() => {
                (0, E.fetchStickerPacks)()
            }, [])
        },
        A = e => {
            let t = (0, n.useStateFromStores)([I.default], () => I.default.getAllGuildStickers()),
                r = (0, n.useStateFromStoresArray)([d.default, c.default], () => {
                    let e = d.default.getFlattenedGuildIds(),
                        t = [];
                    return e.forEach(e => {
                        let r = c.default.getGuild(e);
                        null != r && t.push(r)
                    }), t
                }, []),
                a = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser());
            return i.useMemo(() => {
                let i = [];
                for (let {
                        name: e,
                        id: n
                    }
                    of r) {
                    let r = t.get(n);
                    null != r && 0 !== r.length && i.push({
                        type: h.StickerCategoryTypes.GUILD,
                        id: n,
                        name: e,
                        stickers: r
                    })
                }
                if ((null == e ? void 0 : e.getGuildId()) != null) {
                    let t = c.default.getGuild(e.getGuildId()),
                        {
                            canManageAllExpressions: r
                        } = (0, s.getManageResourcePermissions)(t),
                        n = i.findIndex(t => t.id === e.getGuildId());
                    n >= 1 ? i.unshift(i.splice(n, 1)[0]) : -1 === n && null != t && r && i.unshift({
                        type: h.StickerCategoryTypes.EMPTY_GUILD_UPSELL,
                        id: t.id,
                        name: t.name,
                        stickers: []
                    }), null != a && !S.default.can({
                        permission: y.Permissions.USE_EXTERNAL_EMOJIS,
                        user: a,
                        context: e
                    }) && (i = i.filter(t => t.id === e.getGuildId()))
                }
                return i
            }, [t, r, a, e])
        },
        x = [];

    function L() {
        var e, t;
        let r = (0, l.useFrecencySettings)();
        return null !== (t = null === (e = r.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : x
    }

    function N() {
        let e = L(),
            t = (0, n.useStateFromStoresArray)([I.default], () => e.map(e => I.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
        return t
    }

    function M() {
        let e = function() {
                var e, t;
                let r = (0, l.useFrecencySettings)(),
                    i = x;
                return (null == r ? void 0 : null === (e = r.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (i = Object.keys(null == r ? void 0 : null === (t = r.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), i
            }(),
            t = (0, n.useStateFromStoresArray)([I.default], () => e.map(e => I.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
        return t
    }
    let F = e => {
            let t = N(),
                {
                    packs: r,
                    frequentlyUsedStickers: s
                } = (0, n.useStateFromStoresObject)([I.default, p.default], () => ({
                    packs: I.default.getPremiumPacks(),
                    frequentlyUsedStickers: p.default.stickerFrecencyWithoutFetchingLatest.frequently
                }), []),
                a = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                l = A(e);
            return i.useMemo(() => {
                var i;
                let n = r.map(m.createStickerPackCategory),
                    c = {
                        type: h.StickerCategoryTypes.FAVORITE,
                        id: h.StickerCategoryTypes.FAVORITE,
                        name: g.default.Messages.CATEGORY_FAVORITE,
                        stickers: t
                    },
                    u = {
                        type: h.StickerCategoryTypes.RECENT,
                        id: h.StickerCategoryTypes.RECENT,
                        name: g.default.Messages.STICKER_CATEGORY_RECENT,
                        stickers: null !== (i = null == s ? void 0 : s.filter(t => {
                            if ((0, m.isGuildSticker)(t)) {
                                var i, n;
                                return null !== (n = null === (i = I.default.getStickersByGuildId(t.guild_id)) || void 0 === i ? void 0 : i.some(e => e.id === t.id)) && void 0 !== n && n && (0, k.getStickerSendability)(t, a, e) !== k.StickerSendability.NONSENDABLE
                            }
                            if ((0, m.isStandardSticker)(t)) return r.some(e => e.id === t.pack_id)
                        })) && void 0 !== i ? i : []
                    };
                return [c, u, ...l, ...n]
            }, [r, t, s, l, a, e])
        },
        P = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = (0, n.useStateFromStores)([I.default], () => I.default.getStickerById(e.id)),
                [s, a] = i.useState(!0),
                [l, c] = i.useState(!1),
                u = (0, m.isGuildSticker)(e) || (0, m.isStandardSticker)(e);
            return (i.useEffect(() => {
                let i = async () => {
                    if (t && !u && null == r && s && !l) {
                        a(!1);
                        try {
                            await (0, E.fetchSticker)(e.id)
                        } catch {}
                        c(!0)
                    }
                };
                i()
            }, [t]), u) ? [e, l] : [null != r ? r : null, l]
        },
        w = e => {
            let t = F(e);
            return i.useMemo(() => t.filter(e => e.type === h.StickerCategoryTypes.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t])
        }
}