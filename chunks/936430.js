function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        drainClickstream: function() {
            return s
        },
        trackClickstream: function() {
            return u
        }
    });
    var r = n("870331"),
        o = n("50523");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var a = new Map;

    function u(e, t) {
        !a.has(e) && a.set(e, []);
        var r, o = n("407636").default;
        null === (r = a.get(e)) || void 0 === r || r.push(o(e, t))
    }

    function s() {
        if (!(0, o.clickstreamExperimentEnabled)()) {
            a.clear();
            return
        }
        var e = n("488073").default,
            t = !0,
            u = !1,
            s = void 0;
        try {
            for (var l, c = a[Symbol.iterator](); !(t = (l = c.next()).done); t = !0) {
                var f, d, _ = (f = l.value, d = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(f) || function(e, t) {
                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var i = [],
                                a = !0,
                                u = !1;
                            try {
                                for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                            } catch (e) {
                                u = !0, r = e
                            } finally {
                                try {
                                    !a && null != o.return && o.return()
                                } finally {
                                    if (u) throw r
                                }
                            }
                            return i
                        }
                    }(f, d) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                        }
                    }(f, d) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    E = _[0],
                    p = _[1];
                r.default.track(E, e(E, p))
            }
        } catch (e) {
            u = !0, s = e
        } finally {
            try {
                !t && null != c.return && c.return()
            } finally {
                if (u) throw s
            }
        }
        a.clear()
    }
}