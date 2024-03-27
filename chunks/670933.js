function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("250327"),
        i = n("951516"),
        a = n("217224");

    function o(e, t) {
        (0, i.default)(1, arguments);
        var n, o, m, g = (0, a.default)(null !== (n = null == t ? void 0 : t.additionalDigits) && void 0 !== n ? n : 2);
        if (2 !== g && 1 !== g && 0 !== g) throw RangeError("additionalDigits must be 0, 1 or 2");
        if (!("string" == typeof e || "[object String]" === Object.prototype.toString.call(e))) return new Date(NaN);
        var _ = function(e) {
            var t, n = {},
                r = e.split(s.dateTimeDelimiter);
            if (r.length > 2) return n;
            if (/:/.test(r[0]) ? t = r[0] : (n.date = r[0], t = r[1], s.timeZoneDelimiter.test(n.date) && (n.date = e.split(s.timeZoneDelimiter)[0], t = e.substr(n.date.length, e.length))), t) {
                var i = s.timezone.exec(t);
                i ? (n.time = t.replace(i[1], ""), n.timezone = i[1]) : n.time = t
            }
            return n
        }(e);
        if (_.date) {
            var b = function(e, t) {
                var n = RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"),
                    r = e.match(n);
                if (!r) return {
                    year: NaN,
                    restDateString: ""
                };
                var i = r[1] ? parseInt(r[1]) : null,
                    a = r[2] ? parseInt(r[2]) : null;
                return {
                    year: null === a ? i : 100 * a,
                    restDateString: e.slice((r[1] || r[2]).length)
                }
            }(_.date, g);
            o = function(e, t) {
                if (null === t) return new Date(NaN);
                var n = e.match(u);
                if (!n) return new Date(NaN);
                var r = !!n[4],
                    i = d(n[1]),
                    a = d(n[2]) - 1,
                    o = d(n[3]),
                    s = d(n[4]),
                    c = d(n[5]) - 1;
                if (r) return ! function(e, t, n) {
                    return t >= 1 && t <= 53 && n >= 0 && n <= 6
                }(t, s, c) ? new Date(NaN) : function(e, t, n) {
                    var r = new Date(0);
                    r.setUTCFullYear(e, 0, 4);
                    var i = r.getUTCDay() || 7;
                    return r.setUTCDate(r.getUTCDate() + ((t - 1) * 7 + n + 1 - i)), r
                }(t, s, c);
                var l = new Date(0);
                return ! function(e, t, n) {
                    return t >= 0 && t <= 11 && n >= 1 && n <= (p[t] || (h(e) ? 29 : 28))
                }(t, a, o) || ! function(e, t) {
                    return t >= 1 && t <= (h(e) ? 366 : 365)
                }(t, i) ? new Date(NaN) : (l.setUTCFullYear(t, a, Math.max(i, o)), l)
            }(b.restDateString, b.year)
        }
        if (!o || isNaN(o.getTime())) return new Date(NaN);
        var v = o.getTime(),
            y = 0;
        if (_.time && isNaN(y = function(e) {
                var t = e.match(c);
                if (!t) return NaN;
                var n = f(t[1]),
                    i = f(t[2]),
                    a = f(t[3]);
                return ! function(e, t, n) {
                    return 24 === e ? 0 === t && 0 === n : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25
                }(n, i, a) ? NaN : n * r.millisecondsInHour + i * r.millisecondsInMinute + 1e3 * a
            }(_.time))) return new Date(NaN);
        if (_.timezone) {
            if (isNaN(m = function(e) {
                    if ("Z" === e) return 0;
                    var t = e.match(l);
                    if (!t) return 0;
                    var n = "+" === t[1] ? -1 : 1,
                        i = parseInt(t[2]),
                        a = t[3] && parseInt(t[3]) || 0;
                    return ! function(e, t) {
                        return t >= 0 && t <= 59
                    }(i, a) ? NaN : n * (i * r.millisecondsInHour + a * r.millisecondsInMinute)
                }(_.timezone))) return new Date(NaN)
        } else {
            var E = new Date(v + y),
                S = new Date(0);
            return S.setFullYear(E.getUTCFullYear(), E.getUTCMonth(), E.getUTCDate()), S.setHours(E.getUTCHours(), E.getUTCMinutes(), E.getUTCSeconds(), E.getUTCMilliseconds()), S
        }
        return new Date(v + y + m)
    }
    var s = {
            dateTimeDelimiter: /[T ]/,
            timeZoneDelimiter: /[Z ]/i,
            timezone: /([Z+-].*)$/
        },
        u = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        c = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        l = /^([+-])(\d{2})(?::?(\d{2}))?$/;

    function d(e) {
        return e ? parseInt(e) : 1
    }

    function f(e) {
        return e && parseFloat(e.replace(",", ".")) || 0
    }
    var p = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function h(e) {
        return e % 400 == 0 || e % 4 == 0 && e % 100 != 0
    }
}