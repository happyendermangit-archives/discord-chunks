function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TextArea: function() {
            return A
        }
    });
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("153832"),
        s = n("35628"),
        l = n("512341"),
        c = n("246906"),
        f = n("135983"),
        d = n("336531"),
        _ = n("941504"),
        E = n("989255"),
        p = n("717897"),
        m = n("633353");

    function y(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O(e) {
        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var S = (0, u.v4)(),
        v = (0, u.v4)(),
        g = (0, u.v4)(),
        A = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && T(e, t)
            }(A, e);
            var t, n, r, i, u, l = (t = A, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = O(t);
                if (n) {
                    var a = O(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : y(e)
            });

            function A(e) {
                var t, n;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, A), h(y(t = l.call(this, e)), "getAriaDescribedBy", function() {
                    var e, n = t.props,
                        r = n.maxLength,
                        o = n.minLength,
                        i = n.error,
                        a = [],
                        u = null === (e = t.context) || void 0 === e ? void 0 : e.errorId;
                    return null != u && a.push(u), null != i ? a.push(S) : (null != r && a.push(g), null != o && a.push(v)), a.length > 0 ? a.join(" ") : void 0
                }), h(y(t), "onChange", function(e) {
                    var n = t.props,
                        r = n.onChange,
                        o = n.name;
                    null == r || r(e.currentTarget.value, o), t.setState({
                        dirty: !0
                    })
                }), h(y(t), "onFocus", function(e) {
                    var n = t.props,
                        r = n.onFocus,
                        o = n.name;
                    null == r || r(e, o)
                }), h(y(t), "onBlur", function(e) {
                    var n = t.props,
                        r = n.onBlur,
                        o = n.name;
                    null == r || r(e, o)
                }), h(y(t), "onKeyDown", function(e) {
                    var n = t.props.onKeyDown;
                    null == n || n(e)
                }), t.state = {
                    dirty: null !== (n = e.defaultDirty) && void 0 !== n && n
                }, t
            }
            return r = A, i = [{
                key: "getPaddingRight",
                value: function() {
                    var e = this.props,
                        t = e.maxLength,
                        n = e.showCharacterCountFullPadding;
                    if (null == t) return 10;
                    var r = "".concat(t).length;
                    return n && (r += "".concat(t, " / ").length), 7.23 * r + 10
                }
            }, {
                key: "getCharsLeftLength",
                value: function() {
                    var e = this.props,
                        t = e.maxLength,
                        n = e.value;
                    return null == t ? null : t - (null != n ? n.length : 0)
                }
            }, {
                key: "getIsOverflowing",
                value: function() {
                    var e = this.getCharsLeftLength();
                    return null != e && e < 0
                }
            }, {
                key: "getIsUnderflowing",
                value: function() {
                    var e = this.props,
                        t = e.minLength,
                        n = e.value;
                    return null != t && (null != n ? n.length : 0) < t
                }
            }, {
                key: "renderCharacterCount",
                value: function() {
                    if (this.props.showCharacterCount) {
                        var e, t = this.props,
                            n = t.value,
                            r = t.maxLength;
                        return o.createElement("div", {
                            className: a()(E.maxLength, h({}, E.errorOverflow, this.hasError())),
                            "aria-hidden": "true"
                        }, null !== (e = null == n ? void 0 : n.length) && void 0 !== e ? e : 0, " ", null != r && "/ ".concat(r))
                    }
                    return null
                }
            }, {
                key: "renderMaxLength",
                value: function() {
                    if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount) return null;
                    var e = this.getCharsLeftLength();
                    return null == e ? null : o.createElement("div", {
                        className: a()(E.maxLength, h({}, E.errorOverflow, e < 0)),
                        "aria-hidden": "true"
                    }, e)
                }
            }, {
                key: "hasError",
                value: function() {
                    return null != this.props.error || null != this.context.error || !1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1)
                }
            }, {
                key: "getErrorMessage",
                value: function() {
                    var e = this.props,
                        t = e.error,
                        n = e.maxLength,
                        r = e.minLength,
                        o = this.getIsOverflowing() ? _.default.Messages.MAXIMUM_LENGTH_ERROR.format({
                            maxLength: n
                        }) : null,
                        i = this.getIsUnderflowing() ? _.default.Messages.MINIMUM_LENGTH_ERROR.format({
                            minLength: r
                        }) : null;
                    return null != t && t.length < 1 || null === t ? null : void 0 !== t ? t : !1 === this.state.dirty ? null : null != o ? o : i
                }
            }, {
                key: "renderErrorMessage",
                value: function() {
                    var e = this.getErrorMessage();
                    return null == e ? null : o.createElement(f.Text, {
                        id: S,
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: E.errorMessage
                    }, e)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n, r = this.props,
                        i = r.disabled,
                        u = r.value,
                        l = r.placeholder,
                        f = r.autoFocus,
                        y = r.minLength,
                        I = r.maxLength,
                        O = r.allowOverflow,
                        T = r.spellCheck,
                        S = r.resizeable,
                        A = r.className,
                        b = r.id,
                        N = r.rows,
                        R = r.flex,
                        C = r.autosize,
                        P = r.required,
                        D = r.onInvalid,
                        L = r.inputRef,
                        M = C ? d.TextAreaAutosize : "textarea",
                        U = this.hasError(),
                        w = null !== (t = this.props["aria-labelledby"]) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId,
                        k = this.getAriaDescribedBy();
                    return o.createElement("div", {
                        className: a()(p.inputWrapper, h({}, E.flex, R))
                    }, o.createElement("div", {
                        className: a()(E.inputMaxLength, h({}, E.flex, R))
                    }, o.createElement(s.FocusRing, null, o.createElement(M, {
                        type: "text",
                        className: a()(p.inputDefault, E.textArea, m.scrollbarDefault, A, (h(n = {}, p.error, U), h(n, p.disabled, i), h(n, E.resizeable, S), n)),
                        "aria-labelledby": w,
                        "aria-describedby": k,
                        "aria-invalid": U,
                        style: {
                            paddingRight: this.getPaddingRight()
                        },
                        id: b,
                        disabled: i,
                        placeholder: l,
                        value: u,
                        autoFocus: f,
                        minLength: y,
                        maxLength: O ? void 0 : I,
                        spellCheck: T,
                        required: P,
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                        onInvalid: D,
                        rows: N,
                        ref: L
                    })), null != y && o.createElement(c.HiddenVisually, {
                        id: v
                    }, _.default.Messages.MINIMUM_LENGTH.format({
                        minLength: y
                    })), null != I && o.createElement(c.HiddenVisually, {
                        id: g
                    }, _.default.Messages.MAXIMUM_LENGTH.format({
                        maxLength: I
                    })), this.renderCharacterCount(), this.renderMaxLength()), this.renderErrorMessage())
                }
            }], I(r.prototype, i), u && I(r, u), A
        }(o.Component);
    h(A, "contextType", l.FormContext), h(A, "defaultProps", {
        name: "",
        disabled: !1,
        placeholder: "",
        autoFocus: !1,
        resizeable: !1,
        flex: !1,
        autosize: !1,
        rows: 3,
        allowOverflow: !1
    })
}