function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FAVORITES_GUILD_RECORD: function() {
            return a
        },
        FAVORITES_RAW_GUILD_ID: function() {
            return s
        }
    });
    var i = n("601964"),
        r = n("981631");
    let s = "373",
        a = new i.default({
            id: s,
            name: "Favorites",
            description: "The place for all your favorite channels!",
            ownerId: "234",
            verificationLevel: r.VerificationLevels.NONE,
            region: "",
            joinedAt: new Date,
            defaultMessageNotifications: 0,
            mfaLevel: r.MFALevels.NONE,
            explicitContentFilter: 0,
            maxMembers: 5e5,
            nsfwLevel: r.GuildNSFWContentLevel.DEFAULT
        })
}