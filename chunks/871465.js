function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Soundpacks: function() {
            return r
        },
        getCustomNotificationSoundpackOptions: function() {
            return a
        },
        getSoundpackOptionsAprilFools2023: function() {
            return o
        }
    });
    var i, r, s = n("689938");

    function a() {
        return [{
            value: "classic",
            label: s.default.Messages.SOUNDPACK_DEFAULT_LABEL,
            description: s.default.Messages.SOUNDPACK_DEFAULT_DESCRIPTION,
            requirePremium: !1
        }, {
            value: "retro",
            label: s.default.Messages.SOUNDPACK_RETRO_LABEL,
            description: s.default.Messages.SOUNDPACK_RETRO_DESCRIPTION,
            requirePremium: !0
        }, {
            value: "lofi",
            label: s.default.Messages.SOUNDPACK_LOFI_LABEL,
            description: s.default.Messages.SOUNDPACK_LOFI_DESCRIPTION,
            requirePremium: !0
        }, {
            value: "ducky",
            label: s.default.Messages.SOUNDPACK_DUCKY_LABEL,
            description: s.default.Messages.SOUNDPACK_DUCKY_DESCRIPTION,
            requirePremium: !0
        }, {
            value: "bop",
            label: s.default.Messages.SOUNDPACK_BUBBLE_LABEL,
            description: s.default.Messages.SOUNDPACK_BUBBLE_DESCRIPTION,
            requirePremium: !0
        }]
    }

    function o() {
        return [{
            value: "classic",
            label: s.default.Messages.SOUNDPACK_CLASSIC_LABEL
        }, {
            value: "detune",
            label: s.default.Messages.SOUNDPACK_DETUNE_LABEL
        }]
    }(i = r || (r = {})).CLASSIC = "classic", i.DETUNE = "detune", i.RETRO = "retro", i.BUBBLE = "bop", i.DUCKY = "ducky", i.LOFI = "lofi"
}