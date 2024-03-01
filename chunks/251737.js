function(e, t, a) {
    e.exports = function(e) {
        let t = {
                keyword: ["rec", "with", "let", "in", "inherit", "assert", "if", "else", "then"],
                literal: ["true", "false", "or", "and", "null"],
                built_in: ["import", "abort", "baseNameOf", "dirOf", "isNull", "builtins", "map", "removeAttrs", "throw", "toString", "derivation"]
            },
            a = {
                className: "subst",
                begin: /\$\{/,
                end: /\}/,
                keywords: t
            },
            n = [e.NUMBER_MODE, e.HASH_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "string",
                contains: [{
                    className: "char.escape",
                    begin: /''\$/
                }, a],
                variants: [{
                    begin: "''",
                    end: "''"
                }, {
                    begin: '"',
                    end: '"'
                }]
            }, {
                begin: /[a-zA-Z0-9-_]+(\s*=)/,
                returnBegin: !0,
                relevance: 0,
                contains: [{
                    className: "attr",
                    begin: /\S+/,
                    relevance: .2
                }]
            }];
        return a.contains = n, {
            name: "Nix",
            aliases: ["nixos"],
            keywords: t,
            contains: n
        }
    }
}