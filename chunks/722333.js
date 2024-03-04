function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return t
        }
    }), E("222007");
    var t, o = E("917351"),
        n = E.n(o),
        r = E("95410"),
        a = E("689988"),
        i = E("139321"),
        I = E("269596"),
        T = E("945956"),
        s = E("200521");
    let S = {
            chance: .2,
            cooldown: 864e5
        },
        N = {
            [s.FeedbackType.VOICE]: {
                ...S,
                hotspot: i.HotspotLocations.VOICE_CALL_FEEDBACK,
                storageKey: "lastVoiceFeedback",
                eligibilityChecks: [function(e) {
                    let _ = T.default.getWasEverRtcConnected();
                    return !_ || T.default.getWasEverMultiParticipant()
                }]
            },
            [s.FeedbackType.STREAM]: {
                ...S,
                hotspot: i.HotspotLocations.REPORT_PROBLEM_POST_STREAM,
                storageKey: "lastStreamFeedback"
            },
            [s.FeedbackType.VIDEO_BACKGROUND]: {
                ...S,
                hotspot: i.HotspotLocations.VIDEO_BACKGROUND_FEEDBACK,
                storageKey: "lastVideoBackgroundFeedback"
            },
            [s.FeedbackType.ACTIVITY]: {
                cooldown: 0,
                chance: .5,
                hotspot: i.HotspotLocations.POST_ACTIVITY_FEEDBACK,
                storageKey: "lastActivityFeedback"
            },
            [s.FeedbackType.IN_APP_REPORTS]: {
                cooldown: 1728e5,
                chance: .5,
                hotspot: i.HotspotLocations.IN_APP_REPORTS_FEEDBACK,
                storageKey: "inAppReportsFeedback"
            }
        };

    function O(e) {
        return I.default.hasHotspot(e.hotspot)
    }

    function A(e) {
        return Math.random() < e.chance
    }

    function R(e) {
        if (null != e.storageKey) {
            let _ = r.default.get(e.storageKey);
            if (null != _ && Date.now() - _ < e.cooldown) return !1
        }
        return !0
    }
    t = class extends a.default {
        possiblyShowFeedbackModal(e, _) {
            (function(e) {
                var _;
                if (__OVERLAY__) return !1;
                let E = N[e],
                    t = null !== (_ = E.eligibilityChecks) && void 0 !== _ ? _ : [];
                return [R, A, O].every(e => e(E)) && t.every(e => e(E))
            })(e) && (null == this.feedbackTypeToShow || !(s.FeedbackTypePrecedence[this.feedbackTypeToShow] < s.FeedbackTypePrecedence[e])) && (this.feedbackTypeToShow = e, this.showFeedbackModalDebounced(_))
        }
        constructor(...e) {
            super(...e), this.feedbackTypeToShow = null, this.showFeedbackModalDebounced = n.debounce(e => {
                null != this.feedbackTypeToShow && (! function(e) {
                    let _ = N[e];
                    null != _.storageKey && r.default.set(_.storageKey, Date.now())
                }(this.feedbackTypeToShow), this.feedbackTypeToShow = null, e())
            }, 200)
        }
    }
}