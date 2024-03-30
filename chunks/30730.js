function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createPendingReply: function() {
            return o
        },
        deletePendingReply: function() {
            return a
        },
        setPendingReplyShouldMention: function() {
            return i
        }
    });
    var r = n("629815");

    function o(e) {
        var t = e.message,
            n = e.channel,
            o = e.shouldMention,
            i = e.showMentionToggle,
            a = e.source;
        r.default.dispatch({
            type: "CREATE_PENDING_REPLY",
            message: t,
            channel: n,
            shouldMention: o,
            showMentionToggle: i,
            source: a
        })
    }

    function i(e, t) {
        r.default.dispatch({
            type: "SET_PENDING_REPLY_SHOULD_MENTION",
            channelId: e,
            shouldMention: t
        })
    }

    function a(e) {
        r.default.dispatch({
            type: "DELETE_PENDING_REPLY",
            channelId: e
        })
    }
}