function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createSourceFactory: function() {
            return l
        }
    });
    var r = n("573654"),
        i = n("139883");

    function a(e, t) {
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
    var s = ["canDrag", "beginDrag", "isDragging", "endDrag"],
        u = ["beginDrag"],
        c = function() {
            var e, t, n;

            function r(e, t, n) {
                var i = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), o(this, "props", null), o(this, "spec", void 0), o(this, "monitor", void 0), o(this, "ref", void 0), o(this, "beginDrag", function() {
                    if (i.props) return i.spec.beginDrag(i.props, i.monitor, i.ref.current)
                }), this.spec = e, this.monitor = t, this.ref = n
            }
            return e = r, t = [{
                key: "receiveProps",
                value: function(e) {
                    this.props = e
                }
            }, {
                key: "canDrag",
                value: function() {
                    return !!this.props && (!this.spec.canDrag || this.spec.canDrag(this.props, this.monitor))
                }
            }, {
                key: "isDragging",
                value: function(e, t) {
                    return !!this.props && (this.spec.isDragging ? this.spec.isDragging(this.props, this.monitor) : t === e.getSourceId())
                }
            }, {
                key: "endDrag",
                value: function() {
                    if (!!this.props) this.spec.endDrag && this.spec.endDrag(this.props, this.monitor, (0, i.getDecoratedComponent)(this.ref))
                }
            }], a(e.prototype, t), n && a(e, n), r
        }();

    function l(e) {
        return Object.keys(e).forEach(function(t) {
                (0, r.invariant)(s.indexOf(t) > -1, 'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', s.join(", "), t), (0, r.invariant)("function" == typeof e[t], "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", t, t, e[t])
            }), u.forEach(function(t) {
                (0, r.invariant)("function" == typeof e[t], "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", t, t, e[t])
            }),
            function(t, n) {
                return new c(e, t, n)
            }
    }
}