function(e) {
    e.exports = function(e) {
        let t = e.regex,
            n = /[a-zA-Z]\w*/,
            r = ["as", "break", "class", "construct", "continue", "else", "for", "foreign", "if", "import", "in", "is", "return", "static", "var", "while"],
            i = ["true", "false", "null"],
            a = ["this", "super"],
            o = ["-", "~", /\*/, "%", /\.\.\./, /\.\./, /\+/, "<<", ">>", ">=", "<=", "<", ">", /\^/, /!=/, /!/, /\bis\b/, "==", "&&", "&", /\|\|/, /\|/, /\?:/, "="],
            s = {
                relevance: 0,
                match: t.concat(/\b(?!(if|while|for|else|super)\b)/, n, /(?=\s*[({])/),
                className: "title.function"
            },
            u = {
                match: t.concat(t.either(t.concat(/\b(?!(if|while|for|else|super)\b)/, n), t.either(...o)), /(?=\s*\([^)]+\)\s*\{)/),
                className: "title.function",
                starts: {
                    contains: [{
                        begin: /\(/,
                        end: /\)/,
                        contains: [{
                            relevance: 0,
                            scope: "params",
                            match: n
                        }]
                    }]
                }
            },
            c = {
                relevance: 0,
                match: t.either(...o),
                className: "operator"
            },
            l = {
                className: "property",
                begin: t.concat(/\./, t.lookahead(n)),
                end: n,
                excludeBegin: !0,
                relevance: 0
            },
            d = {
                relevance: 0,
                match: t.concat(/\b_/, n),
                scope: "variable"
            },
            f = {
                relevance: 0,
                match: /\b[A-Z]+[a-z]+([A-Z]+[a-z]+)*/,
                scope: "title.class",
                keywords: {
                    _: ["Bool", "Class", "Fiber", "Fn", "List", "Map", "Null", "Num", "Object", "Range", "Sequence", "String", "System"]
                }
            },
            p = e.C_NUMBER_MODE,
            h = e.COMMENT(/\/\*\*/, /\*\//, {
                contains: [{
                    match: /@[a-z]+/,
                    scope: "doctag"
                }, "self"]
            }),
            m = {
                scope: "subst",
                begin: /%\(/,
                end: /\)/,
                contains: [p, f, s, d, c]
            },
            g = {
                scope: "string",
                begin: /"/,
                end: /"/,
                contains: [m, {
                    scope: "char.escape",
                    variants: [{
                        match: /\\\\|\\["0%abefnrtv]/
                    }, {
                        match: /\\x[0-9A-F]{2}/
                    }, {
                        match: /\\u[0-9A-F]{4}/
                    }, {
                        match: /\\U[0-9A-F]{8}/
                    }]
                }]
            };
        m.contains.push(g);
        let _ = [...r, ...a, ...i],
            b = {
                relevance: 0,
                match: t.concat("\\b(?!", _.join("|"), "\\b)", /[a-zA-Z_]\w*(?:[?!]|\b)/),
                className: "variable"
            };
        return {
            name: "Wren",
            keywords: {
                keyword: r,
                "variable.language": a,
                literal: i
            },
            contains: [{
                scope: "comment",
                variants: [{
                    begin: [/#!?/, /[A-Za-z_]+(?=\()/],
                    beginScope: {},
                    keywords: {
                        literal: i
                    },
                    contains: [],
                    end: /\)/
                }, {
                    begin: [/#!?/, /[A-Za-z_]+/],
                    beginScope: {},
                    end: /$/
                }]
            }, p, g, {
                className: "string",
                begin: /"""/,
                end: /"""/
            }, h, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, f, {
                variants: [{
                    match: [/class\s+/, n, /\s+is\s+/, n]
                }, {
                    match: [/class\s+/, n]
                }],
                scope: {
                    2: "title.class",
                    4: "title.class.inherited"
                },
                keywords: r
            }, {
                match: [n, /\s*/, /=/, /\s*/, /\(/, n, /\)\s*\{/],
                scope: {
                    1: "title.function",
                    3: "operator",
                    6: "params"
                }
            }, u, s, c, d, l, b]
        }
    }
}