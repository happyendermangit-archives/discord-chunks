function(e) {
    function t(e) {
        return e ? "string" == typeof e ? e : e.source : null
    }

    function n(e) {
        return r("(?=", e, ")")
    }

    function r(...e) {
        return e.map(e => t(e)).join("")
    }

    function i(...e) {
        return "(" + (function(e) {
            let t = e[e.length - 1];
            return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {}
        }(e).capture ? "" : "?:") + e.map(e => t(e)).join("|") + ")"
    }
    let a = e => r(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
        o = ["Protocol", "Type"].map(a),
        s = ["init", "self"].map(a),
        u = ["Any", "Self"],
        c = ["actor", "any", "associatedtype", "async", "await", /as\?/, /as!/, "as", "break", "case", "catch", "class", "continue", "convenience", "default", "defer", "deinit", "didSet", "distributed", "do", "dynamic", "else", "enum", "extension", "fallthrough", /fileprivate\(set\)/, "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", /internal\(set\)/, "internal", "in", "is", "isolated", "nonisolated", "lazy", "let", "mutating", "nonmutating", /open\(set\)/, "open", "operator", "optional", "override", "postfix", "precedencegroup", "prefix", /private\(set\)/, "private", "protocol", /public\(set\)/, "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", /unowned\(safe\)/, /unowned\(unsafe\)/, "unowned", "var", "weak", "where", "while", "willSet"],
        l = ["false", "nil", "true"],
        d = ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"],
        f = ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warn_unqualified_access", "#warning"],
        p = ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"],
        h = i(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
        m = i(h, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
        g = r(h, m, "*"),
        _ = i(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
        b = i(_, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
        v = r(_, b, "*"),
        y = r(/[A-Z]/, b, "*"),
        E = ["autoclosure", r(/convention\(/, i("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", r(/objc\(/, v, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "resultBuilder", "testable", "UIApplicationMain", "unknown", "usableFromInline"],
        S = ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"];
    e.exports = function(e) {
        let t = {
                match: /\s+/,
                relevance: 0
            },
            h = e.COMMENT("/\\*", "\\*/", {
                contains: ["self"]
            }),
            _ = [e.C_LINE_COMMENT_MODE, h],
            x = {
                match: [/\./, i(...o, ...s)],
                className: {
                    2: "keyword"
                }
            },
            w = {
                match: r(/\./, i(...c)),
                relevance: 0
            },
            T = c.filter(e => "string" == typeof e).concat(["_|0"]),
            C = {
                variants: [{
                    className: "keyword",
                    match: i(...c.filter(e => "string" != typeof e).concat(u).map(a), ...s)
                }]
            },
            D = {
                $pattern: i(/\b\w+/, /#\w+/),
                keyword: T.concat(f),
                literal: l
            },
            O = [x, w, C],
            M = {
                match: r(/\./, i(...p)),
                relevance: 0
            },
            A = [M, {
                className: "built_in",
                match: r(/\b/, i(...p), /(?=\()/)
            }],
            k = {
                match: /->/,
                relevance: 0
            },
            R = [k, {
                className: "operator",
                relevance: 0,
                variants: [{
                    match: g
                }, {
                    match: `\\.(\\.|${m})+`
                }]
            }],
            N = "([0-9]_*)+",
            I = "([0-9a-fA-F]_*)+",
            L = {
                className: "number",
                relevance: 0,
                variants: [{
                    match: `\\b(${N})(\\.(${N}))?([eE][+-]?(${N}))?\\b`
                }, {
                    match: `\\b0x(${I})(\\.(${I}))?([pP][+-]?(${N}))?\\b`
                }, {
                    match: /\b0o([0-7]_*)+\b/
                }, {
                    match: /\b0b([01]_*)+\b/
                }]
            },
            P = (e = "") => ({
                className: "subst",
                variants: [{
                    match: r(/\\/, e, /[0\\tnr"']/)
                }, {
                    match: r(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/)
                }]
            }),
            F = (e = "") => ({
                className: "subst",
                match: r(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)
            }),
            B = (e = "") => ({
                className: "subst",
                label: "interpol",
                begin: r(/\\/, e, /\(/),
                end: /\)/
            }),
            U = (e = "") => ({
                begin: r(e, /"""/),
                end: r(/"""/, e),
                contains: [P(e), F(e), B(e)]
            }),
            Y = (e = "") => ({
                begin: r(e, /"/),
                end: r(/"/, e),
                contains: [P(e), B(e)]
            }),
            j = {
                className: "string",
                variants: [U(), U("#"), U("##"), U("###"), Y(), Y("#"), Y("##"), Y("###")]
            },
            z = {
                match: r(/`/, v, /`/)
            },
            H = [z, {
                className: "variable",
                match: /\$\d+/
            }, {
                className: "variable",
                match: `\\$${b}+`
            }],
            G = {
                match: /(@|#(un)?)available/,
                className: "keyword",
                starts: {
                    contains: [{
                        begin: /\(/,
                        end: /\)/,
                        keywords: S,
                        contains: [...R, L, j]
                    }]
                }
            },
            V = {
                className: "keyword",
                match: r(/@/, i(...E))
            },
            $ = [G, V, {
                className: "meta",
                match: r(/@/, v)
            }],
            W = {
                match: n(/\b[A-Z]/),
                relevance: 0,
                contains: [{
                    className: "type",
                    match: r(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, b, "+")
                }, {
                    className: "type",
                    match: y,
                    relevance: 0
                }, {
                    match: /[?!]+/,
                    relevance: 0
                }, {
                    match: /\.\.\./,
                    relevance: 0
                }, {
                    match: r(/\s+&\s+/, n(y)),
                    relevance: 0
                }]
            },
            K = {
                begin: /</,
                end: />/,
                keywords: D,
                contains: [..._, ...O, ...$, k, W]
            };
        W.contains.push(K);
        let q = {
                begin: /\(/,
                end: /\)/,
                relevance: 0,
                keywords: D,
                contains: ["self", {
                    match: r(v, /\s*:/),
                    keywords: "_|0",
                    relevance: 0
                }, ..._, ...O, ...A, ...R, L, j, ...H, ...$, W]
            },
            Q = {
                begin: /</,
                end: />/,
                contains: [..._, W]
            },
            Z = {
                begin: /\(/,
                end: /\)/,
                keywords: D,
                contains: [{
                    begin: i(n(r(v, /\s*:/)), n(r(v, /\s+/, v, /\s*:/))),
                    end: /:/,
                    relevance: 0,
                    contains: [{
                        className: "keyword",
                        match: /\b_\b/
                    }, {
                        className: "params",
                        match: v
                    }]
                }, ..._, ...O, ...R, L, j, ...$, W, q],
                endsParent: !0,
                illegal: /["']/
            },
            X = {
                match: [/func/, /\s+/, i(z.match, v, g)],
                className: {
                    1: "keyword",
                    3: "title.function"
                },
                contains: [Q, Z, t],
                illegal: [/\[/, /%/]
            },
            J = {
                begin: [/precedencegroup/, /\s+/, y],
                className: {
                    1: "keyword",
                    3: "title"
                },
                contains: [W],
                keywords: [...d, ...l],
                end: /}/
            };
        for (let e of j.variants) {
            let t = e.contains.find(e => "interpol" === e.label);
            t.keywords = D;
            let n = [...O, ...A, ...R, L, j, ...H];
            t.contains = [...n, {
                begin: /\(/,
                end: /\)/,
                contains: ["self", ...n]
            }]
        }
        return {
            name: "Swift",
            keywords: D,
            contains: [..._, X, {
                match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
                className: {
                    1: "keyword"
                },
                contains: [Q, Z, t],
                illegal: /\[|%/
            }, {
                beginKeywords: "struct protocol class extension enum actor",
                end: "\\{",
                excludeEnd: !0,
                keywords: D,
                contains: [e.inherit(e.TITLE_MODE, {
                    className: "title.class",
                    begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                }), ...O]
            }, {
                match: [/operator/, /\s+/, g],
                className: {
                    1: "keyword",
                    3: "title"
                }
            }, J, {
                beginKeywords: "import",
                end: /$/,
                contains: [..._],
                relevance: 0
            }, ...O, ...A, ...R, L, j, ...H, ...$, W, q]
        }
    }
}