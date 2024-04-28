function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("806519"),
        a = n("768581"),
        o = n("689938"),
        l = n("359959");
    t.default = e => {
        var t;
        let {
            entry: n
        } = e, {
            id: u,
            icon: d,
            name: _
        } = n, c = null !== (t = a.default.getGuildIconURL({
            id: u,
            icon: d,
            size: 32
        })) && void 0 !== t ? t : void 0;
        return (0, i.jsxs)("div", {
            className: l.container,
            children: [(0, i.jsx)(r.Heading, {
                className: l.header,
                variant: "heading-sm/semibold",
                children: o.default.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
            }), (0, i.jsx)("div", {
                className: l.guildContainer,
                children: (0, i.jsxs)("div", {
                    className: l.guildInfo,
                    children: [(0, i.jsx)(s.default, {
                        mask: s.default.Masks.SQUIRCLE,
                        width: 32,
                        height: 32,
                        className: l.guildIconMask,
                        children: (0, i.jsx)("img", {
                            src: c,
                            alt: "",
                            className: l.guildIcon
                        })
                    }), (0, i.jsx)(r.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: _
                    })]
                })
            })]
        })
    }
}