function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createPendingReply: function() {
            return i
        },
        setPendingReplyShouldMention: function() {
            return r
        },
        deletePendingReply: function() {
            return u
        }
    });
    var l = n("913144");

    function i(e) {
        let {
            message: t,
            channel: n,
            shouldMention: i,
            showMentionToggle: r,
            source: u
        } = e;
        l.default.dispatch({
            type: "CREATE_PENDING_REPLY",
            message: t,
            channel: n,
            shouldMention: i,
            showMentionToggle: r,
            source: u
        })
    }

    function r(e, t) {
        l.default.dispatch({
            type: "SET_PENDING_REPLY_SHOULD_MENTION",
            channelId: e,
            shouldMention: t
        })
    }

    function u(e) {
        l.default.dispatch({
            type: "DELETE_PENDING_REPLY",
            channelId: e
        })
    }
}