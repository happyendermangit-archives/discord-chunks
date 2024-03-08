function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("77078"),
        a = n("945330"),
        s = n("51947"),
        r = n("994428"),
        o = n("782340"),
        u = n("831867"),
        d = e => {
            let {
                markAsDismissed: t
            } = e;
            return (0, i.jsxs)("div", {
                className: u.wrapper,
                children: [(0, i.jsx)(s.default, {
                    className: u.icon
                }), (0, i.jsx)("div", {
                    className: u.content,
                    children: (0, i.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        children: o.default.Messages.EMOJI_PICKER_FAVORITES_TIP
                    })
                }), (0, i.jsx)(l.Clickable, {
                    onClick: () => t(r.ContentDismissActionType.UNKNOWN),
                    children: (0, i.jsx)(a.default, {
                        className: u.close
                    })
                })]
            })
        }
}