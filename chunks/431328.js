function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useActualStageSpeakerCount: function() {
            return d
        },
        useSortedRequestToSpeakParticipants: function() {
            return u
        },
        useStageParticipants: function() {
            return o
        },
        useStageParticipantsCount: function() {
            return l
        }
    }), n("47120");
    var i = n("442837"),
        r = n("136015"),
        s = n("565799"),
        a = n("501655");

    function o(e, t) {
        let [n] = (0, i.useStateFromStores)([s.default], () => [s.default.getMutableParticipants(e, t), s.default.getParticipantsVersion(e)], [e, t], r.isVersionEqual);
        return n
    }

    function l(e, t) {
        return (0, i.useStateFromStores)([s.default], () => s.default.getParticipantCount(e, t), [e, t])
    }

    function u(e) {
        let [t] = (0, i.useStateFromStores)([s.default], () => [s.default.getMutableRequestToSpeakParticipants(e), s.default.getRequestToSpeakParticipantsVersion(e)], [e], r.isVersionEqual);
        return t
    }

    function d(e) {
        return (0, i.useStateFromStores)([s.default], () => s.default.getMutableParticipants(e, a.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === a.StageChannelParticipantTypes.VOICE).length, [e])
    }
}