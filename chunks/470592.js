function(t, r, n) {
    "use strict";
    var e = n("581031"),
        o = n("936940"),
        i = n("332916"),
        u = Object,
        c = e("".split);
    t.exports = o(function() {
        return !u("z").propertyIsEnumerable(0)
    }) ? function(t) {
        return "String" === i(t) ? c(t, "") : u(t)
    } : u
}