function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        INCREASED_ACTIVITY_LIST_FORUM_LAYOUT: function() {
            return a
        },
        useForumActivityExperiment: function() {
            return u
        }
    });
    var r = n("375241"),
        o = n("4142"),
        i = n("281767"),
        a = 3;

    function u(e) {
        var t = o.default.useExperiment({
                guildId: null != e ? e : i.EMPTY_STRING_SNOWFLAKE_ID,
                location: "9a247a_1"
            }),
            n = r.default.useExperiment({
                location: "9a247a_2"
            });
        return !!(t.enabled || n.enabled)
    }
}