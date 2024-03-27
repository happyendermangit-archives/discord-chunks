function(e, t, n) {
    "use strict";
    var i, r, s, a;
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
    }), n("724458"), (s = i || (i = {})).BAD = "bad", s.NEUTRAL = "neutral", s.GOOD = "good";
    let o = 1024;
    (a = r || (r = {}))[a.VOICE = 0] = "VOICE", a[a.STREAM = 1] = "STREAM", a[a.VIDEO_BACKGROUND = 2] = "VIDEO_BACKGROUND", a[a.ACTIVITY = 3] = "ACTIVITY", a[a.IN_APP_REPORTS = 4] = "IN_APP_REPORTS";
    let l = [2, 1, 3, 0, 4].reduce((e, t, n) => ({
        ...e,
        [t]: n
    }), {})
}