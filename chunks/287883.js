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
    var i = n("60705"),
        s = n("49111");

    function r(e, t) {
        let {
            enabled: n
        } = i.GuildProductsExperiment.useExperiment({
            guildId: null != e ? e : s.EMPTY_STRING_SNOWFLAKE_ID,
            location: t
        });
        return n
    }

    function a(e, t) {
        let {
            enabled: n
        } = i.GuildProductsExperiment.getCurrentConfig({
            guildId: null != e ? e : s.EMPTY_STRING_SNOWFLAKE_ID,
            location: t
        });
        return n
    }
}