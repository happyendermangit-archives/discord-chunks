function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007"), n("860677");
    var i = n("446674"),
        l = n("913144"),
        a = n("377253");
    let s = Object.freeze([]),
        r = {},
        o = {},
        u = {},
        d = {},
        c = {};

    function f(e, t) {}

    function p() {
        c = {}
    }

    function m(e, t) {
        let n = r[e];
        return null != n && (r[e] = n.filter(e => e.id !== t), delete o[t], delete u[t], n.length !== r[e].length)
    }

    function h(e, t) {
        let n = r[e];
        if (null == n) return !1;
        r[e] = n.map(e => e.id === t.id ? {
            ...e,
            ...t
        } : e);
        let i = u[t.id];
        null != i && null != d[i.id] && (d[i.id] = {
            ...d[i.id],
            ...t
        })
    }
    class x extends i.default.Store {
        initialize() {
            this.waitFor(a.default)
        }
        getFiles(e) {
            var t;
            return null !== (t = r[e]) && void 0 !== t ? t : s
        }
        getMessageForFile(e) {
            return u[e]
        }
        getUploaderFileForMessageId(e) {
            return d[e]
        }
        getUploadAttachments(e) {
            if (null != e) return c[e]
        }
    }
    x.displayName = "UploadStore";
    var E = new x(l.default, {
        CONNECTION_OPEN: function() {
            c = {}
        },
        LOGOUT: function() {
            c = {}
        },
        UPLOAD_START: function(e) {
            var t;
            let {
                channelId: n,
                file: i,
                uploader: l,
                message: a
            } = e;
            if (l._aborted || l._errored) return;
            let c = null !== (t = r[n]) && void 0 !== t ? t : s;
            o[i.id] = l, r[n] = [...c, i], u[i.id] = a;
            let {
                items: f
            } = i;
            null != f && (d[a.id] = {
                ...i,
                items: f
            }), a.nonce
        },
        UPLOAD_COMPRESSION_PROGRESS: function(e) {
            let {
                channelId: t,
                file: n
            } = e;
            h(t, n)
        },
        UPLOAD_PROGRESS: function(e) {
            let {
                channelId: t,
                file: n
            } = e;
            h(t, n)
        },
        UPLOAD_COMPLETE: function(e) {
            let {
                channelId: t,
                file: n
            } = e;
            return m(t, n.id)
        },
        UPLOAD_FAIL: function(e) {
            let {
                channelId: t,
                file: n
            } = e;
            return m(t, n.id)
        },
        UPLOAD_CANCEL_REQUEST: function(e) {
            let {
                file: t
            } = e, n = o[t.id];
            if (null == n) return !1;
            setImmediate(() => {
                var e;
                return null === (e = n.cancel) || void 0 === e ? void 0 : e.call(n)
            })
        },
        UPLOAD_ITEM_CANCEL_REQUEST: function(e) {
            let {
                file: t,
                itemId: n
            } = e, i = o[t.id];
            if (null == i) return !1;
            setImmediate(() => i.cancelItem(n))
        },
        UPLOAD_FILE_UPDATE: function(e) {
            let {
                channelId: t,
                file: n
            } = e, i = u[n.id];
            null != i && i.nonce, h(t, n)
        },
        UPLOAD_RESTORE_FAILED_UPLOAD: function(e) {
            let {
                file: t,
                messageId: n
            } = e;
            d[n] = t
        }
    })
}