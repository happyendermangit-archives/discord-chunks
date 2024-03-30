function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getStageHasMedia: function() {
            return l
        },
        isStageVideoEnabled: function() {
            return c
        },
        useStageHasMedia: function() {
            return s
        }
    });
    var r = n("898511"),
        o = n("306912"),
        i = n("665863"),
        a = n("711334"),
        u = n("991160");

    function s(e) {
        var t = function(e) {
            return (0, r.useStateFromStores)([a.default], function() {
                return null != a.default.getMutableParticipants(e, u.StageChannelParticipantNamedIndex.SPEAKER).find(function(e) {
                    return e.type === u.StageChannelParticipantTypes.STREAM
                })
            }, [e])
        }(e);
        return (0, r.useStateFromStores)([i.default], function() {
            return i.default.hasVideo(e)
        }, [e]) || t
    }

    function l(e) {
        return function(e) {
            return null != a.default.getMutableParticipants(e, u.StageChannelParticipantNamedIndex.SPEAKER).find(function(e) {
                return e.type === u.StageChannelParticipantTypes.STREAM
            })
        }(e) || i.default.hasVideo(e)
    }

    function c(e) {
        var t, n = o.default.getGuild(e);
        return null != n && (null !== (t = null == n ? void 0 : n.maxStageVideoChannelUsers) && void 0 !== t ? t : 0) > 0
    }
}