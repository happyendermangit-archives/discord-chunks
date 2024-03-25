function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CaretPosition: function() {
            return a
        },
        ButtonLayout: function() {
            return s
        },
        default: function() {
            return m
        }
    });
    var i, l, a, s, r = n("37983"),
        o = n("884691"),
        u = n("414456"),
        d = n.n(u),
        c = n("77078"),
        f = n("994428"),
        p = n("321490");

    function m(e) {
        let {
            className: t,
            header: n,
            headerClassName: i,
            content: l,
            contentClassName: a,
            buttonCTA: s,
            secondaryButtonCTA: u,
            onClick: m,
            onSecondaryClick: h,
            buttonProps: x = {
                color: c.Button.Colors.BRAND,
                look: c.Button.Looks.FILLED
            },
            secondaryButtonProps: E = {
                color: c.Button.Colors.BRAND,
                look: c.Button.Looks.INVERTED
            },
            onComponentMount: y,
            asset: g,
            markAsDismissed: S,
            caretPosition: C = "caretTopCenter",
            buttonLayout: _ = 0
        } = e;
        o.useEffect(() => {
            null == y || y()
        }, []);
        let T = null != u;
        return (0, r.jsxs)("div", {
            className: d(t, p.upsellTooltipWrapper, p[C]),
            children: [g, null == n ? null : (0, r.jsx)(c.Heading, {
                className: d(i, p.upsellTooltipHeader),
                variant: "heading-md/semibold",
                children: n
            }), (0, r.jsx)(c.Text, {
                color: "always-white",
                className: d(a, p.content),
                variant: "text-sm/normal",
                children: l
            }), null != s || T ? (0, r.jsxs)("div", {
                className: d(p.upsellButtonsContainer, {
                    [p.upsellButtonsAdjacent]: 0 === _,
                    [p.upsellButtonsStacked]: 1 === _
                }),
                children: [T ? (0, r.jsx)(c.Button, {
                    ...E,
                    onClick: () => {
                        null == h || h(), null == S || S(f.ContentDismissActionType.SECONDARY)
                    },
                    children: u
                }) : null, null == s ? null : (0, r.jsx)(c.Button, {
                    className: d({
                        [p.fullWidth]: !T
                    }, x.className),
                    color: x.color,
                    look: x.look,
                    onClick: e => {
                        m(e), null == S || S(f.ContentDismissActionType.PRIMARY)
                    },
                    children: s
                })]
            }) : null]
        })
    }(i = a || (a = {})).TOP_CENTER = "caretTopCenter", i.TOP_RIGHT = "caretTopRight", i.TOP_LEFT = "caretTopLeft", i.BOTTOM_CENTER = "caretBottomCenter", i.BOTTOM_LEFT = "caretBottomLeft", i.LEFT_CENTER = "caretLeftCenter", i.LEFT_TOP = "caretLeftTop", i.RIGHT_CENTER = "caretRightCenter", (l = s || (s = {}))[l.ADJACENT = 0] = "ADJACENT", l[l.STACKED = 1] = "STACKED", m.CaretPosition = a, m.ButtonLayout = s
}