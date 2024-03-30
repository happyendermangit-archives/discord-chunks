function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("412791"),
        s = n("941504"),
        l = n("208565");

    function c(e) {
        var t = e.text,
            n = void 0 === t ? s.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : t,
            o = e.className;
        return r.createElement(a.Tooltip, {
            text: n
        }, function(e) {
            return r.createElement(a.Clickable, e, r.createElement(u.default, {
                className: i()(l.nitroWheel, o)
            }))
        })
    }
}