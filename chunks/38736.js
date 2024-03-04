function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = function() {
        for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = function e(t) {
            var n, r, i = "";
            if ("string" == typeof t || "number" == typeof t) i += t;
            else if ("object" == typeof t) {
                if (Array.isArray(t))
                    for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (i && (i += " "), i += r);
                else
                    for (n in t) t[n] && (i && (i += " "), i += n)
            }
            return i
        }(e)) && (r && (r += " "), r += t);
        return r
    }
}