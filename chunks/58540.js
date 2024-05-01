function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSubscribeGuildMembers: function() {
            return o
        }
    }), n("735250");
    var i = n("470079"),
        r = n("392711"),
        s = n.n(r);
    n("902704");
    var a = n("941028");

    function o(e) {
        i.useEffect(() => (s().forEach(e, (e, t) => (0, a.subscribeMembers)(t, e)), () => {
            s().forEach(e, (e, t) => (0, a.unsubscribeMembers)(t, e))
        }), [e])
    }
}