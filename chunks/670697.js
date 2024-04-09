function(e) {
    e.exports = function(e) {
        let t = e.regex,
            n = {
                begin: /<\/?[A-Za-z_]/,
                end: ">",
                subLanguage: "xml",
                relevance: 0
            },
            r = {
                variants: [{
                    begin: /\[.+?\]\[.*?\]/,
                    relevance: 0
                }, {
                    begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                    relevance: 2
                }, {
                    begin: t.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
                    relevance: 2
                }, {
                    begin: /\[.+?\]\([./?&#].*?\)/,
                    relevance: 1
                }, {
                    begin: /\[.*?\]\(.*?\)/,
                    relevance: 0
                }],
                returnBegin: !0,
                contains: [{
                    match: /\[(?=\])/
                }, {
                    className: "string",
                    relevance: 0,
                    begin: "\\[",
                    end: "\\]",
                    excludeBegin: !0,
                    returnEnd: !0
                }, {
                    className: "link",
                    relevance: 0,
                    begin: "\\]\\(",
                    end: "\\)",
                    excludeBegin: !0,
                    excludeEnd: !0
                }, {
                    className: "symbol",
                    relevance: 0,
                    begin: "\\]\\[",
                    end: "\\]",
                    excludeBegin: !0,
                    excludeEnd: !0
                }]
            },
            i = {
                className: "strong",
                contains: [],
                variants: [{
                    begin: /_{2}(?!\s)/,
                    end: /_{2}/
                }, {
                    begin: /\*{2}(?!\s)/,
                    end: /\*{2}/
                }]
            },
            a = {
                className: "emphasis",
                contains: [],
                variants: [{
                    begin: /\*(?![*\s])/,
                    end: /\*/
                }, {
                    begin: /_(?![_\s])/,
                    end: /_/,
                    relevance: 0
                }]
            },
            o = e.inherit(i, {
                contains: []
            }),
            s = e.inherit(a, {
                contains: []
            });
        i.contains.push(s), a.contains.push(o);
        let u = [n, r];
        [i, a, o, s].forEach(e => {
            e.contains = e.contains.concat(u)
        });
        let c = {
            className: "section",
            variants: [{
                begin: "^#{1,6}",
                end: "$",
                contains: u = u.concat(i, a)
            }, {
                begin: "(?=^.+?\\n[=-]{2,}$)",
                contains: [{
                    begin: "^[=-]*$"
                }, {
                    begin: "^",
                    end: "\\n",
                    contains: u
                }]
            }]
        };
        return {
            name: "Markdown",
            aliases: ["md", "mkdown", "mkd"],
            contains: [c, n, {
                className: "bullet",
                begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
                end: "\\s+",
                excludeEnd: !0
            }, i, a, {
                className: "quote",
                begin: "^>\\s+",
                contains: u,
                end: "$"
            }, {
                className: "code",
                variants: [{
                    begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
                }, {
                    begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
                }, {
                    begin: "```",
                    end: "```+[ ]*$"
                }, {
                    begin: "~~~",
                    end: "~~~+[ ]*$"
                }, {
                    begin: "`.+?`"
                }, {
                    begin: "(?=^( {4}|\\t))",
                    contains: [{
                        begin: "^( {4}|\\t)",
                        end: "(\\n)$"
                    }],
                    relevance: 0
                }]
            }, {
                begin: "^[-\\*]{3,}",
                end: "$"
            }, r, {
                begin: /^\[[^\n]+\]:/,
                returnBegin: !0,
                contains: [{
                    className: "symbol",
                    begin: /\[/,
                    end: /\]/,
                    excludeBegin: !0,
                    excludeEnd: !0
                }, {
                    className: "link",
                    begin: /:\s*/,
                    end: /$/,
                    excludeBegin: !0
                }]
            }]
        }
    }
}