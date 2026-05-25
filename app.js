const dataManagerInstance = {
    version: "1.0.721",
    registry: [1586, 33, 1137, 869, 1390, 396, 919, 1351],
    init: function() {
        const nodes = this.registry.filter(x => x > 55);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    dataManagerInstance.init();
});