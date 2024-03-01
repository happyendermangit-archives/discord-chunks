function(e, t, a) {
    function n(e) {
        return RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")
    }

    function i(e) {
        return e ? "string" == typeof e ? e : e.source : null
    }

    function r(e) {
        return o("(?=", e, ")")
    }

    function o() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        let n = t.map(e => i(e)).join("");
        return n
    }
    a("781738"), a("222007");

    function s() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        let n = function(e) {
                let t = e[e.length - 1];
                return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {}
            }(t),
            r = "(" + (n.capture ? "" : "?:") + t.map(e => i(e)).join("|") + ")";
        return r
    }
    e.exports = function(e) {
        let t = {
                scope: "keyword",
                match: /\b(yield|return|let|do|match|use)!/
            },
            a = ["bool", "byte", "sbyte", "int8", "int16", "int32", "uint8", "uint16", "uint32", "int", "uint", "int64", "uint64", "nativeint", "unativeint", "decimal", "float", "double", "float32", "single", "char", "string", "unit", "bigint", "option", "voption", "list", "array", "seq", "byref", "exn", "inref", "nativeptr", "obj", "outref", "voidptr", "Result"],
            i = {
                keyword: ["abstract", "and", "as", "assert", "base", "begin", "class", "default", "delegate", "do", "done", "downcast", "downto", "elif", "else", "end", "exception", "extern", "finally", "fixed", "for", "fun", "function", "global", "if", "in", "inherit", "inline", "interface", "internal", "lazy", "let", "match", "member", "module", "mutable", "namespace", "new", "of", "open", "or", "override", "private", "public", "rec", "return", "static", "struct", "then", "to", "try", "type", "upcast", "use", "val", "void", "when", "while", "with", "yield"],
                literal: ["true", "false", "null", "Some", "None", "Ok", "Error", "infinity", "infinityf", "nan", "nanf"],
                built_in: ["not", "ref", "raise", "reraise", "dict", "readOnlyDict", "set", "get", "enum", "sizeof", "typeof", "typedefof", "nameof", "nullArg", "invalidArg", "invalidOp", "id", "fst", "snd", "ignore", "lock", "using", "box", "unbox", "tryUnbox", "printf", "printfn", "sprintf", "eprintf", "eprintfn", "fprintf", "fprintfn", "failwith", "failwithf"],
                "variable.constant": ["__LINE__", "__SOURCE_DIRECTORY__", "__SOURCE_FILE__"]
            },
            l = e.COMMENT(/\(\*(?!\))/, /\*\)/, {
                contains: ["self"]
            }),
            c = {
                variants: [l, e.C_LINE_COMMENT_MODE]
            },
            _ = {
                scope: "variable",
                begin: /``/,
                end: /``/
            },
            d = /\B('|\^)/,
            m = {
                scope: "symbol",
                variants: [{
                    match: o(d, /``.*?``/)
                }, {
                    match: o(d, e.UNDERSCORE_IDENT_RE)
                }],
                relevance: 0
            },
            p = function(e) {
                let t, {
                    includeEqual: a
                } = e;
                t = a ? "!%&*+-/<=>@^|~?" : "!%&*+-/<>@^|~?";
                let i = Array.from(t),
                    l = o("[", ...i.map(n), "]"),
                    c = s(l, /\./),
                    _ = o(c, r(c)),
                    d = s(o(_, c, "*"), o(l, "+"));
                return {
                    scope: "operator",
                    match: s(d, /:\?>/, /:\?/, /:>/, /:=/, /::?/, /\$/),
                    relevance: 0
                }
            },
            u = p({
                includeEqual: !0
            }),
            E = p({
                includeEqual: !1
            }),
            g = function(t, n) {
                return {
                    begin: o(t, r(o(/\s*/, s(/\w/, /'/, /\^/, /#/, /``/, /\(/, /{\|/)))),
                    beginScope: n,
                    end: r(s(/\n/, /=/)),
                    relevance: 0,
                    keywords: e.inherit(i, {
                        type: a
                    }),
                    contains: [c, m, e.inherit(_, {
                        scope: null
                    }), E]
                }
            },
            S = g(/:/, "operator"),
            b = g(/\bof\b/, "keyword"),
            T = {
                begin: [/(^|\s+)/, /type/, /\s+/, /[a-zA-Z_](\w|')*/],
                beginScope: {
                    2: "keyword",
                    4: "title.class"
                },
                end: r(/\(|=|$/),
                keywords: i,
                contains: [c, e.inherit(_, {
                    scope: null
                }), m, {
                    scope: "operator",
                    match: /<|>/
                }, S]
            },
            f = {
                scope: "computation-expression",
                match: /\b[_a-z]\w*(?=\s*\{)/
            },
            C = {
                begin: [/^\s*/, o(/#/, s(...["if", "else", "endif", "line", "nowarn", "light", "r", "i", "I", "load", "time", "help", "quit"])), /\b/],
                beginScope: {
                    2: "meta"
                },
                end: r(/\s|$/)
            },
            R = {
                variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]
            },
            N = {
                scope: "string",
                begin: /"/,
                end: /"/,
                contains: [e.BACKSLASH_ESCAPE]
            },
            O = {
                scope: "string",
                begin: /@"/,
                end: /"/,
                contains: [{
                    match: /""/
                }, e.BACKSLASH_ESCAPE]
            },
            h = {
                scope: "string",
                begin: /"""/,
                end: /"""/,
                relevance: 2
            },
            v = {
                scope: "subst",
                begin: /\{/,
                end: /\}/,
                keywords: i
            },
            I = {
                scope: "string",
                begin: /\$"/,
                end: /"/,
                contains: [{
                    match: /\{\{/
                }, {
                    match: /\}\}/
                }, e.BACKSLASH_ESCAPE, v]
            },
            A = {
                scope: "string",
                begin: /(\$@|@\$)"/,
                end: /"/,
                contains: [{
                    match: /\{\{/
                }, {
                    match: /\}\}/
                }, {
                    match: /""/
                }, e.BACKSLASH_ESCAPE, v]
            },
            y = {
                scope: "string",
                match: o(/'/, s(/[^\\']/, /\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8})/), /'/)
            };
        return v.contains = [A, I, O, N, y, t, c, _, S, f, C, R, m, u], {
            name: "F#",
            aliases: ["fs", "f#"],
            keywords: i,
            illegal: /\/\*/,
            classNameAliases: {
                "computation-expression": "keyword"
            },
            contains: [t, {
                variants: [{
                    scope: "string",
                    begin: /\$"""/,
                    end: /"""/,
                    contains: [{
                        match: /\{\{/
                    }, {
                        match: /\}\}/
                    }, v],
                    relevance: 2
                }, A, I, h, O, N, y]
            }, c, _, T, {
                scope: "meta",
                begin: /\[</,
                end: />\]/,
                relevance: 2,
                contains: [_, h, O, N, y, R]
            }, b, S, f, C, R, m, u]
        }
    }
}