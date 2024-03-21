function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        },
        isPointInCodeBlock: function() {
            return T
        },
        hasOpenPlainTextCodeBlock: function() {
            return _
        }
    }), n("222007"), n("70102"), n("424973"), n("781738");
    var i = n("436443"),
        l = n("693566"),
        a = n.n(l),
        s = n("718517"),
        r = n("86256"),
        o = n("83800"),
        u = n("970153"),
        d = n("939563"),
        c = n("385887"),
        f = n("566819");
    let p = new Set(["line"]),
        m = i.default.listLanguages(),
        h = {};
    for (let e of m) {
        e = e.toLowerCase();
        let t = i.default.getLanguage(e);
        if (null == t) continue;
        let n = t.aliases;
        if (h[e] = e, null != n)
            for (let t of n) h[t.toLowerCase()] = e
    }
    let x = /^[a-z0-9_+\-.#]+$/,
        E = /^[a-z0-9_+\-.#]+$/i;
    for (let e in h)
        if (null == e.match(x)) throw Error("Language name does not match regex: ".concat(e));

    function y(e) {
        let {
            onChange: t
        } = e, n = null;
        return e.onChange = () => {
            c.EditorUtils.richValue(e) !== n && (o.HistoryUtils.withMergedEntry(e, () => {
                c.EditorUtils.withoutNormalizing(e, () => (function(e) {
                    let t = function(e) {
                        let t = [],
                            n = null;
                        for (let i of c.EditorUtils.blocks(e)) {
                            let l = null != n && (n.isInCodeBlock || n.opensCodeBlock),
                                a = null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine),
                                s = null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null;
                            n = function(e, t, n, i, l) {
                                var a;
                                let s = function(e) {
                                        let t;
                                        let [n, i] = e;
                                        if (!p.has(n.type)) return [];
                                        let l = [],
                                            a = /\\|```/g;
                                        for (let e = 0; e < n.children.length; e++) {
                                            let s = n.children[e];
                                            if (c.TextUtils.isText(s))
                                                for (a.lastIndex = 0; null != (t = a.exec(s.text));) {
                                                    if ("\\" === t[0]) {
                                                        a.lastIndex += 1;
                                                        continue
                                                    }
                                                    l.push({
                                                        path: c.PathUtils.child(i, e),
                                                        offset: t.index
                                                    })
                                                }
                                        }
                                        return l
                                    }(t),
                                    r = s[0],
                                    o = s[s.length - 1],
                                    u = null;
                                if (null != o) {
                                    let [t] = c.EditorUtils.node(e, o.path);
                                    u = t.text.substring(o.offset + 3)
                                }
                                let d = n && null != r,
                                    f = n && 0 === s.length,
                                    m = i && 0 === s.length,
                                    x = d ? s.slice(1) : s,
                                    y = x.length % 2 == 1,
                                    g = y && (null == u || "" === u || null != u.match(E)),
                                    S = g && null != u && null !== (a = h[u.toLowerCase()]) && void 0 !== a ? a : null;
                                return {
                                    blockEntry: t,
                                    wasInCodeBlock: n,
                                    isInCodeBlock: f,
                                    isStyledCodeBlockLine: m,
                                    lang: y || d ? S : l,
                                    hljsTypes: null,
                                    closesCodeBlock: d,
                                    opensCodeBlock: y,
                                    opensCodeBlockOnOwnLine: g
                                }
                            }(e, i, l, a, s), t.push(n)
                        }
                        return function(e) {
                            let t = [],
                                n = !1;
                            for (let l of e) {
                                let a = l === e[e.length - 1];
                                if ((l.closesCodeBlock || a) && (n && a && !l.closesCodeBlock && t.push(l), n = !1, t.length > 0)) {
                                    let e = t.map(e => (0, u.serializeDescendant)(e.blockEntry[0])).join("\n"),
                                        n = t[0],
                                        l = n.lang;
                                    if (null != l && null != i.default.getLanguage(l)) {
                                        let n = function(e, t) {
                                            let n = "".concat(e, "-").concat(t),
                                                i = C.get(n);
                                            if (null != i) return i;
                                            let l = r.default.highlight(t, e, !1);
                                            if (null == l || l.illegal) return null;
                                            let a = l.value.split("\n");
                                            return C.set(n, a), a
                                        }(e, l);
                                        if (null != n && n.length === t.length) {
                                            let e = [];
                                            for (let i = 0; i < t.length; i++) {
                                                let l;
                                                let a = n[i].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'"),
                                                    s = [],
                                                    r = 0,
                                                    o = 0;
                                                for (; null != (l = g.exec(a));) {
                                                    let t = l.index + l[0].length,
                                                        n = l.index - o;
                                                    l.index > o && (e.length > 0 && s.push({
                                                        types: [...e],
                                                        start: r,
                                                        end: r + n
                                                    }), r += n), "</span>" === l[0] ? e.pop() : e.push(l[1]), o = t
                                                }
                                                if (e.length > 0) {
                                                    let t = a.length - o;
                                                    s.push({
                                                        types: [...e],
                                                        start: r,
                                                        end: r + t
                                                    })
                                                }
                                                t[i].hljsTypes = s
                                            }
                                        } else
                                            for (let e = 0; e < t.length; e++) t[e].hljsTypes = null
                                    }
                                    t = []
                                }
                                n && t.push(l), l.opensCodeBlock && (n = !0)
                            }
                        }(t), t
                    }(e);
                    (function(e, t) {
                        for (let n of t) {
                            let [t, i] = n.blockEntry, l = function(e) {
                                return e.isStyledCodeBlockLine || e.wasInCodeBlock ? {
                                    lang: e.lang,
                                    wasInCodeBlock: e.wasInCodeBlock,
                                    isInCodeBlock: e.isInCodeBlock,
                                    isStyledCodeBlockLine: e.isStyledCodeBlockLine,
                                    hljsTypes: e.hljsTypes
                                } : null
                            }(n);
                            (null == t ? void 0 : t.codeBlockState) != l && d.SlateTransforms.setNodes(e, {
                                codeBlockState: l
                            }, {
                                at: i
                            })
                        }
                    })(e, t)
                })(e))
            }), n = c.EditorUtils.richValue(e)), t()
        }, e
    }
    let g = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
        S = {
            max: 1 / 0,
            maxAge: 1 * s.default.Millis.MINUTE,
            updateAgeOnGet: !0
        },
        C = new a(S);

    function T(e, t) {
        let n = 0;
        for (let l of c.EditorUtils.nodes(e, {
                at: {
                    anchor: {
                        path: f.FIRST_TEXT_PATH,
                        offset: 0
                    },
                    focus: t
                },
                mode: "lowest",
                match: e => c.TextUtils.isText(e)
            })) {
            var i;
            let e = l[0].text;
            c.PathUtils.equals(l[1], t.path) && (e = e.substring(0, t.offset));
            let a = e.match(/```/g);
            n += null !== (i = null == a ? void 0 : a.length) && void 0 !== i ? i : 0
        }
        return n % 2 != 0
    }

    function _(e) {
        if (null == e.selection) return !1;
        let t = c.RangeUtils.start(e.selection);
        return T(e, t)
    }
}