function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isForumActivityExperimentEnabled: function() {
            return a
        }
    });
    var i = n("943314"),
        s = n("531869"),
        r = n("49111");

    function a(e) {
        let t = s.default.getCurrentConfig({
                guildId: null != e ? e : r.EMPTY_STRING_SNOWFLAKE_ID,
                location: "3fde52_1"
            }),
            n = i.default.getCurrentConfig({
                location: "3fde52_2"
            });
        return !!(t.enabled || n.enabled)
    }
}