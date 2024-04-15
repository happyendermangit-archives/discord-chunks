function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("689938"),
        l = n("594601");

    function u(e) {
        let t, {
            className: n,
            src: r,
            unicodeEmoji: u,
            name: d,
            size: _ = 20,
            enableTooltip: c = !0,
            enableHeight: E = !0,
            onClick: I
        } = e;
        if (null == r && null == u) return null;
        return (0, i.jsx)(a.TooltipContainer, {
            text: d,
            "aria-label": !1,
            shouldShow: c,
            element: "span",
            children: (t = (0, i.jsx)("img", {
                alt: "",
                "aria-label": o.default.Messages.ROLE_ICON_ALT_TEXT.format({
                    name: d
                }),
                className: s()(l.roleIcon, n, {
                    [l.clickable]: null != I
                }),
                height: E ? _ : void 0,
                src: r,
                width: _
            }), (null != u && (t = (0, i.jsx)("img", {
                alt: "",
                "aria-label": u.allNamesString,
                className: s()(l.roleIcon, n, {
                    [l.clickable]: null != I
                }),
                height: E ? _ : void 0,
                src: u.url,
                width: _
            })), null == I) ? (0, i.jsx)(a.FocusRing, {
                offset: {
                    left: 5
                },
                children: t
            }) : (0, i.jsx)(a.Clickable, {
                onClick: I,
                tag: "span",
                focusProps: {
                    offset: {
                        left: 5
                    }
                },
                children: t
            }))
        })
    }
}