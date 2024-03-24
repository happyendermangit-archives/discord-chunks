function(e, t, n) {
    "use strict";
    n("70102"), n("781738"), n("424973"), n("843762");
    var r = n("831208");

    function a() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }
    var o = /^([a-z0-9.+-]+:)/i,
        i = /:[0-9]*$/,
        s = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
        u = ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])),
        l = ["%", "/", "?", ";", "#"].concat(u),
        c = ["/", "?", "#"],
        d = /^[+a-z0-9A-Z_-]{0,63}$/,
        f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        p = {
            javascript: !0,
            "javascript:": !0
        },
        m = {
            javascript: !0,
            "javascript:": !0
        },
        h = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        y = n("106504");

    function _(e, t, n) {
        if (e && "object" == typeof e && e instanceof a) return e;
        var r = new a;
        return r.parse(e, t, n), r
    }
    a.prototype.parse = function(e, t, n) {
        if ("string" != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
        var a = e.indexOf("?"),
            i = -1 !== a && a < e.indexOf("#") ? "?" : "#",
            _ = e.split(i);
        _[0] = _[0].replace(/\\/g, "/");
        var g = e = _.join(i);
        if (g = g.trim(), !n && 1 === e.split("#").length) {
            var v = s.exec(g);
            if (v) return this.path = g, this.href = g, this.pathname = v[1], v[2] ? (this.search = v[2], t ? this.query = y.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this
        }
        var b = o.exec(g);
        if (b) {
            var M = (b = b[0]).toLowerCase();
            this.protocol = M, g = g.substr(b.length)
        }
        if (n || b || g.match(/^\/\/[^@/]+@[^@/]+/)) {
            var w = "//" === g.substr(0, 2);
            w && !(b && m[b]) && (g = g.substr(2), this.slashes = !0)
        }
        if (!m[b] && (w || b && !h[b])) {
            for (var k, L, D = -1, T = 0; T < c.length; T++) {
                var S = g.indexOf(c[T]); - 1 !== S && (-1 === D || S < D) && (D = S)
            } - 1 !== (L = -1 === D ? g.lastIndexOf("@") : g.lastIndexOf("@", D)) && (k = g.slice(0, L), g = g.slice(L + 1), this.auth = decodeURIComponent(k)), D = -1;
            for (var T = 0; T < l.length; T++) {
                var S = g.indexOf(l[T]); - 1 !== S && (-1 === D || S < D) && (D = S)
            } - 1 === D && (D = g.length), this.host = g.slice(0, D), g = g.slice(D), this.parseHost(), this.hostname = this.hostname || "";
            var Y = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!Y) {
                for (var x = this.hostname.split(/\./), T = 0, O = x.length; T < O; T++) {
                    var E = x[T];
                    if (E && !E.match(d)) {
                        for (var P = "", j = 0, C = E.length; j < C; j++) E.charCodeAt(j) > 127 ? P += "x" : P += E[j];
                        if (!P.match(d)) {
                            var A = x.slice(0, T),
                                F = x.slice(T + 1),
                                H = E.match(f);
                            H && (A.push(H[1]), F.unshift(H[2])), F.length && (g = "/" + F.join(".") + g), this.hostname = A.join(".");
                            break
                        }
                    }
                }
            }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !Y && (this.hostname = r.toASCII(this.hostname));
            var I = this.port ? ":" + this.port : "",
                N = this.hostname || "";
            this.host = N + I, this.href += this.host, Y && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== g[0] && (g = "/" + g))
        }
        if (!p[M])
            for (var T = 0, O = u.length; T < O; T++) {
                var R = u[T];
                if (-1 !== g.indexOf(R)) {
                    var z = encodeURIComponent(R);
                    z === R && (z = escape(R)), g = g.split(R).join(z)
                }
            }
        var W = g.indexOf("#"); - 1 !== W && (this.hash = g.substr(W), g = g.slice(0, W));
        var B = g.indexOf("?");
        if (-1 !== B ? (this.search = g.substr(B), this.query = g.substr(B + 1), t && (this.query = y.parse(this.query)), g = g.slice(0, B)) : t && (this.search = "", this.query = {}), g && (this.pathname = g), h[M] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            var I = this.pathname || "",
                U = this.search || "";
            this.path = I + U
        }
        return this.href = this.format(), this
    };
    a.prototype.format = function() {
        var e = this.auth || "";
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":") + "@");
        var t = this.protocol || "",
            n = this.pathname || "",
            r = this.hash || "",
            a = !1,
            o = "";
        this.host ? a = e + this.host : this.hostname && (a = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (a += ":" + this.port)), this.query && "object" == typeof this.query && Object.keys(this.query).length && (o = y.stringify(this.query, {
            arrayFormat: "repeat",
            addQueryPrefix: !1
        }));
        var i = this.search || o && "?" + o || "";
        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || h[t]) && !1 !== a ? (a = "//" + (a || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : !a && (a = ""), r && "#" !== r.charAt(0) && (r = "#" + r), i && "?" !== i.charAt(0) && (i = "?" + i), n = n.replace(/[?#]/g, function(e) {
            return encodeURIComponent(e)
        }), t + a + n + (i = i.replace("#", "%23")) + r
    };
    a.prototype.resolve = function(e) {
        return this.resolveObject(_(e, !1, !0)).format()
    };
    a.prototype.resolveObject = function(e) {
        if ("string" == typeof e) {
            var t = new a;
            t.parse(e, !1, !0), e = t
        }
        for (var n = new a, r = Object.keys(this), o = 0; o < r.length; o++) {
            var i = r[o];
            n[i] = this[i]
        }
        if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
        if (e.slashes && !e.protocol) {
            for (var s = Object.keys(e), u = 0; u < s.length; u++) {
                var l = s[u];
                "protocol" !== l && (n[l] = e[l])
            }
            return h[n.protocol] && n.hostname && !n.pathname && (n.pathname = "/", n.path = n.pathname), n.href = n.format(), n
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!h[e.protocol]) {
                for (var c = Object.keys(e), d = 0; d < c.length; d++) {
                    var f = c[d];
                    n[f] = e[f]
                }
                return n.href = n.format(), n
            }
            if (n.protocol = e.protocol, e.host || m[e.protocol]) n.pathname = e.pathname;
            else {
                for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()););
                !e.host && (e.host = ""), !e.hostname && (e.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), n.pathname = p.join("/")
            }
            if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                var y = n.pathname || "",
                    _ = n.search || "";
                n.path = y + _
            }
            return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
        }
        var g = n.pathname && "/" === n.pathname.charAt(0),
            v = e.host || e.pathname && "/" === e.pathname.charAt(0),
            b = v || g || n.host && e.pathname,
            M = b,
            w = n.pathname && n.pathname.split("/") || [],
            p = e.pathname && e.pathname.split("/") || [],
            k = n.protocol && !h[n.protocol];
        if (k && (n.hostname = "", n.port = null, n.host && ("" === w[0] ? w[0] = n.host : w.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), b = b && ("" === p[0] || "" === w[0])), v) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, w = p;
        else if (p.length) !w && (w = []), w.pop(), w = w.concat(p), n.search = e.search, n.query = e.query;
        else if (null != e.search) {
            if (k) {
                n.host = w.shift(), n.hostname = n.host;
                var L = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                L && (n.auth = L.shift(), n.hostname = L.shift(), n.host = n.hostname)
            }
            return n.search = e.search, n.query = e.query, (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
        }
        if (!w.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
        for (var D = w.slice(-1)[0], T = (n.host || e.host || w.length > 1) && ("." === D || ".." === D) || "" === D, S = 0, Y = w.length; Y >= 0; Y--) "." === (D = w[Y]) ? w.splice(Y, 1) : ".." === D ? (w.splice(Y, 1), S++) : S && (w.splice(Y, 1), S--);
        if (!b && !M)
            for (; S--; S) w.unshift("..");
        b && "" !== w[0] && (!w[0] || "/" !== w[0].charAt(0)) && w.unshift(""), T && "/" !== w.join("/").substr(-1) && w.push("");
        var x = "" === w[0] || w[0] && "/" === w[0].charAt(0);
        if (k) {
            n.hostname = x ? "" : w.length ? w.shift() : "", n.host = n.hostname;
            var L = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
            L && (n.auth = L.shift(), n.hostname = L.shift(), n.host = n.hostname)
        }
        return (b = b || n.host && w.length) && !x && w.unshift(""), w.length > 0 ? n.pathname = w.join("/") : (n.pathname = null, n.path = null), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
    }, a.prototype.parseHost = function() {
        var e = this.host,
            t = i.exec(e);
        t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
    }, t.parse = _, t.resolve = function(e, t) {
        return _(e, !1, !0).resolve(t)
    }, t.resolveObject = function(e, t) {
        return e ? _(e, !1, !0).resolveObject(t) : t
    }, t.format = function(e) {
        return ("string" == typeof e && (e = _(e)), e instanceof a) ? e.format() : a.prototype.format.call(e)
    }, t.Url = a
}