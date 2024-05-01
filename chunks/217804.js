function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getLocationDataForEvent: function() {
            return s
        }
    });
    var i = n("471445"),
        r = n("393112"),
        a = n("230900");

    function s(e, t) {
        let n, s;
        if (null == e) return null;
        let o = (0, a.getLocationFromEvent)(e);
        if (null != o) n = r.default, s = o;
        else {
            if (null == t) return null;
            n = (0, i.getSimpleChannelIconComponent)(t.type), s = t.name
        }
        return {
            IconComponent: n,
            locationName: s
        }
    }
}