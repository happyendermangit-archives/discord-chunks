function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        BadgeCategory: function() {
            return o
        },
        getBadgeCategory: function() {
            return a
        }
    });
    var r, o, l = s("883474");

    function a(e) {
        return e.staff ? 5 : e.verified && e.partnered ? 2 : e.verified ? 1 : e.partnered ? 0 : e.community && e.visibility === l.GuildVisibility.PUBLIC ? 4 : e.community ? 3 : 6
    }(r = o || (o = {}))[r.PARTNERED = 0] = "PARTNERED", r[r.VERIFIED = 1] = "VERIFIED", r[r.VERIFIED_AND_PARTNERED = 2] = "VERIFIED_AND_PARTNERED", r[r.COMMUNITY = 3] = "COMMUNITY", r[r.DISCOVERABLE = 4] = "DISCOVERABLE", r[r.STAFF = 5] = "STAFF", r[r.NONE = 6] = "NONE"
}