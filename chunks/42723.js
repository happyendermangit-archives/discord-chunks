function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return r
        }
    });
    var t = E("37983");
    E("884691");
    var o = E("605475"),
        n = E("782340");

    function r(e) {
        let {
            id: _,
            width: E = o.CUSTOM_BASE_SIZE
        } = e, r = o.ICONS_BY_ID[_];
        return null == r ? null : (0, t.jsx)("img", {
            src: r.iconSource,
            width: E,
            alt: n.default.Messages.SETTINGS_CUSTOM_APP_ICONS,
            draggable: !1
        })
    }
}