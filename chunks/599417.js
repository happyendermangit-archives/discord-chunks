function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r, i = n("872717"),
        l = n("49111"),
        u = n("782340");
    r = class extends i.default.V8APIError {
        constructor(e, t) {
            super(e, t, null != t ? u.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                statusPageURL: l.Links.STATUS,
                details: "".concat(t)
            }) : u.default.Messages.FORM_ERROR_GENERIC.format({
                statusPageURL: l.Links.STATUS
            }))
        }
    }
}