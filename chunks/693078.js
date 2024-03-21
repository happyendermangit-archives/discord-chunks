function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("781738");
    var i = n("627445"),
        s = n.n(i),
        r = n("404828"),
        a = n.n(r);
    let o = /\n{2,}$/,
        l = /(?:^|\n)( *)$/,
        u = "(?:[*-]|\\d+\\.)",
        d = "( *)(" + u + ") +",
        c = RegExp("^" + d),
        _ = RegExp(d + "[^\\n]*(?:\\n(?!\\1" + u + " )[^\\n]*)*(\n|$)", "gm"),
        f = / *\n$/,
        E = RegExp("^( *)(" + u + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + u + " )|$)"),
        h = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
        g = e => e.map(e => ("text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e)),
        m = {
            ...a.defaultRules.list,
            requiredFirstCharacters: " *-0123456789".split(""),
            match: (e, t) => {
                if (!t.allowList || t._listLevel >= 11) return null;
                let n = null == t.prevCapture ? "" : t.prevCapture[0],
                    i = l.exec(n);
                return null == i || h.test(i[0]) ? null : E.exec(e)
            },
            parse: (e, t, n) => {
                let i = e[2],
                    r = i.length > 1,
                    a = e[0].replace(o, "\n").match(_);
                s(null != a, "markup list items can not be parsed.");
                let l = !1,
                    u = a.map((e, i) => {
                        let s;
                        let r = c.exec(e),
                            o = null != r ? r[0].length : 0,
                            u = RegExp("^ {1," + o + "}", "gm"),
                            d = e.replace(u, "").replace(c, ""),
                            _ = i === a.length - 1,
                            E = -1 !== d.indexOf("\n\n"),
                            h = E || _ && l;
                        l = h;
                        let m = n.inline,
                            p = n._list,
                            S = n._listLevel;
                        n._list = !0, n._listLevel = (null != S ? S : 0) + 1, h ? (n.inline = !1, s = d.replace(f, "\n\n")) : (n.inline = !0, s = d.replace(f, ""));
                        let v = g(t(s, {
                            ...n,
                            allowHeading: !1
                        }));
                        return n.inline = m, n._list = p, n._listLevel = S, v
                    });
                return {
                    ordered: r,
                    start: r ? Math.min(1e9, Math.max(1, +i)) : void 0,
                    items: u
                }
            }
        };
    var p = m
}