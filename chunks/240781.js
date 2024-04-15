function(e, t, n) {
    "use strict";
    n.r(t), n("627341");
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("278074"),
        o = n("442837"),
        l = n("481060"),
        u = n("884697"),
        d = n("449217"),
        _ = n("706454"),
        c = n("158776"),
        E = n("74538"),
        I = n("204418"),
        T = n("689938"),
        f = n("847531");
    let S = [{
            avatarSize: l.AvatarSizes.SIZE_40,
            showStatus: !1
        }, {
            avatarSize: l.AvatarSizes.SIZE_32,
            showStatus: !1
        }, {
            avatarSize: l.AvatarSizes.SIZE_40,
            showStatus: !0
        }, {
            avatarSize: l.AvatarSizes.SIZE_32,
            showStatus: !0
        }],
        A = e => {
            let {
                purchase: t
            } = e, n = (0, o.useStateFromStores)([_.default], () => _.default.locale), r = (0, u.isPremiumCollectiblesPurchase)(t);
            return (0, i.jsxs)("div", {
                className: f.purchaseInfo,
                children: [(0, i.jsx)(l.Text, {
                    variant: "text-sm/semibold",
                    color: "header-primary",
                    children: t.name
                }), (0, i.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: t.summary
                }), (0, i.jsxs)(l.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [T.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                        date: t.purchasedAt.toLocaleDateString(n, {
                            month: "long",
                            year: "numeric"
                        })
                    }), r && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("br", {}), T.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                    })]
                })]
            })
        };
    t.default = e => {
        let {
            user: t,
            guildId: n,
            avatarDecorationOverride: r,
            className: _
        } = e, h = (0, o.useStateFromStores)([c.default], () => c.default.getStatus(t.id)), {
            product: m,
            purchase: N
        } = (0, d.default)(null == r ? void 0 : r.skuId), O = E.default.canUseCollectibles(t), p = (0, u.isPremiumCollectiblesPurchase)(N), R = (0, u.isPremiumCollectiblesProduct)(m), C = !O && p;
        return null != m && (null == N || C) ? (0, i.jsxs)("div", {
            className: s()(f.modalPreview, f.shopPreviewContainer, _),
            children: [(0, i.jsx)("div", {
                className: f.shopPreviewBanner,
                children: (0, i.jsx)(I.default, {
                    user: t,
                    guildId: n,
                    avatarDecorationOverride: r
                })
            }), (0, i.jsxs)("div", {
                className: f.shopPreviewTextContainer,
                children: [(0, i.jsx)(l.Text, {
                    variant: "text-sm/semibold",
                    children: m.name
                }), (0, i.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: C ? T.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, a.match)([R, O]).with([!0, !0], () => T.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => T.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => T.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
                })]
            })]
        }) : (0, i.jsxs)("div", {
            className: s()(f.modalPreview, _),
            children: [(0, i.jsxs)("div", {
                className: f.previewSections,
                children: [(0, i.jsx)("div", {
                    className: f.decorationPreview,
                    children: (0, i.jsx)(I.default, {
                        user: t,
                        guildId: n,
                        avatarDecorationOverride: r
                    })
                }), (0, i.jsx)("div", {
                    className: f.smallDecorationPreviewsContainer,
                    children: S.map(e => {
                        let {
                            avatarSize: s,
                            showStatus: a
                        } = e;
                        return (0, i.jsx)("div", {
                            className: f.smallDecorationPreview,
                            children: (0, i.jsx)(I.default, {
                                user: t,
                                guildId: n,
                                avatarSize: s,
                                avatarDecorationOverride: r,
                                status: a ? h : void 0,
                                "aria-hidden": !0
                            })
                        }, "".concat(s).concat(a))
                    })
                })]
            }), null != N && (0, i.jsx)(A, {
                purchase: N
            })]
        })
    }
}