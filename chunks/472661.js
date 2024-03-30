function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("622208"),
        a = n("412791"),
        u = n("659643"),
        s = n("941504"),
        l = n("449509");

    function c(e) {
        var t = e.analyticsSection,
            n = e.buttonText;
        return r.createElement(i.default, {
            className: l.premiumButton,
            innerClassName: l.premiumButtonInner,
            color: o.Button.Colors.GREEN,
            size: o.Button.Sizes.SMALL,
            onClick: function() {
                return (0, u.default)({
                    section: t
                })
            }
        }, r.createElement(a.default, {
            className: l.premiumButtonNitroWheel
        }), null != n ? n : s.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_CTA)
    }
}