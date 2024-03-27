function(e) {
    e.exports = function(e) {
        let t = e.regex,
            n = "HTTP/(2|1\\.[01])",
            r = {
                className: "attribute",
                begin: t.concat("^", /[A-Za-z][A-Za-z0-9-]*/, "(?=\\:\\s)"),
                starts: {
                    contains: [{
                        className: "punctuation",
                        begin: /: /,
                        relevance: 0,
                        starts: {
                            end: "$",
                            relevance: 0
                        }
                    }]
                }
            },
            i = [r, {
                begin: "\\n\\n",
                starts: {
                    subLanguage: [],
                    endsWithParent: !0
                }
            }];
        return {
            name: "HTTP",
            aliases: ["https"],
            illegal: /\S/,
            contains: [{
                begin: "^(?=" + n + " \\d{3})",
                end: /$/,
                contains: [{
                    className: "meta",
                    begin: n
                }, {
                    className: "number",
                    begin: "\\b\\d{3}\\b"
                }],
                starts: {
                    end: /\b\B/,
                    illegal: /\S/,
                    contains: i
                }
            }, {
                begin: "(?=^[A-Z]+ (.*?) " + n + "$)",
                end: /$/,
                contains: [{
                    className: "string",
                    begin: " ",
                    end: " ",
                    excludeBegin: !0,
                    excludeEnd: !0
                }, {
                    className: "meta",
                    begin: n
                }, {
                    className: "keyword",
                    begin: "[A-Z]+"
                }],
                starts: {
                    end: /\b\B/,
                    illegal: /\S/,
                    contains: i
                }
            }, e.inherit(r, {
                relevance: 0
            })]
        }
    }
}