function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return t
        }
    });
    var t, o = E("872717"),
        n = E("49111"),
        r = E("782340");
    t = class extends o.default.V6OrEarlierAPIError {
        constructor(e, _) {
            super(e, _, null != _ ? r.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                statusPageURL: n.Links.STATUS,
                details: "".concat(_)
            }) : r.default.Messages.FORM_ERROR_GENERIC.format({
                statusPageURL: n.Links.STATUS
            }))
        }
    }
}