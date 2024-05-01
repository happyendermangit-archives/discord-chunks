function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("544891"),
        r = n("981631"),
        a = n("689938");
    class s extends i.V6OrEarlierAPIError {
        constructor(e, t) {
            super(e, t, null != t ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                statusPageURL: r.Links.STATUS,
                details: "".concat(t)
            }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                statusPageURL: r.Links.STATUS
            }))
        }
    }
}