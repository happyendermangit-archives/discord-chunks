function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return d
        }
    });
    var n = r("917351"),
        l = r.n(n),
        i = r("271938"),
        a = r("180855"),
        s = r("49111"),
        u = r("782340");

    function d(e, t, r) {
        if (null == e || null == t) return {
            valid: !1,
            reason: u.default.Messages.BUILD_OVERRIDE_INVALID
        };
        let {
            releaseChannel: n,
            expiresAt: d,
            validForUserIds: o,
            allowedVersions: c,
            targetBuildOverride: f
        } = e, v = Object.keys(f);
        if (0 === l.intersection(v, t).length) return {
            valid: !1,
            reason: u.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_TARGETS.format({
                requestedTargets: v.map(e => {
                    var t;
                    return null !== (t = a.BUILD_OVERRIDE_TARGET_NAMES[e]) && void 0 !== t ? t : "unknown"
                }).join(", ")
            })
        };
        if (null != n && n !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
            let e = n === s.PublicReleaseChannels.PTB ? n.toUpperCase() : "".concat(n.charAt(0).toUpperCase()).concat(n.slice(1));
            return {
                valid: !1,
                reason: u.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({
                    releaseChannel: e
                })
            }
        }
        if (null != c && (null == r || !c.includes(r))) return {
            valid: !1,
            reason: u.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({
                releaseChannel: c.join(", ")
            })
        };
        let g = null != d ? new Date(d).getTime() : null;
        return null != g && g < Date.now() ? {
            valid: !1,
            reason: u.default.Messages.BUILD_OVERRIDE_EXPIRED
        } : o.length > 0 && !o.includes(i.default.getId()) ? {
            valid: !1,
            reason: u.default.Messages.BUILD_OVERRIDE_INVALID_USER
        } : {
            valid: !0
        }
    }
}