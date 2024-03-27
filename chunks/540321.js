function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("740078");

    function i(e) {
        var t, n, i, a, o = (t = e, n = new Map, i = new Set, a = [], t.forEach(function(e) {
            n.set(e.name, e)
        }), t.forEach(function(e) {
            !i.has(e.name) && ! function e(t) {
                i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                    if (!i.has(t)) {
                        var r = n.get(t);
                        r && e(r)
                    }
                }), a.push(t)
            }(e)
        }), a);
        return r.modifierPhases.reduce(function(e, t) {
            return e.concat(o.filter(function(e) {
                return e.phase === t
            }))
        }, [])
    }
}