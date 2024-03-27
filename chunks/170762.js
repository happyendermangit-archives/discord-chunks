function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("465670"),
        a = n("666272"),
        o = n("921944"),
        l = n("689938"),
        u = n("981512");
    t.default = e => {
        let {
            markAsDismissed: t
        } = e;
        return (0, i.jsxs)("div", {
            className: u.wrapper,
            children: [(0, i.jsx)(a.default, {
                className: u.icon
            }), (0, i.jsx)("div", {
                className: u.content,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    children: l.default.Messages.EMOJI_PICKER_FAVORITES_TIP
                })
            }), (0, i.jsx)(r.Clickable, {
                onClick: () => t(o.ContentDismissActionType.UNKNOWN),
                children: (0, i.jsx)(s.default, {
                    className: u.close
                })
            })]
        })
    }
}