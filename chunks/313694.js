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
        PreviewListImpl: function() {
            return s
        }
    });

    function i(e, t) {
        var n = a(e, t, "get");
        return function(e, t) {
            return t.get ? t.get.call(e) : t.value
        }(e, n)
    }

    function a(e, t, n) {
        if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
    }
    var o = new WeakMap;
    class s {
        constructor() {
            var e, t, n, s, u, c;
            e = this, n = {
                    writable: !0,
                    value: void 0
                },
                function(e, t) {
                    if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t = o), t.set(e, n), r(this, "register", e => {
                    i(this, o).push(e)
                }), r(this, "unregister", e => {
                    let t;
                    for (; - 1 !== (t = i(this, o).indexOf(e));) i(this, o).splice(t, 1)
                }), r(this, "backendChanged", e => {
                    for (let t of i(this, o)) t.backendChanged(e)
                }), s = this, u = [], c = a(s, o, "set"),
                function(e, t, n) {
                    if (t.set) t.set.call(e, n);
                    else {
                        if (!t.writable) throw TypeError("attempted to set read only private field");
                        t.value = n
                    }
                }(s, c, u)
        }
    }
}