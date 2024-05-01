function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120");
    var i = n("280098"),
        r = n("37113");

    function s(e, t, n, s, a) {
        for (let o of r.ApplicationStreamSettingRequirements)
            if ((null == o.preset || e === o.preset) && t === o.resolution && n === o.fps && (0, i.default)(o, s, a)) return !0;
        return !1
    }
}