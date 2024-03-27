function(e, t) {
    t.parse = function(e, t) {
        if ("string" != typeof e) throw TypeError("argument str must be a string");
        var r = {},
            a = e.split(i),
            o = (t || {}).decode || n;
        return a.forEach(function(e) {
            var t = e.indexOf("=");
            if (!(t < 0)) {
                var n = e.substr(0, t).trim(),
                    i = e.substr(++t, e.length).trim();
                '"' == i[0] && (i = i.slice(1, -1)), void 0 == r[n] && (r[n] = function(e, t) {
                    try {
                        return t(e)
                    } catch (t) {
                        return e
                    }
                }(i, o))
            }
        }), r
    }, t.serialize = function(e, t, n) {
        var i = n || {},
            o = i.encode || r;
        if (!a.test(e)) throw TypeError("argument name is invalid");
        var s = o(t);
        if (s && !a.test(s)) throw TypeError("argument val is invalid");
        var u = [e + "=" + s];
        if (null != i.maxAge) {
            var c = i.maxAge - 0;
            if (isNaN(c)) throw Error("maxAge should be a Number");
            u.push("Max-Age=" + Math.floor(c))
        }
        if (i.domain) {
            if (!a.test(i.domain)) throw TypeError("option domain is invalid");
            u.push("Domain=" + i.domain)
        }
        if (i.path) {
            if (!a.test(i.path)) throw TypeError("option path is invalid");
            u.push("Path=" + i.path)
        }
        return i.expires && u.push("Expires=" + i.expires.toUTCString()), i.httpOnly && u.push("HttpOnly"), i.secure && u.push("Secure"), i.firstPartyOnly && u.push("First-Party-Only"), u.join("; ")
    };
    var n = decodeURIComponent,
        r = encodeURIComponent,
        i = /; */,
        a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
}