function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_COLLECTIBLES_UPSELL_HEIGHT: function() {
            return M
        },
        default: function() {
            return P
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
        m = n("685665"),
        p = n("606292"),
        h = n("688318"),
        x = n("21526"),
        E = n("853987"),
        y = n("491232"),
        g = n("845962"),
        S = n("501768"),
        C = n("697218"),
        T = n("945330"),
        _ = n("719923"),
        I = n("627601"),
        v = n("994428"),
        A = n("782340"),
        N = n("154477"),
        R = n("604689");

    function O(e) {
        let {
            onClick: t
        } = e;
        return (0, i.jsx)(u.Clickable, {
            className: N.closeButton,
            onClick: t,
            "aria-label": A.default.Messages.DISMISS,
            children: (0, i.jsx)(T.default, {
                className: N.closeIcon,
                width: 18,
                height: 18
            })
        })
    }
    let M = 76,
        k = e => (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            tag: "span",
            className: N.ctaLink,
            children: e
        }),
        L = e => {
            let {
                user: t,
                onClick: n
            } = e, {
                avatarDecorationSrc: l
            } = (0, h.default)({
                user: t,
                size: (0, p.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_48)
            });
            return (0, i.jsx)(u.Clickable, {
                className: N.avatarButton,
                onClick: n,
                "aria-label": A.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                children: (0, i.jsx)(u.Avatar, {
                    src: R,
                    avatarDecoration: l,
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
            isInSidebar: T = !1,
            canShowAvatarDecorationUpsell: R = !1,
            canShowProfileEffectUpsell: P = !1,
            upsellSource: b
        } = e, {
            analyticsLocations: j
        } = (0, m.default)(f.default.COLLECTIBLES_USER_POPOUT_UPSELL), U = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), {
            ref: D,
            height: w
        } = (0, d.default)(), F = l.useMemo(() => ({
            top: "-".concat((null != w ? w : M) + 6, "px")
        }), [w]), G = (0, o.useStateFromStores)([C.default], () => C.default.getCurrentUser()), H = _.default.canUseCollectibles(G), {
            setUpsellSource: B,
            reset: V
        } = (0, I.useUserPopoutCollectiblesUpsellStore)();
        l.useEffect(() => (B(b), () => {
            V()
        }), [B, b, V]);
        let K = (0, o.useStateFromStores)([g.default], () => g.default.getProfileEffectById(null == a ? void 0 : a.profileEffectId)),
            W = null != K;
        l.useEffect(() => {
            !W && (0, S.getOrFetchProfileEffects)(!0)
        }, [W]);
        let [Y, z] = (0, o.useStateFromStoresArray)([E.default], () => {
            var e;
            return [(0, y.isPremiumCollectiblesProduct)(E.default.getProduct(null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId)), (0, y.isPremiumCollectiblesProduct)(E.default.getProduct(null == K ? void 0 : K.skuId))]
        }), Q = l.useCallback(() => {
            var e, t, i, l;
            null == h || h(v.ContentDismissActionType.PRIMARY), null == p || p(), (0, x.openCollectiblesShop)({
                analyticsLocations: j,
                analyticsSource: f.default.COLLECTIBLES_USER_POPOUT_UPSELL,
                initialProductSkuId: Y ? null !== (i = null == K ? void 0 : K.skuId) && void 0 !== i ? i : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId : null !== (l = null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId) && void 0 !== l ? l : null == K ? void 0 : K.skuId
            })
        }, [h, p, j, null == K ? void 0 : K.skuId, null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId, Y]), Z = l.useCallback(() => {
            null == h || h(v.ContentDismissActionType.DISMISS)
        }, [h]);
        if (!R && !P) return null;
        let q = (0, r.match)([R, P]).with([!0, !0], () => Y && z && H ? A.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NITRO.format({
            openShop: k
        }) : Y && z ? A.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NON_NITRO.format({
            openShop: k
        }) : A.default.Messages.COMBINED_COLLECTIBLES_SOCIAL_UPSELL.format({
            openShop: k
        })).with([!0, !1], () => Y && H ? A.default.Messages.STARTER_AVATAR_DECORATIONS_SOCIAL_UPSELL_NITRO.format({
            openShop: k
        }) : A.default.Messages.AVATAR_DECORATIONS_SOCIAL_UPSELL.format({
            openShop: k
        })).with([!1, !0], () => z && H ? A.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NITRO.format({
            openShop: k
        }) : (z && A.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
            openShop: k
        }), A.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
            openShop: k
        }))).otherwise(() => null);
        return (0, i.jsx)("div", {
            style: F,
            className: s(N.containerWrapper, {
                [N.animation]: !U,
                [N.inSidebar]: T
            }),
            ref: D,
            children: (0, i.jsxs)("div", {
                className: N.container,
                children: [R && (0, i.jsx)(L, {
                    user: n,
                    onClick: Q
                }), (0, i.jsx)(u.Clickable, {
                    className: R ? N.contentWithAvatar : N.content,
                    onClick: Q,
                    "aria-label": A.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        tag: "span",
                        children: q
                    })
                }), (0, i.jsx)("div", {
                    className: N.buttons,
                    children: (0, i.jsx)(O, {
                        onClick: Z
                    })
                })]
            })
        })
    }
}