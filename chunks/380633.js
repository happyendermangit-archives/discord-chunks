function(t, r, e) {
    "use strict";
    e("414889");
    var n, o = e("859514"),
        i = e("814026"),
        a = e("768897"),
        u = e("503486"),
        s = e("886639"),
        f = e("64980"),
        c = e("484784"),
        l = e("18563"),
        h = e("88052"),
        p = e("59393"),
        v = e("862799"),
        d = e("753580"),
        g = e("355540"),
        b = e("696397").codeAt,
        y = e("682714"),
        m = e("998270"),
        w = e("89157"),
        _ = e("79807"),
        k = e("753062"),
        x = e("515011"),
        E = x.set,
        S = x.getterFor("URL"),
        URLSearchParams = k.URLSearchParams,
        M = k.getState,
        R = u.URL,
        TypeError = u.TypeError,
        O = u.parseInt,
        j = Math.floor,
        A = Math.pow,
        N = f("".charAt),
        P = f(/./.exec),
        I = f([].join),
        q = f(1..toString),
        U = f([].pop),
        L = f([].push),
        B = f("".replace),
        T = f([].shift),
        C = f("".split),
        z = f("".slice),
        D = f("".toLowerCase),
        F = f([].unshift),
        H = "Invalid scheme",
        Z = "Invalid host",
        $ = "Invalid port",
        G = /[a-z]/i,
        J = /[\d+-.a-z]/i,
        V = /\d/,
        Y = /^0x/i,
        W = /^[0-7]+$/,
        X = /^\d+$/,
        Q = /^[\da-f]+$/i,
        K = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
        tt = /[\0\t\n\r #/:<>?@[\\\]^|]/,
        tr = /^[\u0000-\u0020]+/,
        te = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
        tn = /[\t\n\r]/g,
        to = function(t) {
            var r, e, n, o, i, a, u, s = C(t, ".");
            if (s.length && "" === s[s.length - 1] && s.length--, (r = s.length) > 4) return t;
            for (n = 0, e = []; n < r; n++) {
                if ("" === (o = s[n])) return t;
                if (i = 10, o.length > 1 && "0" === N(o, 0) && (i = P(Y, o) ? 16 : 8, o = z(o, 8 === i ? 1 : 2)), "" === o) a = 0;
                else {
                    if (!P(10 === i ? X : 8 === i ? W : Q, o)) return t;
                    a = O(o, i)
                }
                L(e, a)
            }
            for (n = 0; n < r; n++)
                if (a = e[n], n === r - 1) {
                    if (a >= A(256, 5 - r)) return null
                } else if (a > 255) return null;
            for (n = 0, u = U(e); n < e.length; n++) u += e[n] * A(256, 3 - n);
            return u
        },
        ti = function(t) {
            var r, e, n, o, i, a, u, s = [0, 0, 0, 0, 0, 0, 0, 0],
                f = 0,
                c = null,
                l = 0,
                h = function() {
                    return N(t, l)
                };
            if (":" === h()) {
                if (":" !== N(t, 1)) return;
                l += 2, c = ++f
            }
            for (; h();) {
                if (8 === f) return;
                if (":" === h()) {
                    if (null !== c) return;
                    l++, c = ++f;
                    continue
                }
                for (r = e = 0; e < 4 && P(Q, h());) r = 16 * r + O(h(), 16), l++, e++;
                if ("." === h()) {
                    if (0 === e) return;
                    if (l -= e, f > 6) return;
                    for (n = 0; h();) {
                        if (o = null, n > 0) {
                            if ("." !== h() || !(n < 4)) return;
                            l++
                        }
                        if (!P(V, h())) return;
                        for (; P(V, h());) {
                            if (i = O(h(), 10), null === o) o = i;
                            else {
                                if (0 === o) return;
                                o = 10 * o + i
                            }
                            if (o > 255) return;
                            l++
                        }
                        s[f] = 256 * s[f] + o, (2 == ++n || 4 === n) && f++
                    }
                    if (4 !== n) return;
                    break
                }
                if (":" === h()) {
                    if (l++, !h()) return
                } else if (h()) return;
                s[f++] = r
            }
            if (null !== c)
                for (a = f - c, f = 7; 0 !== f && a > 0;) u = s[f], s[f--] = s[c + a - 1], s[c + --a] = u;
            else if (8 !== f) return;
            return s
        },
        ta = function(t) {
            for (var r = null, e = 1, n = null, o = 0, i = 0; i < 8; i++) 0 !== t[i] ? (o > e && (r = n, e = o), n = null, o = 0) : (null === n && (n = i), ++o);
            return o > e && (r = n, e = o), r
        },
        tu = function(t) {
            var r, e, n, o;
            if ("number" == typeof t) {
                for (e = 0, r = []; e < 4; e++) F(r, t % 256), t = j(t / 256);
                return I(r, ".")
            }
            if ("object" == typeof t) {
                for (e = 0, r = "", n = ta(t); e < 8; e++)(!o || 0 !== t[e]) && (o && (o = !1), n === e ? (r += e ? ":" : "::", o = !0) : (r += q(t[e], 16), e < 7 && (r += ":")));
                return "[" + r + "]"
            }
            return t
        },
        ts = {},
        tf = v({}, ts, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
        }),
        tc = v({}, tf, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
        }),
        tl = v({}, tc, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
        }),
        th = function(t, r) {
            var e = b(t, 0);
            return e > 32 && e < 127 && !p(r, t) ? t : encodeURIComponent(t)
        },
        tp = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        },
        tv = function(t, r) {
            var e;
            return 2 === t.length && P(G, N(t, 0)) && (":" === (e = N(t, 1)) || !r && "|" === e)
        },
        td = function(t) {
            var r;
            return t.length > 1 && tv(z(t, 0, 2)) && (2 === t.length || "/" === (r = N(t, 2)) || "\\" === r || "?" === r || "#" === r)
        },
        tg = {},
        tb = {},
        ty = {},
        tm = {},
        tw = {},
        t_ = {},
        tk = {},
        tx = {},
        tE = {},
        tS = {},
        tM = {},
        tR = {},
        tO = {},
        tj = {},
        tA = {},
        tN = {},
        tP = {},
        tI = {},
        tq = {},
        tU = {},
        tL = {},
        tB = function(t, r, e) {
            var n, o, i, a = m(t);
            if (r) {
                if (o = this.parse(a)) throw TypeError(o);
                this.searchParams = null
            } else {
                if (void 0 !== e && (n = new tB(e, !0)), o = this.parse(a, null, n)) throw TypeError(o);
                (i = M(new URLSearchParams)).bindURL(this), this.searchParams = i
            }
        };
    tB.prototype = {
        type: "URL",
        parse: function(t, r, e) {
            var o = r || tg,
                i = 0,
                a = "",
                u = !1,
                s = !1,
                f = !1;
            for (t = m(t), !r && (this.scheme = "", this.username = "", this.password = "", this.host = null, this.port = null, this.path = [], this.query = null, this.fragment = null, this.cannotBeABaseURL = !1, t = B(t, tr, ""), t = B(t, te, "$1")), c = d(t = B(t, tn, "")); i <= c.length;) {
                switch (l = c[i], o) {
                    case tg:
                        if (l && P(G, l)) a += D(l), o = tb;
                        else {
                            if (r) return H;
                            o = ty;
                            continue
                        }
                        break;
                    case tb:
                        if (l && (P(J, l) || "+" === l || "-" === l || "." === l)) a += D(l);
                        else if (":" === l) {
                            if (r && (this.isSpecial() !== p(tp, a) || "file" === a && (this.includesCredentials() || null !== this.port) || "file" === this.scheme && !this.host)) return;
                            if (this.scheme = a, r) {
                                this.isSpecial() && tp[this.scheme] === this.port && (this.port = null);
                                return
                            }
                            a = "", "file" === this.scheme ? o = tj : this.isSpecial() && e && e.scheme === this.scheme ? o = tm : this.isSpecial() ? o = tx : "/" === c[i + 1] ? (o = tw, i++) : (this.cannotBeABaseURL = !0, L(this.path, ""), o = tq)
                        } else {
                            if (r) return H;
                            a = "", o = ty, i = 0;
                            continue
                        }
                        break;
                    case ty:
                        if (!e || e.cannotBeABaseURL && "#" !== l) return H;
                        if (e.cannotBeABaseURL && "#" === l) {
                            this.scheme = e.scheme, this.path = g(e.path), this.query = e.query, this.fragment = "", this.cannotBeABaseURL = !0, o = tL;
                            break
                        }
                        o = "file" === e.scheme ? tj : t_;
                        continue;
                    case tm:
                        if ("/" === l && "/" === c[i + 1]) o = tE, i++;
                        else {
                            o = t_;
                            continue
                        }
                        break;
                    case tw:
                        if ("/" === l) {
                            o = tS;
                            break
                        }
                        o = tI;
                        continue;
                    case t_:
                        if (this.scheme = e.scheme, l === n) this.username = e.username, this.password = e.password, this.host = e.host, this.port = e.port, this.path = g(e.path), this.query = e.query;
                        else if ("/" === l || "\\" === l && this.isSpecial()) o = tk;
                        else if ("?" === l) this.username = e.username, this.password = e.password, this.host = e.host, this.port = e.port, this.path = g(e.path), this.query = "", o = tU;
                        else if ("#" === l) this.username = e.username, this.password = e.password, this.host = e.host, this.port = e.port, this.path = g(e.path), this.query = e.query, this.fragment = "", o = tL;
                        else {
                            this.username = e.username, this.password = e.password, this.host = e.host, this.port = e.port, this.path = g(e.path), this.path.length--, o = tI;
                            continue
                        }
                        break;
                    case tk:
                        if (this.isSpecial() && ("/" === l || "\\" === l)) o = tE;
                        else if ("/" === l) o = tS;
                        else {
                            this.username = e.username, this.password = e.password, this.host = e.host, this.port = e.port, o = tI;
                            continue
                        }
                        break;
                    case tx:
                        if (o = tE, "/" !== l || "/" !== N(a, i + 1)) continue;
                        i++;
                        break;
                    case tE:
                        if ("/" !== l && "\\" !== l) {
                            o = tS;
                            continue
                        }
                        break;
                    case tS:
                        if ("@" === l) {
                            u && (a = "%40" + a), u = !0, h = d(a);
                            for (var c, l, h, v, b, y, w = 0; w < h.length; w++) {
                                var _ = h[w];
                                if (":" === _ && !f) {
                                    f = !0;
                                    continue
                                }
                                var k = th(_, tl);
                                f ? this.password += k : this.username += k
                            }
                            a = ""
                        } else if (l === n || "/" === l || "?" === l || "#" === l || "\\" === l && this.isSpecial()) {
                            if (u && "" === a) return "Invalid authority";
                            i -= d(a).length + 1, a = "", o = tM
                        } else a += l;
                        break;
                    case tM:
                    case tR:
                        if (r && "file" === this.scheme) {
                            o = tN;
                            continue
                        }
                        if (":" !== l || s) {
                            if (l === n || "/" === l || "?" === l || "#" === l || "\\" === l && this.isSpecial()) {
                                if (this.isSpecial() && "" === a) return Z;
                                if (r && "" === a && (this.includesCredentials() || null !== this.port)) return;
                                if (v = this.parseHost(a)) return v;
                                if (a = "", o = tP, r) return;
                                continue
                            } else "[" === l ? s = !0 : "]" === l && (s = !1), a += l
                        } else {
                            if ("" === a) return Z;
                            if (v = this.parseHost(a)) return v;
                            if (a = "", o = tO, r === tR) return
                        }
                        break;
                    case tO:
                        if (P(V, l)) a += l;
                        else {
                            if (!(l === n || "/" === l || "?" === l || "#" === l || "\\" === l && this.isSpecial()) && !r) return $;
                            if ("" !== a) {
                                var x = O(a, 10);
                                if (x > 65535) return $;
                                this.port = this.isSpecial() && x === tp[this.scheme] ? null : x, a = ""
                            }
                            if (r) return;
                            o = tP;
                            continue
                        }
                        break;
                    case tj:
                        if (this.scheme = "file", "/" === l || "\\" === l) o = tA;
                        else if (e && "file" === e.scheme) switch (l) {
                            case n:
                                this.host = e.host, this.path = g(e.path), this.query = e.query;
                                break;
                            case "?":
                                this.host = e.host, this.path = g(e.path), this.query = "", o = tU;
                                break;
                            case "#":
                                this.host = e.host, this.path = g(e.path), this.query = e.query, this.fragment = "", o = tL;
                                break;
                            default:
                                !td(I(g(c, i), "")) && (this.host = e.host, this.path = g(e.path), this.shortenPath()), o = tI;
                                continue
                        } else {
                            o = tI;
                            continue
                        }
                        break;
                    case tA:
                        if ("/" === l || "\\" === l) {
                            o = tN;
                            break
                        }
                        e && "file" === e.scheme && !td(I(g(c, i), "")) && (tv(e.path[0], !0) ? L(this.path, e.path[0]) : this.host = e.host), o = tI;
                        continue;
                    case tN:
                        if (l === n || "/" === l || "\\" === l || "?" === l || "#" === l) {
                            if (!r && tv(a)) o = tI;
                            else if ("" === a) {
                                if (this.host = "", r) return;
                                o = tP
                            } else {
                                if (v = this.parseHost(a)) return v;
                                if ("localhost" === this.host && (this.host = ""), r) return;
                                a = "", o = tP
                            }
                            continue
                        }
                        a += l;
                        break;
                    case tP:
                        if (this.isSpecial()) {
                            if (o = tI, "/" !== l && "\\" !== l) continue
                        } else if (r || "?" !== l) {
                            if (r || "#" !== l) {
                                if (l !== n && (o = tI, "/" !== l)) continue
                            } else this.fragment = "", o = tL
                        } else this.query = "", o = tU;
                        break;
                    case tI:
                        if (l === n || "/" === l || "\\" === l && this.isSpecial() || !r && ("?" === l || "#" === l)) {
                            ;
                            if (".." === (b = D(b = a)) || "%2e." === b || ".%2e" === b || "%2e%2e" === b) this.shortenPath(), "/" !== l && !("\\" === l && this.isSpecial()) && L(this.path, "");
                            else {
                                ;
                                if ("." === (y = a) || "%2e" === D(y)) "/" !== l && !("\\" === l && this.isSpecial()) && L(this.path, "");
                                else "file" === this.scheme && !this.path.length && tv(a) && (this.host && (this.host = ""), a = N(a, 0) + ":"), L(this.path, a)
                            }
                            if (a = "", "file" === this.scheme && (l === n || "?" === l || "#" === l))
                                for (; this.path.length > 1 && "" === this.path[0];) T(this.path);
                            "?" === l ? (this.query = "", o = tU) : "#" === l && (this.fragment = "", o = tL)
                        } else a += th(l, tc);
                        break;
                    case tq:
                        "?" === l ? (this.query = "", o = tU) : "#" === l ? (this.fragment = "", o = tL) : l !== n && (this.path[0] += th(l, ts));
                        break;
                    case tU:
                        r || "#" !== l ? l !== n && ("'" === l && this.isSpecial() ? this.query += "%27" : "#" === l ? this.query += "%23" : this.query += th(l, ts)) : (this.fragment = "", o = tL);
                        break;
                    case tL:
                        l !== n && (this.fragment += th(l, tf))
                }
                i++
            }
        },
        parseHost: function(t) {
            var r, e, n;
            if ("[" === N(t, 0)) {
                if ("]" !== N(t, t.length - 1) || !(r = ti(z(t, 1, -1)))) return Z;
                this.host = r
            } else if (this.isSpecial()) {
                if (P(K, t = y(t)) || null === (r = to(t))) return Z;
                this.host = r
            } else {
                if (P(tt, t)) return Z;
                for (n = 0, r = "", e = d(t); n < e.length; n++) r += th(e[n], ts);
                this.host = r
            }
        },
        cannotHaveUsernamePasswordPort: function() {
            return !this.host || this.cannotBeABaseURL || "file" === this.scheme
        },
        includesCredentials: function() {
            return "" !== this.username || "" !== this.password
        },
        isSpecial: function() {
            return p(tp, this.scheme)
        },
        shortenPath: function() {
            var t = this.path,
                r = t.length;
            r && ("file" !== this.scheme || 1 !== r || !tv(t[0], !0)) && t.length--
        },
        serialize: function() {
            var t = this.scheme,
                r = this.username,
                e = this.password,
                n = this.host,
                o = this.port,
                i = this.path,
                a = this.query,
                u = this.fragment,
                s = t + ":";
            return null !== n ? (s += "//", this.includesCredentials() && (s += r + (e ? ":" + e : "") + "@"), s += tu(n), null !== o && (s += ":" + o)) : "file" === t && (s += "//"), s += this.cannotBeABaseURL ? i[0] : i.length ? "/" + I(i, "/") : "", null !== a && (s += "?" + a), null !== u && (s += "#" + u), s
        },
        setHref: function(t) {
            var r = this.parse(t);
            if (r) throw TypeError(r);
            this.searchParams.update()
        },
        getOrigin: function() {
            var t = this.scheme,
                r = this.port;
            if ("blob" === t) try {
                return new tT(t.path[0]).origin
            } catch (t) {
                return "null"
            }
            return "file" !== t && this.isSpecial() ? t + "://" + tu(this.host) + (null !== r ? ":" + r : "") : "null"
        },
        getProtocol: function() {
            return this.scheme + ":"
        },
        setProtocol: function(t) {
            this.parse(m(t) + ":", tg)
        },
        getUsername: function() {
            return this.username
        },
        setUsername: function(t) {
            var r = d(m(t));
            if (!this.cannotHaveUsernamePasswordPort()) {
                this.username = "";
                for (var e = 0; e < r.length; e++) this.username += th(r[e], tl)
            }
        },
        getPassword: function() {
            return this.password
        },
        setPassword: function(t) {
            var r = d(m(t));
            if (!this.cannotHaveUsernamePasswordPort()) {
                this.password = "";
                for (var e = 0; e < r.length; e++) this.password += th(r[e], tl)
            }
        },
        getHost: function() {
            var t = this.host,
                r = this.port;
            return null === t ? "" : null === r ? tu(t) : tu(t) + ":" + r
        },
        setHost: function(t) {
            !this.cannotBeABaseURL && this.parse(t, tM)
        },
        getHostname: function() {
            var t = this.host;
            return null === t ? "" : tu(t)
        },
        setHostname: function(t) {
            !this.cannotBeABaseURL && this.parse(t, tR)
        },
        getPort: function() {
            var t = this.port;
            return null === t ? "" : m(t)
        },
        setPort: function(t) {
            !this.cannotHaveUsernamePasswordPort() && ("" === (t = m(t)) ? this.port = null : this.parse(t, tO))
        },
        getPathname: function() {
            var t = this.path;
            return this.cannotBeABaseURL ? t[0] : t.length ? "/" + I(t, "/") : ""
        },
        setPathname: function(t) {
            !this.cannotBeABaseURL && (this.path = [], this.parse(t, tP))
        },
        getSearch: function() {
            var t = this.query;
            return t ? "?" + t : ""
        },
        setSearch: function(t) {
            "" === (t = m(t)) ? this.query = null: ("?" === N(t, 0) && (t = z(t, 1)), this.query = "", this.parse(t, tU)), this.searchParams.update()
        },
        getSearchParams: function() {
            return this.searchParams.facade
        },
        getHash: function() {
            var t = this.fragment;
            return t ? "#" + t : ""
        },
        setHash: function(t) {
            if ("" === (t = m(t))) {
                this.fragment = null;
                return
            }
            "#" === N(t, 0) && (t = z(t, 1)), this.fragment = "", this.parse(t, tL)
        },
        update: function() {
            this.query = this.searchParams.serialize() || null
        }
    };
    var tT = function(t) {
            var r = h(this, tC),
                e = _(arguments.length, 1) > 1 ? arguments[1] : void 0,
                n = E(r, new tB(t, !1, e));
            !i && (r.href = n.serialize(), r.origin = n.getOrigin(), r.protocol = n.getProtocol(), r.username = n.getUsername(), r.password = n.getPassword(), r.host = n.getHost(), r.hostname = n.getHostname(), r.port = n.getPort(), r.pathname = n.getPathname(), r.search = n.getSearch(), r.searchParams = n.getSearchParams(), r.hash = n.getHash())
        },
        tC = tT.prototype,
        tz = function(t, r) {
            return {
                get: function() {
                    return S(this)[t]()
                },
                set: r && function(t) {
                    return S(this)[r](t)
                },
                configurable: !0,
                enumerable: !0
            }
        };
    if (i && (l(tC, "href", tz("serialize", "setHref")), l(tC, "origin", tz("getOrigin")), l(tC, "protocol", tz("getProtocol", "setProtocol")), l(tC, "username", tz("getUsername", "setUsername")), l(tC, "password", tz("getPassword", "setPassword")), l(tC, "host", tz("getHost", "setHost")), l(tC, "hostname", tz("getHostname", "setHostname")), l(tC, "port", tz("getPort", "setPort")), l(tC, "pathname", tz("getPathname", "setPathname")), l(tC, "search", tz("getSearch", "setSearch")), l(tC, "searchParams", tz("getSearchParams")), l(tC, "hash", tz("getHash", "setHash"))), c(tC, "toJSON", function() {
            return S(this).serialize()
        }, {
            enumerable: !0
        }), c(tC, "toString", function() {
            return S(this).serialize()
        }, {
            enumerable: !0
        }), R) {
        var tD = R.createObjectURL,
            tF = R.revokeObjectURL;
        tD && c(tT, "createObjectURL", s(tD, R)), tF && c(tT, "revokeObjectURL", s(tF, R))
    }
    w(tT, "URL"), o({
        global: !0,
        constructor: !0,
        forced: !a,
        sham: !i
    }, {
        URL: tT
    })
}