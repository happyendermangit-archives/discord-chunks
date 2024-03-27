function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAXYEAR: function() {
            return o
        },
        clone: function() {
            return y
        },
        cloneDates: function() {
            return E
        },
        combine: function() {
            return v
        },
        dateInTimeZone: function() {
            return C
        },
        datetime: function() {
            return i
        },
        fromOrdinal: function() {
            return m
        },
        getWeekday: function() {
            return _
        },
        isDate: function() {
            return l
        },
        isLeapYear: function() {
            return c
        },
        isValidDate: function() {
            return d
        },
        monthRange: function() {
            return b
        },
        sort: function() {
            return S
        },
        timeToUntilString: function() {
            return x
        },
        toOrdinal: function() {
            return h
        },
        untilStringToDate: function() {
            return w
        }
    });
    var r = n("686942"),
        i = function(e, t, n, r, i, a) {
            return void 0 === r && (r = 0), void 0 === i && (i = 0), void 0 === a && (a = 0), new Date(Date.UTC(e, t - 1, n, r, i, a))
        },
        a = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        o = 9999,
        s = i(1970, 1, 1),
        u = [6, 0, 1, 2, 3, 4, 5],
        c = function(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        },
        l = function(e) {
            return e instanceof Date
        },
        d = function(e) {
            return l(e) && !isNaN(e.getTime())
        },
        f = function(e) {
            return 6e4 * e.getTimezoneOffset()
        },
        p = function(e, t) {
            var n = e.getTime() - f(e),
                r = t.getTime() - f(t);
            return Math.round((n - r) / 864e5)
        },
        h = function(e) {
            return p(e, s)
        },
        m = function(e) {
            return new Date(s.getTime() + 864e5 * e)
        },
        g = function(e) {
            var t = e.getUTCMonth();
            return 1 === t && c(e.getUTCFullYear()) ? 29 : a[t]
        },
        _ = function(e) {
            return u[e.getUTCDay()]
        },
        b = function(e, t) {
            var n = i(e, t + 1, 1);
            return [_(n), g(n)]
        },
        v = function(e, t) {
            return t = t || e, new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()))
        },
        y = function(e) {
            return new Date(e.getTime())
        },
        E = function(e) {
            for (var t = [], n = 0; n < e.length; n++) t.push(y(e[n]));
            return t
        },
        S = function(e) {
            e.sort(function(e, t) {
                return e.getTime() - t.getTime()
            })
        },
        x = function(e, t) {
            void 0 === t && (t = !0);
            var n = new Date(e);
            return [(0, r.padStart)(n.getUTCFullYear().toString(), 4, "0"), (0, r.padStart)(n.getUTCMonth() + 1, 2, "0"), (0, r.padStart)(n.getUTCDate(), 2, "0"), "T", (0, r.padStart)(n.getUTCHours(), 2, "0"), (0, r.padStart)(n.getUTCMinutes(), 2, "0"), (0, r.padStart)(n.getUTCSeconds(), 2, "0"), t ? "Z" : ""].join("")
        },
        w = function(e) {
            var t = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(e);
            if (!t) throw Error("Invalid UNTIL value: ".concat(e));
            return new Date(Date.UTC(parseInt(t[1], 10), parseInt(t[2], 10) - 1, parseInt(t[3], 10), parseInt(t[5], 10) || 0, parseInt(t[6], 10) || 0, parseInt(t[7], 10) || 0))
        },
        T = function(e, t) {
            return e.toLocaleString("sv-SE", {
                timeZone: t
            }).replace(" ", "T") + "Z"
        },
        C = function(e, t) {
            var n = new Date(T(e, Intl.DateTimeFormat().resolvedOptions().timeZone)),
                r = new Date(T(e, null != t ? t : "UTC")).getTime() - n.getTime();
            return new Date(e.getTime() - r)
        }
}