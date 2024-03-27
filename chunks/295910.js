function(e) {
    let t = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
        n = ["true", "false", "null", "undefined", "NaN", "Infinity"],
        r = [].concat(["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"], ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);
    e.exports = function(e) {
        let i;
        let a = {
                keyword: t.concat(["then", "unless", "until", "loop", "by", "when", "and", "or", "is", "isnt", "not"]).filter((i = ["var", "const", "let", "function", "static"], e => !i.includes(e))),
                literal: n.concat(["yes", "no", "on", "off"]),
                built_in: r.concat(["npm", "print"])
            },
            o = "[A-Za-z$_][0-9A-Za-z$_]*",
            s = {
                className: "subst",
                begin: /#\{/,
                end: /\}/,
                keywords: a
            },
            u = [e.BINARY_NUMBER_MODE, e.inherit(e.C_NUMBER_MODE, {
                starts: {
                    end: "(\\s*/)?",
                    relevance: 0
                }
            }), {
                className: "string",
                variants: [{
                    begin: /'''/,
                    end: /'''/,
                    contains: [e.BACKSLASH_ESCAPE]
                }, {
                    begin: /'/,
                    end: /'/,
                    contains: [e.BACKSLASH_ESCAPE]
                }, {
                    begin: /"""/,
                    end: /"""/,
                    contains: [e.BACKSLASH_ESCAPE, s]
                }, {
                    begin: /"/,
                    end: /"/,
                    contains: [e.BACKSLASH_ESCAPE, s]
                }]
            }, {
                className: "regexp",
                variants: [{
                    begin: "///",
                    end: "///",
                    contains: [s, e.HASH_COMMENT_MODE]
                }, {
                    begin: "//[gim]{0,3}(?=\\W)",
                    relevance: 0
                }, {
                    begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/
                }]
            }, {
                begin: "@" + o
            }, {
                subLanguage: "javascript",
                excludeBegin: !0,
                excludeEnd: !0,
                variants: [{
                    begin: "```",
                    end: "```"
                }, {
                    begin: "`",
                    end: "`"
                }]
            }];
        s.contains = u;
        let c = e.inherit(e.TITLE_MODE, {
                begin: o
            }),
            l = "(\\(.*\\)\\s*)?\\B[-=]>",
            d = {
                className: "params",
                begin: "\\([^\\(]",
                returnBegin: !0,
                contains: [{
                    begin: /\(/,
                    end: /\)/,
                    keywords: a,
                    contains: ["self"].concat(u)
                }]
            };
        return {
            name: "CoffeeScript",
            aliases: ["coffee", "cson", "iced"],
            keywords: a,
            illegal: /\/\*/,
            contains: [...u, e.COMMENT("###", "###"), e.HASH_COMMENT_MODE, {
                className: "function",
                begin: "^\\s*" + o + "\\s*=\\s*" + l,
                end: "[-=]>",
                returnBegin: !0,
                contains: [c, d]
            }, {
                begin: /[:\(,=]\s*/,
                relevance: 0,
                contains: [{
                    className: "function",
                    begin: l,
                    end: "[-=]>",
                    returnBegin: !0,
                    contains: [d]
                }]
            }, {
                variants: [{
                    match: [/class\s+/, o, /\s+extends\s+/, o]
                }, {
                    match: [/class\s+/, o]
                }],
                scope: {
                    2: "title.class",
                    4: "title.class.inherited"
                },
                keywords: a
            }, {
                begin: o + ":",
                end: ":",
                returnBegin: !0,
                returnEnd: !0,
                relevance: 0
            }]
        }
    }
}