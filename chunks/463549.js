function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getLocationDataForEvent: function() {
            return i
        }
    });
    var l = n("974901"),
        a = n("790155"),
        r = n("934198");

    function i(e, t) {
        if (null == e) return null;
        var n, i, o = (0, r.getLocationFromEvent)(e);
        if (null != o) n = a.default, i = o;
        else {
            if (null == t) return null;
            n = (0, l.getSimpleChannelIconComponent)(t.type), i = t.name
        }
        return {
            IconComponent: n,
            locationName: i
        }
    }
}