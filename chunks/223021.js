function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("904335");
    let r = {
            LATIN12: i.latin12CompactTimeStamp,
            LATIN24: i.latin24CompactTimeStamp,
            ASIAN: i.asianCompactTimeStamp
        },
        s = /(AM|PM)$/;

    function a(e) {
        return null != e.match(s) ? r.LATIN24 : e.length <= 5 ? r.LATIN12 : r.ASIAN
    }
}