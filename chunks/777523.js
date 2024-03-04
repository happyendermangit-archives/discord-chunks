function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("222007"), n("781738");
    var i = n("730290"),
        s = n("49111");
    let r = /-/g;

    function a(e) {
        let [, , t, n] = e.split("/"), a = null == t ? void 0 : t.toUpperCase().replace(r, "_"), o = null == n ? void 0 : n.toUpperCase().replace(r, "_");
        if (s.UserSettingsSections.hasOwnProperty(a) && (null == o || "" === o || s.UserSettingsSections.hasOwnProperty(o))) {
            let {
                source: e
            } = (0, i.parse)(location.search);
            return {
                source: e,
                section: s.UserSettingsSections[a],
                subsection: o
            }
        }
        return null
    }
}