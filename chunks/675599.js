function(e) {
    e.exports = function(e) {
        let t = {
                keyword: ["rec", "with", "let", "in", "inherit", "assert", "if", "else", "then"],
                literal: ["true", "false", "or", "and", "null"],
                built_in: ["import", "abort", "baseNameOf", "dirOf", "isNull", "builtins", "map", "removeAttrs", "throw", "toString", "derivation"]
            },
            n = {
                className: "subst",
                begin: /\$\{/,
                end: /\}/,
                keywords: t
            },
            r = [e.NUMBER_MODE, e.HASH_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "string",
                contains: [{
                    className: "char.escape",
                    begin: /''\$/
                }, n],
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
        return n.contains = r, {
            name: "Nix",
            aliases: ["nixos"],
            keywords: t,
            contains: r
        }
    }
}