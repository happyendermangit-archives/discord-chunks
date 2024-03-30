function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMemberSupplementalByGuildId: function() {
            return i
        },
        syncMemberSupplemental: function() {
            return a
        }
    });
    var r = n("714918"),
        o = {};

    function i(e) {
        return null == o[e] && (o[e] = {}), o[e]
    }

    function a(e, t) {
        if (0 === t.length) return !1;
        var n = i(e);
        return t.forEach(function(e) {
            var t, o, i, a, u, s, l, c, f = n[e.userId],
                d = null !== (o = null !== (t = e.joinSourceType) && void 0 !== t ? t : null == f ? void 0 : f.joinSourceType) && void 0 !== o ? o : null;
            (null == d || d === r.JoinSourceType.UNSPECIFIED) && null != e.sourceInviteCode && (d = r.JoinSourceType.INVITE), n[e.userId] = {
                userId: e.userId,
                sourceInviteCode: null !== (a = null !== (i = e.sourceInviteCode) && void 0 !== i ? i : null == f ? void 0 : f.sourceInviteCode) && void 0 !== a ? a : null,
                joinSourceType: d,
                inviterId: null !== (s = null !== (u = e.inviterId) && void 0 !== u ? u : null == f ? void 0 : f.inviterId) && void 0 !== s ? s : null,
                integrationType: null !== (c = null !== (l = e.integrationType) && void 0 !== l ? l : null == f ? void 0 : f.integrationType) && void 0 !== c ? c : null
            }
        }), !0
    }
}