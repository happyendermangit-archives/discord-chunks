function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendStageRequestToSpeakEphemeralMessage: function() {
            return a
        }
    });
    var r = n("629815"),
        o = n("523018"),
        i = n("281767");

    function a(e, t, n) {
        r.default.dispatch({
            type: "MESSAGE_CREATE",
            channelId: e,
            message: function(e) {
                var t = e.channelId,
                    n = e.requesterUser,
                    r = e.requestToSpeakTimestamp;
                return {
                    id: o.default.fromTimestamp(Date.parse(r)),
                    type: i.MessageTypes.STAGE_RAISE_HAND,
                    flags: i.MessageFlags.EPHEMERAL,
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
                    timestamp: r,
                    state: i.MessageStates.SENT,
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