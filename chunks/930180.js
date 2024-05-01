function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getStageBlockedUsersCount: function() {
            return o
        },
        useStageBlockedUsers: function() {
            return l
        },
        useStageBlockedUsersCount: function() {
            return s
        }
    });
    var i = n("442837"),
        r = n("565799"),
        a = n("501655");

    function s(e) {
        return (0, i.useStateFromStores)([r.default], () => null != e ? r.default.getParticipantCount(e, a.StageChannelParticipantNamedIndex.BLOCKED) : 0, [e])
    }

    function o(e) {
        var t;
        return null !== (t = r.default.getParticipantCount(e, a.StageChannelParticipantNamedIndex.BLOCKED)) && void 0 !== t ? t : 0
    }

    function l(e) {
        return (0, i.useStateFromStores)([r.default], () => r.default.getMutableParticipants(e, a.StageChannelParticipantNamedIndex.BLOCKED), [e])
    }
}