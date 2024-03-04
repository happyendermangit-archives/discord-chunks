function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("77078"),
        r = n("423487"),
        a = n("782340");
    let o = (e, t) => (0, i.jsxs)(s.Text, {
        color: "text-danger",
        style: {
            display: "flex",
            gap: "4px",
            margin: "8px 0 4px 0",
            alignItems: "center"
        },
        variant: "text-sm/normal",
        children: [(0, i.jsx)(r.default, {
            width: 14,
            height: 14
        }), e]
    }, t);
    var l = {
        getTextInVoiceSendMessageChannelPermissionText: function(e) {
            return e ? a.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                warningHook: o
            }) : a.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
        },
        getTextInVoiceReadMessageHistoryChannelPermissionText: function(e) {
            return e ? a.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                warningHook: o
            }) : a.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
        }
    }
}