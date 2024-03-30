function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        a = n("803997"),
        o = n.n(a),
        i = n("579875"),
        l = n("784184"),
        s = n("547700"),
        c = n("941504"),
        u = n("225687");

    function d(e) {
        var t = e.className;
        return r.createElement(s.TextBadge, {
            className: o()(t, u.badge),
            disableColor: !0,
            text: r.createElement("div", {
                className: u.innerBadge
            }, r.createElement(i.PollsIcon, {
                className: u.icon,
                color: l.tokens.colors.INTERACTIVE_ACTIVE
            }), r.createElement(l.Text, {
                variant: "text-xs/semibold",
                color: "interactive-active"
            }, c.default.Messages.POLL))
        })
    }
}