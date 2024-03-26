function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSubscribeGuildMembers: function() {
            return a
        }
    }), n("37983");
    var l = n("884691"),
        i = n("917351"),
        r = n.n(i);
    n("233736");
    var u = n("666020");

    function a(e) {
        l.useEffect(() => (r.forEach(e, (e, t) => (0, u.subscribeMembers)(t, e)), () => {
            r.forEach(e, (e, t) => (0, u.unsubscribeMembers)(t, e))
        }), [e])
    }
}