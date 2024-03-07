function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var s = n("37983");
    n("884691");
    var a = n("307439"),
        r = n("486252"),
        l = n("782340"),
        i = n("890957");

    function o() {
        let {
            required: e,
            checked: t
        } = (0, a.usePromoEmailConsentStore)();
        return e ? (0, s.jsx)(r.default, {
            value: t,
            subText: l.default.Messages.PROMOTIONAL_EMAIL_OPT_IN_CONSENT,
            onChange: a.setPromoEmailConsentChecked,
            marginTopStyle: i.marginTop8,
            muted: !0
        }) : null
    }
}