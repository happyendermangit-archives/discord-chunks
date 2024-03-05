function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007");
    var a = n("294707"),
        r = n("686298");

    function s(e, t, n, s, i) {
        for (let l of r.ApplicationStreamSettingRequirements)
            if ((null == l.preset || e === l.preset) && t === l.resolution && n === l.fps && (0, a.default)(l, s, i)) return !0;
        return !1
    }
}