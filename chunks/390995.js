function(e) {
    e.exports = function(e) {
        let t = e.regex,
            n = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",
            r = t.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/),
            i = t.concat(r, /(::\w+)*/),
            a = {
                "variable.constant": ["__FILE__", "__LINE__", "__ENCODING__"],
                "variable.language": ["self", "super"],
                keyword: ["alias", "and", "begin", "BEGIN", "break", "case", "class", "defined", "do", "else", "elsif", "end", "END", "ensure", "for", "if", "in", "module", "next", "not", "or", "redo", "require", "rescue", "retry", "return", "then", "undef", "unless", "until", "when", "while", "yield", "include", "extend", "prepend", "public", "private", "protected", "raise", "throw"],
                built_in: ["proc", "lambda", "attr_accessor", "attr_reader", "attr_writer", "define_method", "private_constant", "module_function"],
                literal: ["true", "false", "nil"]
            },
            o = {
                className: "doctag",
                begin: "@[A-Za-z]+"
            },
            s = {
                begin: "#<",
                end: ">"
            },
            u = [e.COMMENT("#", "$", {
                contains: [o]
            }), e.COMMENT("^=begin", "^=end", {
                contains: [o],
                relevance: 10
            }), e.COMMENT("^__END__", e.MATCH_NOTHING_RE)],
            c = {
                className: "subst",
                begin: /#\{/,
                end: /\}/,
                keywords: a
            },
            l = {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE, c],
                variants: [{
                    begin: /'/,
                    end: /'/
                }, {
                    begin: /"/,
                    end: /"/
                }, {
                    begin: /`/,
                    end: /`/
                }, {
                    begin: /%[qQwWx]?\(/,
                    end: /\)/
                }, {
                    begin: /%[qQwWx]?\[/,
                    end: /\]/
                }, {
                    begin: /%[qQwWx]?\{/,
                    end: /\}/
                }, {
                    begin: /%[qQwWx]?</,
                    end: />/
                }, {
                    begin: /%[qQwWx]?\//,
                    end: /\//
                }, {
                    begin: /%[qQwWx]?%/,
                    end: /%/
                }, {
                    begin: /%[qQwWx]?-/,
                    end: /-/
                }, {
                    begin: /%[qQwWx]?\|/,
                    end: /\|/
                }, {
                    begin: /\B\?(\\\d{1,3})/
                }, {
                    begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
                }, {
                    begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
                }, {
                    begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
                }, {
                    begin: /\B\?\\(c|C-)[\x20-\x7e]/
                }, {
                    begin: /\B\?\\?\S/
                }, {
                    begin: t.concat(/<<[-~]?'?/, t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
                    contains: [e.END_SAME_AS_BEGIN({
                        begin: /(\w+)/,
                        end: /(\w+)/,
                        contains: [e.BACKSLASH_ESCAPE, c]
                    })]
                }]
            },
            d = "[0-9](_?[0-9])*",
            f = {
                className: "number",
                relevance: 0,
                variants: [{
                    begin: `\\b([1-9](_?[0-9])*|0)(\\.(${d}))?([eE][+-]?(${d})|r)?i?\\b`
                }, {
                    begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
                }, {
                    begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
                }, {
                    begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"
                }, {
                    begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
                }, {
                    begin: "\\b0(_?[0-7])+r?i?\\b"
                }]
            },
            p = {
                variants: [{
                    match: /\(\)/
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /(?=\))/,
                    excludeBegin: !0,
                    endsParent: !0,
                    keywords: a
                }]
            },
            h = [l, {
                variants: [{
                    match: [/class\s+/, i, /\s+<\s+/, i]
                }, {
                    match: [/\b(class|module)\s+/, i]
                }],
                scope: {
                    2: "title.class",
                    4: "title.class.inherited"
                },
                keywords: a
            }, {
                match: [/(include|extend)\s+/, i],
                scope: {
                    2: "title.class"
                },
                keywords: a
            }, {
                relevance: 0,
                match: [i, /\.new[. (]/],
                scope: {
                    1: "title.class"
                }
            }, {
                relevance: 0,
                match: /\b[A-Z][A-Z_0-9]+\b/,
                className: "variable.constant"
            }, {
                relevance: 0,
                match: r,
                scope: "title.class"
            }, {
                match: [/def/, /\s+/, n],
                scope: {
                    1: "keyword",
                    3: "title.function"
                },
                contains: [p]
            }, {
                begin: e.IDENT_RE + "::"
            }, {
                className: "symbol",
                begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
                relevance: 0
            }, {
                className: "symbol",
                begin: ":(?!\\s)",
                contains: [l, {
                    begin: n
                }],
                relevance: 0
            }, f, {
                className: "variable",
                begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
            }, {
                className: "params",
                begin: /\|/,
                end: /\|/,
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0,
                keywords: a
            }, {
                begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
                keywords: "unless",
                contains: [{
                    className: "regexp",
                    contains: [e.BACKSLASH_ESCAPE, c],
                    illegal: /\n/,
                    variants: [{
                        begin: "/",
                        end: "/[a-z]*"
                    }, {
                        begin: /%r\{/,
                        end: /\}[a-z]*/
                    }, {
                        begin: "%r\\(",
                        end: "\\)[a-z]*"
                    }, {
                        begin: "%r!",
                        end: "![a-z]*"
                    }, {
                        begin: "%r\\[",
                        end: "\\][a-z]*"
                    }]
                }].concat(s, u),
                relevance: 0
            }].concat(s, u);
        c.contains = h, p.contains = h;
        let m = [{
            begin: /^\s*=>/,
            starts: {
                end: "$",
                contains: h
            }
        }, {
            className: "meta.prompt",
            begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
            starts: {
                end: "$",
                keywords: a,
                contains: h
            }
        }];
        return u.unshift(s), {
            name: "Ruby",
            aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
            keywords: a,
            illegal: /\/\*/,
            contains: [e.SHEBANG({
                binary: "ruby"
            })].concat(m).concat(u).concat(h)
        }
    }
}