function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isGuildEligibleForGuildProducts: function() {
            return s
        },
        useGuildEligibleForGuildProducts: function() {
            return a
        }
    });
    var i = n("482833"),
        r = n("981631");

    function a(e, t) {
        let {
            enabled: n
        } = i.GuildProductsExperiment.useExperiment({
            guildId: null != e ? e : r.EMPTY_STRING_SNOWFLAKE_ID,
            location: t
        });
        return n
    }

    function s(e, t) {
        let {
            enabled: n
        } = i.GuildProductsExperiment.getCurrentConfig({
            guildId: null != e ? e : r.EMPTY_STRING_SNOWFLAKE_ID,
            location: t
        });
        return n
    }
}