function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("689938"),
        a = n("615410");

    function o(e) {
        let {
            count: t
        } = e;
        return (0, i.jsxs)("div", {
            className: a.countContainer,
            children: [(0, i.jsx)("div", {
                className: a.dot
            }), (0, i.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "header-secondary",
                children: s.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
                    count: t
                })
            })]
        })
    }
}