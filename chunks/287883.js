function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGuildEligibleForGuildProducts: function() {
            return r
        },
        isGuildEligibleForGuildProducts: function() {
            return a
        }
    });
    var s = n("60705"),
        i = n("49111");

    function r(e, t) {
        let {
            enabled: n
        } = s.GuildProductsExperiment.useExperiment({
            guildId: null != e ? e : i.EMPTY_STRING_SNOWFLAKE_ID,
            location: t
        });
        return n
    }

    function a(e, t) {
        let {
            enabled: n
        } = s.GuildProductsExperiment.getCurrentConfig({
            guildId: null != e ? e : i.EMPTY_STRING_SNOWFLAKE_ID,
            location: t
        });
        return n
    }
}