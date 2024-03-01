function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("37983"),
        r = n("884691"),
        s = n("866227"),
        a = n.n(s),
        o = n("900419"),
        l = n.n(o),
        u = n("446674"),
        c = n("915639");
    n("4828");
    var d = n("413713");

    function f(e) {
        let {
            value: t = a().local(),
            minDate: n,
            maxDate: s,
            onSelect: o,
            calendarClassName: f,
            autoFocus: E,
            onClickOutside: p
        } = e, h = r.useCallback((e, t) => {
            null == o || o(a(e), t)
        }, [o]), _ = r.useMemo(() => t.toDate(), [t]), S = r.useMemo(() => null == s ? void 0 : s.toDate(), [s]), m = r.useMemo(() => null == n ? void 0 : n.toDate(), [n]), T = (0, u.useStateFromStores)([c.default], () => c.default.locale), g = r.useRef(null), I = r.useCallback(e => {
            let t = e.currentTarget;
            t.classList.contains("react-datepicker__day") && setTimeout(() => {
                var e, n;
                if (null === (e = g.current) || void 0 === e ? void 0 : e.contains(t)) return;
                let i = null === (n = g.current) || void 0 === n ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
                null != i && i.focus()
            }, 100)
        }, []);
        return (0, i.jsx)("div", {
            ref: g,
            className: d.calendarPicker,
            children: (0, i.jsx)(l, {
                calendarClassName: f,
                selected: _,
                onChange: h,
                autoFocus: E,
                fixedHeight: !0,
                inline: !0,
                locale: T,
                maxDate: S,
                minDate: m,
                onKeyDown: I,
                onClickOutside: p
            })
        })
    }
}