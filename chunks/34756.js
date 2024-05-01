function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("544891"),
        r = n("981631"),
        s = n("689938");
    class a extends i.V6OrEarlierAPIError {
        constructor(e, t) {
            super(e, t, null != t ? s.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                statusPageURL: r.Links.STATUS,
                details: "".concat(t)
            }) : s.default.Messages.FORM_ERROR_GENERIC.format({
                statusPageURL: r.Links.STATUS
            }))
        }
    }
}