function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UploadIcon: function() {
            return k
        },
        default: function() {
            return G
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("183645"),
        l = n("921299"),
        c = n("319654"),
        f = n("626848"),
        d = n("7445"),
        _ = n("935741"),
        E = n("778653"),
        p = n("588220"),
        m = n("274171"),
        y = n("205631"),
        I = n("760920"),
        h = n("547700"),
        O = n("81091"),
        T = n("182425"),
        S = n("523018"),
        v = n("960947"),
        g = n("510049"),
        A = n("941504"),
        b = n("768902");

    function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function C(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                R(e, t, n[t])
            })
        }
        return e
    }

    function P(e, t) {
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

    function D(e, t) {
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
                if ("string" == typeof e) return N(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var L = ["image/jpeg", "image/png", "image/webp", "image/gif", "video/quicktime", "video/mp4"];

    function M(e) {
        var t = e.alt,
            n = e.spoiler,
            o = e.renderContent,
            i = e.size,
            a = D(r.useState(!1), 2),
            u = a[0],
            s = a[1];
        return r.createElement(E.ObscuredDisplayContext.Provider, {
            value: !n
        }, r.createElement(E.default, {
            containerStyles: i === g.AttachmentListItemSizes.CLIP ? {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                boxShadow: "none"
            } : void 0,
            type: E.default.Types.ATTACHMENT,
            onReveal: function() {
                return s(!0)
            },
            className: b.spoilerContainer
        }, function(e) {
            return r.createElement("div", {
                className: b.spoilerWrapper
            }, o(e), r.createElement("div", {
                className: b.tags
            }, null != t && "" !== t ? r.createElement("span", {
                className: b.altTag
            }, A.default.Messages.IMAGE_ALT) : null, u && n ? r.createElement("span", {
                className: b.altTag
            }, A.default.Messages.SPOILER) : null))
        }))
    }

    function U(e) {
        var t = e.file,
            n = e.alt,
            o = e.spoiler,
            a = e.size,
            s = void 0 === a ? g.AttachmentListItemSizes.MEDIUM : a,
            l = e.onMouseEnter,
            c = D(r.useState(), 2),
            f = c[0],
            d = c[1],
            _ = D(r.useState({
                width: 0,
                height: 0
            }), 2),
            E = _[0],
            p = _[1],
            m = s === g.AttachmentListItemSizes.SMALL;
        r.useEffect(function() {
            if (null != t) {
                if (!1 !== L.includes(t.type)) {
                    var e = URL.createObjectURL(t);
                    d(e);
                    var n = new Image;
                    return n.onload = function() {
                            var e = (0, T.zoomFit)(n.width, n.height);
                            p({
                                width: e.width,
                                height: e.height
                            })
                        }, n.src = e,
                        function() {
                            d(void 0), p({
                                width: 0,
                                height: 0
                            }), URL.revokeObjectURL(e)
                        }
                }
            }
        }, [t]);
        var y = r.useCallback(function(e) {
                var t, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == f ? r.createElement(r.Fragment, null) : r.createElement("img", {
                    src: f,
                    className: i()(b.media, (R(t = {}, b.spoiler, e), R(t, b.imageSmall, m), t)),
                    "aria-hidden": !0,
                    alt: null != n ? n : "",
                    style: o ? E : {}
                })
            }, [f, m, n, E]),
            I = r.useCallback(function() {
                null != f && (0, u.openModal)(function(e) {
                    return r.createElement(u.ModalRoot, P(C({
                        className: b.__invalid_modal
                    }, e), {
                        size: u.ModalSize.DYNAMIC,
                        "aria-label": A.default.Messages.IMAGE
                    }), y(!1, !0))
                })
            }, [f, y]);
        return r.createElement("div", {
            onMouseEnter: l,
            className: i()(b.mediaContainer, R({}, b.imageSmall, m))
        }, r.createElement(u.Clickable, {
            onClick: I,
            className: b.clickableMedia
        }, r.createElement(M, {
            size: s,
            alt: n,
            spoiler: o,
            renderContent: y
        })))
    }

    function w(e) {
        var t = e.file,
            n = e.alt,
            o = e.spoiler,
            a = e.size,
            u = void 0 === a ? g.AttachmentListItemSizes.MEDIUM : a,
            s = e.onMouseEnter,
            l = e.onVideoLoadError,
            c = D(r.useState(), 2),
            f = c[0],
            d = c[1],
            _ = r.useRef(null);
        return r.useEffect(function() {
            if (null != t) {
                var e = URL.createObjectURL(t);
                return d(e),
                    function() {
                        d(void 0), URL.revokeObjectURL(e)
                    }
            }
        }, [t]), r.createElement("div", {
            onMouseEnter: s,
            className: b.mediaContainer
        }, r.createElement(M, {
            size: u,
            alt: n,
            spoiler: o,
            renderContent: function(e) {
                var t;
                return r.createElement(O.default, {
                    ref: _,
                    src: f,
                    className: i()(b.media, (R(t = {}, b.spoiler, e), R(t, b.sizeClip, u === g.AttachmentListItemSizes.CLIP), t)),
                    onError: l,
                    preload: "none",
                    "aria-hidden": !0
                })
            }
        }))
    }

    function k(e) {
        var t, n, o = e.upload,
            a = e.size,
            u = void 0 === a ? g.AttachmentListItemSizes.MEDIUM : a,
            s = e.onMouseEnter,
            l = D(r.useState(!1), 2),
            f = l[0],
            d = l[1],
            _ = u === g.AttachmentListItemSizes.SMALL;
        return o.isImage && o.item.platform === c.UploadPlatform.WEB ? r.createElement(U, {
            file: o.item.file,
            alt: o.description,
            spoiler: o.spoiler,
            size: u,
            onMouseEnter: s
        }) : !f && o.isVideo && o.item.platform === c.UploadPlatform.WEB ? r.createElement(w, {
            file: o.item.file,
            size: u,
            alt: o.description,
            spoiler: o.spoiler,
            onMouseEnter: s,
            onVideoLoadError: function() {
                return d(!0)
            }
        }) : r.createElement("div", {
            onMouseEnter: s,
            className: i()(b.icon, b.__invalid_imageContainer, (R(n = {}, b[null !== (t = o.classification) && void 0 !== t ? t : ""], !0), R(n, b.imageSmall, _), n))
        }, r.createElement("div", {
            className: b.tags
        }, o.spoiler ? r.createElement("span", {
            className: b.altTag
        }, A.default.Messages.SPOILER) : null))
    }

    function G(e) {
        var t = e.channelId,
            n = e.draftType,
            o = e.upload,
            c = e.keyboardModeEnabled,
            E = e.label,
            O = e.size,
            T = void 0 === O ? g.AttachmentListItemSizes.MEDIUM : O,
            N = e.canEdit,
            D = void 0 === N || N,
            L = e.hideFileName,
            M = e.clip,
            U = null != M,
            w = (T = U ? g.AttachmentListItemSizes.CLIP : T) === g.AttachmentListItemSizes.SMALL,
            G = (0, a.useStateFromStores)([_.default], function() {
                var e;
                return null === (e = _.default.getChannel(t)) || void 0 === e ? void 0 : e.guild_id
            }),
            B = function(e) {
                e.stopPropagation(), (0, u.openModal)(function(e) {
                    return r.createElement(l.default, P(C({}, e), {
                        draftType: n,
                        upload: o,
                        channelId: t,
                        onSubmit: function(e) {
                            var r = e.name,
                                i = e.description,
                                a = e.spoiler;
                            s.default.update(t, o.id, n, {
                                filename: r,
                                description: i,
                                spoiler: a
                            })
                        }
                    }))
                })
            };
        return r.createElement(g.default, {
            actions: r.createElement(r.Fragment, null, D ? r.createElement(v.default, {
                className: i()(R({}, b.action, w)),
                tooltip: U ? A.default.Messages.CLIPS_ATTACHMENT_UTILITIES_SPOILER : A.default.Messages.ATTACHMENT_UTILITIES_SPOILER,
                onClick: function() {
                    return s.default.update(t, o.id, n, {
                        spoiler: !o.spoiler
                    })
                }
            }, o.spoiler ? r.createElement(m.default, {
                className: i()(R({}, b.actionBarIcon, w))
            }) : r.createElement(p.default, {
                className: i()(R({}, b.actionBarIcon, w))
            })) : null, D && !U ? r.createElement(v.default, {
                className: i()(R({}, b.action, w)),
                tooltip: A.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
                onClick: B
            }, r.createElement(y.default, {
                className: i()(R({}, b.actionBarIcon, w))
            })) : null, r.createElement(v.default, {
                className: i()(R({}, b.action, w)),
                tooltip: U ? A.default.Messages.CLIPS_ATTACHMENT_UTILITIES_REMOVE : A.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                onClick: function() {
                    return s.default.remove(t, o.id, n)
                },
                dangerous: !0
            }, r.createElement(I.default, {
                className: i()(R({}, b.actionBarIcon, w))
            }))),
            draftType: n,
            id: o.id,
            channelId: t,
            handleEditModal: B,
            keyboardModeEnabled: c,
            size: T,
            className: i()(R({}, b.attachmentItemSmall, w))
        }, r.createElement(k, {
            upload: o,
            size: T
        }), !(void 0 !== L && L) && !U && r.createElement("div", {
            className: b.filenameContainer
        }, r.createElement(u.Text, {
            className: b.filename,
            variant: "text-sm/normal"
        }, null != E ? E : o.filename)), U && r.createElement(r.Fragment, null, r.createElement(f.default, {
            className: b.clipsFooter,
            createdAt: S.default.extractTimestamp(M.id),
            participantIds: M.users,
            applicationId: M.applicationId,
            title: M.name,
            guildId: G
        }), r.createElement(h.TextBadge, {
            color: d.default.BG_BRAND,
            className: b.clipsBadge,
            text: A.default.Messages.CLIP_TAG
        })))
    }
}