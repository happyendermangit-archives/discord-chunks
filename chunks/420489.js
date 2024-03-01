function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("77078"),
        a = n("945330"),
        s = n("51947"),
        r = n("994428"),
        o = n("782340"),
        u = n("831867"),
        d = e => {
            let {
                markAsDismissed: t
            } = e;
            return (0, l.jsxs)("div", {
                className: u.wrapper,
                children: [(0, l.jsx)(s.default, {
                    className: u.icon
                }), (0, l.jsx)("div", {
                    className: u.content,
                    children: (0, l.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        children: o.default.Messages.EMOJI_PICKER_FAVORITES_TIP
                    })
                }), (0, l.jsx)(i.Clickable, {
                    onClick: () => t(r.ContentDismissActionType.UNKNOWN),
                    children: (0, l.jsx)(a.default, {
                        className: u.close
                    })
                })]
            })
        }
}