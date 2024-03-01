function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useStageHasMedia: function() {
            return d
        },
        getStageHasMedia: function() {
            return u
        },
        isStageVideoEnabled: function() {
            return l
        }
    });
    var s = n("446674"),
        i = n("305961"),
        r = n("800762"),
        a = n("488464"),
        o = n("998716");

    function d(e) {
        let t = function(e) {
                return (0, s.useStateFromStores)([a.default], () => {
                    let t = a.default.getMutableParticipants(e, o.StageChannelParticipantNamedIndex.SPEAKER);
                    return null != t.find(e => e.type === o.StageChannelParticipantTypes.STREAM)
                }, [e])
            }(e),
            n = (0, s.useStateFromStores)([r.default], () => r.default.hasVideo(e), [e]);
        return n || t
    }

    function u(e) {
        return function(e) {
            let t = a.default.getMutableParticipants(e, o.StageChannelParticipantNamedIndex.SPEAKER);
            return null != t.find(e => e.type === o.StageChannelParticipantTypes.STREAM)
        }(e) || r.default.hasVideo(e)
    }

    function l(e) {
        var t;
        let n = i.default.getGuild(e);
        return null != n && (null !== (t = null == n ? void 0 : n.maxStageVideoChannelUsers) && void 0 !== t ? t : 0) > 0
    }
}