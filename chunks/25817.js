function(e, t, a) {
    function n(e) {
        return e ? "string" == typeof e ? e : e.source : null
    }

    function i(e) {
        return r("(?=", e, ")")
    }

    function r() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        let i = t.map(e => n(e)).join("");
        return i
    }
    a("222007"), a("424973");

    function o() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        let i = function(e) {
                let t = e[e.length - 1];
                return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {}
            }(t),
            r = "(" + (i.capture ? "" : "?:") + t.map(e => n(e)).join("|") + ")";
        return r
    }
    let s = e => r(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
        l = ["Protocol", "Type"].map(s),
        c = ["init", "self"].map(s),
        _ = ["Any", "Self"],
        d = ["actor", "any", "associatedtype", "async", "await", /as\?/, /as!/, "as", "break", "case", "catch", "class", "continue", "convenience", "default", "defer", "deinit", "didSet", "distributed", "do", "dynamic", "else", "enum", "extension", "fallthrough", /fileprivate\(set\)/, "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", /internal\(set\)/, "internal", "in", "is", "isolated", "nonisolated", "lazy", "let", "mutating", "nonmutating", /open\(set\)/, "open", "operator", "optional", "override", "postfix", "precedencegroup", "prefix", /private\(set\)/, "private", "protocol", /public\(set\)/, "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", /unowned\(safe\)/, /unowned\(unsafe\)/, "unowned", "var", "weak", "where", "while", "willSet"],
        m = ["false", "nil", "true"],
        p = ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"],
        u = ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warn_unqualified_access", "#warning"],
        E = ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"],
        g = o(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
        S = o(g, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
        b = r(g, S, "*"),
        T = o(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
        f = o(T, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
        C = r(T, f, "*"),
        R = r(/[A-Z]/, f, "*"),
        N = ["autoclosure", r(/convention\(/, o("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", r(/objc\(/, C, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "resultBuilder", "testable", "UIApplicationMain", "unknown", "usableFromInline"],
        O = ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"];
    e.exports = function(e) {
        let t = {
                match: /\s+/,
                relevance: 0
            },
            a = e.COMMENT("/\\*", "\\*/", {
                contains: ["self"]
            }),
            n = [e.C_LINE_COMMENT_MODE, a],
            g = {
                match: [/\./, o(...l, ...c)],
                className: {
                    2: "keyword"
                }
            },
            T = {
                match: r(/\./, o(...d)),
                relevance: 0
            },
            h = d.filter(e => "string" == typeof e).concat(["_|0"]),
            v = d.filter(e => "string" != typeof e).concat(_).map(s),
            I = {
                variants: [{
                    className: "keyword",
                    match: o(...v, ...c)
                }]
            },
            A = {
                $pattern: o(/\b\w+/, /#\w+/),
                keyword: h.concat(u),
                literal: m
            },
            y = [g, T, I],
            D = {
                match: r(/\./, o(...E)),
                relevance: 0
            },
            M = {
                className: "built_in",
                match: r(/\b/, o(...E), /(?=\()/)
            },
            x = [D, M],
            L = {
                match: /->/,
                relevance: 0
            },
            w = [L, {
                className: "operator",
                relevance: 0,
                variants: [{
                    match: b
                }, {
                    match: "\\.(\\.|".concat(S, ")+")
                }]
            }],
            P = "([0-9]_*)+",
            k = "([0-9a-fA-F]_*)+",
            U = {
                className: "number",
                relevance: 0,
                variants: [{
                    match: "\\b(".concat(P, ")(\\.(").concat(P, "))?") + "([eE][+-]?(".concat(P, "))?\\b")
                }, {
                    match: "\\b0x(".concat(k, ")(\\.(").concat(k, "))?") + "([pP][+-]?(".concat(P, "))?\\b")
                }, {
                    match: /\b0o([0-7]_*)+\b/
                }, {
                    match: /\b0b([01]_*)+\b/
                }]
            },
            F = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return {
                    className: "subst",
                    variants: [{
                        match: r(/\\/, e, /[0\\tnr"']/)
                    }, {
                        match: r(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/)
                    }]
                }
            },
            B = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return {
                    className: "subst",
                    match: r(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)
                }
            },
            G = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return {
                    className: "subst",
                    label: "interpol",
                    begin: r(/\\/, e, /\(/),
                    end: /\)/
                }
            },
            Y = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return {
                    begin: r(e, /"""/),
                    end: r(/"""/, e),
                    contains: [F(e), B(e), G(e)]
                }
            },
            H = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return {
                    begin: r(e, /"/),
                    end: r(/"/, e),
                    contains: [F(e), G(e)]
                }
            },
            V = {
                className: "string",
                variants: [Y(), Y("#"), Y("##"), Y("###"), H(), H("#"), H("##"), H("###")]
            },
            q = {
                match: r(/`/, C, /`/)
            },
            z = [q, {
                className: "variable",
                match: /\$\d+/
            }, {
                className: "variable",
                match: "\\$".concat(f, "+")
            }],
            W = {
                match: /(@|#(un)?)available/,
                className: "keyword",
                starts: {
                    contains: [{
                        begin: /\(/,
                        end: /\)/,
                        keywords: O,
                        contains: [...w, U, V]
                    }]
                }
            },
            $ = {
                className: "keyword",
                match: r(/@/, o(...N))
            },
            Q = {
                className: "meta",
                match: r(/@/, C)
            },
            K = [W, $, Q],
            j = {
                match: i(/\b[A-Z]/),
                relevance: 0,
                contains: [{
                    className: "type",
                    match: r(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, f, "+")
                }, {
                    className: "type",
                    match: R,
                    relevance: 0
                }, {
                    match: /[?!]+/,
                    relevance: 0
                }, {
                    match: /\.\.\./,
                    relevance: 0
                }, {
                    match: r(/\s+&\s+/, i(R)),
                    relevance: 0
                }]
            },
            X = {
                begin: /</,
                end: />/,
                keywords: A,
                contains: [...n, ...y, ...K, L, j]
            };
        j.contains.push(X);
        let Z = {
                match: r(C, /\s*:/),
                keywords: "_|0",
                relevance: 0
            },
            J = {
                begin: /\(/,
                end: /\)/,
                relevance: 0,
                keywords: A,
                contains: ["self", Z, ...n, ...y, ...x, ...w, U, V, ...z, ...K, j]
            },
            ee = {
                begin: /</,
                end: />/,
                contains: [...n, j]
            },
            et = {
                begin: o(i(r(C, /\s*:/)), i(r(C, /\s+/, C, /\s*:/))),
                end: /:/,
                relevance: 0,
                contains: [{
                    className: "keyword",
                    match: /\b_\b/
                }, {
                    className: "params",
                    match: C
                }]
            },
            ea = {
                begin: /\(/,
                end: /\)/,
                keywords: A,
                contains: [et, ...n, ...y, ...w, U, V, ...K, j, J],
                endsParent: !0,
                illegal: /["']/
            },
            en = {
                match: [/func/, /\s+/, o(q.match, C, b)],
                className: {
                    1: "keyword",
                    3: "title.function"
                },
                contains: [ee, ea, t],
                illegal: [/\[/, /%/]
            },
            ei = {
                begin: [/precedencegroup/, /\s+/, R],
                className: {
                    1: "keyword",
                    3: "title"
                },
                contains: [j],
                keywords: [...p, ...m],
                end: /}/
            };
        for (let e of V.variants) {
            let t = e.contains.find(e => "interpol" === e.label);
            t.keywords = A;
            let a = [...y, ...x, ...w, U, V, ...z];
            t.contains = [...a, {
                begin: /\(/,
                end: /\)/,
                contains: ["self", ...a]
            }]
        }
        return {
            name: "Swift",
            keywords: A,
            contains: [...n, en, {
                match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
                className: {
                    1: "keyword"
                },
                contains: [ee, ea, t],
                illegal: /\[|%/
            }, {
                beginKeywords: "struct protocol class extension enum actor",
                end: "\\{",
                excludeEnd: !0,
                keywords: A,
                contains: [e.inherit(e.TITLE_MODE, {
                    className: "title.class",
                    begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                }), ...y]
            }, {
                match: [/operator/, /\s+/, b],
                className: {
                    1: "keyword",
                    3: "title"
                }
            }, ei, {
                beginKeywords: "import",
                end: /$/,
                contains: [...n],
                relevance: 0
            }, ...y, ...x, ...w, U, V, ...z, ...K, j, J]
        }
    }
}