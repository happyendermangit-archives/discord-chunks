function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("77078"),
        r = n("782340"),
        o = n("326436");

    function u(e) {
        let t, {
            className: n,
            src: i,
            unicodeEmoji: u,
            name: d,
            size: c = 20,
            enableTooltip: f = !0,
            enableHeight: m = !0,
            onClick: p
        } = e;
        if (null == i && null == u) return null;
        return (0, l.jsx)(s.TooltipContainer, {
            text: d,
            "aria-label": !1,
            shouldShow: f,
            element: "span",
            children: (t = (0, l.jsx)("img", {
                alt: "",
                "aria-label": r.default.Messages.ROLE_ICON_ALT_TEXT.format({
                    name: d
                }),
                className: a(o.roleIcon, n, {
                    [o.clickable]: null != p
                }),
                height: m ? c : void 0,
                src: i,
                width: c
            }), (null != u && (t = (0, l.jsx)("img", {
                alt: "",
                "aria-label": u.allNamesString,
                className: a(o.roleIcon, n, {
                    [o.clickable]: null != p
                }),
                height: m ? c : void 0,
                src: u.url,
                width: c
            })), null == p) ? (0, l.jsx)(s.FocusRing, {
                offset: {
                    left: 5
                },
                children: t
            }) : (0, l.jsx)(s.Clickable, {
                onClick: p,
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