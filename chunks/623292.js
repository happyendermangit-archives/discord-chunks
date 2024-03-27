function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createPendingReply: function() {
            return r
        },
        deletePendingReply: function() {
            return a
        },
        setPendingReplyShouldMention: function() {
            return s
        }
    });
    var i = n("570140");

    function r(e) {
        let {
            message: t,
            channel: n,
            shouldMention: r,
            showMentionToggle: s,
            source: a
        } = e;
        i.default.dispatch({
            type: "CREATE_PENDING_REPLY",
            message: t,
            channel: n,
            shouldMention: r,
            showMentionToggle: s,
            source: a
        })
    }

    function s(e, t) {
        i.default.dispatch({
            type: "SET_PENDING_REPLY_SHOULD_MENTION",
            channelId: e,
            shouldMention: t
        })
    }

    function a(e) {
        i.default.dispatch({
            type: "DELETE_PENDING_REPLY",
            channelId: e
        })
    }
}