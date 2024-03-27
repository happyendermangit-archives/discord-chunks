function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        reduce: function() {
            return u
        }
    });
    var r = n("263016"),
        i = n("40284"),
        a = n("304832"),
        o = n("603565"),
        s = n("144459");

    function u() {
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.NONE;
        var e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case r.HOVER:
                break;
            case i.ADD_SOURCE:
            case i.ADD_TARGET:
            case i.REMOVE_TARGET:
            case i.REMOVE_SOURCE:
                return o.NONE;
            case r.BEGIN_DRAG:
            case r.PUBLISH_DRAG_SOURCE:
            case r.END_DRAG:
            case r.DROP:
            default:
                return o.ALL
        }
        var t = e.payload,
            n = t.targetIds,
            u = void 0 === n ? [] : n,
            c = t.prevTargetIds,
            l = void 0 === c ? [] : c,
            d = (0, s.xor)(u, l);
        if (!(d.length > 0 || !(0, a.areArraysEqual)(u, l))) return o.NONE;
        var f = l[l.length - 1],
            p = u[u.length - 1];
        return f !== p && (f && d.push(f), p && d.push(p)), d
    }
}