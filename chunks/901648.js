function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isForumActivityExperimentEnabled: function() {
            return s
        }
    });
    var i = n("31377"),
        r = n("837934"),
        a = n("981631");

    function s(e) {
        let t = r.default.getCurrentConfig({
                guildId: null != e ? e : a.EMPTY_STRING_SNOWFLAKE_ID,
                location: "3fde52_1"
            }),
            n = i.default.getCurrentConfig({
                location: "3fde52_2"
            });
        return !!(t.enabled || n.enabled)
    }
}