function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("660478"),
        s = n("718517"),
        r = n("299039");

    function a(e) {
        if (null == e.threadMetadata) return 0;
        let t = e.threadMetadata.autoArchiveDuration * s.default.Millis.MINUTE;
        return function(e) {
            var t;
            if (null == e.threadMetadata) return 0;
            let n = null !== (t = i.default.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
                s = r.default.extractTimestamp(n),
                a = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
            return Math.max(s, a)
        }(e) + t
    }
}