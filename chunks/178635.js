function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("47120");
    var i = n("392711"),
        r = n.n(i),
        a = n("433517"),
        s = n("147913"),
        o = n("536442"),
        l = n("810788"),
        u = n("19780"),
        d = n("531578");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let c = {
            chance: .2,
            cooldown: 864e5
        },
        E = {
            [d.FeedbackType.VOICE]: {
                ...c,
                hotspot: o.HotspotLocations.VOICE_CALL_FEEDBACK,
                storageKey: "lastVoiceFeedback",
                eligibilityChecks: [function(e) {
                    return !u.default.getWasEverRtcConnected() || u.default.getWasEverMultiParticipant()
                }]
            },
            [d.FeedbackType.STREAM]: {
                ...c,
                hotspot: o.HotspotLocations.REPORT_PROBLEM_POST_STREAM,
                storageKey: "lastStreamFeedback"
            },
            [d.FeedbackType.VIDEO_BACKGROUND]: {
                ...c,
                hotspot: o.HotspotLocations.VIDEO_BACKGROUND_FEEDBACK,
                storageKey: "lastVideoBackgroundFeedback"
            },
            [d.FeedbackType.ACTIVITY]: {
                cooldown: 0,
                chance: .5,
                hotspot: o.HotspotLocations.POST_ACTIVITY_FEEDBACK,
                storageKey: "lastActivityFeedback"
            },
            [d.FeedbackType.IN_APP_REPORTS]: {
                cooldown: 1728e5,
                chance: .5,
                hotspot: o.HotspotLocations.IN_APP_REPORTS_FEEDBACK,
                storageKey: "inAppReportsFeedback"
            }
        };

    function I(e) {
        return l.default.hasHotspot(e.hotspot)
    }

    function T(e) {
        return Math.random() < e.chance
    }

    function f(e) {
        if (null != e.storageKey) {
            let t = a.Storage.get(e.storageKey);
            if (null != t && Date.now() - t < e.cooldown) return !1
        }
        return !0
    }
    class S extends s.default {
        possiblyShowFeedbackModal(e, t) {
            (function(e) {
                var t;
                if (__OVERLAY__) return !1;
                let n = E[e],
                    i = null !== (t = n.eligibilityChecks) && void 0 !== t ? t : [];
                return [f, T, I].every(e => e(n)) && i.every(e => e(n))
            })(e) && (null == this.feedbackTypeToShow || !(d.FeedbackTypePrecedence[this.feedbackTypeToShow] < d.FeedbackTypePrecedence[e])) && (this.feedbackTypeToShow = e, this.showFeedbackModalDebounced(t))
        }
        constructor(...e) {
            super(...e), _(this, "feedbackTypeToShow", null), _(this, "showFeedbackModalDebounced", r().debounce(e => {
                null != this.feedbackTypeToShow && (! function(e) {
                    let t = E[e];
                    null != t.storageKey && a.Storage.set(t.storageKey, Date.now())
                }(this.feedbackTypeToShow), this.feedbackTypeToShow = null, e())
            }, 200))
        }
    }
}