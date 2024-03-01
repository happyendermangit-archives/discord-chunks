function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SeasonalGiftingMarketingExperiment: function() {
            return c
        },
        useIsSeasonalGiftingActive: function() {
            return f
        },
        default: function() {
            return m
        }
    }), n("222007");
    var l = n("884691"),
        i = n("866227"),
        a = n.n(i),
        s = n("862337"),
        r = n("296892");
    let o = new Date("2024-01-04T07:59:59.000Z"),
        u = a(o),
        d = (0, r.default)({
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
        c = (0, r.default)({
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

    function f() {
        let [e, t] = l.useState(() => u.isAfter(Date.now()));
        return l.useEffect(() => {
            let n = new s.Timeout,
                l = () => {
                    let e = Math.min(u.diff(Date.now(), "millisecond"), 864e5);
                    null == n || n.start(e, () => {
                        u.isBefore(Date.now()) ? t(!1) : l()
                    })
                };
            return e && l(), () => n.stop()
        }), e
    }
    var m = d
}