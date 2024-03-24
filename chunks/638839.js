function(e, t, n) {
    "use strict";
    var r = n("20042")("%Object.defineProperty%", !0),
        a = function() {
            if (r) try {
                return r({}, "a", {
                    value: 1
                }), !0
            } catch (e) {}
            return !1
        };
    a.hasArrayLengthDefineBug = function() {
        if (!a()) return null;
        try {
            return 1 !== r([], "length", {
                value: 1
            }).length
        } catch (e) {
            return !0
        }
    }, e.exports = a
}