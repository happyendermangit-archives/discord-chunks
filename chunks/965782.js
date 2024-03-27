function(e) {
    var t = "[0-9](_*[0-9])*",
        n = `\\.(${t})`,
        r = "[0-9a-fA-F](_*[0-9a-fA-F])*",
        i = {
            className: "number",
            variants: [{
                begin: `(\\b(${t})((${n})|\\.)?|(${n}))[eE][+-]?(${t})[fFdD]?\\b`
            }, {
                begin: `\\b(${t})((${n})[fFdD]?\\b|\\.([fFdD]\\b)?)`
            }, {
                begin: `(${n})[fFdD]?\\b`
            }, {
                begin: `\\b(${t})[fFdD]\\b`
            }, {
                begin: `\\b0[xX]((${r})\\.?|(${r})?\\.(${r}))[pP][+-]?(${t})[fFdD]?\\b`
            }, {
                begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
            }, {
                begin: `\\b0[xX](${r})[lL]?\\b`
            }, {
                begin: "\\b0(_*[0-7])*[lL]?\\b"
            }, {
                begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
            }],
            relevance: 0
        };
    e.exports = function(e) {
        let t = e.regex,
            n = "[\xc0-ʸa-zA-Z_$][\xc0-ʸa-zA-Z_$0-9]*",
            r = n + function e(t, n, r) {
                return -1 === r ? "" : t.replace(n, i => e(t, n, r - 1))
            }("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2),
            a = {
                keyword: ["synchronized", "abstract", "private", "var", "static", "if", "const ", "for", "while", "strictfp", "finally", "protected", "import", "native", "final", "void", "enum", "else", "break", "transient", "catch", "instanceof", "volatile", "case", "assert", "package", "default", "public", "try", "switch", "continue", "throws", "protected", "public", "private", "module", "requires", "exports", "do", "sealed", "yield", "permits"],
                literal: ["false", "true", "null"],
                type: ["char", "boolean", "long", "float", "int", "byte", "short", "double"],
                built_in: ["super", "this"]
            },
            o = {
                className: "meta",
                begin: "@" + n,
                contains: [{
                    begin: /\(/,
                    end: /\)/,
                    contains: ["self"]
                }]
            },
            s = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: a,
                relevance: 0,
                contains: [e.C_BLOCK_COMMENT_MODE],
                endsParent: !0
            };
        return {
            name: "Java",
            aliases: ["jsp"],
            keywords: a,
            illegal: /<\/|#/,
            contains: [e.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [{
                    begin: /\w+@/,
                    relevance: 0
                }, {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                }]
            }), {
                begin: /import java\.[a-z]+\./,
                keywords: "import",
                relevance: 2
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                begin: /"""/,
                end: /"""/,
                className: "string",
                contains: [e.BACKSLASH_ESCAPE]
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, n],
                className: {
                    1: "keyword",
                    3: "title.class"
                }
            }, {
                match: /non-sealed/,
                scope: "keyword"
            }, {
                begin: [t.concat(/(?!else)/, n), /\s+/, n, /\s+/, /=(?!=)/],
                className: {
                    1: "type",
                    3: "variable",
                    5: "operator"
                }
            }, {
                begin: [/record/, /\s+/, n],
                className: {
                    1: "keyword",
                    3: "title.class"
                },
                contains: [s, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, {
                beginKeywords: "new throw return else",
                relevance: 0
            }, {
                begin: ["(?:" + r + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
                className: {
                    2: "title.function"
                },
                keywords: a,
                contains: [{
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: a,
                    relevance: 0,
                    contains: [o, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.C_BLOCK_COMMENT_MODE]
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, i, o]
        }
    }
}