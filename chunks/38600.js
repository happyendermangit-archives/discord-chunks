function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var a = n("356296");
    let i = {
            LATIN12: a.latin12CompactTimeStamp,
            LATIN24: a.latin24CompactTimeStamp,
            ASIAN: a.asianCompactTimeStamp
        },
        r = /(AM|PM)$/;

    function s(e) {
        return null != e.match(r) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN
    }
}