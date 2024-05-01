function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        parseSelectedSyntax: function() {
            return d
        },
        toggleBlockStyle: function() {
            return f
        },
        toggleMarkdownStyle: function() {
            return T
        }
    }), n("47120");
    var i = n("512722"),
        r = n.n(i),
        a = n("53529"),
        s = n("436660"),
        o = n("887490");
    let l = new Set(["*", "_", "~", "`", "|"]),
        u = {
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
        let i = _(e, t),
            r = _(e, n);
        for (let e in i) !(e in r) && delete i[e];
        for (let e in r) !(e in i) && delete r[e];
        return {
            before: i,
            after: r
        }
    }

    function _(e, t) {
        let [n] = o.EditorUtils.node(e, t.path);
        if (!o.TextUtils.isText(n)) return {};
        let i = n.text,
            r = t.offset;
        for (let e = r - 1; e >= 0 && l.has(i.charAt(e)); e--) r--;
        let a = t.offset;
        for (let e = a; e < i.length && l.has(i.charAt(e)); e++) a++;
        let s = i.substring(r, a),
            u = {};
        return E({
            result: u,
            text: s,
            startIndex: r,
            syntax: "***",
            type1: "italics",
            type2: "bold"
        }), E({
            result: u,
            text: s,
            startIndex: r,
            syntax: "___",
            type1: "italics",
            type2: "underline"
        }), c(u, s, r, "**", "bold"), c(u, s, r, "*", "italics"), c(u, s, r, "_", "italics"), c(u, s, r, "__", "underline"), c(u, s, r, "`", "inlineCode"), c(u, s, r, "~~", "strikethrough"), c(u, s, r, "||", "spoiler"), u
    }

    function c(e, t, n, i, r) {
        let a = I(t, i);
        a >= 0 && (e[r] = {
            chars: i,
            location: n + a
        })
    }

    function E(e) {
        let {
            result: t,
            text: n,
            startIndex: i,
            syntax: r,
            type1: a,
            type2: s
        } = e, o = I(n, r);
        o >= 0 && (t[a] = {
            chars: r.substring(0, 1),
            location: o + i
        }, t[s] = {
            chars: r.substring(1),
            location: o + i + 1
        })
    }

    function I(e, t) {
        let n = e.indexOf(t);
        if (n >= 0) {
            let i = t.charAt(0);
            if (n > 0 && e.charAt(n - 1) === i || n < e.length - 1 && e.charAt(n + t.length) === i) return -1
        }
        return n
    }

    function T(e, t) {
        a.HistoryUtils.withSingleEntry(e, () => {
            o.EditorUtils.withoutNormalizing(e, () => {
                r()(null != e.selection, "Editor has no selection");
                let [n, i] = o.RangeUtils.edges(e.selection), a = d(e, n, i), l = a.before[t], _ = a.after[t], c = o.EditorUtils.node(e, n.path), E = o.EditorUtils.node(e, i.path);
                if (null == c || null == E || !o.TextUtils.isText(c[0]) || !o.TextUtils.isText(E[0])) return;
                let I = o.PathUtils.equals(c[1], E[1]);
                if (null != l && null != _) {
                    let t = {
                            path: n.path,
                            offset: l.location
                        },
                        r = {
                            path: i.path,
                            offset: _.location
                        };
                    s.SlateTransforms.delete(e, {
                        at: r,
                        distance: _.chars.length
                    }), s.SlateTransforms.delete(e, {
                        at: t,
                        distance: l.chars.length
                    });
                    let a = n.offset,
                        u = i.offset;
                    !o.PointUtils.isBefore(n, t) && (a -= l.chars.length), I && !o.PointUtils.isBefore(i, t) && (u -= l.chars.length), o.PointUtils.isAfter(i, r) && (u -= _.chars.length), s.SlateTransforms.select(e, {
                        anchor: {
                            path: n.path,
                            offset: Math.max(0, a)
                        },
                        focus: {
                            path: i.path,
                            offset: Math.max(0, u)
                        }
                    })
                } else {
                    let r = u[t];
                    s.SlateTransforms.insertText(e, r, {
                        at: i
                    }), s.SlateTransforms.insertText(e, r, {
                        at: n
                    });
                    let a = c[0].text.length + r.length,
                        o = E[0].text.length + (I ? 2 * r.length : r.length);
                    s.SlateTransforms.select(e, {
                        anchor: {
                            path: n.path,
                            offset: Math.min(a, n.offset + r.length)
                        },
                        focus: {
                            path: i.path,
                            offset: Math.min(o, i.offset + (I ? r.length : 0))
                        }
                    })
                }
            })
        }), o.EditorUtils.focus(e)
    }

    function f(e, t) {
        let n = e.selection;
        if (null == n) return;
        let i = !0;
        for (let [r, a] of o.EditorUtils.blocks(e))("line" === r.type || r.type === t) && o.RangeUtils.includes(n, a) && (i = i && r.type === t);
        o.EditorUtils.withoutNormalizing(e, () => {
            for (let [r, a] of o.EditorUtils.blocks(e)) o.RangeUtils.includes(n, a) && (i || "line" !== r.type ? i && r.type === t && s.SlateTransforms.setNodes(e, {
                type: "line"
            }, {
                at: a
            }) : s.SlateTransforms.setNodes(e, {
                type: t
            }, {
                at: a
            }))
        }), o.EditorUtils.focus(e)
    }
}