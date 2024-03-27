function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hex3: function() {
            return l
        },
        hex4: function() {
            return d
        },
        hex6: function() {
            return f
        },
        hex8: function() {
            return p
        },
        hsl: function() {
            return u
        },
        hsla: function() {
            return c
        },
        rgb: function() {
            return o
        },
        rgba: function() {
            return s
        }
    });
    var r = "[-+]?\\d*\\.?\\d+",
        i = r + "%";

    function a() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
    }
    var o = RegExp("rgb" + a(r, r, r)),
        s = RegExp("rgba" + a(r, r, r, r)),
        u = RegExp("hsl" + a(r, i, i)),
        c = RegExp("hsla" + a(r, i, i, r)),
        l = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        d = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        f = /^#([0-9a-fA-F]{6})$/,
        p = /^#([0-9a-fA-F]{8})$/
}