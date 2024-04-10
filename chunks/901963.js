function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("913527"),
        a = n.n(s),
        o = n("442837"),
        l = n("433517"),
        u = n("481060"),
        d = n("355467"),
        _ = n("230711"),
        c = n("78839"),
        E = n("672752"),
        I = n("465670"),
        T = n("466111"),
        f = n("74538"),
        S = n("543241"),
        A = n("981631"),
        h = n("474936"),
        m = n("689938"),
        N = n("139267");
    let O = "premiumRetentionEmojiPickerNotice",
        p = l.Storage.get(O);
    t.default = e => {
        let {
            closePopout: t,
            channel: n
        } = e, [s, R] = r.useState(!1), {
            subscription: C,
            hasFetchedSubscriptions: g
        } = (0, o.useStateFromStoresObject)([c.default], () => ({
            subscription: c.default.getPremiumSubscription(),
            hasFetchedSubscriptions: c.default.hasFetchedSubscriptions()
        }));
        if (r.useEffect(() => {
                !g && (0, d.fetchSubscriptions)()
            }, [g]), null == C || !(0, f.isSubscriptionStatusFailedPayment)(C.status) || s) return null;
        let L = C.status === A.SubscriptionStatusTypes.PAST_DUE ? (0, f.getBillingGracePeriodDaysAndExpiresDate)(C).expiresDate : a()(C.currentPeriodStart).add(h.MAX_ACCOUNT_HOLD_DAYS),
            D = "".concat(C.id, ":").concat(L.toISOString());
        if (p === D) return null;
        let v = f.default.getPremiumType(C.planId) === h.PremiumTypes.TIER_0 ? E.GradientCssUrls.PREMIUM_TIER_0 : f.default.getPremiumType(C.planId) === h.PremiumTypes.TIER_1 ? E.GradientCssUrls.PREMIUM_TIER_1 : E.GradientCssUrls.PREMIUM_TIER_2;
        return (0, i.jsxs)("div", {
            className: N.premiumRetentionNotice,
            children: [(0, i.jsx)(T.default, {
                className: N.premiumRetentionNoticeIcon,
                color: v
            }), (0, i.jsxs)("div", {
                className: N.premiumRetentionNoticeContent,
                children: [(0, i.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    children: m.default.Messages.PREMIUM_RETENTION_EMOJI_PICKER_DESCRIPTION.format({
                        planName: f.default.getDisplayPremiumType(C.planId),
                        endsAt: L
                    })
                }), (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.Anchor, {
                        onClick: () => {
                            (0, S.trackPremiumSettingsPaneOpened)(n), t(), _.default.open(A.UserSettingsSections.PREMIUM)
                        },
                        children: m.default.Messages.PREMIUM_RETENTION_EMOJI_PICKER_UPDATE_PAYMENT_INFORMATION
                    })
                })]
            }), (0, i.jsx)(u.Clickable, {
                onClick: () => {
                    l.Storage.set(O, D), p = D, R(!0)
                },
                children: (0, i.jsx)(I.default, {
                    className: N.premiumRetentionNoticeClose
                })
            })]
        })
    }
}