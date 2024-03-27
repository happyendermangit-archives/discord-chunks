function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("119352");
    t.default = {
        y: function(e, t) {
            var n = e.getUTCFullYear(),
                i = n > 0 ? n : 1 - n;
            return (0, r.default)("yy" === t ? i % 100 : i, t.length)
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
                i = e.getUTCMilliseconds();
            return (0, r.default)(Math.floor(i * Math.pow(10, n - 3)), t.length)
        }
    }
}