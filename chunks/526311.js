function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        doesThreadMembersActionAffectMe: function() {
            return s
        }
    });
    var i = n("271938");

    function s(e) {
        var t, n;
        let s = i.default.getId();
        return null != s && (!!((null === (t = e.removedMemberIds) || void 0 === t ? void 0 : t.includes(s)) || (null === (n = e.addedMembers) || void 0 === n ? void 0 : n.some(e => e.userId === s))) || !1)
    }
}