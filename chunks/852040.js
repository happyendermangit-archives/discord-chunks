function(E, e, s) {
    "use strict";
    s.r(e), s.d(e, {
        default: function() {
            return O
        }
    });
    var S = s("37983");
    s("884691");
    var _ = s("77078"),
        I = s("423487"),
        R = s("782340");
    let T = (E, e) => (0, S.jsxs)(_.Text, {
        color: "text-danger",
        style: {
            display: "flex",
            gap: "4px",
            margin: "8px 0 4px 0",
            alignItems: "center"
        },
        variant: "text-sm/normal",
        children: [(0, S.jsx)(I.default, {
            width: 14,
            height: 14
        }), E]
    }, e);
    var O = {
        getTextInVoiceSendMessageChannelPermissionText: function(E) {
            return E ? R.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                warningHook: T
            }) : R.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
        },
        getTextInVoiceReadMessageHistoryChannelPermissionText: function(E) {
            return E ? R.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                warningHook: T
            }) : R.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
        }
    }
}