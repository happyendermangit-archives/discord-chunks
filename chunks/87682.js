function(e, t, r) {
    var n = r("390493");
    "use strict";

    function u(e) {
        if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
    }

    function a(e, t) {
        for (var r, n = "", u = 0, a = -1, o = 0, i = 0; i <= e.length; ++i) {
            if (i < e.length) r = e.charCodeAt(i);
            else if (47 === r) break;
            else r = 47;
            if (47 === r) {
                if (a === i - 1 || 1 === o);
                else if (a !== i - 1 && 2 === o) {
                    if (n.length < 2 || 2 !== u || 46 !== n.charCodeAt(n.length - 1) || 46 !== n.charCodeAt(n.length - 2)) {
                        if (n.length > 2) {
                            var s = n.lastIndexOf("/");
                            if (s !== n.length - 1) {
                                -1 === s ? (n = "", u = 0) : u = (n = n.slice(0, s)).length - 1 - n.lastIndexOf("/"), a = i, o = 0;
                                continue
                            }
                        } else if (2 === n.length || 1 === n.length) {
                            n = "", u = 0, a = i, o = 0;
                            continue
                        }
                    }
                    t && (n.length > 0 ? n += "/.." : n = "..", u = 2)
                } else n.length > 0 ? n += "/" + e.slice(a + 1, i) : n = e.slice(a + 1, i), u = i - a - 1;
                a = i, o = 0
            } else 46 === r && -1 !== o ? ++o : o = -1
        }
        return n
    }
    r("70102");
    var o = {
        resolve: function() {
            for (var e, t, r = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) i >= 0 ? t = arguments[i] : (void 0 === e && (e = n.cwd()), t = e), u(t), 0 !== t.length && (r = t + "/" + r, o = 47 === t.charCodeAt(0));
            if (r = a(r, !o), o) return r.length > 0 ? "/" + r : "/";
            if (r.length > 0) return r;
            return "."
        },
        normalize: function(e) {
            if (u(e), 0 === e.length) return ".";
            var t = 47 === e.charCodeAt(0),
                r = 47 === e.charCodeAt(e.length - 1);
            return (0 === (e = a(e, !t)).length && !t && (e = "."), e.length > 0 && r && (e += "/"), t) ? "/" + e : e
        },
        isAbsolute: function(e) {
            return u(e), e.length > 0 && 47 === e.charCodeAt(0)
        },
        join: function() {
            if (0 == arguments.length) return ".";
            for (var e, t = 0; t < arguments.length; ++t) {
                var r = arguments[t];
                u(r), r.length > 0 && (void 0 === e ? e = r : e += "/" + r)
            }
            return void 0 === e ? "." : o.normalize(e)
        },
        relative: function(e, t) {
            if (u(e), u(t), e === t) return "";
            if (e = o.resolve(e), e === (t = o.resolve(t))) return "";
            for (var r = 1; r < e.length && 47 === e.charCodeAt(r); ++r);
            for (var n = e.length, a = n - r, i = 1; i < t.length && 47 === t.charCodeAt(i); ++i);
            for (var s = t.length - i, l = a < s ? a : s, c = -1, f = 0; f <= l; ++f) {
                if (f === l) {
                    if (s > l) {
                        if (47 === t.charCodeAt(i + f)) return t.slice(i + f + 1);
                        if (0 === f) return t.slice(i + f)
                    } else a > l && (47 === e.charCodeAt(r + f) ? c = f : 0 === f && (c = 0));
                    break
                }
                var d = e.charCodeAt(r + f);
                if (d !== t.charCodeAt(i + f)) break;
                47 === d && (c = f)
            }
            var D = "";
            for (f = r + c + 1; f <= n; ++f)(f === n || 47 === e.charCodeAt(f)) && (0 === D.length ? D += ".." : D += "/..");
            return D.length > 0 ? D + t.slice(i + c) : (i += c, 47 === t.charCodeAt(i) && ++i, t.slice(i))
        },
        _makeLong: function(e) {
            return e
        },
        dirname: function(e) {
            if (u(e), 0 === e.length) return ".";
            for (var t = e.charCodeAt(0), r = 47 === t, n = -1, a = !0, o = e.length - 1; o >= 1; --o)
                if (47 === (t = e.charCodeAt(o))) {
                    if (!a) {
                        n = o;
                        break
                    }
                } else a = !1;
            return -1 === n ? r ? "/" : "." : r && 1 === n ? "//" : e.slice(0, n)
        },
        basename: function(e, t) {
            if (void 0 !== t && "string" != typeof t) throw TypeError('"ext" argument must be a string');
            u(e);
            var r, n = 0,
                a = -1,
                o = !0;
            if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                if (t.length === e.length && t === e) return "";
                var i = t.length - 1,
                    s = -1;
                for (r = e.length - 1; r >= 0; --r) {
                    var l = e.charCodeAt(r);
                    if (47 === l) {
                        if (!o) {
                            n = r + 1;
                            break
                        }
                    } else - 1 === s && (o = !1, s = r + 1), i >= 0 && (l === t.charCodeAt(i) ? -1 == --i && (a = r) : (i = -1, a = s))
                }
                return n === a ? a = s : -1 === a && (a = e.length), e.slice(n, a)
            }
            for (r = e.length - 1; r >= 0; --r)
                if (47 === e.charCodeAt(r)) {
                    if (!o) {
                        n = r + 1;
                        break
                    }
                } else - 1 === a && (o = !1, a = r + 1);
            return -1 === a ? "" : e.slice(n, a)
        },
        extname: function(e) {
            u(e);
            for (var t = -1, r = 0, n = -1, a = !0, o = 0, i = e.length - 1; i >= 0; --i) {
                var s = e.charCodeAt(i);
                if (47 === s) {
                    if (!a) {
                        r = i + 1;
                        break
                    }
                    continue
                } - 1 === n && (a = !1, n = i + 1), 46 === s ? -1 === t ? t = i : 1 !== o && (o = 1) : -1 !== t && (o = -1)
            }
            return -1 === t || -1 === n || 0 === o || 1 === o && t === n - 1 && t === r + 1 ? "" : e.slice(t, n)
        },
        format: function(e) {
            var t, r, n;
            if (null === e || "object" != typeof e) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
            return r = (t = e).dir || t.root, n = t.base || (t.name || "") + (t.ext || ""), r ? r === t.root ? r + n : r + "/" + n : n
        },
        parse: function(e) {
            u(e);
            var t, r = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (0 === e.length) return r;
            var n = e.charCodeAt(0),
                a = 47 === n;
            a ? (r.root = "/", t = 1) : t = 0;
            for (var o = -1, i = 0, s = -1, l = !0, c = e.length - 1, f = 0; c >= t; --c) {
                if (47 === (n = e.charCodeAt(c))) {
                    if (!l) {
                        i = c + 1;
                        break
                    }
                    continue
                } - 1 === s && (l = !1, s = c + 1), 46 === n ? -1 === o ? o = c : 1 !== f && (f = 1) : -1 !== o && (f = -1)
            }
            return -1 === o || -1 === s || 0 === f || 1 === f && o === s - 1 && o === i + 1 ? -1 !== s && (0 === i && a ? r.base = r.name = e.slice(1, s) : r.base = r.name = e.slice(i, s)) : (0 === i && a ? (r.name = e.slice(1, o), r.base = e.slice(1, s)) : (r.name = e.slice(i, o), r.base = e.slice(i, s)), r.ext = e.slice(o, s)), i > 0 ? r.dir = e.slice(0, i - 1) : a && (r.dir = "/"), r
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null
    };
    o.posix = o, e.exports = o
}