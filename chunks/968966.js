function(e) {
    e.exports = function(e) {
        let t = e.regex,
            n = "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",
            r = {
                $pattern: n,
                keyword: ["after", "alias", "and", "case", "catch", "cond", "defstruct", "defguard", "do", "else", "end", "fn", "for", "if", "import", "in", "not", "or", "quote", "raise", "receive", "require", "reraise", "rescue", "try", "unless", "unquote", "unquote_splicing", "use", "when", "with|0"],
                literal: ["false", "nil", "true"]
            },
            i = {
                className: "subst",
                begin: /#\{/,
                end: /\}/,
                keywords: r
            },
            a = {
                match: /\\[\s\S]/,
                scope: "char.escape",
                relevance: 0
            },
            o = "[/|([{<\"']",
            s = [{
                begin: /"/,
                end: /"/
            }, {
                begin: /'/,
                end: /'/
            }, {
                begin: /\//,
                end: /\//
            }, {
                begin: /\|/,
                end: /\|/
            }, {
                begin: /\(/,
                end: /\)/
            }, {
                begin: /\[/,
                end: /\]/
            }, {
                begin: /\{/,
                end: /\}/
            }, {
                begin: /</,
                end: />/
            }],
            u = e => ({
                scope: "char.escape",
                begin: t.concat(/\\/, e),
                relevance: 0
            }),
            c = {
                className: "string",
                begin: "~[a-z](?=" + o + ")",
                contains: s.map(t => e.inherit(t, {
                    contains: [u(t.end), a, i]
                }))
            },
            l = {
                className: "string",
                begin: "~[A-Z](?=" + o + ")",
                contains: s.map(t => e.inherit(t, {
                    contains: [u(t.end)]
                }))
            },
            d = {
                className: "regex",
                variants: [{
                    begin: "~r(?=" + o + ")",
                    contains: s.map(n => e.inherit(n, {
                        end: t.concat(n.end, /[uismxfU]{0,7}/),
                        contains: [u(n.end), a, i]
                    }))
                }, {
                    begin: "~R(?=" + o + ")",
                    contains: s.map(n => e.inherit(n, {
                        end: t.concat(n.end, /[uismxfU]{0,7}/),
                        contains: [u(n.end)]
                    }))
                }]
            },
            f = {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE, i],
                variants: [{
                    begin: /"""/,
                    end: /"""/
                }, {
                    begin: /'''/,
                    end: /'''/
                }, {
                    begin: /~S"""/,
                    end: /"""/,
                    contains: []
                }, {
                    begin: /~S"/,
                    end: /"/,
                    contains: []
                }, {
                    begin: /~S'''/,
                    end: /'''/,
                    contains: []
                }, {
                    begin: /~S'/,
                    end: /'/,
                    contains: []
                }, {
                    begin: /'/,
                    end: /'/
                }, {
                    begin: /"/,
                    end: /"/
                }]
            },
            p = {
                className: "function",
                beginKeywords: "def defp defmacro defmacrop",
                end: /\B\b/,
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: n,
                    endsParent: !0
                })]
            },
            h = e.inherit(p, {
                className: "class",
                beginKeywords: "defimpl defmodule defprotocol defrecord",
                end: /\bdo\b|$|;/
            }),
            m = [f, d, l, c, e.HASH_COMMENT_MODE, h, p, {
                begin: "::"
            }, {
                className: "symbol",
                begin: ":(?![\\s:])",
                contains: [f, {
                    begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
                }],
                relevance: 0
            }, {
                className: "symbol",
                begin: n + ":(?!:)",
                relevance: 0
            }, {
                className: "title.class",
                begin: /(\b[A-Z][a-zA-Z0-9_]+)/,
                relevance: 0
            }, {
                className: "number",
                begin: "(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[0-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)",
                relevance: 0
            }, {
                className: "variable",
                begin: "(\\$\\W)|((\\$|@@?)(\\w+))"
            }];
        return i.contains = m, {
            name: "Elixir",
            aliases: ["ex", "exs"],
            keywords: r,
            contains: m
        }
    }
}