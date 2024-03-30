function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("188129"),
        o = n("887840");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function a(e) {
        return function(e) {
            if (Array.isArray(e)) return i(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var u = Date.now(),
        s = u;
    (0, r.setLogFn)(function(e, t, n) {
        for (var r, i = arguments.length, l = Array(i > 3 ? i - 3 : 0), c = 3; c < i; c++) l[c - 3] = arguments[c];
        var f = Date.now(),
            d = ((f - u) / 1e3).toFixed(3),
            _ = ((f - s) / 1e3).toFixed(3),
            E = "Σ:".concat(d, "s, Δ:").concat(_, "s");
        s = f, o.report.apply(o, [{
            name: e,
            timing: E
        }, n].concat(a(l))), "file-only" !== t && (r = console)[t].apply(r, ["%c[".concat(e, "]"), "\nfont-weight: bold;\ncolor: purple;\n", n].concat(a(l)))
    }), t.default = r.Logger
}