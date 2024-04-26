function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    }), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("166459"),
        u = n("476326"),
        d = n("752305"),
        _ = n("849522"),
        c = n("703558"),
        E = n("626135"),
        I = n("358085"),
        T = n("998502"),
        f = n("981631"),
        S = n("689938"),
        h = n("297888"),
        A = n("949086");

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function N(e) {
        var t, n, s, o;
        let {
            file: l
        } = e, [u, d] = r.useState(), [_, c] = r.useState(!1), [E, I] = r.useState({}), T = r.useRef(null);
        r.useEffect(() => {
            if (null != T.current && c(!1), null == l) return;
            let e = URL.createObjectURL(l);
            return d(e), () => {
                d(void 0), URL.revokeObjectURL(e)
            }
        }, [l]), r.useLayoutEffect(() => {
            let e = T.current;
            null != e && (e.onload = () => {
                let t = Math.max(.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
                1 === t ? I({
                    width: 104,
                    height: 104
                }) : t > 1 ? I({
                    width: 104 * t,
                    height: void 0
                }) : I({
                    width: void 0,
                    height: 104 / t
                }), c(!0)
            })
        }, []);
        let f = Math.max(16, (120 - (null !== (n = null === (t = T.current) || void 0 === t ? void 0 : t.width) && void 0 !== n ? n : 0)) / 2);
        return (0, i.jsx)("img", {
            ref: T,
            src: u,
            className: a()(h.icon, {
                [h.image]: !_
            }),
            "aria-hidden": !0,
            alt: "",
            style: {
                width: null !== (s = E.width) && void 0 !== s ? s : "initial",
                height: null !== (o = E.height) && void 0 !== o ? o : 104,
                marginLeft: f,
                marginRight: f,
                marginTop: null != E.height ? 104 - E.height - 33 : -33
            }
        })
    }
    class p extends r.Component {
        render() {
            var e;
            if (this.props.upload.item.platform !== u.UploadPlatform.WEB) return null;
            if (this.props.upload.isImage) return (0, i.jsx)(N, {
                file: this.props.upload.item.file
            });
            return (0, i.jsx)("div", {
                className: a()(h.icon, {
                    [h[null !== (e = this.props.upload.classification) && void 0 !== e ? e : ""]]: !0
                })
            })
        }
    }
    class O extends r.Component {
        componentDidMount() {
            var e;
            (null === (e = this.props.upload) || void 0 === e ? void 0 : e.showLargeMessageDialog) && this.props.upload.item.platform === u.UploadPlatform.WEB && E.default.track(f.AnalyticEvents.OPEN_MODAL, {
                type: "Upload Large Message",
                message_content_length: this.props.upload.item.file.size
            }), I.isPlatformEmbedded && T.default.focus()
        }
        shouldComponentUpdate(e) {
            return null != e.upload
        }
        componentDidUpdate(e) {
            var t, n, i, r;
            (null === (t = e.upload) || void 0 === t ? void 0 : t.filename) !== (null === (n = this.props.upload) || void 0 === n ? void 0 : n.filename) && this.setState({
                filename: null !== (r = null === (i = this.props.upload) || void 0 === i ? void 0 : i.filename) && void 0 !== r ? r : ""
            })
        }
        render() {
            let {
                upload: e,
                transitionState: t,
                messageMaxLength: n,
                disableSpoiler: s
            } = this.props, {
                hasSpoiler: l
            } = this.state;
            return (0, i.jsxs)(o.ModalRoot, {
                "aria-label": S.default.Messages.ATTACH_FILES,
                size: o.ModalSize.DYNAMIC,
                transitionState: t,
                className: a()(h.uploadModal),
                children: [(0, i.jsxs)("div", {
                    className: h.inner,
                    children: [(0, i.jsxs)("div", {
                        className: a()(h.file, {
                            [h.expandable]: e.isImage
                        }),
                        children: [(0, i.jsx)(p, {
                            upload: e
                        }), (0, i.jsxs)("div", {
                            className: h.description,
                            children: [(0, i.jsx)("div", {
                                className: h.filename,
                                children: e.showLargeMessageDialog ? S.default.Messages.LARGE_MESSAGE_UPLOAD_TITLE_MAX_LENGTH.format({
                                    maxLength: n
                                }) : e.filename
                            }), e.showLargeMessageDialog ? (0, i.jsx)("div", {
                                className: h.subtitle,
                                children: S.default.Messages.LARGE_MESSAGE_UPLOAD_SUBTITLE
                            }) : null]
                        })]
                    }), (0, i.jsx)("div", {
                        className: h.comment,
                        children: (0, i.jsxs)(r.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: h.label,
                                children: (0, i.jsx)("span", {
                                    children: S.default.Messages.UPLOAD_AREA_FILENAME
                                })
                            }), (0, i.jsx)(o.TextInput, {
                                className: a()(h.channelTextAreaUpload, A.marginTop8),
                                value: this.state.filename,
                                onChange: e => this.setState({
                                    filename: e
                                }),
                                onKeyDown: e => {
                                    if (e.which === f.KeyboardKeys.ENTER) return this.handleSubmit()
                                }
                            }), e.isImage ? (0, i.jsxs)(r.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    className: h.label,
                                    children: (0, i.jsx)("span", {
                                        children: S.default.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_LABEL
                                    })
                                }), (0, i.jsx)(o.TextInput, {
                                    className: a()(h.channelTextAreaUpload, A.marginTop8),
                                    placeholder: S.default.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_PLACEHOLDER,
                                    value: this.state.description,
                                    onChange: e => this.setState({
                                        description: e
                                    }),
                                    onKeyDown: e => {
                                        if (e.which === f.KeyboardKeys.ENTER) return this.handleSubmit()
                                    }
                                })]
                            }) : null, !0 !== s && (0, i.jsx)(o.Checkbox, {
                                className: A.marginBottom20,
                                value: l,
                                onChange: (e, t) => this.setState({
                                    hasSpoiler: t
                                }),
                                children: (0, i.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    children: S.default.Messages.SPOILER_MARK_SELECTED
                                })
                            })]
                        })
                    })]
                }), (0, i.jsx)("div", {
                    className: h.footer,
                    children: (0, i.jsxs)("div", {
                        className: a()(h.hasSpoilers, h.footerRightAlign),
                        children: [(0, i.jsx)(o.Button, {
                            type: "button",
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: this.cancel,
                            children: (0, i.jsx)("span", {
                                children: S.default.Messages.CANCEL
                            })
                        }), (0, i.jsx)(o.Button, {
                            type: "submit",
                            onClick: this.handleSubmit,
                            children: (0, i.jsx)("span", {
                                children: S.default.Messages.ATTACHMENT_MODAL_SAVE
                            })
                        })]
                    })
                })]
            })
        }
        constructor(e) {
            var t, n, i, r, s, a;
            super(e), m(this, "cancelAll", () => {
                l.default.clearAll(this.props.channelId, this.props.draftType), this.props.onClose()
            }), m(this, "cancel", () => {
                this.props.onClose()
            }), m(this, "handleTextChange", (e, t, n) => {
                this.setState({
                    textValue: t,
                    richValue: n
                })
            }), m(this, "handleSubmit", () => {
                let {
                    upload: e,
                    onClose: t,
                    onSubmit: n
                } = this.props, {
                    filename: i,
                    description: r,
                    hasSpoiler: s
                } = this.state;
                n({
                    upload: e,
                    name: i,
                    description: r,
                    spoiler: s
                }), t()
            });
            let o = e.ignoreDraft ? "" : c.default.getDraft(this.props.channelId, e.draftType);
            this.state = {
                ...(0, d.createState)(o),
                textFocused: !0,
                hasSpoiler: null !== (r = null === (t = e.upload) || void 0 === t ? void 0 : t.spoiler) && void 0 !== r && r,
                filename: null !== (s = null === (n = e.upload) || void 0 === n ? void 0 : n.filename) && void 0 !== s ? s : "",
                contentWarningProps: null,
                description: null !== (a = null === (i = e.upload) || void 0 === i ? void 0 : i.description) && void 0 !== a ? a : ""
            }
        }
    }

    function R(e) {
        let t = (0, _.default)();
        return e.upload.item.platform !== u.UploadPlatform.WEB ? null : (0, i.jsx)(O, {
            ...e,
            file: e.upload.item.file,
            messageMaxLength: t
        })
    }
}