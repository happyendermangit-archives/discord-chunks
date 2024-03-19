function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return l
        }
    });
    var n = i("299285");

    function l(t) {
        var e;
        let {
            applicationId: i,
            activityConfigs: l,
            applications: a
        } = t, r = null !== (e = null == a ? void 0 : a.find(t => t.id === i)) && void 0 !== e ? e : n.default.getApplication(i), u = l.find(t => t.application_id === i);
        return null == u || null == r ? null : {
            activity: u,
            application: r
        }
    }
}