function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });

    function r(e, t, n) {
        var r = e.onChange,
            o = !1,
            i = !1;
        return e.onChange = function() {
            if (o) {
                i = !0;
                return
            }
            o = !0;
            try {
                var e = 0;
                do {
                    if (i = !1, e++ >= 5) break;
                    null == t || t();
                    try {
                        r()
                    } finally {
                        null == n || n()
                    }
                } while (i)
            } finally {
                o = !1
            }
        }, e
    }
}