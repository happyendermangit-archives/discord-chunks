function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        matchSorter: function() {
            return u
        }
    });
    var r = n("599295"),
        i = n("725454"),
        a = n.n(i),
        o = {
            CASE_SENSITIVE_EQUAL: 7,
            EQUAL: 6,
            STARTS_WITH: 5,
            WORD_STARTS_WITH: 4,
            CONTAINS: 3,
            ACRONYM: 2,
            MATCHES: 1,
            NO_MATCH: 0
        };
    u.rankings = o;
    var s = function(e, t) {
        return String(e.rankedValue).localeCompare(String(t.rankedValue))
    };

    function u(e, t, n) {
        void 0 === n && (n = {});
        var i = n,
            a = i.keys,
            u = i.threshold,
            l = void 0 === u ? o.MATCHES : u,
            f = i.baseSort,
            p = void 0 === f ? s : f,
            h = i.sorter;
        return (void 0 === h ? function(e) {
            return e.sort(function(e, t) {
                return function(e, t, n) {
                    var r = e.rank,
                        i = e.keyIndex,
                        a = t.rank,
                        o = t.keyIndex;
                    return r !== a ? r > a ? -1 : 1 : i === o ? n(e, t) : i < o ? -1 : 1
                }(e, t, p)
            })
        } : h)(e.reduce(function(e, i, s) {
            var u = function(e, t, n, i) {
                    return t ? (function(e, t) {
                        for (var n = [], i = 0, a = t.length; i < a; i++) {
                            for (var o = t[i], s = function(e) {
                                    return "string" == typeof e ? d : (0, r.default)({}, d, e)
                                }(o), u = function(e, t) {
                                    var n;
                                    if ("object" == typeof t && (t = t.key), "function" == typeof t) n = t(e);
                                    else if (null == e) n = null;
                                    else if (Object.hasOwnProperty.call(e, t)) n = e[t];
                                    else {
                                        if (t.includes(".")) return function(e, t) {
                                            for (var n = e.split("."), r = [t], i = 0, a = n.length; i < a; i++) {
                                                for (var o = n[i], s = [], u = 0, c = r.length; u < c; u++) {
                                                    var l = r[u];
                                                    if (null != l) {
                                                        if (Object.hasOwnProperty.call(l, o)) {
                                                            var d = l[o];
                                                            null != d && s.push(d)
                                                        } else "*" === o && (s = s.concat(l))
                                                    }
                                                }
                                                r = s
                                            }
                                            if (Array.isArray(r[0])) {
                                                var f = [];
                                                return f.concat.apply(f, r)
                                            }
                                            return r
                                        }(t, e);
                                        n = null
                                    }
                                    return null == n ? [] : Array.isArray(n) ? n : [String(n)]
                                }(e, o), c = 0, l = u.length; c < l; c++) n.push({
                                itemValue: u[c],
                                attributes: s
                            })
                        }
                        return n
                    })(e, t).reduce(function(e, t, r) {
                        var a = e.rank,
                            s = e.rankedValue,
                            u = e.keyIndex,
                            l = e.keyThreshold,
                            d = t.itemValue,
                            f = t.attributes,
                            p = c(d, n, i),
                            h = s,
                            m = f.minRanking,
                            g = f.maxRanking,
                            _ = f.threshold;
                        return p < m && p >= o.MATCHES ? p = m : p > g && (p = g), p > a && (a = p, u = r, l = _, h = d), {
                            rankedValue: h,
                            rank: a,
                            keyIndex: u,
                            keyThreshold: l
                        }
                    }, {
                        rankedValue: e,
                        rank: o.NO_MATCH,
                        keyIndex: -1,
                        keyThreshold: i.threshold
                    }) : {
                        rankedValue: e,
                        rank: c(e, n, i),
                        keyIndex: -1,
                        keyThreshold: i.threshold
                    }
                }(i, a, t, n),
                f = u.rank,
                p = u.keyThreshold;
            return f >= (void 0 === p ? l : p) && e.push((0, r.default)({}, u, {
                item: i,
                index: s
            })), e
        }, [])).map(function(e) {
            return e.item
        })
    }

    function c(e, t, n) {
        return (e = l(e, n), (t = l(t, n)).length > e.length) ? o.NO_MATCH : e === t ? o.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), e === (t = t.toLowerCase())) ? o.EQUAL : e.startsWith(t) ? o.STARTS_WITH : e.includes(" " + t) ? o.WORD_STARTS_WITH : e.includes(t) ? o.CONTAINS : 1 === t.length ? o.NO_MATCH : (function(e) {
            var t = "";
            return e.split(" ").forEach(function(e) {
                e.split("-").forEach(function(e) {
                    t += e.substr(0, 1)
                })
            }), t
        })(e).includes(t) ? o.ACRONYM : function(e, t) {
            var n, r, i = 0,
                a = 0;

            function s(e, t, n) {
                for (var r = n, a = t.length; r < a; r++)
                    if (t[r] === e) return i += 1, r + 1;
                return -1
            }
            var u = s(t[0], e, 0);
            if (u < 0) return o.NO_MATCH;
            a = u;
            for (var c = 1, l = t.length; c < l; c++)
                if (!((a = s(t[c], e, a)) > -1)) return o.NO_MATCH;
            return n = a - u, r = i / t.length, o.MATCHES + 1 / n * r
        }(e, t)
    }

    function l(e, t) {
        var n = t.keepDiacritics;
        return e = "" + e, !n && (e = a()(e)), e
    }
    var d = {
        maxRanking: 1 / 0,
        minRanking: -1 / 0
    }
}