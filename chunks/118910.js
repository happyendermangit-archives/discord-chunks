function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showTakeoverModal: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("468436"),
        a = n("378298"),
        o = n("473092"),
        l = n("237292");

    function u(e) {
        let {
            channelId: t,
            warningId: u,
            senderId: d,
            warningType: _
        } = e;
        if (!!(0, l.isEligibleForInappropriateConversationWarning)({
                location: "takeover-modal"
            }))(0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("49508"), n.e("51934")]).then(n.bind(n, "955708"));
            return n => (0, i.jsx)(e, {
                channelId: t,
                warningId: u,
                senderId: d,
                warningType: _,
                modalProps: n
            })
        }, {
            backdropStyle: s.BackdropStyles.BLUR,
            onCloseCallback: () => {
                (0, a.dismissChannelSafetyWarnings)(t, [u]), (0, o.trackCtaEvent)({
                    channelId: t,
                    senderId: d,
                    warningId: u,
                    warningType: _,
                    cta: o.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS,
                    isNudgeWarning: !1
                })
            }
        })
    }
}