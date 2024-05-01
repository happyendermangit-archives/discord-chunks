function(e, t, n) {
    "use strict";
    var i, r, a, s;
    n.r(t), n.d(t, {
        FEEDBACK_FREEFORM_LENGTH: function() {
            return o
        },
        FeedbackRating: function() {
            return i
        },
        FeedbackType: function() {
            return r
        },
        FeedbackTypePrecedence: function() {
            return l
        }
    }), n("724458"), (a = i || (i = {})).BAD = "bad", a.NEUTRAL = "neutral", a.GOOD = "good";
    let o = 1024;
    (s = r || (r = {}))[s.VOICE = 0] = "VOICE", s[s.STREAM = 1] = "STREAM", s[s.VIDEO_BACKGROUND = 2] = "VIDEO_BACKGROUND", s[s.ACTIVITY = 3] = "ACTIVITY", s[s.IN_APP_REPORTS = 4] = "IN_APP_REPORTS";
    let l = [2, 1, 3, 0, 4].reduce((e, t, n) => ({
        ...e,
        [t]: n
    }), {})
}