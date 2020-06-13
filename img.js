app.get("/image.png", (req, res) => {
    res.sendFile(path.join(__dirname, "./uploads/image.png"));
  });