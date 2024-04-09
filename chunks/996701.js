function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var a = n("735250");
    n("470079");
    var l = n("481060"),
        r = n("782568"),
        s = n("441957"),
        i = n("689938"),
        d = n("265945");
    let o = e => {
        let {
            data: {
                url: t,
                link_text: n,
                link_description: i,
                is_localized: o
            }
        } = e;
        return o ? (0, a.jsxs)(l.Clickable, {
            role: "link",
            className: d.linkButton,
            onClick: () => {
                (0, r.default)(t)
            },
            children: [(0, a.jsxs)("div", {
                className: d.linkTextContainer,
                children: [(0, a.jsx)(l.Text, {
                    className: d.__invalid_linkText,
                    variant: "text-md/semibold",
                    children: n
                }), null != i && "" !== i && (0, a.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: i
                })]
            }), (0, a.jsx)(s.default, {
                className: d.linkIcon
            })]
        }) : null
    };

    function u(e) {
        let {
            elements: t
        } = e;
        if (null == t || 0 === t.length || null == t.find(e => {
                let {
                    data: t
                } = e;
                return t.is_localized
            })) return null;
        let n = t.map((e, t) => {
                let {
                    data: n
                } = e;
                return (0, a.jsx)(o, {
                    data: n
                }, "external-link+".concat(t))
            }),
            r = t.some(e => {
                let {
                    data: t
                } = e;
                return t.is_header_hidden
            });
        return (0, a.jsxs)("div", {
            className: d.linksContainer,
            children: [!r && (0, a.jsx)(l.Heading, {
                variant: "heading-sm/semibold",
                color: "header-secondary",
                className: d.header,
                children: i.default.Messages.LEARN_MORE
            }), n]
        })
    }
}