function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s = n("735250");
    n("470079");
    var a = n("120356"),
        o = n.n(a),
        l = n("873546"),
        u = n("481060"),
        d = n("465670"),
        _ = n("696202"),
        c = n("689938"),
        E = n("966646");
    (i = r || (r = {})).DEFAULT = "", i.BOLD = "Bold", i.SOLID = "Solid";
    let I = e => {
        let {
            closeAction: t,
            variant: n,
            keybind: i,
            className: r
        } = e;
        return (0, s.jsxs)("div", {
            className: o()(E.container, r),
            children: [(0, s.jsx)(u.Clickable, {
                className: o()(E.closeButton, {
                    [E.closeButtonBold]: "Bold" === n,
                    [E.closeButtonSolid]: "Solid" === n
                }),
                onClick: t,
                "aria-label": c.default.Messages.CLOSE,
                children: "Solid" === n ? (0, s.jsx)(_.default, {
                    width: 24,
                    height: 24,
                    "aria-hidden": !0
                }) : (0, s.jsx)(d.default, {
                    width: 18,
                    height: 18,
                    "aria-hidden": !0
                })
            }), l.isMobile ? null : (0, s.jsx)("div", {
                className: o()(E.keybind),
                "aria-hidden": !0,
                children: i
            })]
        })
    };
    I.defaultProps = {
        variant: ""
    }, I.Variants = r, t.default = I
}