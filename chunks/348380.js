function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SeasonalGiftingMarketingExperiment: function() {
            return d
        },
        useIsSeasonalGiftingActive: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("913527"),
        i = n.n(o),
        a = n("945816"),
        u = n("886138");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var l = new Date("2024-01-04T07:59:59.000Z"),
        c = i()(l),
        f = (0, u.default)({
            id: "2023-11_seasonal_gifting",
            label: "Seasonal Gifting 2023",
            kind: "user",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enabled",
                config: {
                    enabled: !0
                }
            }]
        }),
        d = (0, u.default)({
            id: "2023-11_seasonal_gifting_marketing_2023",
            label: "Seasonal Gifting Marketing 2023",
            kind: "user",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enabled",
                config: {
                    enabled: !0
                }
            }]
        });

    function _() {
        var e, t, n = (e = r.useState(function() {
                return c.isAfter(Date.now())
            }), t = 2, function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }
            }(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            o = n[0],
            i = n[1];
        return r.useEffect(function() {
            var e = new a.Timeout,
                t = function() {
                    var n = Math.min(c.diff(Date.now(), "millisecond"), 864e5);
                    null == e || e.start(n, function() {
                        c.isBefore(Date.now()) ? i(!1) : t()
                    })
                };
            return o && t(),
                function() {
                    return e.stop()
                }
        }), o
    }
    t.default = f
}