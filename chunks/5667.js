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
            return p
        }
    });
    var l, i, a, s, r = n("37983"),
        o = n("884691"),
        u = n("414456"),
        d = n.n(u),
        c = n("77078"),
        f = n("994428"),
        m = n("321490");

    function p(e) {
        let {
            className: t,
            header: n,
            headerClassName: l,
            content: i,
            contentClassName: a,
            buttonCTA: s,
            secondaryButtonCTA: u,
            onClick: p,
            onSecondaryClick: h,
            onComponentMount: E,
            asset: g,
            markAsDismissed: C,
            caretPosition: S = "caretTopCenter",
            buttonLayout: T = 0
        } = e;
        o.useEffect(() => {
            null == E || E()
        }, []);
        let I = null != u;
        return (0, r.jsxs)("div", {
            className: d(t, m.upsellTooltipWrapper, m[S]),
            children: [g, null == n ? null : (0, r.jsx)(c.Heading, {
                className: d(l, m.upsellTooltipHeader),
                variant: "heading-md/semibold",
                children: n
            }), (0, r.jsx)(c.Text, {
                color: "always-white",
                className: d(a, m.content),
                variant: "text-sm/normal",
                children: i
            }), null != s || I ? (0, r.jsxs)("div", {
                className: d(m.upsellButtonsContainer, {
                    [m.upsellButtonsAdjacent]: 0 === T,
                    [m.upsellButtonsStacked]: 1 === T
                }),
                children: [I ? (0, r.jsx)(c.Button, {
                    color: c.Button.Colors.BRAND,
                    onClick: () => {
                        null == h || h(), null == C || C(f.ContentDismissActionType.SECONDARY)
                    },
                    children: u
                }) : null, null == s ? null : (0, r.jsx)(c.Button, {
                    className: d({
                        [m.fullWidth]: !I
                    }),
                    color: c.Button.Colors.BRAND,
                    look: c.Button.Looks.INVERTED,
                    onClick: e => {
                        p(e), null == C || C(f.ContentDismissActionType.PRIMARY)
                    },
                    children: s
                })]
            }) : null]
        })
    }(l = a || (a = {})).TOP_CENTER = "caretTopCenter", l.TOP_RIGHT = "caretTopRight", l.TOP_LEFT = "caretTopLeft", l.BOTTOM_CENTER = "caretBottomCenter", l.BOTTOM_LEFT = "caretBottomLeft", l.LEFT_CENTER = "caretLeftCenter", l.LEFT_TOP = "caretLeftTop", l.RIGHT_CENTER = "caretRightCenter", (i = s || (s = {}))[i.ADJACENT = 0] = "ADJACENT", i[i.STACKED = 1] = "STACKED", p.CaretPosition = a, p.ButtonLayout = s
}