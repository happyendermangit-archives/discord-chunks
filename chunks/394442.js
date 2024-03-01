function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("222007"), n("424973"), n("808653");
    var r = n("697309");

    function a(e) {
        var t, n, a, o, i = (t = e, n = new Map, a = new Set, o = [], t.forEach(function(e) {
            n.set(e.name, e)
        }), t.forEach(function(e) {
            !a.has(e.name) && ! function e(t) {
                a.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                    if (!a.has(t)) {
                        var r = n.get(t);
                        r && e(r)
                    }
                }), o.push(t)
            }(e)
        }), o);
        return r.modifierPhases.reduce(function(e, t) {
            return e.concat(i.filter(function(e) {
                return e.phase === t
            }))
        }, [])
    }
}