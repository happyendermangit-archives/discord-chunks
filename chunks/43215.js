function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("217014"),
        a = n("256768"),
        u = n("281767"),
        s = n("941504");

    function l(e, t, n) {
        if (null == e || null == t) return {
            valid: !1,
            reason: s.default.Messages.BUILD_OVERRIDE_INVALID
        };
        var r = e.releaseChannel,
            l = e.expiresAt,
            c = e.validForUserIds,
            f = e.allowedVersions,
            d = Object.keys(e.targetBuildOverride);
        if (0 === o().intersection(d, t).length) return {
            valid: !1,
            reason: s.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_TARGETS.format({
                requestedTargets: d.map(function(e) {
                    var t;
                    return null !== (t = a.BUILD_OVERRIDE_TARGET_NAMES[e]) && void 0 !== t ? t : "unknown"
                }).join(", ")
            })
        };
        if (null != r && r !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
            var _ = r === u.PublicReleaseChannels.PTB ? r.toUpperCase() : "".concat(r.charAt(0).toUpperCase()).concat(r.slice(1));
            return {
                valid: !1,
                reason: s.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({
                    releaseChannel: _
                })
            }
        }
        if (null != f && (null == n || !f.includes(n))) return {
            valid: !1,
            reason: s.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({
                releaseChannel: f.join(", ")
            })
        };
        var E = null != l ? new Date(l).getTime() : null;
        return null != E && E < Date.now() ? {
            valid: !1,
            reason: s.default.Messages.BUILD_OVERRIDE_EXPIRED
        } : c.length > 0 && !c.includes(i.default.getId()) ? {
            valid: !1,
            reason: s.default.Messages.BUILD_OVERRIDE_INVALID_USER
        } : {
            valid: !0
        }
    }
}