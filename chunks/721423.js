function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_NUM_SUGGESTED_STICKERS: function() {
            return a
        },
        MAX_NUM_USER_INPUT_WORDS: function() {
            return o
        },
        DELAY_BEFORE_SUGGESTIONS_MS: function() {
            return l
        },
        SUGGESTIONS_SHOWED_INSTRUMENTATION_RATE_LIMIT_MS: function() {
            return u
        },
        REQUEST_THROTTLE_DURATION_MS: function() {
            return d
        }
    });
    var i, s, r = n("718517");
    let a = 4,
        o = 5,
        l = 350,
        u = r.default.Millis.MINUTE,
        d = 2 * r.default.Millis.MINUTE;
    (i = s || (s = {}))[i.STICKER = 0] = "STICKER"
}