function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("976644"),
        a = n("466111"),
        o = n("929204"),
        l = n("689938"),
        u = n("450671");

    function d(e) {
        let {
            analyticsSection: t,
            buttonText: n
        } = e;
        return (0, i.jsxs)(s.default, {
            className: u.premiumButton,
            innerClassName: u.premiumButtonInner,
            color: r.Button.Colors.GREEN,
            size: r.Button.Sizes.SMALL,
            onClick: () => (0, o.default)({
                section: t
            }),
            children: [(0, i.jsx)(a.default, {
                className: u.premiumButtonNitroWheel
            }), null != n ? n : l.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_CTA]
        })
    }
}