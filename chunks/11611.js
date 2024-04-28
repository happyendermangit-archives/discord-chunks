function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("693598");

    function i(e, t) {
        if ("object" != (0, r.default)(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" != (0, r.default)(i)) return i;
            throw TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }
}