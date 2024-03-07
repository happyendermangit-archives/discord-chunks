function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("81594"),
        u = n("966724"),
        d = n("149022"),
        c = n("217535"),
        f = n("474643"),
        m = n("599110"),
        p = n("773336"),
        h = n("50885"),
        E = n("49111"),
        g = n("782340"),
        S = n("1065"),
        C = n("890957");

    function T(e) {
        var t, n, a, r;
        let {
            file: o
        } = e, [u, d] = i.useState(), [c, f] = i.useState(!1), [m, p] = i.useState({}), h = i.useRef(null);
        i.useEffect(() => {
            let e = h.current;
            if (null != e && f(!1), null == o) return;
            let t = URL.createObjectURL(o);
            return d(t), () => {
                d(void 0), URL.revokeObjectURL(t)
            }
        }, [o]), i.useLayoutEffect(() => {
            let e = h.current;
            null != e && (e.onload = () => {
                let t = e.naturalWidth / e.naturalHeight,
                    n = Math.max(.66, Math.min(t, 4));
                1 === n ? p({
                    width: 104,
                    height: 104
                }) : n > 1 ? p({
                    width: 104 * n,
                    height: void 0
                }) : p({
                    width: void 0,
                    height: 104 / n
                }), f(!0)
            })
        }, []);
        let E = Math.max(16, (120 - (null !== (n = null === (t = h.current) || void 0 === t ? void 0 : t.width) && void 0 !== n ? n : 0)) / 2);
        return (0, l.jsx)("img", {
            ref: h,
            src: u,
            className: s(S.icon, {
                [S.image]: !c
            }),
            "aria-hidden": !0,
            alt: "",
            style: {
                width: null !== (a = m.width) && void 0 !== a ? a : "initial",
                height: null !== (r = m.height) && void 0 !== r ? r : 104,
                marginLeft: E,
                marginRight: E,
                marginTop: null != m.height ? 104 - m.height - 33 : -33
            }
        })
    }
    class v extends i.Component {
        render() {
            var e;
            if (this.props.upload.item.platform !== u.UploadPlatform.WEB) return null;
            if (this.props.upload.isImage) return (0, l.jsx)(T, {
                file: this.props.upload.item.file
            });
            return (0, l.jsx)("div", {
                className: s(S.icon, {
                    [S[null !== (e = this.props.upload.classification) && void 0 !== e ? e : ""]]: !0
                })
            })
        }
    }
    class I extends i.Component {
        componentDidMount() {
            var e;
            (null === (e = this.props.upload) || void 0 === e ? void 0 : e.showLargeMessageDialog) && this.props.upload.item.platform === u.UploadPlatform.WEB && m.default.track(E.AnalyticEvents.OPEN_MODAL, {
                type: "Upload Large Message",
                message_content_length: this.props.upload.item.file.size
            }), p.isPlatformEmbedded && h.default.focus()
        }
        shouldComponentUpdate(e) {
            return null != e.upload
        }
        componentDidUpdate(e) {
            var t, n, l, i;
            (null === (t = e.upload) || void 0 === t ? void 0 : t.filename) !== (null === (n = this.props.upload) || void 0 === n ? void 0 : n.filename) && this.setState({
                filename: null !== (i = null === (l = this.props.upload) || void 0 === l ? void 0 : l.filename) && void 0 !== i ? i : ""
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
            return (0, l.jsxs)(r.ModalRoot, {
                "aria-label": g.default.Messages.ATTACH_FILES,
                size: r.ModalSize.DYNAMIC,
                transitionState: t,
                className: s(S.uploadModal),
                children: [(0, l.jsxs)("div", {
                    className: S.inner,
                    children: [(0, l.jsxs)("div", {
                        className: s(S.file, {
                            [S.expandable]: e.isImage
                        }),
                        children: [(0, l.jsx)(v, {
                            upload: e
                        }), (0, l.jsxs)("div", {
                            className: S.description,
                            children: [(0, l.jsx)("div", {
                                className: S.filename,
                                children: e.showLargeMessageDialog ? g.default.Messages.LARGE_MESSAGE_UPLOAD_TITLE_MAX_LENGTH.format({
                                    maxLength: n
                                }) : e.filename
                            }), e.showLargeMessageDialog ? (0, l.jsx)("div", {
                                className: S.subtitle,
                                children: g.default.Messages.LARGE_MESSAGE_UPLOAD_SUBTITLE
                            }) : null]
                        })]
                    }), (0, l.jsx)("div", {
                        className: S.comment,
                        children: (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: S.label,
                                children: (0, l.jsx)("span", {
                                    children: g.default.Messages.UPLOAD_AREA_FILENAME
                                })
                            }), (0, l.jsx)(r.TextInput, {
                                className: s(S.channelTextAreaUpload, C.marginTop8),
                                value: this.state.filename,
                                onChange: e => this.setState({
                                    filename: e
                                }),
                                onKeyDown: e => {
                                    if (e.which === E.KeyboardKeys.ENTER) return this.handleSubmit()
                                }
                            }), e.isImage ? (0, l.jsxs)(i.Fragment, {
                                children: [(0, l.jsx)("div", {
                                    className: S.label,
                                    children: (0, l.jsx)("span", {
                                        children: g.default.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_LABEL
                                    })
                                }), (0, l.jsx)(r.TextInput, {
                                    className: s(S.channelTextAreaUpload, C.marginTop8),
                                    placeholder: g.default.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_PLACEHOLDER,
                                    value: this.state.description,
                                    onChange: e => this.setState({
                                        description: e
                                    }),
                                    onKeyDown: e => {
                                        if (e.which === E.KeyboardKeys.ENTER) return this.handleSubmit()
                                    }
                                })]
                            }) : null, !0 !== a && (0, l.jsx)(r.Checkbox, {
                                className: C.marginBottom20,
                                value: o,
                                onChange: (e, t) => this.setState({
                                    hasSpoiler: t
                                }),
                                children: (0, l.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: g.default.Messages.SPOILER_MARK_SELECTED
                                })
                            })]
                        })
                    })]
                }), (0, l.jsx)("div", {
                    className: S.footer,
                    children: (0, l.jsxs)("div", {
                        className: s(S.hasSpoilers, S.footerRightAlign),
                        children: [(0, l.jsx)(r.Button, {
                            type: "button",
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.PRIMARY,
                            onClick: this.cancel,
                            children: (0, l.jsx)("span", {
                                children: g.default.Messages.CANCEL
                            })
                        }), (0, l.jsx)(r.Button, {
                            type: "submit",
                            onClick: this.handleSubmit,
                            children: (0, l.jsx)("span", {
                                children: g.default.Messages.ATTACHMENT_MODAL_SAVE
                            })
                        })]
                    })
                })]
            })
        }
        constructor(e) {
            var t, n, l, i, a, s;
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
                    filename: l,
                    description: i,
                    hasSpoiler: a
                } = this.state;
                n({
                    upload: e,
                    name: l,
                    description: i,
                    spoiler: a
                }), t()
            };
            let r = e.ignoreDraft ? "" : f.default.getDraft(this.props.channelId, e.draftType);
            this.state = {
                ...(0, d.createState)(r),
                textFocused: !0,
                hasSpoiler: null !== (i = null === (t = e.upload) || void 0 === t ? void 0 : t.spoiler) && void 0 !== i && i,
                filename: null !== (a = null === (n = e.upload) || void 0 === n ? void 0 : n.filename) && void 0 !== a ? a : "",
                contentWarningProps: null,
                description: null !== (s = null === (l = e.upload) || void 0 === l ? void 0 : l.description) && void 0 !== s ? s : ""
            }
        }
    }

    function _(e) {
        let t = (0, c.default)();
        return e.upload.item.platform !== u.UploadPlatform.WEB ? null : (0, l.jsx)(I, {
            ...e,
            file: e.upload.item.file,
            messageMaxLength: t
        })
    }
}