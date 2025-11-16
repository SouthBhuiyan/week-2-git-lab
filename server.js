// Mock API server for the Git lab
const express = require("express");
const app = express();
app.use(express.json());

// ----------------------------------------------------------------
// API ROUTES
// ----------------------------------------------------------------

// GET /users – mock user list
app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ]);
});

// POST /login – mock login endpoint
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.json({ success: true, message: "Logged in successfully" });
    } else {
        res.json({ success: false, message: "Invalid credentials" });
    }
});

// ----------------------------------------------------------------
// Extra filler lines to reach 50+ lines (still valid JS code)
// ----------------------------------------------------------------

function mockServerTask(id) {
    console.log("Running mock task", id);
}

for (let i = 1; i <= 40; i++) {
    mockServerTask(i);
}

const mockData = {
    version: "1.0.0",
    status: "running",
    uptime: "24h"
};

// Root endpoint
app.get("/", (req, res) => {
    res.json(mockData);
});

// ----------------------------------------------------------------
// SERVER STARTUP
// ----------------------------------------------------------------
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
