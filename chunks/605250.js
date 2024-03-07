function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return a
        }
    }), E("222007");
    var t = E("811022"),
        o = E("821316");
    let n = Date.now(),
        r = n;
    (0, t.setLogFn)(function(e, _, E) {
        for (var t = arguments.length, a = Array(t > 3 ? t - 3 : 0), i = 3; i < t; i++) a[i - 3] = arguments[i];
        let I = Date.now(),
            T = ((I - n) / 1e3).toFixed(3),
            s = ((I - r) / 1e3).toFixed(3),
            S = "Σ:".concat(T, "s, Δ:").concat(s, "s");
        r = I, o.report({
            name: e,
            timing: S
        }, E, ...a), "file-only" !== _ && console[_]("%c[".concat(e, "]"), "\nfont-weight: bold;\ncolor: purple;\n", E, ...a)
    });
    var a = t.default
}