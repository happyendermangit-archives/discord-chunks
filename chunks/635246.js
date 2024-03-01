function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Disposable: function() {
            return c
        },
        CompositeDisposable: function() {
            return l
        },
        SerialDisposable: function() {
            return u
        }
    }), n("70102"), n("424973");
    var r = n("959708");

    function a(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = function() {
        function e(t) {
            a(this, e), s(this, "isDisposed", !1), s(this, "action", void 0), this.action = (0, r.isFunction)(t) ? t : r.noop
        }
        return o(e, [{
            key: "dispose",
            value: function() {
                !this.isDisposed && (this.action(), this.isDisposed = !0)
            }
        }], [{
            key: "isDisposable",
            value: function(e) {
                return !!(e && (0, r.isFunction)(e.dispose))
            }
        }, {
            key: "_fixup",
            value: function(t) {
                return e.isDisposable(t) ? t : e.empty
            }
        }, {
            key: "create",
            value: function(t) {
                return new e(t)
            }
        }]), e
    }();
    s(c, "empty", {
        dispose: r.noop
    });
    var l = function() {
            function e() {
                a(this, e), s(this, "isDisposed", !1), s(this, "disposables", void 0);
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                this.disposables = n
            }
            return o(e, [{
                key: "add",
                value: function(e) {
                    this.isDisposed ? e.dispose() : this.disposables.push(e)
                }
            }, {
                key: "remove",
                value: function(e) {
                    var t = !1;
                    if (!this.isDisposed) {
                        var n = this.disposables.indexOf(e); - 1 !== n && (t = !0, this.disposables.splice(n, 1), e.dispose())
                    }
                    return t
                }
            }, {
                key: "clear",
                value: function() {
                    if (!this.isDisposed) {
                        for (var e = this.disposables.length, t = Array(e), n = 0; n < e; n++) t[n] = this.disposables[n];
                        this.disposables = [];
                        for (var r = 0; r < e; r++) t[r].dispose()
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    if (!this.isDisposed) {
                        this.isDisposed = !0;
                        for (var e = this.disposables.length, t = Array(e), n = 0; n < e; n++) t[n] = this.disposables[n];
                        this.disposables = [];
                        for (var r = 0; r < e; r++) t[r].dispose()
                    }
                }
            }]), e
        }(),
        u = function() {
            function e() {
                a(this, e), s(this, "isDisposed", !1), s(this, "current", void 0)
            }
            return o(e, [{
                key: "getDisposable",
                value: function() {
                    return this.current
                }
            }, {
                key: "setDisposable",
                value: function(e) {
                    var t = this.isDisposed;
                    if (!t) {
                        var n = this.current;
                        this.current = e, n && n.dispose()
                    }
                    t && e && e.dispose()
                }
            }, {
                key: "dispose",
                value: function() {
                    if (!this.isDisposed) {
                        this.isDisposed = !0;
                        var e = this.current;
                        this.current = void 0, e && e.dispose()
                    }
                }
            }]), e
        }()
}