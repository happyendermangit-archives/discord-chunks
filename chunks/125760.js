function(e, t, a) {
    function n(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t.variants = e, t
    }
    e.exports = function(e) {
        let t = e.regex,
            a = "[A-Za-z0-9_$]+",
            i = n([e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [{
                    begin: /\w+@/,
                    relevance: 0
                }, {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                }]
            })]),
            r = {
                className: "regexp",
                begin: /~?\/[^\/\n]+\//,
                contains: [e.BACKSLASH_ESCAPE]
            },
            o = n([e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]),
            s = n([{
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
            l = {
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
            }), i, s, r, o, l, {
                className: "meta",
                begin: "@[A-Za-z]+",
                relevance: 0
            }, {
                className: "attr",
                begin: a + "[ 	]*:",
                relevance: 0
            }, {
                begin: /\?/,
                end: /:/,
                relevance: 0,
                contains: [i, s, r, o, "self"]
            }, {
                className: "symbol",
                begin: "^[ 	]*" + t.lookahead(a + ":"),
                excludeBegin: !0,
                end: a + ":",
                relevance: 0
            }],
            illegal: /#|<\//
        }
    }
}