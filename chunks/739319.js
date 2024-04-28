function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("454585"),
        u = n("572004"),
        d = n("689938"),
        _ = n("501496");

    function c(e) {
        let {
            element: {
                data: {
                    title: t,
                    body: n,
                    sms: s,
                    is_localized: c
                }
            }
        } = e, [E, I] = r.useState(!1), T = r.useRef(l.default.reactParserFor(l.default.defaultRules));
        return c ? (0, i.jsxs)("div", {
            className: _.container,
            children: [(0, i.jsx)(o.Heading, {
                variant: "heading-sm/semibold",
                color: "header-secondary",
                className: _.header,
                children: t
            }), (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                className: _.bodyText,
                children: T.current(n)
            }), (0, i.jsx)("div", {
                className: _.__invalid_smsInfoContainer,
                children: (0, i.jsxs)("div", {
                    className: a()(_.smsNumberContainer, {
                        [_.copied]: E
                    }),
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        selectable: !0,
                        className: _.smsNumberText,
                        children: s
                    }), (0, i.jsx)(o.Button, {
                        size: o.Button.Sizes.SMALL,
                        className: _.__invalid_trailingButton,
                        onClick: () => {
                            (0, u.copy)(s) && I(!0)
                        },
                        color: o.Button.Colors.PRIMARY,
                        children: E ? d.default.Messages.COPIED : d.default.Messages.COPY
                    })]
                })
            })]
        }) : null
    }
}