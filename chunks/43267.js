function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        getChannelIconURL: function() {
            return r
        }
    }), s("47120");
    var n = s("594174"),
        a = s("768581"),
        l = s("823379"),
        i = s("981631");

    function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
            s = arguments.length > 2 ? arguments[2] : void 0;
        switch (e.type) {
            case i.ChannelTypes.DM:
                let [r] = e.recipients.map(n.default.getUser).filter(l.isNotNullish);
                if (null == r) return null;
                return r.getAvatarURL(void 0, t, s);
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