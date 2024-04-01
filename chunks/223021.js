function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var a = n("50182");
    let r = {
            LATIN12: a.latin12CompactTimeStamp,
            LATIN24: a.latin24CompactTimeStamp,
            ASIAN: a.asianCompactTimeStamp
        },
        i = /(AM|PM)$/;

    function s(e) {
        return null != e.match(i) ? r.LATIN24 : e.length <= 5 ? r.LATIN12 : r.ASIAN
    }
}