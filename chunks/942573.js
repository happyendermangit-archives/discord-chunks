function(e) {
    e.exports = function(e) {
        let t = e.regex,
            n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u),
            r = {
                className: "symbol",
                begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
            },
            i = {
                begin: /\s/,
                contains: [{
                    className: "keyword",
                    begin: /#?[a-z_][a-z1-9_-]+/,
                    illegal: /\n/
                }]
            },
            a = e.inherit(i, {
                begin: /\(/,
                end: /\)/
            }),
            o = e.inherit(e.APOS_STRING_MODE, {
                className: "string"
            }),
            s = e.inherit(e.QUOTE_STRING_MODE, {
                className: "string"
            }),
            u = {
                endsWithParent: !0,
                illegal: /</,
                relevance: 0,
                contains: [{
                    className: "attr",
                    begin: /[\p{L}0-9._:-]+/u,
                    relevance: 0
                }, {
                    begin: /=\s*/,
                    relevance: 0,
                    contains: [{
                        className: "string",
                        endsParent: !0,
                        variants: [{
                            begin: /"/,
                            end: /"/,
                            contains: [r]
                        }, {
                            begin: /'/,
                            end: /'/,
                            contains: [r]
                        }, {
                            begin: /[^\s"'=<>`]+/
                        }]
                    }]
                }]
            };
        return {
            name: "HTML, XML",
            aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
            case_insensitive: !0,
            unicodeRegex: !0,
            contains: [{
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                relevance: 10,
                contains: [i, s, o, a, {
                    begin: /\[/,
                    end: /\]/,
                    contains: [{
                        className: "meta",
                        begin: /<![a-z]/,
                        end: />/,
                        contains: [i, a, s, o]
                    }]
                }]
            }, e.COMMENT(/<!--/, /-->/, {
                relevance: 10
            }), {
                begin: /<!\[CDATA\[/,
                end: /\]\]>/,
                relevance: 10
            }, r, {
                className: "meta",
                end: /\?>/,
                variants: [{
                    begin: /<\?xml/,
                    relevance: 10,
                    contains: [s]
                }, {
                    begin: /<\?[a-z][a-z0-9]+/
                }]
            }, {
                className: "tag",
                begin: /<style(?=\s|>)/,
                end: />/,
                keywords: {
                    name: "style"
                },
                contains: [u],
                starts: {
                    end: /<\/style>/,
                    returnEnd: !0,
                    subLanguage: ["css", "xml"]
                }
            }, {
                className: "tag",
                begin: /<script(?=\s|>)/,
                end: />/,
                keywords: {
                    name: "script"
                },
                contains: [u],
                starts: {
                    end: /<\/script>/,
                    returnEnd: !0,
                    subLanguage: ["javascript", "handlebars", "xml"]
                }
            }, {
                className: "tag",
                begin: /<>|<\/>/
            }, {
                className: "tag",
                begin: t.concat(/</, t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/)))),
                end: /\/?>/,
                contains: [{
                    className: "name",
                    begin: n,
                    relevance: 0,
                    starts: u
                }]
            }, {
                className: "tag",
                begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
                contains: [{
                    className: "name",
                    begin: n,
                    relevance: 0
                }, {
                    begin: />/,
                    relevance: 0,
                    endsParent: !0
                }]
            }]
        }
    }
}