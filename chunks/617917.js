function(t, e, l) {
    "use strict";
    l.r(e), l.d(e, {
        default: function() {
            return L
        }
    }), l("222007");
    var n = l("37983"),
        r = l("884691"),
        a = l("414456"),
        s = l.n(a),
        o = l("77078"),
        i = l("244201"),
        u = l("685665"),
        d = l("181114"),
        c = l("427459"),
        f = l("954296"),
        _ = l("49111"),
        p = l("782340"),
        S = l("921756"),
        L = t => {
            let {
                analyticsLocation: e,
                analyticsSourceLocation: l,
                guild: a,
                buttonText: L,
                targetBoostedGuildTier: C,
                onClose: h = () => {},
                closeLayer: y = () => {},
                pauseAnimation: E = !1,
                applicationId: m,
                handleSubscribeModalClose: O,
                withHighlight: A = !1,
                ...T
            } = t, {
                analyticsLocations: I
            } = (0, u.default)(), g = (0, i.useAppContext)(), U = g === _.AppContext.POPOUT, [M, P] = r.useState(!1), w = null != C ? Math.max((0, c.getNumberOfAppliedBoostsNeededForTier)(a, C), 1) : 1, B = (0, c.generateBlockGuildSubscriptionPurchasesNode)(), v = async () => {
                P(!0), await (0, f.addAppliedGuildBoosts)({
                    analyticsLocations: I,
                    analyticsLocation: e,
                    analyticsSourceLocation: l,
                    guild: a,
                    numberOfBoostsToAdd: w,
                    onClose: h,
                    closeLayer: y,
                    inPopout: U,
                    applicationId: m,
                    handleSubscribeModalClose: O
                }), P(!1)
            };
            return null != B ? (0, n.jsx)(o.Tooltip, {
                text: B,
                "aria-label": !1,
                children: t => (0, n.jsx)(d.default, {
                    ...t,
                    disabled: !0,
                    size: o.Button.Sizes.SMALL,
                    pauseAnimation: E,
                    ...T,
                    children: null != L ? L : p.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                })
            }) : (0, n.jsx)(d.default, {
                size: o.Button.Sizes.SMALL,
                ...T,
                className: s(T.className, {
                    [S.buttonHighlighted]: A
                }),
                submitting: M,
                onClick: v,
                pauseAnimation: E,
                children: null != L ? L : p.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
            })
        }
}