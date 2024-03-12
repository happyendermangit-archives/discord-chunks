function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutoArchiveOptions: function() {
            return s
        },
        getAutoArchiveDuration: function() {
            return r
        }
    });
    var i = n("661201"),
        l = n.n(i);
    n("866227");
    var a = n("648564"),
        o = n("782340");

    function s() {
        return [{
            label: o.default.Messages.AUTO_ARCHIVE_DURATION_1_HOUR,
            value: 60
        }, {
            label: o.default.Messages.AUTO_ARCHIVE_DURATION_24_HOURS,
            value: 1440
        }, {
            label: o.default.Messages.AUTO_ARCHIVE_DURATION_3_DAYS,
            value: 4320
        }, {
            label: o.default.Messages.AUTO_ARCHIVE_DURATION_1_WEEK,
            value: 10080
        }]
    }

    function r(e, t) {
        var n;
        return null !== (n = null != t ? t : null == e ? void 0 : e.defaultAutoArchiveDuration) && void 0 !== n ? n : a.DEFAULT_AUTO_ARCHIVE_DURATION
    }
    l(() => s().map(e => e.value))
}