function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createImageFromImageData: function() {
            return i
        },
        createThumbnailFromVideo: function() {
            return l
        }
    }), n("70102");
    var a = n("80028");

    function i(e) {
        let t = document.createElement("canvas");
        t.width = e.width, t.height = e.height;
        let n = t.getContext("2d");
        if (null == n) throw Error("Could not create canvas context");
        return n.putImageData(new ImageData(e.data, e.width, e.height), 0, 0), t.toDataURL("image/jpeg", .9)
    }
    async function l(e, t) {
        let n = document.createElement("video");
        n.muted = !0, n.src = e, n.currentTime = t, await n.play(), n.pause();
        let i = a.CLIPS_THUMBNAIL_MAX_WIDTH / n.videoWidth,
            l = a.CLIPS_THUMBNAIL_MAX_HEIGHT / n.videoHeight,
            r = Math.min(i, l),
            s = n.videoWidth * r,
            u = n.videoHeight * r,
            d = document.createElement("canvas");
        d.width = s, d.height = u;
        let o = d.getContext("2d");
        if (null == o) throw Error("Could not create canvas context");
        return o.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, s, u), d.toDataURL("image/jpeg", .9)
    }
}