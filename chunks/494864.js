function(e, t, a) {
    a("222007"), a("70102"), a("781738"), a("424973"), a("843762");
    var n = {
        exports: {}
    };

    function i(e) {
        return e instanceof Map ? e.clear = e.delete = e.set = function() {
            throw Error("map is read-only")
        } : e instanceof Set && (e.add = e.clear = e.delete = function() {
            throw Error("set is read-only")
        }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach(function(t) {
            var a = e[t];
            "object" == typeof a && !Object.isFrozen(a) && i(a)
        }), e
    }
    n.exports = i, n.exports.default = i;
    class Response {
        ignoreMatch() {
            this.isMatchIgnored = !0
        }
        constructor(e) {
            void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1
        }
    }

    function r(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function o(e) {
        for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) a[n - 1] = arguments[n];
        let i = Object.create(null);
        for (let t in e) i[t] = e[t];
        return a.forEach(function(e) {
            for (let t in e) i[t] = e[t]
        }), i
    }
    let s = e => !!e.scope || e.sublanguage && e.language,
        l = (e, t) => {
            let {
                prefix: a
            } = t;
            if (e.includes(".")) {
                let t = e.split(".");
                return ["".concat(a).concat(t.shift()), ...t.map((e, t) => "".concat(e).concat("_".repeat(t + 1)))].join(" ")
            }
            return "".concat(a).concat(e)
        };
    class c {
        addText(e) {
            this.buffer += r(e)
        }
        openNode(e) {
            if (!s(e)) return;
            let t = "";
            t = e.sublanguage ? "language-".concat(e.language) : l(e.scope, {
                prefix: this.classPrefix
            }), this.span(t)
        }
        closeNode(e) {
            s(e) && (this.buffer += "</span>")
        }
        value() {
            return this.buffer
        }
        span(e) {
            this.buffer += '<span class="'.concat(e, '">')
        }
        constructor(e, t) {
            this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this)
        }
    }
    let _ = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = {
                children: []
            };
        return Object.assign(t, e), t
    };
    class d {
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
            let t = _({
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
                d._collapse(e)
            }))
        }
        constructor() {
            this.rootNode = _(), this.stack = [this.rootNode]
        }
    }
    class m extends d {
        addKeyword(e, t) {
            "" !== e && (this.openNode(t), this.addText(e), this.closeNode())
        }
        addText(e) {
            "" !== e && this.add(e)
        }
        addSublanguage(e, t) {
            let a = e.root;
            a.sublanguage = !0, a.language = t, this.add(a)
        }
        toHTML() {
            let e = new c(this, this.options);
            return e.value()
        }
        finalize() {
            return !0
        }
        constructor(e) {
            super(), this.options = e
        }
    }

    function p(e) {
        return e ? "string" == typeof e ? e : e.source : null
    }

    function u(e) {
        return S("(?=", e, ")")
    }

    function E(e) {
        return S("(?:", e, ")*")
    }

    function g(e) {
        return S("(?:", e, ")?")
    }

    function S() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        let n = t.map(e => p(e)).join("");
        return n
    }

    function b() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        let n = function(e) {
                let t = e[e.length - 1];
                return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {}
            }(t),
            i = "(" + (n.capture ? "" : "?:") + t.map(e => p(e)).join("|") + ")";
        return i
    }

    function T(e) {
        return RegExp(e.toString() + "|").exec("").length - 1
    }
    let f = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function C(e, t) {
        let {
            joinWith: a
        } = t, n = 0;
        return e.map(e => {
            n += 1;
            let t = n,
                a = p(e),
                i = "";
            for (; a.length > 0;) {
                let e = f.exec(a);
                if (!e) {
                    i += a;
                    break
                }
                i += a.substring(0, e.index), a = a.substring(e.index + e[0].length), "\\" === e[0][0] && e[1] ? i += "\\" + String(Number(e[1]) + t) : (i += e[0], "(" === e[0] && n++)
            }
            return i
        }).map(e => "(".concat(e, ")")).join(a)
    }
    let R = "[a-zA-Z]\\w*",
        N = "[a-zA-Z_]\\w*",
        O = "\\b\\d+(\\.\\d+)?",
        h = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        v = "\\b(0b[01]+)",
        I = {
            begin: "\\\\[\\s\\S]",
            relevance: 0
        },
        A = function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = o({
                    scope: "comment",
                    begin: e,
                    end: t,
                    contains: []
                }, a);
            n.contains.push({
                scope: "doctag",
                begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
                end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
                excludeBegin: !0,
                relevance: 0
            });
            let i = b("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
            return n.contains.push({
                begin: S(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}")
            }), n
        },
        y = A("//", "$"),
        D = A("/\\*", "\\*/"),
        M = A("#", "$");
    var x = Object.freeze({
        __proto__: null,
        MATCH_NOTHING_RE: /\b\B/,
        IDENT_RE: R,
        UNDERSCORE_IDENT_RE: N,
        NUMBER_RE: O,
        C_NUMBER_RE: h,
        BINARY_NUMBER_RE: v,
        RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        SHEBANG: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = /^#![ ]*\//;
            return e.binary && (e.begin = S(t, /.*\b/, e.binary, /\b.*/)), o({
                scope: "meta",
                begin: t,
                end: /$/,
                relevance: 0,
                "on:begin": (e, t) => {
                    0 !== e.index && t.ignoreMatch()
                }
            }, e)
        },
        BACKSLASH_ESCAPE: I,
        APOS_STRING_MODE: {
            scope: "string",
            begin: "'",
            end: "'",
            illegal: "\\n",
            contains: [I]
        },
        QUOTE_STRING_MODE: {
            scope: "string",
            begin: '"',
            end: '"',
            illegal: "\\n",
            contains: [I]
        },
        PHRASAL_WORDS_MODE: {
            begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        },
        COMMENT: A,
        C_LINE_COMMENT_MODE: y,
        C_BLOCK_COMMENT_MODE: D,
        HASH_COMMENT_MODE: M,
        NUMBER_MODE: {
            scope: "number",
            begin: O,
            relevance: 0
        },
        C_NUMBER_MODE: {
            scope: "number",
            begin: h,
            relevance: 0
        },
        BINARY_NUMBER_MODE: {
            scope: "number",
            begin: v,
            relevance: 0
        },
        REGEXP_MODE: {
            begin: /(?=\/[^/\n]*\/)/,
            contains: [{
                scope: "regexp",
                begin: /\//,
                end: /\/[gimuy]*/,
                illegal: /\n/,
                contains: [I, {
                    begin: /\[/,
                    end: /\]/,
                    relevance: 0,
                    contains: [I]
                }]
            }]
        },
        TITLE_MODE: {
            scope: "title",
            begin: R,
            relevance: 0
        },
        UNDERSCORE_TITLE_MODE: {
            scope: "title",
            begin: N,
            relevance: 0
        },
        METHOD_GUARD: {
            begin: "\\.\\s*" + N,
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

    function L(e, t) {
        let a = e.input[e.index - 1];
        "." === a && t.ignoreMatch()
    }

    function w(e, t) {
        void 0 !== e.className && (e.scope = e.className, delete e.className)
    }

    function P(e, t) {
        if (!!t) e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = L, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0))
    }

    function k(e, t) {
        Array.isArray(e.illegal) && (e.illegal = b(...e.illegal))
    }

    function U(e, t) {
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
            let a = Object.assign({}, e);
            Object.keys(e).forEach(t => {
                delete e[t]
            }), e.keywords = a.keywords, e.begin = S(a.beforeMatch, u(a.begin)), e.starts = {
                relevance: 0,
                contains: [Object.assign(a, {
                    endsParent: !0
                })]
            }, e.relevance = 0, delete a.beforeMatch
        },
        G = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
        Y = {},
        H = e => {
            console.error(e)
        },
        V = function(e) {
            for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) a[n - 1] = arguments[n];
            console.log("WARN: ".concat(e), ...a)
        },
        q = (e, t) => {
            !Y["".concat(e, "/").concat(t)] && (console.log("Deprecated as of ".concat(e, ". ").concat(t)), Y["".concat(e, "/").concat(t)] = !0)
        },
        z = Error();

    function W(e, t, a) {
        let {
            key: n
        } = a, i = 0, r = e[n], o = {}, s = {};
        for (let e = 1; e <= t.length; e++) s[e + i] = r[e], o[e + i] = !0, i += T(t[e - 1]);
        e[n] = s, e[n]._emit = o, e[n]._multi = !0
    }

    function $(e) {
        var t;
        (t = e).scope && "object" == typeof t.scope && null !== t.scope && (t.beginScope = t.scope, delete t.scope), "string" == typeof e.beginScope && (e.beginScope = {
            _wrap: e.beginScope
        }), "string" == typeof e.endScope && (e.endScope = {
            _wrap: e.endScope
        }), ! function(e) {
            if (Array.isArray(e.begin)) {
                if (e.skip || e.excludeBegin || e.returnBegin) throw H("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), z;
                if ("object" != typeof e.beginScope || null === e.beginScope) throw H("beginScope must be object"), z;
                W(e, e.begin, {
                    key: "beginScope"
                }), e.begin = C(e.begin, {
                    joinWith: ""
                })
            }
        }(e), ! function(e) {
            if (Array.isArray(e.end)) {
                if (e.skip || e.excludeEnd || e.returnEnd) throw H("skip, excludeEnd, returnEnd not compatible with endScope: {}"), z;
                if ("object" != typeof e.endScope || null === e.endScope) throw H("endScope must be object"), z;
                W(e, e.end, {
                    key: "endScope"
                }), e.end = C(e.end, {
                    joinWith: ""
                })
            }
        }(e)
    }
    class Q extends Error {
        constructor(e, t) {
            super(e), this.name = "HTMLInjectionError", this.html = t
        }
    }
    let K = Symbol("nomatch");
    var j = function(e) {
        let t = Object.create(null),
            a = Object.create(null),
            i = [],
            s = !0,
            l = "Could not find the language '{}', did you forget to load/include a language module?",
            c = {
                disableAutodetect: !0,
                name: "Plain text",
                contains: []
            },
            _ = {
                ignoreUnescapedHTML: !1,
                throwUnescapedHTML: !1,
                noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                classPrefix: "hljs-",
                cssSelector: "pre code",
                languages: null,
                __emitter: m
            };

        function d(e) {
            return _.noHighlightRe.test(e)
        }

        function f(e, t, a) {
            let n = "",
                i = "";
            "object" == typeof t ? (n = e, a = t.ignoreIllegals, i = t.language) : (q("10.7.0", "highlight(lang, code, ...args) has been deprecated."), q("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), i = e, n = t), void 0 === a && (a = !0);
            let r = {
                code: n,
                language: i
            };
            D("before:highlight", r);
            let o = r.result ? r.result : R(r.language, r.code, a);
            return o.code = r.code, D("after:highlight", o), o
        }

        function R(e, a, n, i) {
            let c = Object.create(null);

            function d() {
                if (!h.keywords) {
                    A.addText(y);
                    return
                }
                let e = 0;
                h.keywordPatternRe.lastIndex = 0;
                let t = h.keywordPatternRe.exec(y),
                    a = "";
                for (; t;) {
                    var n, i;
                    a += y.substring(e, t.index);
                    let r = b.case_insensitive ? t[0].toLowerCase() : t[0];
                    let o = (n = h, i = r, n.keywords[i]);
                    if (o) {
                        let [e, n] = o;
                        if (A.addText(a), a = "", c[r] = (c[r] || 0) + 1, c[r] <= 7 && (D += n), e.startsWith("_")) a += t[0];
                        else {
                            let a = b.classNameAliases[e] || e;
                            A.addKeyword(t[0], a)
                        }
                    } else a += t[0];
                    e = h.keywordPatternRe.lastIndex, t = h.keywordPatternRe.exec(y)
                }
                a += y.substring(e), A.addText(a)
            }

            function m() {
                null != h.subLanguage ? ! function() {
                    if ("" === y) return;
                    let e = null;
                    if ("string" == typeof h.subLanguage) {
                        if (!t[h.subLanguage]) {
                            A.addText(y);
                            return
                        }
                        e = R(h.subLanguage, y, !0, v[h.subLanguage]), v[h.subLanguage] = e._top
                    } else e = N(y, h.subLanguage.length ? h.subLanguage : null);
                    h.relevance > 0 && (D += e.relevance), A.addSublanguage(e._emitter, e.language)
                }() : d(), y = ""
            }

            function u(e, t) {
                let a = 1,
                    n = t.length - 1;
                for (; a <= n;) {
                    if (!e._emit[a]) {
                        a++;
                        continue
                    }
                    let n = b.classNameAliases[e[a]] || e[a],
                        i = t[a];
                    n ? A.addKeyword(i, n) : (y = i, d(), y = ""), a++
                }
            }

            function E(e, t) {
                return e.scope && "string" == typeof e.scope && A.openNode(b.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (A.addKeyword(y, b.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), y = "") : e.beginScope._multi && (u(e.beginScope, t), y = "")), h = Object.create(e, {
                    parent: {
                        value: h
                    }
                })
            }
            let g = {};

            function S(t, i) {
                let r = i && i[0];
                if (y += t, null == r) return m(), 0;
                if ("begin" === g.type && "end" === i.type && g.index === i.index && "" === r) {
                    if (y += a.slice(i.index, i.index + 1), !s) {
                        let t = Error("0 width match regex (".concat(e, ")"));
                        throw t.languageName = e, t.badRule = g.rule, t
                    }
                    return 1
                }
                if (g = i, "begin" === i.type) return function(e) {
                    let t = e[0],
                        a = e.rule,
                        n = new Response(a),
                        i = [a.__beforeBegin, a["on:begin"]];
                    for (let a of i)
                        if (a && (a(e, n), n.isMatchIgnored)) {
                            var r;
                            return r = t, 0 === h.matcher.regexIndex ? (y += r[0], 1) : (L = !0, 0)
                        } return a.skip ? y += t : (a.excludeBegin && (y += t), m(), !a.returnBegin && !a.excludeBegin && (y = t)), E(a, e), a.returnBegin ? 0 : t.length
                }(i);
                if ("illegal" !== i.type || n) {
                    if ("end" === i.type) {
                        let e = function(e) {
                            let t = e[0],
                                n = a.substring(e.index),
                                i = function e(t, a, n) {
                                    let i = function(e, t) {
                                        let a = e && e.exec(t);
                                        return a && 0 === a.index
                                    }(t.endRe, n);
                                    if (i) {
                                        if (t["on:end"]) {
                                            let e = new Response(t);
                                            t["on:end"](a, e), e.isMatchIgnored && (i = !1)
                                        }
                                        if (i) {
                                            for (; t.endsParent && t.parent;) t = t.parent;
                                            return t
                                        }
                                    }
                                    if (t.endsWithParent) return e(t.parent, a, n)
                                }(h, e, n);
                            if (!i) return K;
                            let r = h;
                            h.endScope && h.endScope._wrap ? (m(), A.addKeyword(t, h.endScope._wrap)) : h.endScope && h.endScope._multi ? (m(), u(h.endScope, e)) : r.skip ? y += t : (!(r.returnEnd || r.excludeEnd) && (y += t), m(), r.excludeEnd && (y = t));
                            do h.scope && A.closeNode(), !h.skip && !h.subLanguage && (D += h.relevance), h = h.parent; while (h !== i.parent);
                            return i.starts && E(i.starts, e), r.returnEnd ? 0 : t.length
                        }(i);
                        if (e !== K) return e
                    }
                } else {
                    let e = Error('Illegal lexeme "' + r + '" for mode "' + (h.scope || "<unnamed>") + '"');
                    throw e.mode = h, e
                }
                if ("illegal" === i.type && "" === r) return 1;
                if (x > 1e5 && x > 3 * i.index) {
                    let e = Error("potential infinite loop, way more iterations than matches");
                    throw e
                }
                return y += r, r.length
            }
            let b = I(e);
            if (!b) throw H(l.replace("{}", e)), Error('Unknown language: "' + e + '"');
            let f = function(e) {
                    function t(t, a) {
                        return RegExp(p(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (a ? "g" : ""))
                    }
                    class a {
                        addRule(e, t) {
                            t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += T(e) + 1
                        }
                        compile() {
                            0 === this.regexes.length && (this.exec = () => null);
                            let e = this.regexes.map(e => e[1]);
                            this.matcherRe = t(C(e, {
                                joinWith: "|"
                            }), !0), this.lastIndex = 0
                        }
                        exec(e) {
                            this.matcherRe.lastIndex = this.lastIndex;
                            let t = this.matcherRe.exec(e);
                            if (!t) return null;
                            let a = t.findIndex((e, t) => t > 0 && void 0 !== e),
                                n = this.matchIndexes[a];
                            return t.splice(0, a), Object.assign(t, n)
                        }
                        constructor() {
                            this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
                        }
                    }
                    class n {
                        getMatcher(e) {
                            if (this.multiRegexes[e]) return this.multiRegexes[e];
                            let t = new a;
                            return this.rules.slice(e).forEach(e => {
                                let [a, n] = e;
                                return t.addRule(a, n)
                            }), t.compile(), this.multiRegexes[e] = t, t
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
                            let a = t.exec(e);
                            if (this.resumingScanAtSamePosition()) {
                                if (a && a.index === this.lastIndex);
                                else {
                                    let t = this.getMatcher(0);
                                    t.lastIndex = this.lastIndex + 1, a = t.exec(e)
                                }
                            }
                            return a && (this.regexIndex += a.position + 1, this.regexIndex === this.count && this.considerAll()), a
                        }
                        constructor() {
                            this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
                        }
                    }
                    if (!e.compilerExtensions && (e.compilerExtensions = []), e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
                    return e.classNameAliases = o(e.classNameAliases || {}),
                        function a(i, r) {
                            if (i.isCompiled) return i;
                            [w, U, $, B].forEach(e => e(i, r)), e.compilerExtensions.forEach(e => e(i, r)), i.__beforeBegin = null, [P, k, F].forEach(e => e(i, r)), i.isCompiled = !0;
                            let s = null;
                            return "object" == typeof i.keywords && i.keywords.$pattern && (i.keywords = Object.assign({}, i.keywords), s = i.keywords.$pattern, delete i.keywords.$pattern), s = s || /\w+/, i.keywords && (i.keywords = function e(t, a) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword",
                                    i = Object.create(null);
                                return "string" == typeof t ? r(n, t.split(" ")) : Array.isArray(t) ? r(n, t) : Object.keys(t).forEach(function(n) {
                                    Object.assign(i, e(t[n], a, n))
                                }), i;

                                function r(e, t) {
                                    a && (t = t.map(e => e.toLowerCase())), t.forEach(function(t) {
                                        let a = t.split("|");
                                        i[a[0]] = [e, function(e, t) {
                                            return t ? Number(t) : function(e) {
                                                return G.includes(e.toLowerCase())
                                            }(e) ? 0 : 1
                                        }(a[0], a[1])]
                                    })
                                }
                            }(i.keywords, e.case_insensitive)), i.keywordPatternRe = t(s, !0), r && (!i.begin && (i.begin = /\B|\b/), i.beginRe = t(i.begin), !i.end && !i.endsWithParent && (i.end = /\B|\b/), i.end && (i.endRe = t(i.end)), i.terminatorEnd = p(i.end) || "", i.endsWithParent && r.terminatorEnd && (i.terminatorEnd += (i.end ? "|" : "") + r.terminatorEnd)), i.illegal && (i.illegalRe = t(i.illegal)), !i.contains && (i.contains = []), i.contains = [].concat(...i.contains.map(function(e) {
                                return function(e) {
                                    return (e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function(t) {
                                        return o(e, {
                                            variants: null
                                        }, t)
                                    })), e.cachedVariants) ? e.cachedVariants : function e(t) {
                                        return !!t && (t.endsWithParent || e(t.starts))
                                    }(e) ? o(e, {
                                        starts: e.starts ? o(e.starts) : null
                                    }) : Object.isFrozen(e) ? o(e) : e
                                }("self" === e ? i : e)
                            })), i.contains.forEach(function(e) {
                                a(e, i)
                            }), i.starts && a(i.starts, r), i.matcher = function(e) {
                                let t = new n;
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
                }(b),
                O = "",
                h = i || f,
                v = {},
                A = new _.__emitter(_);
            ! function() {
                let e = [];
                for (let t = h; t !== b; t = t.parent) t.scope && e.unshift(t.scope);
                e.forEach(e => A.openNode(e))
            }();
            let y = "",
                D = 0,
                M = 0,
                x = 0,
                L = !1;
            try {
                for (h.matcher.considerAll();;) {
                    x++, L ? L = !1 : h.matcher.considerAll(), h.matcher.lastIndex = M;
                    let e = h.matcher.exec(a);
                    if (!e) break;
                    let t = a.substring(M, e.index),
                        n = S(t, e);
                    M = e.index + n
                }
                return S(a.substring(M)), A.closeAllNodes(), A.finalize(), O = A.toHTML(), {
                    language: e,
                    value: O,
                    relevance: D,
                    illegal: !1,
                    _emitter: A,
                    _top: h
                }
            } catch (t) {
                if (t.message && t.message.includes("Illegal")) return {
                    language: e,
                    value: r(a),
                    illegal: !0,
                    relevance: 0,
                    _illegalBy: {
                        message: t.message,
                        index: M,
                        context: a.slice(M - 100, M + 100),
                        mode: t.mode,
                        resultSoFar: O
                    },
                    _emitter: A
                };
                if (s) return {
                    language: e,
                    value: r(a),
                    illegal: !1,
                    relevance: 0,
                    errorRaised: t,
                    _emitter: A,
                    _top: h
                };
                else throw t
            }
        }

        function N(e, a) {
            a = a || _.languages || Object.keys(t);
            let n = function(e) {
                    let t = {
                        value: r(e),
                        illegal: !1,
                        relevance: 0,
                        _top: c,
                        _emitter: new _.__emitter(_)
                    };
                    return t._emitter.addText(e), t
                }(e),
                i = a.filter(I).filter(y).map(t => R(t, e, !1));
            i.unshift(n);
            let o = i.sort((e, t) => {
                    if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                    if (e.language && t.language) {
                        if (I(e.language).supersetOf === t.language) return 1;
                        if (I(t.language).supersetOf === e.language) return -1
                    }
                    return 0
                }),
                [s, l] = o;
            return s.secondBest = l, s
        }

        function O(e) {
            let t = null,
                n = function(e) {
                    let t = e.className + " ";
                    t += e.parentNode ? e.parentNode.className : "";
                    let a = _.languageDetectRe.exec(t);
                    if (a) {
                        let t = I(a[1]);
                        return !t && (V(l.replace("{}", a[1])), V("Falling back to no-highlight mode for this block.", e)), t ? a[1] : "no-highlight"
                    }
                    return t.split(/\s+/).find(e => d(e) || I(e))
                }(e);
            if (d(n)) return;
            if (D("before:highlightElement", {
                    el: e,
                    language: n
                }), e.children.length > 0 && (!_.ignoreUnescapedHTML && (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), _.throwUnescapedHTML)) {
                let t = new Q("One of your code blocks includes unescaped HTML.", e.innerHTML);
                throw t
            }
            t = e;
            let i = t.textContent,
                r = n ? f(i, {
                    language: n,
                    ignoreIllegals: !0
                }) : N(i);
            e.innerHTML = r.value, ! function(e, t, n) {
                let i = t && a[t] || n;
                e.classList.add("hljs"), e.classList.add("language-".concat(i))
            }(e, n, r.language), e.result = {
                language: r.language,
                re: r.relevance,
                relevance: r.relevance
            }, r.secondBest && (e.secondBest = {
                language: r.secondBest.language,
                relevance: r.secondBest.relevance
            }), D("after:highlightElement", {
                el: e,
                result: r,
                text: i
            })
        }
        let h = !1;

        function v() {
            if ("loading" === document.readyState) {
                h = !0;
                return
            }
            let e = document.querySelectorAll(_.cssSelector);
            e.forEach(O)
        }
        "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", function() {
            h && v()
        }, !1);

        function I(e) {
            return t[e = (e || "").toLowerCase()] || t[a[e]]
        }

        function A(e, t) {
            let {
                languageName: n
            } = t;
            "string" == typeof e && (e = [e]), e.forEach(e => {
                a[e.toLowerCase()] = n
            })
        }

        function y(e) {
            let t = I(e);
            return t && !t.disableAutodetect
        }

        function D(e, t) {
            i.forEach(function(a) {
                a[e] && a[e](t)
            })
        }
        for (let r in Object.assign(e, {
                highlight: f,
                highlightAuto: N,
                highlightAll: v,
                highlightElement: O,
                highlightBlock: function(e) {
                    return q("10.7.0", "highlightBlock will be removed entirely in v12.0"), q("10.7.0", "Please use highlightElement now."), O(e)
                },
                configure: function(e) {
                    _ = o(_, e)
                },
                initHighlighting: () => {
                    v(), q("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
                },
                initHighlightingOnLoad: function() {
                    v(), q("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
                },
                registerLanguage: function(a, n) {
                    let i = null;
                    try {
                        i = n(e)
                    } catch (e) {
                        if (H("Language definition for '{}' could not be registered.".replace("{}", a)), s) H(e);
                        else throw e;
                        i = c
                    }!i.name && (i.name = a), t[a] = i, i.rawDefinition = n.bind(null, e), i.aliases && A(i.aliases, {
                        languageName: a
                    })
                },
                unregisterLanguage: function(e) {
                    for (let n of (delete t[e], Object.keys(a))) a[n] === e && delete a[n]
                },
                listLanguages: function() {
                    return Object.keys(t)
                },
                getLanguage: I,
                registerAliases: A,
                autoDetection: y,
                inherit: o,
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
                    }), i.push(e)
                }
            }), e.debugMode = function() {
                s = !1
            }, e.safeMode = function() {
                s = !0
            }, e.versionString = "11.7.0", e.regex = {
                concat: S,
                lookahead: u,
                either: b,
                optional: g,
                anyNumberOfTimes: E
            }, x) "object" == typeof x[r] && n.exports(x[r]);
        return Object.assign(e, x), e
    }({});
    e.exports = j, j.HighlightJS = j, j.default = j
}