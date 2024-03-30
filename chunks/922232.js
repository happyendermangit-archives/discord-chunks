function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("512722"),
        o = n.n(r),
        i = n("302454"),
        a = n.n(i);

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function s(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }
    var l = /\n{2,}$/,
        c = /(?:^|\n)( *)$/,
        f = "(?:[*-]|\\d+\\.)",
        d = "( *)(" + f + ") +",
        _ = RegExp("^" + d),
        E = RegExp(d + "[^\\n]*(?:\\n(?!\\1" + f + " )[^\\n]*)*(\n|$)", "gm"),
        p = / *\n$/,
        m = RegExp("^( *)(" + f + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + f + " )|$)"),
        y = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
        I = s(u({}, a().defaultRules.list), {
            requiredFirstCharacters: " *-0123456789".split(""),
            match: function(e, t) {
                if (!t.allowList || t._listLevel >= 11) return null;
                var n = null == t.prevCapture ? "" : t.prevCapture[0],
                    r = c.exec(n);
                return null == r || y.test(r[0]) ? null : m.exec(e)
            },
            parse: function(e, t, n) {
                var r = e[2],
                    i = r.length > 1,
                    a = e[0].replace(l, "\n").match(E);
                o()(null != a, "markup list items can not be parsed.");
                var c = !1;
                return {
                    ordered: i,
                    start: i ? Math.min(1e9, Math.max(1, +r)) : void 0,
                    items: a.map(function(e, r) {
                        var o, i = _.exec(e),
                            l = RegExp("^ {1," + (null != i ? i[0].length : 0) + "}", "gm"),
                            f = e.replace(l, "").replace(_, ""),
                            d = r === a.length - 1,
                            E = -1 !== f.indexOf("\n\n") || d && c;
                        c = E;
                        var m = n.inline,
                            y = n._list,
                            I = n._listLevel;
                        n._list = !0, n._listLevel = (null != I ? I : 0) + 1, E ? (n.inline = !1, o = f.replace(p, "\n\n")) : (n.inline = !0, o = f.replace(p, ""));
                        var h = t(o, s(u({}, n), {
                            allowHeading: !1
                        })).map(function(e) {
                            return "text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e
                        });
                        return n.inline = m, n._list = y, n._listLevel = I, h
                    })
                }
            }
        });
    t.default = I
}