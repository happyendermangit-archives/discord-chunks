function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("856593"),
        a = {
            y: function(e, t) {
                var n = e.getUTCFullYear(),
                    a = n > 0 ? n : 1 - n;
                return (0, r.default)("yy" === t ? a % 100 : a, t.length)
            },
            M: function(e, t) {
                var n = e.getUTCMonth();
                return "M" === t ? String(n + 1) : (0, r.default)(n + 1, 2)
            },
            d: function(e, t) {
                return (0, r.default)(e.getUTCDate(), t.length)
            },
            a: function(e, t) {
                var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
                switch (t) {
                    case "a":
                    case "aa":
                        return n.toUpperCase();
                    case "aaa":
                        return n;
                    case "aaaaa":
                        return n[0];
                    default:
                        return "am" === n ? "a.m." : "p.m."
                }
            },
            h: function(e, t) {
                return (0, r.default)(e.getUTCHours() % 12 || 12, t.length)
            },
            H: function(e, t) {
                return (0, r.default)(e.getUTCHours(), t.length)
            },
            m: function(e, t) {
                return (0, r.default)(e.getUTCMinutes(), t.length)
            },
            s: function(e, t) {
                return (0, r.default)(e.getUTCSeconds(), t.length)
            },
            S: function(e, t) {
                var n = t.length,
                    a = e.getUTCMilliseconds();
                return (0, r.default)(Math.floor(a * Math.pow(10, n - 3)), t.length)
            }
        }
}