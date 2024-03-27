function(e) {
    e.exports = function(e) {
        let t = "[a-z'][a-zA-Z0-9_']*",
            n = "(" + t + ":" + t + "|" + t + ")",
            r = {
                keyword: "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
                literal: "false true"
            },
            i = e.COMMENT("%", "$"),
            a = {
                className: "number",
                begin: "\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",
                relevance: 0
            },
            o = {
                begin: "fun\\s+" + t + "/\\d+"
            },
            s = {
                begin: n + "\\(",
                end: "\\)",
                returnBegin: !0,
                relevance: 0,
                contains: [{
                    begin: n,
                    relevance: 0
                }, {
                    begin: "\\(",
                    end: "\\)",
                    endsWithParent: !0,
                    returnEnd: !0,
                    relevance: 0
                }]
            },
            u = {
                begin: /\{/,
                end: /\}/,
                relevance: 0
            },
            c = {
                begin: "\\b_([A-Z][A-Za-z0-9_]*)?",
                relevance: 0
            },
            l = {
                begin: "[A-Z][a-zA-Z0-9_]*",
                relevance: 0
            },
            d = {
                begin: "#" + e.UNDERSCORE_IDENT_RE,
                relevance: 0,
                returnBegin: !0,
                contains: [{
                    begin: "#" + e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                }, {
                    begin: /\{/,
                    end: /\}/,
                    relevance: 0
                }]
            },
            f = {
                beginKeywords: "fun receive if try case",
                end: "end",
                keywords: r
            };
        f.contains = [i, o, e.inherit(e.APOS_STRING_MODE, {
            className: ""
        }), f, s, e.QUOTE_STRING_MODE, a, u, c, l, d];
        let p = [i, o, f, s, e.QUOTE_STRING_MODE, a, u, c, l, d];
        s.contains[1].contains = p, u.contains = p, d.contains[1].contains = p;
        let h = {
            className: "params",
            begin: "\\(",
            end: "\\)",
            contains: p
        };
        return {
            name: "Erlang",
            aliases: ["erl"],
            keywords: r,
            illegal: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
            contains: [{
                className: "function",
                begin: "^" + t + "\\s*\\(",
                end: "->",
                returnBegin: !0,
                illegal: "\\(|#|//|/\\*|\\\\|:|;",
                contains: [h, e.inherit(e.TITLE_MODE, {
                    begin: t
                })],
                starts: {
                    end: ";|\\.",
                    keywords: r,
                    contains: p
                }
            }, i, {
                begin: "^-",
                end: "\\.",
                relevance: 0,
                excludeEnd: !0,
                returnBegin: !0,
                keywords: {
                    $pattern: "-" + e.IDENT_RE,
                    keyword: ["-module", "-record", "-undef", "-export", "-ifdef", "-ifndef", "-author", "-copyright", "-doc", "-vsn", "-import", "-include", "-include_lib", "-compile", "-define", "-else", "-endif", "-file", "-behaviour", "-behavior", "-spec"].map(e => `${e}|1.5`).join(" ")
                },
                contains: [h]
            }, a, e.QUOTE_STRING_MODE, d, c, l, u, {
                begin: /\.$/
            }]
        }
    }
}