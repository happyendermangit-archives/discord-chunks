function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_COLLECTIBLES_UPSELL_HEIGHT: function() {
            return M
        }
    }), n("47120"), n("627341");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("278074"),
        l = n("399606"),
        u = n("481060"),
        d = n("393238"),
        _ = n("607070"),
        c = n("100527"),
        E = n("906732"),
        I = n("1585"),
        T = n("125988"),
        f = n("335131"),
        S = n("597688"),
        h = n("884697"),
        A = n("25251"),
        m = n("996678"),
        N = n("594174"),
        O = n("465670"),
        p = n("74538"),
        R = n("436478"),
        C = n("921944"),
        g = n("689938"),
        L = n("617538"),
        D = n("174492");

    function v(e) {
        let {
            onClick: t
        } = e;
        return (0, i.jsx)(u.Clickable, {
            className: L.closeButton,
            onClick: t,
            "aria-label": g.default.Messages.DISMISS,
            children: (0, i.jsx)(O.default, {
                className: L.closeIcon,
                width: 18,
                height: 18
            })
        })
    }
    let M = 76,
        y = e => (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            tag: "span",
            className: L.ctaLink,
            children: e
        }),
        P = e => {
            let {
                user: t,
                onClick: n
            } = e, {
                avatarDecorationSrc: r
            } = (0, T.default)({
                user: t,
                size: (0, I.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_48)
            });
            return (0, i.jsx)(u.Clickable, {
                className: L.avatarButton,
                onClick: n,
                "aria-label": g.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                children: (0, i.jsx)(u.Avatar, {
                    src: D,
                    avatarDecoration: r,
                    size: u.AvatarSizes.SIZE_48,
                    "aria-hidden": !0
                })
            })
        };
    t.default = e => {
        var t;
        let {
            user: n,
            displayProfile: s,
            onClose: I,
            onDismiss: T,
            isInSidebar: O = !1,
            canShowAvatarDecorationUpsell: D = !1,
            canShowProfileEffectUpsell: U = !1,
            upsellSource: b
        } = e, {
            analyticsLocations: G
        } = (0, E.default)(c.default.COLLECTIBLES_USER_POPOUT_UPSELL), w = (0, l.useStateFromStores)([_.default], () => _.default.useReducedMotion), {
            ref: k,
            height: B
        } = (0, d.default)(), V = r.useMemo(() => ({
            top: "-".concat((null != B ? B : M) + 6, "px")
        }), [B]), F = (0, l.useStateFromStores)([N.default], () => N.default.getCurrentUser()), x = p.default.canUseCollectibles(F), {
            setUpsellSource: H,
            reset: Y
        } = (0, R.useUserPopoutCollectiblesUpsellStore)();
        r.useEffect(() => (H(b), () => {
            Y()
        }), [H, b, Y]);
        let j = (0, l.useStateFromStores)([A.default], () => A.default.getProfileEffectById(null == s ? void 0 : s.profileEffectId)),
            W = null != j;
        r.useEffect(() => {
            !W && (0, m.getOrFetchProfileEffects)(!0)
        }, [W]);
        let [K, z] = (0, l.useStateFromStoresArray)([S.default], () => {
            var e;
            return [(0, h.isPremiumCollectiblesProduct)(S.default.getProduct(null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId)), (0, h.isPremiumCollectiblesProduct)(S.default.getProduct(null == j ? void 0 : j.skuId))]
        }), X = r.useCallback(() => {
            var e, t, i, r;
            null == T || T(C.ContentDismissActionType.PRIMARY), null == I || I(), (0, f.openCollectiblesShop)({
                analyticsLocations: G,
                analyticsSource: c.default.COLLECTIBLES_USER_POPOUT_UPSELL,
                initialProductSkuId: K ? null !== (i = null == j ? void 0 : j.skuId) && void 0 !== i ? i : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId : null !== (r = null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId) && void 0 !== r ? r : null == j ? void 0 : j.skuId
            })
        }, [T, I, G, null == j ? void 0 : j.skuId, null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId, K]), Q = r.useCallback(() => {
            null == T || T(C.ContentDismissActionType.DISMISS)
        }, [T]);
        if (!D && !U) return null;
        let q = (0, o.match)([D, U]).with([!0, !0], () => K && z && x ? g.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NITRO.format({
            openShop: y
        }) : K && z ? g.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NON_NITRO.format({
            openShop: y
        }) : g.default.Messages.COMBINED_COLLECTIBLES_SOCIAL_UPSELL.format({
            openShop: y
        })).with([!0, !1], () => K && x ? g.default.Messages.STARTER_AVATAR_DECORATIONS_SOCIAL_UPSELL_NITRO.format({
            openShop: y
        }) : g.default.Messages.AVATAR_DECORATIONS_SOCIAL_UPSELL.format({
            openShop: y
        })).with([!1, !0], () => z && x ? g.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NITRO.format({
            openShop: y
        }) : (z && g.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
            openShop: y
        }), g.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
            openShop: y
        }))).otherwise(() => null);
        return (0, i.jsx)("div", {
            style: V,
            className: a()(L.containerWrapper, {
                [L.animation]: !w,
                [L.inSidebar]: O
            }),
            ref: k,
            children: (0, i.jsxs)("div", {
                className: L.container,
                children: [D && (0, i.jsx)(P, {
                    user: n,
                    onClick: X
                }), (0, i.jsx)(u.Clickable, {
                    className: D ? L.contentWithAvatar : L.content,
                    onClick: X,
                    "aria-label": g.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        tag: "span",
                        children: q
                    })
                }), (0, i.jsx)("div", {
                    className: L.buttons,
                    children: (0, i.jsx)(v, {
                        onClick: Q
                    })
                })]
            })
        })
    }
}