function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("222007"), n("781738");
    var s = n("730290"),
        i = n("49111");
    let r = /-/g;

    function a(e) {
        let [, , t, n] = e.split("/"), a = null == t ? void 0 : t.toUpperCase().replace(r, "_"), o = null == n ? void 0 : n.toUpperCase().replace(r, "_");
        if (i.UserSettingsSections.hasOwnProperty(a) && (null == o || "" === o || i.UserSettingsSections.hasOwnProperty(o))) {
            let {
                source: e
            } = (0, s.parse)(location.search);
            return {
                source: e,
                section: i.UserSettingsSections[a],
                subsection: o
            }
        }
        return null
    }
}