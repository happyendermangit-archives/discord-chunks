function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("866227"),
        a = n.n(r),
        o = n("900419"),
        l = n.n(o),
        u = n("446674"),
        d = n("915639");
    n("4828");
    var c = n("413713");

    function f(e) {
        let {
            value: t = a().local(),
            minDate: n,
            maxDate: r,
            onSelect: o,
            calendarClassName: f,
            autoFocus: _,
            onClickOutside: E
        } = e, h = s.useCallback((e, t) => {
            null == o || o(a(e), t)
        }, [o]), g = s.useMemo(() => t.toDate(), [t]), m = s.useMemo(() => null == r ? void 0 : r.toDate(), [r]), p = s.useMemo(() => null == n ? void 0 : n.toDate(), [n]), S = (0, u.useStateFromStores)([d.default], () => d.default.locale), v = s.useRef(null), T = s.useCallback(e => {
            let t = e.currentTarget;
            t.classList.contains("react-datepicker__day") && setTimeout(() => {
                var e, n;
                if (null === (e = v.current) || void 0 === e ? void 0 : e.contains(t)) return;
                let i = null === (n = v.current) || void 0 === n ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
                null != i && i.focus()
            }, 100)
        }, []);
        return (0, i.jsx)("div", {
            ref: v,
            className: c.calendarPicker,
            children: (0, i.jsx)(l, {
                calendarClassName: f,
                selected: g,
                onChange: h,
                autoFocus: _,
                fixedHeight: !0,
                inline: !0,
                locale: S,
                maxDate: m,
                minDate: p,
                onKeyDown: T,
                onClickOutside: E
            })
        })
    }
}