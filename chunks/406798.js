function(e, t, a) {
    a("222007");
    e.exports = function(e) {
        let t = e.regex,
            a = t.either(...["(?:NeedsTeXFormat|RequirePackage|GetIdInfo)", "Provides(?:Expl)?(?:Package|Class|File)", "(?:DeclareOption|ProcessOptions)", "(?:documentclass|usepackage|input|include)", "makeat(?:letter|other)", "ExplSyntax(?:On|Off)", "(?:new|renew|provide)?command", "(?:re)newenvironment", "(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand", "(?:New|Renew|Provide|Declare)DocumentEnvironment", "(?:(?:e|g|x)?def|let)", "(?:begin|end)", "(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)", "caption", "(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)", "(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)", "(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)", "(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)", "(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)", "(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)"].map(e => e + "(?![a-zA-Z@:_])")),
            n = new RegExp(["(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*", "[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}", "[qs]__?[a-zA-Z](?:_?[a-zA-Z])+", "use(?:_i)?:[a-zA-Z]*", "(?:else|fi|or):", "(?:if|cs|exp):w", "(?:hbox|vbox):n", "::[a-zA-Z]_unbraced", "::[a-zA-Z:]"].map(e => e + "(?![a-zA-Z:_])").join("|")),
            i = [{
                begin: /\^{6}[0-9a-f]{6}/
            }, {
                begin: /\^{5}[0-9a-f]{5}/
            }, {
                begin: /\^{4}[0-9a-f]{4}/
            }, {
                begin: /\^{3}[0-9a-f]{3}/
            }, {
                begin: /\^{2}[0-9a-f]{2}/
            }, {
                begin: /\^{2}[\u0000-\u007f]/
            }],
            r = e.COMMENT("%", "$", {
                relevance: 0
            }),
            o = [{
                className: "keyword",
                begin: /\\/,
                relevance: 0,
                contains: [{
                    endsParent: !0,
                    begin: a
                }, {
                    endsParent: !0,
                    begin: n
                }, {
                    endsParent: !0,
                    variants: i
                }, {
                    endsParent: !0,
                    relevance: 0,
                    variants: [{
                        begin: /[a-zA-Z@]+/
                    }, {
                        begin: /[^a-zA-Z@]?/
                    }]
                }]
            }, {
                className: "params",
                relevance: 0,
                begin: /#+\d?/
            }, {
                variants: i
            }, {
                className: "built_in",
                relevance: 0,
                begin: /[$&^_]/
            }, {
                className: "meta",
                begin: /% ?!(T[eE]X|tex|BIB|bib)/,
                end: "$",
                relevance: 10
            }, r],
            s = {
                begin: /\{/,
                end: /\}/,
                relevance: 0,
                contains: ["self", ...o]
            },
            l = e.inherit(s, {
                relevance: 0,
                endsParent: !0,
                contains: [s, ...o]
            }),
            c = {
                begin: /\[/,
                end: /\]/,
                endsParent: !0,
                relevance: 0,
                contains: [s, ...o]
            },
            _ = {
                begin: /\s+/,
                relevance: 0
            },
            d = [l],
            m = [c],
            p = function(e, t) {
                return {
                    contains: [_],
                    starts: {
                        relevance: 0,
                        contains: e,
                        starts: t
                    }
                }
            },
            u = function(e, t) {
                return {
                    begin: "\\\\" + e + "(?![a-zA-Z@:_])",
                    keywords: {
                        $pattern: /\\[a-zA-Z]+/,
                        keyword: "\\" + e
                    },
                    relevance: 0,
                    contains: [_],
                    starts: t
                }
            },
            E = function(t, a) {
                return e.inherit({
                    begin: "\\\\begin(?=[ 	]*(\\r?\\n[ 	]*)?\\{" + t + "\\})",
                    keywords: {
                        $pattern: /\\[a-zA-Z]+/,
                        keyword: "\\begin"
                    },
                    relevance: 0
                }, p(d, a))
            },
            g = function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "string";
                return e.END_SAME_AS_BEGIN({
                    className: t,
                    begin: /(.|\r?\n)/,
                    end: /(.|\r?\n)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    endsParent: !0
                })
            },
            S = function(e) {
                return {
                    className: "string",
                    end: "(?=\\\\end\\{" + e + "\\})"
                }
            },
            b = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "string";
                return {
                    relevance: 0,
                    begin: /\{/,
                    starts: {
                        endsParent: !0,
                        contains: [{
                            className: e,
                            end: /(?=\})/,
                            endsParent: !0,
                            contains: [{
                                begin: /\{/,
                                end: /\}/,
                                relevance: 0,
                                contains: ["self"]
                            }]
                        }]
                    }
                }
            },
            T = [...["verb", "lstinline"].map(e => u(e, {
                contains: [g()]
            })), u("mint", p(d, {
                contains: [g()]
            })), u("mintinline", p(d, {
                contains: [b(), g()]
            })), u("url", {
                contains: [b("link"), b("link")]
            }), u("hyperref", {
                contains: [b("link")]
            }), u("href", p(m, {
                contains: [b("link")]
            })), ...[].concat(...["", "\\*"].map(e => [E("verbatim" + e, S("verbatim" + e)), E("filecontents" + e, p(d, S("filecontents" + e))), ...["", "B", "L"].map(t => E(t + "Verbatim" + e, p(m, S(t + "Verbatim" + e))))])), E("minted", p(m, p(d, S("minted"))))];
        return {
            name: "LaTeX",
            aliases: ["tex"],
            contains: [...T, ...o]
        }
    }
}