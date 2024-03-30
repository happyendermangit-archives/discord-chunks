function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BatchedStoreListener: function() {
            return a
        }
    });
    var r = n("533785");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = function() {
        var e, t, n;

        function a(e, t) {
            var n = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, a), i(this, "stores", void 0), i(this, "changeCallback", void 0), i(this, "storeVersionHandled", void 0), i(this, "handleStoreChange", function() {
                var e = r.default.getChangeSentinel();
                n.storeVersionHandled !== e && (n.changeCallback(), n.storeVersionHandled = e)
            }), this.stores = e, this.changeCallback = t
        }
        return e = a, t = [{
            key: "attach",
            value: function(e) {
                var t = this;
                this.stores.forEach(function(n, r) {
                    if (null == n) throw Error("".concat(e, " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded ").concat(r, " stores before error."));
                    n.addReactChangeListener(t.handleStoreChange)
                })
            }
        }, {
            key: "detach",
            value: function() {
                var e = this;
                this.stores.forEach(function(t) {
                    return t.removeReactChangeListener(e.handleStoreChange)
                })
            }
        }], o(e.prototype, t), n && o(e, n), a
    }()
}