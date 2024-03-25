function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UploadIcon: function() {
            return L
        },
        default: function() {
            return P
        }
    }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("81594"),
        d = n("467339"),
        c = n("966724"),
        f = n("411723"),
        p = n("20606"),
        m = n("42203"),
        h = n("505684"),
        x = n("462579"),
        E = n("867544"),
        y = n("987772"),
        g = n("228220"),
        S = n("956089"),
        C = n("58608"),
        _ = n("103603"),
        T = n("299039"),
        I = n("9560"),
        v = n("271972"),
        A = n("782340"),
        N = n("483099");
    let R = ["image/jpeg", "image/png", "image/webp", "image/gif", "video/quicktime", "video/mp4"];

    function O(e) {
        let {
            alt: t,
            spoiler: n,
            renderContent: a,
            size: s
        } = e, [r, o] = l.useState(!1);
        return (0, i.jsx)(h.ObscuredDisplayContext.Provider, {
            value: !n,
            children: (0, i.jsx)(h.default, {
                containerStyles: s === v.AttachmentListItemSizes.CLIP ? {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    boxShadow: "none"
                } : void 0,
                type: h.default.Types.ATTACHMENT,
                onReveal: () => o(!0),
                className: N.spoilerContainer,
                children: e => (0, i.jsxs)("div", {
                    className: N.spoilerWrapper,
                    children: [a(e), (0, i.jsxs)("div", {
                        className: N.tags,
                        children: [null != t && "" !== t ? (0, i.jsx)("span", {
                            className: N.altTag,
                            children: A.default.Messages.IMAGE_ALT
                        }) : null, r && n ? (0, i.jsx)("span", {
                            className: N.altTag,
                            children: A.default.Messages.SPOILER
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
            size: r = v.AttachmentListItemSizes.MEDIUM,
            onMouseEnter: u
        } = e, [d, c] = l.useState(), [f, p] = l.useState({
            width: 0,
            height: 0
        }), m = r === v.AttachmentListItemSizes.SMALL;
        l.useEffect(() => {
            if (null == t || !1 === R.includes(t.type)) return;
            let e = URL.createObjectURL(t);
            c(e);
            let n = new Image;
            return n.onload = () => {
                let {
                    width: e,
                    height: t
                } = (0, _.zoomFit)(n.width, n.height);
                p({
                    width: e,
                    height: t
                })
            }, n.src = e, () => {
                c(void 0), p({
                    width: 0,
                    height: 0
                }), URL.revokeObjectURL(e)
            }
        }, [t]);
        let h = l.useCallback(function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == d ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)("img", {
                    src: d,
                    className: s(N.media, {
                        [N.spoiler]: e,
                        [N.imageSmall]: m
                    }),
                    "aria-hidden": !0,
                    alt: null != n ? n : "",
                    style: t ? f : {}
                })
            }, [d, m, n, f]),
            x = l.useCallback(() => {
                null != d && (0, o.openModal)(e => (0, i.jsx)(o.ModalRoot, {
                    className: N.modal,
                    ...e,
                    size: o.ModalSize.DYNAMIC,
                    "aria-label": A.default.Messages.IMAGE,
                    children: h(!1, !0)
                }))
            }, [d, h]);
        return (0, i.jsx)("div", {
            onMouseEnter: u,
            className: s(N.mediaContainer, {
                [N.imageSmall]: m
            }),
            children: (0, i.jsx)(o.Clickable, {
                onClick: x,
                className: N.clickableMedia,
                children: (0, i.jsx)(O, {
                    size: r,
                    alt: n,
                    spoiler: a,
                    renderContent: h
                })
            })
        })
    }

    function k(e) {
        let {
            file: t,
            alt: n,
            spoiler: a,
            size: r = v.AttachmentListItemSizes.MEDIUM,
            onMouseEnter: o,
            onVideoLoadError: u
        } = e, [d, c] = l.useState(), f = l.useRef(null);
        return l.useEffect(() => {
            if (null == t) return;
            let e = URL.createObjectURL(t);
            return c(e), () => {
                c(void 0), URL.revokeObjectURL(e)
            }
        }, [t]), (0, i.jsx)("div", {
            onMouseEnter: o,
            className: N.mediaContainer,
            children: (0, i.jsx)(O, {
                size: r,
                alt: n,
                spoiler: a,
                renderContent: e => (0, i.jsx)(C.default, {
                    ref: f,
                    src: d,
                    className: s(N.media, {
                        [N.spoiler]: e,
                        [N.sizeClip]: r === v.AttachmentListItemSizes.CLIP
                    }),
                    onError: u,
                    preload: "none",
                    "aria-hidden": !0
                })
            })
        })
    }

    function L(e) {
        var t;
        let {
            upload: n,
            size: a = v.AttachmentListItemSizes.MEDIUM,
            onMouseEnter: r
        } = e, [o, u] = l.useState(!1), d = a === v.AttachmentListItemSizes.SMALL;
        return n.isImage && n.item.platform === c.UploadPlatform.WEB ? (0, i.jsx)(M, {
            file: n.item.file,
            alt: n.description,
            spoiler: n.spoiler,
            size: a,
            onMouseEnter: r
        }) : !o && n.isVideo && n.item.platform === c.UploadPlatform.WEB ? (0, i.jsx)(k, {
            file: n.item.file,
            size: a,
            alt: n.description,
            spoiler: n.spoiler,
            onMouseEnter: r,
            onVideoLoadError: () => u(!0)
        }) : (0, i.jsx)("div", {
            onMouseEnter: r,
            className: s(N.icon, N.imageContainer, {
                [N[null !== (t = n.classification) && void 0 !== t ? t : ""]]: !0,
                [N.imageSmall]: d
            }),
            children: (0, i.jsx)("div", {
                className: N.tags,
                children: n.spoiler ? (0, i.jsx)("span", {
                    className: N.altTag,
                    children: A.default.Messages.SPOILER
                }) : null
            })
        })
    }

    function P(e) {
        let {
            channelId: t,
            draftType: n,
            upload: a,
            keyboardModeEnabled: c,
            label: h,
            size: C = v.AttachmentListItemSizes.MEDIUM,
            canEdit: _ = !0,
            hideFileName: R = !1,
            clip: O
        } = e, M = null != O;
        C = M ? v.AttachmentListItemSizes.CLIP : C;
        let k = C === v.AttachmentListItemSizes.SMALL,
            P = (0, r.useStateFromStores)([m.default], () => {
                var e;
                return null === (e = m.default.getChannel(t)) || void 0 === e ? void 0 : e.guild_id
            }),
            b = e => {
                e.stopPropagation(), (0, o.openModal)(e => (0, i.jsx)(d.default, {
                    ...e,
                    draftType: n,
                    upload: a,
                    channelId: t,
                    onSubmit: e => {
                        let {
                            name: i,
                            description: l,
                            spoiler: s
                        } = e;
                        u.default.update(t, a.id, n, {
                            filename: i,
                            description: l,
                            spoiler: s
                        })
                    }
                }))
            };
        return (0, i.jsxs)(v.default, {
            actions: (0, i.jsxs)(l.Fragment, {
                children: [_ ? (0, i.jsx)(I.default, {
                    className: s({
                        [N.action]: k
                    }),
                    tooltip: M ? A.default.Messages.CLIPS_ATTACHMENT_UTILITIES_SPOILER : A.default.Messages.ATTACHMENT_UTILITIES_SPOILER,
                    onClick: () => u.default.update(t, a.id, n, {
                        spoiler: !a.spoiler
                    }),
                    children: a.spoiler ? (0, i.jsx)(E.default, {
                        className: s({
                            [N.actionBarIcon]: k
                        })
                    }) : (0, i.jsx)(x.default, {
                        className: s({
                            [N.actionBarIcon]: k
                        })
                    })
                }) : null, _ && !M ? (0, i.jsx)(I.default, {
                    className: s({
                        [N.action]: k
                    }),
                    tooltip: A.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
                    onClick: b,
                    children: (0, i.jsx)(y.default, {
                        className: s({
                            [N.actionBarIcon]: k
                        })
                    })
                }) : null, (0, i.jsx)(I.default, {
                    className: s({
                        [N.action]: k
                    }),
                    tooltip: M ? A.default.Messages.CLIPS_ATTACHMENT_UTILITIES_REMOVE : A.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                    onClick: () => u.default.remove(t, a.id, n),
                    dangerous: !0,
                    children: (0, i.jsx)(g.default, {
                        className: s({
                            [N.actionBarIcon]: k
                        })
                    })
                })]
            }),
            draftType: n,
            id: a.id,
            channelId: t,
            handleEditModal: b,
            keyboardModeEnabled: c,
            size: C,
            className: s({
                [N.attachmentItemSmall]: k
            }),
            children: [(0, i.jsx)(L, {
                upload: a,
                size: C
            }), !R && !M && (0, i.jsx)("div", {
                className: N.filenameContainer,
                children: (0, i.jsx)(o.Text, {
                    className: N.filename,
                    variant: "text-sm/normal",
                    children: null != h ? h : a.filename
                })
            }), M && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(f.default, {
                    className: N.clipsFooter,
                    createdAt: T.default.extractTimestamp(O.id),
                    participantIds: O.users,
                    applicationId: O.applicationId,
                    title: O.name,
                    guildId: P
                }), (0, i.jsx)(S.TextBadge, {
                    color: p.default.BG_BRAND,
                    className: N.clipsBadge,
                    text: A.default.Messages.CLIP_TAG
                })]
            })]
        })
    }
}