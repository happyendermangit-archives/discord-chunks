function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchActiveBogoPromotion: function() {
            return T
        },
        fetchActiveOutboundPromotions: function() {
            return I
        }
    });
    var i = n("544891"),
        r = n("381499"),
        a = n("570140"),
        s = n("496929"),
        o = n("706454"),
        l = n("675478"),
        u = n("164207"),
        d = n("443852"),
        _ = n("1844"),
        c = n("474936"),
        E = n("981631");
    async function I() {
        if (!_.default.isFetchingActiveOutboundPromotions) try {
            a.default.dispatch({
                type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH"
            });
            let t = u.PromotionPreviewExperiment.getCurrentConfig({
                    location: "5731cc_1"
                }, {
                    autoTrackExposure: !1
                }).previewEnabled ? E.Endpoints.OUTBOUND_PROMOTIONS_PREVIEW : E.Endpoints.OUTBOUND_PROMOTIONS,
                n = (await i.HTTP.get({
                    url: t,
                    query: {
                        locale: o.default.locale
                    },
                    oldFormErrors: !0
                })).body,
                r = _.default.consumedInboundPromotionId;
            if (!_.default.hasFetchedConsumedInboundPromotionId) {
                var e;
                let t = (await (0, s.fetchUserEntitlementsForApplication)(c.PREMIUM_SUBSCRIPTION_APPLICATION, !1)).find(e => null != e.promotion_id && !0 === e.consumed);
                r = null !== (e = null == t ? void 0 : t.promotion_id) && void 0 !== e ? e : null
            }
            a.default.dispatch({
                type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS",
                activeOutboundPromotions: n.map(e => (0, d.outboundPromotionFromServer)(e)),
                consumedInboundPromotionId: r
            })
        } catch (e) {
            a.default.dispatch({
                type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL"
            })
        }
    }
    async function T() {
        if (!_.default.isFetchingActiveBogoPromotion) try {
            a.default.dispatch({
                type: "ACTIVE_BOGO_PROMOTION_FETCH"
            });
            let e = (await i.HTTP.get({
                url: E.Endpoints.BOGO_PROMOTIONS,
                query: {
                    locale: o.default.locale
                }
            })).body;
            a.default.dispatch({
                type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
                activePromotion: (0, d.bogoPromotionFromServer)(e)
            })
        } catch (e) {
            a.default.dispatch({
                type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL"
            })
        }
    }
    t.default = {
        fetchActiveOutboundPromotions: I,
        dismissOutboundPromotionNotice: function() {
            a.default.dispatch({
                type: "OUTBOUND_PROMOTION_NOTICE_DISMISS"
            });
            let e = _.default.lastDismissedOutboundPromotionStartDate;
            null != e && l.PreloadedUserSettingsActionCreators.updateAsync("userContent", t => {
                t.lastDismissedOutboundPromotionStartDate = r.StringValue.create({
                    value: e
                })
            }, l.UserSettingsDelay.INFREQUENT_USER_ACTION)
        },
        markOutboundPromotionsSeen() {
            a.default.dispatch({
                type: "OUTBOUND_PROMOTIONS_SEEN"
            })
        },
        fetchActiveBogoPromotion: T
    }
}