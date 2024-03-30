function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, u = n("470079"),
        c = n("803997"),
        a = n.n(c),
        i = n("143953"),
        l = n("909135");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t && p(e.prototype, t), n && p(e, n), e
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function v(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && m(e, t)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function b(e) {
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
            var n, r, o, u = d(e);
            if (t) {
                var c = d(this).constructor;
                o = Reflect.construct(u, arguments, c)
            } else o = u.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : s(n)
        }
    }
    var g = function(e) {
        v(n, e);
        var t = b(n);

        function n() {
            var e;
            return f(this, n), e = t.apply(this, arguments), h(s(e), "_codeBlockRef", void 0), h(s(e), "setCodeBlockRef", function(t) {
                e._codeBlockRef = t
            }), h(s(e), "handleKeyDown", function(t) {
                var n = 8 === t.which || 37 === t.which || 39 === t.which,
                    r = t.which >= 48 && t.which <= 57 || t.keyCode >= 96 && t.keyCode <= 105;
                !n && !r && t.preventDefault();
                var o = e.props.onKeyDown;
                null == o || o(t)
            }), h(s(e), "handleChange", function(t) {
                var n = e.props.onChange;
                null == n || n(t.currentTarget.value)
            }), e
        }
        return y(n, [{
            key: "render",
            value: function() {
                var e = this.props.className;
                return u.createElement("input", {
                    ref: this.setCodeBlockRef,
                    className: a()(l.input, e),
                    maxLength: 1,
                    value: null != this.props.code ? this.props.code : void 0,
                    autoFocus: this.props.autoFocus,
                    onKeyDown: this.handleKeyDown,
                    onChange: this.handleChange
                })
            }
        }, {
            key: "focus",
            value: function() {
                var e;
                null === (e = this._codeBlockRef) || void 0 === e || e.focus()
            }
        }, {
            key: "blur",
            value: function() {
                var e;
                null === (e = this._codeBlockRef) || void 0 === e || e.blur()
            }
        }]), n
    }(u.PureComponent);
    h(g, "defaultProps", {
        autoFocus: !1
    });
    var C = function(e) {
        v(n, e);
        var t = b(n);

        function n(e) {
            var r;
            return f(this, n), h(s(r = t.call(this, e)), "_codeBlockRefs", Array(r.props.count)), r.state = {
                codes: Array(e.count)
            }, r
        }
        return y(n, [{
            key: "render",
            value: function() {
                for (var e = function(e) {
                        e === c.length / 2 && a.push(u.createElement("div", {
                            key: "spacer",
                            className: l.spacer
                        })), a.push(u.createElement(g, {
                            ref: function(n) {
                                return t.setCodeBlockRef(e, n)
                            },
                            key: e,
                            code: c[e],
                            autoFocus: 0 === e,
                            onChange: function(n) {
                                return t.handleChange(e, n)
                            },
                            onKeyDown: function(n) {
                                return t.handleKeyDown(e, n)
                            },
                            className: o
                        }))
                    }, t = this, n = this.props, r = n.className, o = n.inputClassName, c = this.state.codes, a = [], s = 0; s < c.length; s++) e(s);
                return u.createElement(i.default, {
                    align: i.default.Align.CENTER,
                    justify: i.default.Justify.CENTER,
                    className: r
                }, a)
            }
        }, {
            key: "setCodeBlockRef",
            value: function(e, t) {
                this._codeBlockRefs[e] = t
            }
        }, {
            key: "handleChange",
            value: function(e, t) {
                this.state.codes[e] = t;
                var n = this.getCodeOrFirstEmptyIndex();
                if ("string" == typeof n) this.submit(n);
                else {
                    var r = this._codeBlockRefs[n];
                    null == r || r.focus()
                }
            }
        }, {
            key: "handleKeyDown",
            value: function(e, t) {
                var n = this.state.codes;
                if (8 === t.which && e > 0 && (null == n[e] || 0 === n[e].length)) {
                    var r = e - 1;
                    n[r] = "";
                    var o = this._codeBlockRefs[r];
                    null == o || o.focus()
                }
            }
        }, {
            key: "getCodeOrFirstEmptyIndex",
            value: function() {
                for (var e = this.state.codes, t = "", n = 0; n < e.length; n++) {
                    if (isNaN(parseInt(e[n]))) return n;
                    t += e[n]
                }
                return t
            }
        }, {
            key: "submit",
            value: function(e) {
                var t = this.props.onSubmit;
                null == t || t(e)
            }
        }]), n
    }(u.PureComponent);
    h(C, "defaultProps", {
        count: 6
    }), t.default = C
}