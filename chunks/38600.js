function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var a = n("356296");
    let s = {
            LATIN12: a.latin12CompactTimeStamp,
            LATIN24: a.latin24CompactTimeStamp,
            ASIAN: a.asianCompactTimeStamp
        },
        r = /(AM|PM)$/;

    function i(e) {
        return null != e.match(r) ? s.LATIN24 : e.length <= 5 ? s.LATIN12 : s.ASIAN
    }
}