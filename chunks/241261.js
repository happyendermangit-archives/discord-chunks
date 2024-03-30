function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DELAY_BEFORE_SUGGESTIONS_MS: function() {
            return s
        },
        MAX_NUM_SUGGESTED_STICKERS: function() {
            return a
        },
        MAX_NUM_USER_INPUT_WORDS: function() {
            return u
        },
        REQUEST_THROTTLE_DURATION_MS: function() {
            return c
        },
        SUGGESTIONS_SHOWED_INSTRUMENTATION_RATE_LIMIT_MS: function() {
            return l
        }
    });
    var r, o, i = n("388990"),
        a = 4,
        u = 5,
        s = 350,
        l = i.default.Millis.MINUTE,
        c = 2 * i.default.Millis.MINUTE;
    (r = o || (o = {}))[r.STICKER = 0] = "STICKER"
}