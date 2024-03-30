function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getBuildPlatform: function() {
            return u
        }
    });
    var r, o, i = n("374550"),
        a = n("281767");

    function u() {
        switch ((0, i.getPlatform)()) {
            case i.PlatformTypes.WINDOWS:
                var e = "x86";
                if (null != window.DiscordNative && (e = window.DiscordNative.os.arch), "x86" === e || "ia32" === e) return a.BuildPlatformTypes.WIN32;
                return a.BuildPlatformTypes.WIN64;
            case i.PlatformTypes.OSX:
                return a.BuildPlatformTypes.MACOS;
            case i.PlatformTypes.LINUX:
                return a.BuildPlatformTypes.LINUX;
            default:
                throw Error("Unsupported build type")
        }
    }(r = o || (o = {})).X86 = "x86", r.IA32 = "ia32"
}