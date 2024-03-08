function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AttachmentUpload: function() {
            return h
        },
        default: function() {
            return x
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("477850"),
        o = n.n(r),
        u = n("77078"),
        d = n("254490"),
        c = n("945330"),
        f = n("782340"),
        p = n("978337");
    let m = e => {
            let {
                filename: t
            } = e, l = (0, d.classifyFileName)(t), a = n("777483")("../images/file_icons/icon-file-".concat(l, ".svg").replace("../images/file_icons/", "./"));
            return (0, i.jsx)("img", {
                className: p.icon,
                src: a,
                alt: f.default.Messages.IMG_ALT_ATTACHMENT_FILE_TYPE.format({
                    fileType: l
                }),
                title: l
            })
        },
        h = e => {
            let {
                className: t,
                filename: n,
                size: l,
                progress: a,
                onCancelUpload: r,
                onClick: d,
                onContextMenu: h
            } = e, x = 100 === a, E = !x && l > 0;
            return (0, i.jsxs)("div", {
                className: s(p.attachment, t),
                children: [(0, i.jsx)(m, {
                    filename: n
                }), (0, i.jsxs)("div", {
                    className: p.attachmentInner,
                    children: [(0, i.jsxs)("div", {
                        className: p.filenameWrapper,
                        children: [(0, i.jsx)(u.Clickable, {
                            className: p.filename,
                            onClick: d,
                            onContextMenu: h,
                            children: n
                        }), E ? (0, i.jsx)("div", {
                            className: p.size,
                            children: "— ".concat(o.filesize(l))
                        }) : null]
                    }), (0, i.jsx)("div", {
                        className: p.progressContainer,
                        children: x ? f.default.Messages.ATTACHMENT_PROCESSING : (0, i.jsx)(u.Progress, {
                            className: p.progress,
                            percent: a
                        })
                    })]
                }), x ? null : (0, i.jsx)(u.Clickable, {
                    onClick: r,
                    children: (0, i.jsx)(c.default, {
                        className: p.cancelButton,
                        width: 24,
                        height: 24
                    })
                })]
            })
        };
    var x = e => {
        let {
            className: t,
            url: n,
            filename: a,
            size: r,
            onClick: d,
            onContextMenu: c,
            renderAdjacentContent: f
        } = e;
        return (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: s(p.attachment, p.newMosaicStyle, t),
                children: [(0, i.jsx)(m, {
                    filename: a
                }), (0, i.jsxs)("div", {
                    className: p.attachmentInner,
                    children: [(0, i.jsx)("div", {
                        className: p.filenameLinkWrapper,
                        children: (0, i.jsx)(u.Anchor, {
                            className: p.fileNameLink,
                            href: n,
                            onClick: d,
                            onContextMenu: c,
                            children: a
                        })
                    }), (0, i.jsx)("div", {
                        className: p.metadata,
                        children: o.filesize(r)
                    })]
                })]
            }), null != f && f()]
        })
    }
}