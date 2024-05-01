function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getBuildPlatform: function() {
            return o
        }
    }), n("411104");
    var i, r, a = n("358085"),
        s = n("981631");

    function o() {
        switch ((0, a.getPlatform)()) {
            case a.PlatformTypes.WINDOWS:
                let e = "x86";
                if (null != window.DiscordNative && (e = window.DiscordNative.os.arch), "x86" === e || "ia32" === e) return s.BuildPlatformTypes.WIN32;
                return s.BuildPlatformTypes.WIN64;
            case a.PlatformTypes.OSX:
                return s.BuildPlatformTypes.MACOS;
            case a.PlatformTypes.LINUX:
                return s.BuildPlatformTypes.LINUX;
            default:
                throw Error("Unsupported build type")
        }
    }(r = i || (i = {})).X86 = "x86", r.IA32 = "ia32"
}