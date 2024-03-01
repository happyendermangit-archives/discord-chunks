function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_COLLECTIBLES_UPSELL_HEIGHT: function() {
            return R
        },
        default: function() {
            return P
        }
    }), n("222007"), n("794252");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("506838"),
        o = n("65597"),
        u = n("77078"),
        d = n("731898"),
        c = n("206230"),
        f = n("812204"),
        m = n("685665"),
        p = n("606292"),
        h = n("688318"),
        E = n("21526"),
        g = n("853987"),
        C = n("491232"),
        S = n("845962"),
        T = n("697218"),
        v = n("945330"),
        I = n("719923"),
        _ = n("627601"),
        N = n("994428"),
        A = n("782340"),
        x = n("154477"),
        y = n("604689");

    function O(e) {
        let {
            onClick: t
        } = e;
        return (0, l.jsx)(u.Clickable, {
            className: x.closeButton,
            onClick: t,
            "aria-label": A.default.Messages.DISMISS,
            children: (0, l.jsx)(v.default, {
                className: x.closeIcon,
                width: 18,
                height: 18
            })
        })
    }
    let R = 76,
        M = e => (0, l.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            tag: "span",
            className: x.ctaLink,
            children: e
        }),
        L = e => {
            let {
                user: t,
                onClick: n
            } = e, {
                avatarDecorationSrc: i
            } = (0, h.default)({
                user: t,
                size: (0, p.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_48)
            });
            return (0, l.jsx)(u.Clickable, {
                className: x.avatarButton,
                onClick: n,
                "aria-label": A.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                children: (0, l.jsx)(u.Avatar, {
                    src: y,
                    avatarDecoration: i,
                    size: u.AvatarSizes.SIZE_48,
                    "aria-hidden": !0
                })
            })
        };
    var P = e => {
        var t;
        let {
            user: n,
            displayProfile: a,
            onClose: p,
            onDismiss: h,
            isInSidebar: v = !1,
            canShowAvatarDecorationUpsell: y = !1,
            canShowProfileEffectUpsell: P = !1,
            upsellSource: b
        } = e, {
            analyticsLocations: j
        } = (0, m.default)(f.default.COLLECTIBLES_USER_POPOUT_UPSELL), U = (0, o.default)([c.default], () => c.default.useReducedMotion), {
            ref: D,
            height: k
        } = (0, d.default)(), w = i.useMemo(() => ({
            top: "-".concat((null != k ? k : R) + 6, "px")
        }), [k]), F = (0, o.default)([T.default], () => T.default.getCurrentUser()), G = I.default.canUseCollectibles(F), {
            setUpsellSource: B,
            reset: H
        } = (0, _.useUserPopoutCollectiblesUpsellStore)();
        i.useEffect(() => (B(b), () => {
            H()
        }), [B, b, H]);
        let V = (0, o.default)([S.default], () => S.default.getProfileEffectById(null == a ? void 0 : a.profileEffectId)),
            [K, W] = (0, o.useStateFromStoresArray)([g.default], () => {
                var e;
                return [(0, C.isPremiumCollectiblesProduct)(g.default.getProduct(null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId)), (0, C.isPremiumCollectiblesProduct)(g.default.getProduct(null == V ? void 0 : V.skuId))]
            }),
            Y = i.useCallback(() => {
                var e, t, l, i;
                null == h || h(N.ContentDismissActionType.PRIMARY), null == p || p(), (0, E.openCollectiblesShop)({
                    analyticsLocations: j,
                    analyticsSource: f.default.COLLECTIBLES_USER_POPOUT_UPSELL,
                    initialProductSkuId: K ? null !== (l = null == V ? void 0 : V.skuId) && void 0 !== l ? l : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId : null !== (i = null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId) && void 0 !== i ? i : null == V ? void 0 : V.skuId
                })
            }, [h, p, j, null == V ? void 0 : V.skuId, null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId, K]),
            z = i.useCallback(() => {
                null == h || h(N.ContentDismissActionType.DISMISS)
            }, [h]);
        if (!y && !P) return null;
        let Z = (0, r.match)([y, P]).with([!0, !0], () => K && W && G ? A.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NITRO.format({
            openShop: M
        }) : K && W ? A.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NON_NITRO.format({
            openShop: M
        }) : A.default.Messages.COMBINED_COLLECTIBLES_SOCIAL_UPSELL.format({
            openShop: M
        })).with([!0, !1], () => K && G ? A.default.Messages.STARTER_AVATAR_DECORATIONS_SOCIAL_UPSELL_NITRO.format({
            openShop: M
        }) : A.default.Messages.AVATAR_DECORATIONS_SOCIAL_UPSELL.format({
            openShop: M
        })).with([!1, !0], () => W && G ? A.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NITRO.format({
            openShop: M
        }) : (W && A.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
            openShop: M
        }), A.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
            openShop: M
        }))).otherwise(() => null);
        return (0, l.jsx)("div", {
            style: w,
            className: s(x.containerWrapper, {
                [x.animation]: !U,
                [x.inSidebar]: v
            }),
            ref: D,
            children: (0, l.jsxs)("div", {
                className: x.container,
                children: [y && (0, l.jsx)(L, {
                    user: n,
                    onClick: Y
                }), (0, l.jsx)(u.Clickable, {
                    className: y ? x.contentWithAvatar : x.content,
                    onClick: Y,
                    "aria-label": A.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                    children: (0, l.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        tag: "span",
                        children: Z
                    })
                }), (0, l.jsx)("div", {
                    className: x.buttons,
                    children: (0, l.jsx)(O, {
                        onClick: z
                    })
                })]
            })
        })
    }
}