function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FAVORITES_RAW_GUILD_ID: function() {
            return r
        },
        FAVORITES_GUILD_RECORD: function() {
            return a
        }
    });
    var i = n("813006"),
        s = n("49111");
    let r = "373",
        a = new i.default({
            id: r,
            name: "Favorites",
            description: "The place for all your favorite channels!",
            ownerId: "234",
            verificationLevel: s.VerificationLevels.NONE,
            region: "",
            joinedAt: new Date,
            defaultMessageNotifications: 0,
            mfaLevel: s.MFALevels.NONE,
            explicitContentFilter: 0,
            maxMembers: 5e5,
            nsfwLevel: s.GuildNSFWContentLevel.DEFAULT
        })
}