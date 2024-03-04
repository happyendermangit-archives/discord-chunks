function(e, t, n) {
    "use strict";
    n("781738"), n("808653"), n("424973");
    var r = n("272074"),
        i = n("766811"),
        o = n("526504");

    function s(e, t) {
        return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
    }
    t.extract = function(e) {
        return e.split("?")[1] || ""
    }, t.parse = function(e, t) {
        var n = function(e) {
                var t;
                switch (e.arrayFormat) {
                    case "index":
                        return function(e, n, r) {
                            if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) {
                                r[e] = n;
                                return
                            }
                            void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n
                        };
                    case "bracket":
                        return function(e, n, r) {
                            if (t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t) {
                                if (void 0 === r[e]) {
                                    r[e] = [n];
                                    return
                                }
                            } else {
                                r[e] = n;
                                return
                            }
                            r[e] = [].concat(r[e], n)
                        };
                    default:
                        return function(e, t, n) {
                            if (void 0 === n[e]) {
                                n[e] = t;
                                return
                            }
                            n[e] = [].concat(n[e], t)
                        }
                }
            }(t = i({
                arrayFormat: "none"
            }, t)),
            r = Object.create(null);
        return "string" == typeof e && (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
            var t = e.replace(/\+/g, " ").split("="),
                i = t.shift(),
                s = t.length > 0 ? t.join("=") : void 0;
            s = void 0 === s ? null : o(s), n(o(i), s, r)
        }), Object.keys(r).sort().reduce(function(e, t) {
            var n = r[t];
            return n && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
                return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort(function(e, t) {
                    return Number(e) - Number(t)
                }).map(function(e) {
                    return t[e]
                }) : t
            }(n) : e[t] = n, e
        }, Object.create(null))) : r
    }, t.stringify = function(e, t) {
        var n = function(e) {
            switch (e.arrayFormat) {
                case "index":
                    return function(t, n, r) {
                        return null === n ? [s(t, e), "[", r, "]"].join("") : [s(t, e), "[", s(r, e), "]=", s(n, e)].join("")
                    };
                case "bracket":
                    return function(t, n) {
                        return null === n ? s(t, e) : [s(t, e), "[]=", s(n, e)].join("")
                    };
                default:
                    return function(t, n) {
                        return null === n ? s(t, e) : [s(t, e), "=", s(n, e)].join("")
                    }
            }
        }(t = i({
            encode: !0,
            strict: !0,
            arrayFormat: "none"
        }, t));
        return e ? Object.keys(e).sort().map(function(r) {
            var i = e[r];
            if (void 0 === i) return "";
            if (null === i) return s(r, t);
            if (Array.isArray(i)) {
                var o = [];
                return i.slice().forEach(function(e) {
                    void 0 !== e && o.push(n(r, e, o.length))
                }), o.join("&")
            }
            return s(r, t) + "=" + s(i, t)
        }).filter(function(e) {
            return e.length > 0
        }).join("&") : ""
    }
}