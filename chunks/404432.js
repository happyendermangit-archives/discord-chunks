function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var s = n("37983"),
        a = n("884691"),
        i = n("414456"),
        r = n.n(i),
        l = n("446674"),
        o = n("77078"),
        u = n("299285"),
        d = n("210721"),
        c = n("65324"),
        f = n("697218"),
        h = n("10514"),
        E = n("552712"),
        g = n("953109"),
        m = n("124969"),
        _ = n("380186"),
        p = n("49111"),
        R = n("646718"),
        S = n("782340"),
        A = n("173494"),
        T = n("125047"),
        N = n("890957"),
        I = l.default.connectStores([E.default, u.default, h.default, f.default], e => {
            let {
                giftCode: t
            } = e, n = E.default.get(t.skuId), {
                subscriptionPlanId: s
            } = t, a = null != s ? (0, _.getOrFetchSubscriptionPlan)(s) : null;
            return {
                sku: n,
                subscriptionPlan: a,
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
            } = e, h = null == i ? S.default.Messages.GIFT_CODE_AUTH_GIFTED : S.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
                username: i.username
            }), E = l.name;
            return null != f && (E = (f.interval === R.SubscriptionIntervalTypes.MONTH ? S.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : S.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
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
                    className: N.marginBottom20
                }), null != t ? (0, s.jsxs)(a.Fragment, {
                    children: [(0, s.jsx)(m.SubTitle, {
                        children: S.default.Messages.INVITE_MODAL_ERROR_TITLE
                    }), (0, s.jsx)(m.Title, {
                        children: t
                    })]
                }) : (0, s.jsxs)(a.Fragment, {
                    children: [(0, s.jsx)(m.SubTitle, {
                        children: h
                    }), (0, s.jsxs)(m.Title, {
                        className: r(N.marginTop8, T.flexCenter),
                        children: [l.productLine !== p.SKUProductLines.COLLECTIBLES && (0, s.jsx)(g.default, {
                            size: g.default.Sizes.MEDIUM,
                            className: A.applicationIcon,
                            game: u,
                            skuId: l.id
                        }), E]
                    })]
                })]
            })
        })
}