function(e, t, n) {
    "use strict";
    var i, s, r, a;
    n.r(t), n.d(t, {
        ToastType: function() {
            return i
        },
        ToastPosition: function() {
            return s
        },
        TOAST_DEFAULT_OPTIONS: function() {
            return o
        }
    });
    (r = i || (i = {}))[r.MESSAGE = 0] = "MESSAGE", r[r.SUCCESS = 1] = "SUCCESS", r[r.FAILURE = 2] = "FAILURE", r[r.CUSTOM = 3] = "CUSTOM", r[r.CLIP = 4] = "CLIP", (a = s || (s = {}))[a.TOP = 0] = "TOP", a[a.BOTTOM = 1] = "BOTTOM";
    let o = {
        position: 0,
        component: null,
        duration: 3e3
    }
}