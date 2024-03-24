function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var a = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        i = n("77078"),
        l = n("38600"),
        o = n("888400"),
        u = n("782340"),
        c = n("356296"),
        d = function(e) {
            let {
                children: t,
                className: n,
                compact: s = !1,
                timestamp: d,
                isVisibleOnlyOnHover: m = !1,
                cozyAlt: f = !1,
                isInline: g = !0,
                id: p,
                isEdited: E = !1
            } = e, A = (0, o.accessibilityLabelCalendarFormat)(d), S = s ? (0, o.dateFormat)(d, "LT") : (0, o.calendarFormat)(d), h = s ? (0, l.default)(S) : null, I = E ? u.default.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({
                timeFormatted: A
            }) : A;
            return (0, a.jsx)("span", {
                className: r(n, h, {
                    [c.timestamp]: !0,
                    [c.timestampVisibleOnHover]: m,
                    [c.timestampInline]: g,
                    [c.alt]: f
                }),
                children: (0, a.jsx)(i.Tooltip, {
                    text: (0, o.dateFormat)(d, "LLLL"),
                    "aria-label": I,
                    tooltipClassName: c.timestampTooltip,
                    delay: 750,
                    children: e => (0, a.jsx)("time", {
                        ...e,
                        id: p,
                        dateTime: d.toISOString(),
                        children: null != t ? t : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("i", {
                                className: c.separator,
                                "aria-hidden": !0,
                                children: s ? "[" : " — "
                            }), S, s && (0, a.jsxs)("i", {
                                className: c.separator,
                                "aria-hidden": !0,
                                children: ["]", " "]
                            })]
                        })
                    })
                })
            })
        }
}