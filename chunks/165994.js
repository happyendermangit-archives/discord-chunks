function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        matchSorter: function() {
            return c
        }
    }), n("222007"), n("808653"), n("424973");
    var r = n("261438"),
        i = n("433165"),
        o = n.n(i),
        s = {
            CASE_SENSITIVE_EQUAL: 7,
            EQUAL: 6,
            STARTS_WITH: 5,
            WORD_STARTS_WITH: 4,
            CONTAINS: 3,
            ACRONYM: 2,
            MATCHES: 1,
            NO_MATCH: 0
        };
    c.rankings = s;
    var a = function(e, t) {
        return String(e.rankedValue).localeCompare(String(t.rankedValue))
    };

    function c(e, t, n) {
        void 0 === n && (n = {});
        var i = n,
            o = i.keys,
            c = i.threshold,
            d = void 0 === c ? s.MATCHES : c,
            f = i.baseSort,
            p = void 0 === f ? a : f,
            h = i.sorter;
        return (void 0 === h ? function(e) {
            return e.sort(function(e, t) {
                return function(e, t, n) {
                    var r = e.rank,
                        i = e.keyIndex,
                        o = t.rank,
                        s = t.keyIndex;
                    return r !== o ? r > o ? -1 : 1 : i === s ? n(e, t) : i < s ? -1 : 1
                }(e, t, p)
            })
        } : h)(e.reduce(function(e, i, a) {
            var c = function(e, t, n, i) {
                    return t ? (function(e, t) {
                        for (var n = [], i = 0, o = t.length; i < o; i++) {
                            for (var s = t[i], a = function(e) {
                                    return "string" == typeof e ? l : (0, r.default)({}, l, e)
                                }(s), c = function(e, t) {
                                    var n;
                                    if ("object" == typeof t && (t = t.key), "function" == typeof t) n = t(e);
                                    else if (null == e) n = null;
                                    else if (Object.hasOwnProperty.call(e, t)) n = e[t];
                                    else {
                                        if (t.includes(".")) return function(e, t) {
                                            for (var n = e.split("."), r = [t], i = 0, o = n.length; i < o; i++) {
                                                for (var s = n[i], a = [], c = 0, u = r.length; c < u; c++) {
                                                    var d = r[c];
                                                    if (null != d) {
                                                        if (Object.hasOwnProperty.call(d, s)) {
                                                            var l = d[s];
                                                            null != l && a.push(l)
                                                        } else "*" === s && (a = a.concat(d))
                                                    }
                                                }
                                                r = a
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
                                }(e, s), u = 0, d = c.length; u < d; u++) n.push({
                                itemValue: c[u],
                                attributes: a
                            })
                        }
                        return n
                    })(e, t).reduce(function(e, t, r) {
                        var o = e.rank,
                            a = e.rankedValue,
                            c = e.keyIndex,
                            d = e.keyThreshold,
                            l = t.itemValue,
                            f = t.attributes,
                            p = u(l, n, i),
                            h = a,
                            v = f.minRanking,
                            g = f.maxRanking,
                            b = f.threshold;
                        return p < v && p >= s.MATCHES ? p = v : p > g && (p = g), p > o && (o = p, c = r, d = b, h = l), {
                            rankedValue: h,
                            rank: o,
                            keyIndex: c,
                            keyThreshold: d
                        }
                    }, {
                        rankedValue: e,
                        rank: s.NO_MATCH,
                        keyIndex: -1,
                        keyThreshold: i.threshold
                    }) : {
                        rankedValue: e,
                        rank: u(e, n, i),
                        keyIndex: -1,
                        keyThreshold: i.threshold
                    }
                }(i, o, t, n),
                f = c.rank,
                p = c.keyThreshold;
            return f >= (void 0 === p ? d : p) && e.push((0, r.default)({}, c, {
                item: i,
                index: a
            })), e
        }, [])).map(function(e) {
            return e.item
        })
    }

    function u(e, t, n) {
        return (e = d(e, n), (t = d(t, n)).length > e.length) ? s.NO_MATCH : e === t ? s.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), e === (t = t.toLowerCase())) ? s.EQUAL : e.startsWith(t) ? s.STARTS_WITH : e.includes(" " + t) ? s.WORD_STARTS_WITH : e.includes(t) ? s.CONTAINS : 1 === t.length ? s.NO_MATCH : (function(e) {
            var t = "";
            return e.split(" ").forEach(function(e) {
                e.split("-").forEach(function(e) {
                    t += e.substr(0, 1)
                })
            }), t
        })(e).includes(t) ? s.ACRONYM : function(e, t) {
            var n, r, i = 0,
                o = 0;

            function a(e, t, n) {
                for (var r = n, o = t.length; r < o; r++)
                    if (t[r] === e) return i += 1, r + 1;
                return -1
            }
            var c = a(t[0], e, 0);
            if (c < 0) return s.NO_MATCH;
            o = c;
            for (var u = 1, d = t.length; u < d; u++)
                if (!((o = a(t[u], e, o)) > -1)) return s.NO_MATCH;
            return n = o - c, r = i / t.length, s.MATCHES + r * (1 / n)
        }(e, t)
    }

    function d(e, t) {
        var n = t.keepDiacritics;
        return e = "" + e, !n && (e = o(e)), e
    }
    var l = {
        maxRanking: 1 / 0,
        minRanking: -1 / 0
    }
}