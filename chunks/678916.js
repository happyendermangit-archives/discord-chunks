function(e, t, n) {
    "use strict";
    var i, r, s, a;
    n.r(t), n.d(t, {
        ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
            return o
        },
        BACKGROUND_REPLACEMENT_SIZE: function() {
            return d
        },
        BLUR_BACKGROUND_OPTION: function() {
            return u
        },
        DEFAULT_VIDEO_BACKGROUND_SORT: function() {
            return l
        },
        DefaultVideoBackground: function() {
            return r
        },
        MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
            return _
        },
        VideoFilterType: function() {
            return i
        }
    }), n("724458"), (s = i || (i = {}))[s.BACKGROUND = 0] = "BACKGROUND", (a = r || (r = {}))[a.OPTION_1 = 0] = "OPTION_1", a[a.OPTION_2 = 1] = "OPTION_2", a[a.OPTION_3 = 2] = "OPTION_3", a[a.OPTION_4 = 3] = "OPTION_4", a[a.OPTION_7 = 7] = "OPTION_7", a[a.OPTION_8 = 8] = "OPTION_8", a[a.OPTION_9 = 9] = "OPTION_9", a[a.OPTION_10 = 10] = "OPTION_10";
    let o = [7, 8, 9, 10],
        l = [7, 8, 9, 10, 0, 1, 2, 3].reduce((e, t, n) => ({
            ...e,
            [t]: n
        }), {}),
        u = "blur",
        d = {
            width: 1280,
            height: 720
        },
        _ = 10485760
}