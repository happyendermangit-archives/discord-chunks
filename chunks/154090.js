function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        reflectionEquals: function() {
            return a
        }
    }), n("222007");
    var r = n("803628");

    function a(e, t, n) {
        if (t === n) return !0;
        if (!t || !n) return !1;
        for (let a of e.fields) {
            let e = a.localName,
                l = a.oneof ? t[a.oneof][e] : t[e],
                c = a.oneof ? n[a.oneof][e] : n[e];
            switch (a.kind) {
                case "enum":
                case "scalar":
                    let d = "enum" == a.kind ? r.ScalarType.INT32 : a.T;
                    if (!(a.repeat ? s(d, l, c) : i(d, l, c))) return !1;
                    break;
                case "map":
                    if (!("message" == a.V.kind ? u(a.V.T(), o(l), o(c)) : s("enum" == a.V.kind ? r.ScalarType.INT32 : a.V.T, o(l), o(c)))) return !1;
                    break;
                case "message":
                    let f = a.T();
                    if (!(a.repeat ? u(f, l, c) : f.equals(l, c))) return !1
            }
        }
        return !0
    }
    let o = Object.values;

    function i(e, t, n) {
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
            if (!i(e, t[r], n[r])) return !1;
        return !0
    }

    function u(e, t, n) {
        if (t.length !== n.length) return !1;
        for (let r = 0; r < t.length; r++)
            if (!e.equals(t[r], n[r])) return !1;
        return !0
    }
}