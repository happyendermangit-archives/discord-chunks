function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        parseSelectedSyntax: function() {
            return d
        },
        toggleBlockStyle: function() {
            return I
        },
        toggleMarkdownStyle: function() {
            return y
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("610045"),
        a = n("453197"),
        u = n("714196");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e, t) {
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
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var c = new Set(["*", "_", "~", "`", "|"]),
        f = {
            bold: "**",
            italics: "*",
            underline: "__",
            strikethrough: "~~",
            inlineCode: "`",
            spoiler: "||"
        };

    function d(e, t, n) {
        if (null == e.selection) return {
            before: {},
            after: {}
        };
        var r = _(e, t),
            o = _(e, n);
        for (var i in r) !(i in o) && delete r[i];
        for (var a in o) !(a in r) && delete o[a];
        return {
            before: r,
            after: o
        }
    }

    function _(e, t) {
        var n = l(u.EditorUtils.node(e, t.path), 1)[0];
        if (!u.TextUtils.isText(n)) return {};
        for (var r = n.text, o = t.offset, i = o - 1; i >= 0 && c.has(r.charAt(i)); i--) o--;
        for (var a = t.offset, s = a; s < r.length && c.has(r.charAt(s)); s++) a++;
        var f = r.substring(o, a),
            d = {};
        return p({
            result: d,
            text: f,
            startIndex: o,
            syntax: "***",
            type1: "italics",
            type2: "bold"
        }), p({
            result: d,
            text: f,
            startIndex: o,
            syntax: "___",
            type1: "italics",
            type2: "underline"
        }), E(d, f, o, "**", "bold"), E(d, f, o, "*", "italics"), E(d, f, o, "_", "italics"), E(d, f, o, "__", "underline"), E(d, f, o, "`", "inlineCode"), E(d, f, o, "~~", "strikethrough"), E(d, f, o, "||", "spoiler"), d
    }

    function E(e, t, n, r, o) {
        var i = m(t, r);
        i >= 0 && (e[o] = {
            chars: r,
            location: n + i
        })
    }

    function p(e) {
        var t = e.result,
            n = e.text,
            r = e.startIndex,
            o = e.syntax,
            i = e.type1,
            a = e.type2,
            u = m(n, o);
        u >= 0 && (t[i] = {
            chars: o.substring(0, 1),
            location: u + r
        }, t[a] = {
            chars: o.substring(1),
            location: u + r + 1
        })
    }

    function m(e, t) {
        var n = e.indexOf(t);
        if (n >= 0) {
            var r = t.charAt(0);
            if (n > 0 && e.charAt(n - 1) === r || n < e.length - 1 && e.charAt(n + t.length) === r) return -1
        }
        return n
    }

    function y(e, t) {
        i.HistoryUtils.withSingleEntry(e, function() {
            u.EditorUtils.withoutNormalizing(e, function() {
                o()(null != e.selection, "Editor has no selection");
                var n = l(u.RangeUtils.edges(e.selection), 2),
                    r = n[0],
                    i = n[1],
                    s = d(e, r, i),
                    c = s.before[t],
                    _ = s.after[t],
                    E = u.EditorUtils.node(e, r.path),
                    p = u.EditorUtils.node(e, i.path);
                if (null != E && null != p && u.TextUtils.isText(E[0]) && u.TextUtils.isText(p[0])) {
                    var m = u.PathUtils.equals(E[1], p[1]);
                    if (null != c && null != _) {
                        var y = {
                                path: r.path,
                                offset: c.location
                            },
                            I = {
                                path: i.path,
                                offset: _.location
                            };
                        a.SlateTransforms.delete(e, {
                            at: I,
                            distance: _.chars.length
                        }), a.SlateTransforms.delete(e, {
                            at: y,
                            distance: c.chars.length
                        });
                        var h = r.offset,
                            O = i.offset;
                        !u.PointUtils.isBefore(r, y) && (h -= c.chars.length), m && !u.PointUtils.isBefore(i, y) && (O -= c.chars.length), u.PointUtils.isAfter(i, I) && (O -= _.chars.length), a.SlateTransforms.select(e, {
                            anchor: {
                                path: r.path,
                                offset: Math.max(0, h)
                            },
                            focus: {
                                path: i.path,
                                offset: Math.max(0, O)
                            }
                        })
                    } else {
                        var T = f[t];
                        a.SlateTransforms.insertText(e, T, {
                            at: i
                        }), a.SlateTransforms.insertText(e, T, {
                            at: r
                        });
                        var S = E[0].text.length + T.length,
                            v = p[0].text.length + (m ? 2 * T.length : T.length);
                        a.SlateTransforms.select(e, {
                            anchor: {
                                path: r.path,
                                offset: Math.min(S, r.offset + T.length)
                            },
                            focus: {
                                path: i.path,
                                offset: Math.min(v, i.offset + (m ? T.length : 0))
                            }
                        })
                    }
                }
            })
        }), u.EditorUtils.focus(e)
    }

    function I(e, t) {
        var n = e.selection;
        if (null != n) {
            var r = !0,
                o = !0,
                i = !1,
                s = void 0;
            try {
                for (var c, f = u.EditorUtils.blocks(e)[Symbol.iterator](); !(o = (c = f.next()).done); o = !0) {
                    var d = l(c.value, 2),
                        _ = d[0],
                        E = d[1];
                    ("line" === _.type || _.type === t) && u.RangeUtils.includes(n, E) && (r = r && _.type === t)
                }
            } catch (e) {
                i = !0, s = e
            } finally {
                try {
                    !o && null != f.return && f.return()
                } finally {
                    if (i) throw s
                }
            }
            u.EditorUtils.withoutNormalizing(e, function() {
                var o = !0,
                    i = !1,
                    s = void 0;
                try {
                    for (var c, f = u.EditorUtils.blocks(e)[Symbol.iterator](); !(o = (c = f.next()).done); o = !0) {
                        var d = l(c.value, 2),
                            _ = d[0],
                            E = d[1];
                        u.RangeUtils.includes(n, E) && (r || "line" !== _.type ? r && _.type === t && a.SlateTransforms.setNodes(e, {
                            type: "line"
                        }, {
                            at: E
                        }) : a.SlateTransforms.setNodes(e, {
                            type: t
                        }, {
                            at: E
                        }))
                    }
                } catch (e) {
                    i = !0, s = e
                } finally {
                    try {
                        !o && null != f.return && f.return()
                    } finally {
                        if (i) throw s
                    }
                }
            }), u.EditorUtils.focus(e)
        }
    }
}