function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TextAreaAutosize: function() {
            return I
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("689727"),
        l = n("35628"),
        c = n("633353");

    function f(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                _(e, t, n[t])
            })
        }
        return e
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-transform", "width", "padding-left", "padding-right", "border-width", "box-sizing"],
        I = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && m(e, t)
            }(O, e);
            var t, n, o, a, I, h = (t = O, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = E(t);
                if (n) {
                    var a = E(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : f(e)
            });

            function O(e) {
                var t;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, O), _(f(t = h.call(this, e)), "_textArea", void 0), _(f(t), "handleSetRef", function(e) {
                    t._textArea = e
                }), _(f(t), "handleChange", function(e) {
                    var n = t.props.onChange;
                    null == n || n(e), t.calculateSize()
                }), t.state = {
                    height: void 0
                }, t
            }
            return o = O, a = [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    Promise.resolve().then(function() {
                        return e.calculateSize()
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    var n = this;
                    if (this.state.height !== t.height) {
                        var r = this.props.onResize;
                        null == r || r(this.state.height)
                    }
                    e.value !== this.props.value && Promise.resolve().then(function() {
                        return n.calculateSize()
                    })
                }
            }, {
                key: "calculateSize",
                value: function() {
                    var e, t = this._textArea;
                    if (null != t) {
                        var n = this.props,
                            o = n.fontWidthEstimate,
                            i = n.rows,
                            a = null !== (e = this.props.value) && void 0 !== e ? e : t.value;
                        if (null != o && -1 === a.indexOf("\n") && a.length * o < .8 * t.offsetWidth) {
                            this.setState({
                                height: void 0
                            });
                            return
                        }
                        null == r && null != document.body && (r = document.createElement("textarea"), document.body.appendChild(r));
                        var u = this.calculateNodeStyling(t),
                            s = u.paddingSize,
                            l = u.borderSize,
                            c = u.boxSizing,
                            f = u.sizingStyle;
                        r.setAttribute("style", f + ";\n  visibility:hidden;\n  overflow:hidden;\n  position:absolute;\n  z-index:-1000;\n  top:0;\n  right:0;\n"), r.value = a, null != i ? r.setAttribute("rows", "".concat(i)) : r.removeAttribute("rows");
                        var d = r.scrollHeight;
                        "border-box" === c ? d += l : "content-box" === c && (d -= s), this.setState({
                            height: d
                        })
                    }
                }
            }, {
                key: "calculateNodeStyling",
                value: function(e) {
                    var t = window.getComputedStyle(e),
                        n = (0, s.getFirstTruthyValue)(t.getPropertyValue("box-sizing"), t.getPropertyValue("-moz-box-sizing"), t.getPropertyValue("-webkit-box-sizing")),
                        r = parseFloat(t.getPropertyValue("padding-bottom")) + parseFloat(t.getPropertyValue("padding-top")),
                        o = parseFloat(t.getPropertyValue("border-bottom-width")) + parseFloat(t.getPropertyValue("border-top-width"));
                    return {
                        sizingStyle: y.map(function(e) {
                            return "".concat(e, ":").concat(t.getPropertyValue(e))
                        }).join(";"),
                        paddingSize: r,
                        borderSize: o,
                        boxSizing: n
                    }
                }
            }, {
                key: "clear",
                value: function() {
                    null != this._textArea && (this._textArea.value = ""), this.calculateSize()
                }
            }, {
                key: "blur",
                value: function() {
                    var e = this._textArea;
                    null != e && e.blur()
                }
            }, {
                key: "focus",
                value: function() {
                    var e = this._textArea;
                    null != e && e.focus()
                }
            }, {
                key: "setSelection",
                value: function(e, t) {
                    null != this._textArea && (this._textArea.selectionStart = e, this._textArea.selectionEnd = t)
                }
            }, {
                key: "selectionStart",
                get: function() {
                    var e, t;
                    return null !== (t = null === (e = this._textArea) || void 0 === e ? void 0 : e.selectionStart) && void 0 !== t ? t : 0
                }
            }, {
                key: "selectionEnd",
                get: function() {
                    var e, t;
                    return null !== (t = null === (e = this._textArea) || void 0 === e ? void 0 : e.selectionEnd) && void 0 !== t ? t : 0
                }
            }, {
                key: "value",
                get: function() {
                    var e, t;
                    return null !== (t = null === (e = this._textArea) || void 0 === e ? void 0 : e.value) && void 0 !== t ? t : ""
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n = this.props,
                        r = n.style,
                        o = n.className,
                        a = function(e, t) {
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
                        }(n, ["style", "className"]);
                    delete a.fontWidthEstimate, delete a.onResize;
                    var s = p({}, this.state, r);
                    return i.createElement(l.FocusRing, null, i.createElement("textarea", (e = p({}, a), t = (t = {
                        className: u()(o, c.scrollbarGhostHairline),
                        ref: this.handleSetRef,
                        style: s,
                        onChange: this.handleChange
                    }, t), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }), e)))
                }
            }], d(o.prototype, a), I && d(o, I), O
        }(i.PureComponent);
    _(I, "defaultProps", {
        autoFocus: !1,
        disabled: !1,
        autoCorrect: "off"
    })
}