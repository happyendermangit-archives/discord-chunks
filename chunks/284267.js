function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        reflectionEquals: function() {
            return i
        }
    });
    var r = n("36056");

    function i(e, t, n) {
        if (t === n) return !0;
        if (!t || !n) return !1;
        for (let i of e.fields) {
            let e = i.localName,
                c = i.oneof ? t[i.oneof][e] : t[e],
                l = i.oneof ? n[i.oneof][e] : n[e];
            switch (i.kind) {
                case "enum":
                case "scalar":
                    let d = "enum" == i.kind ? r.ScalarType.INT32 : i.T;
                    if (!(i.repeat ? s(d, c, l) : o(d, c, l))) return !1;
                    break;
                case "map":
                    if (!("message" == i.V.kind ? u(i.V.T(), a(c), a(l)) : s("enum" == i.V.kind ? r.ScalarType.INT32 : i.V.T, a(c), a(l)))) return !1;
                    break;
                case "message":
                    let f = i.T();
                    if (!(i.repeat ? u(f, c, l) : f.equals(c, l))) return !1
            }
        }
        return !0
    }
    let a = Object.values;

    function o(e, t, n) {
        if (t === n) return !0;
        if (e !== r.ScalarType.BYTES) return !1;
        if (t.length !== n.length) return !1;
        for (let e = 0; e < t.length; e++)
            if (t[e] != n[e]) return !1;
        return !0
    }

    function s(e, t, n) {
        if (t.length !== n.length) return !1;
        for (let r = 0; r < t.length; r++)
            if (!o(e, t[r], n[r])) return !1;
        return !0
    }

    function u(e, t, n) {
        if (t.length !== n.length) return !1;
        for (let r = 0; r < t.length; r++)
            if (!e.equals(t[r], n[r])) return !1;
        return !0
    }
}