function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });

    function i(e, t, n) {
        let {
            onChange: i
        } = e, r = !1, s = !1;
        return e.onChange = () => {
            if (r) {
                s = !0;
                return
            }
            r = !0;
            try {
                let e = 0;
                do {
                    if (s = !1, e++ >= 5) break;
                    null == t || t();
                    try {
                        i()
                    } finally {
                        null == n || n()
                    }
                } while (s)
            } finally {
                r = !1
            }
        }, e
    }
}