function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("81594"),
        u = n("966724"),
        d = n("149022"),
        c = n("217535"),
        f = n("474643"),
        p = n("599110"),
        m = n("773336"),
        h = n("50885"),
        x = n("49111"),
        E = n("782340"),
        y = n("1065"),
        g = n("890957");

    function S(e) {
        var t, n, a, r;
        let {
            file: o
        } = e, [u, d] = l.useState(), [c, f] = l.useState(!1), [p, m] = l.useState({}), h = l.useRef(null);
        l.useEffect(() => {
            let e = h.current;
            if (null != e && f(!1), null == o) return;
            let t = URL.createObjectURL(o);
            return d(t), () => {
                d(void 0), URL.revokeObjectURL(t)
            }
        }, [o]), l.useLayoutEffect(() => {
            let e = h.current;
            null != e && (e.onload = () => {
                let t = e.naturalWidth / e.naturalHeight,
                    n = Math.max(.66, Math.min(t, 4));
                1 === n ? m({
                    width: 104,
                    height: 104
                }) : n > 1 ? m({
                    width: 104 * n,
                    height: void 0
                }) : m({
                    width: void 0,
                    height: 104 / n
                }), f(!0)
            })
        }, []);
        let x = Math.max(16, (120 - (null !== (n = null === (t = h.current) || void 0 === t ? void 0 : t.width) && void 0 !== n ? n : 0)) / 2);
        return (0, i.jsx)("img", {
            ref: h,
            src: u,
            className: s(y.icon, {
                [y.image]: !c
            }),
            "aria-hidden": !0,
            alt: "",
            style: {
                width: null !== (a = p.width) && void 0 !== a ? a : "initial",
                height: null !== (r = p.height) && void 0 !== r ? r : 104,
                marginLeft: x,
                marginRight: x,
                marginTop: null != p.height ? 104 - p.height - 33 : -33
            }
        })
    }
    class C extends l.Component {
        render() {
            var e;
            if (this.props.upload.item.platform !== u.UploadPlatform.WEB) return null;
            if (this.props.upload.isImage) return (0, i.jsx)(S, {
                file: this.props.upload.item.file
            });
            return (0, i.jsx)("div", {
                className: s(y.icon, {
                    [y[null !== (e = this.props.upload.classification) && void 0 !== e ? e : ""]]: !0
                })
            })
        }
    }
    class I extends l.Component {
        componentDidMount() {
            var e;
            (null === (e = this.props.upload) || void 0 === e ? void 0 : e.showLargeMessageDialog) && this.props.upload.item.platform === u.UploadPlatform.WEB && p.default.track(x.AnalyticEvents.OPEN_MODAL, {
                type: "Upload Large Message",
                message_content_length: this.props.upload.item.file.size
            }), m.isPlatformEmbedded && h.default.focus()
        }
        shouldComponentUpdate(e) {
            return null != e.upload
        }
        componentDidUpdate(e) {
            var t, n, i, l;
            (null === (t = e.upload) || void 0 === t ? void 0 : t.filename) !== (null === (n = this.props.upload) || void 0 === n ? void 0 : n.filename) && this.setState({
                filename: null !== (l = null === (i = this.props.upload) || void 0 === i ? void 0 : i.filename) && void 0 !== l ? l : ""
            })
        }
        render() {
            let {
                upload: e,
                transitionState: t,
                messageMaxLength: n,
                disableSpoiler: a
            } = this.props, {
                hasSpoiler: o
            } = this.state;
            return (0, i.jsxs)(r.ModalRoot, {
                "aria-label": E.default.Messages.ATTACH_FILES,
                size: r.ModalSize.DYNAMIC,
                transitionState: t,
                className: s(y.uploadModal),
                children: [(0, i.jsxs)("div", {
                    className: y.inner,
                    children: [(0, i.jsxs)("div", {
                        className: s(y.file, {
                            [y.expandable]: e.isImage
                        }),
                        children: [(0, i.jsx)(C, {
                            upload: e
                        }), (0, i.jsxs)("div", {
                            className: y.description,
                            children: [(0, i.jsx)("div", {
                                className: y.filename,
                                children: e.showLargeMessageDialog ? E.default.Messages.LARGE_MESSAGE_UPLOAD_TITLE_MAX_LENGTH.format({
                                    maxLength: n
                                }) : e.filename
                            }), e.showLargeMessageDialog ? (0, i.jsx)("div", {
                                className: y.subtitle,
                                children: E.default.Messages.LARGE_MESSAGE_UPLOAD_SUBTITLE
                            }) : null]
                        })]
                    }), (0, i.jsx)("div", {
                        className: y.comment,
                        children: (0, i.jsxs)(l.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: y.label,
                                children: (0, i.jsx)("span", {
                                    children: E.default.Messages.UPLOAD_AREA_FILENAME
                                })
                            }), (0, i.jsx)(r.TextInput, {
                                className: s(y.channelTextAreaUpload, g.marginTop8),
                                value: this.state.filename,
                                onChange: e => this.setState({
                                    filename: e
                                }),
                                onKeyDown: e => {
                                    if (e.which === x.KeyboardKeys.ENTER) return this.handleSubmit()
                                }
                            }), e.isImage ? (0, i.jsxs)(l.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    className: y.label,
                                    children: (0, i.jsx)("span", {
                                        children: E.default.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_LABEL
                                    })
                                }), (0, i.jsx)(r.TextInput, {
                                    className: s(y.channelTextAreaUpload, g.marginTop8),
                                    placeholder: E.default.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_PLACEHOLDER,
                                    value: this.state.description,
                                    onChange: e => this.setState({
                                        description: e
                                    }),
                                    onKeyDown: e => {
                                        if (e.which === x.KeyboardKeys.ENTER) return this.handleSubmit()
                                    }
                                })]
                            }) : null, !0 !== a && (0, i.jsx)(r.Checkbox, {
                                className: g.marginBottom20,
                                value: o,
                                onChange: (e, t) => this.setState({
                                    hasSpoiler: t
                                }),
                                children: (0, i.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: E.default.Messages.SPOILER_MARK_SELECTED
                                })
                            })]
                        })
                    })]
                }), (0, i.jsx)("div", {
                    className: y.footer,
                    children: (0, i.jsxs)("div", {
                        className: s(y.hasSpoilers, y.footerRightAlign),
                        children: [(0, i.jsx)(r.Button, {
                            type: "button",
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.PRIMARY,
                            onClick: this.cancel,
                            children: (0, i.jsx)("span", {
                                children: E.default.Messages.CANCEL
                            })
                        }), (0, i.jsx)(r.Button, {
                            type: "submit",
                            onClick: this.handleSubmit,
                            children: (0, i.jsx)("span", {
                                children: E.default.Messages.ATTACHMENT_MODAL_SAVE
                            })
                        })]
                    })
                })]
            })
        }
        constructor(e) {
            var t, n, i, l, a, s;
            super(e), this.cancelAll = () => {
                o.default.clearAll(this.props.channelId, this.props.draftType), this.props.onClose()
            }, this.cancel = () => {
                this.props.onClose()
            }, this.handleTextChange = (e, t, n) => {
                this.setState({
                    textValue: t,
                    richValue: n
                })
            }, this.handleSubmit = () => {
                let {
                    upload: e,
                    onClose: t,
                    onSubmit: n
                } = this.props, {
                    filename: i,
                    description: l,
                    hasSpoiler: a
                } = this.state;
                n({
                    upload: e,
                    name: i,
                    description: l,
                    spoiler: a
                }), t()
            };
            let r = e.ignoreDraft ? "" : f.default.getDraft(this.props.channelId, e.draftType);
            this.state = {
                ...(0, d.createState)(r),
                textFocused: !0,
                hasSpoiler: null !== (l = null === (t = e.upload) || void 0 === t ? void 0 : t.spoiler) && void 0 !== l && l,
                filename: null !== (a = null === (n = e.upload) || void 0 === n ? void 0 : n.filename) && void 0 !== a ? a : "",
                contentWarningProps: null,
                description: null !== (s = null === (i = e.upload) || void 0 === i ? void 0 : i.description) && void 0 !== s ? s : ""
            }
        }
    }

    function _(e) {
        let t = (0, c.default)();
        return e.upload.item.platform !== u.UploadPlatform.WEB ? null : (0, i.jsx)(I, {
            ...e,
            file: e.upload.item.file,
            messageMaxLength: t
        })
    }
}