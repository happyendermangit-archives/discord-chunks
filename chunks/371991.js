function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActiveTimestampFromDuration: function() {
            return E
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("846519"),
        o = n("481060"),
        l = n("706454"),
        u = n("709054"),
        d = n("506071"),
        _ = n("561308");
    let c = e => {
            let {
                entry: t,
                textColor: n
            } = e, s = u.default.extractTimestamp(t.id), [a, o] = r.useState(Date.now()), {
                seconds: l,
                minutes: d,
                hours: c
            } = (0, _.calculateActiveTimestampDurations)(t, a);
            return (0, i.jsx)(E, {
                textColor: n,
                startTime: s,
                seconds: l,
                minutes: d,
                hours: c,
                now: a,
                setNow: o
            })
        },
        E = e => {
            let {
                startTime: t,
                seconds: n,
                minutes: s,
                hours: l,
                now: u,
                setNow: c,
                textColor: E
            } = e, I = (0, d.useIsWindowFocused)(), T = r.useMemo(() => {
                let {
                    hours: e
                } = (0, _.calculateActiveTimestampDurationsFromStart)(t, u);
                return e > 0 ? 3e5 : 1e3
            }, [t, u]);
            r.useEffect(() => {
                let e = new a.Interval;
                return e.start(T, () => {
                    c(Date.now())
                }), !I && e.stop(), () => e.stop()
            }, [T, I, c]);
            let f = r.useMemo(() => (0, _.formatActiveTimestampFromUnits)(n, s, l), [n, s, l]);
            return (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                tabularNumbers: !0,
                color: E,
                children: f
            })
        };
    t.default = e => {
        let {
            entry: t,
            textColor: n
        } = e, r = (0, _.isEntryActive)(t), a = (0, s.useStateFromStores)([l.default], () => l.default.locale);
        return r ? (0, i.jsx)(c, {
            entry: t,
            textColor: n
        }) : (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: n,
            lineClamp: 1,
            children: (0, _.formatEndedTimestamp)(t, a)
        })
    }
}