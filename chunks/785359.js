function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        logMessageSendFailure: function() {
            return s
        }
    });
    var i = n("367907"),
        r = n("981631");

    function s(e) {
        var t, n;
        let s = null != e.fileItems ? function(e) {
                return e.map(e => {
                    var t;
                    return null !== (t = e.mimeType) && void 0 !== t ? t : "unknown"
                })
            }(e.fileItems) : [],
            a = null !== (t = e.errorMessage) && void 0 !== t ? t : void 0,
            o = null !== (n = e.failureCode) && void 0 !== n ? n : void 0;
        (0, i.trackWithMetadata)(r.AnalyticEvents.SEND_MESSAGE_FAILURE, {
            failure_code: o,
            error_message: a,
            attachment_mimetypes: s
        })
    }
}