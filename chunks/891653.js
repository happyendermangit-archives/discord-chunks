function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return l
        }
    });
    var s = t("37983");
    t("884691");
    var d = t("414456"),
        n = t.n(d),
        c = t("77078"),
        i = t("216422"),
        r = t("782340"),
        o = t("321562");

    function l(e) {
        let {
            text: a = r.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            className: t
        } = e;
        return (0, s.jsx)(c.Tooltip, {
            text: a,
            children: e => (0, s.jsx)(c.Clickable, {
                ...e,
                children: (0, s.jsx)(i.default, {
                    className: n(o.nitroWheel, t)
                })
            })
        })
    }
}