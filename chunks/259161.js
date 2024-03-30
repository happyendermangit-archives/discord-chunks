function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var i = function() {
        var e, t, n;

        function i(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), o(this, "val", void 0), o(this, "loading", !1), o(this, "loaded", !1), o(this, "param", void 0), o(this, "loader", void 0), this.loader = e
        }
        return e = i, t = [{
            key: "setParams",
            value: function(e) {
                this.param !== e && (this.param = e, this.loading = !1, this.loaded = !1)
            }
        }, {
            key: "get",
            value: function() {
                return this.ensureLoaded(), this.val
            }
        }, {
            key: "ensureLoaded",
            value: function() {
                var e = this;
                if (!this.loaded && !this.loading && void 0 !== this.param) {
                    var t = this.param;
                    this.loading = !0, this.loader(t).then(function(n) {
                        t === e.param && (e.val = n, e.loading = !1, e.loaded = !0)
                    })
                }
            }
        }], r(e.prototype, t), n && r(e, n), i
    }()
}