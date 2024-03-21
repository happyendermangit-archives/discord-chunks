function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        UploadTypes: function() {
            return i
        },
        EDITING_CONTAINER_WIDTH: function() {
            return l
        },
        USER_BANNER_MAX_WIDTH: function() {
            return c
        },
        USER_BANNER_MAX_HEIGHT: function() {
            return o
        },
        GUILD_BANNER_MAX_WIDTH: function() {
            return a
        },
        GUILD_BANNER_MAX_HEIGHT: function() {
            return C
        },
        SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
            return _
        },
        SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
            return d
        },
        HOME_HEADER_MAX_WIDTH: function() {
            return I
        },
        HOME_HEADER_MAX_HEIGHT: function() {
            return T
        },
        BANNER_ASPECT_RATIO: function() {
            return A
        },
        GUILD_BANNER_ASPECT_RATIO: function() {
            return L
        },
        SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
            return S
        },
        HOME_HEADER_ASPECT_RATIO: function() {
            return p
        },
        MAX_BANNER_OVERLAY_HEIGHT: function() {
            return O
        },
        MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
            return f
        },
        MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
            return R
        },
        MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
            return y
        },
        VIDEO_BACKGROUND_ASPECT_RATIO: function() {
            return h
        },
        MAX_VIDEO_OVERLAY_HEIGHT: function() {
            return m
        },
        MessageTypes: function() {
            return E
        }
    });
    var u, n, i, E, s = r("917219");
    (u = i || (i = {}))[u.AVATAR = 0] = "AVATAR", u[u.BANNER = 1] = "BANNER", u[u.GUILD_BANNER = 2] = "GUILD_BANNER", u[u.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", u[u.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", u[u.HOME_HEADER = 5] = "HOME_HEADER", u[u.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
    let l = 568,
        c = 2400,
        o = 848,
        a = 2400,
        C = 1350,
        _ = 2400,
        d = 960,
        I = 2400,
        T = 600,
        A = 17 / 6,
        L = 16 / 9,
        S = 2.5,
        p = 4,
        O = l / A,
        f = l / L,
        R = l / S,
        y = l / p,
        h = s.BACKGROUND_REPLACEMENT_SIZE.width / s.BACKGROUND_REPLACEMENT_SIZE.height,
        m = l / h;
    (n = E || (E = {}))[n.CROP_GIF_START = 0] = "CROP_GIF_START", n[n.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", n[n.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
}