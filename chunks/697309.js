function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        top: function() {
            return r
        },
        bottom: function() {
            return a
        },
        right: function() {
            return o
        },
        left: function() {
            return i
        },
        auto: function() {
            return s
        },
        basePlacements: function() {
            return u
        },
        start: function() {
            return l
        },
        end: function() {
            return c
        },
        clippingParents: function() {
            return d
        },
        viewport: function() {
            return f
        },
        popper: function() {
            return p
        },
        reference: function() {
            return m
        },
        variationPlacements: function() {
            return h
        },
        placements: function() {
            return y
        },
        modifierPhases: function() {
            return _
        }
    }), n("808653");
    var r = "top",
        a = "bottom",
        o = "right",
        i = "left",
        s = "auto",
        u = [r, a, o, i],
        l = "start",
        c = "end",
        d = "clippingParents",
        f = "viewport",
        p = "popper",
        m = "reference",
        h = u.reduce(function(e, t) {
            return e.concat([t + "-" + l, t + "-" + c])
        }, []),
        y = [].concat(u, [s]).reduce(function(e, t) {
            return e.concat([t, t + "-" + l, t + "-" + c])
        }, []),
        _ = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"]
}