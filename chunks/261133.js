function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("50182"),
        a = {
            LATIN12: r.latin12CompactTimeStamp,
            LATIN24: r.latin24CompactTimeStamp,
            ASIAN: r.asianCompactTimeStamp
        },
        o = /(AM|PM)$/;

    function i(e) {
        return null != e.match(o) ? a.LATIN24 : e.length <= 5 ? a.LATIN12 : a.ASIAN
    }
}