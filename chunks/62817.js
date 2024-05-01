function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("177593");
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("375954");
    let d = Object.freeze([]),
        _ = {},
        c = {},
        E = {},
        I = {},
        T = {};

    function f(e, t) {}

    function S() {
        T = {}
    }

    function h(e, t) {
        let n = _[e];
        return null != n && (_[e] = n.filter(e => e.id !== t), delete c[t], delete E[t], n.length !== _[e].length)
    }

    function A(e, t) {
        let n = _[e];
        if (null == n) return !1;
        _[e] = n.map(e => e.id === t.id ? {
            ...e,
            ...t
        } : e);
        let i = E[t.id];
        null != i && null != I[i.id] && (I[i.id] = {
            ...I[i.id],
            ...t
        })
    }
    class m extends(i = o.default.Store) {
        initialize() {
            this.waitFor(u.default)
        }
        getFiles(e) {
            var t;
            return null !== (t = _[e]) && void 0 !== t ? t : d
        }
        getMessageForFile(e) {
            return E[e]
        }
        getUploaderFileForMessageId(e) {
            return I[e]
        }
        getUploadAttachments(e) {
            if (null != e) return T[e]
        }
    }
    s = "UploadStore", (a = "displayName") in(r = m) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new m(l.default, {
        CONNECTION_OPEN: function() {
            T = {}
        },
        LOGOUT: function() {
            T = {}
        },
        UPLOAD_START: function(e) {
            var t;
            let {
                channelId: n,
                file: i,
                uploader: r,
                message: a
            } = e;
            if (r._aborted || r._errored) return;
            let s = null !== (t = _[n]) && void 0 !== t ? t : d;
            c[i.id] = r, _[n] = [...s, i], E[i.id] = a;
            let {
                items: o
            } = i;
            null != o && (I[a.id] = {
                ...i,
                items: o
            }), a.nonce
        },
        UPLOAD_COMPRESSION_PROGRESS: function(e) {
            let {
                channelId: t,
                file: n
            } = e;
            A(t, n)
        },
        UPLOAD_PROGRESS: function(e) {
            let {
                channelId: t,
                file: n
            } = e;
            A(t, n)
        },
        UPLOAD_COMPLETE: function(e) {
            let {
                channelId: t,
                file: n
            } = e;
            return h(t, n.id)
        },
        UPLOAD_FAIL: function(e) {
            let {
                channelId: t,
                file: n
            } = e;
            return h(t, n.id)
        },
        UPLOAD_CANCEL_REQUEST: function(e) {
            let {
                file: t
            } = e, n = c[t.id];
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
            } = e, i = c[t.id];
            if (null == i) return !1;
            setImmediate(() => i.cancelItem(n))
        },
        UPLOAD_FILE_UPDATE: function(e) {
            let {
                channelId: t,
                file: n
            } = e, i = E[n.id];
            null != i && i.nonce, A(t, n)
        },
        UPLOAD_RESTORE_FAILED_UPLOAD: function(e) {
            let {
                file: t,
                messageId: n
            } = e;
            I[n] = t
        }
    })
}