function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("824385"),
        l = n("481060"),
        u = n("40851"),
        d = n("906732"),
        _ = n("78839"),
        c = n("976644"),
        E = n("267642"),
        I = n("879892"),
        T = n("981631"),
        f = n("689938"),
        S = n("195445");
    t.default = e => {
        let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: s,
            buttonText: h,
            targetBoostedGuildTier: A,
            onClose: m = () => {},
            closeLayer: N = () => {},
            pauseAnimation: p = !1,
            applicationId: O,
            handleSubscribeModalClose: R,
            withHighlight: C = !1,
            ...g
        } = e, {
            analyticsLocations: L
        } = (0, d.default)(), v = (0, u.useAppContext)() === T.AppContext.POPOUT, [D, M] = r.useState(!1), y = null != A ? Math.max((0, E.getNumberOfAppliedBoostsNeededForTier)(s, A), 1) : 1, P = (0, E.generateBlockGuildSubscriptionPurchasesNode)(), U = async () => {
            M(!0), await (0, I.addAppliedGuildBoosts)({
                analyticsLocations: L,
                analyticsLocation: t,
                analyticsSourceLocation: n,
                guild: s,
                numberOfBoostsToAdd: y,
                onClose: m,
                closeLayer: N,
                inPopout: v,
                applicationId: O,
                handleSubscribeModalClose: R
            }), M(!1)
        }, b = _.default.getPremiumTypeSubscription(), G = (0, i.jsx)("span", {
            children: null != h ? h : f.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
        });
        return ((null == b ? void 0 : b.isPausedOrPausePending) && (G = (0, i.jsxs)("div", {
            className: S.pausedButton,
            children: [(0, i.jsx)(o.LockIcon, {
                className: S.lockIcon,
                width: 16,
                height: 16
            }), " ", G]
        }), g.disabled = !0), null != P) ? (0, i.jsx)(l.Tooltip, {
            text: P,
            "aria-label": !1,
            children: e => (0, i.jsx)(c.default, {
                ...e,
                disabled: !0,
                size: l.Button.Sizes.SMALL,
                pauseAnimation: p,
                ...g,
                children: G
            })
        }) : (0, i.jsx)(c.default, {
            size: l.Button.Sizes.SMALL,
            ...g,
            className: a()(g.className, {
                [S.buttonHighlighted]: C
            }),
            submitting: D,
            onClick: U,
            pauseAnimation: p,
            children: G
        })
    }
}