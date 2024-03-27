function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createStringInterpolator: function() {
            return p
        }
    });
    var r, i = n("109393"),
        a = n("414776"),
        o = n("707506"),
        s = n("566867"),
        u = n("239189"),
        c = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        l = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        d = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        f = function(e, t, n, r, i) {
            return "rgba(" + Math.round(t) + ", " + Math.round(n) + ", " + Math.round(r) + ", " + i + ")"
        },
        p = function(e) {
            !r && (r = u.colorNames ? RegExp("(" + Object.keys(u.colorNames).join("|") + ")", "g") : /^\b$/);
            var t = e.output.map(function(e) {
                    return (0, a.getFluidValue)(e).replace(l, s.colorToRgba).replace(r, s.colorToRgba)
                }),
                n = t.map(function(e) {
                    return e.match(c).map(Number)
                }),
                p = n[0].map(function(e, t) {
                    return n.map(function(e) {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t]
                    })
                }).map(function(t) {
                    return (0, o.createInterpolator)((0, i.__assign)((0, i.__assign)({}, e), {
                        output: t
                    }))
                });
            return function(e) {
                var n = 0;
                return t[0].replace(c, function() {
                    return String(p[n++](e))
                }).replace(d, f)
            }
        }
}