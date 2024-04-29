function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelIconURL: function() {
            return r
        }
    }), n("47120");
    var s = n("594174"),
        a = n("768581"),
        l = n("823379"),
        i = n("981631");

    function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
            n = arguments.length > 2 ? arguments[2] : void 0;
        switch (e.type) {
            case i.ChannelTypes.DM:
                let [r] = e.recipients.map(s.default.getUser).filter(l.isNotNullish);
                if (null == r) return null;
                return r.getAvatarURL(void 0, t, n);
            case i.ChannelTypes.GROUP_DM:
                return a.default.getChannelIconURL({
                    id: e.id,
                    icon: e.icon,
                    applicationId: e.getApplicationId(),
                    size: t
                })
        }
    }
}