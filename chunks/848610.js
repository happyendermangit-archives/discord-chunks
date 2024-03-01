function(e, t, a) {
    e.exports = function(e) {
        let t = e.regex,
            a = {
                className: "number",
                relevance: 0,
                variants: [{
                    begin: /([+-]+)?[\d]+_[\d_]+/
                }, {
                    begin: e.NUMBER_RE
                }]
            },
            n = e.COMMENT();
        n.variants = [{
            begin: /;/,
            end: /$/
        }, {
            begin: /#/,
            end: /$/
        }];
        let i = {
                className: "variable",
                variants: [{
                    begin: /\$[\w\d"][\w\d_]*/
                }, {
                    begin: /\$\{(.*?)\}/
                }]
            },
            r = {
                className: "literal",
                begin: /\bon|off|true|false|yes|no\b/
            },
            o = {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE],
                variants: [{
                    begin: "'''",
                    end: "'''",
                    relevance: 10
                }, {
                    begin: '"""',
                    end: '"""',
                    relevance: 10
                }, {
                    begin: '"',
                    end: '"'
                }, {
                    begin: "'",
                    end: "'"
                }]
            },
            s = t.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/),
            l = t.concat(s, "(\\s*\\.\\s*", s, ")*", t.lookahead(/\s*=\s*[^#\s]/));
        return {
            name: "TOML, also INI",
            aliases: ["toml"],
            case_insensitive: !0,
            illegal: /\S/,
            contains: [n, {
                className: "section",
                begin: /\[+/,
                end: /\]+/
            }, {
                begin: l,
                className: "attr",
                starts: {
                    end: /$/,
                    contains: [n, {
                        begin: /\[/,
                        end: /\]/,
                        contains: [n, r, i, o, a, "self"],
                        relevance: 0
                    }, r, i, o, a]
                }
            }]
        }
    }
}