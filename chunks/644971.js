function(e, t, n) {
    "use strict";
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
        o = n("214438"),
        s = n("752934");
    e.exports = function(e) {
        var t = "node",
            n = function(n) {
                function u() {
                    return ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, u),
                        function(e, t) {
                            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t && ("object" == typeof t || "function" == typeof t) ? t : e
                        }(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments))
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
                }(u, n), i(u, [{
                    key: "componentWillUnmount",
                    value: function() {
                        this._propsAnimated && this._propsAnimated.__detach()
                    }
                }, {
                    key: "setNativeProps",
                    value: function(e) {
                        !1 === s.current(this.refs[t], e, this) && this.forceUpdate()
                    }
                }, {
                    key: "componentWillMount",
                    value: function() {
                        this.attachProps(this.props)
                    }
                }, {
                    key: "attachProps",
                    value: function(e) {
                        var n = this,
                            r = this._propsAnimated;
                        this._propsAnimated = new o(e, function() {
                            !1 === s.current(n.refs[t], n._propsAnimated.__getAnimatedValue(), n) && n.forceUpdate()
                        }), r && r.__detach()
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        this.attachProps(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var n = this._propsAnimated.__getValue(),
                            i = n.style,
                            o = function(e, t) {
                                var n = {};
                                for (var r in e) {
                                    if (!(t.indexOf(r) >= 0)) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                                }
                                return n
                            }(n, ["style"]);
                        return a.createElement(e, r({}, o, {
                            style: s.transformStyles(i),
                            ref: t,
                            __source: {
                                fileName: "src/createAnimatedComponent.js",
                                lineNumber: 78
                            }
                        }))
                    }
                }]), u
            }(a.Component);
        return n.propTypes = {
            style: function(t, n, r) {
                if (!e.propTypes) return
            }
        }, n
    }
}