function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("840918"),
        o = n("714196");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function a(e, t) {
        if (o.EditorUtils.areStylesDisabled(e)) return [];
        var n = (m = 2, function(e) {
                if (Array.isArray(e)) return e
            }(p = t) || function(e, t) {
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
            }(p, m) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }
            }(p, m) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            a = n[0],
            u = n[1],
            s = [];
        if (!o.NodeUtils.isType(a, "line") || null == a.codeBlockState) return s;
        var l = a.codeBlockState,
            c = l.hljsTypes,
            f = l.isStyledCodeBlockLine;
        if (null == c || 0 === c.length || !f) return [];
        var d = !0,
            _ = !1,
            E = void 0;
        try {
            for (var p, m, y, I = c[Symbol.iterator](); !(d = (y = I.next()).done); d = !0) {
                var h = y.value,
                    O = a.children.map(function(e) {
                        return o.TextUtils.isText(e) ? e.text : null
                    });
                s.push({
                    hljsTypes: h.types,
                    anchor: (0, r.getPointFromPosition)(e, u, O, h.start),
                    focus: (0, r.getPointFromPosition)(e, u, O, h.end)
                })
            }
        } catch (e) {
            _ = !0, E = e
        } finally {
            try {
                !d && null != I.return && I.return()
            } finally {
                if (_) throw E
            }
        }
        return s
    }
}