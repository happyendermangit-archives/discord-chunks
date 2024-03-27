function(e, t) {
    "use strict";
    t.createDateTimeFormat = s, t.createDateTimeFormats = function(e) {
        var t, n, r, i, u, c = e.availableFormats,
            l = e.timeFormats,
            d = e.dateFormats,
            f = e.medium,
            p = [],
            h = [],
            m = [];

        function g(e, t) {
            var n = Array((e.match(/M/g) || []).length + 1),
                r = Array((e.match(/E/g) || []).length + 1);
            return n.length > 2 && (t = t.replace(/(M|L)+/, n.join("$1"))), r.length > 2 && (t = t.replace(/([Eec])+/, r.join("$1"))), t
        }
        for (t in c) c.hasOwnProperty(t) && (r = s(n = g(t, c[t]))) && (p.push(r), function(e) {
            for (var t = 0; t < o.length; t += 1)
                if (e.hasOwnProperty(o[t])) return !1;
            return !0
        }(r) ? m.push(n) : function(e) {
            for (var t = 0; t < a.length; t += 1)
                if (e.hasOwnProperty(a[t])) return !1;
            return !0
        }(r) && h.push(n));
        for (i = 0; i < h.length; i += 1)
            for (u = 0; u < m.length; u += 1)(r = s(n = f.replace("{0}", h[i]).replace("{1}", m[u]).replace(/^[,\s]+|[,\s]+$/gi, ""))) && p.push(r);
        for (t in l) l.hasOwnProperty(t) && (r = s(n = g(t, l[t]))) && p.push(r);
        for (t in d) d.hasOwnProperty(t) && (r = s(n = g(t, d[t]))) && p.push(r);
        return p
    };
    var n = /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g,
        r = /[QxXVOvZASjgFDwWIQqH]/,
        i = {
            month: ["numeric", "2-digit", "short", "long", "narrow"],
            weekday: ["short", "short", "short", "long", "narrow"],
            era: ["short", "short", "short", "long", "narrow"]
        },
        a = ["weekday", "era", "year", "month", "day"],
        o = ["hour", "minute", "second", "timeZoneName"];

    function s(e) {
        if (!r.test(e)) {
            var t = {};
            return t.pattern = e.replace(n, function(e) {
                switch (e.charAt(0)) {
                    case "E":
                    case "e":
                    case "c":
                        return t.weekday = i.weekday[e.length - 1], "{weekday}";
                    case "G":
                        return t.era = i.era[e.length - 1], "{era}";
                    case "y":
                    case "Y":
                    case "u":
                    case "U":
                        return t.year = 2 === e.length ? "2-digit" : "numeric", "{year}";
                    case "M":
                    case "L":
                        return t.month = i.month[e.length - 1], "{month}";
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