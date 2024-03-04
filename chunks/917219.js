function(e, t, n) {
    "use strict";
    var i, s, r, a;
    n.r(t), n.d(t, {
        VideoFilterType: function() {
            return i
        },
        DefaultVideoBackground: function() {
            return s
        },
        ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
            return o
        },
        DEFAULT_VIDEO_BACKGROUND_SORT: function() {
            return l
        },
        BLUR_BACKGROUND_OPTION: function() {
            return u
        },
        BACKGROUND_REPLACEMENT_SIZE: function() {
            return d
        },
        MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
            return c
        }
    }), n("808653"), (r = i || (i = {}))[r.BACKGROUND = 0] = "BACKGROUND", (a = s || (s = {}))[a.OPTION_1 = 0] = "OPTION_1", a[a.OPTION_2 = 1] = "OPTION_2", a[a.OPTION_3 = 2] = "OPTION_3", a[a.OPTION_4 = 3] = "OPTION_4", a[a.OPTION_7 = 7] = "OPTION_7", a[a.OPTION_8 = 8] = "OPTION_8", a[a.OPTION_9 = 9] = "OPTION_9", a[a.OPTION_10 = 10] = "OPTION_10";
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
        c = 10485760
}