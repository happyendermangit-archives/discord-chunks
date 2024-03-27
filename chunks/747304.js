function(e) {
    e.exports = function(e) {
        let t = e.regex,
            n = e.COMMENT("//", "$", {
                contains: [{
                    begin: /\\\n/
                }]
            }),
            r = "decltype\\(auto\\)",
            i = "[a-zA-Z_]\\w*::",
            a = "(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")",
            o = {
                className: "type",
                variants: [{
                    begin: "\\b[a-z\\d_]*_t\\b"
                }, {
                    match: /\batomic_[a-z]{3,6}\b/
                }]
            },
            s = {
                className: "string",
                variants: [{
                    begin: '(u8?|U|L)?"',
                    end: '"',
                    illegal: "\\n",
                    contains: [e.BACKSLASH_ESCAPE]
                }, {
                    begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                    end: "'",
                    illegal: "."
                }, e.END_SAME_AS_BEGIN({
                    begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                    end: /\)([^()\\ ]{0,16})"/
                })]
            },
            u = {
                className: "number",
                variants: [{
                    begin: "\\b(0b[01']+)"
                }, {
                    begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                }, {
                    begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }],
                relevance: 0
            },
            c = {
                className: "meta",
                begin: /#\s*[a-z]+\b/,
                end: /$/,
                keywords: {
                    keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                },
                contains: [{
                    begin: /\\\n/,
                    relevance: 0
                }, e.inherit(s, {
                    className: "string"
                }), {
                    className: "string",
                    begin: /<.*?>/
                }, n, e.C_BLOCK_COMMENT_MODE]
            },
            l = {
                className: "title",
                begin: t.optional(i) + e.IDENT_RE,
                relevance: 0
            },
            d = t.optional(i) + e.IDENT_RE + "\\s*\\(",
            f = {
                keyword: ["asm", "auto", "break", "case", "continue", "default", "do", "else", "enum", "extern", "for", "fortran", "goto", "if", "inline", "register", "restrict", "return", "sizeof", "struct", "switch", "typedef", "union", "volatile", "while", "_Alignas", "_Alignof", "_Atomic", "_Generic", "_Noreturn", "_Static_assert", "_Thread_local", "alignas", "alignof", "noreturn", "static_assert", "thread_local", "_Pragma"],
                type: ["float", "double", "signed", "unsigned", "int", "short", "long", "char", "void", "_Bool", "_Complex", "_Imaginary", "_Decimal32", "_Decimal64", "_Decimal128", "const", "static", "complex", "bool", "imaginary"],
                literal: "true false NULL",
                built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
            },
            p = [c, o, n, e.C_BLOCK_COMMENT_MODE, u, s],
            h = {
                variants: [{
                    begin: /=/,
                    end: /;/
                }, {
                    begin: /\(/,
                    end: /\)/
                }, {
                    beginKeywords: "new throw return else",
                    end: /;/
                }],
                keywords: f,
                contains: p.concat([{
                    begin: /\(/,
                    end: /\)/,
                    keywords: f,
                    contains: p.concat(["self"]),
                    relevance: 0
                }]),
                relevance: 0
            },
            m = {
                begin: "(" + a + "[\\*&\\s]+)+" + d,
                returnBegin: !0,
                end: /[{;=]/,
                excludeEnd: !0,
                keywords: f,
                illegal: /[^\w\s\*&:<>.]/,
                contains: [{
                    begin: r,
                    keywords: f,
                    relevance: 0
                }, {
                    begin: d,
                    returnBegin: !0,
                    contains: [e.inherit(l, {
                        className: "title.function"
                    })],
                    relevance: 0
                }, {
                    relevance: 0,
                    match: /,/
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: f,
                    relevance: 0,
                    contains: [n, e.C_BLOCK_COMMENT_MODE, s, u, o, {
                        begin: /\(/,
                        end: /\)/,
                        keywords: f,
                        relevance: 0,
                        contains: ["self", n, e.C_BLOCK_COMMENT_MODE, s, u, o]
                    }]
                }, o, n, e.C_BLOCK_COMMENT_MODE, c]
            };
        return {
            name: "C",
            aliases: ["h"],
            keywords: f,
            disableAutodetect: !0,
            illegal: "</",
            contains: [].concat(h, m, p, [c, {
                begin: e.IDENT_RE + "::",
                keywords: f
            }, {
                className: "class",
                beginKeywords: "enum class struct union",
                end: /[{;:<>=]/,
                contains: [{
                    beginKeywords: "final class struct"
                }, e.TITLE_MODE]
            }]),
            exports: {
                preprocessor: c,
                strings: s,
                keywords: f
            }
        }
    }
}