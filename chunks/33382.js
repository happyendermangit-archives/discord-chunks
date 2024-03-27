function(e, t, n) {
    var r = n("660566");
    e.exports = f, e.exports.parse = a, e.exports.compile = function(e, t) {
        return s(a(e, t))
    }, e.exports.tokensToFunction = s, e.exports.tokensToRegExp = d;
    var i = RegExp("(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))", "g");

    function a(e, t) {
        for (var n, r = [], a = 0, o = 0, s = "", c = t && t.delimiter || "/"; null != (n = i.exec(e));) {
            var l = n[0],
                d = n[1],
                f = n.index;
            if (s += e.slice(o, f), o = f + l.length, d) {
                s += d[1];
                continue
            }
            var p = e[o],
                h = n[2],
                m = n[3],
                g = n[4],
                _ = n[5],
                b = n[6],
                v = n[7];
            s && (r.push(s), s = "");
            var y = null != h && null != p && p !== h,
                E = "+" === b || "*" === b,
                S = "?" === b || "*" === b,
                x = n[2] || c,
                w = g || _;
            r.push({
                name: m || a++,
                prefix: h || "",
                delimiter: x,
                optional: S,
                repeat: E,
                partial: y,
                asterisk: !!v,
                pattern: w ? function(e) {
                    return e.replace(/([=!:$\/()])/g, "\\$1")
                }(w) : v ? ".*" : "[^" + u(x) + "]+?"
            })
        }
        return o < e.length && (s += e.substr(o)), s && r.push(s), r
    }

    function o(e) {
        return encodeURI(e).replace(/[\/?#]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }

    function s(e) {
        for (var t = Array(e.length), n = 0; n < e.length; n++) "object" == typeof e[n] && (t[n] = RegExp("^(?:" + e[n].pattern + ")$"));
        return function(n, i) {
            for (var a = "", s = n || {}, u = (i || {}).pretty ? o : encodeURIComponent, c = 0; c < e.length; c++) {
                var l, d = e[c];
                if ("string" == typeof d) {
                    a += d;
                    continue
                }
                var f = s[d.name];
                if (null == f) {
                    if (d.optional) {
                        d.partial && (a += d.prefix);
                        continue
                    }
                    throw TypeError('Expected "' + d.name + '" to be defined')
                }
                if (r(f)) {
                    if (!d.repeat) throw TypeError('Expected "' + d.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                    if (0 === f.length) {
                        if (d.optional) continue;
                        throw TypeError('Expected "' + d.name + '" to not be empty')
                    }
                    for (var p = 0; p < f.length; p++) {
                        if (l = u(f[p]), !t[c].test(l)) throw TypeError('Expected all "' + d.name + '" to match "' + d.pattern + '", but received `' + JSON.stringify(l) + "`");
                        a += (0 === p ? d.prefix : d.delimiter) + l
                    }
                    continue
                }
                if (l = d.asterisk ? encodeURI(f).replace(/[?#]/g, function(e) {
                        return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                    }) : u(f), !t[c].test(l)) throw TypeError('Expected "' + d.name + '" to match "' + d.pattern + '", but received "' + l + '"');
                a += d.prefix + l
            }
            return a
        }
    }

    function u(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
    }

    function c(e, t) {
        return e.keys = t, e
    }

    function l(e) {
        return e.sensitive ? "" : "i"
    }

    function d(e, t, n) {
        !r(t) && (n = t || n, t = []);
        for (var i, a, o = (n = n || {}).strict, s = !1 !== n.end, c = "", d = 0; d < e.length; d++) {
            var f = e[d];
            if ("string" == typeof f) c += u(f);
            else {
                var p = u(f.prefix),
                    h = "(?:" + f.pattern + ")";
                t.push(f), f.repeat && (h += "(?:" + p + h + ")*"), c += h = f.optional ? f.partial ? p + "(" + h + ")?" : "(?:" + p + "(" + h + "))?" : p + "(" + h + ")"
            }
        }
        var m = u(n.delimiter || "/"),
            g = c.slice(-m.length) === m;
        return !o && (c = (g ? c.slice(0, -m.length) : c) + "(?:" + m + "(?=$))?"), s ? c += "$" : c += o && g ? "" : "(?=" + m + "|$)", i = RegExp("^" + c, l(n)), a = t, i.keys = a, i
    }

    function f(e, t, n) {
        var i, o, s;
        if (!r(t) && (n = t || n, t = []), n = n || {}, e instanceof RegExp) return function(e, t) {
            var n, r, i = e.source.match(/\((?!\?)/g);
            if (i)
                for (var a = 0; a < i.length; a++) t.push({
                    name: a,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null
                });
            return n = e, r = t, n.keys = r, n
        }(e, t);
        if (r(e)) return function(e, t, n) {
            for (var r, i, a = [], o = 0; o < e.length; o++) a.push(f(e[o], t, n).source);
            return r = RegExp("(?:" + a.join("|") + ")", l(n)), i = t, r.keys = i, r
        }(e, t, n);
        return i = e, o = t, d(a(i, s = n), o, s)
    }
}