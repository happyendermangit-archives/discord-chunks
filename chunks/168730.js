function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        logMessageSendFailure: function() {
            return s
        }
    });
    var a = n("716241"),
        l = n("49111");

    function s(e) {
        var t, n;
        let s = null != e.fileItems ? function(e) {
                return e.map(e => {
                    var t;
                    return null !== (t = e.mimeType) && void 0 !== t ? t : "unknown"
                })
            }(e.fileItems) : [],
            i = null !== (t = e.errorMessage) && void 0 !== t ? t : void 0,
            r = null !== (n = e.failureCode) && void 0 !== n ? n : void 0;
        (0, a.trackWithMetadata)(l.AnalyticEvents.SEND_MESSAGE_FAILURE, {
            failure_code: r,
            error_message: i,
            attachment_mimetypes: s
        })
    }
}