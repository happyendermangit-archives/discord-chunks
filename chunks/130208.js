function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AttachmentUpload: function() {
            return T
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("119516"),
        l = n.n(o),
        u = n("481060"),
        d = n("403182"),
        _ = n("465670"),
        c = n("689938"),
        E = n("949672");
    let I = e => {
            let {
                filename: t
            } = e, r = (0, d.classifyFileName)(t), s = n("141881")("../images/file_icons/icon-file-".concat(r, ".svg").replace("../images/file_icons/", "./"));
            return (0, i.jsx)("img", {
                className: E.icon,
                src: s,
                alt: c.default.Messages.IMG_ALT_ATTACHMENT_FILE_TYPE.format({
                    fileType: r
                }),
                title: r
            })
        },
        T = e => {
            let {
                className: t,
                filename: n,
                size: r,
                progress: s,
                onCancelUpload: o,
                onClick: d,
                onContextMenu: T
            } = e, f = 100 === s, S = !f && r > 0;
            return (0, i.jsxs)("div", {
                className: a()(E.attachment, t),
                children: [(0, i.jsx)(I, {
                    filename: n
                }), (0, i.jsxs)("div", {
                    className: E.attachmentInner,
                    children: [(0, i.jsxs)("div", {
                        className: E.filenameWrapper,
                        children: [(0, i.jsx)(u.Clickable, {
                            className: E.filename,
                            onClick: d,
                            onContextMenu: T,
                            children: n
                        }), S ? (0, i.jsx)("div", {
                            className: E.size,
                            children: "— ".concat(l().filesize(r))
                        }) : null]
                    }), (0, i.jsx)("div", {
                        className: E.progressContainer,
                        children: f ? c.default.Messages.ATTACHMENT_PROCESSING : (0, i.jsx)(u.Progress, {
                            className: E.progress,
                            percent: s
                        })
                    })]
                }), f ? null : (0, i.jsx)(u.Clickable, {
                    onClick: o,
                    children: (0, i.jsx)(_.default, {
                        className: E.cancelButton,
                        width: 24,
                        height: 24
                    })
                })]
            })
        };
    t.default = e => {
        let {
            className: t,
            url: n,
            filename: s,
            size: o,
            onClick: d,
            onContextMenu: _,
            renderAdjacentContent: c
        } = e;
        return (0, i.jsxs)(r.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: a()(E.attachment, E.newMosaicStyle, t),
                children: [(0, i.jsx)(I, {
                    filename: s
                }), (0, i.jsxs)("div", {
                    className: E.attachmentInner,
                    children: [(0, i.jsx)("div", {
                        className: E.filenameLinkWrapper,
                        children: (0, i.jsx)(u.Anchor, {
                            className: E.fileNameLink,
                            href: n,
                            onClick: d,
                            onContextMenu: _,
                            children: s
                        })
                    }), (0, i.jsx)("div", {
                        className: E.metadata,
                        children: l().filesize(o)
                    })]
                })]
            }), null != c && c()]
        })
    }
}