function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007"), n("860677");
    var l = n("446674"),
        i = n("913144"),
        a = n("377253");
    let s = Object.freeze([]),
        r = {},
        o = {},
        u = {},
        d = {},
        c = {};

    function f(e, t) {}

    function m() {
        c = {}
    }

    function p(e, t) {
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
        let l = u[t.id];
        null != l && null != d[l.id] && (d[l.id] = {
            ...d[l.id],
            ...t
        })
    }
    class E extends l.default.Store {
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
    E.displayName = "UploadStore";
    var g = new E(i.default, {
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
                file: l,
                uploader: i,
                message: a
            } = e;
            if (i._aborted || i._errored) return;
            let c = null !== (t = r[n]) && void 0 !== t ? t : s;
            o[l.id] = i, r[n] = [...c, l], u[l.id] = a;
            let {
                items: f
            } = l;
            null != f && (d[a.id] = {
                ...l,
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
            return p(t, n.id)
        },
        UPLOAD_FAIL: function(e) {
            let {
                channelId: t,
                file: n
            } = e;
            return p(t, n.id)
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
            } = e, l = o[t.id];
            if (null == l) return !1;
            setImmediate(() => l.cancelItem(n))
        },
        UPLOAD_FILE_UPDATE: function(e) {
            let {
                channelId: t,
                file: n
            } = e, l = u[n.id];
            null != l && l.nonce, h(t, n)
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