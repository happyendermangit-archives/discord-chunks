function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutoArchiveDuration: function() {
            return l
        },
        getAutoArchiveOptions: function() {
            return o
        }
    });
    var i = n("404759"),
        r = n.n(i);
    n("913527");
    var a = n("124368"),
        s = n("689938");

    function o() {
        return [{
            label: s.default.Messages.AUTO_ARCHIVE_DURATION_1_HOUR,
            value: 60
        }, {
            label: s.default.Messages.AUTO_ARCHIVE_DURATION_24_HOURS,
            value: 1440
        }, {
            label: s.default.Messages.AUTO_ARCHIVE_DURATION_3_DAYS,
            value: 4320
        }, {
            label: s.default.Messages.AUTO_ARCHIVE_DURATION_1_WEEK,
            value: 10080
        }]
    }

    function l(e, t) {
        var n;
        return null !== (n = null != t ? t : null == e ? void 0 : e.defaultAutoArchiveDuration) && void 0 !== n ? n : a.DEFAULT_AUTO_ARCHIVE_DURATION
    }
    r()(() => o().map(e => e.value))
}