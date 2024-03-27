function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("202120"),
        a = n("553795"),
        o = n("915863"),
        l = n("689938"),
        u = n("154278");

    function d(e) {
        let {
            color: t,
            look: n,
            platform: d
        } = e;
        return (0, r.useStateFromStores)([a.default], () => a.default.getAccounts().some(e => e.type === d.type)) ? null : (0, i.jsx)(o.default, {
            onClick: () => (0, s.default)(d.type, "Activity Action"),
            color: t,
            look: n,
            fullWidth: !0,
            children: (0, i.jsxs)("div", {
                className: u.flex,
                children: [(0, i.jsx)("img", {
                    alt: "",
                    className: u.platformIcon,
                    src: d.icon.whiteSVG
                }), l.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                    platform: d.name
                })]
            })
        }, "connect-platform-activity")
    }
}