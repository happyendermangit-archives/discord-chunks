function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("812206");

    function r(e) {
        var t;
        let {
            applicationId: n,
            activityConfigs: r,
            applications: s
        } = e, a = null !== (t = null == s ? void 0 : s.find(e => e.id === n)) && void 0 !== t ? t : i.default.getApplication(n), o = r.find(e => e.application_id === n);
        return null == o || null == a ? null : {
            activity: o,
            application: a
        }
    }
}