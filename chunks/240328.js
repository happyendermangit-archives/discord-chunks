function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_COLLECTIBLES_UPSELL_HEIGHT: function() {
            return v
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
        A = n("731896"),
        m = n("594174"),
        N = n("465670"),
        O = n("74538"),
        p = n("436478"),
        R = n("921944"),
        C = n("689938"),
        g = n("617538"),
        L = n("174492");

    function D(e) {
        let {
            onClick: t
        } = e;
        return (0, i.jsx)(u.Clickable, {
            className: g.closeButton,
            onClick: t,
            "aria-label": C.default.Messages.DISMISS,
            children: (0, i.jsx)(N.default, {
                className: g.closeIcon,
                width: 18,
                height: 18
            })
        })
    }
    let v = 76,
        M = e => (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            tag: "span",
            className: g.ctaLink,
            children: e
        }),
        y = e => {
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
                className: g.avatarButton,
                onClick: n,
                "aria-label": C.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                children: (0, i.jsx)(u.Avatar, {
                    src: L,
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
            isInSidebar: N = !1,
            canShowAvatarDecorationUpsell: L = !1,
            canShowProfileEffectUpsell: P = !1,
            upsellSource: U
        } = e, {
            analyticsLocations: b
        } = (0, E.default)(c.default.COLLECTIBLES_USER_POPOUT_UPSELL), G = (0, l.useStateFromStores)([_.default], () => _.default.useReducedMotion), {
            ref: w,
            height: B
        } = (0, d.default)(), k = r.useMemo(() => ({
            top: "-".concat((null != B ? B : v) + 6, "px")
        }), [B]), V = (0, l.useStateFromStores)([m.default], () => m.default.getCurrentUser()), F = O.default.canUseCollectibles(V), {
            setUpsellSource: x,
            reset: H
        } = (0, p.useUserPopoutCollectiblesUpsellStore)();
        r.useEffect(() => (x(U), () => {
            H()
        }), [x, U, H]);
        let Y = (0, A.useProfileEffectPreset)(null == s ? void 0 : s.profileEffectId),
            [j, W] = (0, l.useStateFromStoresArray)([S.default], () => {
                var e;
                return [(0, h.isPremiumCollectiblesProduct)(S.default.getProduct(null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId)), (0, h.isPremiumCollectiblesProduct)(S.default.getProduct(null == Y ? void 0 : Y.skuId))]
            }),
            K = r.useCallback(() => {
                var e, t, i, r;
                null == T || T(R.ContentDismissActionType.PRIMARY), null == I || I(), (0, f.openCollectiblesShop)({
                    analyticsLocations: b,
                    analyticsSource: c.default.COLLECTIBLES_USER_POPOUT_UPSELL,
                    initialProductSkuId: j ? null !== (i = null == Y ? void 0 : Y.skuId) && void 0 !== i ? i : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId : null !== (r = null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId) && void 0 !== r ? r : null == Y ? void 0 : Y.skuId
                })
            }, [T, I, b, null == Y ? void 0 : Y.skuId, null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId, j]),
            z = r.useCallback(() => {
                null == T || T(R.ContentDismissActionType.DISMISS)
            }, [T]);
        if (!L && !P) return null;
        let X = (0, o.match)([L, P]).with([!0, !0], () => j && W && F ? C.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NITRO.format({
            openShop: M
        }) : j && W ? C.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NON_NITRO.format({
            openShop: M
        }) : C.default.Messages.COMBINED_COLLECTIBLES_SOCIAL_UPSELL.format({
            openShop: M
        })).with([!0, !1], () => j && F ? C.default.Messages.STARTER_AVATAR_DECORATIONS_SOCIAL_UPSELL_NITRO.format({
            openShop: M
        }) : C.default.Messages.AVATAR_DECORATIONS_SOCIAL_UPSELL.format({
            openShop: M
        })).with([!1, !0], () => W && F ? C.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NITRO.format({
            openShop: M
        }) : (W && C.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
            openShop: M
        }), C.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
            openShop: M
        }))).otherwise(() => null);
        return (0, i.jsx)("div", {
            style: k,
            className: a()(g.containerWrapper, {
                [g.animation]: !G,
                [g.inSidebar]: N
            }),
            ref: w,
            children: (0, i.jsxs)("div", {
                className: g.container,
                children: [L && (0, i.jsx)(y, {
                    user: n,
                    onClick: K
                }), (0, i.jsx)(u.Clickable, {
                    className: L ? g.contentWithAvatar : g.content,
                    onClick: K,
                    "aria-label": C.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        tag: "span",
                        children: X
                    })
                }), (0, i.jsx)("div", {
                    className: g.buttons,
                    children: (0, i.jsx)(D, {
                        onClick: z
                    })
                })]
            })
        })
    }
}