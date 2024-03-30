function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        doesThreadMembersActionAffectMe: function() {
            return o
        }
    });
    var r = n("217014");

    function o(e) {
        var t, n, o = r.default.getId();
        return null != o && (!!((null === (t = e.removedMemberIds) || void 0 === t ? void 0 : t.includes(o)) || (null === (n = e.addedMembers) || void 0 === n ? void 0 : n.some(function(e) {
            return e.userId === o
        }))) || !1)
    }
}