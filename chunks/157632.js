function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createTargetFactory: function() {
            return u
        }
    }), n("70102");
    var r = n("900255"),
        i = n("959708");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = ["canDrop", "hover", "drop"],
        c = function() {
            var e, t, n;

            function r(e, t, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), s(this, "props", null), s(this, "spec", void 0), s(this, "monitor", void 0), s(this, "ref", void 0), this.spec = e, this.monitor = t, this.ref = n
            }
            return e = r, t = [{
                key: "receiveProps",
                value: function(e) {
                    this.props = e
                }
            }, {
                key: "receiveMonitor",
                value: function(e) {
                    this.monitor = e
                }
            }, {
                key: "canDrop",
                value: function() {
                    return !this.spec.canDrop || this.spec.canDrop(this.props, this.monitor)
                }
            }, {
                key: "hover",
                value: function() {
                    this.spec.hover && this.props && this.spec.hover(this.props, this.monitor, (0, i.getDecoratedComponent)(this.ref))
                }
            }, {
                key: "drop",
                value: function() {
                    if (this.spec.drop) return this.spec.drop(this.props, this.monitor, this.ref.current)
                }
            }], o(e.prototype, t), n && o(e, n), r
        }();

    function u(e) {
        return Object.keys(e).forEach(function(t) {
                (0, r.invariant)(a.indexOf(t) > -1, 'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', a.join(", "), t), (0, r.invariant)("function" == typeof e[t], "Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target", t, t, e[t])
            }),
            function(t, n) {
                return new c(e, t, n)
            }
    }
}