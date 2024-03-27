function(e, t) {
    "use strict";
    t.default = function() {
        function e(e, t, n, r, i, a) {
            this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = i, this.column = a, this.name = "SyntaxError"
        }
        return ! function(e, t) {
            function n() {
                this.constructor = e
            }
            n.prototype = t.prototype, e.prototype = new n
        }(e, Error), {
            SyntaxError: e,
            parse: function(t) {
                var n, r, i, a, o, s, u, c = arguments.length > 1 ? arguments[1] : {},
                    l = {},
                    d = {
                        start: ea
                    },
                    f = ea,
                    p = function(e) {
                        var t, n, r, i, a, o = "";
                        for (t = 0, r = e.length; t < r; t += 1)
                            for (n = 0, a = (i = e[t]).length; n < a; n += 1) o += i[n];
                        return o
                    },
                    h = /^[^ \t\n\r,.+={}#]/,
                    m = {
                        type: "class",
                        value: "[^ \\t\\n\\r,.+={}#]",
                        description: "[^ \\t\\n\\r,.+={}#]"
                    },
                    g = {
                        type: "literal",
                        value: "{",
                        description: '"{"'
                    },
                    _ = {
                        type: "literal",
                        value: ",",
                        description: '","'
                    },
                    b = {
                        type: "literal",
                        value: "}",
                        description: '"}"'
                    },
                    v = "number",
                    y = {
                        type: "literal",
                        value: "number",
                        description: '"number"'
                    },
                    E = "date",
                    S = {
                        type: "literal",
                        value: "date",
                        description: '"date"'
                    },
                    x = "time",
                    w = {
                        type: "literal",
                        value: "time",
                        description: '"time"'
                    },
                    T = "plural",
                    C = {
                        type: "literal",
                        value: "plural",
                        description: '"plural"'
                    },
                    D = "selectordinal",
                    O = {
                        type: "literal",
                        value: "selectordinal",
                        description: '"selectordinal"'
                    },
                    M = "select",
                    A = {
                        type: "literal",
                        value: "select",
                        description: '"select"'
                    },
                    k = {
                        type: "literal",
                        value: "=",
                        description: '"="'
                    },
                    R = "offset:",
                    N = {
                        type: "literal",
                        value: "offset:",
                        description: '"offset:"'
                    },
                    I = {
                        type: "other",
                        description: "whitespace"
                    },
                    L = /^[ \t\n\r]/,
                    P = {
                        type: "class",
                        value: "[ \\t\\n\\r]",
                        description: "[ \\t\\n\\r]"
                    },
                    F = {
                        type: "other",
                        description: "optionalWhitespace"
                    },
                    B = /^[0-9]/,
                    U = {
                        type: "class",
                        value: "[0-9]",
                        description: "[0-9]"
                    },
                    Y = /^[0-9a-f]/i,
                    j = {
                        type: "class",
                        value: "[0-9a-f]i",
                        description: "[0-9a-f]i"
                    },
                    z = {
                        type: "literal",
                        value: "0",
                        description: '"0"'
                    },
                    H = /^[1-9]/,
                    G = {
                        type: "class",
                        value: "[1-9]",
                        description: "[1-9]"
                    },
                    V = /^[^{}\\\0-\x1F \t\n\r]/,
                    $ = {
                        type: "class",
                        value: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
                        description: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]"
                    },
                    W = {
                        type: "literal",
                        value: "\\\\",
                        description: '"\\\\\\\\"'
                    },
                    K = {
                        type: "literal",
                        value: "\\#",
                        description: '"\\\\#"'
                    },
                    q = {
                        type: "literal",
                        value: "\\{",
                        description: '"\\\\{"'
                    },
                    Q = {
                        type: "literal",
                        value: "\\}",
                        description: '"\\\\}"'
                    },
                    Z = {
                        type: "literal",
                        value: "\\u",
                        description: '"\\\\u"'
                    },
                    X = 0,
                    J = 0,
                    ee = {
                        line: 1,
                        column: 1,
                        seenCR: !1
                    },
                    et = 0,
                    en = [],
                    er = 0;
                if ("startRule" in c) {
                    if (!(c.startRule in d)) throw Error("Can't start parsing from rule \"" + c.startRule + '".');
                    f = d[c.startRule]
                }

                function ei(e) {
                    !(X < et) && (X > et && (et = X, en = []), en.push(e))
                }

                function ea() {
                    return eo()
                }

                function eo() {
                    var e, t, n;
                    for (e = X, t = [], n = es(); n !== l;) t.push(n), n = es();
                    if (t !== l) t = {
                        type: "messageFormatPattern",
                        elements: t
                    };
                    return e = t
                }

                function es() {
                    var e;
                    return (e = function() {
                        var e, n;
                        if (e = X, (n = function() {
                                var e, n, r, i, a, o;
                                if (e = X, n = [], r = X, (i = ed()) !== l && (a = eg()) !== l && (o = ed()) !== l ? r = i = [i, a, o] : (X = r, r = l), r !== l)
                                    for (; r !== l;) n.push(r), r = X, (i = ed()) !== l && (a = eg()) !== l && (o = ed()) !== l ? r = i = [i, a, o] : (X = r, r = l);
                                else n = l;
                                return n !== l && (n = p(n)), (e = n) === l && (e = X, (n = el()) !== l && (n = t.substring(e, X)), e = n), e
                            }()) !== l) n = {
                            type: "messageTextElement",
                            value: n
                        };
                        return e = n
                    }()) === l && (e = function() {
                        var e, n, r, i, a, o, s, u;
                        if (e = X, 123 === t.charCodeAt(X) ? (n = "{", X++) : (n = l, 0 === er && ei(g)), n !== l) {
                            if (ed() !== l) {
                                if ((r = function() {
                                        var e, n, r;
                                        if ((e = eh()) === l) {
                                            if (e = X, n = [], h.test(t.charAt(X)) ? (r = t.charAt(X), X++) : (r = l, 0 === er && ei(m)), r !== l)
                                                for (; r !== l;) n.push(r), h.test(t.charAt(X)) ? (r = t.charAt(X), X++) : (r = l, 0 === er && ei(m));
                                            else n = l;
                                            n !== l && (n = t.substring(e, X)), e = n
                                        }
                                        return e
                                    }()) !== l) {
                                    if (ed() !== l) {
                                        if (i = X, 44 === t.charCodeAt(X) ? (a = ",", X++) : (a = l, 0 === er && ei(_)), a !== l && (o = ed()) !== l && (s = function() {
                                                var e;
                                                return (e = function() {
                                                    var e, n, r, i, a, o, s;
                                                    if (e = X, t.substr(X, 6) === v ? (n = v, X += 6) : (n = l, 0 === er && ei(y)), n === l && (t.substr(X, 4) === E ? (n = E, X += 4) : (n = l, 0 === er && ei(S)), n === l && (t.substr(X, 4) === x ? (n = x, X += 4) : (n = l, 0 === er && ei(w)))), n !== l) {
                                                        if (ed() !== l) {
                                                            if (r = X, 44 === t.charCodeAt(X) ? (i = ",", X++) : (i = l, 0 === er && ei(_)), i !== l && (a = ed()) !== l && (o = eg()) !== l ? r = i = [i, a, o] : (X = r, r = l), r === l && (r = null), r !== l) {
                                                                ;
                                                                e = n = {
                                                                    type: n + "Format",
                                                                    style: (s = r) && s[2]
                                                                }
                                                            } else X = e, e = l
                                                        } else X = e, e = l
                                                    } else X = e, e = l;
                                                    return e
                                                }()) === l && (e = function() {
                                                    var e, n, r, i, a;
                                                    if (e = X, t.substr(X, 6) === T ? (n = T, X += 6) : (n = l, 0 === er && ei(C)), n !== l) {
                                                        if (ed() !== l) {
                                                            if (44 === t.charCodeAt(X) ? (r = ",", X++) : (r = l, 0 === er && ei(_)), r !== l) {
                                                                if (ed() !== l) {
                                                                    if ((i = ec()) !== l) {
                                                                        ;
                                                                        e = n = {
                                                                            type: (a = i).type,
                                                                            ordinal: !1,
                                                                            offset: a.offset || 0,
                                                                            options: a.options
                                                                        }
                                                                    } else X = e, e = l
                                                                } else X = e, e = l
                                                            } else X = e, e = l
                                                        } else X = e, e = l
                                                    } else X = e, e = l;
                                                    return e
                                                }()) === l && (e = function() {
                                                    var e, n, r, i, a;
                                                    if (e = X, t.substr(X, 13) === D ? (n = D, X += 13) : (n = l, 0 === er && ei(O)), n !== l) {
                                                        if (ed() !== l) {
                                                            if (44 === t.charCodeAt(X) ? (r = ",", X++) : (r = l, 0 === er && ei(_)), r !== l) {
                                                                if (ed() !== l) {
                                                                    if ((i = ec()) !== l) {
                                                                        ;
                                                                        e = n = {
                                                                            type: (a = i).type,
                                                                            ordinal: !0,
                                                                            offset: a.offset || 0,
                                                                            options: a.options
                                                                        }
                                                                    } else X = e, e = l
                                                                } else X = e, e = l
                                                            } else X = e, e = l
                                                        } else X = e, e = l
                                                    } else X = e, e = l;
                                                    return e
                                                }()) === l && (e = function() {
                                                    var e, n, r, i, a;
                                                    if (e = X, t.substr(X, 6) === M ? (n = M, X += 6) : (n = l, 0 === er && ei(A)), n !== l) {
                                                        if (ed() !== l) {
                                                            if (44 === t.charCodeAt(X) ? (r = ",", X++) : (r = l, 0 === er && ei(_)), r !== l) {
                                                                if (ed() !== l) {
                                                                    if (i = [], (a = eu()) !== l)
                                                                        for (; a !== l;) i.push(a), a = eu();
                                                                    else i = l;
                                                                    if (i !== l) e = n = {
                                                                        type: "selectFormat",
                                                                        options: i
                                                                    };
                                                                    else X = e, e = l
                                                                } else X = e, e = l
                                                            } else X = e, e = l
                                                        } else X = e, e = l
                                                    } else X = e, e = l;
                                                    return e
                                                }()), e
                                            }()) !== l ? i = a = [a, o, s] : (X = i, i = l), i === l && (i = null), i !== l) {
                                            if ((a = ed()) !== l) {
                                                if (125 === t.charCodeAt(X) ? (o = "}", X++) : (o = l, 0 === er && ei(b)), o !== l) {
                                                    ;
                                                    e = n = {
                                                        type: "argumentElement",
                                                        id: r,
                                                        format: (u = i) && u[2]
                                                    }
                                                } else X = e, e = l
                                            } else X = e, e = l
                                        } else X = e, e = l
                                    } else X = e, e = l
                                } else X = e, e = l
                            } else X = e, e = l
                        } else X = e, e = l;
                        return e
                    }()), e
                }

                function eu() {
                    var e, n, r, i, a, o, s, u, c, d;
                    if (e = X, (n = ed()) !== l) {
                        ;
                        if (s = X, u = X, 61 === t.charCodeAt(X) ? (c = "=", X++) : (c = l, 0 === er && ei(k)), c !== l && (d = eh()) !== l ? u = c = [c, d] : (X = u, u = l), u !== l && (u = t.substring(s, X)), (s = u) === l && (s = eg()), (r = s) !== l) {
                            if (ed() !== l) {
                                if (123 === t.charCodeAt(X) ? (i = "{", X++) : (i = l, 0 === er && ei(g)), i !== l) {
                                    if (ed() !== l) {
                                        if ((a = eo()) !== l) {
                                            if (ed() !== l) {
                                                if (125 === t.charCodeAt(X) ? (o = "}", X++) : (o = l, 0 === er && ei(b)), o !== l) e = n = {
                                                    type: "optionalFormatPattern",
                                                    selector: r,
                                                    value: a
                                                };
                                                else X = e, e = l
                                            } else X = e, e = l
                                        } else X = e, e = l
                                    } else X = e, e = l
                                } else X = e, e = l
                            } else X = e, e = l
                        } else X = e, e = l
                    } else X = e, e = l;
                    return e
                }

                function ec() {
                    var e, n, r, i;
                    if (e = X, (n = function() {
                            var e, n, r;
                            if (e = X, t.substr(X, 7) === R ? (n = R, X += 7) : (n = l, 0 === er && ei(N)), n !== l) {
                                if (ed() !== l) {
                                    if ((r = eh()) !== l) e = n = r;
                                    else X = e, e = l
                                } else X = e, e = l
                            } else X = e, e = l;
                            return e
                        }()) === l && (n = null), n !== l) {
                        if (ed() !== l) {
                            if (r = [], (i = eu()) !== l)
                                for (; i !== l;) r.push(i), i = eu();
                            else r = l;
                            if (r !== l) e = n = {
                                type: "pluralFormat",
                                offset: n,
                                options: r
                            };
                            else X = e, e = l
                        } else X = e, e = l
                    } else X = e, e = l;
                    return e
                }

                function el() {
                    var e, n;
                    if (er++, e = [], L.test(t.charAt(X)) ? (n = t.charAt(X), X++) : (n = l, 0 === er && ei(P)), n !== l)
                        for (; n !== l;) e.push(n), L.test(t.charAt(X)) ? (n = t.charAt(X), X++) : (n = l, 0 === er && ei(P));
                    else e = l;
                    return er--, e === l && (n = l, 0 === er && ei(I)), e
                }

                function ed() {
                    var e, n, r;
                    for (er++, e = X, n = [], r = el(); r !== l;) n.push(r), r = el();
                    return n !== l && (n = t.substring(e, X)), e = n, er--, e === l && (n = l, 0 === er && ei(F)), e
                }

                function ef() {
                    var e;
                    return B.test(t.charAt(X)) ? (e = t.charAt(X), X++) : (e = l, 0 === er && ei(U)), e
                }

                function ep() {
                    var e;
                    return Y.test(t.charAt(X)) ? (e = t.charAt(X), X++) : (e = l, 0 === er && ei(j)), e
                }

                function eh() {
                    var e, n, r, i, a, o;
                    if (e = X, 48 === t.charCodeAt(X) ? (n = "0", X++) : (n = l, 0 === er && ei(z)), n === l) {
                        if (n = X, r = X, H.test(t.charAt(X)) ? (i = t.charAt(X), X++) : (i = l, 0 === er && ei(G)), i !== l) {
                            for (a = [], o = ef(); o !== l;) a.push(o), o = ef();
                            a !== l ? r = i = [i, a] : (X = r, r = l)
                        } else X = r, r = l;
                        r !== l && (r = t.substring(n, X)), n = r
                    }
                    if (n !== l) n = parseInt(n, 10);
                    return e = n
                }

                function em() {
                    var e, n, r, i, a, o, s, u;
                    if (V.test(t.charAt(X)) ? (e = t.charAt(X), X++) : (e = l, 0 === er && ei($)), e === l && (e = X, "\\\\" === t.substr(X, 2) ? (n = "\\\\", X += 2) : (n = l, 0 === er && ei(W)), n !== l && (n = "\\"), (e = n) === l && (e = X, "\\#" === t.substr(X, 2) ? (n = "\\#", X += 2) : (n = l, 0 === er && ei(K)), n !== l && (n = "\\#"), (e = n) === l && (e = X, "\\{" === t.substr(X, 2) ? (n = "\\{", X += 2) : (n = l, 0 === er && ei(q)), n !== l && (n = "{"), (e = n) === l && (e = X, "\\}" === t.substr(X, 2) ? (n = "\\}", X += 2) : (n = l, 0 === er && ei(Q)), n !== l && (n = "}"), (e = n) === l))))) {
                        if (e = X, "\\u" === t.substr(X, 2) ? (n = "\\u", X += 2) : (n = l, 0 === er && ei(Z)), n !== l) {
                            if (r = X, i = X, (a = ep()) !== l && (o = ep()) !== l && (s = ep()) !== l && (u = ep()) !== l ? i = a = [a, o, s, u] : (X = i, i = l), i !== l && (i = t.substring(r, X)), (r = i) !== l) e = n = String.fromCharCode(parseInt(r, 16));
                            else X = e, e = l
                        } else X = e, e = l
                    }
                    return e
                }

                function eg() {
                    var e, t, n;
                    if (e = X, t = [], (n = em()) !== l)
                        for (; n !== l;) t.push(n), n = em();
                    else t = l;
                    if (t !== l) t = t.join("");
                    return e = t
                }
                if ((u = f()) !== l && X === t.length) return u;
                throw u !== l && X < t.length && ei({
                    type: "end",
                    description: "end of input"
                }), n = null, r = en, o = (J !== (a = i = et) && (J > a && (J = 0, ee = {
                    line: 1,
                    column: 1,
                    seenCR: !1
                }), ! function(e, n, r) {
                    var i, a;
                    for (i = n; i < r; i++) "\n" === (a = t.charAt(i)) ? (!e.seenCR && e.line++, e.column = 1, e.seenCR = !1) : "\r" === a || "\u2028" === a || "\u2029" === a ? (e.line++, e.column = 1, e.seenCR = !0) : (e.column++, e.seenCR = !1)
                }(ee, J, a), J = a), ee), s = i < t.length ? t.charAt(i) : null, null !== r && ! function(e) {
                    var t = 1;
                    for (e.sort(function(e, t) {
                            return e.description < t.description ? -1 : e.description > t.description ? 1 : 0
                        }); t < e.length;) e[t - 1] === e[t] ? e.splice(t, 1) : t++
                }(r), new e(null !== n ? n : function(e, t) {
                    var n, r, i = Array(e.length);
                    for (r = 0; r < e.length; r++) i[r] = e[r].description;
                    return n = e.length > 1 ? i.slice(0, -1).join(", ") + " or " + i[e.length - 1] : i[0], "Expected " + n + " but " + (t ? '"' + function(e) {
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
                }(r, s), r, s, i, o.line, o.column)
            }
        }
    }()
}