function(e, t, n) {
    "use strict";
    var i, r, a, s;
    n.r(t), n.d(t, {
        TOAST_DEFAULT_OPTIONS: function() {
            return o
        },
        ToastPosition: function() {
            return r
        },
        ToastType: function() {
            return i
        }
    });
    (a = i || (i = {}))[a.MESSAGE = 0] = "MESSAGE", a[a.SUCCESS = 1] = "SUCCESS", a[a.FAILURE = 2] = "FAILURE", a[a.CUSTOM = 3] = "CUSTOM", a[a.CLIP = 4] = "CLIP", (s = r || (r = {}))[s.TOP = 0] = "TOP", s[s.BOTTOM = 1] = "BOTTOM";
    let o = {
        position: 0,
        component: null,
        duration: 3e3
    }
}