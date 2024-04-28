function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DateInput: function() {
            return E
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("1561"),
        o = n("507274"),
        l = n("235874"),
        u = n("575535"),
        d = n("305878"),
        _ = n("745206"),
        c = n("12349");

    function E(e) {
        let {
            value: t,
            onSelect: n,
            dateFormat: r = "MMM D, YYYY",
            minDate: E,
            maxDate: I,
            disabled: T = !1
        } = e;
        return (0, i.jsx)(l.Popout, {
            renderPopout: function(e) {
                let {
                    closePopout: r
                } = e;
                return (0, i.jsx)(o.Dialog, {
                    children: (0, i.jsx)(u.default, {
                        minDate: E,
                        maxDate: I,
                        value: t,
                        onSelect: e => {
                            n(e), r()
                        },
                        calendarClassName: _.calendarContainer,
                        onClickOutside: r,
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
                    className: s()(c.inputDefault, _.container, {
                        [c.disabled]: T,
                        [_.disabled]: T
                    }),
                    onClick: T ? void 0 : n,
                    "aria-disabled": T,
                    children: (0, i.jsxs)("div", {
                        className: _.content,
                        children: [(0, i.jsx)("div", {
                            className: _.text,
                            children: null == t ? void 0 : t.format(r)
                        }), (0, i.jsx)(d.default, {
                            className: _.icon
                        })]
                    })
                })
            }
        })
    }
}