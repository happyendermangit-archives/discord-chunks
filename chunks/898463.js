function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UploadIcon: function() {
            return P
        },
        default: function() {
            return U
        }
    }), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("166459"),
        d = n("95152"),
        _ = n("476326"),
        c = n("543651"),
        E = n("377171"),
        I = n("592125"),
        T = n("68588"),
        f = n("794358"),
        S = n("880008"),
        h = n("185403"),
        A = n("740727"),
        m = n("26290"),
        N = n("810090"),
        p = n("956664"),
        O = n("709054"),
        R = n("273031"),
        C = n("859235"),
        g = n("689938"),
        L = n("670951");
    let D = ["image/jpeg", "image/png", "image/webp", "image/gif", "video/quicktime", "video/mp4"];

    function v(e) {
        let {
            alt: t,
            spoiler: n,
            renderContent: s,
            size: a
        } = e, [o, l] = r.useState(!1);
        return (0, i.jsx)(T.ObscuredDisplayContext.Provider, {
            value: !n,
            children: (0, i.jsx)(T.default, {
                containerStyles: a === C.AttachmentListItemSizes.CLIP ? {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    boxShadow: "none"
                } : void 0,
                type: T.default.Types.ATTACHMENT,
                onReveal: () => l(!0),
                className: L.spoilerContainer,
                children: e => (0, i.jsxs)("div", {
                    className: L.spoilerWrapper,
                    children: [s(e), (0, i.jsxs)("div", {
                        className: L.tags,
                        children: [null != t && "" !== t ? (0, i.jsx)("span", {
                            className: L.altTag,
                            children: g.default.Messages.IMAGE_ALT
                        }) : null, o && n ? (0, i.jsx)("span", {
                            className: L.altTag,
                            children: g.default.Messages.SPOILER
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
            spoiler: s,
            size: o = C.AttachmentListItemSizes.MEDIUM,
            onMouseEnter: u
        } = e, [d, _] = r.useState(), [c, E] = r.useState({
            width: 0,
            height: 0
        }), I = o === C.AttachmentListItemSizes.SMALL;
        r.useEffect(() => {
            if (null == t || !1 === D.includes(t.type)) return;
            let e = URL.createObjectURL(t);
            _(e);
            let n = new Image;
            return n.onload = () => {
                let {
                    width: e,
                    height: t
                } = (0, p.zoomFit)(n.width, n.height);
                E({
                    width: e,
                    height: t
                })
            }, n.src = e, () => {
                _(void 0), E({
                    width: 0,
                    height: 0
                }), URL.revokeObjectURL(e)
            }
        }, [t]);
        let T = r.useCallback(function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == d ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)("img", {
                    src: d,
                    className: a()(L.media, {
                        [L.spoiler]: e,
                        [L.imageSmall]: I
                    }),
                    "aria-hidden": !0,
                    alt: null != n ? n : "",
                    style: t ? c : {}
                })
            }, [d, I, n, c]),
            f = r.useCallback(() => {
                null != d && (0, l.openModal)(e => (0, i.jsx)(l.ModalRoot, {
                    className: L.__invalid_modal,
                    ...e,
                    size: l.ModalSize.DYNAMIC,
                    "aria-label": g.default.Messages.IMAGE,
                    children: T(!1, !0)
                }))
            }, [d, T]);
        return (0, i.jsx)("div", {
            onMouseEnter: u,
            className: a()(L.mediaContainer, {
                [L.imageSmall]: I
            }),
            children: (0, i.jsx)(l.Clickable, {
                onClick: f,
                className: L.clickableMedia,
                children: (0, i.jsx)(v, {
                    size: o,
                    alt: n,
                    spoiler: s,
                    renderContent: T
                })
            })
        })
    }

    function y(e) {
        let {
            file: t,
            alt: n,
            spoiler: s,
            size: o = C.AttachmentListItemSizes.MEDIUM,
            onMouseEnter: l,
            onVideoLoadError: u
        } = e, [d, _] = r.useState(), c = r.useRef(null);
        return r.useEffect(() => {
            if (null == t) return;
            let e = URL.createObjectURL(t);
            return _(e), () => {
                _(void 0), URL.revokeObjectURL(e)
            }
        }, [t]), (0, i.jsx)("div", {
            onMouseEnter: l,
            className: L.mediaContainer,
            children: (0, i.jsx)(v, {
                size: o,
                alt: n,
                spoiler: s,
                renderContent: e => (0, i.jsx)(N.default, {
                    ref: c,
                    src: d,
                    className: a()(L.media, {
                        [L.spoiler]: e,
                        [L.sizeClip]: o === C.AttachmentListItemSizes.CLIP
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
            size: s = C.AttachmentListItemSizes.MEDIUM,
            onMouseEnter: o
        } = e, [l, u] = r.useState(!1), d = s === C.AttachmentListItemSizes.SMALL;
        return n.isImage && n.item.platform === _.UploadPlatform.WEB ? (0, i.jsx)(M, {
            file: n.item.file,
            alt: n.description,
            spoiler: n.spoiler,
            size: s,
            onMouseEnter: o
        }) : !l && n.isVideo && n.item.platform === _.UploadPlatform.WEB ? (0, i.jsx)(y, {
            file: n.item.file,
            size: s,
            alt: n.description,
            spoiler: n.spoiler,
            onMouseEnter: o,
            onVideoLoadError: () => u(!0)
        }) : (0, i.jsx)("div", {
            onMouseEnter: o,
            className: a()(L.icon, L.__invalid_imageContainer, {
                [L[null !== (t = n.classification) && void 0 !== t ? t : ""]]: !0,
                [L.imageSmall]: d
            }),
            children: (0, i.jsx)("div", {
                className: L.tags,
                children: n.spoiler ? (0, i.jsx)("span", {
                    className: L.altTag,
                    children: g.default.Messages.SPOILER
                }) : null
            })
        })
    }

    function U(e) {
        let {
            channelId: t,
            draftType: n,
            upload: s,
            keyboardModeEnabled: _,
            label: T,
            size: N = C.AttachmentListItemSizes.MEDIUM,
            canEdit: p = !0,
            hideFileName: D = !1,
            clip: v
        } = e, M = null != v, y = (N = M ? C.AttachmentListItemSizes.CLIP : N) === C.AttachmentListItemSizes.SMALL, U = (0, o.useStateFromStores)([I.default], () => {
            var e;
            return null === (e = I.default.getChannel(t)) || void 0 === e ? void 0 : e.guild_id
        }), b = e => {
            e.stopPropagation(), (0, l.openModal)(e => (0, i.jsx)(d.default, {
                ...e,
                draftType: n,
                upload: s,
                channelId: t,
                onSubmit: e => {
                    let {
                        name: i,
                        description: r,
                        spoiler: a
                    } = e;
                    u.default.update(t, s.id, n, {
                        filename: i,
                        description: r,
                        spoiler: a
                    })
                }
            }))
        };
        return (0, i.jsxs)(C.default, {
            actions: (0, i.jsxs)(r.Fragment, {
                children: [p ? (0, i.jsx)(R.default, {
                    className: a()({
                        [L.action]: y
                    }),
                    tooltip: M ? g.default.Messages.CLIPS_ATTACHMENT_UTILITIES_SPOILER : g.default.Messages.ATTACHMENT_UTILITIES_SPOILER,
                    onClick: () => u.default.update(t, s.id, n, {
                        spoiler: !s.spoiler
                    }),
                    children: s.spoiler ? (0, i.jsx)(S.default, {
                        className: a()({
                            [L.actionBarIcon]: y
                        })
                    }) : (0, i.jsx)(f.default, {
                        className: a()({
                            [L.actionBarIcon]: y
                        })
                    })
                }) : null, p && !M ? (0, i.jsx)(R.default, {
                    className: a()({
                        [L.action]: y
                    }),
                    tooltip: g.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
                    onClick: b,
                    children: (0, i.jsx)(h.default, {
                        className: a()({
                            [L.actionBarIcon]: y
                        })
                    })
                }) : null, (0, i.jsx)(R.default, {
                    className: a()({
                        [L.action]: y
                    }),
                    tooltip: M ? g.default.Messages.CLIPS_ATTACHMENT_UTILITIES_REMOVE : g.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                    onClick: () => u.default.remove(t, s.id, n),
                    dangerous: !0,
                    children: (0, i.jsx)(A.default, {
                        className: a()({
                            [L.actionBarIcon]: y
                        })
                    })
                })]
            }),
            draftType: n,
            id: s.id,
            channelId: t,
            handleEditModal: b,
            keyboardModeEnabled: _,
            size: N,
            className: a()({
                [L.attachmentItemSmall]: y
            }),
            children: [(0, i.jsx)(P, {
                upload: s,
                size: N
            }), !D && !M && (0, i.jsx)("div", {
                className: L.filenameContainer,
                children: (0, i.jsx)(l.Text, {
                    className: L.filename,
                    variant: "text-sm/normal",
                    children: null != T ? T : s.filename
                })
            }), M && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(c.default, {
                    className: L.clipsFooter,
                    createdAt: O.default.extractTimestamp(v.id),
                    participantIds: v.users,
                    applicationId: v.applicationId,
                    title: v.name,
                    guildId: U
                }), (0, i.jsx)(m.TextBadge, {
                    color: E.default.BG_BRAND,
                    className: L.clipsBadge,
                    text: g.default.Messages.CLIP_TAG
                })]
            })]
        })
    }
}