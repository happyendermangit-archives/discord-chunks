function(e) {
    function t(e, t = {}) {
        return t.variants = e, t
    }
    e.exports = function(e) {
        let n = e.regex,
            r = "[A-Za-z0-9_$]+",
            i = t([e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [{
                    begin: /\w+@/,
                    relevance: 0
                }, {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                }]
            })]),
            a = {
                className: "regexp",
                begin: /~?\/[^\/\n]+\//,
                contains: [e.BACKSLASH_ESCAPE]
            },
            o = t([e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]),
            s = t([{
                begin: /"""/,
                end: /"""/
            }, {
                begin: /'''/,
                end: /'''/
            }, {
                begin: "\\$/",
                end: "/\\$",
                relevance: 10
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], {
                className: "string"
            }),
            u = {
                match: [/(class|interface|trait|enum|extends|implements)/, /\s+/, e.UNDERSCORE_IDENT_RE],
                scope: {
                    1: "keyword",
                    3: "title.class"
                }
            };
        return {
            name: "Groovy",
            keywords: {
                "variable.language": "this super",
                literal: "true false null",
                type: ["byte", "short", "char", "int", "long", "boolean", "float", "double", "void"],
                keyword: ["def", "as", "in", "assert", "trait", "abstract", "static", "volatile", "transient", "public", "private", "protected", "synchronized", "final", "class", "interface", "enum", "if", "else", "for", "while", "switch", "case", "break", "default", "continue", "throw", "throws", "try", "catch", "finally", "implements", "extends", "new", "import", "package", "return", "instanceof"]
            },
            contains: [e.SHEBANG({
                binary: "groovy",
                relevance: 10
            }), i, s, a, o, u, {
                className: "meta",
                begin: "@[A-Za-z]+",
                relevance: 0
            }, {
                className: "attr",
                begin: r + "[ 	]*:",
                relevance: 0
            }, {
                begin: /\?/,
                end: /:/,
                relevance: 0,
                contains: [i, s, a, o, "self"]
            }, {
                className: "symbol",
                begin: "^[ 	]*" + n.lookahead(r + ":"),
                excludeBegin: !0,
                end: r + ":",
                relevance: 0
            }],
            illegal: /#|<\//
        }
    }
}