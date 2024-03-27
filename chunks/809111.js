function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        iterSet: function() {
            return o
        }
    });
    var r = n("829105"),
        i = n("150076"),
        a = n("695170");

    function o(e, t, n, o, s, u) {
        var c = {},
            l = e.accept;

        function d(e, t) {
            n.forEach(function(n) {
                n.between(e, t, !0).forEach(function(e) {
                    c[Number(e)] = !0
                })
            })
        }
        s.forEach(function(e) {
            c[Number(new r.DateWithZone(e, u).rezonedDate())] = !0
        }), e.accept = function(e) {
            var t = Number(e);
            return isNaN(t) ? l.call(this, e) : !!c[t] || (d(new Date(t - 1), new Date(t + 1)), !!c[t]) || (c[t] = !0, l.call(this, e))
        }, "between" === e.method && (d(e.args.after, e.args.before), e.accept = function(e) {
            var t = Number(e);
            return !!c[t] || (c[t] = !0, l.call(this, e))
        });
        for (var f = 0; f < o.length; f++) {
            var p = new r.DateWithZone(o[f], u).rezonedDate();
            if (!e.accept(new Date(p.getTime()))) break
        }
        t.forEach(function(t) {
            (0, i.iter)(e, t.options)
        });
        var h = e._result;
        switch ((0, a.sort)(h), e.method) {
            case "all":
            case "between":
                return h;
            case "before":
                return h.length && h[h.length - 1] || null;
            default:
                return h.length && h[0] || null
        }
    }
}