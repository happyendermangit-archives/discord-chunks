function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TOAST_DEFAULT_OPTIONS: function() {
            return u
        },
        ToastPosition: function() {
            return o
        },
        ToastType: function() {
            return r
        }
    }), (i = r || (r = {}))[i.MESSAGE = 0] = "MESSAGE", i[i.SUCCESS = 1] = "SUCCESS", i[i.FAILURE = 2] = "FAILURE", i[i.CUSTOM = 3] = "CUSTOM", i[i.CLIP = 4] = "CLIP", (a = o || (o = {}))[a.TOP = 0] = "TOP", a[a.BOTTOM = 1] = "BOTTOM";
    var r, o, i, a, u = {
        position: 0,
        component: null,
        duration: 3e3
    }
}