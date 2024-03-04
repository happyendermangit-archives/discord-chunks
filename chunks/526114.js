function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        reduce: function() {
            return c
        }
    }), n("424973");
    var r = n("234160"),
        i = n("714413"),
        o = n("579934"),
        s = n("930056"),
        a = n("125692");

    function c() {
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.NONE;
        var e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case r.HOVER:
                break;
            case i.ADD_SOURCE:
            case i.ADD_TARGET:
            case i.REMOVE_TARGET:
            case i.REMOVE_SOURCE:
                return s.NONE;
            case r.BEGIN_DRAG:
            case r.PUBLISH_DRAG_SOURCE:
            case r.END_DRAG:
            case r.DROP:
            default:
                return s.ALL
        }
        var t = e.payload,
            n = t.targetIds,
            c = void 0 === n ? [] : n,
            u = t.prevTargetIds,
            d = void 0 === u ? [] : u,
            l = (0, a.xor)(c, d);
        if (!(l.length > 0 || !(0, o.areArraysEqual)(c, d))) return s.NONE;
        var f = d[d.length - 1],
            p = c[c.length - 1];
        return f !== p && (f && l.push(f), p && l.push(p)), l
    }
}