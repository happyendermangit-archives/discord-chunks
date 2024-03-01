function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        useSubscribeGuildMembers: function() {
            return o
        }
    }), i("37983");
    var n = i("884691"),
        r = i("917351"),
        l = i.n(r);
    i("233736");
    var u = i("666020");

    function o(e) {
        n.useEffect(() => (l.forEach(e, (e, t) => (0, u.subscribeMembers)(t, e)), () => {
            l.forEach(e, (e, t) => (0, u.unsubscribeMembers)(t, e))
        }), [e])
    }
}