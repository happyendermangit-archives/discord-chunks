function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FAVORITES_GUILD_RECORD: function() {
            return s
        },
        FAVORITES_RAW_GUILD_ID: function() {
            return a
        }
    });
    var i = n("601964"),
        r = n("981631");
    let a = "373",
        s = new i.default({
            id: a,
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