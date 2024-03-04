function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getBuildPlatform: function() {
            return o
        }
    }), n("70102");
    var i, s, r = n("773336"),
        a = n("49111");

    function o() {
        switch ((0, r.getPlatform)()) {
            case r.PlatformTypes.WINDOWS:
                let e = "x86",
                    t = window.DiscordNative;
                if (null != t && (e = window.DiscordNative.os.arch), "x86" === e || "ia32" === e) return a.BuildPlatformTypes.WIN32;
                return a.BuildPlatformTypes.WIN64;
            case r.PlatformTypes.OSX:
                return a.BuildPlatformTypes.MACOS;
            case r.PlatformTypes.LINUX:
                return a.BuildPlatformTypes.LINUX;
            default:
                throw Error("Unsupported build type")
        }
    }(s = i || (i = {})).X86 = "x86", s.IA32 = "ia32"
}