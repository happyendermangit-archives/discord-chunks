function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        acknowledgeChannelSafetyWarningTooltip: function() {
            return u
        },
        clearChannelSafetyWarnings: function() {
            return l
        },
        dismissChannelSafetyWarnings: function() {
            return a
        },
        reportFalsePositive: function() {
            return d
        },
        setChannelSafetyWarningFeedback: function() {
            return o
        }
    });
    var i = n("544891"),
        r = n("570140"),
        s = n("981631");

    function a(e, t) {
        return r.default.dispatch({
            type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
            channelId: e,
            warningIds: t
        }), i.HTTP.post({
            url: s.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
            body: {
                warning_ids: t
            },
            oldFormErrors: !0
        })
    }

    function o(e, t, n) {
        r.default.dispatch({
            type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
            channelId: e,
            warningId: t,
            feedbackType: n
        })
    }

    function l(e) {
        r.default.dispatch({
            type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
            channelId: e
        })
    }

    function u(e) {
        r.default.dispatch({
            type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP",
            channelId: e
        })
    }

    function d(e) {
        return i.HTTP.post({
            url: s.Endpoints.SAFETY_WARNING_FALSE_POSITIVE(e)
        })
    }
}