function(e) {
    e.exports = function(e) {
        let t = {
                variants: [e.COMMENT("--", "$"), e.COMMENT(/\{-/, /-\}/, {
                    contains: ["self"]
                })]
            },
            n = {
                className: "meta",
                begin: /\{-#/,
                end: /#-\}/
            },
            r = {
                className: "meta",
                begin: "^#",
                end: "$"
            },
            i = {
                className: "type",
                begin: "\\b[A-Z][\\w']*",
                relevance: 0
            },
            a = {
                begin: "\\(",
                end: "\\)",
                illegal: '"',
                contains: [n, r, {
                    className: "type",
                    begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
                }, e.inherit(e.TITLE_MODE, {
                    begin: "[_a-z][\\w']*"
                }), t]
            },
            o = {
                begin: /\{/,
                end: /\}/,
                contains: a.contains
            },
            s = "([0-9]_*)+",
            u = "([0-9a-fA-F]_*)+",
            c = {
                className: "number",
                relevance: 0,
                variants: [{
                    match: `\\b(${s})(\\.(${s}))?([eE][+-]?(${s}))?\\b`
                }, {
                    match: `\\b0[xX]_*(${u})(\\.(${u}))?([pP][+-]?(${s}))?\\b`
                }, {
                    match: "\\b0[oO](([0-7]_*)+)\\b"
                }, {
                    match: "\\b0[bB](([01]_*)+)\\b"
                }]
            };
        return {
            name: "Haskell",
            aliases: ["hs"],
            keywords: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
            contains: [{
                beginKeywords: "module",
                end: "where",
                keywords: "module where",
                contains: [a, t],
                illegal: "\\W\\.|;"
            }, {
                begin: "\\bimport\\b",
                end: "$",
                keywords: "import qualified as hiding",
                contains: [a, t],
                illegal: "\\W\\.|;"
            }, {
                className: "class",
                begin: "^(\\s*)?(class|instance)\\b",
                end: "where",
                keywords: "class family instance where",
                contains: [i, a, t]
            }, {
                className: "class",
                begin: "\\b(data|(new)?type)\\b",
                end: "$",
                keywords: "data family type newtype deriving",
                contains: [n, i, a, o, t]
            }, {
                beginKeywords: "default",
                end: "$",
                contains: [i, a, t]
            }, {
                beginKeywords: "infix infixl infixr",
                end: "$",
                contains: [e.C_NUMBER_MODE, t]
            }, {
                begin: "\\bforeign\\b",
                end: "$",
                keywords: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
                contains: [i, e.QUOTE_STRING_MODE, t]
            }, {
                className: "meta",
                begin: "#!\\/usr\\/bin\\/env runhaskell",
                end: "$"
            }, n, r, e.QUOTE_STRING_MODE, c, i, e.inherit(e.TITLE_MODE, {
                begin: "^[_a-z][\\w']*"
            }), t, {
                begin: "->|<-"
            }]
        }
    }
}