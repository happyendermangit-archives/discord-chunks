function(e, t, n) {
    "use strict";
    var i, s, r, a, o, l;

    function u(e) {
        return !((null == e ? void 0 : e.type) !== 0 && (null == e ? void 0 : e.type) !== 1)
    }

    function d(e) {
        return (null == e ? void 0 : e.type) === 2
    }
    n.r(t), n.d(t, {
        ParticipantTypes: function() {
            return i
        },
        ParticipantSelectionTypes: function() {
            return s
        },
        VoicePlatforms: function() {
            return r
        },
        isStreamParticipant: function() {
            return u
        },
        isUserParticipant: function() {
            return d
        },
        PIP_WIDTH: function() {
            return c
        },
        EMOJI_PICKER_EMOJI_TO_SHOW_COUNT: function() {
            return _
        }
    }), (a = i || (i = {}))[a.STREAM = 0] = "STREAM", a[a.HIDDEN_STREAM = 1] = "HIDDEN_STREAM", a[a.USER = 2] = "USER", a[a.ACTIVITY = 3] = "ACTIVITY", (o = s || (s = {})).NONE = "NONE", o.AUTO = "AUTO", (l = r || (r = {}))[l.DESKTOP = 0] = "DESKTOP", l[l.MOBILE = 1] = "MOBILE", l[l.XBOX = 2] = "XBOX", l[l.PLAYSTATION = 3] = "PLAYSTATION";
    let c = 320,
        _ = 8
}