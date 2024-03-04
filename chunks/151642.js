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
            return l
        }
    });
    var i = n("446674"),
        s = n("488464"),
        r = n("998716");

    function a(e) {
        return (0, i.useStateFromStores)([s.default], () => null != e ? s.default.getParticipantCount(e, r.StageChannelParticipantNamedIndex.BLOCKED) : 0, [e])
    }

    function o(e) {
        var t;
        return null !== (t = s.default.getParticipantCount(e, r.StageChannelParticipantNamedIndex.BLOCKED)) && void 0 !== t ? t : 0
    }

    function l(e) {
        return (0, i.useStateFromStores)([s.default], () => s.default.getMutableParticipants(e, r.StageChannelParticipantNamedIndex.BLOCKED), [e])
    }
}