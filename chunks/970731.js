function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ButtonLayout: function() {
            return s
        },
        CaretPosition: function() {
            return a
        },
        default: function() {
            return I
        }
    });
    var i, r, a, s, o = n("735250"),
        l = n("470079"),
        u = n("120356"),
        d = n.n(u),
        _ = n("481060"),
        c = n("921944"),
        E = n("79469");

    function I(e) {
        let {
            className: t,
            header: n,
            headerClassName: i,
            content: r,
            contentClassName: a,
            buttonCTA: s,
            secondaryButtonCTA: u,
            onClick: I,
            onSecondaryClick: T,
            buttonProps: f = {
                color: _.Button.Colors.BRAND,
                look: _.Button.Looks.FILLED
            },
            secondaryButtonProps: S = {
                color: _.Button.Colors.BRAND,
                look: _.Button.Looks.INVERTED
            },
            onComponentMount: h,
            asset: A,
            markAsDismissed: m,
            caretPosition: N = "caretTopCenter",
            buttonLayout: p = 0
        } = e;
        l.useEffect(() => {
            null == h || h()
        }, []);
        let O = null != u;
        return (0, o.jsxs)("div", {
            className: d()(t, E.upsellTooltipWrapper, E[N]),
            children: [A, null == n ? null : (0, o.jsx)(_.Heading, {
                className: d()(i, E.upsellTooltipHeader),
                variant: "heading-md/semibold",
                children: n
            }), (0, o.jsx)(_.Text, {
                color: "always-white",
                className: d()(a, E.content),
                variant: "text-sm/normal",
                children: r
            }), null != s || O ? (0, o.jsxs)("div", {
                className: d()(E.upsellButtonsContainer, {
                    [E.upsellButtonsAdjacent]: 0 === p,
                    [E.upsellButtonsStacked]: 1 === p
                }),
                children: [O ? (0, o.jsx)(_.Button, {
                    ...S,
                    onClick: () => {
                        null == T || T(), null == m || m(c.ContentDismissActionType.SECONDARY)
                    },
                    children: u
                }) : null, null == s ? null : (0, o.jsx)(_.Button, {
                    className: d()({
                        [E.fullWidth]: !O
                    }, f.className),
                    color: f.color,
                    look: f.look,
                    innerClassName: f.innerClassName,
                    onClick: e => {
                        I(e), null == m || m(c.ContentDismissActionType.PRIMARY)
                    },
                    children: s
                })]
            }) : null]
        })
    }(i = a || (a = {})).TOP_CENTER = "caretTopCenter", i.TOP_RIGHT = "caretTopRight", i.TOP_LEFT = "caretTopLeft", i.BOTTOM_CENTER = "caretBottomCenter", i.BOTTOM_LEFT = "caretBottomLeft", i.LEFT_CENTER = "caretLeftCenter", i.LEFT_TOP = "caretLeftTop", i.RIGHT_CENTER = "caretRightCenter", (r = s || (s = {}))[r.ADJACENT = 0] = "ADJACENT", r[r.STACKED = 1] = "STACKED", I.CaretPosition = a, I.ButtonLayout = s
}