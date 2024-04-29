function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CUSTOM_NOTIFICATION_SOUNDS_ASMR_STORAGE_KEY: function() {
            return o
        },
        CUSTOM_NOTIFICATION_SOUNDS_DISCODO_STORAGE_KEY: function() {
            return l
        },
        Soundpacks: function() {
            return i
        },
        getCustomNotificationSoundpackOptions: function() {
            return u
        },
        getSoundpackOptionsAprilFools2023: function() {
            return d
        }
    }), n("47120"), n("653041");
    var i, r, s = n("433517"),
        a = n("689938");
    (r = i || (i = {})).CLASSIC = "classic", r.DETUNE = "detune", r.RETRO = "retro", r.BUBBLE = "bop", r.DUCKY = "ducky", r.LOFI = "lofi", r.ASMR = "asmr", r.DISCODO = "discodo";
    let o = "custom_notification_sounds_asmr",
        l = "custom_notification_sounds_discodo";

    function u() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = function(e) {
                if (!e) return [];
                let t = [];
                return s.Storage.get(l, !1) && t.push({
                    value: "discodo",
                    label: "DISCODO",
                    description: "๑(◕‿◕)๑",
                    requirePremium: !0
                }), s.Storage.get(o, !1) && t.push({
                    value: "asmr",
                    label: "ASMR",
                    description: "*hey there*",
                    requirePremium: !0
                }), t
            }(e);
        return [{
            value: "classic",
            label: a.default.Messages.SOUNDPACK_DEFAULT_LABEL,
            description: a.default.Messages.SOUNDPACK_DEFAULT_DESCRIPTION,
            requirePremium: !1
        }, {
            value: "retro",
            label: a.default.Messages.SOUNDPACK_RETRO_LABEL,
            description: a.default.Messages.SOUNDPACK_RETRO_DESCRIPTION,
            requirePremium: !0
        }, {
            value: "lofi",
            label: a.default.Messages.SOUNDPACK_LOFI_LABEL,
            description: a.default.Messages.SOUNDPACK_LOFI_DESCRIPTION,
            requirePremium: !0
        }, {
            value: "ducky",
            label: a.default.Messages.SOUNDPACK_DUCKY_LABEL,
            description: a.default.Messages.SOUNDPACK_DUCKY_DESCRIPTION,
            requirePremium: !0
        }, {
            value: "bop",
            label: a.default.Messages.SOUNDPACK_BUBBLE_LABEL,
            description: a.default.Messages.SOUNDPACK_BUBBLE_DESCRIPTION,
            requirePremium: !0
        }, ...t]
    }

    function d() {
        return [{
            value: "classic",
            label: a.default.Messages.SOUNDPACK_CLASSIC_LABEL
        }, {
            value: "detune",
            label: a.default.Messages.SOUNDPACK_DETUNE_LABEL
        }]
    }
}