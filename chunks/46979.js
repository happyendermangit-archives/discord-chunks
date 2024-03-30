function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("714196"),
        u = n("97931"),
        s = n("500813"),
        l = n("681282");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var _ = {
        strong: u.bold,
        em: u.italics,
        u: u.underline,
        s: u.strikethrough,
        inlineCode: u.inlineCode,
        link: u.fakeLink,
        url: u.fakeLink,
        autolink: u.fakeLink,
        spoiler: i()(l.spoilerContent, l.spoilerMarkdownContent, l.obscuredTextContent, u.spoiler),
        staticRouteLink: u.fakeLink,
        syntaxBefore: u.syntaxBefore,
        syntaxAfter: u.syntaxAfter,
        codeBlockText: u.codeBlockText,
        codeBlockSyntax: u.codeBlockSyntax,
        codeBlockLang: u.codeBlockLang
    };

    function E(e, t) {
        var n, o, l, c = t.attributes,
            E = t.children,
            p = t.leaf,
            m = t.text,
            y = !1,
            I = d(a.EditorUtils.node(e, a.PathUtils.parent(a.EditorUtils.findPath(e, m))), 1)[0];
        switch (a.EditorUtils.isEditor(I) ? "editor" : I.type) {
            case "line":
            case "blockQuote":
                y = void 0;
                var h = Object.entries(p).filter(function(e) {
                    return "text" !== d(e, 1)[0]
                }).flatMap(function(e) {
                    var t = d(e, 2),
                        n = t[0],
                        r = t[1];
                    if ("hljsTypes" === n) return r;
                    if (!0 === r) {
                        if (("codeBlockLang" === n || "codeBlockSyntax" === n) && (y = !1), n.startsWith("before_") || n.startsWith("after_")) return [u[n]];
                        if (n in _) return [_[n]];
                        throw Error("Slate: Unknown decoration attribute: ".concat(n))
                    }
                }).filter(function(e) {
                    return null != e
                }).join(" ");
                l = i()(h, f({}, u.syntaxOverride, "||" === p.text || "\\" === p.text))
        }
        return l = i()(l, f({}, s.emptyText, "" === m.text)), r.createElement("span", (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    f(e, t, n[t])
                })
            }
            return e
        }({}, c), o = (o = {
            className: l,
            spellCheck: y
        }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(o)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
        }), n), E)
    }
}