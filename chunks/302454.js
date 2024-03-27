function(e, t) {
    var n, r;
    n = this, r = function() {
        "use strict";
        var e, t, n, r, i, a, o, s, u = /\r\n?/g,
            c = /\t/g,
            l = /\f/g,
            d = function(e) {
                return e.replace(u, "\n").replace(l, "").replace(c, "    ")
            },
            f = function(e, t) {
                var n = e || {};
                if (null != t)
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                return n
            },
            p = function(e, t) {
                var n, r = Object.keys(e).filter(function(t) {
                    var n = e[t];
                    if (null == n || null == n.match) return !1;
                    var r = n.order;
                    return ("number" != typeof r || !isFinite(r)) && "undefined" != typeof console && console.warn("simple-markdown: Invalid order for rule `" + t + "`: " + String(r)), !0
                });
                r.sort(function(t, n) {
                    var r = e[t],
                        i = e[n],
                        a = r.order,
                        o = i.order;
                    if (a !== o) return a - o;
                    var s = r.quality ? 0 : 1,
                        u = i.quality ? 0 : 1;
                    if (s !== u) return s - u;
                    if (t < n) return -1;
                    if (t > n) return 1;
                    else return 0
                });
                for (var i = new Map, a = [], o = 0; o < r.length; o++) {
                    var s = r[o],
                        u = e[s].requiredFirstCharacters;
                    null == u ? a.push(s) : u.map(e => {
                        let t = e.charCodeAt(0);
                        !i.has(t) && i.set(t, []), i.get(t).push(s)
                    })
                }
                var c = function(t, o) {
                        var s = [];
                        for (n = o = o || n; t;) {
                            for (var u = null, l = null, d = null, f = -1e5, p = 1e5, h = [i.get(t.charCodeAt(0)), a], m = 0; m < h.length; m++) {
                                var g = h[m];
                                if (null != g)
                                    for (var _ = 0; _ < g.length; _++) {
                                        var b = g[_],
                                            v = e[b],
                                            y = v.order;
                                        if (y > p) break;
                                        var E = null == o.prevCapture ? "" : o.prevCapture[0],
                                            S = v.match(t, o, E);
                                        if (S) {
                                            var x = v.quality ? v.quality(S, o, E) : 0;
                                            (y < p || x > f) && (u = b, l = v, d = S, f = x, p = y)
                                        }
                                    }
                            }
                            if (null == l || null == d) throw Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" + r[r.length - 1] + "'. It seems to not match the following source:\n" + t);
                            if (d.index) throw Error("`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?");
                            var w = l.parse(d, c, o);
                            Array.isArray(w) ? Array.prototype.push.apply(s, w) : (null == w.type && (w.type = u), s.push(w)), o.prevCapture = d, t = t.substring(o.prevCapture[0].length)
                        }
                        return s
                    },
                    l = function(e, r) {
                        return !(n = f(r, t)).inline && !n.disableAutoBlockNewlines && (e += "\n\n"), n.prevCapture = null, c(d(e), n)
                    };
                return c.rules = e, l.rules = e, l
            },
            h = function(e) {
                var t = function(t, n) {
                    return n.inline ? e.exec(t) : null
                };
                return t.regex = e, t
            },
            m = function(e) {
                var t = function(t, n) {
                    return n.inline ? null : e.exec(t)
                };
                return t.regex = e, t
            },
            g = function(e) {
                var t = function(t, n) {
                    return e.exec(t)
                };
                return t.regex = e, t
            },
            _ = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
            b = function(e, t, n) {
                return {
                    $$typeof: _,
                    type: e,
                    key: null == t ? void 0 : t,
                    ref: null,
                    props: n,
                    _owner: null
                }
            },
            v = function(e, t, n, r) {
                r = void 0 === r || r;
                var i = "";
                for (var a in n = n || {}) {
                    var o = n[a];
                    Object.prototype.hasOwnProperty.call(n, a) && o && (i += " " + w(a) + '="' + w(o) + '"')
                }
                var s = "<" + e + i + ">";
                return r ? s + t + "</" + e + ">" : s
            },
            y = {},
            E = function(e) {
                if (null == e) return null;
                try {
                    var t = new URL(e, "https://localhost").protocol;
                    if (0 === t.indexOf("javascript:") || 0 === t.indexOf("vbscript:") || 0 === t.indexOf("data:")) return null
                } catch (e) {
                    return null
                }
                return e
            },
            S = /[<>&"']/g,
            x = {
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;",
                "`": "&#96;"
            },
            w = function(e) {
                return String(e).replace(S, function(e) {
                    return x[e]
                })
            },
            T = /\\([^0-9A-Za-z\s])/g,
            C = function(e) {
                return e.replace(T, "$1")
            },
            D = function(e, t, n) {
                var r = n.inline || !1;
                n.inline = !0;
                var i = e(t, n);
                return n.inline = r, i
            },
            O = function(e, t, n) {
                return {
                    content: D(t, e[1], n)
                }
            },
            M = function() {
                return {}
            },
            A = "(?:[*+-]|\\d+\\.)",
            k = "( *)(" + A + ") +",
            R = RegExp("^" + k),
            N = RegExp(k + "[^\\n]*(?:\\n(?!\\1" + A + " )[^\\n]*)*(\n|$)", "gm"),
            I = /\n{2,}$/,
            L = /^ (?= *`)|(` *) $/g,
            P = / *\n+$/,
            F = RegExp("^( *)(" + A + ") [\\s\\S]+?(?:\n{2,}(?! )(?!\\1" + A + " )\\n*|\\s*\n*$)"),
            B = /(?:^|\n)( *)$/;
        var U = (e = /^ *\| *| *\| *$/g, t = / *$/, n = /^ *-+: *$/, r = /^ *:-+: *$/, i = /^ *:-+ *$/, a = function(e) {
                if (n.test(e)) return "right";
                if (r.test(e)) return "center";
                if (i.test(e)) return "left";
                else return null
            }, o = function(e, n, r, i) {
                var a = r.inTable;
                r.inTable = !0;
                var o = n(e.trim(), r);
                r.inTable = a;
                var s = [
                    []
                ];
                return o.forEach(function(e, n) {
                    "tableSeparator" === e.type ? (!i || 0 !== n && n !== o.length - 1) && s.push([]) : ("text" === e.type && (null == o[n + 1] || "tableSeparator" === o[n + 1].type) && (e.content = e.content.replace(t, "")), s[s.length - 1].push(e))
                }), s
            }, {
                parseTable: (s = function(t) {
                    return function(n, r, i) {
                        i.inline = !0;
                        var s, u, c, l, d, f, p, h = o(n[1], r, i, t);
                        var m = (s = n[2], u = 0, c = 0, t && (s = s.replace(e, "")), s.trim().split("|").map(a));
                        var g = (l = n[3], d = r, f = i, p = t, l.trim().split("\n").map(function(e) {
                            return o(e, d, f, p)
                        }));
                        return i.inline = !1, {
                            type: "table",
                            header: h,
                            align: m,
                            cells: g
                        }
                    }
                })(!0),
                parseNpTable: s(!1),
                TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/
            }),
            Y = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",
            j = "\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",
            z = /mailto:/i,
            H = function(e, t, n) {
                var r = (e[2] || e[1]).replace(/\s+/g, " ").toLowerCase();
                if (t._defs && t._defs[r]) {
                    var i = t._defs[r];
                    n.target = i.target, n.title = i.title
                }
                return t._refs = t._refs || {}, t._refs[r] = t._refs[r] || [], t._refs[r].push(n), n
            },
            G = !1;
        try {
            RegExp("(?<=a)"), RegExp("(?<!a)"), G = !0
        } catch (e) {}
        var V = 0,
            $ = {
                Array: {
                    react: function(e, t, n) {
                        for (var r = n.key, i = [], a = 0, o = 0; a < e.length; a++, o++) {
                            n.key = "" + a;
                            var s = e[a];
                            if ("text" === s.type)
                                for (s = {
                                        type: "text",
                                        content: s.content
                                    }; a + 1 < e.length && "text" === e[a + 1].type; a++) s.content += e[a + 1].content;
                            i.push(t(s, n))
                        }
                        return n.key = r, i
                    },
                    html: function(e, t, n) {
                        for (var r = "", i = 0; i < e.length; i++) {
                            var a = e[i];
                            if ("text" === a.type)
                                for (a = {
                                        type: "text",
                                        content: a.content
                                    }; i + 1 < e.length && "text" === e[i + 1].type; i++) a.content += e[i + 1].content;
                            r += t(a, n)
                        }
                        return r
                    }
                },
                heading: {
                    order: V++,
                    match: m(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                    parse: function(e, t, n) {
                        return {
                            level: e[1].length,
                            content: D(t, e[2].trim(), n)
                        }
                    },
                    react: function(e, t, n) {
                        return b("h" + e.level, n.key, {
                            children: t(e.content, n)
                        })
                    },
                    html: function(e, t, n) {
                        return v("h" + e.level, t(e.content, n))
                    }
                },
                nptable: {
                    order: V++,
                    match: m(U.NPTABLE_REGEX),
                    parse: U.parseNpTable,
                    react: null,
                    html: null
                },
                lheading: {
                    order: V++,
                    match: m(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                    parse: function(e, t, n) {
                        return {
                            type: "heading",
                            level: "=" === e[2] ? 1 : 2,
                            content: D(t, e[1], n)
                        }
                    },
                    react: null,
                    html: null
                },
                hr: {
                    order: V++,
                    match: m(/^( *[-*_]){3,} *(?:\n *)+\n/),
                    parse: M,
                    react: function(e, t, n) {
                        return b("hr", n.key, y)
                    },
                    html: function(e, t, n) {
                        return "<hr>"
                    }
                },
                codeBlock: {
                    order: V++,
                    match: m(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
                    parse: function(e, t, n) {
                        return {
                            lang: void 0,
                            content: e[0].replace(/^    /gm, "").replace(/\n+$/, "")
                        }
                    },
                    react: function(e, t, n) {
                        var r = e.lang ? "markdown-code-" + e.lang : void 0;
                        return b("pre", n.key, {
                            children: b("code", null, {
                                className: r,
                                children: e.content
                            })
                        })
                    },
                    html: function(e, t, n) {
                        var r = e.lang ? "markdown-code-" + e.lang : void 0,
                            i = v("code", w(e.content), {
                                class: r
                            });
                        return v("pre", i)
                    }
                },
                fence: {
                    order: V++,
                    match: m(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
                    parse: function(e, t, n) {
                        return {
                            type: "codeBlock",
                            lang: e[2] || void 0,
                            content: e[3]
                        }
                    },
                    react: null,
                    html: null
                },
                blockQuote: {
                    order: V++,
                    match: m(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
                    parse: function(e, t, n) {
                        return {
                            content: t(e[0].replace(/^ *> ?/gm, ""), n)
                        }
                    },
                    react: function(e, t, n) {
                        return b("blockquote", n.key, {
                            children: t(e.content, n)
                        })
                    },
                    html: function(e, t, n) {
                        return v("blockquote", t(e.content, n))
                    }
                },
                list: {
                    order: V++,
                    match: function(e, t) {
                        var n = null == t.prevCapture ? "" : t.prevCapture[0],
                            r = B.exec(n),
                            i = t._list || !t.inline;
                        return r && i ? (e = r[1] + e, F.exec(e)) : null
                    },
                    parse: function(e, t, n) {
                        var r = e[2],
                            i = r.length > 1,
                            a = e[0].replace(I, "\n").match(N),
                            o = !1;
                        return {
                            ordered: i,
                            start: i ? +r : void 0,
                            items: a.map(function(e, r) {
                                var i, s = R.exec(e),
                                    u = RegExp("^ {1," + (s ? s[0].length : 0) + "}", "gm"),
                                    c = e.replace(u, "").replace(R, ""),
                                    l = r === a.length - 1,
                                    d = -1 !== c.indexOf("\n\n") || l && o;
                                o = d;
                                var f = n.inline,
                                    p = n._list;
                                n._list = !0, d ? (n.inline = !1, i = c.replace(P, "\n\n")) : (n.inline = !0, i = c.replace(P, ""));
                                var h = t(i, n);
                                return n.inline = f, n._list = p, h
                            })
                        }
                    },
                    react: function(e, t, n) {
                        return b(e.ordered ? "ol" : "ul", n.key, {
                            start: e.start,
                            children: e.items.map(function(e, r) {
                                return b("li", "" + r, {
                                    children: t(e, n)
                                })
                            })
                        })
                    },
                    html: function(e, t, n) {
                        var r = e.items.map(function(e) {
                            return v("li", t(e, n))
                        }).join("");
                        return v(e.ordered ? "ol" : "ul", r, {
                            start: e.start
                        })
                    }
                },
                def: {
                    order: V++,
                    match: m(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
                    parse: function(e, t, n) {
                        var r = e[1].replace(/\s+/g, " ").toLowerCase(),
                            i = e[2],
                            a = e[3];
                        return n._refs && n._refs[r] && n._refs[r].forEach(function(e) {
                            e.target = i, e.title = a
                        }), n._defs = n._defs || {}, n._defs[r] = {
                            target: i,
                            title: a
                        }, {
                            def: r,
                            target: i,
                            title: a
                        }
                    },
                    react: function() {
                        return null
                    },
                    html: function() {
                        return ""
                    }
                },
                table: {
                    order: V++,
                    match: m(U.TABLE_REGEX),
                    parse: U.parseTable,
                    react: function(e, t, n) {
                        var r = function(t) {
                                return null == e.align[t] ? {} : {
                                    textAlign: e.align[t]
                                }
                            },
                            i = e.header.map(function(e, i) {
                                return b("th", "" + i, {
                                    style: r(i),
                                    scope: "col",
                                    children: t(e, n)
                                })
                            }),
                            a = e.cells.map(function(e, i) {
                                return b("tr", "" + i, {
                                    children: e.map(function(e, i) {
                                        return b("td", "" + i, {
                                            style: r(i),
                                            children: t(e, n)
                                        })
                                    })
                                })
                            });
                        return b("table", n.key, {
                            children: [b("thead", "thead", {
                                children: b("tr", null, {
                                    children: i
                                })
                            }), b("tbody", "tbody", {
                                children: a
                            })]
                        })
                    },
                    html: function(e, t, n) {
                        var r = function(t) {
                                return null == e.align[t] ? "" : "text-align:" + e.align[t] + ";"
                            },
                            i = e.header.map(function(e, i) {
                                return v("th", t(e, n), {
                                    style: r(i),
                                    scope: "col"
                                })
                            }).join(""),
                            a = e.cells.map(function(e) {
                                var i = e.map(function(e, i) {
                                    return v("td", t(e, n), {
                                        style: r(i)
                                    })
                                }).join("");
                                return v("tr", i)
                            }).join(""),
                            o = v("thead", v("tr", i)),
                            s = v("tbody", a);
                        return v("table", o + s)
                    }
                },
                newline: {
                    order: V++,
                    requiredFirstCharacters: ["\n"],
                    match: m(/^(?:\n *)*\n/),
                    parse: M,
                    react: function(e, t, n) {
                        return "\n"
                    },
                    html: function(e, t, n) {
                        return "\n"
                    }
                },
                paragraph: {
                    order: V++,
                    match: m(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
                    parse: O,
                    react: function(e, t, n) {
                        return b("div", n.key, {
                            className: "paragraph",
                            children: t(e.content, n)
                        })
                    },
                    html: function(e, t, n) {
                        return v("div", t(e.content, n), {
                            class: "paragraph"
                        })
                    }
                },
                escape: {
                    order: V++,
                    requiredFirstCharacters: ["\\"],
                    match: h(/^\\([^0-9A-Za-z\s])/),
                    parse: function(e, t, n) {
                        return {
                            type: "text",
                            content: e[1]
                        }
                    },
                    react: null,
                    html: null
                },
                tableSeparator: {
                    order: V++,
                    match: function(e, t) {
                        return t.inTable ? /^ *\| */.exec(e) : null
                    },
                    parse: function() {
                        return {
                            type: "tableSeparator"
                        }
                    },
                    react: function() {
                        return " | "
                    },
                    html: function() {
                        return " &vert; "
                    }
                },
                autolink: {
                    order: V++,
                    requiredFirstCharacters: ["<"],
                    match: h(/^<([^: >]+:\/[^ >]+)>/),
                    parse: function(e, t, n) {
                        return {
                            type: "link",
                            content: [{
                                type: "text",
                                content: e[1]
                            }],
                            target: e[1]
                        }
                    },
                    react: null,
                    html: null
                },
                mailto: {
                    order: V++,
                    match: h(/^<([^ >]+@[^ >]+)>/),
                    parse: function(e, t, n) {
                        var r = e[1],
                            i = e[1];
                        return !z.test(i) && (i = "mailto:" + i), {
                            type: "link",
                            content: [{
                                type: "text",
                                content: r
                            }],
                            target: i
                        }
                    },
                    react: null,
                    html: null
                },
                url: {
                    order: V++,
                    requiredFirstCharacters: ["h"],
                    match: h(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
                    parse: function(e, t, n) {
                        return {
                            type: "link",
                            content: [{
                                type: "text",
                                content: e[1]
                            }],
                            target: e[1],
                            title: void 0
                        }
                    },
                    react: null,
                    html: null
                },
                link: {
                    order: V++,
                    requiredFirstCharacters: ["["],
                    match: h(RegExp("^\\[(" + Y + ")\\]\\(" + j + "\\)")),
                    parse: function(e, t, n) {
                        return {
                            content: t(e[1], n),
                            target: C(e[2]),
                            title: e[3]
                        }
                    },
                    react: function(e, t, n) {
                        return b("a", n.key, {
                            href: E(e.target),
                            title: e.title,
                            children: t(e.content, n)
                        })
                    },
                    html: function(e, t, n) {
                        var r = {
                            href: E(e.target),
                            title: e.title
                        };
                        return v("a", t(e.content, n), r)
                    }
                },
                image: {
                    order: V++,
                    match: h(RegExp("^!\\[(" + Y + ")\\]\\(" + j + "\\)")),
                    parse: function(e, t, n) {
                        return {
                            alt: e[1],
                            target: C(e[2]),
                            title: e[3]
                        }
                    },
                    react: function(e, t, n) {
                        return b("img", n.key, {
                            src: E(e.target),
                            alt: e.alt,
                            title: e.title
                        })
                    },
                    html: function(e, t, n) {
                        return v("img", "", {
                            src: E(e.target),
                            alt: e.alt,
                            title: e.title
                        }, !1)
                    }
                },
                reflink: {
                    order: V++,
                    match: h(RegExp("^\\[(" + Y + ")\\]\\s*\\[([^\\]]*)\\]")),
                    parse: function(e, t, n) {
                        return H(e, n, {
                            type: "link",
                            content: t(e[1], n)
                        })
                    },
                    react: null,
                    html: null
                },
                refimage: {
                    order: V++,
                    match: h(RegExp("^!\\[(" + Y + ")\\]\\s*\\[([^\\]]*)\\]")),
                    parse: function(e, t, n) {
                        return H(e, n, {
                            type: "image",
                            alt: e[1]
                        })
                    },
                    react: null,
                    html: null
                },
                em: {
                    order: V,
                    match: h(RegExp((G ? "^\\b_((?:_[_(]|\\\\[\\s\\S]|(?<!_)\\B_\\B|[^\\\\_])+?)_(?![(])\\b" : "^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b") + "|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)")),
                    quality: function(e) {
                        return e[0].length + .2
                    },
                    parse: function(e, t, n) {
                        return {
                            content: t(e[2] || e[1], n)
                        }
                    },
                    react: function(e, t, n) {
                        return b("em", n.key, {
                            children: t(e.content, n)
                        })
                    },
                    html: function(e, t, n) {
                        return v("em", t(e.content, n))
                    }
                },
                strong: {
                    order: V,
                    requiredFirstCharacters: ["*"],
                    match: h(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
                    quality: function(e) {
                        return e[0].length + .1
                    },
                    parse: O,
                    react: function(e, t, n) {
                        return b("strong", n.key, {
                            children: t(e.content, n)
                        })
                    },
                    html: function(e, t, n) {
                        return v("strong", t(e.content, n))
                    }
                },
                u: {
                    order: V++,
                    requiredFirstCharacters: ["_"],
                    match: h(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
                    quality: function(e) {
                        return e[0].length
                    },
                    parse: O,
                    react: function(e, t, n) {
                        return b("u", n.key, {
                            children: t(e.content, n)
                        })
                    },
                    html: function(e, t, n) {
                        return v("u", t(e.content, n))
                    }
                },
                del: {
                    order: V++,
                    requiredFirstCharacters: ["~"],
                    match: h(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
                    parse: O,
                    react: function(e, t, n) {
                        return b("del", n.key, {
                            children: t(e.content, n)
                        })
                    },
                    html: function(e, t, n) {
                        return v("del", t(e.content, n))
                    }
                },
                inlineCode: {
                    order: V++,
                    requiredFirstCharacters: ["`"],
                    match: h(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                    parse: function(e, t, n) {
                        return {
                            content: e[2].replace(L, "$1")
                        }
                    },
                    react: function(e, t, n) {
                        return b("code", n.key, {
                            children: e.content
                        })
                    },
                    html: function(e, t, n) {
                        return v("code", w(e.content))
                    }
                },
                br: {
                    order: V++,
                    requiredFirstCharacters: [" "],
                    match: g(/^ {2,}\n/),
                    parse: M,
                    react: function(e, t, n) {
                        return b("br", n.key, y)
                    },
                    html: function(e, t, n) {
                        return "<br>"
                    }
                },
                text: {
                    order: V++,
                    match: g(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
                    parse: function(e, t, n) {
                        return {
                            content: e[0]
                        }
                    },
                    react: function(e, t, n) {
                        return e.content
                    },
                    html: function(e, t, n) {
                        return w(e.content)
                    }
                }
            },
            W = function(e, t, n) {
                if (!t) throw Error("simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`");
                var r, i = (e.Array || $.Array)[t];
                if (!i) throw Error("simple-markdown: outputFor: to join nodes of type `" + t + "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.");
                var a = function(n, o) {
                    return (r = o = o || r, Array.isArray(n)) ? i(n, a, o) : e[n.type][t](n, a, o)
                };
                return function(e, t) {
                    return a(e, r = f(t, n))
                }
            },
            K = p($),
            q = function(e, t) {
                return (t = t || {}).inline = !1, K(e, t)
            },
            Q = function(e, t) {
                var n = I.test(e);
                return (t = t || {}).inline = !n, K(e, t)
            },
            Z = W($, "react"),
            X = W($, "html"),
            J = function(e, t) {
                return Z(q(e, t), t)
            };
        return {
            defaultRules: $,
            parserFor: p,
            outputFor: W,
            inlineRegex: h,
            blockRegex: m,
            anyScopeRegex: g,
            parseInline: D,
            parseBlock: function(e, t, n) {
                var r = n.inline || !1;
                n.inline = !1;
                var i = e(t + "\n\n", n);
                return n.inline = r, i
            },
            markdownToReact: J,
            markdownToHtml: function(e, t) {
                return X(q(e, t), t)
            },
            ReactMarkdown: function(e) {
                var t = {};
                for (var n in e) "source" !== n && Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.children = J(e.source), b("div", null, t)
            },
            defaultBlockParse: q,
            defaultInlineParse: function(e, t) {
                return (t = t || {}).inline = !0, K(e, t)
            },
            defaultImplicitParse: Q,
            defaultReactOutput: Z,
            defaultHtmlOutput: X,
            preprocess: d,
            sanitizeText: w,
            sanitizeUrl: E,
            unescapeUrl: C,
            htmlTag: v,
            reactElement: b,
            defaultRawParse: K,
            ruleOutput: function(e, t) {
                return !t && "undefined" != typeof console && console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument."),
                    function(n, r, i) {
                        return e[n.type][t](n, r, i)
                    }
            },
            reactFor: function(e) {
                var t = function(n, r) {
                    if (r = r || {}, !Array.isArray(n)) return e(n, t, r);
                    for (var i = r.key, a = [], o = null, s = 0; s < n.length; s++) {
                        r.key = "" + s;
                        var u = t(n[s], r);
                        "string" == typeof u && "string" == typeof o ? (o += u, a[a.length - 1] = o) : (a.push(u), o = u)
                    }
                    return r.key = i, a
                };
                return t
            },
            htmlFor: function(e) {
                var t = function(n, r) {
                    return (r = r || {}, Array.isArray(n)) ? n.map(function(e) {
                        return t(e, r)
                    }).join("") : e(n, t, r)
                };
                return t
            },
            defaultParse: function() {
                return "undefined" != typeof console && console.warn("defaultParse is deprecated, please use `defaultImplicitParse`"), Q.apply(null, arguments)
            },
            defaultOutput: function() {
                return "undefined" != typeof console && console.warn("defaultOutput is deprecated, please use `defaultReactOutput`"), Z.apply(null, arguments)
            }
        }
    }, "object" == typeof t ? e.exports = r() : "function" == typeof define && define.amd ? define(r) : (n = n || self).SimpleMarkdown = r()
}