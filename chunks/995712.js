function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("735250");
    n("470079");
    var l = n("481060"),
        r = n("806519"),
        s = n("768581"),
        i = n("689938"),
        d = n("765339");
    t.default = e => {
        var t;
        let {
            entry: n
        } = e, {
            id: o,
            icon: u,
            name: c
        } = n, m = null !== (t = s.default.getGuildIconURL({
            id: o,
            icon: u,
            size: 32
        })) && void 0 !== t ? t : void 0;
        return (0, a.jsxs)("div", {
            className: d.container,
            children: [(0, a.jsx)(l.Heading, {
                className: d.header,
                variant: "heading-sm/semibold",
                children: i.default.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
            }), (0, a.jsx)("div", {
                className: d.guildContainer,
                children: (0, a.jsxs)("div", {
                    className: d.guildInfo,
                    children: [(0, a.jsx)(r.default, {
                        mask: r.default.Masks.SQUIRCLE,
                        width: 32,
                        height: 32,
                        className: d.guildIconMask,
                        children: (0, a.jsx)("img", {
                            src: m,
                            alt: "",
                            className: d.guildIcon
                        })
                    }), (0, a.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: c
                    })]
                })
            })]
        })
    }
}