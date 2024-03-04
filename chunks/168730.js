function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        logMessageSendFailure: function() {
            return r
        }
    });
    var i = n("716241"),
        s = n("49111");

    function r(e) {
        var t, n;
        let r = null != e.fileItems ? function(e) {
                return e.map(e => {
                    var t;
                    return null !== (t = e.mimeType) && void 0 !== t ? t : "unknown"
                })
            }(e.fileItems) : [],
            a = null !== (t = e.errorMessage) && void 0 !== t ? t : void 0,
            o = null !== (n = e.failureCode) && void 0 !== n ? n : void 0;
        (0, i.trackWithMetadata)(s.AnalyticEvents.SEND_MESSAGE_FAILURE, {
            failure_code: o,
            error_message: a,
            attachment_mimetypes: r
        })
    }
}