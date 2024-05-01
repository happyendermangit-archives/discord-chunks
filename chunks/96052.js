function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendStageRequestToSpeakEphemeralMessage: function() {
            return s
        }
    });
    var i = n("570140"),
        r = n("709054"),
        a = n("981631");

    function s(e, t, n) {
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
                    type: a.MessageTypes.STAGE_RAISE_HAND,
                    flags: a.MessageFlags.EPHEMERAL,
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
                    state: a.MessageStates.SENT,
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