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
            onComponentMount: x,
            asset: E,
            markAsDismissed: y,
            caretPosition: g = "caretTopCenter",
            buttonLayout: S = 0
        } = e;
        o.useEffect(() => {
            null == x || x()
        }, []);
        let C = null != u;
        return (0, r.jsxs)("div", {
            className: d(t, p.upsellTooltipWrapper, p[g]),
            children: [E, null == n ? null : (0, r.jsx)(c.Heading, {
                className: d(i, p.upsellTooltipHeader),
                variant: "heading-md/semibold",
                children: n
            }), (0, r.jsx)(c.Text, {
                color: "always-white",
                className: d(a, p.content),
                variant: "text-sm/normal",
                children: l
            }), null != s || C ? (0, r.jsxs)("div", {
                className: d(p.upsellButtonsContainer, {
                    [p.upsellButtonsAdjacent]: 0 === S,
                    [p.upsellButtonsStacked]: 1 === S
                }),
                children: [C ? (0, r.jsx)(c.Button, {
                    color: c.Button.Colors.BRAND,
                    onClick: () => {
                        null == h || h(), null == y || y(f.ContentDismissActionType.SECONDARY)
                    },
                    children: u
                }) : null, null == s ? null : (0, r.jsx)(c.Button, {
                    className: d({
                        [p.fullWidth]: !C
                    }),
                    color: c.Button.Colors.BRAND,
                    look: c.Button.Looks.INVERTED,
                    onClick: e => {
                        m(e), null == y || y(f.ContentDismissActionType.PRIMARY)
                    },
                    children: s
                })]
            }) : null]
        })
    }(i = a || (a = {})).TOP_CENTER = "caretTopCenter", i.TOP_RIGHT = "caretTopRight", i.TOP_LEFT = "caretTopLeft", i.BOTTOM_CENTER = "caretBottomCenter", i.BOTTOM_LEFT = "caretBottomLeft", i.LEFT_CENTER = "caretLeftCenter", i.LEFT_TOP = "caretLeftTop", i.RIGHT_CENTER = "caretRightCenter", (l = s || (s = {}))[l.ADJACENT = 0] = "ADJACENT", l[l.STACKED = 1] = "STACKED", m.CaretPosition = a, m.ButtonLayout = s
}