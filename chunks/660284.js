function(e, t, n) {
    "use strict";

    function r(e) {
        let t = typeof e;
        if ("object" == t) {
            if (Array.isArray(e)) return "array";
            if (null === e) return "null"
        }
        return t
    }

    function i(e) {
        return null !== e && "object" == typeof e && !Array.isArray(e)
    }
    n.r(t), n.d(t, {
        isJsonObject: function() {
            return i
        },
        typeofJsonValue: function() {
            return r
        }
    })
}