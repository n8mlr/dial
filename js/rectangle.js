class Rectangle {
    constructor(x, y, width, height, label) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.label = label;
    }

    /**
     * Returns the area of intersection with another rectangle
     */
    calcIntersectArea(rect) {
        // Take the difference in x and y vector lengths
        let dx = Math.min(this.x + this.width, rect.x + rect.width) - Math.max(this.x, rect.x);
        let dy = Math.min(this.y + this.height, rect.y + rect.height) - Math.max(this.y, rect.y);

        // Intersection exists if the difference is greater than zero
        return Math.max(0, dx) * Math.max(0, dy);
    }
}