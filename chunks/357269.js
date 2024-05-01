function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("47120"), n("757143");
    var i = n("593473"),
        r = n("981631");
    let s = /-/g;

    function a(e) {
        let [, , t, n] = e.split("/"), a = null == t ? void 0 : t.toUpperCase().replace(s, "_"), o = null == n ? void 0 : n.toUpperCase().replace(s, "_");
        if (r.UserSettingsSections.hasOwnProperty(a) && (null == o || "" === o || r.UserSettingsSections.hasOwnProperty(o))) {
            let {
                source: e
            } = (0, i.parse)(location.search);
            return {
                source: e,
                section: r.UserSettingsSections[a],
                subsection: o
            }
        }
        return null
    }
}