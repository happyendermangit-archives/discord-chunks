function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        dismissChannelSafetyWarnings: function() {
            return r
        },
        setChannelSafetyWarningFeedback: function() {
            return s
        },
        clearChannelSafetyWarnings: function() {
            return u
        },
        acknowledgeChannelSafetyWarningTooltip: function() {
            return d
        },
        reportFalsePositive: function() {
            return o
        }
    });
    var a = n("872717"),
        i = n("913144"),
        l = n("49111");

    function r(e, t) {
        return i.default.dispatch({
            type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
            channelId: e,
            warningIds: t
        }), a.HTTP.post({
            url: l.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
            body: {
                warning_ids: t
            },
            oldFormErrors: !0
        })
    }

    function s(e, t, n) {
        i.default.dispatch({
            type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
            channelId: e,
            warningId: t,
            feedbackType: n
        })
    }

    function u(e) {
        i.default.dispatch({
            type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
            channelId: e
        })
    }

    function d(e) {
        i.default.dispatch({
            type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP",
            channelId: e
        })
    }

    function o(e) {
        return a.HTTP.post({
            url: l.Endpoints.SAFETY_WARNING_FALSE_POSITIVE(e)
        })
    }
}