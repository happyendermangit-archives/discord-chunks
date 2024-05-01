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
        s = n("53529"),
        a = n("436660"),
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
        let s = t.offset;
        for (let e = s; e < i.length && l.has(i.charAt(e)); e++) s++;
        let a = i.substring(r, s),
            u = {};
        return E({
            result: u,
            text: a,
            startIndex: r,
            syntax: "***",
            type1: "italics",
            type2: "bold"
        }), E({
            result: u,
            text: a,
            startIndex: r,
            syntax: "___",
            type1: "italics",
            type2: "underline"
        }), c(u, a, r, "**", "bold"), c(u, a, r, "*", "italics"), c(u, a, r, "_", "italics"), c(u, a, r, "__", "underline"), c(u, a, r, "`", "inlineCode"), c(u, a, r, "~~", "strikethrough"), c(u, a, r, "||", "spoiler"), u
    }

    function c(e, t, n, i, r) {
        let s = I(t, i);
        s >= 0 && (e[r] = {
            chars: i,
            location: n + s
        })
    }

    function E(e) {
        let {
            result: t,
            text: n,
            startIndex: i,
            syntax: r,
            type1: s,
            type2: a
        } = e, o = I(n, r);
        o >= 0 && (t[s] = {
            chars: r.substring(0, 1),
            location: o + i
        }, t[a] = {
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
        s.HistoryUtils.withSingleEntry(e, () => {
            o.EditorUtils.withoutNormalizing(e, () => {
                r()(null != e.selection, "Editor has no selection");
                let [n, i] = o.RangeUtils.edges(e.selection), s = d(e, n, i), l = s.before[t], _ = s.after[t], c = o.EditorUtils.node(e, n.path), E = o.EditorUtils.node(e, i.path);
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
                    a.SlateTransforms.delete(e, {
                        at: r,
                        distance: _.chars.length
                    }), a.SlateTransforms.delete(e, {
                        at: t,
                        distance: l.chars.length
                    });
                    let s = n.offset,
                        u = i.offset;
                    !o.PointUtils.isBefore(n, t) && (s -= l.chars.length), I && !o.PointUtils.isBefore(i, t) && (u -= l.chars.length), o.PointUtils.isAfter(i, r) && (u -= _.chars.length), a.SlateTransforms.select(e, {
                        anchor: {
                            path: n.path,
                            offset: Math.max(0, s)
                        },
                        focus: {
                            path: i.path,
                            offset: Math.max(0, u)
                        }
                    })
                } else {
                    let r = u[t];
                    a.SlateTransforms.insertText(e, r, {
                        at: i
                    }), a.SlateTransforms.insertText(e, r, {
                        at: n
                    });
                    let s = c[0].text.length + r.length,
                        o = E[0].text.length + (I ? 2 * r.length : r.length);
                    a.SlateTransforms.select(e, {
                        anchor: {
                            path: n.path,
                            offset: Math.min(s, n.offset + r.length)
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
        for (let [r, s] of o.EditorUtils.blocks(e))("line" === r.type || r.type === t) && o.RangeUtils.includes(n, s) && (i = i && r.type === t);
        o.EditorUtils.withoutNormalizing(e, () => {
            for (let [r, s] of o.EditorUtils.blocks(e)) o.RangeUtils.includes(n, s) && (i || "line" !== r.type ? i && r.type === t && a.SlateTransforms.setNodes(e, {
                type: "line"
            }, {
                at: s
            }) : a.SlateTransforms.setNodes(e, {
                type: t
            }, {
                at: s
            }))
        }), o.EditorUtils.focus(e)
    }
}