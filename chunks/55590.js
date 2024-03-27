function(e) {
    e.exports = function(e) {
        let t = {
                begin: /\(/,
                end: /\)/,
                relevance: 0
            },
            n = {
                begin: /\[/,
                end: /\]/
            },
            r = {
                className: "comment",
                begin: /%/,
                end: /$/,
                contains: [e.PHRASAL_WORDS_MODE]
            },
            i = {
                className: "string",
                begin: /`/,
                end: /`/,
                contains: [e.BACKSLASH_ESCAPE]
            },
            a = [{
                begin: /[a-z][A-Za-z0-9_]*/,
                relevance: 0
            }, {
                className: "symbol",
                variants: [{
                    begin: /[A-Z][a-zA-Z0-9_]*/
                }, {
                    begin: /_[A-Za-z0-9_]*/
                }],
                relevance: 0
            }, t, {
                begin: /:-/
            }, n, r, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, i, {
                className: "string",
                begin: /0'(\\'|.)/
            }, {
                className: "string",
                begin: /0'\\s/
            }, e.C_NUMBER_MODE];
        return t.contains = a, n.contains = a, {
            name: "Prolog",
            contains: a.concat([{
                begin: /\.$/
            }])
        }
    }
}