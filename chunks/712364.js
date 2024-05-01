function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("735250"),
        a = n("470079"),
        s = n("120356"),
        o = n.n(s),
        l = n("481060"),
        u = n("689938"),
        d = n("587372");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class c extends(i = a.PureComponent) {
        render() {
            var e;
            let {
                title: t,
                actionText: n,
                children: i,
                error: s,
                isLoading: _,
                maxLength: c,
                transitionState: E,
                helpMessage: I,
                retryPrompt: T,
                retrySuccessMessage: f
            } = this.props, {
                code: S,
                errorMessage: h,
                retrySuccess: A
            } = this.state, m = a.Children.count(i) > 0 ? (0, r.jsx)(l.Card, {
                type: l.Card.Types.WARNING,
                className: d.card,
                children: (0, r.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: i
                })
            }) : null, N = null != T ? (0, r.jsxs)(l.Text, {
                className: o()(d.__invalid_submitText, d.spacing),
                variant: "text-sm/normal",
                children: [(0, r.jsx)("br", {}), (0, r.jsx)(l.Clickable, {
                    className: o()(d.spacing, d.__invalid_link),
                    onClick: this.handleRetry,
                    children: (0, r.jsx)(l.Anchor, {
                        children: T
                    })
                })]
            }) : null, p = A ? (0, r.jsx)(l.Card, {
                type: l.Card.Types.SUCCESS,
                className: d.card,
                children: (0, r.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: f
                })
            }) : null;
            return (0, r.jsx)(l.ModalRoot, {
                transitionState: E,
                children: (0, r.jsxs)("form", {
                    onSubmit: this.handleSubmit,
                    children: [(0, r.jsx)(l.ModalHeader, {
                        separator: !1,
                        children: (0, r.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            children: t
                        })
                    }), (0, r.jsxs)(l.ModalContent, {
                        children: [null != I ? (0, r.jsx)(l.Text, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            className: d.spacing,
                            children: I
                        }) : null, m, p, (0, r.jsxs)(l.FormItem, {
                            title: this.getLabelText(),
                            className: d.spacing,
                            children: [(0, r.jsx)(l.TextInput, {
                                inputRef: this.setRef,
                                onChange: this.handleCodeChange,
                                placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                maxLength: null != c ? c : 10,
                                value: S,
                                autoComplete: "one-time-code",
                                autoFocus: !0
                            }), this.errorPresent() ? (0, r.jsx)(l.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: d.error,
                                children: null != s ? s : h
                            }) : null, N]
                        })]
                    }), (0, r.jsxs)(l.ModalFooter, {
                        children: [(0, r.jsx)(l.Button, {
                            type: "submit",
                            disabled: _ || 0 === S.length,
                            children: null != n ? n : u.default.Messages.CONFIRM
                        }), (0, r.jsx)(l.Button, {
                            onClick: this.handleCancel,
                            disabled: _,
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            children: u.default.Messages.CANCEL
                        })]
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), _(this, "_input", void 0), _(this, "state", {
                code: "",
                errorMessage: "",
                retrySuccess: !1
            }), _(this, "setRef", e => {
                this._input = e
            }), _(this, "getLabelText", () => {
                var e;
                return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
            }), _(this, "getSupportedCodeTypes", () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE), _(this, "getPlaceholder", () => {
                var e;
                return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
            }), _(this, "errorPresent", () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage), _(this, "handleRetry", () => {
                let {
                    onRetry: e
                } = this.props;
                null == e || e().then(() => this.setState({
                    retrySuccess: !0
                }))
            }), _(this, "handleSubmit", e => {
                e.preventDefault();
                let {
                    handleSubmit: t,
                    onError: n
                } = this.props;
                t(this.state.code).catch(e => {
                    null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                        errorMessage: e.body.message
                    }))
                })
            }), _(this, "handleCancel", () => {
                let {
                    onClose: e,
                    handleEarlyClose: t
                } = this.props;
                e(), null == t || t()
            }), _(this, "handleCodeChange", e => {
                this.setState({
                    code: e
                })
            })
        }
    }
    _(c, "defaultProps", {
        btnClass: "",
        isLoading: !1,
        disallowBackupCodes: !1,
        error: null,
        forceNoPlaceholder: !1
    }), t.default = c
}