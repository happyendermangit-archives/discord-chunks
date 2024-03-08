function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var a = n("37983");
    n("884691");
    var l = n("77078"),
        r = n("545158"),
        s = n("758710"),
        i = n("782340"),
        d = n("446204");
    let u = e => {
        let {
            data: {
                url: t,
                link_text: n,
                link_description: i,
                is_localized: u
            }
        } = e;
        return u ? (0, a.jsxs)(l.Clickable, {
            role: "link",
            className: d.linkButton,
            onClick: () => {
                (0, r.default)(t)
            },
            children: [(0, a.jsxs)("div", {
                className: d.linkTextContainer,
                children: [(0, a.jsx)(l.Text, {
                    className: d.linkText,
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

    function o(e) {
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
                return (0, a.jsx)(u, {
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