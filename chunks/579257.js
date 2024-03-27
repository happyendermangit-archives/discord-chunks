function(e) {
    let t = "[A-Za-z$_][0-9A-Za-z$_]*",
        n = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
        r = ["true", "false", "null", "undefined", "NaN", "Infinity"],
        i = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
        a = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
        o = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
        s = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
        u = [].concat(o, i, a);
    e.exports = function(e) {
        let c = function(e) {
                var c;
                let l = e.regex,
                    d = (e, {
                        after: t
                    }) => {
                        let n = "</" + e[0].slice(1);
                        return -1 !== e.input.indexOf(n, t)
                    },
                    f = {
                        begin: "<>",
                        end: "</>"
                    },
                    p = {
                        begin: /<[A-Za-z0-9\\._:-]+/,
                        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                        isTrulyOpeningTag: (e, t) => {
                            let n;
                            let r = e[0].length + e.index,
                                i = e.input[r];
                            if ("<" === i || "," === i) {
                                t.ignoreMatch();
                                return
                            }
                            ">" === i && !d(e, {
                                after: r
                            }) && t.ignoreMatch();
                            let a = e.input.substring(r);
                            if ((n = a.match(/^\s*=/)) || (n = a.match(/^\s+extends\s+/)) && 0 === n.index) {
                                t.ignoreMatch();
                                return
                            }
                        }
                    },
                    h = {
                        $pattern: t,
                        keyword: n,
                        literal: r,
                        built_in: u,
                        "variable.language": s
                    },
                    m = "[0-9](_?[0-9])*",
                    g = `\\.(${m})`,
                    _ = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
                    b = {
                        className: "number",
                        variants: [{
                            begin: `(\\b(${_})((${g})|\\.)?|(${g}))[eE][+-]?(${m})\\b`
                        }, {
                            begin: `\\b(${_})\\b((${g})\\b|\\.)?|(${g})\\b`
                        }, {
                            begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                        }, {
                            begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                        }, {
                            begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                        }, {
                            begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                        }, {
                            begin: "\\b0[0-7]+n?\\b"
                        }],
                        relevance: 0
                    },
                    v = {
                        className: "subst",
                        begin: "\\$\\{",
                        end: "\\}",
                        keywords: h,
                        contains: []
                    },
                    y = {
                        begin: "html`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, v],
                            subLanguage: "xml"
                        }
                    },
                    E = {
                        begin: "css`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, v],
                            subLanguage: "css"
                        }
                    },
                    S = {
                        className: "string",
                        begin: "`",
                        end: "`",
                        contains: [e.BACKSLASH_ESCAPE, v]
                    },
                    x = {
                        className: "comment",
                        variants: [e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                            relevance: 0,
                            contains: [{
                                begin: "(?=@[A-Za-z]+)",
                                relevance: 0,
                                contains: [{
                                    className: "doctag",
                                    begin: "@[A-Za-z]+"
                                }, {
                                    className: "type",
                                    begin: "\\{",
                                    end: "\\}",
                                    excludeEnd: !0,
                                    excludeBegin: !0,
                                    relevance: 0
                                }, {
                                    className: "variable",
                                    begin: t + "(?=\\s*(-)|$)",
                                    endsParent: !0,
                                    relevance: 0
                                }, {
                                    begin: /(?=[^\n])\s/,
                                    relevance: 0
                                }]
                            }]
                        }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
                    },
                    w = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, y, E, S, {
                        match: /\$\d+/
                    }, b];
                v.contains = w.concat({
                    begin: /\{/,
                    end: /\}/,
                    keywords: h,
                    contains: ["self"].concat(w)
                });
                let T = [].concat(x, v.contains),
                    C = T.concat([{
                        begin: /\(/,
                        end: /\)/,
                        keywords: h,
                        contains: ["self"].concat(T)
                    }]),
                    D = {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: h,
                        contains: C
                    },
                    O = {
                        variants: [{
                            match: [/class/, /\s+/, t, /\s+/, /extends/, /\s+/, l.concat(t, "(", l.concat(/\./, t), ")*")],
                            scope: {
                                1: "keyword",
                                3: "title.class",
                                5: "keyword",
                                7: "title.class.inherited"
                            }
                        }, {
                            match: [/class/, /\s+/, t],
                            scope: {
                                1: "keyword",
                                3: "title.class"
                            }
                        }]
                    },
                    M = {
                        relevance: 0,
                        match: l.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                        className: "title.class",
                        keywords: {
                            _: [...i, ...a]
                        }
                    };
                let A = {
                        match: l.concat(/\b/, (c = [...o, "super", "import"], l.concat("(?!", c.join("|"), ")")), t, l.lookahead(/\(/)),
                        className: "title.function",
                        relevance: 0
                    },
                    k = {
                        begin: l.concat(/\./, l.lookahead(l.concat(t, /(?![0-9A-Za-z$_(])/))),
                        end: t,
                        excludeBegin: !0,
                        keywords: "prototype",
                        className: "property",
                        relevance: 0
                    },
                    R = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>",
                    N = {
                        match: [/const|var|let/, /\s+/, t, /\s*/, /=\s*/, /(async\s*)?/, l.lookahead(R)],
                        keywords: "async",
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [D]
                    };
                return {
                    name: "Javascript",
                    aliases: ["js", "jsx", "mjs", "cjs"],
                    keywords: h,
                    exports: {
                        PARAMS_CONTAINS: C,
                        CLASS_REFERENCE: M
                    },
                    illegal: /#(?![$_A-z])/,
                    contains: [e.SHEBANG({
                        label: "shebang",
                        binary: "node",
                        relevance: 5
                    }), {
                        label: "use_strict",
                        className: "meta",
                        relevance: 10,
                        begin: /^\s*['"]use (strict|asm)['"]/
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, y, E, S, x, {
                        match: /\$\d+/
                    }, b, M, {
                        className: "attr",
                        begin: t + l.lookahead(":"),
                        relevance: 0
                    }, N, {
                        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                        keywords: "return throw case",
                        relevance: 0,
                        contains: [x, e.REGEXP_MODE, {
                            className: "function",
                            begin: R,
                            returnBegin: !0,
                            end: "\\s*=>",
                            contains: [{
                                className: "params",
                                variants: [{
                                    begin: e.UNDERSCORE_IDENT_RE,
                                    relevance: 0
                                }, {
                                    className: null,
                                    begin: /\(\s*\)/,
                                    skip: !0
                                }, {
                                    begin: /\(/,
                                    end: /\)/,
                                    excludeBegin: !0,
                                    excludeEnd: !0,
                                    keywords: h,
                                    contains: C
                                }]
                            }]
                        }, {
                            begin: /,/,
                            relevance: 0
                        }, {
                            match: /\s+/,
                            relevance: 0
                        }, {
                            variants: [{
                                begin: f.begin,
                                end: f.end
                            }, {
                                match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                            }, {
                                begin: p.begin,
                                "on:begin": p.isTrulyOpeningTag,
                                end: p.end
                            }],
                            subLanguage: "xml",
                            contains: [{
                                begin: p.begin,
                                end: p.end,
                                skip: !0,
                                contains: ["self"]
                            }]
                        }]
                    }, {
                        variants: [{
                            match: [/function/, /\s+/, t, /(?=\s*\()/]
                        }, {
                            match: [/function/, /\s*(?=\()/]
                        }],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        label: "func.def",
                        contains: [D],
                        illegal: /%/
                    }, {
                        beginKeywords: "while if switch catch for"
                    }, {
                        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                        returnBegin: !0,
                        label: "func.def",
                        contains: [D, e.inherit(e.TITLE_MODE, {
                            begin: t,
                            className: "title.function"
                        })]
                    }, {
                        match: /\.\.\./,
                        relevance: 0
                    }, k, {
                        match: "\\$" + t,
                        relevance: 0
                    }, {
                        match: [/\bconstructor(?=\s*\()/],
                        className: {
                            1: "title.function"
                        },
                        contains: [D]
                    }, A, {
                        relevance: 0,
                        match: /\b[A-Z][A-Z_0-9]+\b/,
                        className: "variable.constant"
                    }, O, {
                        match: [/get|set/, /\s+/, t, /(?=\()/],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [{
                            begin: /\(\)/
                        }, D]
                    }, {
                        match: /\$[(.]/
                    }]
                }
            }(e),
            l = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
            d = {
                beginKeywords: "namespace",
                end: /\{/,
                excludeEnd: !0,
                contains: [c.exports.CLASS_REFERENCE]
            },
            f = {
                beginKeywords: "interface",
                end: /\{/,
                excludeEnd: !0,
                keywords: {
                    keyword: "interface extends",
                    built_in: l
                },
                contains: [c.exports.CLASS_REFERENCE]
            },
            p = {
                $pattern: t,
                keyword: n.concat(["type", "namespace", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override"]),
                literal: r,
                built_in: u.concat(l),
                "variable.language": s
            },
            h = {
                className: "meta",
                begin: "@" + t
            },
            m = (e, t, n) => {
                let r = e.contains.findIndex(e => e.label === t);
                if (-1 === r) throw Error("can not find mode to replace");
                e.contains.splice(r, 1, n)
            };
        return Object.assign(c.keywords, p), c.exports.PARAMS_CONTAINS.push(h), c.contains = c.contains.concat([h, d, f]), m(c, "shebang", e.SHEBANG()), m(c, "use_strict", {
            className: "meta",
            relevance: 10,
            begin: /^\s*['"]use strict['"]/
        }), c.contains.find(e => "func.def" === e.label).relevance = 0, Object.assign(c, {
            name: "TypeScript",
            aliases: ["ts", "tsx"]
        }), c
    }
}