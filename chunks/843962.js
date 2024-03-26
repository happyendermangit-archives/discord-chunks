function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelIconURL: function() {
            return i
        }
    }), n("222007");
    var s = n("697218"),
        a = n("315102"),
        l = n("449008"),
        r = n("49111");

    function i(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
            n = arguments.length > 2 ? arguments[2] : void 0;
        switch (e.type) {
            case r.ChannelTypes.DM:
                let [i] = e.recipients.map(s.default.getUser).filter(l.isNotNullish);
                if (null == i) return null;
                return i.getAvatarURL(void 0, t, n);
            case r.ChannelTypes.GROUP_DM:
                return a.default.getChannelIconURL({
                    id: e.id,
                    icon: e.icon,
                    applicationId: e.getApplicationId(),
                    size: t
                })
        }
    }
}