function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        logMessageSendFailure: function() {
            return i
        }
    });
    var r = n("140817"),
        o = n("281767");

    function i(e) {
        var t, n, i = null != e.fileItems ? function(e) {
                return e.map(function(e) {
                    var t;
                    return null !== (t = e.mimeType) && void 0 !== t ? t : "unknown"
                })
            }(e.fileItems) : [],
            a = null !== (t = e.errorMessage) && void 0 !== t ? t : void 0,
            u = null !== (n = e.failureCode) && void 0 !== n ? n : void 0;
        (0, r.trackWithMetadata)(o.AnalyticEvents.SEND_MESSAGE_FAILURE, {
            failure_code: u,
            error_message: a,
            attachment_mimetypes: i
        })
    }
}