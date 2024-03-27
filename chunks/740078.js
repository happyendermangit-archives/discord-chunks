function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        auto: function() {
            return s
        },
        basePlacements: function() {
            return u
        },
        bottom: function() {
            return i
        },
        clippingParents: function() {
            return d
        },
        end: function() {
            return l
        },
        left: function() {
            return o
        },
        modifierPhases: function() {
            return _
        },
        placements: function() {
            return g
        },
        popper: function() {
            return p
        },
        reference: function() {
            return h
        },
        right: function() {
            return a
        },
        start: function() {
            return c
        },
        top: function() {
            return r
        },
        variationPlacements: function() {
            return m
        },
        viewport: function() {
            return f
        }
    });
    var r = "top",
        i = "bottom",
        a = "right",
        o = "left",
        s = "auto",
        u = [r, i, a, o],
        c = "start",
        l = "end",
        d = "clippingParents",
        f = "viewport",
        p = "popper",
        h = "reference",
        m = u.reduce(function(e, t) {
            return e.concat([t + "-" + c, t + "-" + l])
        }, []),
        g = [].concat(u, [s]).reduce(function(e, t) {
            return e.concat([t, t + "-" + c, t + "-" + l])
        }, []),
        _ = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"]
}