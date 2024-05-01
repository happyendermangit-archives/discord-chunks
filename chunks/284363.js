function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BadgeCategory: function() {
            return r
        },
        getBadgeCategory: function() {
            return a
        }
    });
    var i, r, s = n("854218");

    function a(e) {
        return e.staff ? 5 : e.verified && e.partnered ? 2 : e.verified ? 1 : e.partnered ? 0 : e.community && e.visibility === s.GuildVisibility.PUBLIC ? 4 : e.clan ? 6 : e.community ? 3 : 7
    }(i = r || (r = {}))[i.PARTNERED = 0] = "PARTNERED", i[i.VERIFIED = 1] = "VERIFIED", i[i.VERIFIED_AND_PARTNERED = 2] = "VERIFIED_AND_PARTNERED", i[i.COMMUNITY = 3] = "COMMUNITY", i[i.DISCOVERABLE = 4] = "DISCOVERABLE", i[i.STAFF = 5] = "STAFF", i[i.CLAN = 6] = "CLAN", i[i.NONE = 7] = "NONE"
}