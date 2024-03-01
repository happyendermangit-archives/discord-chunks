function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = function() {
        for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = function e(t) {
            var n, r, a = "";
            if ("string" == typeof t || "number" == typeof t) a += t;
            else if ("object" == typeof t) {
                if (Array.isArray(t))
                    for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (a && (a += " "), a += r);
                else
                    for (n in t) t[n] && (a && (a += " "), a += n)
            }
            return a
        }(e)) && (r && (r += " "), r += t);
        return r
    }
}