function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
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
        f = n("697218"),
        E = n("10514"),
        h = n("552712"),
        _ = n("953109"),
        g = n("124969"),
        m = n("380186"),
        p = n("49111"),
        I = n("646718"),
        T = n("782340"),
        N = n("173494"),
        A = n("125047"),
        S = n("890957"),
        R = i.default.connectStores([h.default, u.default, E.default, f.default], e => {
            let {
                giftCode: t
            } = e, n = h.default.get(t.skuId), {
                subscriptionPlanId: s
            } = t, a = null != s ? (0, m.getOrFetchSubscriptionPlan)(s) : null;
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
                gifter: r,
                sku: i,
                application: u,
                subscriptionPlan: f
            } = e, E = null == r ? T.default.Messages.GIFT_CODE_AUTH_GIFTED : T.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
                username: r.username
            }), h = i.name;
            return null != f && (h = (f.interval === I.SubscriptionIntervalTypes.MONTH ? T.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : T.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
                skuName: i.name,
                intervalCount: f.intervalCount
            })), (0, s.jsxs)(a.Fragment, {
                children: [null != n.giftStyle ? (0, s.jsx)(c.default, {
                    defaultAnimationState: d.AnimationState.LOOP,
                    giftStyle: n.giftStyle,
                    className: N.seasonalIcon
                }) : (0, s.jsx)(g.Avatar, {
                    src: null != r ? r.getAvatarURL(void 0, 100) : null,
                    size: o.AvatarSizes.DEPRECATED_SIZE_100,
                    className: S.marginBottom20
                }), null != t ? (0, s.jsxs)(a.Fragment, {
                    children: [(0, s.jsx)(g.SubTitle, {
                        children: T.default.Messages.INVITE_MODAL_ERROR_TITLE
                    }), (0, s.jsx)(g.Title, {
                        children: t
                    })]
                }) : (0, s.jsxs)(a.Fragment, {
                    children: [(0, s.jsx)(g.SubTitle, {
                        children: E
                    }), (0, s.jsxs)(g.Title, {
                        className: l(S.marginTop8, A.flexCenter),
                        children: [i.productLine !== p.SKUProductLines.COLLECTIBLES && (0, s.jsx)(_.default, {
                            size: _.default.Sizes.MEDIUM,
                            className: N.applicationIcon,
                            game: u,
                            skuId: i.id
                        }), h]
                    })]
                })]
            })
        })
}