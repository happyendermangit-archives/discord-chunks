function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VisibilityObserver: function() {
            return s
        }
    });
    var r = n("699581"),
        o = n("188104");

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var u = {
            root: null,
            rootMargin: "0px",
            threshold: .5
        },
        s = function() {
            var e, t, n;

            function s() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), a(this, "_observer", void 0), a(this, "_options", void 0), a(this, "_nodes", new WeakMap), a(this, "_components", new WeakMap), a(this, "_visibleComponents", new WeakSet), a(this, "_handleEntries", function(t) {
                    t.forEach(function(t) {
                        if (null != t.isIntersecting) n = t.isIntersecting;
                        else {
                            var n, r = e._options.threshold;
                            n = null == r ? t.intersectionRatio > 0 : Array.isArray(r) ? r.some(function(e) {
                                return t.intersectionRatio > e
                            }) : t.intersectionRatio > r
                        }
                        var o = e._nodes.get(t.target);
                        if (null != o) {
                            var i = !1;
                            n ? !e._visibleComponents.has(o) && (e._visibleComponents.add(o), i = !0) : e._visibleComponents.has(o) && (e._visibleComponents.delete(o), i = !0), i && o.forceUpdate()
                        }
                    })
                }), this._options = t, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, t))
            }
            return e = s, t = [{
                key: "isVisible",
                value: function(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
            }, {
                key: "observe",
                value: function(e) {
                    var t = this._observer;
                    if (null != t) {
                        this.unobserve(e);
                        var n = (0, r.findDOMNode)(e);
                        (0, o.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                    }
                }
            }, {
                key: "unobserve",
                value: function(e) {
                    var t = this._observer;
                    if (null != t) {
                        var n = this._components.get(e);
                        null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                    }
                }
            }], i(e.prototype, t), n && i(e, n), s
        }()
}