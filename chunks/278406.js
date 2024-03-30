function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        impl: function() {
            return s
        },
        sessionStorageTest: function() {
            return a
        }
    });
    var r, o = n("764601");

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    try {
        r = window.sessionStorage
    } catch (e) {}
    try {
        delete window.sessionStorage
    } catch (e) {}

    function a() {
        var e = "test";
        try {
            return r.setItem(e, e), r.removeItem(e), !0
        } catch (e) {
            return !1
        }
    }
    var u = function() {
            var e, t, n;

            function o() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, o)
            }
            return e = o, t = [{
                key: "get",
                value: function(e, t) {
                    var n = r.getItem(e);
                    if (null != n) try {
                        n = JSON.parse(n)
                    } catch (e) {
                        n = t
                    } else n = t;
                    return n
                }
            }, {
                key: "set",
                value: function(e, t) {
                    r.setItem(e, JSON.stringify(t))
                }
            }, {
                key: "remove",
                value: function(e) {
                    r.removeItem(e)
                }
            }, {
                key: "clear",
                value: function() {
                    r.clear()
                }
            }], i(e.prototype, t), n && i(e, n), o
        }(),
        s = a() ? new u : new o.ObjectStorage
}