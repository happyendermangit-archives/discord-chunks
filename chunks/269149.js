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
        } = e, l = !1, a = !1;
        return e.onChange = () => {
            if (l) {
                a = !0;
                return
            }
            l = !0;
            try {
                let e = 0;
                do {
                    if (a = !1, e++ >= 5) break;
                    null == t || t();
                    try {
                        i()
                    } finally {
                        null == n || n()
                    }
                } while (a)
            } finally {
                l = !1
            }
        }, e
    }
}