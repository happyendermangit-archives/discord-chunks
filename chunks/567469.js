function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useStageParticipants: function() {
            return l
        },
        useStageParticipantsCount: function() {
            return u
        },
        useSortedRequestToSpeakParticipants: function() {
            return o
        },
        useActualStageSpeakerCount: function() {
            return d
        }
    }), n("222007");
    var a = n("446674"),
        r = n("334572"),
        s = n("488464"),
        i = n("998716");

    function l(e, t) {
        let [n] = (0, a.useStateFromStores)([s.default], () => [s.default.getMutableParticipants(e, t), s.default.getParticipantsVersion(e)], [e, t], r.isVersionEqual);
        return n
    }

    function u(e, t) {
        return (0, a.useStateFromStores)([s.default], () => s.default.getParticipantCount(e, t), [e, t])
    }

    function o(e) {
        let [t] = (0, a.useStateFromStores)([s.default], () => {
            let t = s.default.getMutableRequestToSpeakParticipants(e);
            return [t, s.default.getRequestToSpeakParticipantsVersion(e)]
        }, [e], r.isVersionEqual);
        return t
    }

    function d(e) {
        return (0, a.useStateFromStores)([s.default], () => {
            let t = s.default.getMutableParticipants(e, i.StageChannelParticipantNamedIndex.SPEAKER),
                n = t.filter(e => e.type === i.StageChannelParticipantTypes.VOICE);
            return n.length
        }, [e])
    }
}