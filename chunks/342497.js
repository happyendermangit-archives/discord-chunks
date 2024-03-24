function(e, t, n) {
    "use strict";
    n("70102"), n("424973"), n("781738"), t.default = function() {
        function SyntaxError(e, t, n, r, a, o) {
            this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = a, this.column = o, this.name = "SyntaxError"
        }
        return ! function(e, t) {
            function n() {
                this.constructor = e
            }
            n.prototype = t.prototype, e.prototype = new n
        }(SyntaxError, Error), {
            SyntaxError: SyntaxError,
            parse: function(e) {
                var t, n, r, a, o, i, s, u = arguments.length > 1 ? arguments[1] : {},
                    l = {},
                    c = {
                        start: ea
                    },
                    d = ea,
                    f = function(e) {
                        var t, n, r, a, o, i = "";
                        for (t = 0, r = e.length; t < r; t += 1)
                            for (n = 0, o = (a = e[t]).length; n < o; n += 1) i += a[n];
                        return i
                    },
                    p = /^[^ \t\n\r,.+={}#]/,
                    m = {
                        type: "class",
                        value: "[^ \\t\\n\\r,.+={}#]",
                        description: "[^ \\t\\n\\r,.+={}#]"
                    },
                    h = {
                        type: "literal",
                        value: "{",
                        description: '"{"'
                    },
                    y = {
                        type: "literal",
                        value: ",",
                        description: '","'
                    },
                    _ = {
                        type: "literal",
                        value: "}",
                        description: '"}"'
                    },
                    g = "number",
                    v = {
                        type: "literal",
                        value: "number",
                        description: '"number"'
                    },
                    b = "date",
                    M = {
                        type: "literal",
                        value: "date",
                        description: '"date"'
                    },
                    w = "time",
                    k = {
                        type: "literal",
                        value: "time",
                        description: '"time"'
                    },
                    L = "plural",
                    D = {
                        type: "literal",
                        value: "plural",
                        description: '"plural"'
                    },
                    T = "selectordinal",
                    S = {
                        type: "literal",
                        value: "selectordinal",
                        description: '"selectordinal"'
                    },
                    Y = "select",
                    x = {
                        type: "literal",
                        value: "select",
                        description: '"select"'
                    },
                    O = {
                        type: "literal",
                        value: "=",
                        description: '"="'
                    },
                    E = "offset:",
                    P = {
                        type: "literal",
                        value: "offset:",
                        description: '"offset:"'
                    },
                    j = {
                        type: "other",
                        description: "whitespace"
                    },
                    C = /^[ \t\n\r]/,
                    A = {
                        type: "class",
                        value: "[ \\t\\n\\r]",
                        description: "[ \\t\\n\\r]"
                    },
                    F = {
                        type: "other",
                        description: "optionalWhitespace"
                    },
                    H = /^[0-9]/,
                    I = {
                        type: "class",
                        value: "[0-9]",
                        description: "[0-9]"
                    },
                    N = /^[0-9a-f]/i,
                    R = {
                        type: "class",
                        value: "[0-9a-f]i",
                        description: "[0-9a-f]i"
                    },
                    z = {
                        type: "literal",
                        value: "0",
                        description: '"0"'
                    },
                    W = /^[1-9]/,
                    B = {
                        type: "class",
                        value: "[1-9]",
                        description: "[1-9]"
                    },
                    U = /^[^{}\\\0-\x1F \t\n\r]/,
                    K = {
                        type: "class",
                        value: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
                        description: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]"
                    },
                    V = {
                        type: "literal",
                        value: "\\\\",
                        description: '"\\\\\\\\"'
                    },
                    J = {
                        type: "literal",
                        value: "\\#",
                        description: '"\\\\#"'
                    },
                    G = {
                        type: "literal",
                        value: "\\{",
                        description: '"\\\\{"'
                    },
                    q = {
                        type: "literal",
                        value: "\\}",
                        description: '"\\\\}"'
                    },
                    $ = {
                        type: "literal",
                        value: "\\u",
                        description: '"\\\\u"'
                    },
                    Q = 0,
                    X = 0,
                    Z = {
                        line: 1,
                        column: 1,
                        seenCR: !1
                    },
                    ee = 0,
                    et = [],
                    en = 0;
                if ("startRule" in u) {
                    if (!(u.startRule in c)) throw Error("Can't start parsing from rule \"" + u.startRule + '".');
                    d = c[u.startRule]
                }

                function er(e) {
                    !(Q < ee) && (Q > ee && (ee = Q, et = []), et.push(e))
                }

                function ea() {
                    return eo()
                }

                function eo() {
                    var e, t, n;
                    for (e = Q, t = [], n = ei(); n !== l;) t.push(n), n = ei();
                    if (t !== l) t = {
                        type: "messageFormatPattern",
                        elements: t
                    };
                    return e = t
                }

                function ei() {
                    var t;
                    return (t = function() {
                        var t, n;
                        if (t = Q, (n = function() {
                                var t, n, r, a, o, i;
                                if (t = Q, n = [], r = Q, (a = ec()) !== l && (o = eh()) !== l && (i = ec()) !== l ? r = a = [a, o, i] : (Q = r, r = l), r !== l)
                                    for (; r !== l;) n.push(r), r = Q, (a = ec()) !== l && (o = eh()) !== l && (i = ec()) !== l ? r = a = [a, o, i] : (Q = r, r = l);
                                else n = l;
                                return n !== l && (n = f(n)), (t = n) === l && (t = Q, (n = el()) !== l && (n = e.substring(t, Q)), t = n), t
                            }()) !== l) n = {
                            type: "messageTextElement",
                            value: n
                        };
                        return t = n
                    }()) === l && (t = function() {
                        var t, n, r, a, o, i, s, u;
                        if (t = Q, 123 === e.charCodeAt(Q) ? (n = "{", Q++) : (n = l, 0 === en && er(h)), n !== l) {
                            if (ec() !== l) {
                                if ((r = function() {
                                        var t, n, r;
                                        if ((t = ep()) === l) {
                                            if (t = Q, n = [], p.test(e.charAt(Q)) ? (r = e.charAt(Q), Q++) : (r = l, 0 === en && er(m)), r !== l)
                                                for (; r !== l;) n.push(r), p.test(e.charAt(Q)) ? (r = e.charAt(Q), Q++) : (r = l, 0 === en && er(m));
                                            else n = l;
                                            n !== l && (n = e.substring(t, Q)), t = n
                                        }
                                        return t
                                    }()) !== l) {
                                    if (ec() !== l) {
                                        if (a = Q, 44 === e.charCodeAt(Q) ? (o = ",", Q++) : (o = l, 0 === en && er(y)), o !== l && (i = ec()) !== l && (s = function() {
                                                var t;
                                                return (t = function() {
                                                    var t, n, r, a, o, i, s;
                                                    if (t = Q, e.substr(Q, 6) === g ? (n = g, Q += 6) : (n = l, 0 === en && er(v)), n === l && (e.substr(Q, 4) === b ? (n = b, Q += 4) : (n = l, 0 === en && er(M)), n === l && (e.substr(Q, 4) === w ? (n = w, Q += 4) : (n = l, 0 === en && er(k)))), n !== l) {
                                                        if (ec() !== l) {
                                                            if (r = Q, 44 === e.charCodeAt(Q) ? (a = ",", Q++) : (a = l, 0 === en && er(y)), a !== l && (o = ec()) !== l && (i = eh()) !== l ? r = a = [a, o, i] : (Q = r, r = l), r === l && (r = null), r !== l) {
                                                                ;
                                                                t = n = {
                                                                    type: n + "Format",
                                                                    style: (s = r) && s[2]
                                                                }
                                                            } else Q = t, t = l
                                                        } else Q = t, t = l
                                                    } else Q = t, t = l;
                                                    return t
                                                }()) === l && (t = function() {
                                                    var t, n, r, a, o;
                                                    if (t = Q, e.substr(Q, 6) === L ? (n = L, Q += 6) : (n = l, 0 === en && er(D)), n !== l) {
                                                        if (ec() !== l) {
                                                            if (44 === e.charCodeAt(Q) ? (r = ",", Q++) : (r = l, 0 === en && er(y)), r !== l) {
                                                                if (ec() !== l) {
                                                                    if ((a = eu()) !== l) {
                                                                        ;
                                                                        t = n = {
                                                                            type: (o = a).type,
                                                                            ordinal: !1,
                                                                            offset: o.offset || 0,
                                                                            options: o.options
                                                                        }
                                                                    } else Q = t, t = l
                                                                } else Q = t, t = l
                                                            } else Q = t, t = l
                                                        } else Q = t, t = l
                                                    } else Q = t, t = l;
                                                    return t
                                                }()) === l && (t = function() {
                                                    var t, n, r, a, o;
                                                    if (t = Q, e.substr(Q, 13) === T ? (n = T, Q += 13) : (n = l, 0 === en && er(S)), n !== l) {
                                                        if (ec() !== l) {
                                                            if (44 === e.charCodeAt(Q) ? (r = ",", Q++) : (r = l, 0 === en && er(y)), r !== l) {
                                                                if (ec() !== l) {
                                                                    if ((a = eu()) !== l) {
                                                                        ;
                                                                        t = n = {
                                                                            type: (o = a).type,
                                                                            ordinal: !0,
                                                                            offset: o.offset || 0,
                                                                            options: o.options
                                                                        }
                                                                    } else Q = t, t = l
                                                                } else Q = t, t = l
                                                            } else Q = t, t = l
                                                        } else Q = t, t = l
                                                    } else Q = t, t = l;
                                                    return t
                                                }()) === l && (t = function() {
                                                    var t, n, r, a, o;
                                                    if (t = Q, e.substr(Q, 6) === Y ? (n = Y, Q += 6) : (n = l, 0 === en && er(x)), n !== l) {
                                                        if (ec() !== l) {
                                                            if (44 === e.charCodeAt(Q) ? (r = ",", Q++) : (r = l, 0 === en && er(y)), r !== l) {
                                                                if (ec() !== l) {
                                                                    if (a = [], (o = es()) !== l)
                                                                        for (; o !== l;) a.push(o), o = es();
                                                                    else a = l;
                                                                    if (a !== l) t = n = {
                                                                        type: "selectFormat",
                                                                        options: a
                                                                    };
                                                                    else Q = t, t = l
                                                                } else Q = t, t = l
                                                            } else Q = t, t = l
                                                        } else Q = t, t = l
                                                    } else Q = t, t = l;
                                                    return t
                                                }()), t
                                            }()) !== l ? a = o = [o, i, s] : (Q = a, a = l), a === l && (a = null), a !== l) {
                                            if ((o = ec()) !== l) {
                                                if (125 === e.charCodeAt(Q) ? (i = "}", Q++) : (i = l, 0 === en && er(_)), i !== l) {
                                                    ;
                                                    t = n = {
                                                        type: "argumentElement",
                                                        id: r,
                                                        format: (u = a) && u[2]
                                                    }
                                                } else Q = t, t = l
                                            } else Q = t, t = l
                                        } else Q = t, t = l
                                    } else Q = t, t = l
                                } else Q = t, t = l
                            } else Q = t, t = l
                        } else Q = t, t = l;
                        return t
                    }()), t
                }

                function es() {
                    var t, n, r, a, o, i, s, u, c, d;
                    if (t = Q, (n = ec()) !== l) {
                        ;
                        if (s = Q, u = Q, 61 === e.charCodeAt(Q) ? (c = "=", Q++) : (c = l, 0 === en && er(O)), c !== l && (d = ep()) !== l ? u = c = [c, d] : (Q = u, u = l), u !== l && (u = e.substring(s, Q)), (s = u) === l && (s = eh()), (r = s) !== l) {
                            if (ec() !== l) {
                                if (123 === e.charCodeAt(Q) ? (a = "{", Q++) : (a = l, 0 === en && er(h)), a !== l) {
                                    if (ec() !== l) {
                                        if ((o = eo()) !== l) {
                                            if (ec() !== l) {
                                                if (125 === e.charCodeAt(Q) ? (i = "}", Q++) : (i = l, 0 === en && er(_)), i !== l) t = n = {
                                                    type: "optionalFormatPattern",
                                                    selector: r,
                                                    value: o
                                                };
                                                else Q = t, t = l
                                            } else Q = t, t = l
                                        } else Q = t, t = l
                                    } else Q = t, t = l
                                } else Q = t, t = l
                            } else Q = t, t = l
                        } else Q = t, t = l
                    } else Q = t, t = l;
                    return t
                }

                function eu() {
                    var t, n, r, a;
                    if (t = Q, (n = function() {
                            var t, n, r;
                            if (t = Q, e.substr(Q, 7) === E ? (n = E, Q += 7) : (n = l, 0 === en && er(P)), n !== l) {
                                if (ec() !== l) {
                                    if ((r = ep()) !== l) t = n = r;
                                    else Q = t, t = l
                                } else Q = t, t = l
                            } else Q = t, t = l;
                            return t
                        }()) === l && (n = null), n !== l) {
                        if (ec() !== l) {
                            if (r = [], (a = es()) !== l)
                                for (; a !== l;) r.push(a), a = es();
                            else r = l;
                            if (r !== l) t = n = {
                                type: "pluralFormat",
                                offset: n,
                                options: r
                            };
                            else Q = t, t = l
                        } else Q = t, t = l
                    } else Q = t, t = l;
                    return t
                }

                function el() {
                    var t, n;
                    if (en++, t = [], C.test(e.charAt(Q)) ? (n = e.charAt(Q), Q++) : (n = l, 0 === en && er(A)), n !== l)
                        for (; n !== l;) t.push(n), C.test(e.charAt(Q)) ? (n = e.charAt(Q), Q++) : (n = l, 0 === en && er(A));
                    else t = l;
                    return en--, t === l && (n = l, 0 === en && er(j)), t
                }

                function ec() {
                    var t, n, r;
                    for (en++, t = Q, n = [], r = el(); r !== l;) n.push(r), r = el();
                    return n !== l && (n = e.substring(t, Q)), t = n, en--, t === l && (n = l, 0 === en && er(F)), t
                }

                function ed() {
                    var t;
                    return H.test(e.charAt(Q)) ? (t = e.charAt(Q), Q++) : (t = l, 0 === en && er(I)), t
                }

                function ef() {
                    var t;
                    return N.test(e.charAt(Q)) ? (t = e.charAt(Q), Q++) : (t = l, 0 === en && er(R)), t
                }

                function ep() {
                    var t, n, r, a, o, i;
                    if (t = Q, 48 === e.charCodeAt(Q) ? (n = "0", Q++) : (n = l, 0 === en && er(z)), n === l) {
                        if (n = Q, r = Q, W.test(e.charAt(Q)) ? (a = e.charAt(Q), Q++) : (a = l, 0 === en && er(B)), a !== l) {
                            for (o = [], i = ed(); i !== l;) o.push(i), i = ed();
                            o !== l ? r = a = [a, o] : (Q = r, r = l)
                        } else Q = r, r = l;
                        r !== l && (r = e.substring(n, Q)), n = r
                    }
                    if (n !== l) n = parseInt(n, 10);
                    return t = n
                }

                function em() {
                    var t, n, r, a, o, i, s, u;
                    if (U.test(e.charAt(Q)) ? (t = e.charAt(Q), Q++) : (t = l, 0 === en && er(K)), t === l && (t = Q, "\\\\" === e.substr(Q, 2) ? (n = "\\\\", Q += 2) : (n = l, 0 === en && er(V)), n !== l && (n = "\\"), (t = n) === l && (t = Q, "\\#" === e.substr(Q, 2) ? (n = "\\#", Q += 2) : (n = l, 0 === en && er(J)), n !== l && (n = "\\#"), (t = n) === l && (t = Q, "\\{" === e.substr(Q, 2) ? (n = "\\{", Q += 2) : (n = l, 0 === en && er(G)), n !== l && (n = "{"), (t = n) === l && (t = Q, "\\}" === e.substr(Q, 2) ? (n = "\\}", Q += 2) : (n = l, 0 === en && er(q)), n !== l && (n = "}"), (t = n) === l))))) {
                        if (t = Q, "\\u" === e.substr(Q, 2) ? (n = "\\u", Q += 2) : (n = l, 0 === en && er($)), n !== l) {
                            if (r = Q, a = Q, (o = ef()) !== l && (i = ef()) !== l && (s = ef()) !== l && (u = ef()) !== l ? a = o = [o, i, s, u] : (Q = a, a = l), a !== l && (a = e.substring(r, Q)), (r = a) !== l) t = n = String.fromCharCode(parseInt(r, 16));
                            else Q = t, t = l
                        } else Q = t, t = l
                    }
                    return t
                }

                function eh() {
                    var e, t, n;
                    if (e = Q, t = [], (n = em()) !== l)
                        for (; n !== l;) t.push(n), n = em();
                    else t = l;
                    if (t !== l) t = t.join("");
                    return e = t
                }
                if ((s = d()) !== l && Q === e.length) return s;
                throw s !== l && Q < e.length && er({
                    type: "end",
                    description: "end of input"
                }), t = null, n = et, o = (X !== (a = r = ee) && (X > a && (X = 0, Z = {
                    line: 1,
                    column: 1,
                    seenCR: !1
                }), ! function(t, n, r) {
                    var a, o;
                    for (a = n; a < r; a++) "\n" === (o = e.charAt(a)) ? (!t.seenCR && t.line++, t.column = 1, t.seenCR = !1) : "\r" === o || "\u2028" === o || "\u2029" === o ? (t.line++, t.column = 1, t.seenCR = !0) : (t.column++, t.seenCR = !1)
                }(Z, X, a), X = a), Z), i = r < e.length ? e.charAt(r) : null, null !== n && ! function(e) {
                    var t = 1;
                    for (e.sort(function(e, t) {
                            return e.description < t.description ? -1 : e.description > t.description ? 1 : 0
                        }); t < e.length;) e[t - 1] === e[t] ? e.splice(t, 1) : t++
                }(n), new SyntaxError(null !== t ? t : function(e, t) {
                    var n, r, a = Array(e.length);
                    for (r = 0; r < e.length; r++) a[r] = e[r].description;
                    return n = e.length > 1 ? a.slice(0, -1).join(", ") + " or " + a[e.length - 1] : a[0], "Expected " + n + " but " + (t ? '"' + function(e) {
                        function t(e) {
                            return e.charCodeAt(0).toString(16).toUpperCase()
                        }
                        return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(e) {
                            return "\\x0" + t(e)
                        }).replace(/[\x10-\x1F\x80-\xFF]/g, function(e) {
                            return "\\x" + t(e)
                        }).replace(/[\u0180-\u0FFF]/g, function(e) {
                            return "\\u0" + t(e)
                        }).replace(/[\u1080-\uFFFF]/g, function(e) {
                            return "\\u" + t(e)
                        })
                    }(t) + '"' : "end of input") + " found."
                }(n, i), n, i, r, o.line, o.column)
            }
        }
    }()
}