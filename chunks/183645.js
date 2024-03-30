function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815");
    t.default = {
        popFirstFile: function(e) {
            r.default.dispatch({
                type: "UPLOAD_ATTACHMENT_POP_FILE",
                channelId: e
            })
        },
        addFiles: function(e) {
            var t = e.files,
                n = e.channelId,
                o = e.showLargeMessageDialog,
                i = e.draftType;
            r.default.dispatch({
                type: "UPLOAD_ATTACHMENT_ADD_FILES",
                channelId: n,
                files: t,
                showLargeMessageDialog: o,
                draftType: i
            })
        },
        addFile: function(e) {
            var t = e.file,
                n = e.channelId,
                o = e.showLargeMessageDialog,
                i = e.draftType;
            r.default.dispatch({
                type: "UPLOAD_ATTACHMENT_ADD_FILES",
                channelId: n,
                files: [t],
                showLargeMessageDialog: o,
                draftType: i
            })
        },
        remove: function(e, t, n) {
            r.default.dispatch({
                type: "UPLOAD_ATTACHMENT_REMOVE_FILE",
                channelId: e,
                id: t,
                draftType: n
            })
        },
        removeFiles: function(e, t, n) {
            r.default.dispatch({
                type: "UPLOAD_ATTACHMENT_REMOVE_FILES",
                channelId: e,
                attachmentIds: t,
                draftType: n
            })
        },
        clearAll: function(e, t) {
            r.default.dispatch({
                type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES",
                channelId: e,
                draftType: t
            })
        },
        update: function(e, t, n, o) {
            var i = o.description,
                a = o.filename,
                u = o.spoiler,
                s = o.thumbnail;
            r.default.dispatch({
                type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
                channelId: e,
                id: t,
                filename: a,
                description: i,
                thumbnail: s,
                spoiler: u,
                draftType: n
            })
        },
        setUploads: function(e) {
            var t = e.uploads,
                n = e.channelId,
                o = e.draftType,
                i = e.resetState;
            r.default.dispatch({
                type: "UPLOAD_ATTACHMENT_SET_UPLOADS",
                channelId: n,
                uploads: i ? t.map(function(e) {
                    return e.resetState()
                }) : t,
                draftType: o
            })
        },
        setFile: function(e) {
            var t = e.file,
                n = e.channelId,
                o = e.id,
                i = e.draftType;
            r.default.dispatch({
                type: "UPLOAD_ATTACHMENT_SET_FILE",
                channelId: n,
                id: o,
                file: t,
                draftType: i
            })
        }
    }
}