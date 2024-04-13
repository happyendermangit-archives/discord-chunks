function(e, t, n) {
    "use strict";
    n.r(t);
    var s = n("735250"),
        a = n("470079"),
        i = n("803997"),
        r = n.n(i),
        l = n("442837"),
        o = n("481060"),
        u = n("812206"),
        d = n("479446"),
        c = n("981632"),
        f = n("594174"),
        h = n("509545"),
        g = n("55563"),
        E = n("366695"),
        m = n("819570"),
        p = n("296848"),
        _ = n("981631"),
        S = n("474936"),
        R = n("689938"),
        A = n("362489"),
        N = n("605094"),
        T = n("794711");
    t.default = l.default.connectStores([g.default, u.default, h.default, f.default], e => {
        let {
            giftCode: t
        } = e, n = g.default.get(t.skuId), {
            subscriptionPlanId: s
        } = t;
        return {
            sku: n,
            subscriptionPlan: null != s ? (0, p.getOrFetchSubscriptionPlan)(s) : null,
            application: u.default.getApplication(n.applicationId),
            gifter: f.default.getUser(t.userId)
        }
    })(e => {
        let {
            error: t,
            giftCode: n,
            gifter: i,
            sku: l,
            application: u,
            subscriptionPlan: f
        } = e, h = null == i ? R.default.Messages.GIFT_CODE_AUTH_GIFTED : R.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
            username: i.username
        }), g = l.name;
        return null != f && (g = (f.interval === S.SubscriptionIntervalTypes.MONTH ? R.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : R.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
            skuName: l.name,
            intervalCount: f.intervalCount
        })), (0, s.jsxs)(a.Fragment, {
            children: [null != n.giftStyle ? (0, s.jsx)(c.default, {
                defaultAnimationState: d.AnimationState.LOOP,
                giftStyle: n.giftStyle,
                className: A.seasonalIcon
            }) : (0, s.jsx)(m.Avatar, {
                src: null != i ? i.getAvatarURL(void 0, 100) : null,
                size: o.AvatarSizes.DEPRECATED_SIZE_100,
                className: T.marginBottom20
            }), null != t ? (0, s.jsxs)(a.Fragment, {
                children: [(0, s.jsx)(m.SubTitle, {
                    children: R.default.Messages.INVITE_MODAL_ERROR_TITLE
                }), (0, s.jsx)(m.Title, {
                    children: t
                })]
            }) : (0, s.jsxs)(a.Fragment, {
                children: [(0, s.jsx)(m.SubTitle, {
                    children: h
                }), (0, s.jsxs)(m.Title, {
                    className: r()(T.marginTop8, N.flexCenter),
                    children: [l.productLine !== _.SKUProductLines.COLLECTIBLES && (0, s.jsx)(E.default, {
                        size: E.default.Sizes.MEDIUM,
                        className: A.applicationIcon,
                        game: u,
                        skuId: l.id
                    }), g]
                })]
            })]
        })
    })
}