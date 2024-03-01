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
            return E
        }
    }), n("222007");
    var l = n("627445"),
        i = n.n(l),
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
        let l = c(e, t),
            i = c(e, n);
        for (let e in l) !(e in i) && delete l[e];
        for (let e in i) !(e in l) && delete i[e];
        return {
            before: l,
            after: i
        }
    }

    function c(e, t) {
        let [n] = r.EditorUtils.node(e, t.path);
        if (!r.TextUtils.isText(n)) return {};
        let l = n.text,
            i = t.offset;
        for (let e = i - 1; e >= 0 && o.has(l.charAt(e)); e--) i--;
        let a = t.offset;
        for (let e = a; e < l.length && o.has(l.charAt(e)); e++) a++;
        let s = l.substring(i, a),
            u = {};
        return m({
            result: u,
            text: s,
            startIndex: i,
            syntax: "***",
            type1: "italics",
            type2: "bold"
        }), m({
            result: u,
            text: s,
            startIndex: i,
            syntax: "___",
            type1: "italics",
            type2: "underline"
        }), f(u, s, i, "**", "bold"), f(u, s, i, "*", "italics"), f(u, s, i, "_", "italics"), f(u, s, i, "__", "underline"), f(u, s, i, "`", "inlineCode"), f(u, s, i, "~~", "strikethrough"), f(u, s, i, "||", "spoiler"), u
    }

    function f(e, t, n, l, i) {
        let a = p(t, l);
        a >= 0 && (e[i] = {
            chars: l,
            location: n + a
        })
    }

    function m(e) {
        let {
            result: t,
            text: n,
            startIndex: l,
            syntax: i,
            type1: a,
            type2: s
        } = e, r = p(n, i);
        r >= 0 && (t[a] = {
            chars: i.substring(0, 1),
            location: r + l
        }, t[s] = {
            chars: i.substring(1),
            location: r + l + 1
        })
    }

    function p(e, t) {
        let n = e.indexOf(t);
        if (n >= 0) {
            let l = t.charAt(0);
            if (n > 0 && e.charAt(n - 1) === l || n < e.length - 1 && e.charAt(n + t.length) === l) return -1
        }
        return n
    }

    function h(e, t) {
        a.HistoryUtils.withSingleEntry(e, () => {
            r.EditorUtils.withoutNormalizing(e, () => {
                i(null != e.selection, "Editor has no selection");
                let [n, l] = r.RangeUtils.edges(e.selection), a = d(e, n, l), o = a.before[t], c = a.after[t], f = r.EditorUtils.node(e, n.path), m = r.EditorUtils.node(e, l.path);
                if (null == f || null == m || !r.TextUtils.isText(f[0]) || !r.TextUtils.isText(m[0])) return;
                let p = r.PathUtils.equals(f[1], m[1]);
                if (null != o && null != c) {
                    let t = {
                            path: n.path,
                            offset: o.location
                        },
                        i = {
                            path: l.path,
                            offset: c.location
                        };
                    s.SlateTransforms.delete(e, {
                        at: i,
                        distance: c.chars.length
                    }), s.SlateTransforms.delete(e, {
                        at: t,
                        distance: o.chars.length
                    });
                    let a = n.offset,
                        u = l.offset;
                    !r.PointUtils.isBefore(n, t) && (a -= o.chars.length), p && !r.PointUtils.isBefore(l, t) && (u -= o.chars.length), r.PointUtils.isAfter(l, i) && (u -= c.chars.length), s.SlateTransforms.select(e, {
                        anchor: {
                            path: n.path,
                            offset: Math.max(0, a)
                        },
                        focus: {
                            path: l.path,
                            offset: Math.max(0, u)
                        }
                    })
                } else {
                    let i = u[t];
                    s.SlateTransforms.insertText(e, i, {
                        at: l
                    }), s.SlateTransforms.insertText(e, i, {
                        at: n
                    });
                    let a = f[0].text.length + i.length,
                        r = m[0].text.length + (p ? 2 * i.length : i.length);
                    s.SlateTransforms.select(e, {
                        anchor: {
                            path: n.path,
                            offset: Math.min(a, n.offset + i.length)
                        },
                        focus: {
                            path: l.path,
                            offset: Math.min(r, l.offset + (p ? i.length : 0))
                        }
                    })
                }
            })
        }), r.EditorUtils.focus(e)
    }

    function E(e, t) {
        let n = e.selection;
        if (null == n) return;
        let l = !0;
        for (let [i, a] of r.EditorUtils.blocks(e))("line" === i.type || i.type === t) && r.RangeUtils.includes(n, a) && (l = l && i.type === t);
        r.EditorUtils.withoutNormalizing(e, () => {
            for (let [i, a] of r.EditorUtils.blocks(e)) r.RangeUtils.includes(n, a) && (l || "line" !== i.type ? l && i.type === t && s.SlateTransforms.setNodes(e, {
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