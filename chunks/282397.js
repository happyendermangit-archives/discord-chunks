function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("47120");
    var s, a, o, l, u = n("442837"),
        d = n("570140"),
        _ = n("911969"),
        c = n("314897"),
        E = n("592125"),
        I = n("622449");
    let T = {},
        f = {},
        S = {};

    function h(e) {
        var t;
        if (null == e) return !1;
        let n = T[e];
        if (null == n) return !1;
        null === (t = n.onSuccess) || void 0 === t || t.call(n), A(e)
    }

    function A(e) {
        delete T[e];
        let t = S[e];
        null != t && delete f[t], delete S[e]
    }
    class m extends(s = u.default.Store) {
        getInteraction(e) {
            let t = f[e.id];
            return null != t ? T[t] : null
        }
        getMessageInteractionStates() {
            let e = {};
            for (let [t, n] of Object.entries(T)) {
                let i = S[t];
                null != i && (e[i] = n.state)
            }
            return e
        }
        canQueueInteraction(e, t) {
            let n = f[e];
            return (null == n || null == T[n] || T[n].state === I.InteractionState.FAILED) && (null == T[t] || T[t].state === I.InteractionState.FAILED) && !0
        }
        getIFrameModalApplicationId() {
            return r
        }
        getIFrameModalKey() {
            return i
        }
    }
    l = "InteractionStore", (o = "displayName") in(a = m) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new m(d.default, {
        LOGOUT: function() {
            T = {}, f = {}, S = {}
        },
        INTERACTION_QUEUE: function(e) {
            let {
                nonce: t,
                messageId: n,
                data: i,
                onCreate: r,
                onCancel: s,
                onSuccess: a,
                onFailure: o
            } = e;
            null != n && (f[n] = t, S[t] = n), T[t] = {
                state: I.InteractionState.QUEUED,
                data: i,
                onCreate: r,
                onCancel: s,
                onSuccess: a,
                onFailure: o
            }
        },
        INTERACTION_CREATE: function(e) {
            var t;
            let {
                nonce: n,
                interactionId: i
            } = e;
            if (null == n) return !1;
            let r = T[n];
            if (null == r || r.state !== I.InteractionState.QUEUED) return !1;
            r.state = I.InteractionState.CREATED, null === (t = r.onCreate) || void 0 === t || t.call(r, i)
        },
        INTERACTION_SUCCESS: function(e) {
            let {
                nonce: t
            } = e;
            h(t)
        },
        INTERACTION_FAILURE: function(e) {
            var t;
            let {
                nonce: n,
                errorCode: i,
                errorMessage: r
            } = e;
            if (null == n) return !1;
            let s = T[n];
            if (null == s) return !1;
            null === (t = s.onFailure) || void 0 === t || t.call(s, i, r), s.data.interactionType === _.InteractionTypes.APPLICATION_COMMAND ? A(n) : T[n] = {
                ...s,
                state: I.InteractionState.FAILED,
                errorCode: i,
                errorMessage: r
            }
        },
        MESSAGE_CREATE: function(e) {
            let {
                message: t
            } = e;
            if (null == t.nonce) return !1;
            {
                var n;
                let e = T[t.nonce];
                if (null == e) return !1;
                null === (n = e.onSuccess) || void 0 === n || n.call(e), A(t.nonce)
            }
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == E.default.getChannel(t)) return !1;
            for (let [e, t] of Object.entries(T)) t.state === I.InteractionState.FAILED && A(e)
        },
        INTERACTION_IFRAME_MODAL_CREATE: function(e) {
            let {
                application: t
            } = e;
            r = t.id
        },
        INTERACTION_IFRAME_MODAL_CLOSE: function() {
            i = void 0, r = void 0
        },
        INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
            let {
                modalKey: t
            } = e;
            i = t
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
            let {
                participants: t
            } = e, n = c.default.getSessionId(), i = c.default.getId(), r = t.find(e => e.user_id === i && e.session_id === n);
            null != r && null != r.nonce && h(r.nonce)
        }
    })
}