function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("866055"),
        i = n("941504");

    function a(e) {
        var t = e.id,
            n = e.width,
            a = void 0 === n ? o.CUSTOM_BASE_SIZE : n,
            u = o.ICONS_BY_ID[t];
        return null == u ? null : r.createElement("img", {
            src: u.iconSource,
            width: a,
            alt: i.default.Messages.SETTINGS_CUSTOM_APP_ICONS,
            draggable: !1
        })
    }
}