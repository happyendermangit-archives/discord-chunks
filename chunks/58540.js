function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSubscribeGuildMembers: function() {
            return o
        }
    }), n("735250");
    var i = n("470079"),
        r = n("392711"),
        a = n.n(r);
    n("902704");
    var s = n("941028");

    function o(e) {
        i.useEffect(() => (a().forEach(e, (e, t) => (0, s.subscribeMembers)(t, e)), () => {
            a().forEach(e, (e, t) => (0, s.unsubscribeMembers)(t, e))
        }), [e])
    }
}