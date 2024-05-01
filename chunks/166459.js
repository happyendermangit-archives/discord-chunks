function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140");
    t.default = {
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
                showLargeMessageDialog: r,
                draftType: s
            } = e;
            i.default.dispatch({
                type: "UPLOAD_ATTACHMENT_ADD_FILES",
                channelId: n,
                files: t,
                showLargeMessageDialog: r,
                draftType: s
            })
        },
        addFile(e) {
            let {
                file: t,
                channelId: n,
                showLargeMessageDialog: r,
                draftType: s
            } = e;
            i.default.dispatch({
                type: "UPLOAD_ATTACHMENT_ADD_FILES",
                channelId: n,
                files: [t],
                showLargeMessageDialog: r,
                draftType: s
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
        update(e, t, n, r) {
            let {
                description: s,
                filename: a,
                spoiler: o,
                thumbnail: l
            } = r;
            i.default.dispatch({
                type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
                channelId: e,
                id: t,
                filename: a,
                description: s,
                thumbnail: l,
                spoiler: o,
                draftType: n
            })
        },
        setUploads(e) {
            let {
                uploads: t,
                channelId: n,
                draftType: r,
                resetState: s
            } = e;
            i.default.dispatch({
                type: "UPLOAD_ATTACHMENT_SET_UPLOADS",
                channelId: n,
                uploads: s ? t.map(e => e.resetState()) : t,
                draftType: r
            })
        },
        setFile(e) {
            let {
                file: t,
                channelId: n,
                id: r,
                draftType: s
            } = e;
            i.default.dispatch({
                type: "UPLOAD_ATTACHMENT_SET_FILE",
                channelId: n,
                id: r,
                file: t,
                draftType: s
            })
        }
    }
}