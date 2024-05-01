function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("47120");
    var i = n("280098"),
        r = n("37113");

    function a(e, t, n, a, s) {
        for (let o of r.ApplicationStreamSettingRequirements)
            if ((null == o.preset || e === o.preset) && t === o.resolution && n === o.fps && (0, i.default)(o, a, s)) return !0;
        return !1
    }
}