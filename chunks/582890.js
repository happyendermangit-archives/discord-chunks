function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("879547"),
        o = n("388990"),
        i = n("523018");

    function a(e) {
        if (null == e.threadMetadata) return 0;
        var t = e.threadMetadata.autoArchiveDuration * o.default.Millis.MINUTE;
        return function(e) {
            if (null == e.threadMetadata) return 0;
            var t, n = null !== (t = r.default.lastMessageId(e.id)) && void 0 !== t ? t : e.id;
            return Math.max(i.default.extractTimestamp(n), null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0)
        }(e) + t
    }
}