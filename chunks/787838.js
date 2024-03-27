function(e) {
    e.exports = function() {
        throw Error("Readable.from is not available in the browser")
    }
}