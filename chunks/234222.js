function(e, _, E) {
    "use strict";
    var t, o, n, r, a, i, I, s;
    E.r(_), E.d(_, {
        CHANGELOG_MODAL_KEY: function() {
            return T
        },
        ChangelogPlatforms: function() {
            return t
        },
        AssetType: function() {
            return o
        },
        ChangelogLoadState: function() {
            return n
        }
    });
    let T = "CHANGELOG_MODAL";
    (a = t || (t = {}))[a.DESKTOP = 0] = "DESKTOP", a[a.MOBILE = 1] = "MOBILE", (i = o || (o = {}))[i.YOUTUBE_VIDEO_ID = 0] = "YOUTUBE_VIDEO_ID", i[i.IMAGE = 1] = "IMAGE", (I = n || (n = {}))[I.NOT_LOADED = 0] = "NOT_LOADED", I[I.LOADED_SUCCESS = 1] = "LOADED_SUCCESS", I[I.LOADED_FAILURE = 2] = "LOADED_FAILURE", (s = r || (r = {})).SPECIAL = "special", s.STANDARD = "standard"
}