function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StaffPTOBar: function() {
            return m
        },
        useShouldShowPTONotice: function() {
            return A
        }
    }), n("47120");
    var i, r = n("735250");
    n("470079");
    var s = n("442837"),
        a = n("481060"),
        o = n("570140"),
        l = n("592125"),
        u = n("271383"),
        d = n("944486"),
        _ = n("594174"),
        c = n("696202"),
        E = n("689938"),
        I = n("987592");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let f = new Set;
    class S extends(i = s.default.PersistedStore) {
        initialize(e) {
            null != e && (f = new Set(e))
        }
        hasId(e) {
            return f.has(e)
        }
        getState() {
            return [...f]
        }
    }
    T(S, "displayName", "PTOStore"), T(S, "persistKey", "PTOStore");
    let h = new S(o.default, {}),
        A = e => (0, s.useStateFromStores)([u.default, _.default, h], () => {
            let t = _.default.getCurrentUser();
            if (null == t || !t.isStaff() || !e.isDM()) return !1;
            let n = _.default.getUser(e.getRecipientId());
            if (!(null == n ? void 0 : n.isStaff())) return !1;
            let i = u.default.getNicknames(n.id).some(e => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
            return i ? !h.hasId(n.id) && i : (f.delete(n.id) && h.emitChange(), !1)
        }),
        m = () => (0, r.jsxs)("div", {
            className: I.bar,
            children: [E.default.Messages.STAFF_PTO_NOTICE, (0, r.jsx)(a.Clickable, {
                className: I.closeButton,
                onClick: () => {
                    let e = d.default.getChannelId();
                    if (null == e) return;
                    let t = l.default.getChannel(e);
                    null != t && t.isPrivate() && !f.has(t.getRecipientId()) && (f.add(t.getRecipientId()), h.emitChange())
                },
                children: (0, r.jsx)(c.default, {
                    className: I.closeIcon
                })
            })]
        })
}