function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("668781"),
        c = n("141795"),
        E = n("596956"),
        I = n("703558"),
        T = n("981631"),
        f = n("689938");
    let S = new Map,
        h = [];

    function A(e, t) {
        var n, i;
        return null !== (i = null === (n = m(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== i ? i : h
    }

    function m(e) {
        var t;
        return null !== (t = S.get(e)) && void 0 !== t ? t : new Map
    }

    function N(e, t, n) {
        let i = m(e);
        i.set(t, n), S.set(e, i)
    }
    class p extends(i = u.default.Store) {
        getFirstUpload(e, t) {
            let n = A(e, t);
            return n.length > 0 ? n[0] : null
        }
        hasAdditionalUploads(e, t) {
            var n;
            return (null !== (n = A(e, t).length) && void 0 !== n ? n : 0) > 1
        }
        getUploads(e, t) {
            return A(e, t)
        }
        getUploadCount(e, t) {
            var n;
            return null !== (n = A(e, t).length) && void 0 !== n ? n : 0
        }
        getUpload(e, t, n) {
            return A(e, n).find(e => e.id === t)
        }
        findUpload(e, t, n) {
            return A(e, t).find(n)
        }
    }
    a = "UploadAttachmentStore", (s = "displayName") in(r = p) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new p(d.default, {
        UPLOAD_ATTACHMENT_POP_FILE: function(e) {
            let {
                channelId: t
            } = e, n = [...A(t, I.DraftType.ChannelMessage)];
            n.shift(), N(t, I.DraftType.ChannelMessage, n)
        },
        UPLOAD_ATTACHMENT_ADD_FILES: e => {
            let {
                files: t,
                channelId: n,
                showLargeMessageDialog: i,
                draftType: r
            } = e, s = [...A(n, r)];
            if (s.length + t.length > T.MAX_UPLOAD_COUNT && r !== I.DraftType.SlashCommand && r !== I.DraftType.ApplicationLauncherCommand) {
                _.default.show({
                    title: f.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                    body: f.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                        limit: T.MAX_UPLOAD_COUNT
                    })
                });
                return
            }
            l().forEach(t, e => {
                let t = new c.CloudUpload(e, n, i, s.length);
                t.upload(), s.push(t)
            }), N(n, r, s)
        },
        UPLOAD_ATTACHMENT_UPDATE_FILE: function(e) {
            let {
                channelId: t,
                id: n,
                filename: i,
                description: r,
                spoiler: s,
                thumbnail: a,
                draftType: o
            } = e, l = [...A(t, o)].map(e => (e.id === n && (void 0 !== i && (e.filename = i), void 0 !== s && (e.spoiler = s), void 0 !== r && (e.description = r), void 0 !== a && (e.isThumbnail = a)), e));
            N(t, o, l)
        },
        UPLOAD_ATTACHMENT_REMOVE_FILE: function(e) {
            let {
                channelId: t,
                id: n,
                draftType: i
            } = e, r = [...A(t, i)], s = r.findIndex(e => (0, E.doesImageMatchUpload)({
                uri: n,
                filename: n
            }, e));
            s > -1 && (r.splice(s, 1)[0].cancel(), N(t, i, r))
        },
        UPLOAD_ATTACHMENT_REMOVE_FILES: function(e) {
            let {
                channelId: t,
                attachmentIds: n,
                draftType: i
            } = e, r = [...A(t, i)];
            n.forEach(e => {
                let t = r.findIndex(t => e === t.id);
                t > -1 && r.splice(t, 1)[0].cancel()
            }), N(t, i, r)
        },
        UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function(e) {
            let {
                channelId: t,
                draftType: n
            } = e;
            N(t, n, [])
        },
        UPLOAD_ATTACHMENT_SET_UPLOADS: function(e) {
            let {
                channelId: t,
                uploads: n,
                draftType: i
            } = e;
            N(t, i, n)
        },
        UPLOAD_ATTACHMENT_SET_FILE: function(e) {
            let {
                channelId: t,
                id: n,
                file: i,
                draftType: r
            } = e, s = [...A(t, r)].filter(e => e.id !== n), a = new c.CloudUpload(i, t);
            a.upload(), s.push(a), N(t, r, s)
        },
        SIDEBAR_CLOSE: function(e) {
            let {
                baseChannelId: t
            } = e;
            N(t, I.DraftType.FirstThreadMessage, [])
        }
    })
}