function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return I
        }
    });
    var i, r, a = s("37983");
    s("884691");
    var l = s("414456"),
        o = s.n(l),
        n = s("394846"),
        u = s("77078"),
        d = s("945330"),
        c = s("381546"),
        E = s("782340"),
        _ = s("371938");
    (i = r || (r = {})).DEFAULT = "", i.BOLD = "Bold", i.SOLID = "Solid";
    let T = e => {
        let {
            closeAction: t,
            variant: s,
            keybind: i,
            className: r
        } = e;
        return (0, a.jsxs)("div", {
            className: o(_.container, r),
            children: [(0, a.jsx)(u.Clickable, {
                className: o(_.closeButton, {
                    [_.closeButtonBold]: "Bold" === s,
                    [_.closeButtonSolid]: "Solid" === s
                }),
                onClick: t,
                "aria-label": E.default.Messages.CLOSE,
                children: "Solid" === s ? (0, a.jsx)(c.default, {
                    width: 24,
                    height: 24,
                    "aria-hidden": !0
                }) : (0, a.jsx)(d.default, {
                    width: 18,
                    height: 18,
                    "aria-hidden": !0
                })
            }), n.isMobile ? null : (0, a.jsx)("div", {
                className: o(_.keybind),
                "aria-hidden": !0,
                children: i
            })]
        })
    };
    T.defaultProps = {
        variant: ""
    }, T.Variants = r;
    var I = T
}