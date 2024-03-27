function(e) {
    var t = {
        exports: {}
    };

    function n(e) {
        return e instanceof Map ? e.clear = e.delete = e.set = function() {
            throw Error("map is read-only")
        } : e instanceof Set && (e.add = e.clear = e.delete = function() {
            throw Error("set is read-only")
        }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach(function(t) {
            var r = e[t];
            "object" == typeof r && !Object.isFrozen(r) && n(r)
        }), e
    }
    t.exports = n, t.exports.default = n;
    class r {
        constructor(e) {
            void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1
        }
        ignoreMatch() {
            this.isMatchIgnored = !0
        }
    }

    function i(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function a(e, ...t) {
        let n = Object.create(null);
        for (let t in e) n[t] = e[t];
        return t.forEach(function(e) {
            for (let t in e) n[t] = e[t]
        }), n
    }
    let o = e => !!e.scope || e.sublanguage && e.language,
        s = (e, {
            prefix: t
        }) => {
            if (e.includes(".")) {
                let n = e.split(".");
                return [`${t}${n.shift()}`, ...n.map((e, t) => `${e}${"_".repeat(t+1)}`)].join(" ")
            }
            return `${t}${e}`
        };
    class u {
        constructor(e, t) {
            this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this)
        }
        addText(e) {
            this.buffer += i(e)
        }
        openNode(e) {
            if (!o(e)) return;
            let t = "";
            t = e.sublanguage ? `language-${e.language}` : s(e.scope, {
                prefix: this.classPrefix
            }), this.span(t)
        }
        closeNode(e) {
            o(e) && (this.buffer += "</span>")
        }
        value() {
            return this.buffer
        }
        span(e) {
            this.buffer += `<span class="${e}">`
        }
    }
    let c = (e = {}) => {
        let t = {
            children: []
        };
        return Object.assign(t, e), t
    };
    class l {
        constructor() {
            this.rootNode = c(), this.stack = [this.rootNode]
        }
        get top() {
            return this.stack[this.stack.length - 1]
        }
        get root() {
            return this.rootNode
        }
        add(e) {
            this.top.children.push(e)
        }
        openNode(e) {
            let t = c({
                scope: e
            });
            this.add(t), this.stack.push(t)
        }
        closeNode() {
            if (this.stack.length > 1) return this.stack.pop()
        }
        closeAllNodes() {
            for (; this.closeNode(););
        }
        toJSON() {
            return JSON.stringify(this.rootNode, null, 4)
        }
        walk(e) {
            return this.constructor._walk(e, this.rootNode)
        }
        static _walk(e, t) {
            return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach(t => this._walk(e, t)), e.closeNode(t)), e
        }
        static _collapse(e) {
            if ("string" != typeof e) e.children && (e.children.every(e => "string" == typeof e) ? e.children = [e.children.join("")] : e.children.forEach(e => {
                l._collapse(e)
            }))
        }
    }
    class d extends l {
        constructor(e) {
            super(), this.options = e
        }
        addKeyword(e, t) {
            "" !== e && (this.openNode(t), this.addText(e), this.closeNode())
        }
        addText(e) {
            "" !== e && this.add(e)
        }
        addSublanguage(e, t) {
            let n = e.root;
            n.sublanguage = !0, n.language = t, this.add(n)
        }
        toHTML() {
            return new u(this, this.options).value()
        }
        finalize() {
            return !0
        }
    }

    function f(e) {
        return e ? "string" == typeof e ? e : e.source : null
    }

    function p(e) {
        return g("(?=", e, ")")
    }

    function h(e) {
        return g("(?:", e, ")*")
    }

    function m(e) {
        return g("(?:", e, ")?")
    }

    function g(...e) {
        return e.map(e => f(e)).join("")
    }

    function _(...e) {
        return "(" + (function(e) {
            let t = e[e.length - 1];
            return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {}
        }(e).capture ? "" : "?:") + e.map(e => f(e)).join("|") + ")"
    }

    function b(e) {
        return RegExp(e.toString() + "|").exec("").length - 1
    }
    let v = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function y(e, {
        joinWith: t
    }) {
        let n = 0;
        return e.map(e => {
            let t = n += 1,
                r = f(e),
                i = "";
            for (; r.length > 0;) {
                let e = v.exec(r);
                if (!e) {
                    i += r;
                    break
                }
                i += r.substring(0, e.index), r = r.substring(e.index + e[0].length), "\\" === e[0][0] && e[1] ? i += "\\" + String(Number(e[1]) + t) : (i += e[0], "(" === e[0] && n++)
            }
            return i
        }).map(e => `(${e})`).join(t)
    }
    let E = "[a-zA-Z]\\w*",
        S = "[a-zA-Z_]\\w*",
        x = "\\b\\d+(\\.\\d+)?",
        w = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        T = "\\b(0b[01]+)",
        C = {
            begin: "\\\\[\\s\\S]",
            relevance: 0
        },
        D = function(e, t, n = {}) {
            let r = a({
                scope: "comment",
                begin: e,
                end: t,
                contains: []
            }, n);
            r.contains.push({
                scope: "doctag",
                begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
                end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
                excludeBegin: !0,
                relevance: 0
            });
            let i = _("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
            return r.contains.push({
                begin: g(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}")
            }), r
        },
        O = D("//", "$"),
        M = D("/\\*", "\\*/"),
        A = D("#", "$");
    var k = Object.freeze({
        __proto__: null,
        MATCH_NOTHING_RE: /\b\B/,
        IDENT_RE: E,
        UNDERSCORE_IDENT_RE: S,
        NUMBER_RE: x,
        C_NUMBER_RE: w,
        BINARY_NUMBER_RE: T,
        RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        SHEBANG: (e = {}) => {
            let t = /^#![ ]*\//;
            return e.binary && (e.begin = g(t, /.*\b/, e.binary, /\b.*/)), a({
                scope: "meta",
                begin: t,
                end: /$/,
                relevance: 0,
                "on:begin": (e, t) => {
                    0 !== e.index && t.ignoreMatch()
                }
            }, e)
        },
        BACKSLASH_ESCAPE: C,
        APOS_STRING_MODE: {
            scope: "string",
            begin: "'",
            end: "'",
            illegal: "\\n",
            contains: [C]
        },
        QUOTE_STRING_MODE: {
            scope: "string",
            begin: '"',
            end: '"',
            illegal: "\\n",
            contains: [C]
        },
        PHRASAL_WORDS_MODE: {
            begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        },
        COMMENT: D,
        C_LINE_COMMENT_MODE: O,
        C_BLOCK_COMMENT_MODE: M,
        HASH_COMMENT_MODE: A,
        NUMBER_MODE: {
            scope: "number",
            begin: x,
            relevance: 0
        },
        C_NUMBER_MODE: {
            scope: "number",
            begin: w,
            relevance: 0
        },
        BINARY_NUMBER_MODE: {
            scope: "number",
            begin: T,
            relevance: 0
        },
        REGEXP_MODE: {
            begin: /(?=\/[^/\n]*\/)/,
            contains: [{
                scope: "regexp",
                begin: /\//,
                end: /\/[gimuy]*/,
                illegal: /\n/,
                contains: [C, {
                    begin: /\[/,
                    end: /\]/,
                    relevance: 0,
                    contains: [C]
                }]
            }]
        },
        TITLE_MODE: {
            scope: "title",
            begin: E,
            relevance: 0
        },
        UNDERSCORE_TITLE_MODE: {
            scope: "title",
            begin: S,
            relevance: 0
        },
        METHOD_GUARD: {
            begin: "\\.\\s*" + S,
            relevance: 0
        },
        END_SAME_AS_BEGIN: function(e) {
            return Object.assign(e, {
                "on:begin": (e, t) => {
                    t.data._beginMatch = e[1]
                },
                "on:end": (e, t) => {
                    t.data._beginMatch !== e[1] && t.ignoreMatch()
                }
            })
        }
    });

    function R(e, t) {
        "." === e.input[e.index - 1] && t.ignoreMatch()
    }

    function N(e, t) {
        void 0 !== e.className && (e.scope = e.className, delete e.className)
    }

    function I(e, t) {
        if (!!t) e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = R, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0))
    }

    function L(e, t) {
        Array.isArray(e.illegal) && (e.illegal = _(...e.illegal))
    }

    function P(e, t) {
        if (e.match) {
            if (e.begin || e.end) throw Error("begin & end are not supported with match");
            e.begin = e.match, delete e.match
        }
    }

    function F(e, t) {
        void 0 === e.relevance && (e.relevance = 1)
    }
    let B = (e, t) => {
            if (!e.beforeMatch) return;
            if (e.starts) throw Error("beforeMatch cannot be used with starts");
            let n = Object.assign({}, e);
            Object.keys(e).forEach(t => {
                delete e[t]
            }), e.keywords = n.keywords, e.begin = g(n.beforeMatch, p(n.begin)), e.starts = {
                relevance: 0,
                contains: [Object.assign(n, {
                    endsParent: !0
                })]
            }, e.relevance = 0, delete n.beforeMatch
        },
        U = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
        Y = {},
        j = e => {
            console.error(e)
        },
        z = (e, ...t) => {
            console.log(`WARN: ${e}`, ...t)
        },
        H = (e, t) => {
            !Y[`${e}/${t}`] && (console.log(`Deprecated as of ${e}. ${t}`), Y[`${e}/${t}`] = !0)
        },
        G = Error();

    function V(e, t, {
        key: n
    }) {
        let r = 0,
            i = e[n],
            a = {},
            o = {};
        for (let e = 1; e <= t.length; e++) o[e + r] = i[e], a[e + r] = !0, r += b(t[e - 1]);
        e[n] = o, e[n]._emit = a, e[n]._multi = !0
    }

    function $(e) {
        var t;
        (t = e).scope && "object" == typeof t.scope && null !== t.scope && (t.beginScope = t.scope, delete t.scope), "string" == typeof e.beginScope && (e.beginScope = {
            _wrap: e.beginScope
        }), "string" == typeof e.endScope && (e.endScope = {
            _wrap: e.endScope
        }), ! function(e) {
            if (Array.isArray(e.begin)) {
                if (e.skip || e.excludeBegin || e.returnBegin) throw j("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), G;
                if ("object" != typeof e.beginScope || null === e.beginScope) throw j("beginScope must be object"), G;
                V(e, e.begin, {
                    key: "beginScope"
                }), e.begin = y(e.begin, {
                    joinWith: ""
                })
            }
        }(e), ! function(e) {
            if (Array.isArray(e.end)) {
                if (e.skip || e.excludeEnd || e.returnEnd) throw j("skip, excludeEnd, returnEnd not compatible with endScope: {}"), G;
                if ("object" != typeof e.endScope || null === e.endScope) throw j("endScope must be object"), G;
                V(e, e.end, {
                    key: "endScope"
                }), e.end = y(e.end, {
                    joinWith: ""
                })
            }
        }(e)
    }
    class W extends Error {
        constructor(e, t) {
            super(e), this.name = "HTMLInjectionError", this.html = t
        }
    }
    let K = Symbol("nomatch");
    var q = function(e) {
        let n = Object.create(null),
            o = Object.create(null),
            s = [],
            u = !0,
            c = "Could not find the language '{}', did you forget to load/include a language module?",
            l = {
                disableAutodetect: !0,
                name: "Plain text",
                contains: []
            },
            v = {
                ignoreUnescapedHTML: !1,
                throwUnescapedHTML: !1,
                noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                classPrefix: "hljs-",
                cssSelector: "pre code",
                languages: null,
                __emitter: d
            };

        function E(e) {
            return v.noHighlightRe.test(e)
        }

        function S(e, t, n) {
            let r = "",
                i = "";
            "object" == typeof t ? (r = e, n = t.ignoreIllegals, i = t.language) : (H("10.7.0", "highlight(lang, code, ...args) has been deprecated."), H("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), i = e, r = t), void 0 === n && (n = !0);
            let a = {
                code: r,
                language: i
            };
            R("before:highlight", a);
            let o = a.result ? a.result : x(a.language, a.code, n);
            return o.code = a.code, R("after:highlight", o), o
        }

        function x(e, t, o, s) {
            let l = Object.create(null);

            function d() {
                if (!C.keywords) {
                    M.addText(A);
                    return
                }
                let e = 0;
                C.keywordPatternRe.lastIndex = 0;
                let t = C.keywordPatternRe.exec(A),
                    n = "";
                for (; t;) {
                    var r, i;
                    n += A.substring(e, t.index);
                    let a = E.case_insensitive ? t[0].toLowerCase() : t[0];
                    let o = (r = C, i = a, r.keywords[i]);
                    if (o) {
                        let [e, r] = o;
                        if (M.addText(n), n = "", l[a] = (l[a] || 0) + 1, l[a] <= 7 && (k += r), e.startsWith("_")) n += t[0];
                        else {
                            let n = E.classNameAliases[e] || e;
                            M.addKeyword(t[0], n)
                        }
                    } else n += t[0];
                    e = C.keywordPatternRe.lastIndex, t = C.keywordPatternRe.exec(A)
                }
                n += A.substring(e), M.addText(n)
            }

            function p() {
                null != C.subLanguage ? ! function() {
                    if ("" === A) return;
                    let e = null;
                    if ("string" == typeof C.subLanguage) {
                        if (!n[C.subLanguage]) {
                            M.addText(A);
                            return
                        }
                        e = x(C.subLanguage, A, !0, D[C.subLanguage]), D[C.subLanguage] = e._top
                    } else e = w(A, C.subLanguage.length ? C.subLanguage : null);
                    C.relevance > 0 && (k += e.relevance), M.addSublanguage(e._emitter, e.language)
                }() : d(), A = ""
            }

            function h(e, t) {
                let n = 1,
                    r = t.length - 1;
                for (; n <= r;) {
                    if (!e._emit[n]) {
                        n++;
                        continue
                    }
                    let r = E.classNameAliases[e[n]] || e[n],
                        i = t[n];
                    r ? M.addKeyword(i, r) : (A = i, d(), A = ""), n++
                }
            }

            function m(e, t) {
                return e.scope && "string" == typeof e.scope && M.openNode(E.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (M.addKeyword(A, E.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), A = "") : e.beginScope._multi && (h(e.beginScope, t), A = "")), C = Object.create(e, {
                    parent: {
                        value: C
                    }
                })
            }
            let g = {};

            function _(n, i) {
                let a = i && i[0];
                if (A += n, null == a) return p(), 0;
                if ("begin" === g.type && "end" === i.type && g.index === i.index && "" === a) {
                    if (A += t.slice(i.index, i.index + 1), !u) {
                        let t = Error(`0 width match regex (${e})`);
                        throw t.languageName = e, t.badRule = g.rule, t
                    }
                    return 1
                }
                if (g = i, "begin" === i.type) return function(e) {
                    let t = e[0],
                        n = e.rule,
                        i = new r(n);
                    for (let r of [n.__beforeBegin, n["on:begin"]])
                        if (r && (r(e, i), i.isMatchIgnored)) {
                            var a;
                            return a = t, 0 === C.matcher.regexIndex ? (A += a[0], 1) : (z = !0, 0)
                        } return n.skip ? A += t : (n.excludeBegin && (A += t), p(), !n.returnBegin && !n.excludeBegin && (A = t)), m(n, e), n.returnBegin ? 0 : t.length
                }(i);
                if ("illegal" !== i.type || o) {
                    if ("end" === i.type) {
                        let e = function(e) {
                            let n = e[0],
                                i = t.substring(e.index),
                                a = function e(t, n, i) {
                                    let a = function(e, t) {
                                        let n = e && e.exec(t);
                                        return n && 0 === n.index
                                    }(t.endRe, i);
                                    if (a) {
                                        if (t["on:end"]) {
                                            let e = new r(t);
                                            t["on:end"](n, e), e.isMatchIgnored && (a = !1)
                                        }
                                        if (a) {
                                            for (; t.endsParent && t.parent;) t = t.parent;
                                            return t
                                        }
                                    }
                                    if (t.endsWithParent) return e(t.parent, n, i)
                                }(C, e, i);
                            if (!a) return K;
                            let o = C;
                            C.endScope && C.endScope._wrap ? (p(), M.addKeyword(n, C.endScope._wrap)) : C.endScope && C.endScope._multi ? (p(), h(C.endScope, e)) : o.skip ? A += n : (!(o.returnEnd || o.excludeEnd) && (A += n), p(), o.excludeEnd && (A = n));
                            do C.scope && M.closeNode(), !C.skip && !C.subLanguage && (k += C.relevance), C = C.parent; while (C !== a.parent);
                            return a.starts && m(a.starts, e), o.returnEnd ? 0 : n.length
                        }(i);
                        if (e !== K) return e
                    }
                } else {
                    let e = Error('Illegal lexeme "' + a + '" for mode "' + (C.scope || "<unnamed>") + '"');
                    throw e.mode = C, e
                }
                if ("illegal" === i.type && "" === a) return 1;
                if (Y > 1e5 && Y > 3 * i.index) throw Error("potential infinite loop, way more iterations than matches");
                return A += a, a.length
            }
            let E = O(e);
            if (!E) throw j(c.replace("{}", e)), Error('Unknown language: "' + e + '"');
            let S = function(e) {
                    function t(t, n) {
                        return RegExp(f(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""))
                    }
                    class n {
                        constructor() {
                            this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
                        }
                        addRule(e, t) {
                            t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += b(e) + 1
                        }
                        compile() {
                            0 === this.regexes.length && (this.exec = () => null);
                            let e = this.regexes.map(e => e[1]);
                            this.matcherRe = t(y(e, {
                                joinWith: "|"
                            }), !0), this.lastIndex = 0
                        }
                        exec(e) {
                            this.matcherRe.lastIndex = this.lastIndex;
                            let t = this.matcherRe.exec(e);
                            if (!t) return null;
                            let n = t.findIndex((e, t) => t > 0 && void 0 !== e),
                                r = this.matchIndexes[n];
                            return t.splice(0, n), Object.assign(t, r)
                        }
                    }
                    class r {
                        constructor() {
                            this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
                        }
                        getMatcher(e) {
                            if (this.multiRegexes[e]) return this.multiRegexes[e];
                            let t = new n;
                            return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)), t.compile(), this.multiRegexes[e] = t, t
                        }
                        resumingScanAtSamePosition() {
                            return 0 !== this.regexIndex
                        }
                        considerAll() {
                            this.regexIndex = 0
                        }
                        addRule(e, t) {
                            this.rules.push([e, t]), "begin" === t.type && this.count++
                        }
                        exec(e) {
                            let t = this.getMatcher(this.regexIndex);
                            t.lastIndex = this.lastIndex;
                            let n = t.exec(e);
                            if (this.resumingScanAtSamePosition()) {
                                if (n && n.index === this.lastIndex);
                                else {
                                    let t = this.getMatcher(0);
                                    t.lastIndex = this.lastIndex + 1, n = t.exec(e)
                                }
                            }
                            return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n
                        }
                    }
                    if (!e.compilerExtensions && (e.compilerExtensions = []), e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
                    return e.classNameAliases = a(e.classNameAliases || {}),
                        function n(i, o) {
                            if (i.isCompiled) return i;
                            [N, P, $, B].forEach(e => e(i, o)), e.compilerExtensions.forEach(e => e(i, o)), i.__beforeBegin = null, [I, L, F].forEach(e => e(i, o)), i.isCompiled = !0;
                            let s = null;
                            return "object" == typeof i.keywords && i.keywords.$pattern && (i.keywords = Object.assign({}, i.keywords), s = i.keywords.$pattern, delete i.keywords.$pattern), s = s || /\w+/, i.keywords && (i.keywords = function e(t, n, r = "keyword") {
                                let i = Object.create(null);
                                return "string" == typeof t ? a(r, t.split(" ")) : Array.isArray(t) ? a(r, t) : Object.keys(t).forEach(function(r) {
                                    Object.assign(i, e(t[r], n, r))
                                }), i;

                                function a(e, t) {
                                    n && (t = t.map(e => e.toLowerCase())), t.forEach(function(t) {
                                        let n = t.split("|");
                                        i[n[0]] = [e, function(e, t) {
                                            return t ? Number(t) : function(e) {
                                                return U.includes(e.toLowerCase())
                                            }(e) ? 0 : 1
                                        }(n[0], n[1])]
                                    })
                                }
                            }(i.keywords, e.case_insensitive)), i.keywordPatternRe = t(s, !0), o && (!i.begin && (i.begin = /\B|\b/), i.beginRe = t(i.begin), !i.end && !i.endsWithParent && (i.end = /\B|\b/), i.end && (i.endRe = t(i.end)), i.terminatorEnd = f(i.end) || "", i.endsWithParent && o.terminatorEnd && (i.terminatorEnd += (i.end ? "|" : "") + o.terminatorEnd)), i.illegal && (i.illegalRe = t(i.illegal)), !i.contains && (i.contains = []), i.contains = [].concat(...i.contains.map(function(e) {
                                return function(e) {
                                    return (e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function(t) {
                                        return a(e, {
                                            variants: null
                                        }, t)
                                    })), e.cachedVariants) ? e.cachedVariants : function e(t) {
                                        return !!t && (t.endsWithParent || e(t.starts))
                                    }(e) ? a(e, {
                                        starts: e.starts ? a(e.starts) : null
                                    }) : Object.isFrozen(e) ? a(e) : e
                                }("self" === e ? i : e)
                            })), i.contains.forEach(function(e) {
                                n(e, i)
                            }), i.starts && n(i.starts, o), i.matcher = function(e) {
                                let t = new r;
                                return e.contains.forEach(e => t.addRule(e.begin, {
                                    rule: e,
                                    type: "begin"
                                })), e.terminatorEnd && t.addRule(e.terminatorEnd, {
                                    type: "end"
                                }), e.illegal && t.addRule(e.illegal, {
                                    type: "illegal"
                                }), t
                            }(i), i
                        }(e)
                }(E),
                T = "",
                C = s || S,
                D = {},
                M = new v.__emitter(v);
            ! function() {
                let e = [];
                for (let t = C; t !== E; t = t.parent) t.scope && e.unshift(t.scope);
                e.forEach(e => M.openNode(e))
            }();
            let A = "",
                k = 0,
                R = 0,
                Y = 0,
                z = !1;
            try {
                for (C.matcher.considerAll();;) {
                    Y++, z ? z = !1 : C.matcher.considerAll(), C.matcher.lastIndex = R;
                    let e = C.matcher.exec(t);
                    if (!e) break;
                    let n = t.substring(R, e.index),
                        r = _(n, e);
                    R = e.index + r
                }
                return _(t.substring(R)), M.closeAllNodes(), M.finalize(), T = M.toHTML(), {
                    language: e,
                    value: T,
                    relevance: k,
                    illegal: !1,
                    _emitter: M,
                    _top: C
                }
            } catch (n) {
                if (n.message && n.message.includes("Illegal")) return {
                    language: e,
                    value: i(t),
                    illegal: !0,
                    relevance: 0,
                    _illegalBy: {
                        message: n.message,
                        index: R,
                        context: t.slice(R - 100, R + 100),
                        mode: n.mode,
                        resultSoFar: T
                    },
                    _emitter: M
                };
                if (u) return {
                    language: e,
                    value: i(t),
                    illegal: !1,
                    relevance: 0,
                    errorRaised: n,
                    _emitter: M,
                    _top: C
                };
                else throw n
            }
        }

        function w(e, t) {
            t = t || v.languages || Object.keys(n);
            let r = function(e) {
                    let t = {
                        value: i(e),
                        illegal: !1,
                        relevance: 0,
                        _top: l,
                        _emitter: new v.__emitter(v)
                    };
                    return t._emitter.addText(e), t
                }(e),
                a = t.filter(O).filter(A).map(t => x(t, e, !1));
            a.unshift(r);
            let [o, s] = a.sort((e, t) => {
                if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                if (e.language && t.language) {
                    if (O(e.language).supersetOf === t.language) return 1;
                    if (O(t.language).supersetOf === e.language) return -1
                }
                return 0
            });
            return o.secondBest = s, o
        }

        function T(e) {
            let t = null,
                n = function(e) {
                    let t = e.className + " ";
                    t += e.parentNode ? e.parentNode.className : "";
                    let n = v.languageDetectRe.exec(t);
                    if (n) {
                        let t = O(n[1]);
                        return !t && (z(c.replace("{}", n[1])), z("Falling back to no-highlight mode for this block.", e)), t ? n[1] : "no-highlight"
                    }
                    return t.split(/\s+/).find(e => E(e) || O(e))
                }(e);
            if (E(n)) return;
            if (R("before:highlightElement", {
                    el: e,
                    language: n
                }), e.children.length > 0 && (!v.ignoreUnescapedHTML && (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), v.throwUnescapedHTML)) throw new W("One of your code blocks includes unescaped HTML.", e.innerHTML);
            let r = (t = e).textContent,
                i = n ? S(r, {
                    language: n,
                    ignoreIllegals: !0
                }) : w(r);
            e.innerHTML = i.value, ! function(e, t, n) {
                let r = t && o[t] || n;
                e.classList.add("hljs"), e.classList.add(`language-${r}`)
            }(e, n, i.language), e.result = {
                language: i.language,
                re: i.relevance,
                relevance: i.relevance
            }, i.secondBest && (e.secondBest = {
                language: i.secondBest.language,
                relevance: i.secondBest.relevance
            }), R("after:highlightElement", {
                el: e,
                result: i,
                text: r
            })
        }
        let C = !1;

        function D() {
            if ("loading" === document.readyState) {
                C = !0;
                return
            }
            document.querySelectorAll(v.cssSelector).forEach(T)
        }
        "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", function() {
            C && D()
        }, !1);

        function O(e) {
            return n[e = (e || "").toLowerCase()] || n[o[e]]
        }

        function M(e, {
            languageName: t
        }) {
            "string" == typeof e && (e = [e]), e.forEach(e => {
                o[e.toLowerCase()] = t
            })
        }

        function A(e) {
            let t = O(e);
            return t && !t.disableAutodetect
        }

        function R(e, t) {
            s.forEach(function(n) {
                n[e] && n[e](t)
            })
        }
        for (let r in Object.assign(e, {
                highlight: S,
                highlightAuto: w,
                highlightAll: D,
                highlightElement: T,
                highlightBlock: function(e) {
                    return H("10.7.0", "highlightBlock will be removed entirely in v12.0"), H("10.7.0", "Please use highlightElement now."), T(e)
                },
                configure: function(e) {
                    v = a(v, e)
                },
                initHighlighting: () => {
                    D(), H("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
                },
                initHighlightingOnLoad: function() {
                    D(), H("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
                },
                registerLanguage: function(t, r) {
                    let i = null;
                    try {
                        i = r(e)
                    } catch (e) {
                        if (j("Language definition for '{}' could not be registered.".replace("{}", t)), u) j(e);
                        else throw e;
                        i = l
                    }!i.name && (i.name = t), n[t] = i, i.rawDefinition = r.bind(null, e), i.aliases && M(i.aliases, {
                        languageName: t
                    })
                },
                unregisterLanguage: function(e) {
                    for (let t of (delete n[e], Object.keys(o))) o[t] === e && delete o[t]
                },
                listLanguages: function() {
                    return Object.keys(n)
                },
                getLanguage: O,
                registerAliases: M,
                autoDetection: A,
                inherit: a,
                addPlugin: function(e) {
                    var t;
                    (t = e)["before:highlightBlock"] && !t["before:highlightElement"] && (t["before:highlightElement"] = e => {
                        t["before:highlightBlock"](Object.assign({
                            block: e.el
                        }, e))
                    }), t["after:highlightBlock"] && !t["after:highlightElement"] && (t["after:highlightElement"] = e => {
                        t["after:highlightBlock"](Object.assign({
                            block: e.el
                        }, e))
                    }), s.push(e)
                }
            }), e.debugMode = function() {
                u = !1
            }, e.safeMode = function() {
                u = !0
            }, e.versionString = "11.7.0", e.regex = {
                concat: g,
                lookahead: p,
                either: _,
                optional: m,
                anyNumberOfTimes: h
            }, k) "object" == typeof k[r] && t.exports(k[r]);
        return Object.assign(e, k), e
    }({});
    e.exports = q, q.HighlightJS = q, q.default = q
}