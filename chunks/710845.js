function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("259443"),
        r = n("569611");
    let s = Date.now(),
        a = s;
    (0, i.setLogFn)(function(e, t, n) {
        for (var i = arguments.length, o = Array(i > 3 ? i - 3 : 0), l = 3; l < i; l++) o[l - 3] = arguments[l];
        let u = Date.now(),
            d = ((u - s) / 1e3).toFixed(3),
            _ = ((u - a) / 1e3).toFixed(3),
            c = "Σ:".concat(d, "s, Δ:").concat(_, "s");
        a = u, r.report({
            name: e,
            timing: c
        }, n, ...o), "file-only" !== t && console[t]("%c[".concat(e, "]"), "\nfont-weight: bold;\ncolor: purple;\n", n, ...o)
    }), t.default = i.Logger
}