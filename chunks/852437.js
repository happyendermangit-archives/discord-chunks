function(e, t, n) {
    "use strict";
    var r = n("147018"),
        i = n("82246").findLast,
        a = n("345374");
    r({
        target: "Array",
        proto: !0
    }, {
        findLast: function(e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), a("findLast")
}