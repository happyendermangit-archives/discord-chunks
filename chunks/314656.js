function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.r(t), n.d(t, {
        ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
            return s
        },
        BACKGROUND_REPLACEMENT_SIZE: function() {
            return f
        },
        BLUR_BACKGROUND_OPTION: function() {
            return c
        },
        DEFAULT_VIDEO_BACKGROUND_SORT: function() {
            return l
        },
        DefaultVideoBackground: function() {
            return u
        },
        MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
            return d
        },
        VideoFilterType: function() {
            return a
        }
    });
    (o = a || (a = {}))[o.BACKGROUND = 0] = "BACKGROUND", (i = u || (u = {}))[i.OPTION_1 = 0] = "OPTION_1", i[i.OPTION_2 = 1] = "OPTION_2", i[i.OPTION_3 = 2] = "OPTION_3", i[i.OPTION_4 = 3] = "OPTION_4", i[i.OPTION_7 = 7] = "OPTION_7", i[i.OPTION_8 = 8] = "OPTION_8", i[i.OPTION_9 = 9] = "OPTION_9", i[i.OPTION_10 = 10] = "OPTION_10";
    var o, i, a, u, s = [7, 8, 9, 10],
        l = [7, 8, 9, 10, 0, 1, 2, 3].reduce(function(e, t, n) {
            var o, i;
            return o = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), o.forEach(function(t) {
                        r(e, t, n[t])
                    })
                }
                return e
            }({}, e), i = null != (i = r({}, t, n)) ? i : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(i)).forEach(function(e) {
                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
            }), o
        }, {}),
        c = "blur",
        f = {
            width: 1280,
            height: 720
        },
        d = 10485760
}