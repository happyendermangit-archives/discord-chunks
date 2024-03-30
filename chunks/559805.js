function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("342942");

    function o(e) {
        var t, n = e.applicationId,
            o = e.activityConfigs,
            i = e.applications,
            a = null !== (t = null == i ? void 0 : i.find(function(e) {
                return e.id === n
            })) && void 0 !== t ? t : r.default.getApplication(n),
            u = o.find(function(e) {
                return e.application_id === n
            });
        return null == u || null == a ? null : {
            activity: u,
            application: a
        }
    }
}