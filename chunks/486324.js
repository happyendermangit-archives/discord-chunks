function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BANNER_ASPECT_RATIO: function() {
            return S
        },
        EDITING_CONTAINER_WIDTH: function() {
            return l
        },
        GUILD_BANNER_ASPECT_RATIO: function() {
            return A
        },
        GUILD_BANNER_MAX_HEIGHT: function() {
            return c
        },
        GUILD_BANNER_MAX_WIDTH: function() {
            return _
        },
        HOME_HEADER_ASPECT_RATIO: function() {
            return m
        },
        HOME_HEADER_MAX_HEIGHT: function() {
            return f
        },
        HOME_HEADER_MAX_WIDTH: function() {
            return T
        },
        MAX_BANNER_OVERLAY_HEIGHT: function() {
            return N
        },
        MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
            return O
        },
        MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
            return R
        },
        MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
            return p
        },
        MAX_VIDEO_OVERLAY_HEIGHT: function() {
            return g
        },
        MessageTypes: function() {
            return a
        },
        SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
            return h
        },
        SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
            return I
        },
        SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
            return E
        },
        USER_BANNER_MAX_HEIGHT: function() {
            return d
        },
        USER_BANNER_MAX_WIDTH: function() {
            return u
        },
        UploadTypes: function() {
            return s
        },
        VIDEO_BACKGROUND_ASPECT_RATIO: function() {
            return C
        }
    });
    var i, r, s, a, o = n("678916");
    (i = s || (s = {}))[i.AVATAR = 0] = "AVATAR", i[i.BANNER = 1] = "BANNER", i[i.GUILD_BANNER = 2] = "GUILD_BANNER", i[i.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", i[i.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", i[i.HOME_HEADER = 5] = "HOME_HEADER", i[i.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
    let l = 568,
        u = 2400,
        d = 848,
        _ = 2400,
        c = 1350,
        E = 2400,
        I = 960,
        T = 2400,
        f = 600,
        S = 17 / 6,
        A = 16 / 9,
        h = 2.5,
        m = 4,
        N = 568 / (17 / 6),
        O = 568 / (16 / 9),
        p = 227.2,
        R = 142,
        C = o.BACKGROUND_REPLACEMENT_SIZE.width / o.BACKGROUND_REPLACEMENT_SIZE.height,
        g = l / C;
    (r = a || (a = {}))[r.CROP_GIF_START = 0] = "CROP_GIF_START", r[r.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", r[r.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
}