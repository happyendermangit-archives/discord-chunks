function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("481060"),
        l = n("40851"),
        u = n("906732"),
        d = n("976644"),
        _ = n("267642"),
        c = n("879892"),
        E = n("981631"),
        I = n("689938"),
        T = n("835299");
    t.default = e => {
        let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: s,
            buttonText: f,
            targetBoostedGuildTier: S,
            onClose: A = () => {},
            closeLayer: h = () => {},
            pauseAnimation: m = !1,
            applicationId: N,
            handleSubscribeModalClose: O,
            withHighlight: p = !1,
            ...R
        } = e, {
            analyticsLocations: C
        } = (0, u.default)(), g = (0, l.useAppContext)() === E.AppContext.POPOUT, [L, D] = r.useState(!1), v = null != S ? Math.max((0, _.getNumberOfAppliedBoostsNeededForTier)(s, S), 1) : 1, M = (0, _.generateBlockGuildSubscriptionPurchasesNode)(), y = async () => {
            D(!0), await (0, c.addAppliedGuildBoosts)({
                analyticsLocations: C,
                analyticsLocation: t,
                analyticsSourceLocation: n,
                guild: s,
                numberOfBoostsToAdd: v,
                onClose: A,
                closeLayer: h,
                inPopout: g,
                applicationId: N,
                handleSubscribeModalClose: O
            }), D(!1)
        };
        return null != M ? (0, i.jsx)(o.Tooltip, {
            text: M,
            "aria-label": !1,
            children: e => (0, i.jsx)(d.default, {
                ...e,
                disabled: !0,
                size: o.Button.Sizes.SMALL,
                pauseAnimation: m,
                ...R,
                children: null != f ? f : I.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
            })
        }) : (0, i.jsx)(d.default, {
            size: o.Button.Sizes.SMALL,
            ...R,
            className: a()(R.className, {
                [T.buttonHighlighted]: p
            }),
            submitting: L,
            onClick: y,
            pauseAnimation: m,
            children: null != f ? f : I.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
        })
    }
}