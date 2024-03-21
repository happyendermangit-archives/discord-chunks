function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DateInput: function() {
            return f
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("227645"),
        o = n("130969"),
        l = n("442761"),
        u = n("201959"),
        d = n("943232"),
        c = n("556388"),
        _ = n("182893");

    function f(e) {
        let {
            value: t,
            onSelect: n,
            dateFormat: s = "MMM D, YYYY",
            minDate: f,
            maxDate: E,
            disabled: h = !1
        } = e;
        return (0, i.jsx)(l.Popout, {
            renderPopout: function(e) {
                let {
                    closePopout: s
                } = e;
                return (0, i.jsx)(o.Dialog, {
                    children: (0, i.jsx)(u.default, {
                        minDate: f,
                        maxDate: E,
                        value: t,
                        onSelect: e => {
                            n(e), s()
                        },
                        calendarClassName: c.calendarContainer,
                        onClickOutside: s,
                        autoFocus: !0
                    })
                })
            },
            position: "bottom",
            children: e => {
                let {
                    onClick: n,
                    ...o
                } = e;
                return (0, i.jsx)(a.Clickable, {
                    ...o,
                    className: r(_.inputDefault, c.container, {
                        [_.disabled]: h,
                        [c.disabled]: h
                    }),
                    onClick: h ? void 0 : n,
                    "aria-disabled": h,
                    children: (0, i.jsxs)("div", {
                        className: c.content,
                        children: [(0, i.jsx)("div", {
                            className: c.text,
                            children: null == t ? void 0 : t.format(s)
                        }), (0, i.jsx)(d.default, {
                            className: c.icon
                        })]
                    })
                })
            }
        })
    }
}