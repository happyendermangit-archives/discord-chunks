function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("782568"),
        a = n("441957"),
        o = n("689938"),
        l = n("831124");
    let u = e => {
        let {
            data: {
                url: t,
                link_text: n,
                link_description: o,
                is_localized: u
            }
        } = e;
        return u ? (0, i.jsxs)(r.Clickable, {
            role: "link",
            className: l.linkButton,
            onClick: () => {
                (0, s.default)(t)
            },
            children: [(0, i.jsxs)("div", {
                className: l.linkTextContainer,
                children: [(0, i.jsx)(r.Text, {
                    className: l.__invalid_linkText,
                    variant: "text-md/semibold",
                    children: n
                }), null != o && "" !== o && (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: o
                })]
            }), (0, i.jsx)(a.default, {
                className: l.linkIcon
            })]
        }) : null
    };

    function d(e) {
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
                return (0, i.jsx)(u, {
                    data: n
                }, "external-link+".concat(t))
            }),
            s = t.some(e => {
                let {
                    data: t
                } = e;
                return t.is_header_hidden
            });
        return (0, i.jsxs)("div", {
            className: l.linksContainer,
            children: [!s && (0, i.jsx)(r.Heading, {
                variant: "heading-sm/semibold",
                color: "header-secondary",
                className: l.header,
                children: o.default.Messages.LEARN_MORE
            }), n]
        })
    }
}