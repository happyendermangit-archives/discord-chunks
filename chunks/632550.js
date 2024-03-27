function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007"), n("881410"), n("70102");
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("385887"),
        r = n("785217"),
        o = n("165555"),
        u = n("731574");
    let d = {
        strong: r.bold,
        em: r.italics,
        u: r.underline,
        s: r.strikethrough,
        inlineCode: r.inlineCode,
        link: r.fakeLink,
        url: r.fakeLink,
        autolink: r.fakeLink,
        spoiler: a(u.spoilerContent, u.spoilerMarkdownContent, u.obscuredTextContent, r.spoiler),
        staticRouteLink: r.fakeLink,
        syntaxBefore: r.syntaxBefore,
        syntaxAfter: r.syntaxAfter,
        codeBlockText: r.codeBlockText,
        codeBlockSyntax: r.codeBlockSyntax,
        codeBlockLang: r.codeBlockLang
    };

    function c(e, t) {
        let n;
        let {
            attributes: l,
            children: u,
            leaf: c,
            text: f
        } = t, m = !1, [p] = s.EditorUtils.node(e, s.PathUtils.parent(s.EditorUtils.findPath(e, f))), h = s.EditorUtils.isEditor(p) ? "editor" : p.type;
        switch (h) {
            case "line":
            case "blockQuote": {
                m = void 0;
                let e = Object.entries(c).filter(e => {
                    let [t] = e;
                    return "text" !== t
                }).flatMap(e => {
                    let [t, n] = e;
                    if ("hljsTypes" === t) return n;
                    if (!0 === n) {
                        if (("codeBlockLang" === t || "codeBlockSyntax" === t) && (m = !1), t.startsWith("before_") || t.startsWith("after_")) return [r[t]];
                        if (t in d) return [d[t]];
                        throw Error("Slate: Unknown decoration attribute: ".concat(t))
                    }
                }).filter(e => null != e).join(" ");
                n = a(e, {
                    [r.syntaxOverride]: "||" === c.text || "\\" === c.text
                })
            }
        }
        return n = a(n, {
            [o.emptyText]: "" === f.text
        }), (0, i.jsx)("span", {
            ...l,
            className: n,
            spellCheck: m,
            children: u
        })
    }
}