function(e, t, n) {
    "use strict";
    n.r(t);

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var o = function() {
        var e, t, n;

        function o() {
            var e, t, n;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), e = this, n = [], (t = "queue") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
        return e = o, t = [{
            key: "enqueue",
            value: function(e) {
                this.queue.push(e)
            }
        }, {
            key: "flush",
            value: function() {
                for (; this.queue.length > 0;) {
                    var e;
                    null === (e = this.queue.shift()) || void 0 === e || e()
                }
            }
        }], r(e.prototype, t), n && r(e, n), o
    }();
    t.default = new o
}