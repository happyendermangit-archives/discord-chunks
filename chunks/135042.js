function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FAVORITES_GUILD_RECORD: function() {
            return a
        },
        FAVORITES_RAW_GUILD_ID: function() {
            return i
        }
    });
    var r = n("393588"),
        o = n("281767"),
        i = "373",
        a = new r.default({
            id: i,
            name: "Favorites",
            description: "The place for all your favorite channels!",
            ownerId: "234",
            verificationLevel: o.VerificationLevels.NONE,
            region: "",
            joinedAt: new Date,
            defaultMessageNotifications: 0,
            mfaLevel: o.MFALevels.NONE,
            explicitContentFilter: 0,
            maxMembers: 5e5,
            nsfwLevel: o.GuildNSFWContentLevel.DEFAULT
        })
}