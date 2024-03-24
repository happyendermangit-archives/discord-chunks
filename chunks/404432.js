function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    });
    var s = n("37983"),
        a = n("884691"),
        r = n("414456"),
        l = n.n(r),
        i = n("446674"),
        o = n("77078"),
        u = n("299285"),
        d = n("210721"),
        c = n("65324"),
        E = n("697218"),
        f = n("10514"),
        _ = n("552712"),
        h = n("953109"),
        g = n("124969"),
        m = n("380186"),
        T = n("49111"),
        p = n("646718"),
        I = n("782340"),
        A = n("173494"),
        S = n("125047"),
        R = n("890957"),
        N = i.default.connectStores([_.default, u.default, f.default, E.default], e => {
            let {
                giftCode: t
            } = e, n = _.default.get(t.skuId), {
                subscriptionPlanId: s
            } = t, a = null != s ? (0, m.getOrFetchSubscriptionPlan)(s) : null;
            return {
                sku: n,
                subscriptionPlan: a,
                application: u.default.getApplication(n.applicationId),
                gifter: E.default.getUser(t.userId)
            }
        })(e => {
            let {
                error: t,
                giftCode: n,
                gifter: r,
                sku: i,
                application: u,
                subscriptionPlan: E
            } = e, f = null == r ? I.default.Messages.GIFT_CODE_AUTH_GIFTED : I.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
                username: r.username
            }), _ = i.name;
            return null != E && (_ = (E.interval === p.SubscriptionIntervalTypes.MONTH ? I.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : I.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
                skuName: i.name,
                intervalCount: E.intervalCount
            })), (0, s.jsxs)(a.Fragment, {
                children: [null != n.giftStyle ? (0, s.jsx)(c.default, {
                    defaultAnimationState: d.AnimationState.LOOP,
                    giftStyle: n.giftStyle,
                    className: A.seasonalIcon
                }) : (0, s.jsx)(g.Avatar, {
                    src: null != r ? r.getAvatarURL(void 0, 100) : null,
                    size: o.AvatarSizes.DEPRECATED_SIZE_100,
                    className: R.marginBottom20
                }), null != t ? (0, s.jsxs)(a.Fragment, {
                    children: [(0, s.jsx)(g.SubTitle, {
                        children: I.default.Messages.INVITE_MODAL_ERROR_TITLE
                    }), (0, s.jsx)(g.Title, {
                        children: t
                    })]
                }) : (0, s.jsxs)(a.Fragment, {
                    children: [(0, s.jsx)(g.SubTitle, {
                        children: f
                    }), (0, s.jsxs)(g.Title, {
                        className: l(R.marginTop8, S.flexCenter),
                        children: [i.productLine !== T.SKUProductLines.COLLECTIBLES && (0, s.jsx)(h.default, {
                            size: h.default.Sizes.MEDIUM,
                            className: A.applicationIcon,
                            game: u,
                            skuId: i.id
                        }), _]
                    })]
                })]
            })
        })
}