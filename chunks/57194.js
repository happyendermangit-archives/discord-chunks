function(e) {
    function t(e) {
        return RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")
    }

    function n(e) {
        return e ? "string" == typeof e ? e : e.source : null
    }

    function r(e) {
        return i("(?=", e, ")")
    }

    function i(...e) {
        return e.map(e => n(e)).join("")
    }

    function a(...e) {
        return "(" + (function(e) {
            let t = e[e.length - 1];
            return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {}
        }(e).capture ? "" : "?:") + e.map(e => n(e)).join("|") + ")"
    }
    e.exports = function(e) {
        let n = {
                scope: "keyword",
                match: /\b(yield|return|let|do|match|use)!/
            },
            o = ["bool", "byte", "sbyte", "int8", "int16", "int32", "uint8", "uint16", "uint32", "int", "uint", "int64", "uint64", "nativeint", "unativeint", "decimal", "float", "double", "float32", "single", "char", "string", "unit", "bigint", "option", "voption", "list", "array", "seq", "byref", "exn", "inref", "nativeptr", "obj", "outref", "voidptr", "Result"],
            s = {
                keyword: ["abstract", "and", "as", "assert", "base", "begin", "class", "default", "delegate", "do", "done", "downcast", "downto", "elif", "else", "end", "exception", "extern", "finally", "fixed", "for", "fun", "function", "global", "if", "in", "inherit", "inline", "interface", "internal", "lazy", "let", "match", "member", "module", "mutable", "namespace", "new", "of", "open", "or", "override", "private", "public", "rec", "return", "static", "struct", "then", "to", "try", "type", "upcast", "use", "val", "void", "when", "while", "with", "yield"],
                literal: ["true", "false", "null", "Some", "None", "Ok", "Error", "infinity", "infinityf", "nan", "nanf"],
                built_in: ["not", "ref", "raise", "reraise", "dict", "readOnlyDict", "set", "get", "enum", "sizeof", "typeof", "typedefof", "nameof", "nullArg", "invalidArg", "invalidOp", "id", "fst", "snd", "ignore", "lock", "using", "box", "unbox", "tryUnbox", "printf", "printfn", "sprintf", "eprintf", "eprintfn", "fprintf", "fprintfn", "failwith", "failwithf"],
                "variable.constant": ["__LINE__", "__SOURCE_DIRECTORY__", "__SOURCE_FILE__"]
            },
            u = {
                variants: [e.COMMENT(/\(\*(?!\))/, /\*\)/, {
                    contains: ["self"]
                }), e.C_LINE_COMMENT_MODE]
            },
            c = {
                scope: "variable",
                begin: /``/,
                end: /``/
            },
            l = /\B('|\^)/,
            d = {
                scope: "symbol",
                variants: [{
                    match: i(l, /``.*?``/)
                }, {
                    match: i(l, e.UNDERSCORE_IDENT_RE)
                }],
                relevance: 0
            },
            f = function({
                includeEqual: e
            }) {
                let n;
                let o = i("[", ...Array.from(n = e ? "!%&*+-/<=>@^|~?" : "!%&*+-/<>@^|~?").map(t), "]"),
                    s = a(o, /\./),
                    u = i(s, r(s)),
                    c = a(i(u, s, "*"), i(o, "+"));
                return {
                    scope: "operator",
                    match: a(c, /:\?>/, /:\?/, /:>/, /:=/, /::?/, /\$/),
                    relevance: 0
                }
            },
            p = f({
                includeEqual: !0
            }),
            h = f({
                includeEqual: !1
            }),
            m = function(t, n) {
                return {
                    begin: i(t, r(i(/\s*/, a(/\w/, /'/, /\^/, /#/, /``/, /\(/, /{\|/)))),
                    beginScope: n,
                    end: r(a(/\n/, /=/)),
                    relevance: 0,
                    keywords: e.inherit(s, {
                        type: o
                    }),
                    contains: [u, d, e.inherit(c, {
                        scope: null
                    }), h]
                }
            },
            g = m(/:/, "operator"),
            _ = m(/\bof\b/, "keyword"),
            b = {
                begin: [/(^|\s+)/, /type/, /\s+/, /[a-zA-Z_](\w|')*/],
                beginScope: {
                    2: "keyword",
                    4: "title.class"
                },
                end: r(/\(|=|$/),
                keywords: s,
                contains: [u, e.inherit(c, {
                    scope: null
                }), d, {
                    scope: "operator",
                    match: /<|>/
                }, g]
            },
            v = {
                scope: "computation-expression",
                match: /\b[_a-z]\w*(?=\s*\{)/
            },
            y = {
                begin: [/^\s*/, i(/#/, a(...["if", "else", "endif", "line", "nowarn", "light", "r", "i", "I", "load", "time", "help", "quit"])), /\b/],
                beginScope: {
                    2: "meta"
                },
                end: r(/\s|$/)
            },
            E = {
                variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]
            },
            S = {
                scope: "string",
                begin: /"/,
                end: /"/,
                contains: [e.BACKSLASH_ESCAPE]
            },
            x = {
                scope: "string",
                begin: /@"/,
                end: /"/,
                contains: [{
                    match: /""/
                }, e.BACKSLASH_ESCAPE]
            },
            w = {
                scope: "string",
                begin: /"""/,
                end: /"""/,
                relevance: 2
            },
            T = {
                scope: "subst",
                begin: /\{/,
                end: /\}/,
                keywords: s
            },
            C = {
                scope: "string",
                begin: /\$"/,
                end: /"/,
                contains: [{
                    match: /\{\{/
                }, {
                    match: /\}\}/
                }, e.BACKSLASH_ESCAPE, T]
            },
            D = {
                scope: "string",
                begin: /(\$@|@\$)"/,
                end: /"/,
                contains: [{
                    match: /\{\{/
                }, {
                    match: /\}\}/
                }, {
                    match: /""/
                }, e.BACKSLASH_ESCAPE, T]
            },
            O = {
                scope: "string",
                match: i(/'/, a(/[^\\']/, /\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8})/), /'/)
            };
        return T.contains = [D, C, x, S, O, n, u, c, g, v, y, E, d, p], {
            name: "F#",
            aliases: ["fs", "f#"],
            keywords: s,
            illegal: /\/\*/,
            classNameAliases: {
                "computation-expression": "keyword"
            },
            contains: [n, {
                variants: [{
                    scope: "string",
                    begin: /\$"""/,
                    end: /"""/,
                    contains: [{
                        match: /\{\{/
                    }, {
                        match: /\}\}/
                    }, T],
                    relevance: 2
                }, D, C, w, x, S, O]
            }, u, c, b, {
                scope: "meta",
                begin: /\[</,
                end: />\]/,
                relevance: 2,
                contains: [c, w, x, S, O, E]
            }, _, g, v, y, E, d, p]
        }
    }
}