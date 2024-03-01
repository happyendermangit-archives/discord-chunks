function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return i
        }
    }), E("222007");
    var t = E("811022"),
        o = E("821316");
    let n = Date.now(),
        r = n;
    (0, t.setLogFn)(function(e, _, E) {
        for (var t = arguments.length, i = Array(t > 3 ? t - 3 : 0), a = 3; a < t; a++) i[a - 3] = arguments[a];
        let I = Date.now(),
            s = ((I - n) / 1e3).toFixed(3),
            T = ((I - r) / 1e3).toFixed(3),
            S = "Σ:".concat(s, "s, Δ:").concat(T, "s");
        r = I, o.report({
            name: e,
            timing: S
        }, E, ...i), "file-only" !== _ && console[_]("%c[".concat(e, "]"), "\nfont-weight: bold;\ncolor: purple;\n", E, ...i)
    });
    var i = t.default
}