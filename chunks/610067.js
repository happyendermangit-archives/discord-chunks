function(t, r) {
    "use strict";
    var n = {}.propertyIsEnumerable,
        e = Object.getOwnPropertyDescriptor,
        o = e && !n.call({
            1: 2
        }, 1);
    r.f = o ? function(t) {
        var r = e(this, t);
        return !!r && r.enumerable
    } : n
}