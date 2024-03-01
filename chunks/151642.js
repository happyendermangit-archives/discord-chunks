function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useStageBlockedUsersCount: function() {
            return a
        },
        getStageBlockedUsersCount: function() {
            return o
        },
        useStageBlockedUsers: function() {
            return d
        }
    });
    var s = n("446674"),
        i = n("488464"),
        r = n("998716");

    function a(e) {
        return (0, s.useStateFromStores)([i.default], () => null != e ? i.default.getParticipantCount(e, r.StageChannelParticipantNamedIndex.BLOCKED) : 0, [e])
    }

    function o(e) {
        var t;
        return null !== (t = i.default.getParticipantCount(e, r.StageChannelParticipantNamedIndex.BLOCKED)) && void 0 !== t ? t : 0
    }

    function d(e) {
        return (0, s.useStateFromStores)([i.default], () => i.default.getMutableParticipants(e, r.StageChannelParticipantNamedIndex.BLOCKED), [e])
    }
}