function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        showTakeoverModal: function() {
            return I
        }
    });
    var t = E("37983");
    E("884691");
    var o = E("77078"),
        n = E("892974"),
        r = E("277734"),
        a = E("217736"),
        i = E("761771");

    function I(e) {
        let {
            channelId: _,
            warningId: I,
            senderId: s,
            warningType: T
        } = e;
        if (!!(0, i.isEligibleForInappropriateConversationWarning)({
                location: "takeover-modal"
            }))(0, o.openModalLazy)(async () => {
            let {
                default: e
            } = await E.el("33320").then(E.bind(E, "33320"));
            return E => (0, t.jsx)(e, {
                channelId: _,
                warningId: I,
                senderId: s,
                warningType: T,
                modalProps: E
            })
        }, {
            backdropStyle: n.BackdropStyles.BLUR,
            onCloseCallback: () => {
                (0, r.dismissChannelSafetyWarnings)(_, [I]), (0, a.trackCtaEvent)({
                    channelId: _,
                    senderId: s,
                    warningId: I,
                    warningType: T,
                    cta: a.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS,
                    isNudgeWarning: !1
                })
            }
        })
    }
}