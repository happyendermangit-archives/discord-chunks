function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("47120"), n("390547"), n("411104");
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("887490"),
        o = n("453875"),
        l = n("697692"),
        u = n("223697");
    let d = {
        strong: o.bold,
        em: o.italics,
        u: o.underline,
        s: o.strikethrough,
        inlineCode: o.inlineCode,
        link: o.fakeLink,
        url: o.fakeLink,
        autolink: o.fakeLink,
        spoiler: s()(u.spoilerContent, u.spoilerMarkdownContent, u.obscuredTextContent, o.spoiler),
        staticRouteLink: o.fakeLink,
        syntaxBefore: o.syntaxBefore,
        syntaxAfter: o.syntaxAfter,
        codeBlockText: o.codeBlockText,
        codeBlockSyntax: o.codeBlockSyntax,
        codeBlockLang: o.codeBlockLang
    };

    function _(e, t) {
        let n;
        let {
            attributes: r,
            children: u,
            leaf: _,
            text: c
        } = t, E = !1, [I] = a.EditorUtils.node(e, a.PathUtils.parent(a.EditorUtils.findPath(e, c)));
        switch (a.EditorUtils.isEditor(I) ? "editor" : I.type) {
            case "line":
            case "blockQuote": {
                E = void 0;
                let e = Object.entries(_).filter(e => {
                    let [t] = e;
                    return "text" !== t
                }).flatMap(e => {
                    let [t, n] = e;
                    if ("hljsTypes" === t) return n;
                    if (!0 === n) {
                        if (("codeBlockLang" === t || "codeBlockSyntax" === t) && (E = !1), t.startsWith("before_") || t.startsWith("after_")) return [o[t]];
                        if (t in d) return [d[t]];
                        throw Error("Slate: Unknown decoration attribute: ".concat(t))
                    }
                }).filter(e => null != e).join(" ");
                n = s()(e, {
                    [o.syntaxOverride]: "||" === _.text || "\\" === _.text
                })
            }
        }
        return n = s()(n, {
            [l.emptyText]: "" === c.text
        }), (0, i.jsx)("span", {
            ...r,
            className: n,
            spellCheck: E,
            children: u
        })
    }
}