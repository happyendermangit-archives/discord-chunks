function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l;

    function u(e) {
        return !((null == e ? void 0 : e.type) !== 0 && (null == e ? void 0 : e.type) !== 1)
    }

    function d(e) {
        return (null == e ? void 0 : e.type) === 2
    }
    n.r(t), n.d(t, {
        EMOJI_PICKER_EMOJI_TO_SHOW_COUNT: function() {
            return c
        },
        PIP_WIDTH: function() {
            return _
        },
        ParticipantSelectionTypes: function() {
            return r
        },
        ParticipantTypes: function() {
            return i
        },
        VoicePlatforms: function() {
            return s
        },
        isStreamParticipant: function() {
            return u
        },
        isUserParticipant: function() {
            return d
        }
    }), (a = i || (i = {}))[a.STREAM = 0] = "STREAM", a[a.HIDDEN_STREAM = 1] = "HIDDEN_STREAM", a[a.USER = 2] = "USER", a[a.ACTIVITY = 3] = "ACTIVITY", (o = r || (r = {})).NONE = "NONE", o.AUTO = "AUTO", (l = s || (s = {}))[l.DESKTOP = 0] = "DESKTOP", l[l.MOBILE = 1] = "MOBILE", l[l.XBOX = 2] = "XBOX", l[l.PLAYSTATION = 3] = "PLAYSTATION";
    let _ = 320,
        c = 8
}