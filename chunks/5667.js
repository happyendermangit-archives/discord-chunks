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
    var i, l, a, s, r = n("37983"),
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
            headerClassName: i,
            content: l,
            contentClassName: a,
            buttonCTA: s,
            secondaryButtonCTA: u,
            onClick: p,
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
            buttonLayout: T = 0
        } = e;
        o.useEffect(() => {
            null == y || y()
        }, []);
        let _ = null != u;
        return (0, r.jsxs)("div", {
            className: d(t, m.upsellTooltipWrapper, m[C]),
            children: [g, null == n ? null : (0, r.jsx)(c.Heading, {
                className: d(i, m.upsellTooltipHeader),
                variant: "heading-md/semibold",
                children: n
            }), (0, r.jsx)(c.Text, {
                color: "always-white",
                className: d(a, m.content),
                variant: "text-sm/normal",
                children: l
            }), null != s || _ ? (0, r.jsxs)("div", {
                className: d(m.upsellButtonsContainer, {
                    [m.upsellButtonsAdjacent]: 0 === T,
                    [m.upsellButtonsStacked]: 1 === T
                }),
                children: [_ ? (0, r.jsx)(c.Button, {
                    ...E,
                    onClick: () => {
                        null == h || h(), null == S || S(f.ContentDismissActionType.SECONDARY)
                    },
                    children: u
                }) : null, null == s ? null : (0, r.jsx)(c.Button, {
                    className: d({
                        [m.fullWidth]: !_
                    }, x.className),
                    color: x.color,
                    look: x.look,
                    onClick: e => {
                        p(e), null == S || S(f.ContentDismissActionType.PRIMARY)
                    },
                    children: s
                })]
            }) : null]
        })
    }(i = a || (a = {})).TOP_CENTER = "caretTopCenter", i.TOP_RIGHT = "caretTopRight", i.TOP_LEFT = "caretTopLeft", i.BOTTOM_CENTER = "caretBottomCenter", i.BOTTOM_LEFT = "caretBottomLeft", i.LEFT_CENTER = "caretLeftCenter", i.LEFT_TOP = "caretLeftTop", i.RIGHT_CENTER = "caretRightCenter", (l = s || (s = {}))[l.ADJACENT = 0] = "ADJACENT", l[l.STACKED = 1] = "STACKED", p.CaretPosition = a, p.ButtonLayout = s
}