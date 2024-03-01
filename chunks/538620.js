function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchActiveOutboundPromotions: function() {
            return _
        },
        fetchActiveBogoPromotion: function() {
            return E
        },
        default: function() {
            return T
        }
    });
    var r = n("872717"),
        i = n("750028"),
        l = n("913144"),
        a = n("316718"),
        s = n("915639"),
        o = n("872173"),
        u = n("772465"),
        c = n("44678"),
        d = n("807345"),
        f = n("646718"),
        m = n("49111");
    async function _() {
        if (!d.default.isFetchingActiveOutboundPromotions) try {
            l.default.dispatch({
                type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH"
            });
            let t = u.PromotionPreviewExperiment.getCurrentConfig({
                    location: "5731cc_1"
                }, {
                    autoTrackExposure: !1
                }).previewEnabled ? m.Endpoints.OUTBOUND_PROMOTIONS_PREVIEW : m.Endpoints.OUTBOUND_PROMOTIONS,
                n = await r.default.get({
                    url: t,
                    query: {
                        locale: s.default.locale
                    },
                    oldFormErrors: !0
                }),
                i = n.body,
                o = d.default.consumedInboundPromotionId;
            if (!d.default.hasFetchedConsumedInboundPromotionId) {
                var e;
                let t = await (0, a.fetchUserEntitlementsForApplication)(f.PREMIUM_SUBSCRIPTION_APPLICATION, !1),
                    n = t.find(e => null != e.promotion_id && !0 === e.consumed);
                o = null !== (e = null == n ? void 0 : n.promotion_id) && void 0 !== e ? e : null
            }
            l.default.dispatch({
                type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS",
                activeOutboundPromotions: i.map(e => (0, c.outboundPromotionFromServer)(e)),
                consumedInboundPromotionId: o
            })
        } catch (e) {
            l.default.dispatch({
                type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL"
            })
        }
    }
    async function E() {
        if (!d.default.isFetchingActiveBogoPromotion) try {
            l.default.dispatch({
                type: "ACTIVE_BOGO_PROMOTION_FETCH"
            });
            let e = await r.default.get({
                    url: m.Endpoints.BOGO_PROMOTIONS,
                    query: {
                        locale: s.default.locale
                    }
                }),
                t = e.body;
            l.default.dispatch({
                type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
                activePromotion: (0, c.bogoPromotionFromServer)(t)
            })
        } catch (e) {
            l.default.dispatch({
                type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL"
            })
        }
    }
    var T = {
        fetchActiveOutboundPromotions: _,
        dismissOutboundPromotionNotice: function() {
            l.default.dispatch({
                type: "OUTBOUND_PROMOTION_NOTICE_DISMISS"
            });
            let e = d.default.lastDismissedOutboundPromotionStartDate;
            null != e && o.PreloadedUserSettingsActionCreators.updateAsync("userContent", t => {
                t.lastDismissedOutboundPromotionStartDate = i.StringValue.create({
                    value: e
                })
            }, o.UserSettingsDelay.INFREQUENT_USER_ACTION)
        },
        markOutboundPromotionsSeen() {
            l.default.dispatch({
                type: "OUTBOUND_PROMOTIONS_SEEN"
            })
        },
        fetchActiveBogoPromotion: E
    }
}