function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UploadIcon: function() {
            return P
        },
        default: function() {
            return b
        }
    }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("81594"),
        d = n("467339"),
        c = n("966724"),
        f = n("411723"),
        m = n("20606"),
        p = n("42203"),
        h = n("505684"),
        E = n("462579"),
        g = n("867544"),
        C = n("987772"),
        S = n("228220"),
        T = n("956089"),
        I = n("58608"),
        v = n("103603"),
        _ = n("299039"),
        N = n("9560"),
        A = n("271972"),
        x = n("782340"),
        y = n("483099");
    let O = ["image/jpeg", "image/png", "image/webp", "image/gif", "video/quicktime", "video/mp4"];

    function R(e) {
        let {
            alt: t,
            spoiler: n,
            renderContent: a,
            size: s
        } = e, [r, o] = i.useState(!1);
        return (0, l.jsx)(h.ObscuredDisplayContext.Provider, {
            value: !n,
            children: (0, l.jsx)(h.default, {
                containerStyles: s === A.AttachmentListItemSizes.CLIP ? {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    boxShadow: "none"
                } : void 0,
                type: h.default.Types.ATTACHMENT,
                onReveal: () => o(!0),
                className: y.spoilerContainer,
                children: e => (0, l.jsxs)("div", {
                    className: y.spoilerWrapper,
                    children: [a(e), (0, l.jsxs)("div", {
                        className: y.tags,
                        children: [null != t && "" !== t ? (0, l.jsx)("span", {
                            className: y.altTag,
                            children: x.default.Messages.IMAGE_ALT
                        }) : null, r && n ? (0, l.jsx)("span", {
                            className: y.altTag,
                            children: x.default.Messages.SPOILER
                        }) : null]
                    })]
                })
            })
        })
    }

    function M(e) {
        let {
            file: t,
            alt: n,
            spoiler: a,
            size: r = A.AttachmentListItemSizes.MEDIUM,
            onMouseEnter: u
        } = e, [d, c] = i.useState(), [f, m] = i.useState({
            width: 0,
            height: 0
        }), p = r === A.AttachmentListItemSizes.SMALL;
        i.useEffect(() => {
            if (null == t || !1 === O.includes(t.type)) return;
            let e = URL.createObjectURL(t);
            c(e);
            let n = new Image;
            return n.onload = () => {
                let {
                    width: e,
                    height: t
                } = (0, v.zoomFit)(n.width, n.height);
                m({
                    width: e,
                    height: t
                })
            }, n.src = e, () => {
                c(void 0), m({
                    width: 0,
                    height: 0
                }), URL.revokeObjectURL(e)
            }
        }, [t]);
        let h = i.useCallback(function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == d ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsx)("img", {
                    src: d,
                    className: s(y.media, {
                        [y.spoiler]: e,
                        [y.imageSmall]: p
                    }),
                    "aria-hidden": !0,
                    alt: null != n ? n : "",
                    style: t ? f : {}
                })
            }, [d, p, n, f]),
            E = i.useCallback(() => {
                null != d && (0, o.openModal)(e => (0, l.jsx)(o.ModalRoot, {
                    className: y.modal,
                    ...e,
                    size: o.ModalSize.DYNAMIC,
                    "aria-label": x.default.Messages.IMAGE,
                    children: h(!1, !0)
                }))
            }, [d, h]);
        return (0, l.jsx)("div", {
            onMouseEnter: u,
            className: s(y.mediaContainer, {
                [y.imageSmall]: p
            }),
            children: (0, l.jsx)(o.Clickable, {
                onClick: E,
                className: y.clickableMedia,
                children: (0, l.jsx)(R, {
                    size: r,
                    alt: n,
                    spoiler: a,
                    renderContent: h
                })
            })
        })
    }

    function L(e) {
        let {
            file: t,
            alt: n,
            spoiler: a,
            size: r = A.AttachmentListItemSizes.MEDIUM,
            onMouseEnter: o,
            onVideoLoadError: u
        } = e, [d, c] = i.useState(), f = i.useRef(null);
        return i.useEffect(() => {
            if (null == t) return;
            let e = URL.createObjectURL(t);
            return c(e), () => {
                c(void 0), URL.revokeObjectURL(e)
            }
        }, [t]), (0, l.jsx)("div", {
            onMouseEnter: o,
            className: y.mediaContainer,
            children: (0, l.jsx)(R, {
                size: r,
                alt: n,
                spoiler: a,
                renderContent: e => (0, l.jsx)(I.default, {
                    ref: f,
                    src: d,
                    className: s(y.media, {
                        [y.spoiler]: e,
                        [y.sizeClip]: r === A.AttachmentListItemSizes.CLIP
                    }),
                    onError: u,
                    preload: "none",
                    "aria-hidden": !0
                })
            })
        })
    }

    function P(e) {
        var t;
        let {
            upload: n,
            size: a = A.AttachmentListItemSizes.MEDIUM,
            onMouseEnter: r
        } = e, [o, u] = i.useState(!1), d = a === A.AttachmentListItemSizes.SMALL;
        return n.isImage && n.item.platform === c.UploadPlatform.WEB ? (0, l.jsx)(M, {
            file: n.item.file,
            alt: n.description,
            spoiler: n.spoiler,
            size: a,
            onMouseEnter: r
        }) : !o && n.isVideo && n.item.platform === c.UploadPlatform.WEB ? (0, l.jsx)(L, {
            file: n.item.file,
            size: a,
            alt: n.description,
            spoiler: n.spoiler,
            onMouseEnter: r,
            onVideoLoadError: () => u(!0)
        }) : (0, l.jsx)("div", {
            onMouseEnter: r,
            className: s(y.icon, y.imageContainer, {
                [y[null !== (t = n.classification) && void 0 !== t ? t : ""]]: !0,
                [y.imageSmall]: d
            }),
            children: (0, l.jsx)("div", {
                className: y.tags,
                children: n.spoiler ? (0, l.jsx)("span", {
                    className: y.altTag,
                    children: x.default.Messages.SPOILER
                }) : null
            })
        })
    }

    function b(e) {
        let {
            channelId: t,
            draftType: n,
            upload: a,
            keyboardModeEnabled: c,
            label: h,
            size: I = A.AttachmentListItemSizes.MEDIUM,
            canEdit: v = !0,
            hideFileName: O = !1,
            clip: R
        } = e, M = null != R;
        I = M ? A.AttachmentListItemSizes.CLIP : I;
        let L = I === A.AttachmentListItemSizes.SMALL,
            b = (0, r.useStateFromStores)([p.default], () => {
                var e;
                return null === (e = p.default.getChannel(t)) || void 0 === e ? void 0 : e.guild_id
            }),
            j = e => {
                e.stopPropagation(), (0, o.openModal)(e => (0, l.jsx)(d.default, {
                    ...e,
                    draftType: n,
                    upload: a,
                    channelId: t,
                    onSubmit: e => {
                        let {
                            name: l,
                            description: i,
                            spoiler: s
                        } = e;
                        u.default.update(t, a.id, n, {
                            filename: l,
                            description: i,
                            spoiler: s
                        })
                    }
                }))
            };
        return (0, l.jsxs)(A.default, {
            actions: (0, l.jsxs)(i.Fragment, {
                children: [v ? (0, l.jsx)(N.default, {
                    className: s({
                        [y.action]: L
                    }),
                    tooltip: M ? x.default.Messages.CLIPS_ATTACHMENT_UTILITIES_SPOILER : x.default.Messages.ATTACHMENT_UTILITIES_SPOILER,
                    onClick: () => u.default.update(t, a.id, n, {
                        spoiler: !a.spoiler
                    }),
                    children: a.spoiler ? (0, l.jsx)(g.default, {
                        className: s({
                            [y.actionBarIcon]: L
                        })
                    }) : (0, l.jsx)(E.default, {
                        className: s({
                            [y.actionBarIcon]: L
                        })
                    })
                }) : null, v && !M ? (0, l.jsx)(N.default, {
                    className: s({
                        [y.action]: L
                    }),
                    tooltip: x.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
                    onClick: j,
                    children: (0, l.jsx)(C.default, {
                        className: s({
                            [y.actionBarIcon]: L
                        })
                    })
                }) : null, (0, l.jsx)(N.default, {
                    className: s({
                        [y.action]: L
                    }),
                    tooltip: M ? x.default.Messages.CLIPS_ATTACHMENT_UTILITIES_REMOVE : x.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                    onClick: () => u.default.remove(t, a.id, n),
                    dangerous: !0,
                    children: (0, l.jsx)(S.default, {
                        className: s({
                            [y.actionBarIcon]: L
                        })
                    })
                })]
            }),
            draftType: n,
            id: a.id,
            channelId: t,
            handleEditModal: j,
            keyboardModeEnabled: c,
            size: I,
            className: s({
                [y.attachmentItemSmall]: L
            }),
            children: [(0, l.jsx)(P, {
                upload: a,
                size: I
            }), !O && !M && (0, l.jsx)("div", {
                className: y.filenameContainer,
                children: (0, l.jsx)(o.Text, {
                    className: y.filename,
                    variant: "text-sm/normal",
                    children: null != h ? h : a.filename
                })
            }), M && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(f.default, {
                    className: y.clipsFooter,
                    createdAt: _.default.extractTimestamp(R.id),
                    participantIds: R.users,
                    applicationId: R.applicationId,
                    title: R.name,
                    guildId: b
                }), (0, l.jsx)(T.TextBadge, {
                    color: m.default.BG_BRAND,
                    className: y.clipsBadge,
                    text: x.default.Messages.CLIP_TAG
                })]
            })]
        })
    }
}