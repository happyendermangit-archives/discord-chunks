function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("735250");
    n("470079");
    var r = n("803997"),
        i = n.n(r),
        s = n("481060"),
        l = n("223021"),
        o = n("55935"),
        u = n("689938"),
        c = n("50182");
    t.default = function(e) {
        let {
            children: t,
            className: n,
            compact: r = !1,
            timestamp: d,
            isVisibleOnlyOnHover: m = !1,
            cozyAlt: f = !1,
            isInline: g = !0,
            id: p,
            isEdited: E = !1
        } = e, S = (0, o.accessibilityLabelCalendarFormat)(d), A = r ? (0, o.dateFormat)(d, "LT") : (0, o.calendarFormat)(d), h = r ? (0, l.default)(A) : null, I = E ? u.default.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({
            timeFormatted: S
        }) : S;
        return (0, a.jsx)("span", {
            className: i()(n, h, {
                [c.timestamp]: !0,
                [c.timestampVisibleOnHover]: m,
                [c.timestampInline]: g,
                [c.alt]: f
            }),
            children: (0, a.jsx)(s.Tooltip, {
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
                            children: r ? "[" : " — "
                        }), A, r && (0, a.jsxs)("i", {
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