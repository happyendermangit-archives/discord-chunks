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
        a = n("181114"),
        s = n("216422"),
        r = n("113270"),
        o = n("782340"),
        u = n("855335");

    function d(e) {
        let {
            analyticsSection: t,
            buttonText: n
        } = e;
        return (0, l.jsxs)(a.default, {
            className: u.premiumButton,
            innerClassName: u.premiumButtonInner,
            color: i.Button.Colors.GREEN,
            size: i.Button.Sizes.SMALL,
            onClick: () => (0, r.default)({
                section: t
            }),
            children: [(0, l.jsx)(s.default, {
                className: u.premiumButtonNitroWheel
            }), null != n ? n : o.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_CTA]
        })
    }
}