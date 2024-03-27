function(e) {
    e.exports = function(e) {
        let t = e.regex,
            n = {
                $pattern: /[\w.\/]+/,
                built_in: ["action", "bindattr", "collection", "component", "concat", "debugger", "each", "each-in", "get", "hash", "if", "in", "input", "link-to", "loc", "log", "lookup", "mut", "outlet", "partial", "query-params", "render", "template", "textarea", "unbound", "unless", "view", "with", "yield"]
            },
            r = /\[\]|\[[^\]]+\]/,
            i = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,
            a = t.either(/""|"[^"]+"/, /''|'[^']+'/, r, i),
            o = t.concat(t.optional(/\.|\.\/|\//), a, t.anyNumberOfTimes(t.concat(/(\.|\/)/, a))),
            s = t.concat("(", r, "|", i, ")(?==)"),
            u = {
                begin: o
            },
            c = e.inherit(u, {
                keywords: {
                    $pattern: /[\w.\/]+/,
                    literal: ["true", "false", "undefined", "null"]
                }
            }),
            l = {
                begin: /\(/,
                end: /\)/
            },
            d = {
                className: "attr",
                begin: s,
                relevance: 0,
                starts: {
                    begin: /=/,
                    end: /=/,
                    starts: {
                        contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, c, l]
                    }
                }
            },
            f = {
                contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                    begin: /as\s+\|/,
                    keywords: {
                        keyword: "as"
                    },
                    end: /\|/,
                    contains: [{
                        begin: /\w+/
                    }]
                }, d, c, l],
                returnEnd: !0
            },
            p = e.inherit(u, {
                className: "name",
                keywords: n,
                starts: e.inherit(f, {
                    end: /\)/
                })
            });
        l.contains = [p];
        let h = e.inherit(u, {
                keywords: n,
                className: "name",
                starts: e.inherit(f, {
                    end: /\}\}/
                })
            }),
            m = e.inherit(u, {
                keywords: n,
                className: "name"
            }),
            g = e.inherit(u, {
                className: "name",
                keywords: n,
                starts: e.inherit(f, {
                    end: /\}\}/
                })
            });
        return {
            name: "Handlebars",
            aliases: ["hbs", "html.hbs", "html.handlebars", "htmlbars"],
            case_insensitive: !0,
            subLanguage: "xml",
            contains: [{
                begin: /\\\{\{/,
                skip: !0
            }, {
                begin: /\\\\(?=\{\{)/,
                skip: !0
            }, e.COMMENT(/\{\{!--/, /--\}\}/), e.COMMENT(/\{\{!/, /\}\}/), {
                className: "template-tag",
                begin: /\{\{\{\{(?!\/)/,
                end: /\}\}\}\}/,
                contains: [h],
                starts: {
                    end: /\{\{\{\{\//,
                    returnEnd: !0,
                    subLanguage: "xml"
                }
            }, {
                className: "template-tag",
                begin: /\{\{\{\{\//,
                end: /\}\}\}\}/,
                contains: [m]
            }, {
                className: "template-tag",
                begin: /\{\{#/,
                end: /\}\}/,
                contains: [h]
            }, {
                className: "template-tag",
                begin: /\{\{(?=else\}\})/,
                end: /\}\}/,
                keywords: "else"
            }, {
                className: "template-tag",
                begin: /\{\{(?=else if)/,
                end: /\}\}/,
                keywords: "else if"
            }, {
                className: "template-tag",
                begin: /\{\{\//,
                end: /\}\}/,
                contains: [m]
            }, {
                className: "template-variable",
                begin: /\{\{\{/,
                end: /\}\}\}/,
                contains: [g]
            }, {
                className: "template-variable",
                begin: /\{\{/,
                end: /\}\}/,
                contains: [g]
            }]
        }
    }
}