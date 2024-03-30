function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("784184");

    function i(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function a(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t && u(e.prototype, t), n && u(e, n), e
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && d(e, t)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, a = c(e);
            if (t) {
                var u = c(this).constructor;
                o = Reflect.construct(a, arguments, u)
            } else o = a.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : i(n)
        }
    }
    var E = function(e) {
            f(n, e);
            var t = _(n);

            function n() {
                var e;
                return a(this, n), e = t.apply(this, arguments), l(i(e), "handleClick", function() {
                    var t = e.props,
                        n = t.onClick,
                        r = t.index;
                    null == n || n(r)
                }), e
            }
            return s(n, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.text,
                        n = e.lastItem,
                        i = e.className;
                    return r.createElement("span", null, r.createElement(o.Anchor, {
                        className: i,
                        onClick: this.handleClick
                    }, t), n ? "" : ", ")
                }
            }]), n
        }(r.PureComponent),
        p = function(e) {
            f(n, e);
            var t = _(n);

            function n() {
                var e;
                return a(this, n), e = t.apply(this, arguments), l(i(e), "handleOpenSpotifyArtist", function(t) {
                    var n = e.props.onOpenSpotifyArtist;
                    null == n || n(t)
                }), e
            }
            return s(n, [{
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props.artists.split(";");
                    if (!this.props.canOpen) return t.join(", ");
                    var n = t.length - 1;
                    return t.map(function(t, o) {
                        return r.createElement(E, {
                            key: "spotify-artist-".concat(o),
                            text: t,
                            index: o,
                            lastItem: o === n,
                            onClick: e.handleOpenSpotifyArtist,
                            className: e.props.linkClassName
                        })
                    })
                }
            }]), n
        }(r.PureComponent)
}