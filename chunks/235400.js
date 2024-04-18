function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return D
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("979554"),
        a = n("442837"),
        o = n("481060"),
        l = n("100527"),
        u = n("906732"),
        d = n("335131"),
        _ = n("884697"),
        c = n("449217"),
        E = n("223143"),
        I = n("311395"),
        T = n("197115"),
        f = n("166625"),
        S = n("594174"),
        h = n("626135"),
        A = n("74538"),
        m = n("864106"),
        N = n("240781"),
        p = n("818611"),
        O = n("981631"),
        R = n("474936"),
        C = n("689938"),
        g = n("995454");

    function L(e) {
        let {
            user: t,
            categories: n,
            purchases: s,
            analyticsLocations: a,
            onClose: u,
            initialSelectedDecoration: E,
            initialSelectedDecorationId: S,
            isTryItOutFlow: h,
            guild: O
        } = e, {
            pendingAvatarDecoration: L,
            setPendingAvatarDecoration: D,
            savedAvatarDecoration: v
        } = (0, f.default)({
            analyticsLocations: a,
            isTryItOut: h,
            guildId: null == O ? void 0 : O.id
        }), [M, y] = r.useState(() => {
            var e, t;
            if (null != E) return E;
            let i = (0, _.getAvatarDecorations)(s, n);
            return null != S ? null !== (e = i.find(e => e.id === S)) && void 0 !== e ? e : null : void 0 !== L ? L : null == v ? null : null !== (t = i.find(e => (0, m.isEqualAvatarDecoration)(e, v))) && void 0 !== t ? t : null
        }), {
            product: P,
            purchase: U
        } = (0, c.default)(null == M ? void 0 : M.skuId), b = A.default.canUseCollectibles(t), G = r.useRef(null), w = (0, I.default)(a), B = (0, m.isEqualAvatarDecoration)(M, void 0 === L ? v : L), k = () => {
            D(M), u()
        }, F = r.useCallback(e => {
            u(), (0, d.openCollectiblesShop)({
                analyticsLocations: a,
                analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL,
                initialProductSkuId: e
            })
        }, [a, u]);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(o.ModalHeader, {
                separator: !1,
                className: g.modalHeader,
                children: [(0, i.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    children: C.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                }), (0, i.jsx)(o.ModalCloseButton, {
                    className: g.modalCloseButton,
                    onClick: u
                })]
            }), (0, i.jsxs)(o.ModalContent, {
                className: g.modalContent,
                scrollbarType: "none",
                children: [(0, i.jsx)(p.default, {
                    user: t,
                    guild: O,
                    pendingAvatarDecoration: M,
                    selectedAvatarDecorationRef: G,
                    onSelect: e => {
                        y(e), null != e && w(e)
                    },
                    onOpenShop: F
                }), (0, i.jsx)(N.default, {
                    className: g.modalPreview,
                    user: t,
                    guildId: null == O ? void 0 : O.id,
                    avatarDecorationOverride: M
                })]
            }), (0, i.jsxs)(o.ModalFooter, {
                className: g.modalFooter,
                children: [null != U && (!(0, _.isPremiumCollectiblesPurchase)(U) || b) || null === M ? (0, i.jsx)(o.Button, {
                    onClick: k,
                    disabled: B,
                    children: C.default.Messages.AVATAR_DECORATION_MODAL_APPLY
                }) : null == U && (b || !(0, _.isPremiumCollectiblesProduct)(P)) ? (0, i.jsx)(o.Button, {
                    className: g.modalFooterShopButton,
                    onClick: () => F(null == P ? void 0 : P.skuId),
                    children: C.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                }) : (0, i.jsx)(T.default, {
                    subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
                    buttonText: A.default.isPremium(t) ? C.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : C.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                }), (0, i.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    onClick: u,
                    children: C.default.Messages.CANCEL
                })]
            })]
        })
    }

    function D(e) {
        let {
            transitionState: t,
            analyticsLocations: n,
            onClose: _,
            onCloseModal: c,
            initialSelectedDecoration: I,
            initialSelectedDecorationId: T,
            isTryItOutFlow: f,
            guild: A
        } = e, m = (0, a.useStateFromStores)([S.default], () => S.default.getCurrentUser()), {
            analyticsLocations: N
        } = (0, u.default)(n, l.default.EDIT_AVATAR_DECORATION_MODAL), {
            categories: p,
            purchases: R,
            isFetchingCategories: C,
            isFetchingPurchases: D
        } = (0, E.default)(), v = C || D && 0 === R.size;
        return r.useEffect(() => {
            h.default.track(O.AnalyticEvents.OPEN_MODAL, {
                type: "Edit Avatar Decoration Modal",
                location_stack: N
            })
        }, [N]), r.useEffect(() => () => {
            (0, d.setCollectiblesCategoryItemsViewed)({
                categories: [...p.values()],
                itemTypes: [s.CollectiblesItemType.AVATAR_DECORATION]
            })
        }, [p]), null == m ? null : (0, i.jsx)(u.AnalyticsLocationProvider, {
            value: N,
            children: (0, i.jsx)(o.ModalRoot, {
                transitionState: t,
                className: g.modal,
                size: v ? o.ModalSize.DYNAMIC : o.ModalSize.MEDIUM,
                children: v ? (0, i.jsx)(o.Spinner, {
                    className: g.spinner,
                    type: o.Spinner.Type.SPINNING_CIRCLE
                }) : (0, i.jsx)(L, {
                    user: m,
                    guild: A,
                    categories: p,
                    purchases: R,
                    analyticsLocations: N,
                    initialSelectedDecoration: I,
                    initialSelectedDecorationId: T,
                    onClose: () => {
                        c(), null == _ || _()
                    },
                    isTryItOutFlow: f
                })
            })
        })
    }
}