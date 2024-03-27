function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        parseDtstart: function() {
            return c
        },
        parseString: function() {
            return u
        }
    });
    var r = n("146150"),
        i = n("707908"),
        a = n("713267"),
        o = n("695170"),
        s = n("812975");

    function u(e) {
        var t = e.split("\n").map(l).filter(function(e) {
            return null !== e
        });
        return (0, r.__assign)((0, r.__assign)({}, t[0]), t[1])
    }

    function c(e) {
        var t = {},
            n = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
        if (!n) return t;
        var r = n[1],
            i = n[2];
        return r && (t.tzid = r), t.dtstart = (0, o.untilStringToDate)(i), t
    }

    function l(e) {
        if (!(e = e.replace(/^\s+|\s+$/, "")).length) return null;
        var t = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
        if (!t) return d(e);
        var n = t[1];
        switch (n.toUpperCase()) {
            case "RRULE":
            case "EXRULE":
                return d(e);
            case "DTSTART":
                return c(e);
            default:
                throw Error("Unsupported RFC prop ".concat(n, " in ").concat(e))
        }
    }

    function d(e) {
        var t = c(e.replace(/^RRULE:/i, ""));
        return e.replace(/^(?:RRULE|EXRULE):/i, "").split(";").forEach(function(n) {
            var r = n.split("="),
                u = r[0],
                l = r[1];
            switch (u.toUpperCase()) {
                case "FREQ":
                    t.freq = i.Frequency[l.toUpperCase()];
                    break;
                case "WKST":
                    t.wkst = s.Days[l.toUpperCase()];
                    break;
                case "COUNT":
                case "INTERVAL":
                case "BYSETPOS":
                case "BYMONTH":
                case "BYMONTHDAY":
                case "BYYEARDAY":
                case "BYWEEKNO":
                case "BYHOUR":
                case "BYMINUTE":
                case "BYSECOND":
                    var d = function(e) {
                        return -1 !== e.indexOf(",") ? e.split(",").map(f) : f(e)
                    }(l);
                    t[u.toLowerCase()] = d;
                    break;
                case "BYWEEKDAY":
                case "BYDAY":
                    t.byweekday = function(e) {
                        return e.split(",").map(function(e) {
                            if (2 === e.length) return s.Days[e];
                            var t = e.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
                            if (!t || t.length < 3) throw SyntaxError("Invalid weekday string: ".concat(e));
                            var n = Number(t[1]),
                                r = t[2],
                                i = s.Days[r].weekday;
                            return new a.Weekday(i, n)
                        })
                    }(l);
                    break;
                case "DTSTART":
                case "TZID":
                    var p = c(e);
                    t.tzid = p.tzid, t.dtstart = p.dtstart;
                    break;
                case "UNTIL":
                    t.until = (0, o.untilStringToDate)(l);
                    break;
                case "BYEASTER":
                    t.byeaster = Number(l);
                    break;
                default:
                    throw Error("Unknown RRULE property '" + u + "'")
            }
        }), t
    }

    function f(e) {
        return /^[+-]?\d+$/.test(e) ? Number(e) : e
    }
}