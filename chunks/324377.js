function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Clickable: function() {
            return y
        }
    });
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("515936"),
        s = n("35628"),
        l = n("281767");

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                d(e, t, n[t])
            })
        }
        return e
    }

    function p(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
        }(I, e);
        var t, n, r, i, u, y = (t = I, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : c(e)
        });

        function I() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, I), e = y.apply(this, arguments), d(c(e), "ref", void 0), d(c(e), "handleKeyPress", function(t) {
                var n = e.props,
                    r = n.onClick,
                    o = n.href,
                    i = n.onKeyPress,
                    a = n.ignoreKeyPress;
                !t.repeat && (!a && null != r && null != e.ref && (t.charCode === l.KeyboardKeys.SPACE || t.charCode === l.KeyboardKeys.ENTER) && (null == o && t.preventDefault(), null == e.ref.click ? r(t) : e.ref.click()), null != i && i(t))
            }), d(c(e), "setRef", function(t) {
                e.ref = t;
                var n = e.props.innerRef;
                null != n && ("function" == typeof n ? n(t) : n.hasOwnProperty("current") && (n.current = t))
            }), e
        }
        return r = I, i = [{
            key: "renderNonInteractive",
            value: function() {
                var e = this.props,
                    t = e.tag,
                    n = (e.focusProps, e.innerRef, e.onClick, e.role, e.tabIndex, p(e, ["tag", "focusProps", "innerRef", "onClick", "role", "tabIndex"]));
                return o.createElement(t, E({
                    ref: this.setRef
                }, n))
            }
        }, {
            key: "renderInner",
            value: function() {
                var e = this.props,
                    t = e.tag,
                    n = e.onClick,
                    r = e.className,
                    i = e.children,
                    u = (e.focusProps, e.innerRef, p(e, ["tag", "onClick", "className", "children", "focusProps", "innerRef"]));
                return null == n ? o.createElement(t, E({
                    ref: this.setRef,
                    className: a()(r)
                }, u), i) : o.createElement(t, E({
                    onClick: n,
                    ref: this.setRef,
                    onKeyPress: this.handleKeyPress,
                    className: a()(r)
                }, u), i)
            }
        }, {
            key: "render",
            value: function() {
                return this.context ? this.renderNonInteractive() : o.createElement(s.FocusRing, this.props.focusProps, this.renderInner())
            }
        }], f(r.prototype, i), u && f(r, u), I
    }(o.Component);
    d(y, "contextType", u.BlockInteractionsContext), d(y, "defaultProps", {
        tag: "div",
        role: "button",
        tabIndex: 0
    })
}