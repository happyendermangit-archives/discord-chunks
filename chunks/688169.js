function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        INCREASED_ACTIVITY_LIST_FORUM_LAYOUT: function() {
            return s
        },
        useForumActivityExperiment: function() {
            return r
        }
    });
    var i = n("943314"),
        a = n("531869"),
        l = n("49111");
    let s = 3;

    function r(e) {
        let t = a.default.useExperiment({
                guildId: null != e ? e : l.EMPTY_STRING_SNOWFLAKE_ID,
                location: "9a247a_1"
            }),
            n = i.default.useExperiment({
                location: "9a247a_2"
            });
        return !!(t.enabled || n.enabled)
    }
}