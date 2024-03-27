function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("759231"),
        a = n("689938");
    let o = (e, t) => (0, i.jsxs)(r.Text, {
        color: "text-danger",
        style: {
            display: "flex",
            gap: "4px",
            margin: "8px 0 4px 0",
            alignItems: "center"
        },
        variant: "text-sm/normal",
        children: [(0, i.jsx)(s.default, {
            width: 14,
            height: 14
        }), e]
    }, t);
    t.default = {
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