function(e, t, n) {
    "use strict";
    n.r(t), n("757143");
    var i = n("512722"),
        r = n.n(i),
        a = n("302454"),
        s = n.n(a);
    let o = /\n{2,}$/,
        l = /(?:^|\n)( *)$/,
        u = "(?:[*-]|\\d+\\.)",
        d = "( *)(" + u + ") +",
        _ = RegExp("^" + d),
        c = RegExp(d + "[^\\n]*(?:\\n(?!\\1" + u + " )[^\\n]*)*(\n|$)", "gm"),
        E = / *\n$/,
        I = RegExp("^( *)(" + u + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + u + " )|$)"),
        T = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
        f = e => e.map(e => ("text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e)),
        S = {
            ...s().defaultRules.list,
            requiredFirstCharacters: " *-0123456789".split(""),
            match: (e, t) => {
                if (!t.allowList || t._listLevel >= 11) return null;
                let n = null == t.prevCapture ? "" : t.prevCapture[0],
                    i = l.exec(n);
                return null == i || T.test(i[0]) ? null : I.exec(e)
            },
            parse: (e, t, n) => {
                let i = e[2],
                    a = i.length > 1,
                    s = e[0].replace(o, "\n").match(c);
                r()(null != s, "markup list items can not be parsed.");
                let l = !1;
                return {
                    ordered: a,
                    start: a ? Math.min(1e9, Math.max(1, +i)) : void 0,
                    items: s.map((e, i) => {
                        let r;
                        let a = _.exec(e),
                            o = RegExp("^ {1," + (null != a ? a[0].length : 0) + "}", "gm"),
                            u = e.replace(o, "").replace(_, ""),
                            d = i === s.length - 1,
                            c = -1 !== u.indexOf("\n\n") || d && l;
                        l = c;
                        let I = n.inline,
                            T = n._list,
                            S = n._listLevel;
                        n._list = !0, n._listLevel = (null != S ? S : 0) + 1, c ? (n.inline = !1, r = u.replace(E, "\n\n")) : (n.inline = !0, r = u.replace(E, ""));
                        let h = f(t(r, {
                            ...n,
                            allowHeading: !1
                        }));
                        return n.inline = I, n._list = T, n._listLevel = S, h
                    })
                }
            }
        };
    t.default = S
}