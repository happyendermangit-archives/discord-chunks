function(e, t, n) {
    "use strict";
    n("781738"), n("424973"), t.createDateTimeFormat = u, t.createDateTimeFormats = function(e) {
        var t, n, r, a, o, l = e.availableFormats,
            c = e.timeFormats,
            d = e.dateFormats,
            f = e.medium,
            p = [],
            m = [],
            h = [];

        function y(e, t) {
            var n = Array((e.match(/M/g) || []).length + 1),
                r = Array((e.match(/E/g) || []).length + 1);
            return n.length > 2 && (t = t.replace(/(M|L)+/, n.join("$1"))), r.length > 2 && (t = t.replace(/([Eec])+/, r.join("$1"))), t
        }
        for (t in l) l.hasOwnProperty(t) && (r = u(n = y(t, l[t]))) && (p.push(r), function(e) {
            for (var t = 0; t < s.length; t += 1)
                if (e.hasOwnProperty(s[t])) return !1;
            return !0
        }(r) ? h.push(n) : function(e) {
            for (var t = 0; t < i.length; t += 1)
                if (e.hasOwnProperty(i[t])) return !1;
            return !0
        }(r) && m.push(n));
        for (a = 0; a < m.length; a += 1)
            for (o = 0; o < h.length; o += 1)(r = u(n = f.replace("{0}", m[a]).replace("{1}", h[o]).replace(/^[,\s]+|[,\s]+$/gi, ""))) && p.push(r);
        for (t in c) c.hasOwnProperty(t) && (r = u(n = y(t, c[t]))) && p.push(r);
        for (t in d) d.hasOwnProperty(t) && (r = u(n = y(t, d[t]))) && p.push(r);
        return p
    };
    var r = /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g,
        a = /[QxXVOvZASjgFDwWIQqH]/,
        o = {
            month: ["numeric", "2-digit", "short", "long", "narrow"],
            weekday: ["short", "short", "short", "long", "narrow"],
            era: ["short", "short", "short", "long", "narrow"]
        },
        i = ["weekday", "era", "year", "month", "day"],
        s = ["hour", "minute", "second", "timeZoneName"];

    function u(e) {
        if (!a.test(e)) {
            var t = {};
            return t.pattern = e.replace(r, function(e) {
                switch (e.charAt(0)) {
                    case "E":
                    case "e":
                    case "c":
                        return t.weekday = o.weekday[e.length - 1], "{weekday}";
                    case "G":
                        return t.era = o.era[e.length - 1], "{era}";
                    case "y":
                    case "Y":
                    case "u":
                    case "U":
                        return t.year = 2 === e.length ? "2-digit" : "numeric", "{year}";
                    case "M":
                    case "L":
                        return t.month = o.month[e.length - 1], "{month}";
                    case "d":
                        return t.day = 2 === e.length ? "2-digit" : "numeric", "{day}";
                    case "a":
                        return "{ampm}";
                    case "h":
                    case "H":
                    case "k":
                    case "K":
                        return t.hour = 2 === e.length ? "2-digit" : "numeric", "{hour}";
                    case "m":
                        return t.minute = 2 === e.length ? "2-digit" : "numeric", "{minute}";
                    case "s":
                        return t.second = 2 === e.length ? "2-digit" : "numeric", "{second}";
                    case "z":
                        return t.timeZoneName = e.length < 4 ? "short" : "long", "{timeZoneName}"
                }
            }), t.pattern = t.pattern.replace(/'([^']*)'/g, function(e, t) {
                return t || "'"
            }), t.pattern.indexOf("{ampm}") > -1 && (t.hour12 = !0, t.pattern12 = t.pattern, t.pattern = t.pattern.replace("{ampm}", "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")), t
        }
    }
}