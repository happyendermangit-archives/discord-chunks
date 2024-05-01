function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120"), n("757143");
    var i = n("593473"),
        r = n("981631");
    let a = /-/g;

    function s(e) {
        let [, , t, n] = e.split("/"), s = null == t ? void 0 : t.toUpperCase().replace(a, "_"), o = null == n ? void 0 : n.toUpperCase().replace(a, "_");
        if (r.UserSettingsSections.hasOwnProperty(s) && (null == o || "" === o || r.UserSettingsSections.hasOwnProperty(o))) {
            let {
                source: e
            } = (0, i.parse)(location.search);
            return {
                source: e,
                section: r.UserSettingsSections[s],
                subsection: o
            }
        }
        return null
    }
}