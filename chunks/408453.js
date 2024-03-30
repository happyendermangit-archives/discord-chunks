function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("453197"),
        o = n("714196"),
        i = n("188629");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e) {
        var t = e.apply,
            n = e.onChange;
        return e.apply = function(n) {
            t(n), o.SelectionUtils.isValid(e, e.selection) && (e.lastGoodSelection = e.selection)
        }, e.onChange = function() {
            if (!o.SelectionUtils.isValid(e, e.selection) && (e.selection = function(e) {
                    var t;
                    if (o.SelectionUtils.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
                    else {
                        var n = o.EditorUtils.end(e, []);
                        t = {
                            anchor: n,
                            focus: n
                        }
                    }
                    return t
                }(e)), null != e.selection) {
                for (var t, u, s, l, c = (t = o.RangeUtils.edges(e.selection), u = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t) || function(e, t) {
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
                    }(t, u) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                        }
                    }(t, u) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()), f = c[0], d = c[1], _ = !1; null != f && null != (s = o.EditorUtils.getParentVoid(e, f)) && !i.SELECTABLE_VOIDS.includes(s[0].type);) f = o.EditorUtils.before(e, f, {
                    unit: "offset"
                }), _ = !0;
                for (; null != d && null != (l = o.EditorUtils.getParentVoid(e, d)) && !i.SELECTABLE_VOIDS.includes(l[0].type);) d = o.EditorUtils.after(e, d, {
                    unit: "offset"
                }), _ = !0;
                _ && null != f && null != d && (o.RangeUtils.isForward(e.selection) ? r.SlateTransforms.select(e, {
                    anchor: f,
                    focus: d
                }) : r.SlateTransforms.select(e, {
                    anchor: d,
                    focus: f
                }))
            }
            n()
        }, e
    }
}