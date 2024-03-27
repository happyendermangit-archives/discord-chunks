function(e) {
    e.exports = function(e) {
        let t = "[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",
            n = "\\|[^]*?\\|",
            r = "(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",
            i = {
                className: "literal",
                begin: "\\b(t{1}|nil)\\b"
            },
            a = {
                className: "number",
                variants: [{
                    begin: r,
                    relevance: 0
                }, {
                    begin: "#(b|B)[0-1]+(/[0-1]+)?"
                }, {
                    begin: "#(o|O)[0-7]+(/[0-7]+)?"
                }, {
                    begin: "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"
                }, {
                    begin: "#(c|C)\\(" + r + " +" + r,
                    end: "\\)"
                }]
            },
            o = e.inherit(e.QUOTE_STRING_MODE, {
                illegal: null
            }),
            s = e.COMMENT(";", "$", {
                relevance: 0
            }),
            u = {
                begin: "\\*",
                end: "\\*"
            },
            c = {
                className: "symbol",
                begin: "[:&]" + t
            },
            l = {
                begin: t,
                relevance: 0
            },
            d = {
                contains: [a, o, u, c, {
                    begin: "\\(",
                    end: "\\)",
                    contains: ["self", i, o, a, l]
                }, l],
                variants: [{
                    begin: "['`]\\(",
                    end: "\\)"
                }, {
                    begin: "\\(quote ",
                    end: "\\)",
                    keywords: {
                        name: "quote"
                    }
                }, {
                    begin: "'" + n
                }]
            },
            f = {
                variants: [{
                    begin: "'" + t
                }, {
                    begin: "#'" + t + "(::" + t + ")*"
                }]
            },
            p = {
                begin: "\\(\\s*",
                end: "\\)"
            },
            h = {
                endsWithParent: !0,
                relevance: 0
            };
        return p.contains = [{
            className: "name",
            variants: [{
                begin: t,
                relevance: 0
            }, {
                begin: n
            }]
        }, h], h.contains = [d, f, p, i, a, o, s, u, c, {
            begin: n
        }, l], {
            name: "Lisp",
            illegal: /\S/,
            contains: [a, e.SHEBANG(), i, o, s, d, f, p, l]
        }
    }
}