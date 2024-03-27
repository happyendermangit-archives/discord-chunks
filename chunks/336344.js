function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        safeJoin: function() {
            return a
        },
        stringMatchesSomePattern: function() {
            return o
        },
        truncate: function() {
            return i
        }
    });
    var r = n("46834");

    function i(t, e = 0) {
        return "string" != typeof t || 0 === e ? t : t.length <= e ? t : `${t.slice(0,e)}...`
    }

    function a(t, e) {
        if (!Array.isArray(t)) return "";
        let n = [];
        for (let e = 0; e < t.length; e++) {
            let r = t[e];
            try {
                n.push(String(r))
            } catch (t) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(e)
    }

    function o(t, e = [], n = !1) {
        return e.some(e => (function(t, e, n = !1) {
            return !!(0, r.isString)(t) && ((0, r.isRegExp)(e) ? e.test(t) : !!(0, r.isString)(e) && (n ? t === e : t.includes(e)))
        })(t, e, n))
    }
}