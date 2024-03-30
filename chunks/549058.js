function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DELAY_BEFORE_SUGGESTIONS_MS: function() {
            return l
        },
        MAX_NUM_SUGGESTED_STICKERS: function() {
            return a
        },
        MAX_NUM_USER_INPUT_WORDS: function() {
            return o
        },
        REQUEST_THROTTLE_DURATION_MS: function() {
            return d
        },
        SUGGESTIONS_SHOWED_INSTRUMENTATION_RATE_LIMIT_MS: function() {
            return u
        }
    });
    var i, r, s = n("70956");
    let a = 4,
        o = 5,
        l = 350,
        u = s.default.Millis.MINUTE,
        d = 2 * s.default.Millis.MINUTE;
    (i = r || (r = {}))[i.STICKER = 0] = "STICKER"
}