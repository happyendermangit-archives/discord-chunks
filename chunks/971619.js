function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n("470079"),
        o = d(a),
        s = d(n("476400")),
        u = d(n("699581")),
        c = d(n("726351")),
        l = d(n("512722"));

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = function(e) {
        function t() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, t);
            var e = function(e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.state = {
                initiated: !1
            }, e.onResize = e.onResize.bind(e), e
        }
        return ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), i(t, null, [{
            key: "getDomNodeDimensions",
            value: function(e) {
                var t = e.getBoundingClientRect();
                return {
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    width: t.width,
                    height: t.height
                }
            }
        }]), i(t, [{
            key: "componentDidMount",
            value: function() {
                this.parentNode = u.default.findDOMNode(this).parentNode, this.elementResizeDetector = (0, c.default)({
                    strategy: "scroll",
                    callOnAdd: !1
                }), this.elementResizeDetector.listenTo(this.parentNode, this.onResize), this.componentIsMounted = !0, this.onResize()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.componentIsMounted = !1, this.elementResizeDetector.uninstall(this.parentNode)
            }
        }, {
            key: "onResize",
            value: function() {
                var e = t.getDomNodeDimensions(this.parentNode);
                this.componentIsMounted && this.setState(r({
                    initiated: !0
                }, e))
            }
        }, {
            key: "render",
            value: function() {
                if ((0, l.default)(this.props.children, "Expected children to be one of function or React.Element"), !this.state.initiated) return o.default.createElement("div", null);
                if ("function" == typeof this.props.children) {
                    var e = this.props.children(this.state);
                    return e && a.Children.only(e)
                }
                return a.Children.only(o.default.cloneElement(this.props.children, this.state))
            }
        }]), t
    }(a.Component);
    f.propTypes = {
        children: s.default.oneOfType([s.default.element, s.default.func]).isRequired
    }, t.default = f
}