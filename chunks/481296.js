function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BANNER_ASPECT_RATIO: function() {
            return y
        },
        EDITING_CONTAINER_WIDTH: function() {
            return s
        },
        GUILD_BANNER_ASPECT_RATIO: function() {
            return I
        },
        GUILD_BANNER_MAX_HEIGHT: function() {
            return d
        },
        GUILD_BANNER_MAX_WIDTH: function() {
            return f
        },
        HOME_HEADER_ASPECT_RATIO: function() {
            return O
        },
        HOME_HEADER_MAX_HEIGHT: function() {
            return m
        },
        HOME_HEADER_MAX_WIDTH: function() {
            return p
        },
        MAX_BANNER_OVERLAY_HEIGHT: function() {
            return T
        },
        MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
            return S
        },
        MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
            return g
        },
        MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
            return v
        },
        MAX_VIDEO_OVERLAY_HEIGHT: function() {
            return b
        },
        MessageTypes: function() {
            return a
        },
        SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
            return h
        },
        SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
            return E
        },
        SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
            return _
        },
        USER_BANNER_MAX_HEIGHT: function() {
            return c
        },
        USER_BANNER_MAX_WIDTH: function() {
            return l
        },
        UploadTypes: function() {
            return i
        },
        VIDEO_BACKGROUND_ASPECT_RATIO: function() {
            return A
        }
    });
    var r, o, i, a, u = n("314656");
    (r = i || (i = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
    var s = 568,
        l = 2400,
        c = 848,
        f = 2400,
        d = 1350,
        _ = 2400,
        E = 960,
        p = 2400,
        m = 600,
        y = 17 / 6,
        I = 16 / 9,
        h = 2.5,
        O = 4,
        T = 568 / (17 / 6),
        S = 568 / (16 / 9),
        v = 227.2,
        g = 142,
        A = u.BACKGROUND_REPLACEMENT_SIZE.width / u.BACKGROUND_REPLACEMENT_SIZE.height,
        b = s / A;
    (o = a || (a = {}))[o.CROP_GIF_START = 0] = "CROP_GIF_START", o[o.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", o[o.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
}