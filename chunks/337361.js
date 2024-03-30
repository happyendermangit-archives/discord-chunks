function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        acknowledgeChannelSafetyWarningTooltip: function() {
            return l
        },
        clearChannelSafetyWarnings: function() {
            return s
        },
        dismissChannelSafetyWarnings: function() {
            return a
        },
        reportFalsePositive: function() {
            return c
        },
        setChannelSafetyWarningFeedback: function() {
            return u
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("281767");

    function a(e, t) {
        return o.default.dispatch({
            type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
            channelId: e,
            warningIds: t
        }), r.HTTP.post({
            url: i.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
            body: {
                warning_ids: t
            },
            oldFormErrors: !0
        })
    }

    function u(e, t, n) {
        o.default.dispatch({
            type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
            channelId: e,
            warningId: t,
            feedbackType: n
        })
    }

    function s(e) {
        o.default.dispatch({
            type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
            channelId: e
        })
    }

    function l(e) {
        o.default.dispatch({
            type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP",
            channelId: e
        })
    }

    function c(e) {
        return r.HTTP.post({
            url: i.Endpoints.SAFETY_WARNING_FALSE_POSITIVE(e)
        })
    }
}