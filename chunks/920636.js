function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("77078"),
        l = n("782340"),
        u = n("708914");
    class d extends s.PureComponent {
        render() {
            var e;
            let {
                title: t,
                actionText: n,
                children: r,
                error: d,
                isLoading: c,
                maxLength: _,
                transitionState: f,
                helpMessage: E,
                retryPrompt: h,
                retrySuccessMessage: g
            } = this.props, {
                code: m,
                errorMessage: p,
                retrySuccess: S
            } = this.state, v = s.Children.count(r) > 0 ? (0, i.jsx)(o.Card, {
                type: o.Card.Types.WARNING,
                className: u.card,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: r
                })
            }) : null, T = null != h ? (0, i.jsxs)(o.Text, {
                className: a(u.submitText, u.spacing),
                variant: "text-sm/normal",
                children: [(0, i.jsx)("br", {}), (0, i.jsx)(o.Clickable, {
                    className: a(u.spacing, u.link),
                    onClick: this.handleRetry,
                    children: (0, i.jsx)(o.Anchor, {
                        children: h
                    })
                })]
            }) : null, I = S ? (0, i.jsx)(o.Card, {
                type: o.Card.Types.SUCCESS,
                className: u.card,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: g
                })
            }) : null;
            return (0, i.jsx)(o.ModalRoot, {
                transitionState: f,
                children: (0, i.jsxs)("form", {
                    onSubmit: this.handleSubmit,
                    children: [(0, i.jsx)(o.ModalHeader, {
                        separator: !1,
                        children: (0, i.jsx)(o.Heading, {
                            variant: "heading-lg/semibold",
                            children: t
                        })
                    }), (0, i.jsxs)(o.ModalContent, {
                        children: [null != E ? (0, i.jsx)(o.Text, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            className: u.spacing,
                            children: E
                        }) : null, v, I, (0, i.jsxs)(o.FormItem, {
                            title: this.getLabelText(),
                            className: u.spacing,
                            children: [(0, i.jsx)(o.TextInput, {
                                inputRef: this.setRef,
                                onChange: this.handleCodeChange,
                                placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                maxLength: null != _ ? _ : 10,
                                value: m,
                                autoComplete: "one-time-code",
                                autoFocus: !0
                            }), this.errorPresent() ? (0, i.jsx)(o.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: u.error,
                                children: null != d ? d : p
                            }) : null, T]
                        })]
                    }), (0, i.jsxs)(o.ModalFooter, {
                        children: [(0, i.jsx)(o.Button, {
                            type: "submit",
                            disabled: c || 0 === m.length,
                            children: null != n ? n : l.default.Messages.CONFIRM
                        }), (0, i.jsx)(o.Button, {
                            onClick: this.handleCancel,
                            disabled: c,
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            children: l.default.Messages.CANCEL
                        })]
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                code: "",
                errorMessage: "",
                retrySuccess: !1
            }, this.setRef = e => {
                this._input = e
            }, this.getLabelText = () => {
                var e;
                return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? l.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : l.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
            }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? l.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : l.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                var e;
                return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
            }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                let {
                    onRetry: e
                } = this.props;
                null == e || e().then(() => this.setState({
                    retrySuccess: !0
                }))
            }, this.handleSubmit = e => {
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
            }, this.handleCancel = () => {
                let {
                    onClose: e,
                    handleEarlyClose: t
                } = this.props;
                e(), null == t || t()
            }, this.handleCodeChange = e => {
                this.setState({
                    code: e
                })
            }
        }
    }
    d.defaultProps = {
        btnClass: "",
        isLoading: !1,
        disallowBackupCodes: !1,
        error: null,
        forceNoPlaceholder: !1
    };
    var c = d
}