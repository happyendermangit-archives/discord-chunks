function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return function e(t) {
                return ["html", "body", "#document"].indexOf((0, a.default)(t)) >= 0 ? t.ownerDocument.body : (0, o.isHTMLElement)(t) && (0, i.default)(t) ? t : e((0, r.default)(t))
            }
        }
    });
    var r = n("660027"),
        i = n("538018"),
        a = n("316138"),
        o = n("882159")
}