function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("913527"),
        a = n.n(s),
        o = n("217379"),
        l = n.n(o),
        u = n("442837"),
        d = n("706454");
    n("49885");
    var _ = n("743655");

    function c(e) {
        let {
            value: t = a()().local(),
            minDate: n,
            maxDate: s,
            onSelect: o,
            calendarClassName: c,
            autoFocus: E,
            onClickOutside: I
        } = e, T = r.useCallback((e, t) => {
            null == o || o(a()(e), t)
        }, [o]), f = r.useMemo(() => t.toDate(), [t]), S = r.useMemo(() => null == s ? void 0 : s.toDate(), [s]), h = r.useMemo(() => null == n ? void 0 : n.toDate(), [n]), A = (0, u.useStateFromStores)([d.default], () => d.default.locale), m = r.useRef(null), N = r.useCallback(e => {
            let t = e.currentTarget;
            t.classList.contains("react-datepicker__day") && setTimeout(() => {
                var e, n;
                if (null === (e = m.current) || void 0 === e ? void 0 : e.contains(t)) return;
                let i = null === (n = m.current) || void 0 === n ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
                null != i && i.focus()
            }, 100)
        }, []);
        return (0, i.jsx)("div", {
            ref: m,
            className: _.calendarPicker,
            children: (0, i.jsx)(l(), {
                calendarClassName: c,
                selected: f,
                onChange: T,
                autoFocus: E,
                fixedHeight: !0,
                inline: !0,
                locale: A,
                maxDate: S,
                minDate: h,
                onKeyDown: N,
                onClickOutside: I
            })
        })
    }
}