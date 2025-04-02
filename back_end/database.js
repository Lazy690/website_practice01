const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("messages.db", (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to SQLite database.");
        db.run(`CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT,
            message TEXT
        )`);
    }
});

module.exports = db;
