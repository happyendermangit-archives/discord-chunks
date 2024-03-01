function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPromotionImageURL: function() {
            return f
        },
        outboundPromotionFromServer: function() {
            return m
        },
        bogoPromotionFromServer: function() {
            return _
        },
        fetchClaimedOutboundPromotionCodes: function() {
            return T
        },
        claimOutboundPromotion: function() {
            return I
        },
        getOutboundPromotionRedemptionUrl: function() {
            return C
        },
        shouldShowOutboundPromotionNotice: function() {
            return p
        },
        shouldShowOutboundPromotionOnPlatform: function() {
            return S
        },
        isOutboundPromotionRedeemableByTrialUsers: function() {
            return P
        },
        isTrialUserEligibleToSeeOutboundPromotion: function() {
            return R
        }
    }), n("702976"), n("781738");
    var r = n("872717"),
        i = n("819855"),
        l = n("915639"),
        a = n("521012"),
        s = n("568734"),
        o = n("773336"),
        u = n("807345"),
        c = n("646718"),
        d = n("49111");

    function f(e, t) {
        let n = (0, i.isThemeDark)(t) ? "logo-dark" : "logo-light",
            r = window.GLOBAL_ENV.CDN_HOST,
            l = "?size=256";
        return null != r ? "".concat(location.protocol, "//").concat(r, "/promotions/").concat(e, "/").concat(n).concat(l) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(n).concat(l)
    }

    function m(e) {
        return {
            id: e.id,
            startDate: e.start_date,
            endDate: e.end_date,
            outboundRedemptionEndDate: e.outbound_redemption_end_date,
            outboundTitle: e.outbound_title,
            outboundRedemptionModalBody: e.outbound_redemption_modal_body,
            outboundRedemptionPageLink: e.outbound_redemption_page_link,
            outboundRedemptionUrlFormat: e.outbound_redemption_url_format,
            outboundTermsAndConditions: e.outbound_terms_and_conditions,
            flags: e.flags
        }
    }

    function _(e) {
        return {
            id: e.id,
            startDate: e.start_date,
            endDate: e.end_date
        }
    }

    function E(e) {
        return {
            code: e.code,
            userId: e.user_id,
            claimedAt: e.claimed_at,
            promotion: m(e.promotion)
        }
    }
    async function T() {
        let e = await r.default.get({
                url: d.Endpoints.CLAIMED_OUTBOUND_PROMOTION_CODES,
                query: {
                    locale: l.default.locale
                },
                oldFormErrors: !0
            }),
            t = e.body;
        return t.map(E)
    }
    async function I(e) {
        let t = await r.default.post({
                url: d.Endpoints.CLAIM_OUTBOUND_PROMOTION_CODE(e)
            }),
            n = t.body;
        return E(n)
    }

    function C(e, t) {
        return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e)) : t.outboundRedemptionPageLink
    }

    function p() {
        let e = u.default.lastSeenOutboundPromotionStartDate,
            t = u.default.outboundPromotions,
            n = u.default.consumedInboundPromotionId,
            r = t.filter(e => {
                let {
                    id: t,
                    flags: r
                } = e;
                return t !== n && !(0, s.hasFlag)(r, c.PromotionFlags.SUPPRESS_NOTIFICATION)
            }),
            i = null == e ? r : r.filter(t => {
                let {
                    startDate: n
                } = t;
                return new Date(n) > new Date(e)
            }),
            l = u.default.lastDismissedOutboundPromotionStartDate,
            o = a.default.getPremiumTypeSubscription(),
            d = (null == o ? void 0 : o.trialId) != null,
            f = d ? i.filter(e => P(e)) : i;
        return 0 !== f.length && (null == l || f.some(e => {
            let {
                startDate: t
            } = e;
            return new Date(t) > new Date(l)
        }))
    }

    function S(e) {
        return !(0, o.isIOS)() || !(0, s.hasFlag)(e.flags, c.PromotionFlags.IS_BLOCKED_IOS)
    }

    function P(e) {
        return (0, s.hasFlag)(e.flags, c.PromotionFlags.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS)
    }

    function R(e, t) {
        return null != t[e.id] || P(e)
    }
}