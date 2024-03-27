function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("47120");
    var s, a, o, l, u = n("442837"),
        d = n("570140"),
        _ = n("911969"),
        c = n("592125"),
        E = n("622449");
    let I = {},
        T = {},
        f = {};

    function S(e) {
        delete I[e];
        let t = f[e];
        null != t && delete T[t], delete f[e]
    }
    class h extends(s = u.default.Store) {
        getInteraction(e) {
            let t = T[e.id];
            return null != t ? I[t] : null
        }
        getMessageInteractionStates() {
            let e = {};
            for (let [t, n] of Object.entries(I)) {
                let i = f[t];
                null != i && (e[i] = n.state)
            }
            return e
        }
        canQueueInteraction(e, t) {
            let n = T[e];
            return (null == n || null == I[n] || I[n].state === E.InteractionState.FAILED) && (null == I[t] || I[t].state === E.InteractionState.FAILED) && !0
        }
        getIFrameModalApplicationId() {
            return r
        }
        getIFrameModalKey() {
            return i
        }
    }
    l = "InteractionStore", (o = "displayName") in(a = h) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new h(d.default, {
        LOGOUT: function() {
            I = {}, T = {}, f = {}
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
            null != n && (T[n] = t, f[t] = n), I[t] = {
                state: E.InteractionState.QUEUED,
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
            let r = I[n];
            if (null == r || r.state !== E.InteractionState.QUEUED) return !1;
            r.state = E.InteractionState.CREATED, null === (t = r.onCreate) || void 0 === t || t.call(r, i)
        },
        INTERACTION_SUCCESS: function(e) {
            var t;
            let {
                nonce: n
            } = e;
            if (null == n) return !1;
            let i = I[n];
            if (null == i) return !1;
            null === (t = i.onSuccess) || void 0 === t || t.call(i), S(n)
        },
        INTERACTION_FAILURE: function(e) {
            var t;
            let {
                nonce: n,
                errorCode: i,
                errorMessage: r
            } = e;
            if (null == n) return !1;
            let s = I[n];
            if (null == s) return !1;
            null === (t = s.onFailure) || void 0 === t || t.call(s, i, r), s.data.interactionType === _.InteractionTypes.APPLICATION_COMMAND ? S(n) : I[n] = {
                ...s,
                state: E.InteractionState.FAILED,
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
                let e = I[t.nonce];
                if (null == e) return !1;
                null === (n = e.onSuccess) || void 0 === n || n.call(e), S(t.nonce)
            }
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == c.default.getChannel(t)) return !1;
            for (let [e, t] of Object.entries(I)) t.state === E.InteractionState.FAILED && S(e)
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
        }
    })
}