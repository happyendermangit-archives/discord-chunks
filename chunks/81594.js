function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("913144"),
        l = {
            popFirstFile(e) {
                i.default.dispatch({
                    type: "UPLOAD_ATTACHMENT_POP_FILE",
                    channelId: e
                })
            },
            addFiles(e) {
                let {
                    files: t,
                    channelId: n,
                    showLargeMessageDialog: l,
                    draftType: a
                } = e;
                i.default.dispatch({
                    type: "UPLOAD_ATTACHMENT_ADD_FILES",
                    channelId: n,
                    files: t,
                    showLargeMessageDialog: l,
                    draftType: a
                })
            },
            addFile(e) {
                let {
                    file: t,
                    channelId: n,
                    showLargeMessageDialog: l,
                    draftType: a
                } = e;
                i.default.dispatch({
                    type: "UPLOAD_ATTACHMENT_ADD_FILES",
                    channelId: n,
                    files: [t],
                    showLargeMessageDialog: l,
                    draftType: a
                })
            },
            remove(e, t, n) {
                i.default.dispatch({
                    type: "UPLOAD_ATTACHMENT_REMOVE_FILE",
                    channelId: e,
                    id: t,
                    draftType: n
                })
            },
            removeFiles(e, t, n) {
                i.default.dispatch({
                    type: "UPLOAD_ATTACHMENT_REMOVE_FILES",
                    channelId: e,
                    attachmentIds: t,
                    draftType: n
                })
            },
            clearAll(e, t) {
                i.default.dispatch({
                    type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES",
                    channelId: e,
                    draftType: t
                })
            },
            update(e, t, n, l) {
                let {
                    description: a,
                    filename: o,
                    spoiler: s,
                    thumbnail: r
                } = l;
                i.default.dispatch({
                    type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
                    channelId: e,
                    id: t,
                    filename: o,
                    description: a,
                    thumbnail: r,
                    spoiler: s,
                    draftType: n
                })
            },
            setUploads(e) {
                let {
                    uploads: t,
                    channelId: n,
                    draftType: l,
                    resetState: a
                } = e;
                i.default.dispatch({
                    type: "UPLOAD_ATTACHMENT_SET_UPLOADS",
                    channelId: n,
                    uploads: a ? t.map(e => e.resetState()) : t,
                    draftType: l
                })
            },
            setFile(e) {
                let {
                    file: t,
                    channelId: n,
                    id: l,
                    draftType: a
                } = e;
                i.default.dispatch({
                    type: "UPLOAD_ATTACHMENT_SET_FILE",
                    channelId: n,
                    id: l,
                    file: t,
                    draftType: a
                })
            }
        }
}