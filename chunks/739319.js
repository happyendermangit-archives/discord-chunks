function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("47120");
    var a = n("735250"),
        l = n("470079"),
        r = n("120356"),
        s = n.n(r),
        i = n("481060"),
        d = n("454585"),
        o = n("572004"),
        u = n("689938"),
        c = n("489054");

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
        } = e, [_, f] = l.useState(!1), E = l.useRef(d.default.reactParserFor(d.default.defaultRules));
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
                className: c.__invalid_smsInfoContainer,
                children: (0, a.jsxs)("div", {
                    className: s()(c.smsNumberContainer, {
                        [c.copied]: _
                    }),
                    children: [(0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        selectable: !0,
                        className: c.smsNumberText,
                        children: r
                    }), (0, a.jsx)(i.Button, {
                        size: i.Button.Sizes.SMALL,
                        className: c.__invalid_trailingButton,
                        onClick: () => {
                            (0, o.copy)(r) && f(!0)
                        },
                        color: i.Button.Colors.PRIMARY,
                        children: _ ? u.default.Messages.COPIED : u.default.Messages.COPY
                    })]
                })
            })]
        }) : null
    }
}