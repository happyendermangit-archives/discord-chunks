function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isGuildEligibleForGuildProducts: function() {
            return a
        },
        useGuildEligibleForGuildProducts: function() {
            return i
        }
    });
    var r = n("606627"),
        o = n("281767");

    function i(e, t) {
        return r.GuildProductsExperiment.useExperiment({
            guildId: null != e ? e : o.EMPTY_STRING_SNOWFLAKE_ID,
            location: t
        }).enabled
    }

    function a(e, t) {
        return r.GuildProductsExperiment.getCurrentConfig({
            guildId: null != e ? e : o.EMPTY_STRING_SNOWFLAKE_ID,
            location: t
        }).enabled
    }
}