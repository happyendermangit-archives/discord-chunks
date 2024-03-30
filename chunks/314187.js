function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function i(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(e, t, n) {
        return [Math.floor(e / n) - 1, Math.ceil((e + t) / n) + 1]
    }
    var u = [0, 0];

    function s(e) {
        var t = e.chunkSize,
            n = e.getScrollerState,
            o = e.forceUpdate,
            s = n(),
            l = s.dirty,
            c = s.scrollTop,
            f = s.offsetHeight;
        (0, r.useLayoutEffect)(function() {
            l > 0 && o()
        }, [l, o]);
        var d = (0, r.useRef)(u);
        d.current = a(c, f, t);
        var _ = i(d.current, 2),
            E = _[0],
            p = _[1];
        return {
            forceUpdateOnChunkChange: (0, r.useCallback)(function(e) {
                var r = n(),
                    u = r.dirty,
                    s = r.scrollTop,
                    l = r.offsetHeight;
                if (!(u > 0)) {
                    var c = i(a(s, l, t), 2),
                        f = c[0],
                        _ = c[1];
                    f !== d.current[0] ? o() : 2 === e && _ !== d.current[1] && o()
                }
            }, [o, t, n]),
            chunkStart: E,
            chunkEnd: p,
            dirty: l
        }
    }
}