function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        parseSelectedSyntax: function() {
            return d
        },
        toggleMarkdownStyle: function() {
            return h
        },
        toggleBlockStyle: function() {
            return x
        }
    }), n("222007");
    var i = n("627445"),
        l = n.n(i),
        a = n("83800"),
        s = n("939563"),
        r = n("385887");
    let o = new Set(["*", "_", "~", "`", "|"]),
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
        let i = c(e, t),
            l = c(e, n);
        for (let e in i) !(e in l) && delete i[e];
        for (let e in l) !(e in i) && delete l[e];
        return {
            before: i,
            after: l
        }
    }

    function c(e, t) {
        let [n] = r.EditorUtils.node(e, t.path);
        if (!r.TextUtils.isText(n)) return {};
        let i = n.text,
            l = t.offset;
        for (let e = l - 1; e >= 0 && o.has(i.charAt(e)); e--) l--;
        let a = t.offset;
        for (let e = a; e < i.length && o.has(i.charAt(e)); e++) a++;
        let s = i.substring(l, a),
            u = {};
        return m({
            result: u,
            text: s,
            startIndex: l,
            syntax: "***",
            type1: "italics",
            type2: "bold"
        }), m({
            result: u,
            text: s,
            startIndex: l,
            syntax: "___",
            type1: "italics",
            type2: "underline"
        }), f(u, s, l, "**", "bold"), f(u, s, l, "*", "italics"), f(u, s, l, "_", "italics"), f(u, s, l, "__", "underline"), f(u, s, l, "`", "inlineCode"), f(u, s, l, "~~", "strikethrough"), f(u, s, l, "||", "spoiler"), u
    }

    function f(e, t, n, i, l) {
        let a = p(t, i);
        a >= 0 && (e[l] = {
            chars: i,
            location: n + a
        })
    }

    function m(e) {
        let {
            result: t,
            text: n,
            startIndex: i,
            syntax: l,
            type1: a,
            type2: s
        } = e, r = p(n, l);
        r >= 0 && (t[a] = {
            chars: l.substring(0, 1),
            location: r + i
        }, t[s] = {
            chars: l.substring(1),
            location: r + i + 1
        })
    }

    function p(e, t) {
        let n = e.indexOf(t);
        if (n >= 0) {
            let i = t.charAt(0);
            if (n > 0 && e.charAt(n - 1) === i || n < e.length - 1 && e.charAt(n + t.length) === i) return -1
        }
        return n
    }

    function h(e, t) {
        a.HistoryUtils.withSingleEntry(e, () => {
            r.EditorUtils.withoutNormalizing(e, () => {
                l(null != e.selection, "Editor has no selection");
                let [n, i] = r.RangeUtils.edges(e.selection), a = d(e, n, i), o = a.before[t], c = a.after[t], f = r.EditorUtils.node(e, n.path), m = r.EditorUtils.node(e, i.path);
                if (null == f || null == m || !r.TextUtils.isText(f[0]) || !r.TextUtils.isText(m[0])) return;
                let p = r.PathUtils.equals(f[1], m[1]);
                if (null != o && null != c) {
                    let t = {
                            path: n.path,
                            offset: o.location
                        },
                        l = {
                            path: i.path,
                            offset: c.location
                        };
                    s.SlateTransforms.delete(e, {
                        at: l,
                        distance: c.chars.length
                    }), s.SlateTransforms.delete(e, {
                        at: t,
                        distance: o.chars.length
                    });
                    let a = n.offset,
                        u = i.offset;
                    !r.PointUtils.isBefore(n, t) && (a -= o.chars.length), p && !r.PointUtils.isBefore(i, t) && (u -= o.chars.length), r.PointUtils.isAfter(i, l) && (u -= c.chars.length), s.SlateTransforms.select(e, {
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
                    let l = u[t];
                    s.SlateTransforms.insertText(e, l, {
                        at: i
                    }), s.SlateTransforms.insertText(e, l, {
                        at: n
                    });
                    let a = f[0].text.length + l.length,
                        r = m[0].text.length + (p ? 2 * l.length : l.length);
                    s.SlateTransforms.select(e, {
                        anchor: {
                            path: n.path,
                            offset: Math.min(a, n.offset + l.length)
                        },
                        focus: {
                            path: i.path,
                            offset: Math.min(r, i.offset + (p ? l.length : 0))
                        }
                    })
                }
            })
        }), r.EditorUtils.focus(e)
    }

    function x(e, t) {
        let n = e.selection;
        if (null == n) return;
        let i = !0;
        for (let [l, a] of r.EditorUtils.blocks(e))("line" === l.type || l.type === t) && r.RangeUtils.includes(n, a) && (i = i && l.type === t);
        r.EditorUtils.withoutNormalizing(e, () => {
            for (let [l, a] of r.EditorUtils.blocks(e)) r.RangeUtils.includes(n, a) && (i || "line" !== l.type ? i && l.type === t && s.SlateTransforms.setNodes(e, {
                type: "line"
            }, {
                at: a
            }) : s.SlateTransforms.setNodes(e, {
                type: t
            }, {
                at: a
            }))
        }), r.EditorUtils.focus(e)
    }
}