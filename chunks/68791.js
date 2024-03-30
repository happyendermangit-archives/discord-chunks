function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("784184"),
        s = n("941504"),
        l = n("290168");

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

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(y, e);
        var t, n, r, i, p, m = (t = y, n = function() {
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

        function y() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, y), e = m.apply(this, arguments), d(c(e), "_input", void 0), d(c(e), "state", {
                code: "",
                errorMessage: "",
                retrySuccess: !1
            }), d(c(e), "setRef", function(t) {
                e._input = t
            }), d(c(e), "getLabelText", function() {
                var t;
                return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? s.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : s.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
            }), d(c(e), "getSupportedCodeTypes", function() {
                return e.props.disallowBackupCodes ? s.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : s.default.Messages.TWO_FA_AUTH_CODE
            }), d(c(e), "getPlaceholder", function() {
                var t;
                return e.props.forceNoPlaceholder ? null : null !== (t = e.props.placeholder) && void 0 !== t ? t : e.getSupportedCodeTypes()
            }), d(c(e), "errorPresent", function() {
                return null != e.props.error && "" !== e.props.error || null != e.state.errorMessage && "" !== e.state.errorMessage
            }), d(c(e), "handleRetry", function() {
                var t = e.props.onRetry;
                null == t || t().then(function() {
                    return e.setState({
                        retrySuccess: !0
                    })
                })
            }), d(c(e), "handleSubmit", function(t) {
                t.preventDefault();
                var n = e.props,
                    r = n.handleSubmit,
                    o = n.onError;
                r(e.state.code).catch(function(t) {
                    null != t.body && (null == o || o(t.body), t.body.message && e.setState({
                        errorMessage: t.body.message
                    }))
                })
            }), d(c(e), "handleCancel", function() {
                var t = e.props,
                    n = t.onClose,
                    r = t.handleEarlyClose;
                n(), null == r || r()
            }), d(c(e), "handleCodeChange", function(t) {
                e.setState({
                    code: t
                })
            }), e
        }
        return r = y, i = [{
            key: "render",
            value: function() {
                var e, t = this.props,
                    n = t.title,
                    r = t.actionText,
                    i = t.children,
                    c = t.error,
                    f = t.isLoading,
                    d = t.maxLength,
                    _ = t.transitionState,
                    E = t.helpMessage,
                    p = t.retryPrompt,
                    m = t.retrySuccessMessage,
                    y = this.state,
                    I = y.code,
                    h = y.errorMessage,
                    O = y.retrySuccess,
                    T = o.Children.count(i) > 0 ? o.createElement(u.Card, {
                        type: u.Card.Types.WARNING,
                        className: l.card
                    }, o.createElement(u.Text, {
                        variant: "text-md/normal"
                    }, i)) : null,
                    S = null != p ? o.createElement(u.Text, {
                        className: a()(l.__invalid_submitText, l.spacing),
                        variant: "text-sm/normal"
                    }, o.createElement("br", null), o.createElement(u.Clickable, {
                        className: a()(l.spacing, l.__invalid_link),
                        onClick: this.handleRetry
                    }, o.createElement(u.Anchor, null, p))) : null,
                    v = O ? o.createElement(u.Card, {
                        type: u.Card.Types.SUCCESS,
                        className: l.card
                    }, o.createElement(u.Text, {
                        variant: "text-md/normal"
                    }, m)) : null;
                return o.createElement(u.ModalRoot, {
                    transitionState: _
                }, o.createElement("form", {
                    onSubmit: this.handleSubmit
                }, o.createElement(u.ModalHeader, {
                    separator: !1
                }, o.createElement(u.Heading, {
                    variant: "heading-lg/semibold"
                }, n)), o.createElement(u.ModalContent, null, null != E ? o.createElement(u.Text, {
                    color: "text-normal",
                    variant: "text-md/normal",
                    className: l.spacing
                }, E) : null, T, v, o.createElement(u.FormItem, {
                    title: this.getLabelText(),
                    className: l.spacing
                }, o.createElement(u.TextInput, {
                    inputRef: this.setRef,
                    onChange: this.handleCodeChange,
                    placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                    maxLength: null != d ? d : 10,
                    value: I,
                    autoComplete: "one-time-code",
                    autoFocus: !0
                }), this.errorPresent() ? o.createElement(u.Text, {
                    color: "text-danger",
                    variant: "text-xs/normal",
                    className: l.error
                }, null != c ? c : h) : null, S)), o.createElement(u.ModalFooter, null, o.createElement(u.Button, {
                    type: "submit",
                    disabled: f || 0 === I.length
                }, null != r ? r : s.default.Messages.CONFIRM), o.createElement(u.Button, {
                    onClick: this.handleCancel,
                    disabled: f,
                    look: u.Button.Looks.LINK,
                    color: u.Button.Colors.PRIMARY
                }, s.default.Messages.CANCEL))))
            }
        }], f(r.prototype, i), p && f(r, p), y
    }(o.PureComponent);
    d(p, "defaultProps", {
        btnClass: "",
        isLoading: !1,
        disallowBackupCodes: !1,
        error: null,
        forceNoPlaceholder: !1
    }), t.default = p
}