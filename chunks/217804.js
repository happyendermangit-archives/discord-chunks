function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getLocationDataForEvent: function() {
            return a
        }
    });
    var i = n("471445"),
        r = n("393112"),
        s = n("230900");

    function a(e, t) {
        let n, a;
        if (null == e) return null;
        let o = (0, s.getLocationFromEvent)(e);
        if (null != o) n = r.default, a = o;
        else {
            if (null == t) return null;
            n = (0, i.getSimpleChannelIconComponent)(t.type), a = t.name
        }
        return {
            IconComponent: n,
            locationName: a
        }
    }
}