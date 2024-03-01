function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007");
    var a = n("294707"),
        r = n("686298");

    function s(e, t, n, s, l) {
        for (let i of r.ApplicationStreamSettingRequirements)
            if ((null == i.preset || e === i.preset) && t === i.resolution && n === i.fps && (0, a.default)(i, s, l)) return !0;
        return !1
    }
}