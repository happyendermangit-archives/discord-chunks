function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getStageHasMedia: function() {
            return u
        },
        isStageVideoEnabled: function() {
            return d
        },
        useStageHasMedia: function() {
            return l
        }
    });
    var i = n("442837"),
        r = n("430824"),
        s = n("979651"),
        a = n("565799"),
        o = n("501655");

    function l(e) {
        let t = function(e) {
            return (0, i.useStateFromStores)([a.default], () => null != a.default.getMutableParticipants(e, o.StageChannelParticipantNamedIndex.SPEAKER).find(e => e.type === o.StageChannelParticipantTypes.STREAM), [e])
        }(e);
        return (0, i.useStateFromStores)([s.default], () => s.default.hasVideo(e), [e]) || t
    }

    function u(e) {
        return function(e) {
            return null != a.default.getMutableParticipants(e, o.StageChannelParticipantNamedIndex.SPEAKER).find(e => e.type === o.StageChannelParticipantTypes.STREAM)
        }(e) || s.default.hasVideo(e)
    }

    function d(e) {
        var t;
        let n = r.default.getGuild(e);
        return null != n && (null !== (t = null == n ? void 0 : n.maxStageVideoChannelUsers) && void 0 !== t ? t : 0) > 0
    }
}