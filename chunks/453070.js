function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFavoriteStickerIds: function() {
            return v
        },
        useFavoriteStickers: function() {
            return M
        },
        useFetchStickerPack: function() {
            return p
        },
        useFetchStickerPacks: function() {
            return g
        },
        useFilteredStickerPackCategories: function() {
            return b
        },
        useHasSendableSticker: function() {
            return C
        },
        useLatestFrecentStickers: function() {
            return y
        },
        useShouldAnimateSticker: function() {
            return O
        },
        useStickerForRenderableSticker: function() {
            return U
        },
        useStickersGrid: function() {
            return R
        }
    }), n("653041"), n("47120"), n("733860");
    var i = n("470079"),
        r = n("442837"),
        s = n("889161"),
        a = n("695346"),
        o = n("516373"),
        l = n("430824"),
        u = n("914010"),
        d = n("771845"),
        _ = n("594174"),
        c = n("267642"),
        E = n("700785"),
        I = n("285651"),
        T = n("268350"),
        f = n("822179"),
        S = n("926491"),
        h = n("373228"),
        A = n("378233"),
        m = n("981631"),
        N = n("689938");
    let p = e => {
            g();
            let t = (0, r.useStateFromStores)([S.default], () => S.default.hasLoadedStickerPacks);
            i.useEffect(() => {
                t && null == S.default.getStickerPack(e) && (0, T.fetchStickerPack)(e)
            }, [e, t])
        },
        O = e => {
            let t = a.AnimateStickers.useSetting();
            return (0, A.shouldAnimateSticker)(t, e)
        },
        R = e => {
            let {
                collapsedStickersCategories: t,
                filteredStickers: n,
                listPaddingRight: r = 0,
                listWidth: a = 0,
                stickerNodeMargin: o = 0,
                stickerNodeWidth: d,
                stickersCategories: _
            } = e;
            return i.useMemo(() => {
                let e = Math.floor((a - r + o) / (d + o)),
                    i = Math.floor(Math.max(o, (a - r - d * e) / (e - 1))),
                    E = [],
                    I = [],
                    T = [],
                    f = 0,
                    S = 0,
                    m = 0;
                if (0 !== a) {
                    let i = function(t, n) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = (0, A.isGuildSticker)(t[0]) ? l.default.getGuild(t[0].guild_id) : void 0,
                            {
                                canCreateExpressions: a
                            } = (0, s.getManageResourcePermissions)(r),
                            o = u.default.getGuildId(),
                            d = _.findIndex(e => e.type === h.StickerCategoryTypes.FAVORITE),
                            p = _.findIndex(e => e.type === h.StickerCategoryTypes.RECENT),
                            O = t.length;
                        null != r && o === r.id && a && t.length < (0, c.getTotalStickerCountForTier)(r.premiumTier) && O++;
                        let R = Math.ceil(O / e);
                        I[S] = i ? 0 : R;
                        for (let s = 0; s < R; s++) {
                            let a = s * e,
                                o = a + e,
                                l = t.slice(a, o).map((e, t) => ({
                                    type: h.StickerGridItemTypes.STICKER,
                                    sticker: e,
                                    packId: (0, A.isStandardSticker)(e) ? e.pack_id : "TODO - fix",
                                    gridSectionIndex: S,
                                    rowIndex: f,
                                    columnIndex: t,
                                    visibleRowIndex: m,
                                    category: n
                                }));
                            S > p && S > d && null != r && O > t.length && l.push({
                                type: h.StickerGridItemTypes.CREATE_STICKER,
                                guild_id: r.id,
                                name: N.default.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
                                gridSectionIndex: S,
                                rowIndex: f,
                                columnIndex: l.length,
                                visibleRowIndex: m
                            }), !i && (m++, T.push(l), E.push(l.length)), f++
                        }
                        S++
                    };
                    if (null == n)
                        for (let e of _) e.stickers.length > 0 ? (f++, i(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === h.StickerCategoryTypes.EMPTY_GUILD_UPSELL && (I[S] = 0, S++);
                    else n.sendable.length > 0 && i(n.sendable, h.StickerCategoryTypes.SEARCH_RESULTS), n.sendableWithPremium.length > 0 && i(n.sendableWithPremium, h.StickerCategoryTypes.SEARCH_RESULTS)
                }
                return {
                    rowCount: f,
                    rowCountBySection: I,
                    stickersGrid: T,
                    gutterWidth: i,
                    columnCounts: E
                }
            }, [t, n, r, a, o, d, _])
        },
        C = e => {
            let t = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser());
            return (0, r.useStateFromStores)([S.default], () => {
                for (let n of S.default.getAllStickersIterator())
                    if ((0, I.isSendableSticker)(n, t, e)) return !0;
                return !1
            }, [t, e])
        },
        g = () => {
            i.useEffect(() => {
                (0, T.fetchStickerPacks)()
            }, [])
        },
        L = e => {
            let t = (0, r.useStateFromStores)([S.default], () => S.default.getAllGuildStickers()),
                n = (0, r.useStateFromStoresArray)([d.default, l.default], () => {
                    let e = d.default.getFlattenedGuildIds(),
                        t = [];
                    return e.forEach(e => {
                        let n = l.default.getGuild(e);
                        null != n && t.push(n)
                    }), t
                }, []),
                a = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser());
            return i.useMemo(() => {
                let i = [];
                for (let {
                        name: e,
                        id: r
                    }
                    of n) {
                    let n = t.get(r);
                    null != n && 0 !== n.length && i.push({
                        type: h.StickerCategoryTypes.GUILD,
                        id: r,
                        name: e,
                        stickers: n
                    })
                }
                if ((null == e ? void 0 : e.getGuildId()) != null) {
                    let t = l.default.getGuild(e.getGuildId()),
                        {
                            canManageAllExpressions: n
                        } = (0, s.getManageResourcePermissions)(t),
                        r = i.findIndex(t => t.id === e.getGuildId());
                    r >= 1 ? i.unshift(i.splice(r, 1)[0]) : -1 === r && null != t && n && i.unshift({
                        type: h.StickerCategoryTypes.EMPTY_GUILD_UPSELL,
                        id: t.id,
                        name: t.name,
                        stickers: []
                    }), null != a && !E.can({
                        permission: m.Permissions.USE_EXTERNAL_EMOJIS,
                        user: a,
                        context: e
                    }) && (i = i.filter(t => t.id === e.getGuildId()))
                }
                return i
            }, [t, n, a, e])
        },
        D = [];

    function v() {
        var e, t;
        return null !== (t = null === (e = (0, o.useFrecencySettings)().favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : D
    }

    function M() {
        let e = v();
        return (0, r.useStateFromStoresArray)([S.default], () => e.map(e => S.default.getStickerById(e)).filter(e => void 0 !== e), [e])
    }

    function y() {
        let e = function() {
            var e, t;
            let n = (0, o.useFrecencySettings)(),
                i = D;
            return (null == n ? void 0 : null === (e = n.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (i = Object.keys(null == n ? void 0 : null === (t = n.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), i
        }();
        return (0, r.useStateFromStoresArray)([S.default], () => e.map(e => S.default.getStickerById(e)).filter(e => void 0 !== e), [e])
    }
    let P = e => {
            let t = M(),
                {
                    packs: n,
                    frequentlyUsedStickers: s
                } = (0, r.useStateFromStoresObject)([S.default, f.default], () => ({
                    packs: S.default.getPremiumPacks(),
                    frequentlyUsedStickers: f.default.stickerFrecencyWithoutFetchingLatest.frequently
                }), []),
                a = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser()),
                o = L(e);
            return i.useMemo(() => {
                var i;
                let r = n.map(A.createStickerPackCategory),
                    l = {
                        type: h.StickerCategoryTypes.FAVORITE,
                        id: h.StickerCategoryTypes.FAVORITE,
                        name: N.default.Messages.CATEGORY_FAVORITE,
                        stickers: t
                    };
                return [l, {
                    type: h.StickerCategoryTypes.RECENT,
                    id: h.StickerCategoryTypes.RECENT,
                    name: N.default.Messages.STICKER_CATEGORY_RECENT,
                    stickers: null !== (i = null == s ? void 0 : s.filter(t => {
                        if ((0, A.isGuildSticker)(t)) {
                            var i, r;
                            return null !== (r = null === (i = S.default.getStickersByGuildId(t.guild_id)) || void 0 === i ? void 0 : i.some(e => e.id === t.id)) && void 0 !== r && r && (0, I.getStickerSendability)(t, a, e) !== I.StickerSendability.NONSENDABLE
                        }
                        if ((0, A.isStandardSticker)(t)) return n.some(e => e.id === t.pack_id)
                    })) && void 0 !== i ? i : []
                }, ...o, ...r]
            }, [n, t, s, o, a, e])
        },
        U = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = (0, r.useStateFromStores)([S.default], () => S.default.getStickerById(e.id)),
                [s, a] = i.useState(!0),
                [o, l] = i.useState(!1),
                u = (0, A.isGuildSticker)(e) || (0, A.isStandardSticker)(e);
            return (i.useEffect(() => {
                (async () => {
                    if (t && !u && null == n && s && !o) {
                        a(!1);
                        try {
                            await (0, T.fetchSticker)(e.id)
                        } catch {}
                        l(!0)
                    }
                })()
            }, [t]), u) ? [e, o] : [null != n ? n : null, o]
        },
        b = e => {
            let t = P(e);
            return i.useMemo(() => t.filter(e => e.type === h.StickerCategoryTypes.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t])
        }
}