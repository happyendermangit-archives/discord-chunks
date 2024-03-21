function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return L
        }
    }), n("222007");
    var l = n("37983"),
        r = n("884691"),
        a = n("414456"),
        s = n.n(a),
        o = n("77078"),
        i = n("244201"),
        u = n("685665"),
        d = n("181114"),
        c = n("427459"),
        f = n("954296"),
        _ = n("49111"),
        p = n("782340"),
        S = n("921756"),
        L = t => {
            let {
                analyticsLocation: e,
                analyticsSourceLocation: n,
                guild: a,
                buttonText: L,
                targetBoostedGuildTier: C,
                onClose: h = () => {},
                closeLayer: T = () => {},
                pauseAnimation: y = !1,
                applicationId: E,
                handleSubscribeModalClose: m,
                withHighlight: O = !1,
                ...A
            } = t, {
                analyticsLocations: I
            } = (0, u.default)(), g = (0, i.useAppContext)(), U = g === _.AppContext.POPOUT, [P, M] = r.useState(!1), w = null != C ? Math.max((0, c.getNumberOfAppliedBoostsNeededForTier)(a, C), 1) : 1, B = (0, c.generateBlockGuildSubscriptionPurchasesNode)(), v = async () => {
                M(!0), await (0, f.addAppliedGuildBoosts)({
                    analyticsLocations: I,
                    analyticsLocation: e,
                    analyticsSourceLocation: n,
                    guild: a,
                    numberOfBoostsToAdd: w,
                    onClose: h,
                    closeLayer: T,
                    inPopout: U,
                    applicationId: E,
                    handleSubscribeModalClose: m
                }), M(!1)
            };
            return null != B ? (0, l.jsx)(o.Tooltip, {
                text: B,
                "aria-label": !1,
                children: t => (0, l.jsx)(d.default, {
                    ...t,
                    disabled: !0,
                    size: o.Button.Sizes.SMALL,
                    pauseAnimation: y,
                    ...A,
                    children: null != L ? L : p.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                })
            }) : (0, l.jsx)(d.default, {
                size: o.Button.Sizes.SMALL,
                ...A,
                className: s(A.className, {
                    [S.buttonHighlighted]: O
                }),
                submitting: P,
                onClick: v,
                pauseAnimation: y,
                children: null != L ? L : p.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
            })
        }
}