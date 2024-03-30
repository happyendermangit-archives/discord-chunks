function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.r(t), n.d(t, {
        FEEDBACK_FREEFORM_LENGTH: function() {
            return s
        },
        FeedbackRating: function() {
            return a
        },
        FeedbackType: function() {
            return u
        },
        FeedbackTypePrecedence: function() {
            return l
        }
    });
    (i = a || (a = {})).BAD = "bad", i.NEUTRAL = "neutral", i.GOOD = "good";
    var o, i, a, u, s = 1024;
    (o = u || (u = {}))[o.VOICE = 0] = "VOICE", o[o.STREAM = 1] = "STREAM", o[o.VIDEO_BACKGROUND = 2] = "VIDEO_BACKGROUND", o[o.ACTIVITY = 3] = "ACTIVITY", o[o.IN_APP_REPORTS = 4] = "IN_APP_REPORTS";
    var l = [2, 1, 3, 0, 4].reduce(function(e, t, n) {
        var o, i;
        return o = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), o.forEach(function(t) {
                    r(e, t, n[t])
                })
            }
            return e
        }({}, e), i = null != (i = r({}, t, n)) ? i : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(i)).forEach(function(e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
        }), o
    }, {})
}