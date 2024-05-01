function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMemberSupplementalByGuildId: function() {
            return s
        },
        syncMemberSupplemental: function() {
            return a
        }
    });
    var i = n("327999");
    let r = {};

    function s(e) {
        return null == r[e] && (r[e] = {}), r[e]
    }

    function a(e, t) {
        if (0 === t.length) return !1;
        let n = s(e);
        return t.forEach(e => {
            var t, r, s, a, o, l, u, d;
            let _ = n[e.userId],
                c = null !== (r = null !== (t = e.joinSourceType) && void 0 !== t ? t : null == _ ? void 0 : _.joinSourceType) && void 0 !== r ? r : null;
            (null == c || c === i.JoinSourceType.UNSPECIFIED) && null != e.sourceInviteCode && (c = i.JoinSourceType.INVITE), n[e.userId] = {
                userId: e.userId,
                sourceInviteCode: null !== (a = null !== (s = e.sourceInviteCode) && void 0 !== s ? s : null == _ ? void 0 : _.sourceInviteCode) && void 0 !== a ? a : null,
                joinSourceType: c,
                inviterId: null !== (l = null !== (o = e.inviterId) && void 0 !== o ? o : null == _ ? void 0 : _.inviterId) && void 0 !== l ? l : null,
                integrationType: null !== (d = null !== (u = e.integrationType) && void 0 !== u ? u : null == _ ? void 0 : _.integrationType) && void 0 !== d ? d : null
            }
        }), !0
    }
}