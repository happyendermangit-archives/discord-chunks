function(e, l, n) {
    "use strict";
    n.r(l), n.d(l, {
        getLocationDataForEvent: function() {
            return i
        }
    });
    var t = n("419830"),
        s = n("718550"),
        a = n("841363");

    function i(e, l) {
        let n, i;
        if (null == e) return null;
        let u = (0, a.getLocationFromEvent)(e);
        if (null != u) n = s.default, i = u;
        else {
            if (null == l) return null;
            n = (0, t.getSimpleChannelIconComponent)(l.type), i = l.name
        }
        return {
            IconComponent: n,
            locationName: i
        }
    }
}