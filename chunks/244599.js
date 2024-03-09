function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var a = n("37983"),
        l = n("884691"),
        r = n("414456"),
        s = n.n(r),
        i = n("77078"),
        d = n("367376"),
        u = n("306160"),
        o = n("782340"),
        c = n("12961");

    function m(e) {
        let {
            element: {
                data: {
                    title: t,
                    body: n,
                    sms: r,
                    is_localized: m
                }
            }
        } = e, [f, _] = l.useState(!1), E = l.useRef(d.default.reactParserFor(d.default.defaultRules));
        return m ? (0, a.jsxs)("div", {
            className: c.container,
            children: [(0, a.jsx)(i.Heading, {
                variant: "heading-sm/semibold",
                color: "header-secondary",
                className: c.header,
                children: t
            }), (0, a.jsx)(i.Text, {
                variant: "text-sm/normal",
                className: c.bodyText,
                children: E.current(n)
            }), (0, a.jsx)("div", {
                className: c.smsInfoContainer,
                children: (0, a.jsxs)("div", {
                    className: s(c.smsNumberContainer, {
                        [c.copied]: f
                    }),
                    children: [(0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        selectable: !0,
                        className: c.smsNumberText,
                        children: r
                    }), (0, a.jsx)(i.Button, {
                        size: i.Button.Sizes.SMALL,
                        className: c.trailingButton,
                        onClick: () => {
                            (0, u.copy)(r) && _(!0)
                        },
                        color: i.Button.Colors.PRIMARY,
                        children: f ? o.default.Messages.COPIED : o.default.Messages.COPY
                    })]
                })
            })]
        }) : null
    }
}