function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendStageRequestToSpeakEphemeralMessage: function() {
            return a
        }
    });
    var i = n("570140"),
        r = n("709054"),
        s = n("981631");

    function a(e, t, n) {
        i.default.dispatch({
            type: "MESSAGE_CREATE",
            channelId: e,
            message: function(e) {
                let {
                    channelId: t,
                    requesterUser: n,
                    requestToSpeakTimestamp: i
                } = e;
                return {
                    id: r.default.fromTimestamp(Date.parse(i)),
                    type: s.MessageTypes.STAGE_RAISE_HAND,
                    flags: s.MessageFlags.EPHEMERAL,
                    content: "",
                    channel_id: t,
                    author: n,
                    attachments: [],
                    embeds: [],
                    pinned: !1,
                    mentions: [],
                    mention_channels: [],
                    mention_roles: [],
                    mention_everyone: !1,
                    timestamp: i,
                    state: s.MessageStates.SENT,
                    tts: !1
                }
            }({
                channelId: e,
                requesterUser: t,
                requestToSpeakTimestamp: n
            }),
            optimistic: !1,
            sendMessageOptions: {},
            isPushNotification: !1
        })
    }
}