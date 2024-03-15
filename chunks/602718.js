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
        } = t, u = null !== (e = null == a ? void 0 : a.find(t => t.id === i)) && void 0 !== e ? e : n.default.getApplication(i), r = l.find(t => t.application_id === i);
        return null == r || null == u ? null : {
            activity: r,
            application: u
        }
    }
}