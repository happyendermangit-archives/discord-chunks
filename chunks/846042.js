function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        dayPeriodEnumToHours: function() {
            return d
        },
        isLeapYearIndex: function() {
            return p
        },
        mapValue: function() {
            return a
        },
        normalizeTwoDigitYear: function() {
            return f
        },
        parseAnyDigitsSigned: function() {
            return u
        },
        parseNDigits: function() {
            return c
        },
        parseNDigitsSigned: function() {
            return l
        },
        parseNumericPattern: function() {
            return o
        },
        parseTimezonePattern: function() {
            return s
        }
    });
    var r = n("250327"),
        i = n("25487");

    function a(e, t) {
        return e ? {
            value: t(e.value),
            rest: e.rest
        } : e
    }

    function o(e, t) {
        var n = t.match(e);
        return n ? {
            value: parseInt(n[0], 10),
            rest: t.slice(n[0].length)
        } : null
    }

    function s(e, t) {
        var n = t.match(e);
        if (!n) return null;
        if ("Z" === n[0]) return {
            value: 0,
            rest: t.slice(1)
        };
        var i = "+" === n[1] ? 1 : -1,
            a = n[2] ? parseInt(n[2], 10) : 0,
            o = n[3] ? parseInt(n[3], 10) : 0,
            s = n[5] ? parseInt(n[5], 10) : 0;
        return {
            value: i * (a * r.millisecondsInHour + o * r.millisecondsInMinute + s * r.millisecondsInSecond),
            rest: t.slice(n[0].length)
        }
    }

    function u(e) {
        return o(i.numericPatterns.anyDigitsSigned, e)
    }

    function c(e, t) {
        switch (e) {
            case 1:
                return o(i.numericPatterns.singleDigit, t);
            case 2:
                return o(i.numericPatterns.twoDigits, t);
            case 3:
                return o(i.numericPatterns.threeDigits, t);
            case 4:
                return o(i.numericPatterns.fourDigits, t);
            default:
                return o(RegExp("^\\d{1," + e + "}"), t)
        }
    }

    function l(e, t) {
        switch (e) {
            case 1:
                return o(i.numericPatterns.singleDigitSigned, t);
            case 2:
                return o(i.numericPatterns.twoDigitsSigned, t);
            case 3:
                return o(i.numericPatterns.threeDigitsSigned, t);
            case 4:
                return o(i.numericPatterns.fourDigitsSigned, t);
            default:
                return o(RegExp("^-?\\d{1," + e + "}"), t)
        }
    }

    function d(e) {
        switch (e) {
            case "morning":
                return 4;
            case "evening":
                return 17;
            case "pm":
            case "noon":
            case "afternoon":
                return 12;
            default:
                return 0
        }
    }

    function f(e, t) {
        var n, r = t > 0,
            i = r ? t : 1 - t;
        if (i <= 50) n = e || 100;
        else {
            var a = i + 50,
                o = 100 * Math.floor(a / 100);
            n = e + o - (e >= a % 100 ? 100 : 0)
        }
        return r ? n : 1 - n
    }

    function p(e) {
        return e % 400 == 0 || e % 4 == 0 && e % 100 != 0
    }
}