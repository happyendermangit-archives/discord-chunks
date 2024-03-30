function(e, t, n) {
    "use strict";

    function r(e) {
        return !((null == e ? void 0 : e.type) !== 0 && (null == e ? void 0 : e.type) !== 1)
    }

    function o(e) {
        return (null == e ? void 0 : e.type) === 2
    }
    n.r(t), n.d(t, {
        EMOJI_PICKER_EMOJI_TO_SHOW_COUNT: function() {
            return d
        },
        PIP_WIDTH: function() {
            return f
        },
        ParticipantSelectionTypes: function() {
            return l
        },
        ParticipantTypes: function() {
            return s
        },
        VoicePlatforms: function() {
            return c
        },
        isStreamParticipant: function() {
            return r
        },
        isUserParticipant: function() {
            return o
        }
    }), (i = s || (s = {}))[i.STREAM = 0] = "STREAM", i[i.HIDDEN_STREAM = 1] = "HIDDEN_STREAM", i[i.USER = 2] = "USER", i[i.ACTIVITY = 3] = "ACTIVITY", (a = l || (l = {})).NONE = "NONE", a.AUTO = "AUTO", (u = c || (c = {}))[u.DESKTOP = 0] = "DESKTOP", u[u.MOBILE = 1] = "MOBILE", u[u.XBOX = 2] = "XBOX", u[u.PLAYSTATION = 3] = "PLAYSTATION";
    var i, a, u, s, l, c, f = 320,
        d = 8
}