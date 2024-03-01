function(t, e, r) {
    "use strict";
    r.r(e), r.d(e, {
        optionsToString: function() {
            return u
        }
    }), r("424973");
    var n = r("191899"),
        i = r("871111"),
        a = r("466739"),
        o = r("737912"),
        s = r("544524");

    function u(t) {
        for (var e = [], r = "", u = Object.keys(t), d = Object.keys(n.DEFAULT_OPTIONS), y = 0; y < u.length; y++) {
            if ("tzid" !== u[y] && !!(0, i.includes)(d, u[y])) {
                var c = u[y].toUpperCase(),
                    h = t[u[y]],
                    l = "";
                if (!(!(0, i.isPresent)(h) || (0, i.isArray)(h) && !h.length)) {
                    switch (c) {
                        case "FREQ":
                            l = n.RRule.FREQUENCIES[t.freq];
                            break;
                        case "WKST":
                            l = (0, i.isNumber)(h) ? new(0, a.Weekday)(h).toString() : h.toString();
                            break;
                        case "BYWEEKDAY":
                            c = "BYDAY", l = (0, i.toArray)(h).map(function(t) {
                                return t instanceof a.Weekday ? t : (0, i.isArray)(t) ? new a.Weekday(t[0], t[1]) : new a.Weekday(t)
                            }).toString();
                            break;
                        case "DTSTART":
                            r = function(t, e) {
                                return t ? "DTSTART" + new(0, s.DateWithZone)(new Date(t), e).toString() : ""
                            }(h, t.tzid);
                            break;
                        case "UNTIL":
                            l = (0, o.timeToUntilString)(h, !t.tzid);
                            break;
                        default:
                            if ((0, i.isArray)(h)) {
                                for (var f = [], p = 0; p < h.length; p++) f[p] = String(h[p]);
                                l = f.toString()
                            } else l = String(h)
                    }
                    l && e.push([c, l])
                }
            }
        }
        var m = e.map(function(t) {
                var e = t[0],
                    r = t[1];
                return "".concat(e, "=").concat(r.toString())
            }).join(";"),
            b = "";
        return "" !== m && (b = "RRULE:".concat(m)), [r, b].filter(function(t) {
            return !!t
        }).join("\n")
    }
}