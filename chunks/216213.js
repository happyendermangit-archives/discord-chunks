function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getStageBlockedUsersCount: function() {
            return u
        },
        useStageBlockedUsers: function() {
            return s
        },
        useStageBlockedUsersCount: function() {
            return a
        }
    });
    var r = n("898511"),
        o = n("711334"),
        i = n("991160");

    function a(e) {
        return (0, r.useStateFromStores)([o.default], function() {
            return null != e ? o.default.getParticipantCount(e, i.StageChannelParticipantNamedIndex.BLOCKED) : 0
        }, [e])
    }

    function u(e) {
        var t;
        return null !== (t = o.default.getParticipantCount(e, i.StageChannelParticipantNamedIndex.BLOCKED)) && void 0 !== t ? t : 0
    }

    function s(e) {
        return (0, r.useStateFromStores)([o.default], function() {
            return o.default.getMutableParticipants(e, i.StageChannelParticipantNamedIndex.BLOCKED)
        }, [e])
    }
}