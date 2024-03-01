function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007"), n("424973");
    var s = n("917351"),
        i = n.n(s),
        r = n("446674"),
        a = n("913144"),
        o = n("404118"),
        d = n("282928"),
        u = n("402752"),
        l = n("474643"),
        f = n("49111"),
        _ = n("782340");
    let c = new Map,
        g = [];

    function m(e, t) {
        var n, s;
        return null !== (s = null === (n = h(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== s ? s : g
    }

    function h(e) {
        var t;
        return null !== (t = c.get(e)) && void 0 !== t ? t : new Map
    }

    function v(e, t, n) {
        let s = h(e);
        s.set(t, n), c.set(e, s)
    }
    class E extends r.default.Store {
        getFirstUpload(e, t) {
            let n = m(e, t);
            return n.length > 0 ? n[0] : null
        }
        hasAdditionalUploads(e, t) {
            var n;
            return (null !== (n = m(e, t).length) && void 0 !== n ? n : 0) > 1
        }
        getUploads(e, t) {
            return m(e, t)
        }
        getUploadCount(e, t) {
            var n;
            return null !== (n = m(e, t).length) && void 0 !== n ? n : 0
        }
        getUpload(e, t, n) {
            return m(e, n).find(e => e.id === t)
        }
        findUpload(e, t, n) {
            return m(e, t).find(n)
        }
    }
    E.displayName = "UploadAttachmentStore";
    var p = new E(a.default, {
        UPLOAD_ATTACHMENT_POP_FILE: function(e) {
            let {
                channelId: t
            } = e, n = [...m(t, l.DraftType.ChannelMessage)];
            n.shift(), v(t, l.DraftType.ChannelMessage, n)
        },
        UPLOAD_ATTACHMENT_ADD_FILES: e => {
            let {
                files: t,
                channelId: n,
                showLargeMessageDialog: s,
                draftType: r
            } = e, a = [...m(n, r)];
            if (a.length + t.length > f.MAX_UPLOAD_COUNT && r !== l.DraftType.SlashCommand && r !== l.DraftType.ApplicationLauncherCommand) {
                o.default.show({
                    title: _.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                    body: _.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                        limit: f.MAX_UPLOAD_COUNT
                    })
                });
                return
            }
            i.forEach(t, e => {
                let t = new d.CloudUpload(e, n, s, a.length);
                t.upload(), a.push(t)
            }), v(n, r, a)
        },
        UPLOAD_ATTACHMENT_UPDATE_FILE: function(e) {
            let {
                channelId: t,
                id: n,
                filename: s,
                description: i,
                spoiler: r,
                thumbnail: a,
                draftType: o
            } = e, d = [...m(t, o)], u = d.map(e => (e.id === n && (void 0 !== s && (e.filename = s), void 0 !== r && (e.spoiler = r), void 0 !== i && (e.description = i), void 0 !== a && (e.isThumbnail = a)), e));
            v(t, o, u)
        },
        UPLOAD_ATTACHMENT_REMOVE_FILE: function(e) {
            let {
                channelId: t,
                id: n,
                draftType: s
            } = e, i = [...m(t, s)], r = i.findIndex(e => (0, u.doesImageMatchUpload)({
                uri: n,
                filename: n
            }, e));
            if (r > -1) {
                let e = i.splice(r, 1)[0];
                e.cancel(), v(t, s, i)
            }
        },
        UPLOAD_ATTACHMENT_REMOVE_FILES: function(e) {
            let {
                channelId: t,
                attachmentIds: n,
                draftType: s
            } = e, i = [...m(t, s)];
            n.forEach(e => {
                let t = i.findIndex(t => e === t.id);
                if (t > -1) {
                    let e = i.splice(t, 1)[0];
                    e.cancel()
                }
            }), v(t, s, i)
        },
        UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function(e) {
            let {
                channelId: t,
                draftType: n
            } = e;
            v(t, n, [])
        },
        UPLOAD_ATTACHMENT_SET_UPLOADS: function(e) {
            let {
                channelId: t,
                uploads: n,
                draftType: s
            } = e;
            v(t, s, n)
        },
        UPLOAD_ATTACHMENT_SET_FILE: function(e) {
            let {
                channelId: t,
                id: n,
                file: s,
                draftType: i
            } = e, r = [...m(t, i)], a = r.filter(e => e.id !== n), o = new d.CloudUpload(s, t);
            o.upload(), a.push(o), v(t, i, a)
        },
        SIDEBAR_CLOSE: function(e) {
            let {
                baseChannelId: t
            } = e;
            v(t, l.DraftType.FirstThreadMessage, [])
        }
    })
}