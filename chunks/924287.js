function(t, e, r) {
    "use strict";
    r.r(e), r.d(e, {
        iterSet: function() {
            return o
        }
    });
    var n = r("544524"),
        i = r("46505"),
        a = r("737912");

    function o(t, e, r, o, s, u) {
        var d = {},
            y = t.accept;

        function c(t, e) {
            r.forEach(function(r) {
                r.between(t, e, !0).forEach(function(t) {
                    d[Number(t)] = !0
                })
            })
        }
        s.forEach(function(t) {
            d[Number(new(0, n.DateWithZone)(t, u).rezonedDate())] = !0
        }), t.accept = function(t) {
            var e = Number(t);
            return isNaN(e) ? y.call(this, t) : !!d[e] || (c(new Date(e - 1), new Date(e + 1)), !!d[e]) || (d[e] = !0, y.call(this, t))
        }, "between" === t.method && (c(t.args.after, t.args.before), t.accept = function(t) {
            var e = Number(t);
            return !!d[e] || (d[e] = !0, y.call(this, t))
        });
        for (var h = 0; h < o.length; h++) {
            var l = new(0, n.DateWithZone)(o[h], u).rezonedDate();
            if (!t.accept(new Date(l.getTime()))) break
        }
        e.forEach(function(e) {
            (0, i.iter)(t, e.options)
        });
        var f = t._result;
        switch ((0, a.sort)(f), t.method) {
            case "all":
            case "between":
                return f;
            case "before":
                return f.length && f[f.length - 1] || null;
            default:
                return f.length && f[0] || null
        }
    }
}