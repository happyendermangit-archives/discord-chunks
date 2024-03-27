function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        rrulestr: function() {
            return l
        }
    });
    var r = n("146150"),
        i = n("812975"),
        a = n("531171"),
        o = n("695170"),
        s = n("686942"),
        u = n("200734"),
        c = {
            dtstart: null,
            cache: !1,
            unfold: !1,
            forceset: !1,
            compatible: !1,
            tzid: null
        };

    function l(e, t) {
        return void 0 === t && (t = {}),
            function(e, t) {
                var n, r, o, c, l, p, h, m, g, _ = (n = e, r = t, o = [], c = [], l = [], p = [], m = (h = (0, u.parseDtstart)(n)).dtstart, g = h.tzid, (function(e, t) {
                        if (void 0 === t && (t = !1), !(e = e && e.trim())) throw Error("Invalid empty string");
                        if (!t) return e.split(/\s/);
                        for (var n = e.split("\n"), r = 0; r < n.length;) {
                            var i = n[r] = n[r].replace(/\s+$/g, "");
                            i ? r > 0 && " " === i[0] ? (n[r - 1] += i.slice(1), n.splice(r, 1)) : r += 1 : n.splice(r, 1)
                        }
                        return n
                    })(n, r.unfold).forEach(function(e) {
                        if (e) {
                            var t, n = function(e) {
                                    var t = function(e) {
                                            if (-1 === e.indexOf(":")) return {
                                                name: "RRULE",
                                                value: e
                                            };
                                            var t = (0, s.split)(e, ":", 1);
                                            return {
                                                name: t[0],
                                                value: t[1]
                                            }
                                        }(e),
                                        n = t.name,
                                        r = t.value,
                                        i = n.split(";");
                                    if (!i) throw Error("empty property name");
                                    return {
                                        name: i[0].toUpperCase(),
                                        parms: i.slice(1),
                                        value: r
                                    }
                                }(e),
                                r = n.name,
                                i = n.parms,
                                a = n.value;
                            switch (r.toUpperCase()) {
                                case "RRULE":
                                    if (i.length) throw Error("unsupported RRULE parm: ".concat(i.join(",")));
                                    o.push((0, u.parseString)(e));
                                    break;
                                case "RDATE":
                                    var d = (null !== (t = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) && void 0 !== t ? t : [])[1];
                                    d && !g && (g = d), c = c.concat(f(a, i));
                                    break;
                                case "EXRULE":
                                    if (i.length) throw Error("unsupported EXRULE parm: ".concat(i.join(",")));
                                    l.push((0, u.parseString)(a));
                                    break;
                                case "EXDATE":
                                    p = p.concat(f(a, i));
                                    break;
                                case "DTSTART":
                                    break;
                                default:
                                    throw Error("unsupported property: " + r)
                            }
                        }
                    }), {
                        dtstart: m,
                        tzid: g,
                        rrulevals: o,
                        rdatevals: c,
                        exrulevals: l,
                        exdatevals: p
                    }),
                    b = _.rrulevals,
                    v = _.rdatevals,
                    y = _.exrulevals,
                    E = _.exdatevals,
                    S = _.dtstart,
                    x = _.tzid,
                    w = !1 === t.cache;
                if (t.compatible && (t.forceset = !0, t.unfold = !0), t.forceset || b.length > 1 || v.length || y.length || E.length) {
                    var T = new a.RRuleSet(w);
                    return T.dtstart(S), T.tzid(x || void 0), b.forEach(function(e) {
                        T.rrule(new i.RRule(d(e, S, x), w))
                    }), v.forEach(function(e) {
                        T.rdate(e)
                    }), y.forEach(function(e) {
                        T.exrule(new i.RRule(d(e, S, x), w))
                    }), E.forEach(function(e) {
                        T.exdate(e)
                    }), t.compatible && t.dtstart && T.rdate(S), T
                }
                var C = b[0] || {};
                return new i.RRule(d(C, C.dtstart || t.dtstart || S, C.tzid || t.tzid || x), w)
            }(e, function(e) {
                var t = [],
                    n = Object.keys(e),
                    i = Object.keys(c);
                if (n.forEach(function(e) {
                        !(0, s.includes)(i, e) && t.push(e)
                    }), t.length) throw Error("Invalid options: " + t.join(", "));
                return (0, r.__assign)((0, r.__assign)({}, c), e)
            }(t))
    }

    function d(e, t, n) {
        return (0, r.__assign)((0, r.__assign)({}, e), {
            dtstart: t,
            tzid: n
        })
    }

    function f(e, t) {
        return ! function(e) {
            e.forEach(function(e) {
                if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error("unsupported RDATE/EXDATE parm: " + e)
            })
        }(t), e.split(",").map(function(e) {
            return (0, o.untilStringToDate)(e)
        })
    }
}