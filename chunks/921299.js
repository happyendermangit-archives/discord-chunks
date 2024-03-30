function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return w
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("183645"),
        s = n("319654"),
        l = n("941055"),
        c = n("197351"),
        f = n("309944"),
        d = n("870331"),
        _ = n("374550"),
        E = n("131900"),
        p = n("281767"),
        m = n("941504"),
        y = n("294575"),
        I = n("794711");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function T(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e, t, n) {
        return t && S(e.prototype, t), n && S(e, n), e
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function A(e) {
        return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function b(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && C(e, t)
    }

    function N(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                g(e, t, n[t])
            })
        }
        return e
    }

    function R(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function C(e, t) {
        return (C = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function P(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function D(e) {
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
            var n, r, o, i = A(e);
            if (t) {
                var a = A(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : O(n)
        }
    }

    function L(e) {
        var t, n, o, a, u = e.file,
            s = P(r.useState(), 2),
            l = s[0],
            c = s[1],
            f = P(r.useState(!1), 2),
            d = f[0],
            _ = f[1],
            E = P(r.useState({}), 2),
            p = E[0],
            m = E[1],
            I = r.useRef(null);
        r.useEffect(function() {
            if (null != I.current && _(!1), null != u) {
                var e = URL.createObjectURL(u);
                return c(e),
                    function() {
                        c(void 0), URL.revokeObjectURL(e)
                    }
            }
        }, [u]), r.useLayoutEffect(function() {
            var e = I.current;
            null != e && (e.onload = function() {
                var t = Math.max(.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
                1 === t ? m({
                    width: 104,
                    height: 104
                }) : t > 1 ? m({
                    width: 104 * t,
                    height: void 0
                }) : m({
                    width: void 0,
                    height: 104 / t
                }), _(!0)
            })
        }, []);
        var h = Math.max(16, (120 - (null !== (n = null === (t = I.current) || void 0 === t ? void 0 : t.width) && void 0 !== n ? n : 0)) / 2);
        return r.createElement("img", {
            ref: I,
            src: l,
            className: i()(y.icon, g({}, y.image, !d)),
            "aria-hidden": !0,
            alt: "",
            style: {
                width: null !== (o = p.width) && void 0 !== o ? o : "initial",
                height: null !== (a = p.height) && void 0 !== a ? a : 104,
                marginLeft: h,
                marginRight: h,
                marginTop: null != p.height ? 104 - p.height - 33 : -33
            }
        })
    }
    var M = function(e) {
            b(n, e);
            var t = D(n);

            function n() {
                return T(this, n), t.apply(this, arguments)
            }
            return v(n, [{
                key: "render",
                value: function() {
                    var e;
                    if (this.props.upload.item.platform !== s.UploadPlatform.WEB) return null;
                    if (this.props.upload.isImage) return r.createElement(L, {
                        file: this.props.upload.item.file
                    });
                    return r.createElement("div", {
                        className: i()(y.icon, g({}, y[null !== (e = this.props.upload.classification) && void 0 !== e ? e : ""], !0))
                    })
                }
            }]), n
        }(r.Component),
        U = function(e) {
            b(n, e);
            var t = D(n);

            function n(e) {
                T(this, n), g(O(r = t.call(this, e)), "cancelAll", function() {
                    u.default.clearAll(r.props.channelId, r.props.draftType), r.props.onClose()
                }), g(O(r), "cancel", function() {
                    r.props.onClose()
                }), g(O(r), "handleTextChange", function(e, t, n) {
                    r.setState({
                        textValue: t,
                        richValue: n
                    })
                }), g(O(r), "handleSubmit", function() {
                    var e = r.props,
                        t = e.upload,
                        n = e.onClose,
                        o = e.onSubmit,
                        i = r.state;
                    o({
                        upload: t,
                        name: i.filename,
                        description: i.description,
                        spoiler: i.hasSpoiler
                    }), n()
                });
                var r, o, i, a, s, c, d, _ = e.ignoreDraft ? "" : f.default.getDraft(r.props.channelId, e.draftType);
                return r.state = R(N({}, (0, l.createState)(_)), {
                    textFocused: !0,
                    hasSpoiler: null !== (s = null === (o = e.upload) || void 0 === o ? void 0 : o.spoiler) && void 0 !== s && s,
                    filename: null !== (c = null === (i = e.upload) || void 0 === i ? void 0 : i.filename) && void 0 !== c ? c : "",
                    contentWarningProps: null,
                    description: null !== (d = null === (a = e.upload) || void 0 === a ? void 0 : a.description) && void 0 !== d ? d : ""
                }), r
            }
            return v(n, [{
                key: "componentDidMount",
                value: function() {
                    var e;
                    (null === (e = this.props.upload) || void 0 === e ? void 0 : e.showLargeMessageDialog) && this.props.upload.item.platform === s.UploadPlatform.WEB && d.default.track(p.AnalyticEvents.OPEN_MODAL, {
                        type: "Upload Large Message",
                        message_content_length: this.props.upload.item.file.size
                    }), _.isPlatformEmbedded && E.default.focus()
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    return null != e.upload
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t, n, r, o;
                    (null === (t = e.upload) || void 0 === t ? void 0 : t.filename) !== (null === (n = this.props.upload) || void 0 === n ? void 0 : n.filename) && this.setState({
                        filename: null !== (o = null === (r = this.props.upload) || void 0 === r ? void 0 : r.filename) && void 0 !== o ? o : ""
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.upload,
                        o = t.transitionState,
                        u = t.messageMaxLength,
                        s = t.disableSpoiler,
                        l = this.state.hasSpoiler;
                    return r.createElement(a.ModalRoot, {
                        "aria-label": m.default.Messages.ATTACH_FILES,
                        size: a.ModalSize.DYNAMIC,
                        transitionState: o,
                        className: i()(y.uploadModal)
                    }, r.createElement("div", {
                        className: y.inner
                    }, r.createElement("div", {
                        className: i()(y.file, g({}, y.expandable, n.isImage))
                    }, r.createElement(M, {
                        upload: n
                    }), r.createElement("div", {
                        className: y.description
                    }, r.createElement("div", {
                        className: y.filename
                    }, n.showLargeMessageDialog ? m.default.Messages.LARGE_MESSAGE_UPLOAD_TITLE_MAX_LENGTH.format({
                        maxLength: u
                    }) : n.filename), n.showLargeMessageDialog ? r.createElement("div", {
                        className: y.subtitle
                    }, m.default.Messages.LARGE_MESSAGE_UPLOAD_SUBTITLE) : null)), r.createElement("div", {
                        className: y.comment
                    }, r.createElement(r.Fragment, null, r.createElement("div", {
                        className: y.label
                    }, r.createElement("span", null, m.default.Messages.UPLOAD_AREA_FILENAME)), r.createElement(a.TextInput, {
                        className: i()(y.channelTextAreaUpload, I.marginTop8),
                        value: this.state.filename,
                        onChange: function(t) {
                            return e.setState({
                                filename: t
                            })
                        },
                        onKeyDown: function(t) {
                            if (t.which === p.KeyboardKeys.ENTER) return e.handleSubmit()
                        }
                    }), n.isImage ? r.createElement(r.Fragment, null, r.createElement("div", {
                        className: y.label
                    }, r.createElement("span", null, m.default.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_LABEL)), r.createElement(a.TextInput, {
                        className: i()(y.channelTextAreaUpload, I.marginTop8),
                        placeholder: m.default.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_PLACEHOLDER,
                        value: this.state.description,
                        onChange: function(t) {
                            return e.setState({
                                description: t
                            })
                        },
                        onKeyDown: function(t) {
                            if (t.which === p.KeyboardKeys.ENTER) return e.handleSubmit()
                        }
                    })) : null, !0 !== s && r.createElement(a.Checkbox, {
                        className: I.marginBottom20,
                        value: l,
                        onChange: function(t, n) {
                            return e.setState({
                                hasSpoiler: n
                            })
                        }
                    }, r.createElement(a.Text, {
                        variant: "text-sm/normal"
                    }, m.default.Messages.SPOILER_MARK_SELECTED))))), r.createElement("div", {
                        className: y.footer
                    }, r.createElement("div", {
                        className: i()(y.hasSpoilers, y.footerRightAlign)
                    }, r.createElement(a.Button, {
                        type: "button",
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.PRIMARY,
                        onClick: this.cancel
                    }, r.createElement("span", null, m.default.Messages.CANCEL)), r.createElement(a.Button, {
                        type: "submit",
                        onClick: this.handleSubmit
                    }, r.createElement("span", null, m.default.Messages.ATTACHMENT_MODAL_SAVE)))))
                }
            }]), n
        }(r.Component);

    function w(e) {
        var t = (0, c.default)();
        return e.upload.item.platform !== s.UploadPlatform.WEB ? null : r.createElement(U, R(N({}, e), {
            file: e.upload.item.file,
            messageMaxLength: t
        }))
    }
}