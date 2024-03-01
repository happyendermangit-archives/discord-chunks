function(e, t, n) {
    "use strict";
    var i, r, s, a;
    n.r(t), n.d(t, {
        ToastType: function() {
            return i
        },
        ToastPosition: function() {
            return r
        },
        TOAST_DEFAULT_OPTIONS: function() {
            return o
        }
    });
    (s = i || (i = {}))[s.MESSAGE = 0] = "MESSAGE", s[s.SUCCESS = 1] = "SUCCESS", s[s.FAILURE = 2] = "FAILURE", s[s.CUSTOM = 3] = "CUSTOM", s[s.CLIP = 4] = "CLIP", (a = r || (r = {}))[a.TOP = 0] = "TOP", a[a.BOTTOM = 1] = "BOTTOM";
    let o = {
        position: 0,
        component: null,
        duration: 3e3
    }
}