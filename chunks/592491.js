function(e) {
    e.exports = function(e) {
        let t = "~?[a-z$_][0-9a-zA-Z$_]*",
            n = "`?[A-Z$_][0-9a-zA-Z$_]*",
            r = "'?[a-z$_][0-9a-z$_]*",
            i = "(" + ["||", "++", "**", "+.", "*", "/", "*.", "/.", "..."].map(function(e) {
                return e.split("").map(function(e) {
                    return "\\" + e
                }).join("")
            }).join("|") + "|\\|>|&&|==|===)",
            a = {
                keyword: "and as asr assert begin class constraint do done downto else end exception external for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new nonrec object of open or private rec sig struct then to try type val virtual when while with",
                built_in: "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",
                literal: "true false"
            },
            o = "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
            s = {
                className: "number",
                relevance: 0,
                variants: [{
                    begin: o
                }, {
                    begin: "\\(-" + o + "\\)"
                }]
            },
            u = {
                className: "operator",
                relevance: 0,
                begin: i
            },
            c = [{
                className: "identifier",
                relevance: 0,
                begin: t
            }, u, s],
            l = [e.QUOTE_STRING_MODE, u, {
                className: "module",
                begin: "\\b" + n,
                returnBegin: !0,
                relevance: 0,
                end: ".",
                contains: [{
                    className: "identifier",
                    begin: n,
                    relevance: 0
                }]
            }],
            d = [{
                className: "module",
                begin: "\\b" + n,
                returnBegin: !0,
                end: ".",
                relevance: 0,
                contains: [{
                    className: "identifier",
                    begin: n,
                    relevance: 0
                }]
            }],
            f = {
                className: "function",
                relevance: 0,
                keywords: a,
                variants: [{
                    begin: "\\s(\\(\\.?.*?\\)|" + t + ")\\s*=>",
                    end: "\\s*=>",
                    returnBegin: !0,
                    relevance: 0,
                    contains: [{
                        className: "params",
                        variants: [{
                            begin: t
                        }, {
                            begin: t + "(" + ("\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*(" + r + "\\s*(," + r) + "\\s*)*)?\\))?){0,2}"
                        }, {
                            begin: /\(\s*\)/
                        }]
                    }]
                }, {
                    begin: "\\s\\(\\.?[^;\\|]*\\)\\s*=>",
                    end: "\\s=>",
                    returnBegin: !0,
                    relevance: 0,
                    contains: [{
                        className: "params",
                        relevance: 0,
                        variants: [{
                            begin: t,
                            end: "(,|\\n|\\))",
                            relevance: 0,
                            contains: [u, {
                                className: "typing",
                                begin: ":",
                                end: "(,|\\n)",
                                returnBegin: !0,
                                relevance: 0,
                                contains: d
                            }]
                        }]
                    }]
                }, {
                    begin: "\\(\\.\\s" + t + "\\)\\s*=>"
                }]
            };
        l.push(f);
        let p = {
                className: "constructor",
                begin: n + "\\(",
                end: "\\)",
                illegal: "\\n",
                keywords: a,
                contains: [e.QUOTE_STRING_MODE, u, {
                    className: "params",
                    begin: "\\b" + t
                }]
            },
            h = {
                className: "module-access",
                keywords: a,
                returnBegin: !0,
                variants: [{
                    begin: "\\b(" + n + "\\.)+" + t
                }, {
                    begin: "\\b(" + n + "\\.)+\\(",
                    end: "\\)",
                    returnBegin: !0,
                    contains: [f, {
                        begin: "\\(",
                        end: "\\)",
                        relevance: 0,
                        skip: !0
                    }].concat(l)
                }, {
                    begin: "\\b(" + n + "\\.)+\\{",
                    end: /\}/
                }],
                contains: l
            };
        return d.push(h), {
            name: "ReasonML",
            aliases: ["re"],
            keywords: a,
            illegal: "(:-|:=|\\$\\{|\\+=)",
            contains: [e.COMMENT("/\\*", "\\*/", {
                illegal: "^(#,\\/\\/)"
            }), {
                className: "character",
                begin: "'(\\\\[^']+|[^'])'",
                illegal: "\\n",
                relevance: 0
            }, e.QUOTE_STRING_MODE, {
                className: "literal",
                begin: "\\(\\)",
                relevance: 0
            }, {
                className: "literal",
                begin: "\\[\\|",
                end: "\\|\\]",
                relevance: 0,
                contains: c
            }, {
                className: "literal",
                begin: "\\[",
                end: "\\]",
                relevance: 0,
                contains: c
            }, p, {
                className: "operator",
                begin: "\\s+" + i + "\\s+",
                illegal: "-->",
                relevance: 0
            }, s, e.C_LINE_COMMENT_MODE, {
                className: "pattern-match",
                begin: "\\|",
                returnBegin: !0,
                keywords: a,
                end: "=>",
                relevance: 0,
                contains: [p, u, {
                    relevance: 0,
                    className: "constructor",
                    begin: n
                }]
            }, f, {
                className: "module-def",
                begin: "\\bmodule\\s+" + t + "\\s+" + n + "\\s+=\\s+\\{",
                end: /\}/,
                returnBegin: !0,
                keywords: a,
                relevance: 0,
                contains: [{
                    className: "module",
                    relevance: 0,
                    begin: n
                }, {
                    begin: /\{/,
                    end: /\}/,
                    relevance: 0,
                    skip: !0
                }].concat(l)
            }, h]
        }
    }
}