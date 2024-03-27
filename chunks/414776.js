function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FluidValue: function() {
            return c
        },
        addFluidObserver: function() {
            return u
        },
        getFluidConfig: function() {
            return o
        },
        getFluidValue: function() {
            return a
        },
        hasFluidValue: function() {
            return i
        },
        setFluidConfig: function() {
            return s
        }
    });
    var r = Symbol.for("FluidValue:config"),
        i = function(e) {
            return !!o(e)
        };

    function a(e) {
        var t = o(e);
        return t ? t.get() : e
    }

    function o(e) {
        if (e) return e[r]
    }

    function s(e, t) {
        Object.defineProperty(e, r, {
            value: t,
            configurable: !0
        })
    }

    function u(e, t) {
        var n = o(e);
        if (n) return n.addChild(t),
            function() {
                return n.removeChild(t)
            }
    }
    var c = function() {
        s(this, this)
    }
}