function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AttachmentUpload: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("119516"),
        u = n.n(a),
        s = n("784184"),
        l = n("49657"),
        c = n("247164"),
        f = n("941504"),
        d = n("949672"),
        _ = function(e) {
            var t = e.filename,
                o = (0, l.classifyFileName)(t),
                i = n("141881")("../images/file_icons/icon-file-".concat(o, ".svg").replace("../images/file_icons/", "./"));
            return r.createElement("img", {
                className: d.icon,
                src: i,
                alt: f.default.Messages.IMG_ALT_ATTACHMENT_FILE_TYPE.format({
                    fileType: o
                }),
                title: o
            })
        },
        E = function(e) {
            var t = e.className,
                n = e.filename,
                o = e.size,
                a = e.progress,
                l = e.onCancelUpload,
                E = e.onClick,
                p = e.onContextMenu,
                m = 100 === a,
                y = !m && o > 0;
            return r.createElement("div", {
                className: i()(d.attachment, t)
            }, r.createElement(_, {
                filename: n
            }), r.createElement("div", {
                className: d.attachmentInner
            }, r.createElement("div", {
                className: d.filenameWrapper
            }, r.createElement(s.Clickable, {
                className: d.filename,
                onClick: E,
                onContextMenu: p
            }, n), y ? r.createElement("div", {
                className: d.size
            }, "— ".concat(u().filesize(o))) : null), r.createElement("div", {
                className: d.progressContainer
            }, m ? f.default.Messages.ATTACHMENT_PROCESSING : r.createElement(s.Progress, {
                className: d.progress,
                percent: a
            }))), m ? null : r.createElement(s.Clickable, {
                onClick: l
            }, r.createElement(c.default, {
                className: d.cancelButton,
                width: 24,
                height: 24
            })))
        };
    t.default = function(e) {
        var t = e.className,
            n = e.url,
            o = e.filename,
            a = e.size,
            l = e.onClick,
            c = e.onContextMenu,
            f = e.renderAdjacentContent;
        return r.createElement(r.Fragment, null, r.createElement("div", {
            className: i()(d.attachment, d.newMosaicStyle, t)
        }, r.createElement(_, {
            filename: o
        }), r.createElement("div", {
            className: d.attachmentInner
        }, r.createElement("div", {
            className: d.filenameLinkWrapper
        }, r.createElement(s.Anchor, {
            className: d.fileNameLink,
            href: n,
            onClick: l,
            onContextMenu: c
        }, o)), r.createElement("div", {
            className: d.metadata
        }, u().filesize(a)))), null != f && f())
    }
}