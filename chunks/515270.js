function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        },
        hasOpenPlainTextCodeBlock: function() {
            return p
        },
        isPointInCodeBlock: function() {
            return O
        }
    }), n("47120"), n("411104"), n("653041"), n("757143");
    var i = n("920478"),
        r = n("31775"),
        s = n.n(r),
        a = n("70956"),
        o = n("364964"),
        l = n("53529"),
        u = n("925994"),
        d = n("436660"),
        _ = n("887490"),
        c = n("42530");
    let E = new Set(["line"]),
        I = i.default.listLanguages(),
        T = {};
    for (let e of I) {
        e = e.toLowerCase();
        let t = i.default.getLanguage(e);
        if (null == t) continue;
        let n = t.aliases;
        if (T[e] = e, null != n)
            for (let t of n) T[t.toLowerCase()] = e
    }
    let f = /^[a-z0-9_+\-.#]+$/,
        S = /^[a-z0-9_+\-.#]+$/i;
    for (let e in T)
        if (null == e.match(f)) throw Error("Language name does not match regex: ".concat(e));

    function A(e) {
        let {
            onChange: t
        } = e, n = null;
        return e.onChange = () => {
            _.EditorUtils.richValue(e) !== n && (l.HistoryUtils.withMergedEntry(e, () => {
                _.EditorUtils.withoutNormalizing(e, () => (function(e) {
                    let t = function(e) {
                        let t = [],
                            n = null;
                        for (let i of _.EditorUtils.blocks(e)) {
                            let r = null != n && (n.isInCodeBlock || n.opensCodeBlock),
                                s = null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine);
                            n = function(e, t, n, i, r) {
                                var s;
                                let a = function(e) {
                                        let t;
                                        let [n, i] = e;
                                        if (!E.has(n.type)) return [];
                                        let r = [],
                                            s = /\\|```/g;
                                        for (let e = 0; e < n.children.length; e++) {
                                            let a = n.children[e];
                                            if (_.TextUtils.isText(a))
                                                for (s.lastIndex = 0; null != (t = s.exec(a.text));) {
                                                    if ("\\" === t[0]) {
                                                        s.lastIndex += 1;
                                                        continue
                                                    }
                                                    r.push({
                                                        path: _.PathUtils.child(i, e),
                                                        offset: t.index
                                                    })
                                                }
                                        }
                                        return r
                                    }(t),
                                    o = a[0],
                                    l = a[a.length - 1],
                                    u = null;
                                if (null != l) {
                                    let [t] = _.EditorUtils.node(e, l.path);
                                    u = t.text.substring(l.offset + 3)
                                }
                                let d = n && null != o,
                                    c = n && 0 === a.length,
                                    I = i && 0 === a.length,
                                    f = (d ? a.slice(1) : a).length % 2 == 1,
                                    A = f && (null == u || "" === u || null != u.match(S)),
                                    h = A && null != u && null !== (s = T[u.toLowerCase()]) && void 0 !== s ? s : null;
                                return {
                                    blockEntry: t,
                                    wasInCodeBlock: n,
                                    isInCodeBlock: c,
                                    isStyledCodeBlockLine: I,
                                    lang: f || d ? h : r,
                                    hljsTypes: null,
                                    closesCodeBlock: d,
                                    opensCodeBlock: f,
                                    opensCodeBlockOnOwnLine: A
                                }
                            }(e, i, r, s, null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null), t.push(n)
                        }
                        return function(e) {
                            let t = [],
                                n = !1;
                            for (let r of e) {
                                let s = r === e[e.length - 1];
                                if ((r.closesCodeBlock || s) && (n && s && !r.closesCodeBlock && t.push(r), n = !1, t.length > 0)) {
                                    let e = t.map(e => (0, u.serializeDescendant)(e.blockEntry[0])).join("\n"),
                                        n = t[0].lang;
                                    if (null != n && null != i.default.getLanguage(n)) {
                                        let i = function(e, t) {
                                            let n = "".concat(e, "-").concat(t),
                                                i = N.get(n);
                                            if (null != i) return i;
                                            let r = o.default.highlight(t, e, !1);
                                            if (null == r || r.illegal) return null;
                                            let s = r.value.split("\n");
                                            return N.set(n, s), s
                                        }(e, n);
                                        if (null != i && i.length === t.length) {
                                            let e = [];
                                            for (let n = 0; n < t.length; n++) {
                                                let r;
                                                let s = i[n].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'"),
                                                    a = [],
                                                    o = 0,
                                                    l = 0;
                                                for (; null != (r = h.exec(s));) {
                                                    let t = r.index + r[0].length,
                                                        n = r.index - l;
                                                    r.index > l && (e.length > 0 && a.push({
                                                        types: [...e],
                                                        start: o,
                                                        end: o + n
                                                    }), o += n), "</span>" === r[0] ? e.pop() : e.push(r[1]), l = t
                                                }
                                                if (e.length > 0) {
                                                    let t = s.length - l;
                                                    a.push({
                                                        types: [...e],
                                                        start: o,
                                                        end: o + t
                                                    })
                                                }
                                                t[n].hljsTypes = a
                                            }
                                        } else
                                            for (let e = 0; e < t.length; e++) t[e].hljsTypes = null
                                    }
                                    t = []
                                }
                                n && t.push(r), r.opensCodeBlock && (n = !0)
                            }
                        }(t), t
                    }(e);
                    (function(e, t) {
                        for (let n of t) {
                            let [t, i] = n.blockEntry, r = function(e) {
                                return e.isStyledCodeBlockLine || e.wasInCodeBlock ? {
                                    lang: e.lang,
                                    wasInCodeBlock: e.wasInCodeBlock,
                                    isInCodeBlock: e.isInCodeBlock,
                                    isStyledCodeBlockLine: e.isStyledCodeBlockLine,
                                    hljsTypes: e.hljsTypes
                                } : null
                            }(n);
                            (null == t ? void 0 : t.codeBlockState) != r && d.SlateTransforms.setNodes(e, {
                                codeBlockState: r
                            }, {
                                at: i
                            })
                        }
                    })(e, t)
                })(e))
            }), n = _.EditorUtils.richValue(e)), t()
        }, e
    }
    let h = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
        m = {
            max: 1 / 0,
            maxAge: 1 * a.default.Millis.MINUTE,
            updateAgeOnGet: !0
        },
        N = new(s())(m);

    function O(e, t) {
        let n = 0;
        for (let r of _.EditorUtils.nodes(e, {
                at: {
                    anchor: {
                        path: c.FIRST_TEXT_PATH,
                        offset: 0
                    },
                    focus: t
                },
                mode: "lowest",
                match: e => _.TextUtils.isText(e)
            })) {
            var i;
            let e = r[0].text;
            _.PathUtils.equals(r[1], t.path) && (e = e.substring(0, t.offset));
            let s = e.match(/```/g);
            n += null !== (i = null == s ? void 0 : s.length) && void 0 !== i ? i : 0
        }
        return n % 2 != 0
    }

    function p(e) {
        if (null == e.selection) return !1;
        let t = _.RangeUtils.start(e.selection);
        return O(e, t)
    }
}