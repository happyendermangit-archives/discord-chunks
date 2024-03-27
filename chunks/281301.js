function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        INCREASED_ACTIVITY_LIST_FORUM_LAYOUT: function() {
            return a
        },
        useForumActivityExperiment: function() {
            return o
        }
    });
    var i = n("31377"),
        r = n("837934"),
        s = n("981631");
    let a = 3;

    function o(e) {
        let t = r.default.useExperiment({
                guildId: null != e ? e : s.EMPTY_STRING_SNOWFLAKE_ID,
                location: "9a247a_1"
            }),
            n = i.default.useExperiment({
                location: "9a247a_2"
            });
        return !!(t.enabled || n.enabled)
    }
}