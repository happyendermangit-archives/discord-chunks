function(e, l, t) {
    "use strict";
    t.r(l), t.d(l, {
        getLocationDataForEvent: function() {
            return a
        }
    });
    var n = t("471445"),
        s = t("393112"),
        i = t("230900");

    function a(e, l) {
        let t, a;
        if (null == e) return null;
        let o = (0, i.getLocationFromEvent)(e);
        if (null != o) t = s.default, a = o;
        else {
            if (null == l) return null;
            t = (0, n.getSimpleChannelIconComponent)(l.type), a = l.name
        }
        return {
            IconComponent: t,
            locationName: a
        }
    }
}