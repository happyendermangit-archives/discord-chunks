function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("782340"),
        o = n("326436");

    function u(e) {
        let t, {
            className: n,
            src: l,
            unicodeEmoji: u,
            name: d,
            size: c = 20,
            enableTooltip: f = !0,
            enableHeight: p = !0,
            onClick: m
        } = e;
        if (null == l && null == u) return null;
        return (0, i.jsx)(s.TooltipContainer, {
            text: d,
            "aria-label": !1,
            shouldShow: f,
            element: "span",
            children: (t = (0, i.jsx)("img", {
                alt: "",
                "aria-label": r.default.Messages.ROLE_ICON_ALT_TEXT.format({
                    name: d
                }),
                className: a(o.roleIcon, n, {
                    [o.clickable]: null != m
                }),
                height: p ? c : void 0,
                src: l,
                width: c
            }), (null != u && (t = (0, i.jsx)("img", {
                alt: "",
                "aria-label": u.allNamesString,
                className: a(o.roleIcon, n, {
                    [o.clickable]: null != m
                }),
                height: p ? c : void 0,
                src: u.url,
                width: c
            })), null == m) ? (0, i.jsx)(s.FocusRing, {
                offset: {
                    left: 5
                },
                children: t
            }) : (0, i.jsx)(s.Clickable, {
                onClick: m,
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