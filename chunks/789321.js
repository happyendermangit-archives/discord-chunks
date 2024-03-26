function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_COLLECTIBLES_UPSELL_HEIGHT: function() {
            return O
        },
        default: function() {
            return L
        }
    }), n("222007"), n("794252");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("506838"),
        o = n("65597"),
        u = n("77078"),
        d = n("731898"),
        c = n("206230"),
        f = n("812204"),
        p = n("685665"),
        m = n("606292"),
        h = n("688318"),
        x = n("21526"),
        E = n("853987"),
        y = n("491232"),
        g = n("845962"),
        S = n("697218"),
        C = n("945330"),
        _ = n("719923"),
        T = n("627601"),
        I = n("994428"),
        v = n("782340"),
        N = n("154477"),
        A = n("604689");

    function R(e) {
        let {
            onClick: t
        } = e;
        return (0, i.jsx)(u.Clickable, {
            className: N.closeButton,
            onClick: t,
            "aria-label": v.default.Messages.DISMISS,
            children: (0, i.jsx)(C.default, {
                className: N.closeIcon,
                width: 18,
                height: 18
            })
        })
    }
    let O = 76,
        M = e => (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            tag: "span",
            className: N.ctaLink,
            children: e
        }),
        k = e => {
            let {
                user: t,
                onClick: n
            } = e, {
                avatarDecorationSrc: l
            } = (0, h.default)({
                user: t,
                size: (0, m.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_48)
            });
            return (0, i.jsx)(u.Clickable, {
                className: N.avatarButton,
                onClick: n,
                "aria-label": v.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                children: (0, i.jsx)(u.Avatar, {
                    src: A,
                    avatarDecoration: l,
                    size: u.AvatarSizes.SIZE_48,
                    "aria-hidden": !0
                })
            })
        };
    var L = e => {
        var t;
        let {
            user: n,
            displayProfile: a,
            onClose: m,
            onDismiss: h,
            isInSidebar: C = !1,
            canShowAvatarDecorationUpsell: A = !1,
            canShowProfileEffectUpsell: L = !1,
            upsellSource: P
        } = e, {
            analyticsLocations: b
        } = (0, p.default)(f.default.COLLECTIBLES_USER_POPOUT_UPSELL), j = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), {
            ref: U,
            height: D
        } = (0, d.default)(), w = l.useMemo(() => ({
            top: "-".concat((null != D ? D : O) + 6, "px")
        }), [D]), F = (0, o.useStateFromStores)([S.default], () => S.default.getCurrentUser()), G = _.default.canUseCollectibles(F), {
            setUpsellSource: H,
            reset: B
        } = (0, T.useUserPopoutCollectiblesUpsellStore)();
        l.useEffect(() => (H(P), () => {
            B()
        }), [H, P, B]);
        let V = (0, o.useStateFromStores)([g.default], () => g.default.getProfileEffectById(null == a ? void 0 : a.profileEffectId)),
            [K, W] = (0, o.useStateFromStoresArray)([E.default], () => {
                var e;
                return [(0, y.isPremiumCollectiblesProduct)(E.default.getProduct(null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId)), (0, y.isPremiumCollectiblesProduct)(E.default.getProduct(null == V ? void 0 : V.skuId))]
            }),
            Y = l.useCallback(() => {
                var e, t, i, l;
                null == h || h(I.ContentDismissActionType.PRIMARY), null == m || m(), (0, x.openCollectiblesShop)({
                    analyticsLocations: b,
                    analyticsSource: f.default.COLLECTIBLES_USER_POPOUT_UPSELL,
                    initialProductSkuId: K ? null !== (i = null == V ? void 0 : V.skuId) && void 0 !== i ? i : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId : null !== (l = null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId) && void 0 !== l ? l : null == V ? void 0 : V.skuId
                })
            }, [h, m, b, null == V ? void 0 : V.skuId, null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId, K]),
            z = l.useCallback(() => {
                null == h || h(I.ContentDismissActionType.DISMISS)
            }, [h]);
        if (!A && !L) return null;
        let Z = (0, r.match)([A, L]).with([!0, !0], () => K && W && G ? v.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NITRO.format({
            openShop: M
        }) : K && W ? v.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NON_NITRO.format({
            openShop: M
        }) : v.default.Messages.COMBINED_COLLECTIBLES_SOCIAL_UPSELL.format({
            openShop: M
        })).with([!0, !1], () => K && G ? v.default.Messages.STARTER_AVATAR_DECORATIONS_SOCIAL_UPSELL_NITRO.format({
            openShop: M
        }) : v.default.Messages.AVATAR_DECORATIONS_SOCIAL_UPSELL.format({
            openShop: M
        })).with([!1, !0], () => W && G ? v.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NITRO.format({
            openShop: M
        }) : (W && v.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
            openShop: M
        }), v.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
            openShop: M
        }))).otherwise(() => null);
        return (0, i.jsx)("div", {
            style: w,
            className: s(N.containerWrapper, {
                [N.animation]: !j,
                [N.inSidebar]: C
            }),
            ref: U,
            children: (0, i.jsxs)("div", {
                className: N.container,
                children: [A && (0, i.jsx)(k, {
                    user: n,
                    onClick: Y
                }), (0, i.jsx)(u.Clickable, {
                    className: A ? N.contentWithAvatar : N.content,
                    onClick: Y,
                    "aria-label": v.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        tag: "span",
                        children: Z
                    })
                }), (0, i.jsx)("div", {
                    className: N.buttons,
                    children: (0, i.jsx)(R, {
                        onClick: z
                    })
                })]
            })
        })
    }
}