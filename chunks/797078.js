function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSubscribeGuildMembers: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("392711"),
        i = n.n(o);
    n("252546");
    var a = n("128243");

    function u(e) {
        r.useEffect(function() {
            return i().forEach(e, function(e, t) {
                    return (0, a.subscribeMembers)(t, e)
                }),
                function() {
                    i().forEach(e, function(e, t) {
                        return (0, a.unsubscribeMembers)(t, e)
                    })
                }
        }, [e])
    }
}