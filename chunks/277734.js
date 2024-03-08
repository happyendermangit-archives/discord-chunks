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
            return _
        },
        acknowledgeChannelSafetyWarningTooltip: function() {
            return u
        }
    });
    var a = n("872717"),
        l = n("913144"),
        i = n("49111");

    function r(e, t) {
        return l.default.dispatch({
            type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
            channelId: e,
            warningIds: t
        }), a.default.post({
            url: i.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
            body: {
                warning_ids: t
            },
            oldFormErrors: !0
        })
    }

    function s(e, t, n) {
        l.default.dispatch({
            type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
            channelId: e,
            warningId: t,
            feedbackType: n
        })
    }

    function _(e) {
        l.default.dispatch({
            type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
            channelId: e
        })
    }

    function u(e) {
        l.default.dispatch({
            type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP",
            channelId: e
        })
    }
}