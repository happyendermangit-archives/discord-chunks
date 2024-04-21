function(e, t, n) {
    "use strict";
    n.r(t);
    var s = n("735250"),
        a = n("470079"),
        i = n("120356"),
        r = n.n(i),
        l = n("442837"),
        o = n("481060"),
        u = n("812206"),
        d = n("479446"),
        c = n("981632"),
        f = n("594174"),
        h = n("509545"),
        E = n("55563"),
        g = n("366695"),
        _ = n("819570"),
        m = n("296848"),
        p = n("981631"),
        T = n("474936"),
        A = n("689938"),
        I = n("362489"),
        S = n("605094"),
        N = n("794711");
    t.default = l.default.connectStores([E.default, u.default, h.default, f.default], e => {
        let {
            giftCode: t
        } = e, n = E.default.get(t.skuId), {
            subscriptionPlanId: s
        } = t;
        return {
            sku: n,
            subscriptionPlan: null != s ? (0, m.getOrFetchSubscriptionPlan)(s) : null,
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
        } = e, h = null == i ? A.default.Messages.GIFT_CODE_AUTH_GIFTED : A.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
            username: i.username
        }), E = l.name;
        return null != f && (E = (f.interval === T.SubscriptionIntervalTypes.MONTH ? A.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : A.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
            skuName: l.name,
            intervalCount: f.intervalCount
        })), (0, s.jsxs)(a.Fragment, {
            children: [null != n.giftStyle ? (0, s.jsx)(c.default, {
                defaultAnimationState: d.AnimationState.LOOP,
                giftStyle: n.giftStyle,
                className: I.seasonalIcon
            }) : (0, s.jsx)(_.Avatar, {
                src: null != i ? i.getAvatarURL(void 0, 100) : null,
                size: o.AvatarSizes.DEPRECATED_SIZE_100,
                className: N.marginBottom20
            }), null != t ? (0, s.jsxs)(a.Fragment, {
                children: [(0, s.jsx)(_.SubTitle, {
                    children: A.default.Messages.INVITE_MODAL_ERROR_TITLE
                }), (0, s.jsx)(_.Title, {
                    children: t
                })]
            }) : (0, s.jsxs)(a.Fragment, {
                children: [(0, s.jsx)(_.SubTitle, {
                    children: h
                }), (0, s.jsxs)(_.Title, {
                    className: r()(N.marginTop8, S.flexCenter),
                    children: [l.productLine !== p.SKUProductLines.COLLECTIBLES && (0, s.jsx)(g.default, {
                        size: g.default.Sizes.MEDIUM,
                        className: I.applicationIcon,
                        game: u,
                        skuId: l.id
                    }), E]
                })]
            })]
        })
    })
}