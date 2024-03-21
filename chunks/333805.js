function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, s = n("872717"),
        r = n("49111"),
        a = n("782340");
    i = class extends s.V6OrEarlierAPIError {
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