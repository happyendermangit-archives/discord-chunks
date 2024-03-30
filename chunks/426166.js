function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isForumActivityExperimentEnabled: function() {
            return a
        }
    });
    var r = n("375241"),
        o = n("4142"),
        i = n("281767");

    function a(e) {
        var t = o.default.getCurrentConfig({
                guildId: null != e ? e : i.EMPTY_STRING_SNOWFLAKE_ID,
                location: "3fde52_1"
            }),
            n = r.default.getCurrentConfig({
                location: "3fde52_2"
            });
        return !!(t.enabled || n.enabled)
    }
}