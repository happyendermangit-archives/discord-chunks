function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("223021"),
        l = n("55935"),
        u = n("689938"),
        d = n("822545");
    t.default = function(e) {
        let {
            children: t,
            className: n,
            compact: r = !1,
            timestamp: _,
            isVisibleOnlyOnHover: c = !1,
            cozyAlt: E = !1,
            isInline: I = !0,
            id: T,
            isEdited: f = !1
        } = e, S = (0, l.accessibilityLabelCalendarFormat)(_), h = r ? (0, l.dateFormat)(_, "LT") : (0, l.calendarFormat)(_), A = r ? (0, o.default)(h) : null, m = f ? u.default.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({
            timeFormatted: S
        }) : S;
        return (0, i.jsx)("span", {
            className: s()(n, A, {
                [d.timestamp]: !0,
                [d.timestampVisibleOnHover]: c,
                [d.timestampInline]: I,
                [d.alt]: E
            }),
            children: (0, i.jsx)(a.Tooltip, {
                text: (0, l.dateFormat)(_, "LLLL"),
                "aria-label": m,
                tooltipClassName: d.timestampTooltip,
                delay: 750,
                children: e => (0, i.jsx)("time", {
                    ...e,
                    id: T,
                    dateTime: _.toISOString(),
                    children: null != t ? t : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("i", {
                            className: d.separator,
                            "aria-hidden": !0,
                            children: r ? "[" : " — "
                        }), h, r && (0, i.jsxs)("i", {
                            className: d.separator,
                            "aria-hidden": !0,
                            children: ["]", " "]
                        })]
                    })
                })
            })
        })
    }
}