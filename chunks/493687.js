function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var r, o = n("470079"),
        i = n("699581"),
        a = n.n(i),
        u = n("898511"),
        s = n("784184"),
        l = n("940944"),
        c = n("803576"),
        f = n("930949"),
        d = n("281767"),
        _ = n("941504"),
        E = n("587153");

    function p(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var O = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
        }(f, e);
        var t, n, r, i, u, c = (t = f, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = I(t);
            if (n) {
                var a = I(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : p(e)
        });

        function f() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, f), e = c.apply(this, arguments), y(p(e), "noteRef", o.createRef()), y(p(e), "handleBlur", function(t) {
                var n = t.currentTarget.value,
                    r = e.props,
                    o = r.note,
                    i = r.userId,
                    a = r.onUpdate;
                o !== n && (null == a || a(), l.default.updateNote(i, n))
            }), y(p(e), "handleKeyPress", function(e) {
                if (13 === e.which) {
                    if (e.shiftKey) {
                        var t;
                        (null !== (t = e.currentTarget.value.match(/\n/g)) && void 0 !== t ? t : []).length >= 5 && e.preventDefault()
                    } else e.preventDefault(), e.currentTarget.blur()
                } else e.which === d.KeyboardKeys.SPACE && e.stopPropagation()
            }), e
        }
        return r = f, i = [{
            key: "componentDidMount",
            value: function() {
                if (this.props.autoFocus && !this.props.hideNote) {
                    var e = a().findDOMNode(this.noteRef.current);
                    null != e && null != e.selectionStart && (e.focus(), e.selectionStart = e.selectionEnd = e.value.length)
                }
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.className,
                    n = e.loading,
                    r = e.note;
                return e.hideNote ? null : o.createElement("div", {
                    className: t
                }, o.createElement(s.TextAreaAutosize, {
                    ref: this.noteRef,
                    className: E.textarea,
                    disabled: n,
                    placeholder: n ? _.default.Messages.LOADING_NOTE : _.default.Messages.NOTE_PLACEHOLDER,
                    "aria-label": _.default.Messages.NOTE,
                    onBlur: this.handleBlur,
                    onKeyPress: this.handleKeyPress,
                    defaultValue: null != r ? r : void 0,
                    maxLength: d.NOTE_MAX_LENGTH
                }))
            }
        }], m(r.prototype, i), u && m(r, u), f
    }(o.PureComponent);

    function T(e) {
        var t, n, r = (0, u.useStateFromStores)([f.default], function() {
                return f.default.hidePersonalInformation
            }),
            i = (0, c.default)(e.userId);
        return o.createElement(O, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    y(e, t, n[t])
                })
            }
            return e
        }({}, e, i), n = (n = {
            hideNote: r
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    }
    y(O, "defaultProps", {
        autoFocus: !1
    })
}