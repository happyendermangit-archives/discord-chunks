function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("904335");
    let r = {
            LATIN12: i.latin12CompactTimeStamp,
            LATIN24: i.latin24CompactTimeStamp,
            ASIAN: i.asianCompactTimeStamp
        },
        a = /(AM|PM)$/;

    function s(e) {
        return null != e.match(a) ? r.LATIN24 : e.length <= 5 ? r.LATIN12 : r.ASIAN
    }
}